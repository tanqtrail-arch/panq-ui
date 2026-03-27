export default function OriginStory() {
  return (
    <section>
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        はじまり
      </h2>

      <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-4)]">
        <p className="text-[0.875rem] leading-[1.85] text-panq-on-surface-variant">
          街のパン屋さんには、毎日たくさんの想いが詰まったパンが焼き上がります。
          その一つひとつに、職人のこだわりと愛情が込められています。
        </p>

        {/* Inline image */}
        <div className="rounded-[var(--radius-xl)] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=780&h=400&fit=crop"
            alt="パン職人の手元"
            className="h-[180px] w-full object-cover"
          />
        </div>

        <p className="text-[0.875rem] leading-[1.85] text-panq-on-surface-variant">
          でも、そのこだわりのパンとお客さまが出会えないことがある。
          知らなかった、タイミングが合わなかった、お店を見つけられなかった——。
        </p>

        <p className="text-[0.875rem] leading-[1.85] text-panq-on-surface-variant">
          PanQ!は、そんなパン屋さんとあなたをつなぐ
          <span className="font-semibold text-panq-on-surface">「ありがとう」のプラットフォーム</span>
          です。
          福袋というかたちで、いつもは出会えないパンとの特別な体験をお届けします。
        </p>
      </div>
    </section>
  );
}
