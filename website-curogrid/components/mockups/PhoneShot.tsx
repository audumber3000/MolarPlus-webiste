import Image from "next/image";
import type { Shot } from "@/lib/shots";
import { cn } from "@/lib/cn";

/**
 * A phone screenshot inside a restrained device frame. Keep its radius
 * close to the site's square-cornered UI, even when the frame is small.
 */
export function PhoneShot({
  shot,
  sizes = "280px",
  className,
}: {
  shot: Shot;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full max-w-[280px] rounded-[12px] border border-gray-300 bg-gray-900 p-1 shadow-md", className)}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        className="h-auto w-full rounded-[8px]"
      />
    </div>
  );
}
