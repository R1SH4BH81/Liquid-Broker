import { MarketAccessCard } from "./cards/MarketAccessCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const markets = [
  { label: "FX Pairs", title: "Forex\nMajors & Minors", percentage: "80+ pairs" },
  { label: "Benchmarks", title: "Indices\nGlobal Markets", percentage: "16 indices" },
  { label: "Energies & Metals", title: "Commodities\nSpot & Futures", percentage: "24 symbols" },
  { label: "Digital Assets", title: "Crypto\n24/7 Trading", percentage: "40+ coins" },
  { label: "Global Equities", title: "Stocks\nTop Listings", percentage: "500+ CFDs" },
];

export function Markets() {
  return (
    <section id="markets" className="relative z-10 w-full scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-24 sm:py-32">
        <SectionHeading
          eyebrow="Markets"
          title={
            <>
              One account,
              <br />
              every market
            </>
          }
          sub="Move between asset classes without moving your capital. Five markets, one margin account, one login."
        />

        {/* Market Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {markets.map((market, i) => (
            <Reveal key={market.title} delay={(i % 5) * 60} className="h-full">
              <MarketAccessCard
                label={market.label}
                title={market.title}
                percentage={market.percentage}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
