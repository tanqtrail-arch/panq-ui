export default function ThankYouMeaning() {
  const items = [
    { number: "¥390", label: "お手頃福袋の価格", sub: "サンキュー価格" },
    { number: "¥3.9", label: "1袋ごとの寄付額", sub: "こどもホスピスへ" },
    { number: "1 → 39 → 390", label: "ありがとうバッジ", sub: "買うたびにステップアップ" },
  ];

  return (
    <section>
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        390 = サンキュー
      </h2>
      <p className="mt-[var(--spacing-panq-3)] text-[0.875rem] leading-[1.85] text-panq-on-surface-variant">
        PanQ!のすべてに「サンキュー」の想いが込められています。
        390という数字は、私たちの原点です。
      </p>

      {/* Big 390 */}
      <div className="mt-[var(--spacing-panq-5)] flex items-center justify-center">
        <span className="text-gradient text-[4rem] font-bold leading-none tracking-tight">
          390
        </span>
      </div>

      {/* Meaning cards */}
      <div className="mt-[var(--spacing-panq-5)] flex flex-col gap-[var(--spacing-panq-3)]">
        {items.map((item) => (
          <div
            key={item.label}
            className="
              relative overflow-hidden
              rounded-[var(--radius-xl)] p-[var(--spacing-panq-4)]
              bg-panq-surface-container-lowest
              shadow-[var(--shadow-ambient)]
            "
          >
            <div className="flex items-center gap-[var(--spacing-panq-4)]">
              <span className="text-[1.25rem] font-bold text-panq-primary shrink-0 min-w-[90px]">
                {item.number}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.875rem] font-semibold text-panq-on-surface">
                  {item.label}
                </span>
                <span className="text-[0.75rem] text-panq-on-surface-variant">
                  {item.sub}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-[var(--spacing-panq-5)] text-center font-serif text-[1rem] font-bold text-panq-on-surface">
        すべてに「サンキュー」の想いを込めて。
      </p>
    </section>
  );
}
