import Link from "next/link";

const columns = [
  {
    title: "Markets",
    links: [
      { label: "Forex", href: "#markets" },
      { label: "Indices", href: "#markets" },
      { label: "Commodities", href: "#markets" },
      { label: "Crypto", href: "#markets" },
      { label: "Stocks", href: "#markets" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Liquid", href: "#features" },
      { label: "Getting started", href: "#features" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Risk disclosure", href: "#contact" },
      { label: "Terms of service", href: "#contact" },
      { label: "Privacy policy", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 w-full border-t border-white/[0.08] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-16 sm:py-20">
        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div>
            <div className="text-[15px] font-medium tracking-tight text-white">
              Liquid Brokers
            </div>
            <p className="mt-3 text-[12.5px] font-light text-zinc-500 leading-relaxed max-w-[220px]">
              A trading platform built for clean execution and honest pricing.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <div className="text-[11px] font-medium text-zinc-500 tracking-[0.18em] uppercase">
                {column.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-light text-zinc-500 hover:text-white underline-offset-4 hover:underline decoration-white/25 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk Disclaimer */}
        <p className="mt-14 text-[11.5px] font-light text-zinc-600 leading-relaxed max-w-4xl">
          Risk warning: Trading forex, CFDs, and other leveraged products
          carries a high level of risk and may not be suitable for all
          investors. You could lose some or all of your invested capital. Make
          sure you understand the risks involved and seek independent advice if
          necessary.
        </p>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] font-light text-zinc-600">
            © 2026 Liquid Brokers. All rights reserved.
          </p>
          <p className="text-[12px] font-light text-zinc-600">
            Template for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
