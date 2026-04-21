import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { suburbs, getSuburbBySlug } from '@/lib/suburbs';
import { SUBURBS } from '@/data/suburbs';
import { TRUST_STATS } from '@/lib/trustStats';
import CTABanner from '@/components/CTABanner';

type Props = {
  params: Promise<{ suburb: string }>;
};

export async function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);
  const data = SUBURBS[slug];
  if (!suburb) return {};

  const testCentreName = data?.nearestTestCentre.name ?? `${suburb.testCentre} test centre`;

  return {
    title: `Driving Lessons in ${suburb.name} from $60/hr | L Plus P Driving School`,
    description: `Expert driving lessons in ${suburb.name}. ${TRUST_STATS.rating}★ (${TRUST_STATS.reviewCount}+ reviews). Est. ${TRUST_STATS.yearEstablished}. Free pick-up. ${TRUST_STATS.firstAttemptPassRate}% first-attempt pass rate at ${testCentreName}.`,
    alternates: { canonical: `/driving-lessons/${slug}` },
  };
}

export default async function SuburbPage({ params }: Props) {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);

  if (!suburb) notFound();

  const data = SUBURBS[slug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: `L Plus P Driving School — ${suburb.name}`,
    image: 'https://lppdrivingschool.com.au/og-image.jpg',
    telephone: '+61469370978',
    email: 'lpluspdrivingschool44@gmail.com',
    priceRange: '$$',
    foundingDate: String(TRUST_STATS.yearEstablished),
    address: {
      '@type': 'PostalAddress',
      addressLocality: suburb.name,
      addressRegion: 'NSW',
      postalCode: data?.postcode ?? '',
      addressCountry: 'AU',
    },
    areaServed: { '@type': 'Place', name: `${suburb.name}, NSW` },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: TRUST_STATS.rating,
      reviewCount: TRUST_STATS.reviewCount,
    },
  };

  /* ── shared layout values ── */
  const w = 'max-w-5xl mx-auto px-6 sm:px-8';
  const ht = 'rgba(13,27,62,0.1)';  /* hairline colour */

  return (
    <div style={{ background: 'var(--cream)', color: 'var(--navy-ink)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className={`${w} suburb-rise`}>

          {/* eyebrow */}
          <p className="eyebrow">
            {data?.postcode ? `N°${data.postcode} — ` : ''}Sydney, NSW
          </p>

          {/* headline */}
          <h1
            className="font-syne"
            style={{
              fontSize: 'var(--fs-hero)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: '1rem 0 1.75rem',
            }}
          >
            Driving lessons
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--gold-deep)' }}>
              in {suburb.name}.
            </em>
          </h1>

          {/* tagline */}
          {data?.heroTagline && (
            <p
              className="font-outfit"
              style={{
                fontSize: 'var(--fs-body-lg)',
                lineHeight: 1.55,
                color: 'var(--ink-60)',
                maxWidth: '40ch',
                marginBottom: '2.5rem',
              }}
            >
              {data.heroTagline}
            </p>
          )}

          {/* meta row */}
          <div
            className="flex flex-wrap gap-x-10 gap-y-4"
            style={{
              borderTop: `1px solid ${ht}`,
              borderBottom: `1px solid ${ht}`,
              padding: '1.25rem 0',
              marginBottom: '2rem',
            }}
          >
            {[
              { label: 'Est.', value: String(TRUST_STATS.yearEstablished) },
              { label: 'Pass rate', value: `${TRUST_STATS.firstAttemptPassRate}%` },
              { label: 'Reviews', value: `${TRUST_STATS.rating} / ${TRUST_STATS.reviewCount}` },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="eyebrow">{label}</span>
                <span
                  className="font-mono"
                  style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--navy-ink)' }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book"
              className="font-outfit font-medium"
              style={{
                background: 'var(--navy-ink)',
                color: 'var(--cream)',
                padding: '0.875rem 2rem',
                textDecoration: 'none',
                transition: 'background 0.2s',
                display: 'inline-block',
              }}
            >
              Book a lesson
            </Link>
            <a
              href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20lesson%20with%20L%20Plus%20P"
              target="_blank"
              rel="noopener noreferrer"
              className="font-outfit font-medium"
              style={{
                color: 'var(--navy-ink)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--navy-ink)',
                paddingBottom: '2px',
                alignSelf: 'center',
              }}
            >
              WhatsApp us →
            </a>
          </div>
        </div>
      </section>

      {/* ── 01 — TEST CENTRE ──────────────────────────────────────────── */}
      {data?.nearestTestCentre && (
        <section style={{ background: 'var(--paper)', paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
          <div className={w}>
            {/* section label */}
            <div className="flex items-baseline gap-4" style={{ marginBottom: '2.5rem' }}>
              <span className="font-mono" style={{ fontSize: '1.75rem', color: 'var(--gold-deep)', fontWeight: 400 }}>01</span>
              <span className="eyebrow">Your test centre</span>
            </div>

            {/* asymmetric grid — 2fr / 3fr */}
            <div
              className="grid gap-12 items-start"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
            >
              {/* left — huge pass rate */}
              <div>
                <div
                  className="font-syne"
                  style={{
                    fontSize: 'clamp(6rem, 15vw, 9rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: 'var(--navy-ink)',
                    letterSpacing: '-0.05em',
                  }}
                >
                  {data.nearestTestCentre.passRate}%
                </div>
                <p className="eyebrow" style={{ marginTop: '0.75rem' }}>First-attempt pass rate</p>
              </div>

              {/* right — info */}
              <div className="flex flex-col gap-4">
                <h2
                  className="font-syne"
                  style={{ fontSize: 'var(--fs-headline)', fontWeight: 600, lineHeight: 1.2 }}
                >
                  {data.nearestTestCentre.name}
                </h2>
                <p className="font-outfit" style={{ fontSize: 'var(--fs-caption)', color: 'var(--ink-60)' }}>
                  {data.nearestTestCentre.address}
                </p>
                <p className="font-outfit" style={{ fontSize: 'var(--fs-body-lg)', lineHeight: 1.6, color: 'var(--ink-60)' }}>
                  {data.nearestTestCentre.notes}
                </p>
                <div
                  style={{
                    marginTop: '0.5rem',
                    padding: '1.25rem 1.5rem',
                    background: 'var(--cream)',
                    borderLeft: '3px solid var(--gold-deep)',
                  }}
                >
                  <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Our approach</p>
                  <p className="font-outfit" style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--navy-ink)' }}>
                    We run every mock test on the actual routes examiners use at this centre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 02 — PICKUP LANDMARKS ─────────────────────────────────────── */}
      {data?.pickupLandmarks?.length > 0 && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
          <div className={w}>
            <div className="flex items-baseline gap-4" style={{ marginBottom: '1.5rem' }}>
              <span className="font-mono" style={{ fontSize: '1.75rem', color: 'var(--gold-deep)', fontWeight: 400 }}>02</span>
              <span className="eyebrow">Pick-up in {suburb.name}</span>
            </div>

            <h2
              className="font-syne"
              style={{
                fontSize: 'var(--fs-display)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '2.5rem',
                maxWidth: '16ch',
              }}
            >
              Where we come to you.
            </h2>

            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${Math.min(data.pickupLandmarks.length, 3)}, 1fr)`,
                borderTop: `1px solid ${ht}`,
              }}
            >
              {data.pickupLandmarks.map((landmark, i) => (
                <div
                  key={landmark}
                  className="flex flex-col gap-2"
                  style={{
                    padding: '1.75rem 2rem 1.75rem 0',
                    borderRight: i < data.pickupLandmarks.length - 1 ? `1px solid ${ht}` : 'none',
                    paddingLeft: i > 0 ? '2rem' : '0',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ fontSize: 'var(--fs-caption)', color: 'var(--gold-deep)' }}
                  >
                    —{String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="font-syne"
                    style={{ fontSize: '1.2rem', fontWeight: 500, lineHeight: 1.3, color: 'var(--navy-ink)' }}
                  >
                    {landmark}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="font-outfit"
              style={{ fontSize: 'var(--fs-caption)', color: 'var(--ink-60)', marginTop: '1.5rem' }}
            >
              Prefer somewhere else? Tell us when you book — we&apos;re flexible.
            </p>
          </div>
        </section>
      )}

      {/* ── 03 — COMMON CHALLENGES ────────────────────────────────────── */}
      {data?.commonChallenges?.length > 0 && (
        <section style={{ background: 'var(--paper)', paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
          <div className={w}>
            <div className="flex items-baseline gap-4" style={{ marginBottom: '1.5rem' }}>
              <span className="font-mono" style={{ fontSize: '1.75rem', color: 'var(--gold-deep)', fontWeight: 400 }}>03</span>
              <span className="eyebrow">Local challenges</span>
            </div>

            <h2
              className="font-syne"
              style={{
                fontSize: 'var(--fs-display)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '3rem',
              }}
            >
              What catches out{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)', fontWeight: 500 }}>
                {suburb.name}
              </em>{' '}
              learners.
            </h2>

            <div>
              {data.commonChallenges.map((challenge, i) => (
                <div
                  key={challenge.title}
                  className="grid"
                  style={{
                    gridTemplateColumns: 'clamp(80px, 15vw, 120px) 1fr',
                    gap: 'clamp(1.5rem, 4vw, 3rem)',
                    padding: '2.25rem 0',
                    borderTop: `1px solid ${ht}`,
                    ...(i === data.commonChallenges.length - 1 ? { borderBottom: `1px solid ${ht}` } : {}),
                  }}
                >
                  <div className="pt-1">
                    <span
                      className="font-mono"
                      style={{ fontSize: '1rem', color: 'var(--gold-deep)', fontWeight: 400 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-syne"
                      style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                        fontWeight: 600,
                        lineHeight: 1.2,
                        marginBottom: '0.875rem',
                      }}
                    >
                      {challenge.title}
                    </h3>
                    <p
                      className="font-outfit"
                      style={{
                        fontSize: 'var(--fs-body-lg)',
                        lineHeight: 1.65,
                        color: 'var(--ink-60)',
                        maxWidth: '60ch',
                      }}
                    >
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 04 — SCHOOLS & UNIS ───────────────────────────────────────── */}
      {data?.localSchoolsAndUnis?.length > 0 && (
        <section style={{ paddingTop: 'var(--space-block)', paddingBottom: 'var(--space-block)' }}>
          <div className={w}>
            <div className="flex items-baseline gap-4" style={{ marginBottom: '1.5rem' }}>
              <span className="font-mono" style={{ fontSize: '1.75rem', color: 'var(--gold-deep)', fontWeight: 400 }}>04</span>
              <span className="eyebrow">Schools we pick up from</span>
            </div>

            <div className="flex flex-wrap gap-2.5" style={{ marginBottom: '1rem' }}>
              {data.localSchoolsAndUnis.map((school) => (
                <span
                  key={school}
                  className="font-outfit"
                  style={{
                    padding: '0.4rem 1rem',
                    border: `1px solid ${ht}`,
                    borderRadius: '100px',
                    fontSize: '0.9375rem',
                    color: 'var(--navy-ink)',
                    background: 'var(--paper)',
                  }}
                >
                  {school}
                </span>
              ))}
            </div>

            <p className="font-outfit" style={{ fontSize: 'var(--fs-caption)', color: 'var(--ink-60)' }}>
              Your school not listed? Ask when you book — we probably still pick up.
            </p>
          </div>
        </section>
      )}

      {/* ── 05 — PRICING ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--paper)', paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className={w}>
          <div className="flex items-baseline gap-4" style={{ marginBottom: '1.5rem' }}>
            <span className="font-mono" style={{ fontSize: '1.75rem', color: 'var(--gold-deep)', fontWeight: 400 }}>05</span>
            <span className="eyebrow">Pricing</span>
          </div>

          <h2
            className="font-syne"
            style={{
              fontSize: 'var(--fs-display)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '3rem',
            }}
          >
            Simple, honest rates.
          </h2>

          <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {[
              {
                group: 'Casual lessons',
                rows: [
                  { label: '1 hour', price: 'from $60' },
                  { label: '1½ hours', price: 'from $85' },
                  { label: '2 hours', price: 'from $110' },
                ],
              },
              {
                group: 'Packages',
                rows: [
                  { label: '5 hours', price: '$275', note: 'save $25' },
                  { label: '10 hours', price: '$550', note: '30 logbook hrs' },
                ],
              },
              {
                group: 'Test preparation',
                rows: [
                  { label: 'Mock test', price: '$65' },
                  { label: 'Test day package', price: '$170' },
                  { label: '6 hrs + test day', price: '$500' },
                ],
              },
            ].map(({ group, rows }) => (
              <div key={group}>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 'var(--fs-caption)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--ink-60)',
                    paddingBottom: '0.75rem',
                    marginBottom: '0',
                    borderBottom: `1px solid ${ht}`,
                  }}
                >
                  {group}
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {rows.map(({ label, price, note }: { label: string; price: string; note?: string }) => (
                      <tr key={label} style={{ borderBottom: `1px solid ${ht}` }}>
                        <td className="font-outfit" style={{ padding: '0.875rem 0', fontSize: '0.9375rem', verticalAlign: 'baseline' }}>
                          {label}
                          {note && (
                            <span
                              className="font-mono"
                              style={{ marginLeft: '0.5rem', fontSize: 'var(--fs-caption)', color: 'var(--ink-40)' }}
                            >
                              {note}
                            </span>
                          )}
                        </td>
                        <td
                          className="font-mono"
                          style={{ padding: '0.875rem 0', fontSize: '0.9375rem', fontWeight: 500, textAlign: 'right', whiteSpace: 'nowrap' }}
                        >
                          {price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <p
            className="font-outfit"
            style={{ fontSize: 'var(--fs-caption)', color: 'var(--ink-60)', marginTop: '2.5rem' }}
          >
            Rates start from $60/hr for suburbs near North Ryde. Rate confirmed instantly when you book.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <Link
              href="/book"
              className="font-outfit font-medium"
              style={{
                background: 'var(--navy-ink)',
                color: 'var(--cream)',
                padding: '0.875rem 2rem',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.2s',
              }}
            >
              Book a lesson →
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOCAL INSIGHT — pullquote ──────────────────────────────────── */}
      {data?.localInsight && (
        <section style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
          <div className={w}>
            <blockquote
              style={{
                margin: '0 0 1.5rem',
                paddingLeft: '2rem',
                borderLeft: '3px solid var(--gold-deep)',
              }}
            >
              <p
                className="font-syne"
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.45,
                  color: 'var(--navy-ink)',
                  maxWidth: '50ch',
                }}
              >
                {data.localInsight}
              </p>
            </blockquote>
            <p className="eyebrow" style={{ paddingLeft: '2rem' }}>From our instructors, Mick &amp; Sidra</p>
          </div>
        </section>
      )}

      {/* ── OTHER AREAS ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--paper)', paddingTop: 'var(--space-block)', paddingBottom: 'var(--space-block)' }}>
        <div className={w}>
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Other areas we cover</p>
          <div
            className="grid"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0 2rem' }}
          >
            {suburbs
              .filter((s) => s.slug !== suburb.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/driving-lessons/${s.slug}`}
                  className="suburb-area-link font-outfit"
                  style={{
                    display: 'block',
                    padding: '0.7rem 0',
                    borderBottom: `1px solid ${ht}`,
                    color: 'var(--navy-ink)',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                  }}
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Ready to start your lessons in ${suburb.name}?`}
        subtext={`Join hundreds of ${suburb.name} students who passed first time with L Plus P.`}
      />
    </div>
  );
}
