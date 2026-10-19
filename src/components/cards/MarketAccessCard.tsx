import { ArrowUpRight } from "lucide-react";

interface MarketAccessCardProps {
  label?: string;
  title?: string;
  percentage?: string;
  className?: string;
}

export function MarketAccessCard({
  label = "Trading Pairs",
  title = "Unparalleled\nMarket Access",
  percentage = "46%",
  className = "",
}: MarketAccessCardProps) {
  return (
    <div
      className={`group p-4 sm:p-5 rounded-2xl glass-card lift text-left h-full ${className}`}
    >
      {/* Top Row: Label & Arrow Button */}
      <div className="flex items-center justify-between mb-3.5">
        <span className="text-[11px] sm:text-[12px] font-medium text-zinc-300 tracking-tight">
          {label}
        </span>
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors duration-300">
          <ArrowUpRight className="w-3.5 h-3.5 text-white/90 transition-transform duration-300 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]" />
        </div>
      </div>

      {/* Bottom Row: Title & Percentage */}
      <div className="flex items-end justify-between gap-3">
        <h3 className="text-xs sm:text-[13.5px] font-medium text-white leading-snug tracking-tight whitespace-pre-line">
          {title}
        </h3>
        <span className="text-[11px] sm:text-xs text-zinc-400 font-medium pb-0.5 tabular-nums">
          {percentage}
        </span>
      </div>
    </div>
  );
}
