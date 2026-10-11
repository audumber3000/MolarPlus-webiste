# CuroGrid logo kit

All lettering is converted to vector shapes, so the logo looks identical everywhere and needs no font installed.
Use the **SVG** files wherever you can (website, dashboard, print); use **PNG** where SVG isn't accepted.

## What's inside

| Folder | Use it for |
|---|---|
| `01-logo/` | Full logo. `primary` on white/light, `reversed` on dark teal, `mono-dark` / `mono-white` for one-colour printing, faxes, stamps, photos. `small-*` = version with the simplified cross for anything under ~140px wide (dashboard header, sidebar, email signature). |
| `02-mark/` | The cross on its own (`mark`), and the C + cross monogram (`monogram`). Use the monogram for a collapsed dashboard sidebar, loading screens, avatars. `mark-small` is the solid cross for tiny sizes. |
| `03-app-icons/ios/` | `AppIcon-1024.png` → upload to Xcode / App Store Connect. iOS rounds the corners itself, so the file is square. |
| `03-app-icons/android/` | `play-store-icon-512.png` for Google Play. Adaptive icon: `adaptive-foreground-432.png` + `adaptive-background-432.png` (or background colour `#256F72`); `adaptive-monochrome-432.png` for Android 13 themed icons. |
| `03-app-icons/svg/` | Editable vector app icons, including a rounded preview. |
| `04-web/` | Favicons, Apple touch icon, PWA icons, `site.webmanifest`, and `og-image-1200x630.png` for link previews (WhatsApp, LinkedIn, Slack). |

## Website / dashboard setup

Copy the files in `04-web/` to your site's root folder, then add this inside `<head>`:

```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#256F72">
<meta property="og:image" content="https://YOUR-DOMAIN/og-image-1200x630.png">
```

Dashboard header: `curogrid-logo-small-primary.svg` at 28–32px tall. Collapsed sidebar: `curogrid-monogram.svg` at 28–32px.

## Logo colours

| Part | Light background | Dark background |
|---|---|---|
| "Curo" | `#1A3C3E` (teal 900) | `#FFFFFF` |
| "grid" + cross | `#57A8AB` (teal 400) | `#8AC6C8` (teal 300) |
| App icon tile | `#256F72` (teal 600) | |

Font for headings and UI: **Plus Jakarta Sans** (free, Google Fonts). Weights 400 / 500 / 700 / 800.

## Simple rules

- **Clear space:** keep empty space around the logo at least the height of the cross on every side.
- **Minimum size:** full logo 100px wide on screen (25mm in print). Below 140px use the `small` version.
- **Backgrounds:** primary on white or very light teal (`#F0F8F8`); reversed on `#1A3C3E` or `#256F72`. On photos, use mono-white on a dark area.
- **Don't** stretch, rotate, recolour outside the palette, add shadows or outlines, separate the cross and move it elsewhere, or retype the name in another font.
