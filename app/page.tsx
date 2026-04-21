import type { Metadata } from 'next';
import Link from 'next/link';
import { TRUST_STATS } from '@/lib/trustStats';
import { suburbs } from '@/lib/suburbs';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'L Plus P Driving School | Driving Lessons Sydney | Est. 1997',
  description:
    "Sydney's most trusted driving school since 1997. Expert driving lessons in North Ryde, Ryde, Epping, Castle Hill, Chatswood and 24 suburbs. Automatic cars, 3-for-1 logbook hours. Call Mick 0469 370 978.",
  alternates: { canonical: '/' },
};

/* ── FAQ data ─────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: 'How many lessons do I need?',
    answer:
      'It depends on your experience and how quickly you progress. Complete beginners typically need 10–20 hours. Those with some supervised driving experience usually need 5–10 hours. We assess your ability in the first lesson and recommend the right package.',
  },
  {
    question: 'Do you cover my suburb?',
    answer:
      'We cover 24 suburbs across north-west Sydney including North Ryde, Ryde, Epping, Carlingford, Castle Hill, Chatswood, Meadowbank, Auburn, and more. Pick-up and drop-off is always free.',
  },
  {
    question: 'What is the 3-for-1 logbook scheme?',
    answer:
      'For learner drivers under 25, every 1 hour of professional instruction counts as 3 logbook hours. A 10-hour package counts as 30 logbook hours toward your 120-hour requirement — saving you months of supervised driving.',
  },
  {
    question: 'Can I use your car for the driving test?',
    answer:
      'Yes. Our Test Day Package ($170) includes a 1-hour warm-up lesson, use of our dual-control automatic car for the test, and pick-up/drop-off. Available at Ryde, Silverwater, Castle Hill, Chatswood and Hornsby test centres.',
  },
  {
    question: 'Do you offer overseas licence conversion?',
    answer:
      'Yes. We tailor lessons to help you understand Australian road rules, gain confidence on local roads, and pass the practical test first time. We also pick up from Macquarie University campus for international students.',
  },
  {
    question: 'Do you have a female instructor?',
    answer:
      'Yes. Sidra is our senior female instructor available across all 24 suburbs. Many students specifically request Sidra for a more comfortable learning environment. Call her directly on 0451 331 140.',
  },
];

/* ── Matchmaker archetypes ────────────────────────────────────────────── */
const matchmaker = [
  {
    tag: 'Just got my Ls',
    title: 'Start with the basics — properly',
    body: 'Complete beginners pick up faster when they start with a structured instructor. Every hour with us counts as 3 logbook hours under the 3-for-1 scheme.',
    cta: 'Learner driver lessons',
    href: '/book?service=learner',
  },
  {
    tag: 'Test in 2 weeks',
    title: 'Lock in test-route practice',
    body: 'We know every turn on the Ryde, Silverwater, Castle Hill, Chatswood and Hornsby routes. 2–3 targeted lessons is usually enough.',
    cta: 'Test prep lessons',
    href: '/book?service=test-prep',
  },
  {
    tag: 'Failed last time',
    title: 'Fix what went wrong — fast',
    body: 'Most second-attempt students pass in 2–3 lessons once we pinpoint the issue. Mock tests on the actual route tell us exactly what to fix.',
    cta: 'Book a mock test',
    href: '/book?service=test-prep',
  },
];

/* ── Instructors ──────────────────────────────────────────────────────── */
const instructors = [
  {
    initial: 'M',
    name: 'Mick',
    role: 'Head Instructor',
    phone: '0469 370 978',
    tel: '0469370978',
    bio: `Teaching Sydney drivers since ${TRUST_STATS.yearEstablished} — over ${TRUST_STATS.yearsOperating} years on the same roads your test will be on. Mick specialises in learner drivers, driving test preparation, and overseas licence conversion. His calm, structured approach means students who failed elsewhere regularly pass first time with him.`,
    quote: '"Pass first time or we keep working until you do."',
    tags: ['Learner drivers', 'Test prep', 'Overseas conversion', 'Nervous drivers'],
  },
  {
    initial: 'S',
    name: 'Sidra',
    role: 'Senior Instructor · Female',
    phone: '0451 331 140',
    tel: '0451331140',
    bio: 'Senior female instructor available across all 24 suburbs. Students from Chinese, Korean, Indian and Middle Eastern communities specifically request Sidra for a comfortable, patient environment — it makes a real difference for learners who feel anxious. Covers learner lessons, test prep, and overseas conversion.',
    quote: '"A calm car is a safe car."',
    tags: ['Female instructor', 'Nervous learners', 'Overseas conversion', 'Multilingual'],
  },
];

