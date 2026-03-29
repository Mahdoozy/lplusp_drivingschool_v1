'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
    alt: 'Driving on Sydney roads with L Plus P',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    alt: 'First solo drive — the big milestone',
  },
  {
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800',
    alt: 'Road trip freedom with your licence',
  },
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
    alt: 'Modern automatic car interior',
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[380px] rounded-2xl overflow-hidden group">
      {/* Image */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
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
        <div className="absolute inset-0 bg-[#0B1628]/20" />
      </div>

      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#0B1628]/70 hover:bg-[#0B1628] rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#0B1628]/70 hover:bg-[#0B1628] rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? 'w-5 h-2 bg-[#F5C132]'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
