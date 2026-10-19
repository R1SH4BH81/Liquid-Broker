import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="relative z-10 w-full">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-24 sm:py-32 text-center">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
            Traders on Liquid
          </p>
          <div
            aria-hidden="true"
            className="mt-8 text-white/15 text-[64px] leading-[0.4] font-normal select-none"
          >
            &ldquo;
          </div>
          <blockquote className="mt-2 text-balance text-xl sm:text-[28px] font-normal tracking-[-0.03em] text-white leading-[1.4]">
            I moved over for the spreads and stayed for the execution. Orders
            fill where I click them, even during news — that just doesn't
            happen everywhere.
          </blockquote>
          <div className="mt-9 flex items-center justify-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/[0.07] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] flex items-center justify-center text-[13px] font-medium text-white tracking-wide">
              MR
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-white tracking-tight">
                Maya Rahman
              </div>
              <div className="mt-0.5 text-[12.5px] font-light text-zinc-400">
                FX day trader, client since 2023
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
