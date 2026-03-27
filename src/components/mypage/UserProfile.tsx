import { User, Award } from "lucide-react";
import { getCurrentRank, getRankBadgeName, getRankDisplayName, type RankKey } from "@/lib/rank-data";

interface UserProfileProps {
  name: string;
  points: number;
}

const rankColors: Record<string, string> = {
  beginner: "bg-panq-surface-container-high text-panq-on-surface-variant",
  thankful: "bg-panq-tertiary-fixed text-panq-on-tertiary-fixed-variant",
  bronze: "bg-panq-tertiary-container text-white",
  silver: "bg-panq-surface-container-highest text-panq-on-surface-variant",
  gold: "artisan-gradient text-white",
  platinum: "bg-[#7B5EA7] text-white",
  diamond: "bg-gradient-to-r from-[#845400] via-[#C48528] to-[#7B5EA7] text-white",
};

export default function UserProfile({ name, points }: UserProfileProps) {
  const rank = getCurrentRank(points);
  const rankKey: string = rank?.key ?? "beginner";
  const badgeName = getRankBadgeName(points);
  const titleName = getRankDisplayName(points);

  return (
    <div className="flex flex-col items-center gap-[var(--spacing-panq-3)] text-center">
      {/* Avatar */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-panq-surface-container-high">
        <User size={32} className="text-panq-on-surface-variant" />
      </div>

      {/* Name */}
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        {name}
      </h2>

      {/* Badge + Title */}
      <div className="flex flex-col items-center gap-1">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-semibold ${rankColors[rankKey]}`}>
          <Award size={13} />
          {badgeName}
        </span>
        <span className="text-[0.75rem] text-panq-on-surface-variant">
          {titleName}
        </span>
      </div>

      {/* Points */}
      <div className="mt-1">
        <span className="text-gradient text-[2rem] font-bold leading-none">{points}</span>
        <span className="ml-1 text-[0.875rem] font-semibold text-panq-on-surface-variant">pt</span>
      </div>
    </div>
  );
}
