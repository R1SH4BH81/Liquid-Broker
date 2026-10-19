import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Create account",
    body: "Register in under two minutes with just an email address. No paperwork to start exploring the platform.",
  },
  {
    number: "02",
    title: "Verify & fund",
    body: "Complete a quick identity check, then deposit by card, bank transfer, or e-wallet. Most methods credit instantly.",
  },
  {
    number: "03",
    title: "Start trading",
    body: "Pick a market, set your size, and place your first trade. A demo account is there if you'd rather practice first.",
  },
];

export function Steps() {
  return (
    <section className="relative z-10 w-full border-y border-white/[0.08] bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-24 sm:py-32">
        <SectionHeading eyebrow="Getting started" title="Trading in three steps" />

        {/* Steps */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} className="h-full">
              <div className="glass-card lift rounded-2xl p-6 sm:p-8 h-full">
                <div className="text-4xl sm:text-5xl font-normal tracking-[-0.04em] text-white/20 tabular-nums">
                  {step.number}
                </div>
                <h3 className="mt-5 text-[15px] sm:text-base font-medium text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13px] sm:text-sm font-light text-zinc-400 leading-[1.7]">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
