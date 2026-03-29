'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border-b border-[#E8EEF8] py-5 transition-all ${
              isOpen ? 'border-l-[3px] border-l-[#F5C132] pl-4' : ''
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 text-left"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="font-syne font-bold text-base text-[#0B1628]">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-[#F5C132] flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {isOpen && (
              <p className="font-outfit text-sm text-[#6B7FA8] leading-relaxed mt-3">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
