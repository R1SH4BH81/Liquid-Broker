import { LiquidSphereVisual } from "./LiquidSphereVisual";

export function HeroSection() {
  return (
    <section className="relative z-10 flex-1 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-4 sm:pt-8 md:pt-10 max-w-5xl mx-auto w-full">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-[68px] lg:text-[74px] font-normal tracking-[-0.04em] text-white leading-[1.06] max-w-3xl mx-auto text-balance">
        Elevate Your
        <br />
        Trading Experience
      </h1>

      {/* Subtitle */}
      <p className="text-zinc-400 text-xs sm:text-sm md:text-[14.5px] max-w-md sm:max-w-lg mx-auto font-light leading-relaxed mt-4 sm:mt-5 px-2 text-pretty">
        Unlock your trading potential in a fully regulated environment, powered by Liquid Brokers
      </p>

      {/* Call to Action Button */}
      <div className="mt-6 sm:mt-7">
        <button
          type="button"
          className="btn-pill text-[13.5px] sm:text-[14px] px-6 sm:px-7 py-2.5 sm:py-3"
        >
          Sign Up &amp; Trade
        </button>
      </div>

      {/* Floating Cards (Positioned over sphere background) */}
      <LiquidSphereVisual />
    </section>
  );
}
