'use client';

import { useState } from 'react';

const referralMessage = encodeURIComponent(
  "Hey, I've been learning with L Plus P Driving School — they're really good. Mention my name when you book and we both get 10% off: https://lppdrivingschool.com.au/book"
);

export default function ReferralButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button — mobile only */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Refer a friend"
        className="fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center md:hidden"
        style={{ background: '#f5c842' }}
      >
        {/* Gift icon */}
        <svg className="w-6 h-6 text-[#0d1b3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7a3 3 0 10-3-3M12 7a3 3 0 113-3" />
        </svg>
      </button>

      {/* Modal backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center md:hidden"
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full rounded-t-2xl p-6 flex flex-col gap-5"
            style={{ background: '#ffffff' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar */}
            <div className="w-10 h-1 rounded-full mx-auto" style={{ background: '#e2e8f4' }} />

            <div className="flex flex-col gap-1">
              <h3 className="font-syne font-bold text-xl text-[#0d1b3e]">Refer a mate — you both save 10%</h3>
              <p className="font-sans text-[#3a4a6a] text-sm">
                Get a friend to mention your name when they book their first lesson. You both get 10% off your next booking.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/?text=${referralMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-sans font-semibold text-sm px-5 py-3 rounded-xl"
                style={{ background: '#25D366', color: '#ffffff' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Share via WhatsApp
              </a>
              <a
                href={`sms:?body=${referralMessage}`}
                className="flex items-center justify-center gap-2 font-sans font-semibold text-sm px-5 py-3 rounded-xl"
                style={{ background: '#0d1b3e', color: '#ffffff' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Share via SMS
              </a>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="font-sans text-[#7a8aaa] text-sm text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
