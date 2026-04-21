import type { Metadata } from 'next';
import Link from 'next/link';
import { TRUST_STATS } from '@/lib/trustStats';
import { suburbs } from '@/lib/suburbs';
import FAQSection from '@/components/FAQSection';
import InstructorCard from '@/components/InstructorCard';
import MatchCard from '@/components/MatchCard';

export const metadata: Metadata = {
  title: 'L Plus P Driving School | Driving Lessons Sydney | Est. 1997',
  description:
    "Sydney's most trusted driving school since 1997. Expert driving lessons in North Ryde, Ryde, Epping, Castle Hill, Chatswood and 24 suburbs. Automatic cars, 3-for-1 logbook hours. Call Mick 0469 370 978.",
  alternates: { canonical: '/' },
};

/* ── FAQ data (replaced in Section 9) ─────────────────────────────────── */
const faqs = [
  {
    question: 'How many lessons do I need?',
    answer:
      'Most students need between 5 and 15 hours depending on their starting level. Complete beginners usually book our 10-hour package; students who\u2019ve driven before often just need 5 hours of targeted practice before their test.',
  },
  {
    question: 'Do you cover my suburb?',
    answer:
      'We cover 24 suburbs across north-west Sydney \u2014 North Ryde, Eastwood, Epping, Castle Hill, Macquarie Park, Ryde, Chatswood, Silverwater and more. If your suburb isn\u2019t listed, call Mick or Sidra \u2014 we can usually still help.',
  },
];

/* ── Matchmaker archetypes (Section 4) ───────────────────────────────── */
const matchmaker = [
  {
    number: '01',
    variant: 'light' as const,
    title: 'I just got my Ls.',
    body: 'Fresh learner driver. Zero experience. Needs patient teaching from scratch + logbook hours fast.',
    packageLabel: '10-hour pack',
    price: '$550',
    ctaLabel: 'Book now \u2192',
    ctaHref: '/book?service=learner',
  },
  {
    number: '02',
    variant: 'dark' as const,
    badge: 'Most booked',
    title: 'My test is in 2 weeks.',
    body: 'Test booked. Needs serious prep on the actual routes Service NSW examiners use. Fast, focused.',
    packageLabel: '6hr + test day',
    price: '$500',
    ctaLabel: 'Book now \u2192',
    ctaHref: '/book?service=test-prep',
  },
  {
    number: '03',
    variant: 'light' as const,
    title: 'I failed last time.',
    body: 'Been there. Mock test identifies what went wrong, then 2\u20133 lessons to fix it. Most pass next try.',
    packageLabel: 'Mock test',
    price: '$65',
    ctaLabel: 'Book now \u2192',
    ctaHref: '/book?service=test-prep',
  },
];

