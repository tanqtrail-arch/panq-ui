"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "パンを探す...",
}: SearchBarProps) {
  return (
    <div
      className="
        flex items-center gap-2
        h-12 rounded-full
        bg-panq-surface-container-lowest
        px-4
        border border-panq-outline-variant/20
      "
    >
      <Search size={18} className="text-panq-on-surface-variant shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        className="
          flex-1 bg-transparent text-[0.875rem]
          text-panq-on-surface placeholder:text-panq-on-surface-variant/60
          outline-none
        "
      />
    </div>
  );
}
