import { Heart } from "lucide-react";

const hospices = [
  "TSURUMIこどもホスピス",
  "横浜こどもホスピス",
  "東京こどもホスピスプロジェクト",
];

export default function DonationStory() {
  return (
    <section>
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        ありがとうが届く場所
      </h2>

      <p className="mt-[var(--spacing-panq-3)] text-[0.875rem] leading-[1.85] text-panq-on-surface-variant">
        1袋のご購入ごとに3.9円が、こどもホスピスに届きます。
        あなたの「サンキュー」が、こどもたちの笑顔につながります。
      </p>

      {/* Donation card */}
      <div
        className="
          mt-[var(--spacing-panq-5)] relative overflow-hidden
          rounded-[var(--radius-xl)] p-[var(--spacing-panq-5)]
          bg-panq-primary-fixed premium-glow
        "
      >
        <div className="absolute -right-6 -top-6 h-28 w-28 organic-shape bg-panq-primary-fixed-dim/25" />
        <div className="absolute -left-4 -bottom-4 h-20 w-20 organic-shape bg-panq-primary-fixed-dim/15" />

        <div className="relative flex flex-col items-center text-center gap-[var(--spacing-panq-3)]">
          <Heart size={28} className="fill-panq-primary text-panq-primary" />
          <p className="font-serif text-[1.125rem] font-bold text-panq-on-primary-fixed">
            1袋 = ¥3.9 の寄付
          </p>

          {/* Stats */}
          <div className="flex gap-[var(--spacing-panq-5)]">
            <div className="text-center">
              <span className="text-[1.375rem] font-bold text-panq-primary">¥15,210</span>
              <p className="text-[0.6875rem] text-panq-on-primary-fixed-variant">累計寄付額</p>
            </div>
            <div className="text-center">
              <span className="text-[1.375rem] font-bold text-panq-primary">3,900</span>
              <p className="text-[0.6875rem] text-panq-on-primary-fixed-variant">届いたありがとう</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hospice list */}
      <div className="mt-[var(--spacing-panq-5)]">
        <p className="text-[0.75rem] font-semibold text-panq-on-surface-variant uppercase tracking-wider">
          寄付先
        </p>
        <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
          {hospices.map((name) => (
            <div
              key={name}
              className="
                flex items-center gap-3
                rounded-[var(--radius-lg)] p-[var(--spacing-panq-3)]
                bg-panq-surface-container-low
              "
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
                <Heart size={14} className="text-panq-primary" />
              </div>
              <span className="text-[0.8125rem] font-medium text-panq-on-surface">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
