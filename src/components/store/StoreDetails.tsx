import { MapPin, Clock, CalendarOff, Phone } from "lucide-react";

interface StoreDetailsProps {
  address: string;
  hours: string;
  closedDay: string;
  phone: string;
}

export default function StoreDetails({ address, hours, closedDay, phone }: StoreDetailsProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-panq-4)]">
      {/* Info rows */}
      <div className="flex flex-col gap-[var(--spacing-panq-3)]">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
            <MapPin size={16} className="text-panq-primary" />
          </div>
          <div>
            <p className="text-[0.6875rem] text-panq-on-surface-variant">住所</p>
            <p className="text-[0.8125rem] font-medium text-panq-on-surface">{address}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
            <Clock size={16} className="text-panq-primary" />
          </div>
          <div>
            <p className="text-[0.6875rem] text-panq-on-surface-variant">営業時間</p>
            <p className="text-[0.8125rem] font-medium text-panq-on-surface">{hours}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
            <CalendarOff size={16} className="text-panq-primary" />
          </div>
          <div>
            <p className="text-[0.6875rem] text-panq-on-surface-variant">定休日</p>
            <p className="text-[0.8125rem] font-medium text-panq-on-surface">{closedDay}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
            <Phone size={16} className="text-panq-primary" />
          </div>
          <div>
            <p className="text-[0.6875rem] text-panq-on-surface-variant">電話番号</p>
            <p className="text-[0.8125rem] font-medium text-panq-on-surface">{phone}</p>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="h-[160px] rounded-[var(--radius-xl)] bg-panq-surface-container-high flex items-center justify-center">
        <div className="flex flex-col items-center gap-1 text-panq-on-surface-variant">
          <MapPin size={24} />
          <span className="text-[0.75rem] font-medium">地図を表示</span>
        </div>
      </div>
    </div>
  );
}
