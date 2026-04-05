import type { Metadata } from 'next';
import Link from 'next/link';
import { suburbs } from '@/lib/suburbs';

export const metadata: Metadata = {
  title: 'Female Driving Instructor Sydney | L Plus P Driving School',
  description:
    "Looking for a female driving instructor in Sydney's north-west? Sidra is L Plus P's experienced female instructor covering North Ryde, Eastwood, Epping, Carlingford and 24 suburbs. Book online.",
};

const audiences = [
  {
    icon: '💛',
    title: 'Nervous learners',
    body: "If the thought of driving makes you anxious, Sidra's calm teaching style is exactly what you need. No rushing, no pressure — just steady progress.",
  },
  {
    icon: '🚗',
    title: 'First-time drivers',
    body: "Starting from zero? Sidra's structured lessons take you from the absolute basics to test-ready, one step at a time.",
  },
  {
    icon: '🌏',
    title: 'Students from diverse backgrounds',
    body: 'Many of our students from Chinese, Korean, Indian, and Middle Eastern communities specifically request a female instructor. You\'re welcome here.',
  },
  {
    icon: '✈️',
    title: 'Overseas licence holders',
    body: 'Converting your overseas licence? Sidra understands the adjustments international drivers need to make and tailors every lesson accordingly.',
  },
];

const reviews = [
  {
    text: 'Sidra is a fantastic instructor — calm, patient and incredibly knowledgeable. I was nervous every lesson but she always put me at ease. Passed first attempt.',
    name: 'Priya M.',
    suburb: 'Eastwood NSW',
  },
  {
    text: 'Best driving school in Sydney. Sidra made me feel confident behind the wheel and the 3-for-1 logbook hours saved me so much time.',
    name: 'James W.',
    suburb: 'Epping NSW',
  },
];

const col1 = suburbs.slice(0, 12);
const col2 = suburbs.slice(12);

