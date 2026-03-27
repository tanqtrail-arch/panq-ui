import { ShoppingBag, Heart, Store, ChevronRight } from "lucide-react";

interface ImpactStatsProps {
  totalBags: number;
  totalPoints: number;
  favoriteStores: number;
}

export default function ImpactStats({ totalBags, totalPoints, favoriteStores }: ImpactStatsProps) {
  const stats = [
    { icon: ShoppingBag, value: `${totalBags}袋`, label: "累計購入" },
    { icon: Heart, value: `¥${totalPoints}`, label: "寄付貢献額" },
    { icon: Store, value: `${favoriteStores}店舗`, label: "お気に入り" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-panq-primary-fixed p-[var(--spacing-panq-5)] premium-glow">
      <div className="absolute -right-8 -top-8 h-28 w-28 organic-shape bg-panq-primary-fixed-dim/20" />
      <div className="absolute -left-4 -bottom-6 h-20 w-20 organic-shape bg-panq-primary-fixed-dim/15" />

      <div className="relative">
        <div className="grid grid-cols-3 gap-[var(--spacing-panq-3)]">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
                <Icon size={20} className="text-panq-primary" />
                <span className="text-[1.125rem] font-bold text-panq-on-primary-fixed leading-tight">
                  {stat.value}
                </span>
                <span className="text-[0.625rem] font-medium text-panq-on-primary-fixed-variant">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-[var(--spacing-panq-3)] text-center text-[0.6875rem] text-panq-on-primary-fixed-variant leading-relaxed">
          あなたのポイント = 寄付貢献額（1pt = 1円）
        </p>

        <p className="mt-[var(--spacing-panq-4)] text-center text-[0.75rem] font-medium text-panq-on-primary-fixed-variant">
          あなたの「ありがとう」がこどもたちに届いています
        </p>
      </div>
    </div>
  );
}
