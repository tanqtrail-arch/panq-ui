"use client";

interface FilterChipProps {
  label: string;
  selected?: boolean;
  onToggle?: () => void;
}

export default function FilterChip({
  label,
  selected = false,
  onToggle,
}: FilterChipProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        inline-flex items-center rounded-full px-4 py-2
        text-[0.75rem] font-semibold uppercase tracking-wider
        transition-colors duration-150 cursor-pointer whitespace-nowrap
        ${
          selected
            ? "bg-panq-tertiary-container text-panq-on-tertiary-container"
            : "bg-panq-surface-container-low text-panq-on-surface-variant"
        }
      `}
    >
      {label}
    </button>
  );
}
