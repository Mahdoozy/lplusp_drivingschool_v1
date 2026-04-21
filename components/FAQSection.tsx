interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <details
          key={i}
          className="group border-b border-[#E8EEF8] py-5 open:border-l-[3px] open:border-l-[#F5C132] open:pl-4 transition-all"
        >
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="font-syne font-bold text-base text-[#0B1628]">
              {item.question}
            </span>
            <svg
              className="w-5 h-5 text-[#F5C132] flex-shrink-0 transition-transform duration-200 group-open:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </summary>
          <p className="font-outfit text-sm text-[#6B7FA8] leading-relaxed mt-3">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
