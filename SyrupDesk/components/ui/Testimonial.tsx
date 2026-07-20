import Image from "next/image";
import { Card } from "./Card";

export type TestimonialData = {
  quote: string;
  name: string;
  pharmacy: string;
  /** City is shown deliberately — this buyer trusts a peer two
   *  districts over more than a national logo wall. */
  city: string;
  photo: { src: string; width: number; height: number };
};

export function Testimonial({ data }: { data: TestimonialData }) {
  return (
    <Card className="flex h-full flex-col">
      <blockquote className="flex-1 text-body text-ink-700">
        <p>&ldquo;{data.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-200 pt-4">
        <Image
          src={data.photo.src}
          alt=""
          width={data.photo.width}
          height={data.photo.height}
          className="size-12 rounded-full object-cover"
        />
        <div>
          <p className="text-body font-semibold text-ink-900">{data.name}</p>
          <p className="text-small text-ink-500">
            {data.pharmacy}, {data.city}
          </p>
        </div>
      </figcaption>
    </Card>
  );
}
