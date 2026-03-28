'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/book', label: 'Book Online' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0f1623] border-b border-[#1a2235] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded border-2 border-white">L</span>
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded border-2 border-white">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-sm leading-tight">L Plus P</span>
              <br />
              <span className="text-[#FFD700] text-xs">Driving School</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#FFD700] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0469370978"
              className="text-[#FFD700] font-semibold text-sm hover:text-yellow-300 transition-colors"
            >
              0469 370 978
            </a>
            <Link
              href="/book"
              className="bg-[#FFD700] text-[#0f1623] font-bold text-sm px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a2235] border-t border-[#0f1623]">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#FFD700] text-sm font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0469370978"
              className="text-[#FFD700] font-semibold text-sm"
            >
              0469 370 978
            </a>
            <Link
              href="/book"
              className="bg-[#FFD700] text-[#0f1623] font-bold text-sm px-4 py-2 rounded-lg text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
