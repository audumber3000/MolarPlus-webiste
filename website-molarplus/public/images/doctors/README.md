# Doctor headshots

Photographs of the dentists quoted in `lib/reviews.ts`.

## Adding one

1. Get the photo **from the dentist**, with their permission to use it on the
   marketing site. A WhatsApp selfie is fine — real beats polished here.
2. Crop square, export at 320×320 or larger, save as `.webp` or `.jpg`.
   Name it after the slug of the doctor: `dr-rajesh-patel.webp`.
3. Drop it in this folder and set the path in `lib/reviews.ts`:

   ```ts
   photo: '/images/doctors/dr-rajesh-patel.webp',
   ```

Leave `photo: ''` and the card falls back to the doctor's initials, which is
why every review renders correctly before any photography exists.

## Do not put a stock photo here

These reviews carry real names, real clinics and real cities. A stock or
AI-generated face under a named dentist is a fabricated endorsement of an
identifiable professional — misleading advertising under the Consumer
Protection Act 2019, reportable by any competitor, and noticeable inside a
professional network where people know each other.

Initials are not a gap to be filled. They are the correct rendering until a
real photograph arrives.
