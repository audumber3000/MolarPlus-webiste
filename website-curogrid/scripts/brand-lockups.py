"""
Builds the site's logo files from Curogrid Brand Kit v2.

The kit (Curogrid-Brand-Kit/01-logo/svg) has the plain lockups only. This
script makes what the site needs from them, and redraws nothing the kit
already draws: the mark and the "Curogrid" wordmark are copied path for
path out of the kit's SVGs.

  public/logo.svg, public/logo-reversed.svg
      The kit's horizontal `color` and `on-dark` lockups, cropped to the
      artwork. The kit's files carry their clear space inside the file,
      which would shrink the logo inside a 36px-high header.
  public/brand/lockups/<word>/{color,on-dark,small}.svg
      One edition per speciality ("Curogrid Physio"), as the app names
      it (lib/editions.ts). These are the wordmark and the speciality
      word only, without the mark: beside a speciality's name the mark
      made the header logo too big. The plain logo keeps the mark.
      The speciality word is the only new drawing: Red Hat Display, the
      wordmark's own face, at 72% of its size, bold, on the same
      baseline, in the edition's colour from app/globals.css
      (`--edition-<word>` on white, `--edition-<word>-on-dark` on dark).
      `small` is for the speciality tiles: the kit's small-size "grid"
      teal, #4A9A9D, as its README asks for small text.
  public/brand/lockups/general/small.svg
      "Curogrid" alone in the same small form, for the general tile.

Run it from website-curogrid/ after changing the kit or adding an
edition. It needs fontTools and the Red Hat Display variable font from
Google Fonts (ofl/redhatdisplay/RedHatDisplay[wght].ttf):

  python -I scripts/brand-lockups.py <kit 01-logo/svg folder> <RedHatDisplay[wght].ttf>
"""

import re
import sys
from pathlib import Path

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

KIT = Path(sys.argv[1])
FONT = Path(sys.argv[2])
ROOT = Path.cwd()
PUBLIC = ROOT / "public"

# The kit's own geometry (curogrid-logo-horizontal-*.svg).
PAD = 39.401  # clear space the kit puts inside its files
HEIGHT = 153.198  # artwork height: the mark is the tallest thing
BASELINE = 151.03  # the wordmark's baseline, in kit coordinates
WORD_X = 217.04  # where the wordmark starts
WORD_SIZE = 100  # the wordmark's size in kit units (unitsPerEm 1000 at 0.1)
TRACKING = -3.2  # per letter, measured off the kit: -0.032em

# The speciality word.
EDITION_SIZE = 72
EDITION_WEIGHT = 700
EDITION_TRACKING = -0.02 * EDITION_SIZE
GAP = 26  # from the "d" to the speciality word, ink to ink

SMALL_GRID = "#4A9A9D"  # the kit's "light-text-safe" teal

# lib/editions.ts: folder word -> the word in the lockup.
EDITIONS = {
    "paeds": "Paeds",
    "gynae": "Gynae",
    "derma": "Derma",
    "ent": "ENT",
    "physio": "Physio",
    "eye": "Eye",
    "ortho": "Ortho",
    "surgery": "Surgery",
    "diabetes": "Diabetes",
}


def edition_colours():
    css = (ROOT / "app/globals.css").read_text()
    out = {}
    for word in EDITIONS:
        light = re.search(rf"--edition-{word}:\s*(#[0-9a-fA-F]{{6}})", css)
        dark = re.search(rf"--edition-{word}-on-dark:\s*(#[0-9a-fA-F]{{6}})", css)
        if not (light and dark):
            sys.exit(f"app/globals.css has no literal --edition-{word} colour pair")
        out[word] = (light.group(1).upper(), dark.group(1).upper())
    return out


def kit_parts(name):
    """The mark group and the wordmark group, as the kit wrote them."""
    svg = (KIT / name).read_text()
    inner = re.search(r"<svg[^>]*>(.*)</svg>", svg, re.S).group(1)
    groups = re.findall(r"<g transform=.*?</g>", inner, re.S)
    if len(groups) != 2:
        sys.exit(f"{name}: expected a mark group and a wordmark group")
    return groups[0], groups[1]


