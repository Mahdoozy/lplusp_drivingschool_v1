'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/book', label: 'Book Online' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'nav-scrolled border-b border-[rgba(245,200,66,0.1)]'
          : 'bg-[#0a0f1e] border-b border-[rgba(30,45,74,0.6)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/lplusp_logo.svg"
              alt="L Plus P Driving School"
              width={176}
              height={48}
              priority
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#8899bb] hover:text-[#F5C842] text-sm font-medium tracking-[0.02em] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:0469370978"
              className="font-mono text-[#F5C842] text-sm hover:text-[#d4a91a] transition-colors tracking-wide"
            >
              0469 370 978
            </a>
            <Link
              href="/book"
              className="bg-[#F5C842] text-[#0a0f1e] font-semibold text-sm px-5 py-2 rounded hover:bg-[#d4a91a] hover:scale-[1.02] transition-all duration-200 whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#8899bb] hover:text-white p-2 transition-colors"
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
        <div className="md:hidden bg-[#0a0f1e] border-t border-[rgba(30,45,74,0.8)]">
          <div className="px-4 py-5 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#8899bb] hover:text-[#F5C842] text-sm font-medium tracking-[0.02em] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0469370978"
              className="font-mono text-[#F5C842] text-sm tracking-wide"
            >
              0469 370 978
            </a>
            <Link
              href="/book"
              className="bg-[#F5C842] text-[#0a0f1e] font-semibold text-sm px-4 py-2.5 rounded text-center hover:bg-[#d4a91a] transition-colors"
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
