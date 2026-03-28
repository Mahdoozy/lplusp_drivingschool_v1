'use client';

import Link from 'next/link';
import { useState } from 'react';

const suburbList = [
  'North Ryde', 'East Ryde', 'Ryde', 'West Ryde', 'Macquarie Park',
  'Eastwood', 'Epping', 'Castle Hill', 'North Rocks', 'Carlingford',
  'Beecroft', 'Telopea', 'Dundas', 'Ermington', 'Rydalmere',
  'Melrose Park', 'Meadowbank', 'Rhodes', 'Gladesville', 'Putney',
  'Silverwater', 'Newington', 'Auburn', 'Chatswood',
];

export default function Sidebar() {
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <aside className="hidden xl:flex flex-col gap-4 w-72 flex-shrink-0">
      <div className="sticky top-24 flex flex-col gap-3">
        {/* Book a Lesson */}
        <Link
          href="/book"
          className="w-full bg-[#FFD700] text-[#0f1623] font-bold py-3 px-4 rounded-xl text-center hover:bg-yellow-300 transition-colors text-sm"
        >
          Book a Lesson
        </Link>

        {/* Call Mick */}
        <a
          href="tel:0469370978"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl hover:bg-green-500 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Mick — 0469 370 978
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20lesson%20with%20L%20Plus%20P"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#1a2235] border border-[#25D366] text-[#25D366] font-bold py-3 px-4 rounded-xl hover:bg-[#25D366] hover:text-white transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us
        </a>

        {/* Pricing card */}
        <div className="bg-[#1a2235] rounded-xl p-4 flex flex-col gap-2">
          <h4 className="text-white font-bold text-sm mb-1">Quick Pricing</h4>
          {[
            { label: 'Single Lesson', price: 'from $60/hr' },
            { label: '5-Hour Pack', price: '$275' },
            { label: '10-Hour Pack', price: '$550' },
          ].map((p) => (
            <div key={p.label} className="flex items-center justify-between">
              <span className="text-gray-400 text-xs">{p.label}</span>
              <span className="text-[#FFD700] font-bold text-sm">{p.price}</span>
            </div>
          ))}
          <Link href="/book" className="mt-2 text-center text-xs text-[#FFD700] hover:underline">
            View all packages →
          </Link>
        </div>

        {/* Google rating */}
        <div className="bg-[#1a2235] rounded-xl p-4 flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div>
            <p className="text-white font-bold text-sm">5.0 Google Rating</p>
            <p className="text-gray-400 text-xs">80+ reviews</p>
          </div>
        </div>

        {/* Areas we cover */}
        <div className="bg-[#1a2235] rounded-xl overflow-hidden">
          <button
            onClick={() => setAreasOpen(!areasOpen)}
            className="w-full flex items-center justify-between p-4 text-white font-bold text-sm hover:bg-[#202d45] transition-colors"
          >
            Areas We Cover
            <svg
              className={`w-4 h-4 text-[#FFD700] transition-transform ${areasOpen ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {areasOpen && (
            <div className="px-4 pb-4 grid grid-cols-2 gap-x-2 gap-y-1">
              {suburbList.map((s) => (
                <span key={s} className="text-gray-400 text-xs">{s}</span>
              ))}
            </div>
          )}
        </div>

        {/* Business hours */}
        <div className="bg-[#1a2235] rounded-xl p-4">
          <h4 className="text-white font-bold text-sm mb-2">Business Hours</h4>
          <p className="text-gray-300 text-xs">Mon – Sat: 6am – 6pm</p>
          <p className="text-gray-500 text-xs mt-1">Messages answered 7 days</p>
        </div>
      </div>
    </aside>
  );
}
