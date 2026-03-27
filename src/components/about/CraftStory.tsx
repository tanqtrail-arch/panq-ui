export default function CraftStory() {
  return (
    <section>
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        職人の技と出会う
      </h2>

      <div className="mt-[var(--spacing-panq-4)]">
        <div className="rounded-[var(--radius-xl)] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1568471173242-461f0a730452?w=780&h=400&fit=crop"
            alt="焼きたてのパン"
            className="h-[200px] w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-4)]">
        <p className="text-[0.875rem] leading-[1.85] text-panq-on-surface-variant">
          PanQ!のパン屋さんは、それぞれ独自の製法と想いでパンを焼いています。
        </p>

        <p className="text-[0.875rem] leading-[1.85] text-panq-on-surface-variant">
          サワードゥの長時間発酵、石窯焼き、国産小麦へのこだわり。
          天然酵母で48時間じっくり寝かせるお店もあれば、
          フランスから直輸入した粉で焼き上げるお店もあります。
        </p>

        <p className="text-[0.875rem] leading-[1.85] text-panq-on-surface-variant">
          福袋を通じて、そんな
          <span className="font-semibold text-panq-on-surface">職人の技と偶然の出会い</span>
          をお届けします。
          いつもは手に取らないパンとの一期一会——それがPanQ!の福袋の醍醐味です。
        </p>
      </div>
    </section>
  );
}
