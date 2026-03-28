'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  showHeading?: boolean;
}

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#1a2235] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-[#1a2235] hover:bg-[#202d45] transition-colors"
      >
        <span className="text-white font-semibold pr-4">{item.question}</span>
        <svg
          className={`w-5 h-5 text-[#FFD700] flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#0f1623]">
          <p className="text-gray-300 text-sm leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ({ items, showHeading = true }: FAQProps) {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#0f1623]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Frequently Asked <span className="text-[#FFD700]">Questions</span>
            </h2>
          </div>
        )}
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <FAQAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
