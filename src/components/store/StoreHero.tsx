import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

interface StoreHeroProps {
  image: string;
  name: string;
  isFavorite: boolean;
}

export default function StoreHero({ image, name, isFavorite }: StoreHeroProps) {
  return (
    <div className="relative">
      <div className="aspect-[16/9]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay buttons */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[var(--spacing-panq-4)] pt-3">
        <Link
          href="/search"
          className="flex h-10 w-10 items-center justify-center rounded-full glass-panel"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </Link>
        <button className="flex h-10 w-10 items-center justify-center rounded-full glass-panel cursor-pointer">
          <Heart
            size={20}
            className={
              isFavorite
                ? "fill-panq-primary text-panq-primary"
                : "text-panq-on-surface"
            }
          />
        </button>
      </div>
    </div>
  );
}
