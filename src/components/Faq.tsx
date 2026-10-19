import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    question: "What is the minimum deposit?",
    answer:
      "You can open an account with $100. There's no minimum to keep the account open, and the demo account is free with no deposit at all.",
  },
  {
    question: "Is Liquid Brokers regulated?",
    answer:
      "Yes. Liquid Brokers operates under license with client funds held in segregated accounts, separate from company funds, and undergoes regular independent audits.",
  },
  {
    question: "Which trading platforms are supported?",
    answer:
      "The full platform is available on desktop, web, and mobile (iOS and Android). All three share the same account, watchlists, and order history.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "E-wallet withdrawals are usually processed within a few hours; card and bank withdrawals take 1–3 business days. There are no fees from our side.",
  },
  {
    question: "Can I try before depositing?",
    answer:
      "Yes — the demo account mirrors live pricing with $50,000 in virtual funds. It never expires, so you can test strategies for as long as you like.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative z-10 w-full border-t border-white/[0.08] scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions, answered"
        />

        {/* Accordion */}
        <div className="mt-12 sm:mt-14 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 50}>
              <details className="faq-item glass-card rounded-2xl px-6 py-5 group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="text-[14.5px] sm:text-[15.5px] font-medium text-white tracking-tight group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-white/[0.07] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] flex items-center justify-center transition-all duration-300 group-open:rotate-45 group-open:bg-white/[0.12]">
                    <Plus className="w-3.5 h-3.5 text-white/90" />
                  </span>
                </summary>
                <p className="faq-answer mt-3.5 text-[13.5px] sm:text-sm font-light text-zinc-400 leading-[1.7] pr-8">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
