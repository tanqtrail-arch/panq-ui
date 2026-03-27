"use client";

import BottomNav from "@/components/BottomNav";
import StoreCardLarge from "@/components/store/StoreCardLarge";
import EmptyFavorites from "@/components/store/EmptyFavorites";
import { getFavoriteStores } from "@/lib/store-data";

export default function FavoritesPage() {
  const favorites = getFavoriteStores();

  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* ====== Header ====== */}
      <header className="sticky top-0 z-40 glass-panel px-[var(--spacing-panq-4)] py-3">
        <h1 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">
          お気に入りのパン屋
        </h1>
        <p className="mt-0.5 text-[0.8125rem] text-panq-on-surface-variant">
          とっておきのパン屋さん
        </p>
      </header>

      {/* ====== Favorite Store Cards ====== */}
      <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-4)]">
        {favorites.length === 0 ? (
          <EmptyFavorites />
        ) : (
          <div className="flex flex-col gap-[var(--spacing-panq-4)]">
            {favorites.map((store) => (
              <StoreCardLarge key={store.id} store={store} />
            ))}
          </div>
        )}
      </section>

      <BottomNav />
    </div>
  );
}
