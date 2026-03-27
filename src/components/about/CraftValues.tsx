import { ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "厳選された素材",
    body: "PanQ!参加店は、食品営業許可証を持つ審査済みのパン屋さんだけ。安心してお楽しみいただけます。",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "一期一会のパン",
    body: "福袋だからこそ出会える、いつもは選ばないパンとの特別な体験。毎回のワクワクをお届けします。",
  },
];

export default function CraftValues() {
  return (
    <section>
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        PanQ!が届けるもの
      </h2>

      <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-4)]">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.number}
              className="
                rounded-[var(--radius-xl)] p-[var(--spacing-panq-5)]
                bg-panq-surface-container-lowest
                shadow-[var(--shadow-ambient)]
              "
            >
              <div className="flex items-center gap-3">
                <span className="text-gradient text-[1.5rem] font-bold">{v.number}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-primary-fixed">
                  <Icon size={18} className="text-panq-primary" />
                </div>
              </div>
              <h3 className="mt-[var(--spacing-panq-3)] font-serif text-[1.0625rem] font-bold text-panq-on-surface">
                {v.title}
              </h3>
              <p className="mt-[var(--spacing-panq-2)] text-[0.8125rem] leading-[1.85] text-panq-on-surface-variant">
                {v.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
