'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const reviews = [
  { text: 'Mick is an excellent instructor and teaches the rules and tricks in an easy to understand manner. With his support I was able to get my full licence today.', name: 'Brian Joe A.', suburb: 'North Ryde NSW' },
  { text: 'I am an international driver and failed my first attempt. Then I met Mick. He taught me the tips I needed, I gained confidence and passed on my next attempt.', name: 'Brian Joe Adriano', suburb: 'Carlingford NSW' },
  { text: 'Sidra is a fantastic instructor — calm, patient and incredibly knowledgeable. I was nervous every lesson but she always put me at ease. Passed first attempt.', name: 'Priya M.', suburb: 'Eastwood NSW' },
  { text: 'Mike is a legend! Extremely humble, experienced and professional. Without those 5 lessons from Mike it would have been difficult to pass first time.', name: 'Google Reviewer', suburb: 'Ryde NSW' },
  { text: 'I passed first time! Mick knows all the test routes around Ryde and Silverwater. Patient, professional and thorough.', name: 'Sarah K.', suburb: 'West Ryde NSW' },
  { text: 'After failing twice elsewhere, I came to L Plus P and passed first try. Mick identified exactly what I was doing wrong and fixed it in 3 lessons.', name: 'Tom W.', suburb: 'Castle Hill NSW' },
  { text: 'Best driving school in Sydney. Sidra made me feel confident behind the wheel and the 3-for-1 logbook hours saved me so much time.', name: 'James W.', suburb: 'Epping NSW' },
  { text: 'Great value for money. Every lesson felt structured and purposeful. Mick really knows how to prepare you for the actual test conditions.', name: 'Amy Z.', suburb: 'Carlingford NSW' },
  { text: "I was really nervous about my test but Mick kept me calm the whole way through. Passed first attempt at Ryde — couldn't recommend L Plus P enough.", name: 'Daniel R.', suburb: 'Macquarie Park NSW' },
];

// Infinite loop: wrap with clones of first and last
const slides = [reviews[reviews.length - 1], ...reviews, reviews[0]];
const TOTAL = slides.length;

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(1); // start at real first (index 1)
  const [transitioning, setTransitioning] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hovered = useRef(false);

  const goTo = useCallback((i: number, animate = true) => {
    setTransitioning(animate);
    setIndex(i);
  }, []);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  // After transition ends, snap for infinite loop
  const handleTransitionEnd = useCallback(() => {
    if (index === TOTAL - 1) {
      // was on cloned first → jump to real first
      goTo(1, false);
    } else if (index === 0) {
      // was on cloned last → jump to real last
      goTo(reviews.length, false);
    }
  }, [index, goTo]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!hovered.current) {
        setIndex((i) => i + 1);
        setTransitioning(true);
      }
    }, 4000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  // Real index for dot indicators (0-based)
  const dotIndex = index === 0 ? reviews.length - 1 : index === TOTAL - 1 ? 0 : index - 1;

  return (
    <section id="reviews" style={{ background: '#0d1b2e', paddingTop: 80, paddingBottom: 80 }}>
      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <span className="section-label font-outfit inline-block">WHAT STUDENTS SAY</span>
        <h2 className="font-heading font-extrabold text-4xl text-white mt-1 mb-3">
          What&apos;s it like learning with us?
        </h2>
        <p className="font-outfit text-white/40 text-base">
          Real reviews from real students across Sydney.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => { hovered.current = true; }}
        onMouseLeave={() => { hovered.current = false; }}
      >
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute left-4 sm:left-8 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.08)' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Track */}
        <div className="w-full overflow-hidden" style={{ maxWidth: 750, padding: '0 56px' }}>
          <div
            className="flex"
            style={{
              transform: `translateX(${-index * 100}%)`,
              transition: transitioning ? 'transform 0.45s cubic-bezier(0.4,0,0.2,1)' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((r, i) => (
              <div key={i} className="w-full flex-shrink-0" aria-hidden={i === 0 || i === TOTAL - 1 ? true : undefined}>
                <div
                  className="rounded-3xl"
                  style={{ background: '#111f35', padding: 40 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ color: '#F5C132', fontSize: 18 }}>★</span>
                    ))}
                  </div>

                  {/* Decorative quote */}
                  <div
                    className="font-syne leading-none select-none mb-2"
                    style={{ fontSize: 72, color: 'rgba(245,193,50,0.1)', lineHeight: 1 }}
                  >
                    &ldquo;
                  </div>

                  {/* Quote */}
                  <p
                    className="font-outfit italic text-white leading-relaxed mb-6"
                    style={{ fontSize: 18, lineHeight: 1.7 }}
                  >
                    &ldquo;{r.text}&rdquo;
                  </p>

                  {/* Name + location */}
                  <p className="font-outfit font-bold text-white text-base">{r.name}</p>
                  <p className="font-mono text-white/35 text-xs mt-1">{r.suburb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute right-4 sm:right-8 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.08)' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i + 1)}
            aria-label={`Go to review ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === dotIndex ? 20 : 8,
              height: 8,
              background: i === dotIndex ? '#F5C132' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>

      {/* Google footer */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 px-6">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span className="font-outfit font-bold text-white text-sm">
            4.8 <span style={{ color: '#F5C132' }}>★★★★★</span>
          </span>
          <span className="font-outfit text-white/40 text-sm">Based on 126+ Google Reviews</span>
        </div>
        <a
          href="https://www.google.com/search?q=L+Plus+P+Driving+School+Sydney+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="font-outfit font-bold text-sm px-5 py-2 rounded-lg hover:bg-[#E8A800] transition-colors"
          style={{ background: '#F5C132', color: '#0B1628' }}
        >
          See All Reviews →
        </a>
      </div>
    </section>
  );
}
