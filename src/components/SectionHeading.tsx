import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}

/**
 * Shared section heading: refined eyebrow, tight display title,
 * comfortable measure on the supporting copy.
 */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <div className={`max-w-2xl ${centered ? "mx-auto" : ""}`}>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-balance text-[32px] font-normal leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
          {title}
        </h2>
        {sub && (
          <p className="mt-5 max-w-xl text-pretty text-[15px] font-light leading-[1.7] text-zinc-400">
            {sub}
          </p>
        )}
      </div>
    </Reveal>
  );
}
