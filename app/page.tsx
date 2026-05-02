import type { Metadata } from 'next';
import Link from 'next/link';
import { TRUST_STATS } from '@/lib/trustStats';
import { suburbs } from '@/lib/suburbs';
import InstructorCard from '@/components/InstructorCard';
import MatchCard from '@/components/MatchCard';
import HeroSlideshow from './components/HeroSlideshow';
import HomepageBookingForm from './components/HomepageBookingForm';

export const metadata: Metadata = {
  title: 'L Plus P Driving School | Driving Lessons Sydney | Est. 1997',
  description:
    "Sydney's most trusted driving school since 1997. Expert driving lessons in North Ryde, Ryde, Epping, Castle Hill, Chatswood and 24 suburbs. Automatic cars, 3-for-1 logbook hours. Call Mick 0469 370 978.",
  alternates: { canonical: '/' },
};

/* ── FAQ data (Section 9) ─────────────────────────────────────────────── */
const faqs = [
  {
    q: 'How many lessons do I need?',
    a: 'Most students need between 5 and 15 hours depending on their starting level. Complete beginners usually book our 10-hour package; students who\u2019ve driven before often just need 5 hours of targeted practice before their test.',
  },
  {
    q: 'Do you cover my suburb?',
    a: 'We cover 24 suburbs across north-west Sydney \u2014 North Ryde, Eastwood, Epping, Castle Hill, Macquarie Park, Ryde, Chatswood, Silverwater and more. If your suburb isn\u2019t listed, call Mick or Sidra \u2014 we can usually still help.',
  },
  {
    q: 'What is the 3-for-1 logbook scheme?',
    a: 'For learners under 25, every 1 hour of supervised instruction with us counts as 3 hours in your logbook, up to a maximum of 30 logbook hours from 10 instructor hours. Our 10-hour package is designed around this scheme \u2014 it gets you to 120 hours faster.',
  },
  {
    q: 'Can I use your car for the driving test?',
    a: 'Yes. Our Test Day Package ($170) includes a 1-hour warm-up lesson, use of our automatic car for your Service NSW test, pick-up from your home, and drop-off after. Available at all test centres we serve (Ryde, Silverwater, Castle Hill, Chatswood, Hornsby).',
  },
  {
    q: 'Do you offer lessons for overseas licence holders?',
    a: 'Yes. We help overseas licence holders convert to NSW licences through our Overseas Licence Conversion programme. We focus on the Australian-specific road rules, local test routes, and the assessor expectations that differ from other countries.',
  },
  {
    q: 'How much does a driving lesson cost?',
    a: 'Casual lessons start from $60/hr for suburbs near North Ryde. Rates vary slightly by suburb (typically $60-75/hr). Package deals offer better value \u2014 5 hours for $275 or 10 hours for $550 with 30 logbook hours included.',
  },
  {
    q: 'How do I book?',
    a: 'Three ways: book online via our booking form, WhatsApp us, or call direct \u2014 Mick on 0469 370 978 or Sidra on 0451 331 140. We reply within the hour during business hours.',
  },
  {
    q: 'What if I fail my test?',
    a: 'Most of our test-day students pass first attempt (96% first-attempt rate). If you do fail, we offer discounted re-prep packages focused specifically on the areas you struggled with. A mock test on the actual test route is usually the fastest path to a pass next time.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

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
    ctaHref: '/#book',
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
    ctaHref: '/#book',
  },
  {
    number: '03',
    variant: 'light' as const,
    title: 'I failed last time.',
    body: 'Been there. Mock test identifies what went wrong, then 2\u20133 lessons to fix it. Most pass next try.',
    packageLabel: 'Mock test',
    price: '$65',
    ctaLabel: 'Book now \u2192',
    ctaHref: '/#book',
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
    bookHref: '/#book',
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
    bookHref: '/#book',
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
            gridTemplateColumns: '1.4fr 0.8fr 0.7fr',
            gap: '56px',
            alignItems: 'start',
          }}
        >
          {/* Column 1 — Copy */}
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

            {/* Macquarie Uni pick-up pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--paper)',
                border: '1px solid var(--hairline)',
                padding: '8px 14px',
                marginBottom: '28px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--gold-deep)',
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '12px',
                  color: 'var(--navy-ink)',
                  letterSpacing: '0.02em',
                }}
              >
                Pick-up from Macquarie Uni campus
              </span>
            </div>

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
                href="/#book"
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

          {/* Column 2 \u2014 Slideshow */}
          <div className="hero-photo-col">
            <HeroSlideshow />
          </div>

          <aside
            className="hero-stats"
            style={{
              borderTop: '1px solid var(--hairline)',
              borderBottom: '1px solid var(--hairline)',
            }}
          >
            {[
              { label: 'Pass rate', value: `${TRUST_STATS.firstAttemptPassRate}`, suffix: '%' },
              { label: 'Students taught', value: `${TRUST_STATS.studentsTaught.toLocaleString()}`, suffix: '+' },
              { label: 'Reviews', value: `${TRUST_STATS.rating}`, suffix: '\u2605' },
              { label: 'Best rate', value: '$55', suffix: '/hr' },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '18px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--hairline)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--type-mono)',
                    fontSize: '10px',
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
                    fontSize: '26px',
                    fontWeight: 700,
                    color: 'var(--navy-ink)',
                    lineHeight: 1,
                  }}
                >
                  {row.value}
                  <span style={{ color: 'var(--gold-deep)', fontSize: '20px', marginLeft: '2px' }}>
                    {row.suffix}
                  </span>
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
            .hero-photo-col {
              max-width: 320px;
              margin-left: auto;
              margin-right: auto;
              width: 100%;
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

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5 — DEDICATED PRICING
          ══════════════════════════════════════════════════════════════════ */}
      <section id="pricing" style={{ background: 'var(--cream)', padding: 'var(--space-section) 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
            <p
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: '24px',
                color: 'var(--gold-deep)',
                margin: 0,
                marginBottom: '8px',
              }}
            >
              03
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
              Transparent pricing
            </p>
            <h2
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--navy-ink)',
                margin: 0,
                marginBottom: '18px',
              }}
            >
              What does a{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 700, color: 'var(--gold-deep)' }}>
                lesson
              </span>{' '}
              cost?
            </h2>
            <p
              style={{
                fontFamily: 'var(--type-body)',
                fontSize: '17px',
                lineHeight: 1.55,
                color: 'var(--ink-60)',
                margin: 0,
                maxWidth: '60ch',
              }}
            >
              No hidden fees. Three core paths — pick the one that fits. Your exact rate confirmed the moment you book.
            </p>
          </div>

          {/* Three-card pricing grid */}
          <div
            className="pricing-cols"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
              borderTop: '1px solid var(--hairline)',
              borderBottom: '1px solid var(--hairline)',
              alignItems: 'stretch',
            }}
          >
            {/* Card 1 — Casual */}
            <div
              className="pricing-col"
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'var(--paper)',
                borderRight: '1px solid var(--hairline)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--ink-60)',
                  margin: 0,
                  marginBottom: '14px',
                }}
              >
                Pay as you go
              </p>
              <h3
                style={{
                  fontFamily: 'var(--type-display)',
                  fontSize: '28px',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: 'var(--navy-ink)',
                  margin: 0,
                  marginBottom: '24px',
                }}
              >
                Casual lesson
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--type-mono)',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    color: 'var(--ink-60)',
                    letterSpacing: '0.05em',
                  }}
                >
                  from
                </span>
                <span
                  style={{
                    fontFamily: 'var(--type-display)',
                    fontSize: '64px',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'var(--navy-ink)',
                    lineHeight: 1,
                  }}
                >
                  $60
                </span>
                <span
                  style={{
                    fontFamily: 'var(--type-mono)',
                    fontSize: '14px',
                    color: 'var(--ink-60)',
                  }}
                >
                  /hr
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--gold-deep)',
                  margin: 0,
                  marginBottom: '20px',
                }}
              >
                Single lessons · no commitment
              </p>

              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'var(--ink-60)',
                  margin: 0,
                  marginTop: '4px',
                  marginBottom: '10px',
                }}
              >
                All casual options
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '18px',
                }}
              >
                {[
                  { label: '1 hour lesson', price: '$60', last: false },
                  { label: '1.5 hours · room to build confidence', price: '$85', last: false },
                  { label: '2 hours · deep practice + manoeuvres', price: '$110', last: true },
                ].map((row) => (
                  <li
                    key={row.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: row.last ? 'none' : '1px solid var(--hairline)',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--type-body)', fontSize: '14px', color: 'var(--navy-ink)' }}>
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--type-mono)',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--navy-ink)',
                      }}
                    >
                      {row.price}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontFamily: 'var(--type-body)',
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: 'var(--ink-60)',
                  margin: 0,
                  marginBottom: '22px',
                  lineHeight: 1.5,
                }}
              >
                Rate varies slightly by suburb — typically $60–$75/hr. Final rate confirmed when you book.
              </p>

              <Link
                href="/#book"
                style={{
                  marginTop: 'auto',
                  background: 'var(--navy)',
                  color: '#ffffff',
                  padding: '14px 18px',
                  textAlign: 'center',
                  fontFamily: 'var(--type-mono)',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderRadius: '2px',
                }}
              >
                Book a casual lesson →
              </Link>
            </div>

            {/* Card 2 — Featured 10-hour package */}
            <div
              className="pricing-col pricing-col-featured"
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'var(--navy)',
                color: '#ffffff',
                borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
                borderRight: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--gold)',
                  margin: 0,
                  marginBottom: '18px',
                }}
              >
                ★ Best value · save $50
              </p>
              <h3
                style={{
                  fontFamily: 'var(--type-display)',
                  fontSize: '28px',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: '#ffffff',
                  margin: 0,
                  marginBottom: '24px',
                }}
              >
                10-hour{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 700 }}>
                  package
                </span>
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--type-display)',
                    fontSize: '84px',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'var(--gold)',
                    lineHeight: 1,
                  }}
                >
                  $550
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--gold)',
                  margin: 0,
                  marginBottom: '20px',
                }}
              >
                = $55/hr · $5 cheaper per hour vs casual
              </p>

              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'rgba(255, 255, 255, 0.55)',
                  margin: 0,
                  marginTop: '4px',
                  marginBottom: '10px',
                }}
              >
                All package options
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '20px',
                }}
              >
                {[
                  { label: '10-hour package · BEST VALUE', price: '$550', last: false },
                  { label: '5-hour package · save $25', price: '$275', last: true },
                ].map((row) => (
                  <li
                    key={row.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: row.last ? 'none' : '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--type-body)',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.92)',
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--type-mono)',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--gold)',
                      }}
                    >
                      {row.price}
                    </span>
                  </li>
                ))}
              </ul>

              {/* 3-for-1 callout */}
              <div
                style={{
                  background: 'rgba(245, 200, 66, 0.08)',
                  borderLeft: '2px solid var(--gold)',
                  padding: '14px 16px',
                  marginBottom: '22px',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--type-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--gold)',
                    fontWeight: 500,
                    marginBottom: '6px',
                  }}
                >
                  3-for-1 logbook bonus
                </span>
                <p
                  style={{
                    fontFamily: 'var(--type-body)',
                    fontSize: '13px',
                    lineHeight: 1.55,
                    color: 'rgba(255, 255, 255, 0.92)',
                    margin: 0,
                  }}
                >
                  Every 1 hr with us = 3 logbook hours for under 25s. The 10-hour package counts as 30 logbook hours toward your 120.
                </p>
              </div>

              <Link
                href="/#book"
                style={{
                  marginTop: 'auto',
                  background: 'var(--gold)',
                  color: 'var(--navy-ink)',
                  padding: '16px 18px',
                  textAlign: 'center',
                  fontFamily: 'var(--type-mono)',
                  fontSize: '13px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderRadius: '2px',
                }}
              >
                Book this package →
              </Link>
            </div>

            {/* Card 3 — Test prep */}
            <div
              className="pricing-col"
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'var(--paper)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--ink-60)',
                  margin: 0,
                  marginBottom: '14px',
                }}
              >
                On real test routes
              </p>
              <h3
                style={{
                  fontFamily: 'var(--type-display)',
                  fontSize: '28px',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: 'var(--navy-ink)',
                  margin: 0,
                  marginBottom: '24px',
                }}
              >
                Test preparation
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--type-display)',
                    fontSize: '64px',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'var(--navy-ink)',
                    lineHeight: 1,
                  }}
                >
                  $500
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--gold-deep)',
                  margin: 0,
                  marginBottom: '20px',
                }}
              >
                6 hours + test day · best value for test-ready students
              </p>

              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'var(--ink-60)',
                  margin: 0,
                  marginTop: '4px',
                  marginBottom: '10px',
                }}
              >
                All test prep options
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '18px',
                }}
              >
                {[
                  { label: '6 hrs + test day · BEST VALUE', price: '$500', last: false },
                  { label: 'Test day package · use our car', price: '$170', last: false },
                  { label: 'Mock test · full simulation', price: '$65', last: true },
                ].map((row) => (
                  <li
                    key={row.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '12px',
                      padding: '10px 0',
                      borderBottom: row.last ? 'none' : '1px solid var(--hairline)',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--type-body)', fontSize: '14px', color: 'var(--navy-ink)' }}>
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--type-mono)',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--navy-ink)',
                      }}
                    >
                      {row.price}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontFamily: 'var(--type-body)',
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: 'var(--ink-60)',
                  margin: 0,
                  marginBottom: '22px',
                  lineHeight: 1.5,
                }}
              >
                We know every test route at Ryde, Silverwater, Castle Hill, North Rocks &amp; Chatswood by heart.
              </p>

              <Link
                href="/#book"
                style={{
                  marginTop: 'auto',
                  background: 'var(--navy)',
                  color: '#ffffff',
                  padding: '14px 18px',
                  textAlign: 'center',
                  fontFamily: 'var(--type-mono)',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderRadius: '2px',
                }}
              >
                Book test prep →
              </Link>
            </div>
          </div>

          {/* Footer paragraph */}
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'var(--type-mono)',
              fontSize: '12px',
              letterSpacing: '0.04em',
              color: 'var(--ink-60)',
              maxWidth: '64ch',
              margin: '40px auto 0',
              lineHeight: 1.6,
            }}
          >
            Block bookings, school groups, or anything custom — call{' '}
            <a
              href="tel:0469370978"
              style={{ color: 'var(--navy-ink)', fontWeight: 600 }}
            >
              Mick 0469 370 978
            </a>{' '}
            or{' '}
            <a
              href="tel:0451331140"
              style={{ color: 'var(--navy-ink)', fontWeight: 600 }}
            >
              Sidra 0451 331 140
            </a>
          </p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .pricing-cols {
              grid-template-columns: 1fr !important;
            }
            .pricing-cols > .pricing-col {
              border-right: none !important;
              border-bottom: 1px solid var(--hairline);
            }
            .pricing-cols > .pricing-col:last-child {
              border-bottom: none;
            }
            .pricing-cols > .pricing-col-featured {
              border-left: none !important;
              border-right: none !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 5b — HOMEPAGE BOOKING (anchor target #book)
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="book"
        style={{
          background: 'var(--navy)',
          color: '#ffffff',
          padding: 'var(--space-section) 32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="book-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN — copy */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--type-display)',
                  fontSize: '64px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: 'var(--gold)',
                  margin: 0,
                  marginBottom: '24px',
                }}
              >
                04
              </p>
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'rgba(255, 255, 255, 0.65)',
                  margin: 0,
                  marginBottom: '18px',
                }}
              >
                Book your lesson
              </p>
              <h2
                style={{
                  fontFamily: 'var(--type-display)',
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95,
                  color: '#ffffff',
                  margin: 0,
                  marginBottom: '14px',
                }}
              >
                Pick a path. We&rsquo;ll{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 600 }}>
                  confirm
                </span>{' '}
                within 1 hour.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--type-body)',
                  fontSize: '17px',
                  lineHeight: 1.55,
                  color: 'rgba(255, 255, 255, 0.75)',
                  margin: 0,
                  maxWidth: '580px',
                  marginBottom: '32px',
                }}
              >
                No phone-tag, no back-and-forth. Tell us what you need, hit send, and either Mick or Sidra will message you back to lock in a time.
              </p>

              {/* Trust bar */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  padding: '18px 0',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  marginBottom: '32px',
                }}
              >
                {[
                  'Confirmed within 1 hour',
                  'Free pick-up from your suburb',
                  '127 Google reviews · 4.8★',
                ].map((point) => (
                  <span
                    key={point}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--type-mono)',
                      fontSize: '12px',
                      letterSpacing: '0.04em',
                      color: 'rgba(255, 255, 255, 0.65)',
                    }}
                  >
                    <span style={{ color: 'var(--gold)', fontWeight: 700 }} aria-hidden="true">
                      ✓
                    </span>
                    {point}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontFamily: 'var(--type-body)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0,
                }}
              >
                Prefer to talk? Call Mick on{' '}
                <a
                  href="tel:0469370978"
                  style={{ color: 'var(--gold)', fontWeight: 500 }}
                >
                  0469 370 978
                </a>{' '}
                or Sidra on{' '}
                <a
                  href="tel:0451331140"
                  style={{ color: 'var(--gold)', fontWeight: 500 }}
                >
                  0451 331 140
                </a>
                . Or message us on{' '}
                <a
                  href="https://wa.me/61469370978"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--gold)', fontWeight: 500 }}
                >
                  WhatsApp →
                </a>
              </p>
            </div>

            {/* RIGHT COLUMN — form */}
            <HomepageBookingForm />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .book-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .booking-form-card {
              padding: 28px !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 6 — SOCIAL PROOF (single anchor testimonial)
          ══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: '48px 32px 72px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <p
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: '24px',
                color: 'var(--gold-deep)',
                margin: 0,
                marginBottom: '8px',
              }}
            >
              04
            </p>
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--ink-60)',
                margin: 0,
              }}
            >
              From students
            </p>
          </div>

          <div
            className="social-panel"
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--hairline)',
              padding: '48px',
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <figure style={{ margin: 0 }}>
              <blockquote
                style={{
                  fontFamily: 'var(--type-display)',
                  fontStyle: 'italic',
                  fontSize: '26px',
                  lineHeight: 1.4,
                  color: 'var(--navy-ink)',
                  margin: 0,
                  marginBottom: '24px',
                  fontWeight: 500,
                }}
              >
                &ldquo;Failed twice elsewhere. Came to Mick, passed first try. He identified exactly what I was doing wrong and fixed it in 3 lessons.&rdquo;
              </blockquote>
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '16px',
                  color: 'var(--gold-deep)',
                  letterSpacing: '0.1em',
                  margin: 0,
                  marginBottom: '8px',
                }}
              >
                ★★★★★
              </p>
              <figcaption>
                <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--navy-ink)' }}>Tom W.</span>
                <span style={{ fontSize: '13px', color: 'var(--ink-60)', marginLeft: '6px' }}>
                  Castle Hill · Passed 2025
                </span>
              </figcaption>
            </figure>

            <aside
              className="social-stats"
              style={{
                borderLeft: '1px solid var(--hairline)',
                paddingLeft: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--ink-60)',
                  margin: 0,
                  marginBottom: '16px',
                }}
              >
                More reviews
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--type-display)',
                    fontSize: '48px',
                    fontWeight: 700,
                    color: 'var(--navy-ink)',
                    lineHeight: 1,
                  }}
                >
                  {TRUST_STATS.reviewCount}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--ink-60)', lineHeight: 1.4 }}>
                  Google reviews<br />
                  {TRUST_STATS.rating} average ★
                </span>
              </div>
              <Link
                href="/#book"
                style={{
                  display: 'inline-block',
                  background: 'var(--navy)',
                  color: 'var(--gold)',
                  padding: '14px 24px',
                  fontFamily: 'var(--type-mono)',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                }}
              >
                Book your lesson →
              </Link>
            </aside>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .social-panel {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
              padding: 32px !important;
            }
            .social-stats {
              border-left: none !important;
              border-top: 1px solid var(--hairline);
              padding-left: 0 !important;
              padding-top: 32px;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 7 — SERVICE AREA (gold block)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="suburbs" style={{ background: 'var(--gold)', color: 'var(--navy-ink)', padding: '48px 32px 72px' }}>
        <div
          className="service-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '48px',
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'rgba(10, 21, 48, 0.7)',
                margin: 0,
                marginBottom: '20px',
              }}
            >
              Suburbs we cover
            </p>
            <h2
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: '40px',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--navy-ink)',
                margin: 0,
                marginBottom: '20px',
              }}
            >
              24 suburbs across{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 500 }}>north-west Sydney.</span>
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'rgba(10, 21, 48, 0.75)',
                margin: 0,
                marginBottom: '28px',
              }}
            >
              Free pick-up from home, school, work, or wherever you are. We plan lessons around your local test centre.
            </p>
            <Link
              href="/#book"
              style={{
                display: 'inline-block',
                background: 'var(--navy)',
                color: 'var(--gold)',
                padding: '14px 28px',
                fontFamily: 'var(--type-mono)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              Book in your area →
            </Link>
          </div>

          {/* Right — suburbs grid */}
          <div
            className="suburb-cells"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              columnGap: '16px',
              rowGap: '4px',
            }}
          >
            {[
              'north-ryde',
              'eastwood',
              'epping',
              'castle-hill',
              'macquarie-park',
              'ryde',
              'west-ryde',
              'carlingford',
              'chatswood',
              'silverwater',
              'north-rocks',
              'beecroft',
            ].map((slug) => {
              const s = suburbs.find((x) => x.slug === slug);
              if (!s) return null;
              return (
                <Link
                  key={s.slug}
                  href={`/driving-lessons/${s.slug}`}
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(10, 21, 48, 0.2)',
                    color: 'var(--navy-ink)',
                  }}
                >
                  {s.name}
                </Link>
              );
            })}
            <Link
              href="/book"
              style={{
                fontSize: '12px',
                padding: '8px 0',
                borderBottom: '1px solid rgba(10, 21, 48, 0.15)',
                color: 'rgba(10, 21, 48, 0.5)',
              }}
            >
              + 12 more suburbs
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .service-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
          @media (max-width: 640px) {
            .suburb-cells {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 8 — REFERRAL BANNER
          ══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--navy)', color: 'var(--cream)', padding: '48px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--gold)',
              margin: 0,
              marginBottom: '20px',
            }}
          >
            Refer a mate
          </p>
          <h3
            style={{
              fontFamily: 'var(--type-display)',
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              color: 'var(--cream)',
              margin: 0,
              marginBottom: '28px',
            }}
          >
            They save 10% on their first lesson.<br />
            You save 10% on your next.{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--gold)' }}>
              Do it as often as you like.
            </span>
          </h3>
          <Link
            href="/refer"
            style={{
              display: 'inline-block',
              background: 'transparent',
              border: '1px solid rgba(250, 247, 242, 0.3)',
              color: 'var(--cream)',
              padding: '14px 28px',
              fontFamily: 'var(--type-mono)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            How it works →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 9 — FAQ (native details/summary + JSON-LD)
          ══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--cream)', padding: 'var(--space-section) 32px' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: '24px',
                color: 'var(--gold-deep)',
                margin: 0,
                marginBottom: '8px',
              }}
            >
              05
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
              Common questions
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
              Questions we get every day.
            </h2>
          </div>

          <div className="faq-list" style={{ borderTop: '1px solid var(--hairline)' }}>
            {faqs.map((item) => (
              <details
                key={item.q}
                className="faq-item"
                style={{
                  borderBottom: '1px solid var(--hairline)',
                  padding: '20px 0',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--type-display)',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: 'var(--navy-ink)',
                    cursor: 'pointer',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px',
                  }}
                >
                  <span style={{ flex: 1 }}>{item.q}</span>
                  <span
                    className="faq-icon"
                    style={{
                      fontFamily: 'var(--type-mono)',
                      fontSize: '20px',
                      color: 'var(--gold-deep)',
                      flexShrink: 0,
                      lineHeight: 1,
                      minWidth: '14px',
                      textAlign: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <span className="faq-plus">+</span>
                    <span className="faq-minus">−</span>
                  </span>
                </summary>
                <p
                  style={{
                    marginTop: '16px',
                    marginBottom: 0,
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: 'var(--ink-60)',
                    maxWidth: '65ch',
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        <style>{`
          .faq-item summary::-webkit-details-marker { display: none; }
          .faq-item summary { outline: none; }
          .faq-minus { display: none; }
          .faq-item[open] .faq-plus { display: none; }
          .faq-item[open] .faq-minus { display: inline; }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
          ══════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--navy)', color: 'var(--cream)', padding: '64px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--gold)',
              margin: 0,
              marginBottom: '20px',
            }}
          >
            Booking slots open this week
          </p>
          <h2
            style={{
              fontFamily: 'var(--type-display)',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
              margin: 0,
              marginBottom: '24px',
            }}
          >
            Ready to start?{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--gold)' }}>
              We&apos;re waiting.
            </span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: 'rgba(250, 247, 242, 0.7)',
              maxWidth: '44ch',
              margin: '0 auto 36px',
            }}
          >
            We reply within the hour. Pick-up from your home, school, or Macquarie Uni campus.
          </p>

          <div
            className="final-cta-row"
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}
          >
            <Link
              href="/#book"
              style={{
                background: 'var(--gold)',
                color: 'var(--navy-ink)',
                padding: '18px 36px',
                fontFamily: 'var(--type-body)',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.01em',
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
                background: 'transparent',
                color: 'var(--cream)',
                padding: '18px 36px',
                fontFamily: 'var(--type-body)',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.01em',
                border: '1px solid rgba(250, 247, 242, 0.3)',
                display: 'inline-block',
              }}
            >
              WhatsApp us
            </a>
          </div>

          <p
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '13px',
              color: 'rgba(250, 247, 242, 0.5)',
              margin: 0,
            }}
          >
            <a href="tel:0469370978" style={{ color: 'inherit' }}>Mick 0469 370 978</a> ·{' '}
            <a href="tel:0451331140" style={{ color: 'inherit' }}>Sidra 0451 331 140</a>
          </p>
        </div>
      </section>
    </>
  );
}
