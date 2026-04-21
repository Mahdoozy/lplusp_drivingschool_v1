'use client';

import { useState } from 'react';

interface FAQItem {
  id?: string;
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
      id={item.id}
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f4',
        boxShadow: open ? 'inset 3px 0 0 #F5C842, 0 2px 12px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
        style={{ background: open ? '#fdfbf0' : '#ffffff' }}
      >
        <span className="font-sans font-semibold text-[#0a0f1e] pr-4">{item.question}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#F5C842' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className="px-5 py-4"
        style={{ display: open ? 'block' : 'none', background: '#ffffff', borderTop: '1px solid #e2e8f4' }}
      >
        <p className="font-sans text-[#3a4a6a] text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ({ items, showHeading = true }: FAQProps) {
  return (
    <section id="faq" className="py-16 sm:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center">
            <span className="section-label-dark">Support</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0a0f1e]">
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
