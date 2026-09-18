import { ArrowUpRight } from "lucide-react";

interface TradingMetricCardProps {
  label?: string;
  metric?: string;
  progressPercentage?: number;
  className?: string;
}

export function TradingMetricCard({
  label = "Trading Pairs",
  metric = "96%",
  progressPercentage = 96,
  className = "",
}: TradingMetricCardProps) {
  return (
    <div
      className={`p-4 sm:p-5 rounded-2xl glass-card text-left backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Top Row: Label & Arrow Button */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] sm:text-[12px] font-medium text-zinc-300 tracking-tight">
          {label}
        </span>
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
        </div>
      </div>

      {/* Percentage Metric */}
      <div className="mt-0.5">
        <div className="text-xl sm:text-2xl md:text-[28px] font-semibold text-white tracking-tight leading-none">
          {metric}
        </div>

        {/* Progress Bar Track & Fill */}
        <div className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
