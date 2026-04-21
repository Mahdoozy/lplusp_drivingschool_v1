'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '/blog', label: 'Guides' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'nav-scrolled border-b border-[#e2e8f4]'
          : 'bg-[#0B1628] border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo: L+P plates + name */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="flex items-center gap-1">
              <span className="bg-[#F5C132] text-[#0B1628] font-syne font-bold text-sm px-2.5 py-1 rounded leading-none">
                L
              </span>
              <span className={`text-xs font-outfit ${scrolled ? 'text-[#6B7FA8]' : 'text-white/40'}`}>+</span>
              <span className="bg-[#D4D4D4] text-[#CC1500] font-syne font-bold text-sm px-2.5 py-1 rounded leading-none">
                P
              </span>
            </span>
            <span className={`font-syne font-bold text-sm ml-1 transition-colors duration-300 ${
              scrolled ? 'text-[#0B1628]' : 'text-white'
            }`}>
              L Plus P Driving School
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-outfit font-medium text-sm transition-colors duration-200 ${
                  scrolled
                    ? 'text-[#2D4470] hover:text-[#0B1628]'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: phone + Book Now */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:0469370978"
              className={`font-mono text-sm transition-colors duration-200 ${
                scrolled ? 'text-[#0B1628] hover:text-[#E8A800]' : 'text-[#F5C132] hover:text-[#E8A800]'
              }`}
            >
              0469 370 978
            </a>
            <Link
              href="/book"
              className={`font-outfit font-semibold text-sm px-5 py-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? 'bg-[#F5C132] text-[#0B1628] hover:bg-[#E8A800]'
                  : 'bg-[#F5C132] text-[#0B1628] hover:bg-[#E8A800]'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-[#0B1628]' : 'text-white/75 hover:text-white'
            }`}
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
        <div className="md:hidden bg-white border-t border-[#E8EEF8]">
          <div className="px-4 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-outfit font-medium text-sm text-[#2D4470] hover:text-[#0B1628] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0469370978"
              className="font-mono text-sm text-[#0B1628] font-medium"
            >
              0469 370 978
            </a>
            <Link
              href="/book"
              className="bg-[#F5C132] text-[#0B1628] font-outfit font-semibold text-sm px-4 py-2.5 rounded-lg text-center hover:bg-[#E8A800] transition-colors"
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