/* ════════════════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-texture bg-[#0B1628] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Left — headline + CTAs */}
            <div className="flex flex-col gap-6">
              <div className="hero-tag">
                <span className="inline-flex items-center gap-2 bg-[#F5C132]/12 border border-[#F5C132]/30 rounded-full px-3.5 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5C132] flex-shrink-0" />
                  <span className="font-outfit font-semibold text-[#F5C132] text-xs uppercase tracking-widest">
                    Est. {TRUST_STATS.yearEstablished} — Sydney&apos;s most trusted
                  </span>
                </span>
              </div>

              <h1
                className="hero-headline font-syne font-extrabold text-white leading-[1.02]"
                style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}
              >
                Learn.
                <br />
                Practice.
                <br />
                <span className="hero-gold">Pass.</span>
              </h1>

              <p className="hero-subtext font-outfit text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                North Ryde&apos;s family-run driving school since {TRUST_STATS.yearEstablished}. Automatic cars, free pick-up and drop-off across 24 Sydney suburbs.
              </p>

              <hr
                className="hero-rule border-0 self-start"
                style={{ height: '1px', width: '200px', background: 'rgba(245,193,50,0.4)' }}
              />

              <div className="hero-buttons flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="bg-[#F5C132] text-[#0B1628] font-outfit font-bold px-7 py-3.5 rounded-xl hover:bg-[#E8A800] transition-colors text-center"
                >
                  Book a lesson →
                </Link>
                <a
                  href="tel:0469370978"
                  className="border-2 border-white/25 text-white font-outfit font-semibold px-7 py-3.5 rounded-xl hover:border-white/60 transition-colors text-center"
                >
                  Call Mick · 0469 370 978
                </a>
              </div>
            </div>

            {/* Right — stats panel */}
            <div
              className="rounded-2xl p-7 sm:p-8 flex flex-col gap-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(245,193,50,0.18)',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[#F5C132] text-base">★★★★★</span>
                <span className="font-outfit text-white/70 text-sm">{TRUST_STATS.rating} · {TRUST_STATS.reviewCount}+ Google reviews</span>
              </div>

              <div className="h-px bg-white/8" />

              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: `${TRUST_STATS.yearsOperating}+`, label: 'Years teaching' },
                  { value: `${TRUST_STATS.studentsTaught.toLocaleString()}+`, label: 'Students taught' },
                  { value: `${TRUST_STATS.firstAttemptPassRate}%`, label: 'First-attempt pass' },
                  { value: '24', label: 'Suburbs covered' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="font-syne font-bold text-3xl sm:text-4xl text-[#F5C132] leading-none">
                      {stat.value}
                    </span>
                    <span className="font-outfit text-white/50 text-xs">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/8" />

              <ul className="flex flex-col gap-2">
                {[
                  'Automatic cars only',
                  'Free pick-up & drop-off',
                  '3-for-1 logbook hours',
                  'Female instructor available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-outfit text-white/65 text-sm">
                    <span className="text-[#F5C132] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MATCHMAKER ────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label-blue font-outfit">Start here</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1628] mt-1">
              Which one sounds like you?
            </h2>
            <p className="font-outfit text-[#6B7FA8] text-base mt-3 max-w-2xl mx-auto">
              Pick the closest match — we&apos;ll point you to the right lesson in one click.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {matchmaker.map((m) => (
              <Link
                key={m.tag}
                href={m.href}
                className="group flex flex-col p-7 rounded-2xl bg-[#F7F9FF] border border-[#E8EEF8] hover:border-[#F5C132] hover:shadow-[0_4px_24px_rgba(245,193,50,0.15)] transition-all"
              >
                <span className="font-mono text-xs text-[#F5C132] uppercase tracking-[0.12em] mb-3">
                  {m.tag}
                </span>
                <h3 className="font-heading font-bold text-xl text-[#0B1628] mb-3 leading-snug">
                  {m.title}
                </h3>
                <p className="font-outfit text-[#6B7FA8] text-sm leading-relaxed flex-1 mb-5">
                  {m.body}
                </p>
                <span className="font-outfit font-semibold text-sm text-[#0B1628] group-hover:text-[#E8A800] transition-colors">
                  {m.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUCTORS ───────────────────────────────────────────────── */}
      <section className="bg-[#0a0f1e] py-[72px] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="section-label font-outfit">Your instructors</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              The people in the car with you
            </h2>
            <p className="font-outfit text-white/55 text-base mt-3 leading-relaxed">
              Between them, Mick and Sidra have spent over {TRUST_STATS.yearsOperating} years on Sydney roads. They know every test route, every tricky intersection, and exactly where learners go wrong.
            </p>
          </div>

          {/* Equal-height cards: items-stretch + h-full + flex-1 on bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {instructors.map((inst) => (
              <div
                key={inst.name}
                className="rounded-2xl p-7 flex flex-col h-full"
                style={{
                  background: 'var(--navy-elevated)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(245,200,66,0.12)' }}
                  >
                    <span className="font-syne font-bold text-[#F5C842] text-2xl">{inst.initial}</span>
                  </div>
                  <div>
                    <p className="font-syne font-bold text-white text-xl">{inst.name}</p>
                    <p className="font-outfit text-[#F5C842] text-xs uppercase tracking-wider">{inst.role}</p>
                  </div>
                </div>

                <p className="font-outfit text-gray-300 text-sm leading-relaxed mb-5 flex-1">
                  {inst.bio}
                </p>

                <p
                  className="font-syne italic text-white/80 text-base leading-snug mb-5 pl-4"
                  style={{ borderLeft: '2px solid #F5C842' }}
                >
                  {inst.quote}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {inst.tags.map((t) => (
                    <span
                      key={t}
                      className="font-outfit text-xs px-2.5 py-1 rounded-full text-gray-400"
                      style={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Link
                    href="/book"
                    className="flex-1 text-center font-outfit font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
                    style={{ background: '#F5C842', color: '#0a0f1e' }}
                  >
                    Book with {inst.name}
                  </Link>
                  <a
                    href={`tel:${inst.tel}`}
                    className="flex-1 text-center font-outfit font-semibold text-sm px-5 py-2.5 rounded-lg border border-white/15 text-white hover:border-white/40 transition-colors"
                  >
                    {inst.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/instructors"
              className="font-outfit text-sm text-white/55 hover:text-[#F5C842] transition-colors underline underline-offset-4"
            >
              Full instructor profiles →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section id="pricing" className="bg-[#0B1628] py-[72px] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="section-label font-outfit">Transparent pricing</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Simple, honest pricing
            </h2>
            <p className="font-outfit text-white/55 text-base mt-3">
              No hidden fees. Starting from $60/hr — final rate confirmed instantly when you book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {/* Casual */}
            <div className="rounded-2xl p-7 flex flex-col bg-[#162440] border border-white/7">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-white/40 mb-3">
                Casual Lessons
              </span>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-outfit text-white/40 text-xs">from</span>
                <span className="font-syne font-bold text-[#F5C132] text-5xl leading-none">$60</span>
                <span className="font-outfit text-white/50 text-sm">/hr</span>
              </div>
              <p className="font-outfit text-white/50 text-sm mb-6">Pay as you go — no upfront commitment.</p>
              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {[
                  '1 hour — $60',
                  '1.5 hours — $85',
                  '2 hours — $110',
                  'Free pick-up & drop-off',
                  'Automatic vehicle',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-outfit text-white/70 text-sm">
                    <span className="text-[#F5C132] mt-0.5 flex-shrink-0">›</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="mt-auto text-center bg-white/8 border border-white/15 text-white font-outfit font-bold text-sm py-3 rounded-lg hover:bg-white/12 transition-colors"
              >
                Book a lesson
              </Link>
            </div>

            {/* Packages — FEATURED */}
            <div
              className="rounded-2xl p-7 flex flex-col relative"
              style={{
                background: 'linear-gradient(180deg, #162a54 0%, #0f1e3e 100%)',
                border: '1.5px solid #F5C132',
                boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
              }}
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-[0.1em] whitespace-nowrap">
                Most Popular
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#F5C132] mb-3">
                10-Hour Package
              </span>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-syne font-bold text-[#F5C132] text-5xl leading-none">$550</span>
                <span className="font-outfit text-white/50 text-sm line-through">$600</span>
              </div>
              <p className="font-outfit text-white/60 text-sm mb-6">Save $50 · Best value for learners.</p>
              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {[
                  '10 hours of structured lessons',
                  '30 logbook hours (3-for-1)',
                  'Priority scheduling',
                  'Free pick-up & drop-off',
                  'Valid 6 months',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-outfit text-white/85 text-sm">
                    <span className="text-[#F5C132] mt-0.5 flex-shrink-0">›</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="mt-auto text-center bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-sm py-3 rounded-lg hover:bg-[#E8A800] transition-colors"
              >
                Book 10-hour package →
              </Link>
            </div>

            {/* Test Prep */}
            <div className="rounded-2xl p-7 flex flex-col bg-[#162440] border border-white/7">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-white/40 mb-3">
                Test Prep
              </span>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-outfit text-white/40 text-xs">from</span>
                <span className="font-syne font-bold text-[#F5C132] text-5xl leading-none">$65</span>
              </div>
              <p className="font-outfit text-white/50 text-sm mb-6">Know the route. Pass the test.</p>
              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {[
                  'Mock test — $65',
                  'Test Day Package — $170',
                  '6 hrs + Test Day — $500',
                  'All local test routes',
                  'Dual-control automatic',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-outfit text-white/70 text-sm">
                    <span className="text-[#F5C132] mt-0.5 flex-shrink-0">›</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book?service=test-prep"
                className="mt-auto text-center bg-white/8 border border-white/15 text-white font-outfit font-bold text-sm py-3 rounded-lg hover:bg-white/12 transition-colors"
              >
                Book test prep
              </Link>
            </div>
          </div>

          <p className="font-outfit text-xs text-white/35 mt-8 max-w-3xl">
            Casual lesson rates start from $60/hr and may vary slightly by suburb. Package and test-prep prices are fixed at the rates shown. 3-for-1 logbook scheme applies to learners under 25.
          </p>
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">

            {/* Testimonial */}
            <figure className="flex flex-col gap-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#F5C132]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote
                className="font-syne italic text-2xl sm:text-3xl text-[#0B1628] leading-snug pl-5"
                style={{ borderLeft: '3px solid #F5C132' }}
              >
                &ldquo;After failing twice elsewhere, I came to L Plus P and passed first try. Mick identified exactly what I was doing wrong and fixed it in 3 lessons.&rdquo;
              </blockquote>
              <figcaption className="font-outfit text-sm text-[#6B7FA8]">
                <span className="font-semibold text-[#0B1628]">Tom W.</span> — Castle Hill NSW
              </figcaption>
            </figure>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: `${TRUST_STATS.rating}★`, label: `${TRUST_STATS.reviewCount}+ Google reviews` },
                { value: `${TRUST_STATS.firstAttemptPassRate}%`, label: 'First-attempt pass rate' },
                { value: `${TRUST_STATS.studentsTaught.toLocaleString()}+`, label: 'Students taught' },
                { value: `${TRUST_STATS.yearsOperating}+`, label: 'Years operating' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-[#F7F9FF] border border-[#E8EEF8]"
                >
                  <span className="font-syne font-bold text-3xl text-[#0B1628] block leading-none">
                    {stat.value}
                  </span>
                  <span className="font-outfit text-xs text-[#6B7FA8] mt-2 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA (gold block) ─────────────────────────────────── */}
      <section className="px-6 py-[72px]" style={{ background: '#F5C132' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#0B1628]/60">
              Where we teach
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1628] mt-2">
              24 suburbs across north-west Sydney
            </h2>
            <p className="font-outfit text-[#0B1628]/70 text-base mt-3">
              Free pick-up and drop-off at every address we cover. Each suburb has its own page with local test-route intel.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2">
            {suburbs.map((s) => (
              <Link
                key={s.slug}
                href={`/driving-lessons/${s.slug}`}
                className="font-outfit text-[#0B1628] text-sm py-2 border-b border-[#0B1628]/15 hover:border-[#0B1628] transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERRAL BANNER (navy) ────────────────────────────────────── */}
      <section className="bg-[#0a0f1e] py-14 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#F5C132]">
              Refer a mate
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-2 mb-2">
              Everyone you refer = another discount
            </h2>
            <p className="font-outfit text-white/65 text-sm sm:text-base leading-relaxed">
              They save <span className="text-[#F5C132] font-semibold">10%</span> on their first lesson. You save <span className="text-[#F5C132] font-semibold">10%</span> on your next. Refer as many people as you like — each one earns you another discount.
            </p>
          </div>
          <Link
            href="/refer"
            className="flex-shrink-0 font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors self-start whitespace-nowrap"
            style={{ background: '#F5C132', color: '#0B1628' }}
          >
            How it works →
          </Link>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label-blue font-outfit">Common questions</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B1628] mt-1">
              Frequently asked
            </h2>
            <p className="font-outfit text-[#6B7FA8] text-base mt-3">
              Can&apos;t find your question?{' '}
              <Link href="/faq" className="text-[#0B1628] underline underline-offset-4 hover:text-[#E8A800] transition-colors">
                See the full FAQ
              </Link>.
            </p>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-[72px] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="section-label font-outfit">Ready when you are</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-[42px] text-white mt-2 mb-4 leading-tight">
            Book your first lesson
          </h2>
          <p className="font-outfit text-white/60 text-base mb-8">
            One form. One hour. We&apos;ll be back in touch within 60 minutes to confirm your time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-base px-8 py-4 rounded-xl hover:bg-[#E8A800] transition-colors"
            >
              Book a lesson →
            </Link>
            <a
              href="tel:0469370978"
              className="border-2 border-white/25 text-white font-outfit font-semibold text-base px-8 py-4 rounded-xl hover:border-white/60 transition-colors"
            >
              Call Mick · 0469 370 978
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
