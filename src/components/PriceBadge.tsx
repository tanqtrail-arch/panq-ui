interface PriceBadgeProps {
  price: 390 | 990;
}

export default function PriceBadge({ price }: PriceBadgeProps) {
  const is990 = price === 990;

  return (
    <span
      className={`
        inline-flex items-center rounded-full px-3 py-1
        font-semibold text-[0.875rem]
        ${
          is990
            ? "bg-panq-primary-container text-panq-on-primary-container"
            : "bg-panq-tertiary-container text-panq-on-tertiary-container"
        }
      `}
    >
      ¥{price}
    </span>
  );
}
