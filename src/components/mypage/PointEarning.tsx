import { ShoppingBag, Camera, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface EarnAction {
  icon: LucideIcon;
  label: string;
  points: string;
}

const actions: EarnAction[] = [
  { icon: ShoppingBag, label: "¥390 福袋を購入", points: "+3pt" },
  { icon: ShoppingBag, label: "¥990 プレミアムを購入", points: "+9pt" },
  { icon: Camera, label: "開封投稿", points: "+39pt" },
  { icon: Users, label: "おともだち紹介", points: "+39pt" },
];

export default function PointEarning() {
  return (
    <div className="grid grid-cols-2 gap-[var(--spacing-panq-2)]">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <div
            key={action.label}
            className="
              flex flex-col items-center gap-1.5
              p-[var(--spacing-panq-3)] rounded-[var(--radius-xl)]
              bg-panq-surface-container-lowest
              shadow-[var(--shadow-ambient)]
              text-center
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-panq-primary-fixed">
              <Icon size={16} className="text-panq-primary" />
            </div>
            <span className="text-[0.6875rem] text-panq-on-surface-variant leading-tight">
              {action.label}
            </span>
            <span className="text-[0.875rem] font-bold text-panq-primary">
              {action.points}
            </span>
          </div>
        );
      })}
    </div>
  );
}
