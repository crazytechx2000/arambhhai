"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-5"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="text-[15.5px] font-medium text-text sm:text-[16.5px]">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-text-muted transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${i}`}
                role="region"
                className="pb-4 pr-8 text-[14.5px] leading-relaxed text-text-muted sm:pb-5"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
