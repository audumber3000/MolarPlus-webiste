# Doctor avatars

The images beside each quote in `lib/reviews.ts`.

## What is in here right now

Drawn avatars, not photographs — one per reviewer, in the same illustrated
style the app gives a staff member who has not uploaded a picture. They are
stored here as plain SVG so the cards render without a runtime call to any
third-party avatar service.

They are placeholders that look finished. Replace them as real headshots come in.

## Replacing one with a real headshot

1. Get the photo **from the dentist**, with their permission to use it on the
   marketing site. A WhatsApp selfie is fine — real beats polished here.
2. Crop square, export at 320×320 or larger, save as `.webp` or `.jpg`.
3. Drop it in this folder and point the doctor's entry in `lib/reviews.ts` at it:

   ```ts
   photo: '/images/doctors/rajesh-patel.webp',
   ```

   Then delete the `.svg` it replaced.

Setting `photo: ''` falls back to the doctor's initials, which is also correct.

## Do not put a stock photo here

These reviews carry real names, real clinics and real cities. A stock or
AI-generated **face** under a named dentist is a fabricated endorsement of an
identifiable professional — misleading advertising under the Consumer
Protection Act 2019, reportable by any competitor, and noticeable inside a
professional network where people know each other.

This is exactly why the placeholders are cartoons. A drawn avatar reads as
"no picture yet"; a photorealistic face reads as a claim about what someone
looks like. Keep that line.
