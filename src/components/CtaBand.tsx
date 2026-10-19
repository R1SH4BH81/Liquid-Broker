import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pb-24 sm:pb-32">
        <Reveal>
          <div className="relative">
            {/* Faint halo behind the panel */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none"
            />
            <div className="glass-card relative rounded-3xl px-6 sm:px-12 py-16 sm:py-24 text-center overflow-hidden">
              <h2 className="text-balance text-[32px] sm:text-5xl font-normal tracking-[-0.04em] text-white leading-[1.05] max-w-2xl mx-auto">
                Open your account
                <br />
                in minutes
              </h2>
              <p className="mt-5 text-zinc-400 text-sm sm:text-[15px] font-light leading-[1.7] max-w-md mx-auto text-pretty">
                Join traders on a platform built for clean execution and honest
                pricing. Demo first, or go live today.
              </p>
              <div className="mt-8 sm:mt-9">
                <button
                  type="button"
                  className="btn-pill text-[13.5px] sm:text-[14px] px-7 sm:px-8 py-2.5 sm:py-3"
                >
                  Sign Up &amp; Trade
                </button>
              </div>
              <p className="mt-5 text-[12px] font-light text-zinc-500 tracking-wide">
                Free demo included &nbsp;·&nbsp; No deposit required to start
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
