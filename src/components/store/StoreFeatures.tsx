import { Wheat, Clock, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StoreFeaturesProps {
  features: string[];
  description: string;
}

const featureIcons: LucideIcon[] = [Wheat, Clock, Heart];

export default function StoreFeatures({ features, description }: StoreFeaturesProps) {
  return (
    <div>
      <p className="text-[0.875rem] leading-relaxed text-panq-on-surface-variant">
        {description}
      </p>

      <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
        {features.map((feature, i) => {
          const Icon = featureIcons[i % featureIcons.length];
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-primary-fixed">
                <Icon size={16} className="text-panq-primary" />
              </div>
              <span className="text-[0.8125rem] font-medium text-panq-on-surface">
                {feature}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
