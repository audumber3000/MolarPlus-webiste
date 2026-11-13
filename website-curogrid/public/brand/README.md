# Curogrid — Brand Kit v2

The mark is traced from the original artwork (outline match ~98%) and recoloured to the brand palette.

## Logo
- **Mark**: the folded "C" with a person inside. It replaces the old "+" grid symbol everywhere.
- **Wordmark**: "Curo" + "grid", Red Hat Display ExtraBold, converted to outlines (no font needed).
- **Lockups**: horizontal (default) and stacked, in 4 schemes:
  - `color`: white or light backgrounds (with the gradient fold)
  - `on-dark`: on #1A3C3E
  - `mono-dark` / `mono-white`: one colour, for print, stamps, photos, teal backgrounds
- `curogrid-mark-color-flat`: no gradients, for embroidery, small print, single-pass printing.
- The person is a see-through cut-out, so the background shows through it.
- **Clear space**: at least the head-circle diameter × 1.5 on every side.
- **Minimum size**: horizontal logo 100px wide on screen (25 mm in print); mark alone 24px.
- At 16px use `favicon-16x16.png` (the C shape without the person; already wired into favicon.ico).

## Colours
| Token | Hex | Use |
|---|---|---|
| primary | #256F72 | Buttons, links, app icon background |
| dark | #1A3C3E | Logo text, headers, dark backgrounds |
| text | #1F5A5D | Body text on white |
| light | #57A8AB | "grid" in the logo, mark band |
| lighter | #8AC6C8 | Accents; text on dark backgrounds only |
| light-text-safe | #4A9A9D | "grid" or teal text at small sizes |
| white | #FFFFFF | |

Do not use #57A8AB or #8AC6C8 for small text on white; contrast is too low.

## Folders
- `01-logo/`: SVG masters + PNG (1000/2000 px wide), mark-only versions
- `02-app-icons/ios/`: AppIcon-1024.png + all Xcode sizes
- `02-app-icons/android/`: play-store-icon-512.png and `res/` for `app/src/main/res` (adaptive, themed monochrome, legacy)
- `02-app-icons/desktop/`: 32–1024 px (for Tauri: `tauri icon icon-1024.png`)
- `02-app-icons/alt-light/`: optional white-background icon with the full-colour mark
- `03-web/`: favicon.ico, favicon.svg, apple-touch-icon, PWA icons, site.webmanifest, head-snippet.html
- `04-social/`: link-preview image, profile picture, LinkedIn cover
- `05-splash/`: light and dark splash screens (2732 px)
- `06-tokens/`: colors.css / colors.json
