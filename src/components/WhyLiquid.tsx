import { ShieldCheck, Droplets, MonitorSmartphone, Lock } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Regulated environment",
    body: "Client funds held in segregated accounts with a licensed, audited broker. Trade knowing the framework around you is solid.",
  },
  {
    icon: Droplets,
    title: "Deep liquidity",
    body: "Aggregated pricing from tier-1 banks and non-bank providers, so orders fill at the price you see — even when markets move fast.",
  },
  {
    icon: MonitorSmartphone,
    title: "Advanced platforms",
    body: "Trade on desktop, web, or mobile with full charting, one-click execution, and algorithmic trading support out of the box.",
  },
  {
    icon: Lock,
    title: "Negative balance protection",
    body: "Your account can never go below zero. Volatile sessions can't leave you owing more than you deposited.",
  },
];

export function WhyLiquid() {
  return (
    <section id="features" className="relative z-10 w-full scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-24 sm:py-32">
        <SectionHeading
          eyebrow="Why Liquid"
          title={
            <>
              Built for traders who
              <br />
              read the market
            </>
          }
          sub="Tight pricing, fast fills, and infrastructure that stays up when it matters. The essentials, done properly."
        />

        {/* Feature Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 70} className="h-full">
              <div className="glass-card lift rounded-2xl p-6 sm:p-7 flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] flex items-center justify-center">
                  <feature.icon className="w-[18px] h-[18px] text-white/90" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-[15px] sm:text-base font-medium text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[13px] sm:text-sm font-light text-zinc-400 leading-[1.7]">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
