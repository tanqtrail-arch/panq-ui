import { Gift, Award } from "lucide-react";
import { RANKS, getCurrentRank, getNextRank } from "@/lib/rank-data";

interface BadgeProgressProps {
  totalPoints: number;
}

const rankBadgeStyle: Record<string, string> = {
  thankful: "bg-panq-tertiary-fixed text-panq-on-tertiary-fixed-variant",
  bronze: "bg-panq-tertiary-container text-white",
  silver: "bg-panq-surface-container-highest text-panq-on-surface-variant",
  gold: "artisan-gradient text-white",
  platinum: "bg-[#7B5EA7] text-white",
  diamond: "bg-gradient-to-r from-[#845400] via-[#C48528] to-[#7B5EA7] text-white",
};

export default function BadgeProgress({ totalPoints }: BadgeProgressProps) {
  const currentRank = getCurrentRank(totalPoints);
  const nextRank = getNextRank(totalPoints);

  // Progress within the current segment
  const prevThreshold = currentRank?.threshold ?? 0;
  const nextThreshold = nextRank?.threshold ?? prevThreshold;
  const segmentProgress = nextRank
    ? Math.min(((totalPoints - prevThreshold) / (nextThreshold - prevThreshold)) * 100, 100)
    : 100;

  return (
    <div>
      {/* Progress bar to next rank */}
      {nextRank && (
        <div className="mb-[var(--spacing-panq-4)]">
          <div className="flex items-center justify-between text-[0.6875rem] text-panq-on-surface-variant mb-1.5">
            <span>{currentRank?.badge ?? "ビギナー"}</span>
            <span>{nextRank.badge}</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-panq-surface-container-high overflow-hidden">
            <div
              className="h-full rounded-full artisan-gradient transition-all duration-700"
              style={{ width: `${segmentProgress}%` }}
            />
          </div>
          <p className="mt-1.5 text-[0.75rem] text-panq-on-surface-variant">
            あと<span className="font-bold text-panq-primary">{nextRank.threshold - totalPoints}pt</span>で{nextRank.title}！
          </p>
        </div>
      )}

      {/* Rank list */}
      <div className="flex flex-col gap-[var(--spacing-panq-2)]">
        {RANKS.map((rank) => {
          const reached = totalPoints >= rank.threshold;
          const isCurrent = currentRank?.key === rank.key;
          const badgeStyle = rankBadgeStyle[rank.key];

          return (
            <div
              key={rank.key}
              className={`
                flex items-center gap-[var(--spacing-panq-3)]
                p-[var(--spacing-panq-3)] rounded-[var(--radius-xl)]
                transition-all duration-200
                ${isCurrent
                  ? "bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)] ring-2 ring-panq-primary-fixed-dim"
                  : reached
                    ? "bg-panq-surface-container-lowest"
                    : "bg-panq-surface-container-low opacity-60"
                }
                ${rank.hasPresent && !reached ? "relative overflow-hidden" : ""}
              `}
            >
              {/* Badge icon */}
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${reached ? badgeStyle : "bg-panq-surface-container-high text-panq-on-surface-variant"}`}>
                {rank.hasPresent ? <Gift size={16} /> : <Award size={16} />}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[0.8125rem] font-semibold ${reached ? "text-panq-on-surface" : "text-panq-on-surface-variant"}`}>
                    {rank.badge}
                  </span>
                  <span className="text-[0.6875rem] text-panq-on-surface-variant">
                    {rank.threshold}pt
                  </span>
                  {isCurrent && (
                    <span className="artisan-gradient text-white text-[0.5625rem] font-bold px-1.5 py-0.5 rounded-full">
                      NOW
                    </span>
                  )}
                </div>
                <p className={`text-[0.6875rem] mt-0.5 ${reached ? "text-panq-on-surface-variant" : "text-panq-on-surface-variant/60"}`}>
                  {rank.title} — {rank.hasPresent ? `🎁 ${rank.benefit}` : rank.benefit}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
