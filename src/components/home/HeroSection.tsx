import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-3)]">
      <Link href="/bags/1" className="block relative overflow-hidden rounded-[var(--radius-xl)]">
        {/* Hero image */}
        <div className="aspect-[4/3] bg-panq-surface-container-high">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=780&h=585&fit=crop"
            alt="職人のこだわりパン"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Price badge */}
        <span className="absolute top-3 right-3 artisan-gradient text-white text-[0.75rem] font-bold px-3 py-1.5 rounded-full">
          ¥990
        </span>

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="font-serif text-[1.5rem] font-bold text-white leading-tight">
            PanQ! プレミアム
          </h2>
          <p className="mt-1 text-[0.8125rem] text-white/85 leading-relaxed">
            職人のこだわりが詰まった厳選パンの福袋。
            今日だけの特別な出会いをお届けします。
          </p>
        </div>
      </Link>
    </section>
  );
}
