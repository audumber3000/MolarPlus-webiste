import Image from "next/image";
import type { Shot } from "@/lib/shots";
import { cn } from "@/lib/cn";

/**
 * A phone screenshot inside a plain bezel. The rounded corners here are
 * the shape of a phone, the one place on the site that is not square.
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
    <div className={cn("w-full max-w-[280px] rounded-[2rem] border border-gray-300 bg-gray-900 p-1.5 shadow-lg", className)}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        className="h-auto w-full rounded-[1.65rem]"
      />
    </div>
  );
}
