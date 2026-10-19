import { Reveal } from "./Reveal";

const stats = [
  { value: "0.0 pips", label: "Spreads from" },
  { value: "500+", label: "Tradable instruments" },
  { value: "<30ms", label: "Average execution" },
  { value: "24/7", label: "Client support" },
];

export function StatsStrip() {
  return (
    <section className="relative z-10 w-full border-y border-white/[0.08] bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-14 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:divide-x md:divide-white/[0.07]">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 70} className={i > 0 ? "md:pl-8" : ""}>
            <div className="text-center md:text-left">
              <div className="text-[26px] sm:text-[32px] font-normal tracking-[-0.035em] text-white tabular-nums">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[12px] sm:text-[13px] font-light text-zinc-400">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
