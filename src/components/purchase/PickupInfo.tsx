import { MapPin, Clock, Store } from "lucide-react";

interface PickupInfoProps {
  storeName: string;
  address: string;
  pickupTime: string;
}

export default function PickupInfo({ storeName, address, pickupTime }: PickupInfoProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-panq-3)]">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
          <MapPin size={16} className="text-panq-primary" />
        </div>
        <div>
          <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
            {storeName}
          </p>
          <p className="text-[0.75rem] text-panq-on-surface-variant">
            {address}
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
          <Clock size={16} className="text-panq-primary" />
        </div>
        <div>
          <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
            受取時間
          </p>
          <p className="text-[0.75rem] text-panq-on-surface-variant">
            {pickupTime}
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
          <Store size={16} className="text-panq-primary" />
        </div>
        <div>
          <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
            受取方法
          </p>
          <p className="text-[0.75rem] text-panq-on-surface-variant">
            お店で直接お受け取りください
          </p>
        </div>
      </div>
    </div>
  );
}
