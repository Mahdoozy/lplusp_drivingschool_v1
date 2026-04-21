import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { suburbs, getSuburbBySlug } from '@/lib/suburbs';
import { SUBURBS } from '@/data/suburbs';
import { TRUST_STATS } from '@/lib/trustStats';
import Pricing from '@/components/Pricing';
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

  const hasChallenges = data?.commonChallenges?.some((c) => c.title && c.description);
  const hasTestimonial = data?.suburbTestimonial?.quote;

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
    areaServed: {
      '@type': 'Place',
      name: `${suburb.name}, NSW`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: TRUST_STATS.rating,
      reviewCount: TRUST_STATS.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Driving Lessons in{' '}
            <span className="text-[#FFD700]">{suburb.name}</span>
          </h1>
          {data?.heroTagline && (
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">{data.heroTagline}</p>
          )}

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gray-400">
            <span>Est. {TRUST_STATS.yearEstablished}</span>
            <span className="text-gray-600">·</span>
            <span className="text-[#FFD700]">{'★'.repeat(5)}</span>
            <span>{TRUST_STATS.rating} ({TRUST_STATS.reviewCount}+ reviews)</span>
            <span className="text-gray-600">·</span>
            <span>{TRUST_STATS.firstAttemptPassRate}% first-attempt pass rate</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/book"
              className="bg-[#FFD700] text-[#0f1623] font-bold px-8 py-3 rounded-lg text-center hover:bg-yellow-300 transition-colors"
            >
              Book a Lesson
            </Link>
            <a
              href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20lesson%20with%20L%20Plus%20P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3 rounded-lg hover:bg-green-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── TEST CENTRE CARD ─────────────────────────────────────────── */}
      {data?.nearestTestCentre && (
        <section className="bg-[#060b15] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-white mb-6">
              Your local test centre
            </h2>
            <div
              className="rounded-2xl p-6 flex flex-col sm:flex-row gap-6"
              style={{ background: '#0f1829', border: '1px solid rgba(245,200,66,0.15)' }}
            >
              <div className="flex-shrink-0 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#F5C842' }}
                >
                  <svg className="w-5 h-5 text-[#0a0f1e]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-lg">{data.nearestTestCentre.name}</p>
                <p className="text-gray-400 text-sm">{data.nearestTestCentre.address}</p>
                <div className="flex gap-4 text-sm text-gray-400 mt-1">
                  <span>{data.nearestTestCentre.distanceKm} km away</span>
                  <span>·</span>
                  <span>~{data.nearestTestCentre.travelTimeMinutes} min drive</span>
                </div>
                <p
                  className="text-sm mt-2 rounded-lg px-4 py-3 italic"
                  style={{ background: 'rgba(245,200,66,0.08)', color: '#F5C842' }}
                >
                  💡 {data.nearestTestCentre.tip}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PICKUP LANDMARKS ─────────────────────────────────────────── */}
      {data?.pickupLandmarks?.length > 0 && (
        <section className="bg-[#0a0f1e] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Where we pick you up in{' '}
              <span className="text-[#FFD700]">{suburb.name}</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Prefer somewhere else? Just tell us when you book — we&apos;ll come to you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.pickupLandmarks.map((landmark) => (
                <div
                  key={landmark}
                  className="rounded-xl px-5 py-4 flex items-center gap-3 text-sm text-gray-300"
                  style={{ background: '#0f1829', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <svg className="w-4 h-4 text-[#FFD700] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {landmark}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── COMMON CHALLENGES (only if populated) ────────────────────── */}
      {hasChallenges && (
        <section className="bg-[#060b15] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-white mb-6">
              Common challenges for{' '}
              <span className="text-[#FFD700]">{suburb.name}</span> learners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.commonChallenges
                .filter((c) => c.title && c.description)
                .map((challenge) => (
                  <div
                    key={challenge.title}
                    className="rounded-xl p-5 flex flex-col gap-2"
                    style={{ background: '#0f1829', border: '1px solid rgba(245,200,66,0.12)' }}
                  >
                    <p className="text-[#F5C842] font-semibold text-sm">{challenge.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{challenge.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SCHOOLS & UNIS ───────────────────────────────────────────── */}
      {data?.localSchoolsAndUnis?.length > 0 && (
        <section className="bg-[#0a0f1e] py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-extrabold text-white mb-4">
              Schools and unis we pick up from in {suburb.name}
            </h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {data.localSchoolsAndUnis.map((school) => (
                <span
                  key={school}
                  className="text-sm rounded-full px-4 py-1.5 text-gray-300"
                  style={{ background: '#0f1829', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {school}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              Your school not listed? We probably still pick up — just ask when you book.
            </p>
          </div>
        </section>
      )}

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <Pricing />

      {/* ── TESTIMONIAL (only if populated) ──────────────────────────── */}
      {hasTestimonial && (
        <section className="bg-[#060b15] py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ background: '#0f1829', border: '1px solid rgba(245,200,66,0.15)' }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#F5C842]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-base italic leading-relaxed">
                &ldquo;{data.suburbTestimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-[#F5C842] font-semibold text-sm">{data.suburbTestimonial.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">Passed at {data.suburbTestimonial.passedAt}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── OTHER SUBURBS ────────────────────────────────────────────── */}
      <section className="bg-[#0f1623] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-extrabold text-white mb-4">Other areas we cover</h2>
          <div className="flex flex-wrap gap-2">
            {suburbs
              .filter((s) => s.slug !== suburb.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/driving-lessons/${s.slug}`}
                  className="bg-[#1a2235] text-gray-300 hover:text-[#FFD700] hover:border-[#FFD700] border border-gray-700 text-sm px-3 py-1.5 rounded-lg transition-colors"
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
    </>
  );
}
