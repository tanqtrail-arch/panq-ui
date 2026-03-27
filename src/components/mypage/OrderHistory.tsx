import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Order {
  id: string;
  date: string;
  store: string;
  product: string;
  price: number;
  status: "received" | "pending";
}

interface OrderHistoryProps {
  orders: Order[];
}

const statusLabels: Record<string, { text: string; className: string }> = {
  received: { text: "受取済み", className: "bg-[#2ec4b2]/15 text-[#1a8a7d]" },
  pending: { text: "受取待ち", className: "artisan-gradient text-white" },
};

export default function OrderHistory({ orders }: OrderHistoryProps) {
  return (
    <div>
      <div className="flex flex-col gap-[var(--spacing-panq-3)]">
        {orders.slice(0, 3).map((order) => {
          const status = statusLabels[order.status];
          return (
            <div
              key={order.id}
              className="
                flex items-center gap-[var(--spacing-panq-3)]
                p-[var(--spacing-panq-3)] rounded-[var(--radius-xl)]
                bg-panq-surface-container-lowest
                shadow-[var(--shadow-ambient)]
              "
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[0.6875rem] text-panq-on-surface-variant">{order.date}</span>
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-[0.5625rem] font-semibold ${status.className}`}>
                    {status.text}
                  </span>
                </div>
                <p className="mt-0.5 text-[0.8125rem] font-semibold text-panq-on-surface truncate">
                  {order.product}
                </p>
                <p className="text-[0.6875rem] text-panq-on-surface-variant truncate">
                  {order.store}
                </p>
              </div>
              <span className="text-[0.9375rem] font-bold text-panq-primary shrink-0">
                ¥{order.price}
              </span>
            </div>
          );
        })}
      </div>

      <Link
        href="/orders"
        className="mt-[var(--spacing-panq-3)] flex items-center justify-end gap-0.5 text-[0.8125rem] font-semibold text-panq-primary"
      >
        すべての注文を見る
        <ChevronRight size={16} />
      </Link>
    </div>
  );
}
