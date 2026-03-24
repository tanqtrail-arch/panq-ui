interface PickupCodeProps {
  code: string;
  deadline: string;
  location: string;
}

export default function PickupCode({ code, deadline, location }: PickupCodeProps) {
  return (
    <div
      className="
        flex flex-col items-center gap-[var(--spacing-panq-3)]
        rounded-[2rem] p-[var(--spacing-panq-5)]
        bg-panq-surface-container-lowest
        shadow-[var(--shadow-ambient)]
      "
    >
      {/* Ticket-style dashed border decoration */}
      <div
        className="
          w-full rounded-[1.5rem] p-[var(--spacing-panq-4)]
          border-2 border-dashed border-panq-outline-variant/30
          flex flex-col items-center gap-2
        "
      >
        <p className="text-[0.75rem] font-medium text-panq-on-surface-variant uppercase tracking-wider">
          受取コード
        </p>
        <p className="text-[3rem] font-bold tracking-[0.15em] text-panq-primary font-mono leading-none">
          {code}
        </p>
      </div>

      {/* Details */}
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-[0.75rem] text-panq-on-surface-variant">
          受取期限: <span className="font-semibold text-panq-on-surface">{deadline}</span>
        </p>
        <p className="text-[0.75rem] text-panq-on-surface-variant">
          受取場所: <span className="font-semibold text-panq-on-surface">{location}</span>
        </p>
      </div>
    </div>
  );
}