class Face:
    def __init__(self, path, weight):
        self.font = instantiateVariableFont(TTFont(path), {"wght": weight})
        self.glyphs = self.font.getGlyphSet()
        self.cmap = self.font.getBestCmap()
        self.hmtx = self.font["hmtx"]
        self.upm = self.font["head"].unitsPerEm

    def text(self, word, size, tracking):
        """Outlined `word` from x=0 on the baseline, and its ink box
        [left, right, bottom, top] in font direction (y up)."""
        scale = size / self.upm
        pen_x, paths, ink = 0.0, [], [float("inf"), float("-inf"), float("inf"), float("-inf")]
        for ch in word:
            name = self.cmap[ord(ch)]
            svg_pen = SVGPathPen(self.glyphs)
            self.glyphs[name].draw(TransformPen(svg_pen, (scale, 0, 0, -scale, pen_x, 0)))
            paths.append(svg_pen.getCommands())
            bounds = BoundsPen(self.glyphs)
            self.glyphs[name].draw(TransformPen(bounds, (scale, 0, 0, scale, pen_x, 0)))
            if bounds.bounds:
                ink[0] = min(ink[0], bounds.bounds[0])
                ink[1] = max(ink[1], bounds.bounds[2])
                ink[2] = min(ink[2], bounds.bounds[1])
                ink[3] = max(ink[3], bounds.bounds[3])
            pen_x += self.hmtx[name][0] * scale + tracking
        return " ".join(paths), ink


def write(path, title, body, box):
    """`box` is the viewBox: x, y, width, height in kit coordinates."""
    path.parent.mkdir(parents=True, exist_ok=True)
    x, y, w, h = (round(v, 3) for v in box)
    path.write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x} {y} {w} {h}" '
        f'width="{round(w)}" height="{round(h)}" role="img"><title>{title}</title>{body}</svg>\n'
    )
    print(f"{path.relative_to(ROOT)}  {round(w)}x{round(h)}")


def main():
    face = Face(FONT, EDITION_WEIGHT)
    # The kit's wordmark is ExtraBold: measured here, drawn from the kit.
    _, mark_ink = Face(FONT, 800).text("Curogrid", WORD_SIZE, TRACKING)
    left, right = WORD_X + mark_ink[0], WORD_X + mark_ink[1]
    top, bottom = BASELINE - mark_ink[3], BASELINE - mark_ink[2]

    lockups = {
        "color": kit_parts("curogrid-logo-horizontal-color.svg"),
        "on-dark": kit_parts("curogrid-logo-horizontal-on-dark.svg"),
    }
    color_mark, color_word = lockups["color"]
    dark_mark, dark_word = lockups["on-dark"]
    small_word = color_word.replace('fill="#57A8AB"', f'fill="{SMALL_GRID}"')

    # The plain logo: the mark and the wordmark, the kit's clear space cut off.
    plain = (PAD, PAD, right - PAD + 1.0, HEIGHT)
    write(PUBLIC / "logo.svg", "Curogrid", color_mark + color_word, plain)
    write(PUBLIC / "logo-reversed.svg", "Curogrid", dark_mark + dark_word, plain)

    # Wordmark only, cut to the lettering, 1 unit of air all round.
    def word_box(ink_right):
        return (left - 1.0, top - 1.0, ink_right - left + 2.0, bottom - top + 2.0)

    write(PUBLIC / "brand/lockups/general/small.svg", "Curogrid", small_word, word_box(right))

    colours = edition_colours()
    for word, label in EDITIONS.items():
        d, ink = face.text(label, EDITION_SIZE, EDITION_TRACKING)
        x = right + GAP - ink[0]
        box = word_box(x + ink[1])
        light, dark = colours[word]
        title = f"Curogrid {label}"

        def edition_word(fill):
            return f'<g transform="translate({round(x, 3)},{BASELINE})"><path fill="{fill}" d="{d}"/></g>'

        folder = PUBLIC / "brand/lockups" / word
        write(folder / "color.svg", title, color_word + edition_word(light), box)
        write(folder / "on-dark.svg", title, dark_word + edition_word(dark), box)
        write(folder / "small.svg", title, small_word + edition_word(light), box)


main()