/* ── Instructors (Section 3) ─────────────────────────────────────────── */
const instructors = [
  {
    initial: 'M',
    title: 'Head instructor · Since 1997',
    name: 'Mick',
    tagline: 'The instructor who gets you through test day.',
    bio: [
      "28 years of teaching Sydney learners. Specialises in nervous students, overseas drivers, and the ones who've failed before and think they can't pass. Knows every test centre route in north-west Sydney by heart.",
    ],
    quote: '\u201CMy job isn\u2019t to get you to pass once. It\u2019s to make sure you drive safely for the next fifty years.\u201D',
    phone: '0469 370 978',
    phoneHref: 'tel:0469370978',
    bookHref: '/book?instructor=mick',
  },
  {
    initial: 'S',
    badge: 'Student favourite',
    title: 'Senior instructor · Loved by students',
    name: 'Sidra',
    tagline: 'Calm, patient, and somehow makes driving fun.',
    bio: [
      'If you\u2019ve ever sat in a driving lesson and felt your palms sweat, Sidra is your instructor. She teaches with excitement, not pressure. Her students describe her as warm, endlessly patient, and the person who took them from \u201CI can\u2019t do this\u201D to passing first try.',
      "Perfect for learners who prefer a female instructor, anyone nervous behind the wheel, or students coming back to driving after a break. Confidence boosted from zero \u2014 that\u2019s her specialty.",
    ],
    quote: '\u201CSidra is a fantastic instructor \u2014 calm, patient and incredibly knowledgeable. I was nervous every lesson but she always put me at ease. Passed first attempt.\u201D \u2014 Priya M., Eastwood',
    phone: '0451 331 140',
    phoneHref: 'tel:0451331140',
    bookHref: '/book?instructor=sidra',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          SECTION 2 \u2014 HERO
          ══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)' }}>
        <div
          className="hero-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '72px 32px 48px',
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gap: '56px',
            alignItems: 'end',
          }}
        >
          {/* Left column */}
          <div>
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--ink-60)',
                margin: 0,
                marginBottom: '24px',
              }}
            >
              North-West Sydney · Family-run since {TRUST_STATS.yearEstablished}
            </p>

            <h1
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: 'clamp(44px, 7vw, 76px)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: 'var(--navy-ink)',
                margin: 0,
                marginBottom: '28px',
              }}
            >
              The driving school<br />
              your{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: 'var(--gold-deep)',
                }}
              >
                parents
              </span>{' '}
              would pick.
            </h1>

            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.5,
                color: 'var(--ink-60)',
                maxWidth: '46ch',
                margin: 0,
                marginBottom: '32px',
              }}
            >
              Mick and Sidra have taught over {TRUST_STATS.studentsTaught.toLocaleString()} students to drive across North-West Sydney. Automatic cars, free pick-up, patient instructors who know every local test route by heart.
            </p>

            <div
              className="hero-ctas"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}
            >
              <Link
                href="/book"
                style={{
                  background: 'var(--navy)',
                  color: 'var(--cream)',
                  padding: '18px 36px',
                  fontFamily: 'var(--type-body)',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  borderRadius: '2px',
                  display: 'inline-block',
                }}
              >
                Book your first lesson →
              </Link>
              <a
                href="https://wa.me/61469370978"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--type-body)',
                  fontSize: '15px',
                  color: 'var(--navy-ink)',
                  fontWeight: 500,
                  borderBottom: '1px solid var(--navy-ink)',
                  paddingBottom: '2px',
                }}
              >
                WhatsApp us
              </a>
            </div>

            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '13px',
                color: 'var(--ink-60)',
                margin: 0,
              }}
            >
              Or call direct —{' '}
              <a href="tel:0469370978" style={{ color: 'var(--navy-ink)' }}>
                Mick 0469 370 978
              </a>{' '}
              ·{' '}
              <a href="tel:0451331140" style={{ color: 'var(--navy-ink)' }}>
                Sidra 0451 331 140
              </a>
            </p>
          </div>

          {/* Right column \u2014 stats panel */}
          <aside
            className="hero-stats"
            style={{
              borderTop: '1px solid var(--hairline)',
              borderBottom: '1px solid var(--hairline)',
            }}
          >
            {[
              { label: 'First-attempt pass rate', value: `${TRUST_STATS.firstAttemptPassRate}`, suffix: '%' },
              { label: 'Students taught', value: `${TRUST_STATS.studentsTaught.toLocaleString()}+`, suffix: '' },
              { label: 'Google reviews', value: `${TRUST_STATS.rating}`, suffix: ' \u2605' },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '20px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--hairline)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--type-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--ink-60)',
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--type-display)',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'var(--navy-ink)',
                    lineHeight: 1,
                  }}
                >
                  {row.value}
                  {row.suffix && (
                    <span style={{ color: row.suffix === '%' ? 'var(--gold-deep)' : 'var(--gold-deep)' }}>
                      {row.suffix}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </aside>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              padding: 48px 20px 32px !important;
            }
            .hero-ctas > a:first-child {
              width: 100%;
              text-align: center;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 4 — MATCHMAKER
          ══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '72px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: '24px',
                color: 'var(--gold-deep)',
                margin: 0,
                marginBottom: '8px',
              }}
            >
              02
            </p>
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--ink-60)',
                margin: 0,
                marginBottom: '20px',
              }}
            >
              Where do you start?
            </p>
            <h2
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--navy-ink)',
                margin: 0,
              }}
            >
              Three ways{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--gold-deep)' }}>
                people find us.
              </span>
            </h2>
          </div>

          <div
            className="match-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            {matchmaker.map((m) => (
              <MatchCard key={m.number} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 3 — INSTRUCTORS (equal-height cards)
          ══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--navy)', color: 'var(--cream)', padding: '72px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: '24px',
                color: 'var(--gold)',
                margin: 0,
                marginBottom: '8px',
              }}
            >
              01
            </p>
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'rgba(250, 247, 242, 0.55)',
                margin: 0,
                marginBottom: '20px',
              }}
            >
              Your instructors
            </p>
            <h2
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--cream)',
                margin: 0,
                marginBottom: '20px',
              }}
            >
              You&apos;ll learn with{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--gold)' }}>
                Mick or Sidra.
              </span>
            </h2>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.5,
                color: 'rgba(250, 247, 242, 0.6)',
                maxWidth: '50ch',
                margin: 0,
              }}
            >
              Not whoever&apos;s available that day. Two instructors, two phone numbers. Pick the one you want.
            </p>
          </div>

          {/* Cards grid */}
          <div
            className="instructor-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '40px',
              alignItems: 'stretch',
            }}
          >
            {instructors.map((inst) => (
              <InstructorCard key={inst.name} {...inst} />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .instructor-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </section>

      {/* ── PRICING (placeholder \u2014 rebuilt Section 5) ──────────────── */}
      <section id="pricing" className="py-[72px] px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-syne font-semibold text-3xl sm:text-4xl mb-4" style={{ color: 'var(--navy-ink)' }}>
            Simple, honest rates
          </h2>
          <p style={{ color: 'var(--ink-60)' }}>Starting from $60/hr. Rates confirmed instantly at booking.</p>
        </div>
      </section>

      {/* ── SOCIAL PROOF (placeholder \u2014 rebuilt Section 6) ─────────── */}
      <section className="py-[72px] px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <blockquote className="font-syne italic text-2xl leading-snug pl-5" style={{ color: 'var(--navy-ink)', borderLeft: '3px solid var(--gold-deep)' }}>
            &ldquo;Failed twice elsewhere. Came to Mick, passed first try.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm" style={{ color: 'var(--ink-60)' }}>
            <span className="font-medium" style={{ color: 'var(--navy-ink)' }}>Tom W.</span> — Castle Hill
          </p>
        </div>
      </section>

      {/* ── SERVICE AREA (placeholder \u2014 rebuilt Section 7) ────────── */}
      <section className="px-6 py-[72px]" style={{ background: 'var(--gold)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-syne font-semibold text-3xl sm:text-4xl mb-6" style={{ color: 'var(--navy-ink)' }}>
            24 suburbs across north-west Sydney
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2">
            {suburbs.slice(0, 12).map((s) => (
              <Link
                key={s.slug}
                href={`/driving-lessons/${s.slug}`}
                className="text-sm py-2"
                style={{ color: 'var(--navy-ink)', borderBottom: '1px solid rgba(10,21,48,0.2)' }}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERRAL (placeholder \u2014 rebuilt Section 8) ─────────────── */}
      <section className="py-14 px-6 text-center" style={{ background: 'var(--navy)', color: 'var(--cream)' }}>
        <div className="max-w-2xl mx-auto">
          <p className="font-syne text-xl sm:text-2xl leading-snug">
            They save 10% on their first lesson. You save 10% on your next. <em style={{ color: 'var(--gold)' }}>Do it as often as you like.</em>
          </p>
          <Link href="/refer" className="inline-block mt-6 px-7 py-3 border text-sm" style={{ borderColor: 'rgba(250,247,242,0.3)', color: 'var(--cream)' }}>
            How it works →
          </Link>
        </div>
      </section>

      {/* ── FAQ (placeholder \u2014 rebuilt Section 9) ──────────────────── */}
      <section className="py-[72px] px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-syne font-semibold text-3xl sm:text-4xl mb-8 text-center" style={{ color: 'var(--navy-ink)' }}>
            Common questions
          </h2>
          <FAQSection items={faqs} />
        </div>
      </section>

      {/* ── FINAL CTA (placeholder \u2014 rebuilt Section 10) ────────────── */}
      <section className="py-[64px] px-6 text-center" style={{ background: 'var(--navy)', color: 'var(--cream)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-semibold text-3xl sm:text-4xl mb-4">
            Ready to start?
          </h2>
          <Link
            href="/book"
            className="inline-block px-8 py-4"
            style={{ background: 'var(--gold)', color: 'var(--navy-ink)' }}
          >
            Book your first lesson →
          </Link>
        </div>
      </section>
    </>
  );
}
