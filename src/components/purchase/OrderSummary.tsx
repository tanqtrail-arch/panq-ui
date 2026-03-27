interface OrderSummaryProps {
  title: string;
  storeName: string;
  price: number;
  imageUrl: string;
}

export default function OrderSummary({ title, storeName, price, imageUrl }: OrderSummaryProps) {
  return (
    <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[var(--radius-lg)]">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-[0.9375rem] font-bold text-panq-on-surface leading-snug">
            {title}
          </h3>
          <p className="text-[0.75rem] text-panq-on-surface-variant mt-0.5">
            {storeName}
          </p>
        </div>
        <span className="text-[1.25rem] font-bold text-panq-primary shrink-0">
          ¥{price}
        </span>
      </div>
    </div>
  );
}
