import { notFound } from "next/navigation";
import { getStoreById, stores } from "@/lib/store-data";
import BottomNav from "@/components/BottomNav";
import StoreHero from "@/components/store/StoreHero";
import StoreInfo from "@/components/store/StoreInfo";
import BagPlanCards from "@/components/store/BagPlanCards";
import StoreFeatures from "@/components/store/StoreFeatures";
import StoreDetails from "@/components/store/StoreDetails";
import StoreReviews from "@/components/store/StoreReviews";

export function generateStaticParams() {
  return stores.map((s) => ({ id: s.id }));
}

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const store = getStoreById(id);

  if (!store) {
    notFound();
  }

  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* ====== S1: Hero ====== */}
      <StoreHero
        image={store.image}
        name={store.name}
        isFavorite={store.isFavorite}
      />

      <div className="px-[var(--spacing-panq-4)]">
        {/* ====== S2: Store Info ====== */}
        <section className="mt-[var(--spacing-panq-5)]">
          <StoreInfo
            name={store.name}
            area={store.area}
            rating={store.rating}
            reviewCount={store.reviewCount}
            isOpen={store.isOpen}
          />
        </section>

        {/* ====== S3: Bag Plans ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            今日の福袋
          </h2>
          <BagPlanCards plans={store.plans} storeId={store.id} />
        </section>

        {/* ====== S4: Features ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            お店のこだわり
          </h2>
          <StoreFeatures
            features={store.features}
            description={store.description}
          />
        </section>

        {/* ====== S5: Store Details ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            店舗情報
          </h2>
          <StoreDetails
            address={store.address}
            hours={store.hours}
            closedDay={store.closedDay}
            phone={store.phone}
          />
        </section>

        {/* ====== S6: Reviews ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            みんなの声
          </h2>
          <StoreReviews
            rating={store.rating}
            reviewCount={store.reviewCount}
            reviews={store.reviews}
          />
        </section>
      </div>

      {/* ====== S7: Bottom Nav ====== */}
      <BottomNav />
    </div>
  );
}
