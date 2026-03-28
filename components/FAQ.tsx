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
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{ border: '1px solid rgba(30, 45, 74, 0.8)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
        style={{ background: open ? 'var(--bg-elevated)' : 'var(--bg-card)' }}
      >
        <span className="font-sans font-semibold text-[#f0f2f8] pr-4">{item.question}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: 'var(--gold)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 py-4" style={{ background: 'var(--bg-primary)' }}>
          <p className="font-sans text-[#8899bb] text-sm leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ({ items, showHeading = true }: FAQProps) {
  return (
    <section id="faq" className="py-16 sm:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center">
            <span className="section-label">Support</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#f0f2f8]">
              Frequently Asked Questions
            </h2>
            <span className="section-rule" />
          </div>
        )}
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <FAQAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
