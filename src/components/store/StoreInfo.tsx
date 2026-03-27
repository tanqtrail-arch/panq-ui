import { Star, MapPin, Footprints } from "lucide-react";

interface StoreInfoProps {
  name: string;
  area: string;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
}

export default function StoreInfo({ name, area, rating, reviewCount, isOpen }: StoreInfoProps) {
  return (
    <div>
      <h1 className="font-serif text-[1.5rem] font-bold leading-tight text-panq-on-surface">
        {name}
      </h1>

      <div className="mt-2 flex items-center gap-3 flex-wrap">
        {/* Open/Closed badge */}
        <span
          className={`
            inline-flex items-center rounded-full px-2.5 py-0.5
            text-[0.6875rem] font-semibold
            ${isOpen
              ? "bg-[#2ec4b2]/15 text-[#1a8a7d]"
              : "bg-panq-surface-container-high text-panq-on-surface-variant"
            }
          `}
        >
          {isOpen ? "営業中" : "準備中"}
        </span>

        {/* Area */}
        <span className="flex items-center gap-0.5 text-[0.75rem] text-panq-on-surface-variant">
          <MapPin size={13} />
          {area}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-0.5 text-[0.75rem] text-panq-on-surface-variant">
          <Star size={13} className="fill-panq-tertiary-container text-panq-tertiary-container" />
          {rating} ({reviewCount})
        </span>

        {/* Distance (dummy) */}
        <span className="flex items-center gap-0.5 text-[0.75rem] text-panq-on-surface-variant">
          <Footprints size={13} />
          徒歩5分
        </span>
      </div>
    </div>
  );
}
