import Link from "next/link";
import { Heart } from "lucide-react";

export default function EmptyFavorites() {
  return (
    <div className="flex flex-col items-center gap-[var(--spacing-panq-4)] py-[var(--spacing-panq-8)] text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-panq-surface-container">
        <Heart size={28} className="text-panq-outline-variant" />
      </div>
      <h3 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">
        まだお気に入りのパン屋がありません
      </h3>
      <p className="text-[0.8125rem] text-panq-on-surface-variant leading-relaxed max-w-[260px]">
        気になるパン屋さんを見つけたら、ハートを押してお気に入りに追加しましょう
      </p>
      <Link
        href="/search"
        className="
          inline-flex items-center justify-center
          rounded-full px-6 py-3
          artisan-gradient text-white
          font-semibold text-[0.875rem]
          transition-transform duration-150 active:scale-[0.98]
        "
      >
        パン屋を探す
      </Link>
    </div>
  );
}