export default function FemaleInstructorPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] pt-16 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label font-outfit inline-block mb-4">FEMALE INSTRUCTOR</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
            A female driving instructor{' '}
            <span style={{ color: '#F5C132' }}>who gets it.</span>
          </h1>
          <p className="font-outfit text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Sidra has been helping students learn to drive with patience, calm, and zero judgement since she joined L Plus P. Available across 24 north-west Sydney suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/book?service=female-instructor"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors text-center"
              style={{ background: '#F5C132', color: '#0B1628' }}
            >
              Book with Sidra →
            </Link>
            <a
              href="tel:0451331140"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors text-center"
            >
              Call Sidra — 0451 331 140
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Est. 1997', 'Automatic Cars Only', 'Free Pick-up & Drop-off'].map((badge) => (
              <span
                key={badge}
                className="font-outfit text-xs px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(245,193,50,0.1)', color: '#F5C132', border: '1px solid rgba(245,193,50,0.2)' }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET SIDRA ─────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Avatar */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* TODO: Replace with Sidra's professional photo — /public/sidra.jpg */}
            <div
              className="w-48 h-48 rounded-3xl flex items-center justify-center flex-shrink-0"
              style={{ background: '#F5C132' }}
            >
              <span className="font-syne font-bold text-[#0B1628]" style={{ fontSize: 80, lineHeight: 1 }}>S</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Senior Instructor', 'Automatic cars only', 'Available 6 days a week', 'All 24 suburbs covered'].map((fact) => (
                <span
                  key={fact}
                  className="font-outfit text-xs px-3 py-1.5 rounded-full"
                  style={{ background: '#F7F9FF', color: '#2D4470', border: '1px solid #E8EEF8' }}
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>
          {/* Bio */}
          <div>
            <span className="section-label font-outfit">MEET YOUR INSTRUCTOR</span>
            <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-4">
              Meet Sidra
            </h2>
            <p className="font-outfit text-[#6B7FA8] text-base leading-relaxed mb-6">
              Sidra is L Plus P&apos;s Senior Instructor with years of experience teaching learners of all ages and backgrounds. She&apos;s known for her calm, patient approach — especially with nervous first-time drivers.
            </p>
            <p className="font-outfit text-[#6B7FA8] text-base leading-relaxed mb-8">
              Whether you&apos;re just starting out, converting an overseas licence, or preparing for your test, Sidra will meet you where you are and help you build real confidence behind the wheel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book?service=female-instructor"
                className="font-outfit font-bold text-sm px-6 py-3 rounded-xl transition-colors text-center"
                style={{ background: '#F5C132', color: '#0B1628' }}
              >
                Book with Sidra →
              </Link>
              <a
                href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20with%20Sidra"
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit font-bold text-sm px-6 py-3 rounded-xl border border-[#E8EEF8] text-[#2D4470] hover:bg-[#F7F9FF] transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">WHO WE HELP</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-10">
            Who books with Sidra?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl p-7"
                style={{ background: '#ffffff', border: '1px solid #E8EEF8' }}
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="font-heading font-bold text-lg text-[#0B1628] mb-2">{a.title}</h3>
                <p className="font-outfit text-[#6B7FA8] text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">STUDENT REVIEWS</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-10">
            What students say about Sidra
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl p-7"
                style={{ background: '#F7F9FF', border: '1px solid #E8EEF8' }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#F5C132', fontSize: 16 }}>★</span>
                  ))}
                </div>
                <div className="font-syne text-6xl leading-none select-none mb-1" style={{ color: 'rgba(245,193,50,0.15)' }}>&ldquo;</div>
                <p className="font-outfit text-base text-[#3a4a6a] leading-relaxed italic mb-5">&ldquo;{r.text}&rdquo;</p>
                <p className="font-outfit font-bold text-sm text-[#0B1628]">{r.name}</p>
                <p className="font-mono text-xs text-[#6B7FA8] mt-0.5">{r.suburb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">PRICING</span>
          <h2 className="font-heading font-extrabold text-4xl text-white mt-1 mb-3">
            Simple, honest rates
          </h2>
          <p className="font-outfit text-white/40 text-sm mb-10">
            All prices are the same regardless of instructor — no premium for booking with Sidra.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Casual Lesson', price: 'from $60', note: 'Per hour' },
              { label: '5-Hour Pack', price: '$275', note: 'Save $25' },
              { label: '10-Hour Pack', price: '$550', note: 'Save $50 · 30 logbook hrs' },
              { label: 'Mock Test', price: 'from $65', note: 'On real test routes' },
            ].map((pkg) => (
              <div
                key={pkg.label}
                className="rounded-2xl p-5 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="font-outfit text-white/50 text-xs mb-2">{pkg.label}</p>
                <p className="font-syne font-bold text-2xl" style={{ color: '#F5C132' }}>{pkg.price}</p>
                <p className="font-outfit text-white/35 text-xs mt-1">{pkg.note}</p>
              </div>
            ))}
          </div>
          <p className="font-outfit text-white/30 text-sm text-center">
            All prices include free pick-up and drop-off. ·{' '}
            <Link href="/#pricing" className="underline hover:text-white/60 transition-colors">
              See full pricing
            </Link>
          </p>
        </div>
      </section>

      {/* ── SUBURBS ────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">SERVICE AREA</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-10">
            Suburbs covered by Sidra
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2">
            <div className="flex flex-col gap-2">
              {col1.slice(0, 6).map((s) => (
                <span key={s.slug} className="font-outfit text-sm text-[#6B7FA8]">• {s.name}</span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {col1.slice(6).map((s) => (
                <span key={s.slug} className="font-outfit text-sm text-[#6B7FA8]">• {s.name}</span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {col2.slice(0, 6).map((s) => (
                <span key={s.slug} className="font-outfit text-sm text-[#6B7FA8]">• {s.name}</span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {col2.slice(6).map((s) => (
                <span key={s.slug} className="font-outfit text-sm text-[#6B7FA8]">• {s.name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-[72px] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-4xl text-white mb-3">
            Book a lesson with Sidra today
          </h2>
          <p className="font-outfit text-white/50 text-base mb-8">
            We confirm within 1 hour. Free pick-up and drop-off included.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book?service=female-instructor"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              style={{ background: '#F5C132', color: '#0B1628' }}
            >
              Book Online →
            </Link>
            <a
              href="tel:0451331140"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Call Sidra — 0451 331 140
            </a>
            <a
              href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20with%20Sidra"
              target="_blank"
              rel="noopener noreferrer"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              style={{ background: '#25D366', color: '#ffffff' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
