export default function AboutHero() {
  return (
    <section className="relative">
      <div className="aspect-[4/3]">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=780&h=585&fit=crop"
          alt="パン屋の風景"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-[var(--spacing-panq-5)]">
        <h1 className="font-serif text-[1.75rem] font-bold text-white leading-tight">
          私たちの物語
        </h1>
        <p className="mt-2 text-[0.875rem] text-white/80 leading-relaxed">
          パン屋さんとあなたをつなぐ、
          <br />
          「ありがとう」の物語。
        </p>
      </div>
    </section>
  );
}
