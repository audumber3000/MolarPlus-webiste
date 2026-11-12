# Credits and licences

## Photographs — `photos/`

All five are from [Unsplash](https://unsplash.com/license), whose licence allows commercial use
without attribution and allows modification. They are credited here anyway.

| File | Source | Photographer |
|---|---|---|
| `doctor-corridor.jpg` | [unsplash.com/photos/1O8CJy1A7Wo](https://unsplash.com/photos/1O8CJy1A7Wo) | mohamad azaam |
| `doctor-stethoscope.jpg` | [unsplash.com/photos/3HIroMoyre8](https://unsplash.com/photos/3HIroMoyre8) | vaibhav vivian |
| `doctor-woman.jpg` | [unsplash.com/photos/H9lg5Noj660](https://unsplash.com/photos/H9lg5Noj660) | Fotos |
| `doctor-reading.jpg` | [unsplash.com/photos/heA9sNqsR7Y](https://unsplash.com/photos/heA9sNqsR7Y) | Fotos |
| `doctor-glasses.jpg` | [unsplash.com/photos/dDPnX86E0Uc](https://unsplash.com/photos/dDPnX86E0Uc) | Usman Yousaf |

**Two things to know before these go on a store page.**

- They were chosen from Unsplash's results for "Indian doctor". Where each was taken, and who the
  people are, is not stated on the photo pages and has not been checked. They are South Asian
  doctors in white coats; none shows a hospital's name, a logo or a name badge.
- The Unsplash licence covers the photograph. It does not promise that the person in it signed a
  model release, and it does not let a photo suggest that the person endorses a product. Here each
  is a background or a small framed picture, in black and white under teal, with no name and no
  quote beside it. If Curogrid photographs its own doctors later, those replace these, with each
  person's written permission.

## Hero photographs — `photos/heroes/`

From [ImagesBazaar](https://www.imagesbazaar.com), used under Clino Health's agreement with
ImagesBazaar. One for each speciality page's hero and one for the homepage, blended into the teal
band in black and white (`components/HeroPhoto.tsx`). The files are ImagesBazaar's 900 × 600
previews; swap in the full-size download under the same name when you have it.

| File | Image code | What it shows |
|---|---|---|
| `home.jpg` | SM953161 | A doctor going over a report with an older patient |
| `general.jpg` | SM636522 | A doctor with an older patient in the consulting room |
| `paeds.jpg` | SM953200 | A paediatrician listening to a baby's chest, with the mother |
| `gynae.jpg` | SM670395 | A doctor examining a pregnant woman with a stethoscope |
| `derma.jpg` | SM189134 | A dermatologist examining a man's face |
| `ent.jpg` | SM690586 | An ENT doctor looking into a man's ear with an otoscope |
| `physio.jpg` | SM675244 | A physiotherapist guiding an exercise with dumbbells, gym balls behind |
| `eye.jpg` | SM706924 | An eye examination at a slit lamp |
| `ortho.jpg` | SM764477 | A doctor fitting a knee brace on an older man |
| `surgery.jpg` | SM226434 | A doctor and a patient in a surgical OPD |
| `diabetes.jpg` | SM752194 | A doctor checking a patient's blood sugar with a glucometer |
| `trust.jpg` | SM1108045 | A doctor going over a report with a couple (homepage trust band) |
| `general-2.jpg` | SM1105797 | A doctor and a patient talking across the desk |
| `paeds-2.jpg` | SM681344 | Parents with a newborn and the paediatrician |
| `gynae-2.jpg` | SM926847 | A doctor with a pregnant woman in the clinic |
| `derma-2.jpg` | SM189132 | A dermatologist examining a man's face |
| `ent-2.jpg` | SM657052 | An ENT doctor checking a girl's ear |
| `physio-2.jpg` | SM449419 | A physiotherapist exercising an older man's arm with a dumbbell |
| `eye-2.jpg` | SM706914 | A child's eye test with trial frames |
| `ortho-2.jpg` | SM1077133 | A doctor examining an older man's knee |
| `surgery-2.jpg` | SM891344 | Two surgeons reading scans |
| `diabetes-2.jpg` | SM752197 | A doctor going over glucometer readings with a patient |

The `-2` photos sit in each speciality page's closing band (`bandPhoto` in `lib/editions.ts`).

The same rule as the Unsplash photos applies: no name, no quote and no endorsement beside any of them.

## Typeface — `fonts/`

Plus Jakarta Sans, under the [SIL Open Font License 1.1](fonts/OFL.txt); the brand typeface named
in `CuroGrid-Logo-Kit/README.md`. The `.woff2` files are copied from `@fontsource/plus-jakarta-sans`
so a render never depends on the network.

## Everything else

The logos in `brand/` are copies from `CuroGrid-Logo-Kit/`. The cross, ticket and pill in
`elements/` were drawn for this folder. The device frames and the iOS and window chrome are drawn
in CSS and SVG; no vendor's device photograph is used.

The pipeline itself (compose, render, finalize, the capture scripts) is the one built for
SyrupDesk's store listing, restyled for Curogrid.
