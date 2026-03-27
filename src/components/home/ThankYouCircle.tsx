import { Heart, Store, Users } from "lucide-react";

const stats = [
  {
    icon: Heart,
    value: "¥15,210",
    label: "累計寄付額",
    sub: "3.9円 × 3,900袋",
  },
  {
    icon: Store,
    value: "24",
    label: "参加パン屋",
    sub: "東京・神奈川エリア",
  },
  {
    icon: Users,
    value: "1,280",
    label: "ユーザー",
    sub: "ありがとうの輪が広がっています",
  },
];

export default function ThankYouCircle() {
  return (
    <section className="mt-[var(--spacing-panq-7)] px-[var(--spacing-panq-4)]">
      {/* Section heading */}
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        ありがとうの輪
      </h2>
      <p className="mt-1 text-[0.8125rem] text-panq-on-surface-variant leading-relaxed">
        PanQ!で福袋を買うたび、1袋あたり3.9円が
        こどもホスピスに届きます。
      </p>

      {/* Stats grid */}
      <div className="mt-[var(--spacing-panq-4)] grid grid-cols-3 gap-[var(--spacing-panq-3)]">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="
                flex flex-col items-center gap-2 p-[var(--spacing-panq-3)]
                rounded-[var(--radius-xl)]
                bg-panq-surface-container-low
                text-center
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-primary-fixed">
                <Icon size={18} className="text-panq-primary" />
              </div>
              <span className="text-[1.0625rem] font-bold text-panq-on-surface leading-tight">
                {stat.value}
              </span>
              <span className="text-[0.6875rem] font-medium text-panq-on-surface-variant leading-tight">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Badge milestones */}
      <div className="mt-[var(--spacing-panq-4)] flex items-center justify-center gap-[var(--spacing-panq-4)]">
        {[
          { count: 1, label: "はじめの一歩" },
          { count: 39, label: "サンキュー" },
          { count: 390, label: "ありがとうマスター" },
        ].map((badge) => (
          <div key={badge.count} className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-panq-tertiary-fixed text-[0.75rem] font-bold text-panq-on-tertiary-fixed-variant">
              {badge.count}
            </div>
            <span className="text-[0.625rem] text-panq-on-surface-variant whitespace-nowrap">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
