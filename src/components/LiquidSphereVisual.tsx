import { HeroParallax } from "./HeroParallax";
import { MarketAccessCard } from "./cards/MarketAccessCard";
import { TradingMetricCard } from "./cards/TradingMetricCard";

export function LiquidSphereVisual() {
  return (
    <HeroParallax className="absolute inset-x-0 bottom-0 top-[40%] pointer-events-none max-w-7xl mx-auto w-full">
      {/* Left Floating Card: Unparalleled Market Access */}
      <div className="absolute left-4 sm:left-10 md:left-16 lg:left-24 bottom-[24vh] sm:bottom-[28vh] md:bottom-[30vh] z-20 pointer-events-auto">
        <MarketAccessCard className="w-[170px] sm:w-[210px] md:w-[230px] animate-float-slow" />
      </div>

      {/* Right Floating Card: 96% Metric with Progress Bar */}
      <div className="absolute right-4 sm:right-10 md:right-16 lg:right-24 bottom-[10vh] sm:bottom-[13vh] md:bottom-[15vh] z-20 pointer-events-auto">
        <TradingMetricCard className="w-[170px] sm:w-[210px] md:w-[230px] animate-float-delayed" />
      </div>
    </HeroParallax>
  );
}
