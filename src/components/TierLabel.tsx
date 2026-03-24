interface TierLabelProps {
  tier: "standard" | "premium";
}

export default function TierLabel({ tier }: TierLabelProps) {
  const isPremium = tier === "premium";

  return (
    <span
      className={`
        inline-flex items-center rounded-full px-2.5 py-0.5
        text-[0.75rem] font-semibold uppercase tracking-wider
        ${
          isPremium
            ? "bg-panq-primary text-panq-on-primary"
            : "bg-panq-secondary text-panq-on-secondary"
        }
      `}
    >
      {isPremium ? "Premium" : "Standard"}
    </span>
  );
}
