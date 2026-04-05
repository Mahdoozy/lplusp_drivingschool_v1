'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  { src: '/Homepage Gallery/IMG_0064.jpg',     alt: 'L Plus P Driving School' },
  { src: '/Homepage Gallery/IMG_8095.jpg',     alt: 'L Plus P Driving School' },
  { src: '/Homepage Gallery/IMG_9347.jpg',     alt: 'L Plus P Driving School' },
  { src: '/Homepage Gallery/pass_photo_1.jpg', alt: 'Student passing their driving test' },
  { src: '/Homepage Gallery/pass_photo_2.jpg', alt: 'Student passing their driving test' },
  { src: '/Homepage Gallery/pass_photo_3.jpg', alt: 'Student passing their driving test' },
];

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#1a2235] group">
      {/* Image */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <Image
          src={slides[current].src}
          alt={slides[current].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={current === 0}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0f1623]/20" />
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#0f1623]/70 hover:bg-[#0f1623] rounded-full flex items-center justify-center text-white transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#0f1623]/70 hover:bg-[#0f1623] rounded-full flex items-center justify-center text-white transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all ${
              idx === current ? 'w-5 h-2 bg-[#FFD700]' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
