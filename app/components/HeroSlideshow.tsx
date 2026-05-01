'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  '/Homepage%20Gallery/2025-02-03.jpg',
  '/Homepage%20Gallery/2026-03-31.jpg',
  '/Homepage%20Gallery/IMG_0064.jpg',
  '/Homepage%20Gallery/IMG_8095.jpg',
  '/Homepage%20Gallery/IMG_9347.jpg',
  '/Homepage%20Gallery/WhatsApp%20Image%202026-04-22%20at%2015.10.57.jpeg',
  '/Homepage%20Gallery/pass_photo_1.jpg',
  '/Homepage%20Gallery/pass_photo_2.jpg',
  '/Homepage%20Gallery/pass_photo_3.jpg',
  '/Homepage%20Gallery/unnamed%20(1).jpg',
  '/Homepage%20Gallery/unnamed.jpg',
];

const ROTATE_MS = 5000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, ROTATE_MS);
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function jumpTo(i: number) {
    setActive(i);
    startTimer();
  }

  return (
    <div className="hero-slideshow-wrap">
      <div
        className="hero-slideshow"
        style={{
          aspectRatio: '3 / 4',
          background: 'var(--navy)',
          borderTop: '3px solid var(--gold)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {SLIDES.map((src, i) => (
          <div
            key={src}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: active === i ? 1 : 0,
              transition: 'opacity 1s ease',
              pointerEvents: active === i ? 'auto' : 'none',
            }}
          >
            <Image
              src={src}
              alt={`L Plus P Driving School photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority={i === 0}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}

        {/* Dots */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '14px',
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            zIndex: 2,
          }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i ? 'true' : undefined}
              onClick={() => jumpTo(i)}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: active === i ? 'var(--gold)' : 'rgba(255, 255, 255, 0.4)',
                transition: 'background 0.2s ease',
              }}
            />
          ))}
        </div>
      </div>

      <p
        style={{
          fontFamily: 'var(--type-mono)',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: 'var(--ink-60)',
          marginTop: '16px',
          marginBottom: 0,
          textAlign: 'center',
        }}
      >
        Mick &amp; Sidra · teaching North Ryde since 1997
      </p>
    </div>
  );
}
