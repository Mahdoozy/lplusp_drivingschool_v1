'use client';

import { useEffect, useRef, useState } from 'react';

const SLIDE_COUNT = 3;
const ROTATE_MS = 5000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDE_COUNT);
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
        {/* TO REPLACE WITH PHOTO: replace .slide-content children with <Image src="/instructors/mick.jpg" fill alt="Mick" /> */}
        <div
          className={`slide ${active === 0 ? 'active' : ''}`}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: active === 0 ? 1 : 0,
            transition: 'opacity 1s ease',
            background: 'linear-gradient(135deg, var(--navy) 0%, #08132c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: active === 0 ? 'auto' : 'none',
          }}
        >
          <div
            className="slide-content"
            style={{
              maxWidth: '80%',
              padding: '24px',
              textAlign: 'center',
              color: 'var(--gold)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                opacity: 0.65,
                margin: 0,
                color: 'var(--gold)',
              }}
            >
              Slide 01 · Photo placeholder
            </p>
            <p
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: '24px',
                fontWeight: 700,
                margin: 0,
                color: 'var(--gold)',
                lineHeight: 1.15,
              }}
            >
              Mick &amp; the car
            </p>
            <p
              style={{
                fontFamily: 'var(--type-body)',
                fontSize: '13px',
                opacity: 0.7,
                margin: 0,
                color: 'var(--gold)',
              }}
            >
              Add real photo when ready
            </p>
          </div>
        </div>

        <div
          className={`slide ${active === 1 ? 'active' : ''}`}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: active === 1 ? 1 : 0,
            transition: 'opacity 1s ease',
            background: 'linear-gradient(135deg, #08132c 0%, #1a2c52 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: active === 1 ? 'auto' : 'none',
          }}
        >
          <div
            className="slide-content"
            style={{
              maxWidth: '80%',
              padding: '24px',
              textAlign: 'center',
              color: 'var(--gold)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--type-display)',
                fontStyle: 'italic',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: 1.3,
                color: '#ffffff',
                margin: 0,
              }}
            >
              &ldquo;Failed twice elsewhere. Came to Mick, passed first try.&rdquo;
            </p>
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gold)',
                margin: 0,
              }}
            >
              Tom W. · Castle Hill · Passed 2025
            </p>
          </div>
        </div>

        {/* TO REPLACE WITH PHOTO: replace .slide-content children with <Image src="/instructors/sidra.jpg" fill alt="Sidra" /> */}
        <div
          className={`slide ${active === 2 ? 'active' : ''}`}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: active === 2 ? 1 : 0,
            transition: 'opacity 1s ease',
            background: 'linear-gradient(135deg, #1a2c52 0%, var(--navy) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: active === 2 ? 'auto' : 'none',
          }}
        >
          <div
            className="slide-content"
            style={{
              maxWidth: '80%',
              padding: '24px',
              textAlign: 'center',
              color: 'var(--gold)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                opacity: 0.65,
                margin: 0,
                color: 'var(--gold)',
              }}
            >
              Slide 03 · Photo placeholder
            </p>
            <p
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: '24px',
                fontWeight: 700,
                margin: 0,
                color: 'var(--gold)',
                lineHeight: 1.15,
              }}
            >
              Sidra teaching
            </p>
            <p
              style={{
                fontFamily: 'var(--type-body)',
                fontSize: '13px',
                opacity: 0.7,
                margin: 0,
                color: 'var(--gold)',
              }}
            >
              Add real photo when ready
            </p>
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '18px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            zIndex: 2,
          }}
        >
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i ? 'true' : undefined}
              onClick={() => jumpTo(i)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: active === i ? 'var(--gold)' : 'rgba(255, 255, 255, 0.3)',
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
