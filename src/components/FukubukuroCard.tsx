import Link from "next/link";
import PriceBadge from "./PriceBadge";
import TierLabel from "./TierLabel";
import { type BagCategory, CATEGORY_LABELS } from "@/lib/mock-data";

interface FukubukuroCardProps {
  id: string;
  title: string;
  description: string;
  price: 390 | 990;
  tier: "standard" | "premium";
  category?: BagCategory;
  imageUrl: string;
  storeName: string;
}

export default function FukubukuroCard({
  id,
  title,
  description,
  price,
  tier,
  category,
  imageUrl,
  storeName,
}: FukubukuroCardProps) {
  return (
    <Link
      href={`/bags/${id}`}
      className="
        flex items-center gap-3
        rounded-[2rem] p-4
        bg-panq-surface-container-lowest
        shadow-[var(--shadow-ambient)]
      "
    >
      {/* Text content */}
      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
        <div className="flex items-center gap-2">
          <TierLabel tier={tier} />
          {category && (
            <span className="text-[0.6875rem] font-medium text-panq-on-surface-variant">
              {CATEGORY_LABELS[category]}
            </span>
          )}
        </div>
        <h3 className="text-[0.9375rem] font-bold leading-snug text-panq-on-surface">
          {title}
        </h3>
        <p className="text-[0.75rem] leading-relaxed text-panq-on-surface-variant line-clamp-2">
          {description}
        </p>
        <p className="text-[0.6875rem] text-panq-on-surface-variant/70">
          {storeName}
        </p>
        <div className="pt-0.5">
          <PriceBadge price={price} />
        </div>
      </div>

      {/* Image — compact 96x96 */}
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[1.25rem]">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </Link>
  );
}
