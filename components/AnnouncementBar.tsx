'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'lplusp-announcement-ev-dismissed';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed !== 'true') setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="bg-[#F5C132] text-[#0B1628] py-2.5 px-4 relative text-center">
      <p className="font-outfit text-sm font-medium pr-8">
        New: EV Familiarisation Course now available —{' '}
        <span className="font-semibold">Get confident with your electric car.</span>
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[#0B1628]/60 hover:text-[#0B1628] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
