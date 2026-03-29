'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 87, suffix: '%', label: 'First-attempt pass rate' },
  { target: 1000, suffix: '+', label: 'Students taught' },
  { target: 20, suffix: '+', label: 'Years experience' },
  { target: 24, suffix: '', label: 'Suburbs covered' },
];

function useCountUp(target: number, duration = 2000, enabled: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const startTime = performance.now();

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [target, duration, enabled]);

  return count;
}

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(target, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white border border-[#E8EEF8] rounded-2xl p-6 text-center">
      <div className="font-syne font-extrabold text-5xl text-[#1A56DB] leading-none">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="font-outfit font-semibold text-xs uppercase tracking-widest text-[#6B7FA8] mt-2">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#F7F9FF] py-12">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
