import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About L Plus P Driving School | Mick & Sidra | Est. 1997 North Ryde',
  description:
    'L Plus P Driving School has been teaching Sydney drivers since 1997. Meet Mick and Sidra — North Ryde\'s most trusted driving instructors for 27 years.',
};

const values = [
  {
    title: 'Confidence over speed',
    body: "We don't rush students through hours just to fill a quota. We teach until you're genuinely ready — and it shows in our pass rates.",
  },
  {
    title: 'Local knowledge matters',
    body: "We've driven every test route in our area hundreds of times. That knowledge is something no national chain can replicate.",
  },
  {
    title: 'Driving is a life skill',
    body: "Passing the test is the beginning. We teach you to be safe for every road you'll ever drive — not just the ones on test day.",
  },
];

const stats = [
  { value: 'Est. 1997', label: 'Founded in North Ryde' },
  { value: '27', label: 'Suburbs covered' },
  { value: '4.8★', label: 'Google rating' },
  { value: '80+', label: 'Reviews' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] pt-16 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label font-outfit inline-block mb-4">ABOUT US</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
            27 years. Hundreds of students.{' '}
            <span style={{ color: '#F5C132' }}>One family.</span>
          </h1>
          <p className="font-outfit text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            L Plus P Driving School has been part of North Ryde since 1997. We&apos;re not a franchise or a chain — we&apos;re Mick and Sidra, and we still teach every lesson ourselves.
          </p>
          <a
            href="#team"
            className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors inline-block"
            style={{ background: '#F5C132', color: '#0B1628' }}
          >
            Meet the team ↓
          </a>
        </div>
      </section>

      {/* ── THE STORY ──────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label font-outfit">OUR STORY</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-6">
            How it started
          </h2>
          <p className="font-outfit text-[#6B7FA8] text-base leading-relaxed mb-4">
            L Plus P Driving School was founded in 1997 in North Ryde, Sydney. What started as a commitment to teaching safe, confident driving has grown into one of the area&apos;s most trusted driving schools — built entirely on word of mouth, repeat students, and families who send us their kids after learning to drive with us themselves.
          </p>
          <p className="font-outfit text-[#6B7FA8] text-base leading-relaxed">
            We&apos;ve never been a franchise. We&apos;ve never sent you a random instructor. Every student who books with us drives with Mick or Sidra — experienced, qualified, and genuinely invested in helping you pass.
          </p>
        </div>
      </section>

      {/* ── MEET THE TEAM ──────────────────────────────────────────────── */}
      <section id="team" className="bg-[#0B1628] py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">THE TEAM</span>
          <h2 className="font-heading font-extrabold text-4xl text-white mt-1 mb-12">
            Meet Mick &amp; Sidra
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mick */}
            <div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* TODO: Replace with Mick's professional photo — /public/mick.jpg */}
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center mb-6"
                style={{ background: '#F5C132' }}
              >
                <span className="font-syne font-bold text-[#0B1628]" style={{ fontSize: 72, lineHeight: 1 }}>M</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-1">Mick</h3>
              <p className="font-outfit text-sm mb-1" style={{ color: '#F5C132' }}>Head Instructor &amp; Founder</p>
              <a
                href="tel:0469370978"
                className="font-mono text-white/50 text-sm hover:text-white/80 transition-colors block mb-5"
              >
                0469 370 978
              </a>
              <p className="font-outfit text-white/60 text-sm leading-relaxed mb-6">
                Mick has been teaching drivers since 1997. In that time he&apos;s helped hundreds of students get their licence — from nervous first-timers to overseas drivers starting from scratch. He knows every test route at Ryde, Silverwater, Castle Hill, Chatswood, and Hornsby, and he&apos;ll make sure you&apos;re prepared for exactly what the test requires. His students describe him as calm, thorough, and genuinely encouraging.
              </p>
              <blockquote
                className="font-outfit text-sm leading-relaxed italic px-4 py-3 rounded-xl"
                style={{ color: '#F5C132', background: 'rgba(245,193,50,0.07)', borderLeft: '3px solid rgba(245,193,50,0.4)' }}
              >
                &ldquo;My goal isn&apos;t just to get you through the test — it&apos;s to make sure you&apos;re safe on the road for life.&rdquo;
              </blockquote>
            </div>

            {/* Sidra */}
            <div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* TODO: Replace with Sidra's professional photo — /public/sidra.jpg */}
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center mb-6"
                style={{ background: '#F5C132' }}
              >
                <span className="font-syne font-bold text-[#0B1628]" style={{ fontSize: 72, lineHeight: 1 }}>S</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-1">Sidra</h3>
              <p className="font-outfit text-sm mb-1" style={{ color: '#F5C132' }}>Senior Instructor</p>
              <a
                href="tel:0451331140"
                className="font-mono text-white/50 text-sm hover:text-white/80 transition-colors block mb-5"
              >
                0451 331 140
              </a>
              <p className="font-outfit text-white/60 text-sm leading-relaxed mb-6">
                Sidra brings patience, warmth, and structure to every lesson. She&apos;s particularly known for helping nervous learners and students from diverse backgrounds who prefer a female instructor. Whether you&apos;re just starting out or converting an overseas licence, Sidra adapts to your pace and makes sure you feel confident, not rushed.
              </p>
              <blockquote
                className="font-outfit text-sm leading-relaxed italic px-4 py-3 rounded-xl"
                style={{ color: '#F5C132', background: 'rgba(245,193,50,0.07)', borderLeft: '3px solid rgba(245,193,50,0.4)' }}
              >
                &ldquo;Every student learns differently. My job is to find your pace and work with it — not against it.&rdquo;
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">WHAT WE BELIEVE</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-10">
            What we believe about driving education
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-7"
                style={{ background: '#F7F9FF', border: '1px solid #E8EEF8' }}
              >
                <h3 className="font-heading font-bold text-lg text-[#0B1628] mb-3">{v.title}</h3>
                <p className="font-outfit text-[#6B7FA8] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BY THE NUMBERS ─────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">BY THE NUMBERS</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-syne font-bold text-3xl sm:text-4xl mb-1" style={{ color: '#F5C132' }}>
                  {s.value}
                </p>
                <p className="font-outfit text-white/40 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mb-3">
            Ready to learn with Mick or Sidra?
          </h2>
          <p className="font-outfit text-[#6B7FA8] text-base mb-8">
            Free pick-up and drop-off. We confirm within 1 hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors text-center"
              style={{ background: '#F5C132', color: '#0B1628' }}
            >
              Book a Lesson →
            </Link>
            <a
              href="tel:0469370978"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl border border-[#E8EEF8] text-[#2D4470] hover:bg-[#F7F9FF] transition-colors text-center"
            >
              Call Mick — 0469 370 978
            </a>
            <a
              href="tel:0451331140"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl border border-[#E8EEF8] text-[#2D4470] hover:bg-[#F7F9FF] transition-colors text-center"
            >
              Call Sidra — 0451 331 140
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
