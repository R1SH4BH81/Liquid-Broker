import { LiquidSphereVisual } from "./LiquidSphereVisual";

export function HeroSection() {
  return (
    <section className="relative z-10 flex-1 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-4 sm:pt-8 md:pt-10 max-w-5xl mx-auto w-full">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-[68px] lg:text-[74px] font-normal tracking-[-0.035em] text-white leading-[1.08] max-w-3xl mx-auto">
        Elevate Your
        <br />
        Trading Experience
      </h1>

      {/* Subtitle */}
      <p className="text-zinc-400 text-xs sm:text-sm md:text-[14.5px] max-w-md sm:max-w-lg mx-auto font-light leading-relaxed mt-4 sm:mt-5 px-2">
        Unlock your trading potential in a fully regulated environment, powered by Liquid Brokers
      </p>

      {/* Call to Action Button */}
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="rounded-full bg-white text-black font-medium text-[13.5px] sm:text-[14px] px-6 sm:px-7 py-2.5 sm:py-3 hover:bg-zinc-100 transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.18)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
        >
          Sign Up &amp; Trade
        </button>
      </div>

      {/* Floating Cards (Positioned over sphere background) */}
      <LiquidSphereVisual />
    </section>
  );
}
