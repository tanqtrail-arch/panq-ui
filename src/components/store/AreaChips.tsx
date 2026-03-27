"use client";

import { areas, type AreaId } from "@/lib/store-data";

interface AreaChipsProps {
  selected: AreaId;
  onSelect: (id: AreaId) => void;
}

export default function AreaChips({ selected, onSelect }: AreaChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
      {areas.map((area) => {
        const isActive = selected === area.id;
        return (
          <button
            key={area.id}
            onClick={() => onSelect(area.id)}
            className={`
              inline-flex items-center shrink-0
              rounded-full px-4 py-2
              text-[0.75rem] font-semibold
              transition-colors duration-150 cursor-pointer whitespace-nowrap
              ${
                isActive
                  ? "artisan-gradient text-white"
                  : "bg-panq-surface-container text-panq-on-surface"
              }
            `}
          >
            {area.label}
          </button>
        );
      })}
    </div>
  );
}
