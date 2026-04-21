import Link from 'next/link';

/* ── Helpers ─────────────────────────────────────────────────────────── */

function SectionRow({
  heading,
  subtext,
}: {
  heading: string;
  subtext: string;
}) {
  return (
    <div className="mb-7">
      <h3 className="font-syne font-bold text-xl sm:text-2xl text-[#f0f2f8]">{heading}</h3>
      <p className="font-sans text-sm text-[#4a5a7a] mt-1">{subtext}</p>
    </div>
  );
}

function PriceDisplay({
  from,
  price,
  unit,
}: {
  from?: boolean;
  price: string;
  unit?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      {from && (
        <span className="font-sans text-[11px] font-medium text-[#4a5a7a] uppercase tracking-widest">
          from
        </span>
      )}
      <div className="flex items-baseline gap-1">
        <span
          className="font-syne font-bold text-[#F5C842] leading-none"
          style={{ fontSize: '48px' }}
        >
          {price}
        </span>
        {unit && (
          <span className="font-sans text-[#8899bb] text-sm ml-0.5">{unit}</span>
        )}
      </div>
    </div>
  );
}

/* ── Data ────────────────────────────────────────────────────────────── */

const casualLessons = [
  {
    name: '1 Hour',
    tag: 'Most Flexible',
    price: '$60',
    unit: '/hr',
    from: true,
    features: [
      'Perfect for a quick skills assessment',
      'No upfront payment required',
      'Automatic vehicle',
      'Free pick-up and drop-off',
    ],
  },
  {
    name: '1.5 Hours',
    tag: 'Great for Beginners',
    price: '$85',
    unit: '',
    from: true,
    features: [
      'More time to build confidence',
      'Covers more ground in one session',
      'Automatic vehicle',
      'Free pick-up and drop-off',
    ],
  },
  {
    name: '2 Hours',
    tag: 'Deep Practice',
    price: '$110',
    unit: '',
    from: true,
    features: [
      'Best for complex manoeuvres',
      'Mock test walkthrough available',
      'Automatic vehicle',
      'Free pick-up and drop-off',
    ],
  },
];

const packages = [
  {
    name: '5 Hour Package',
    badge: 'Save $25',
    badgeFeatured: false,
    price: '$275',
    from: false,
    featured: false,
    features: [
      '5 hours of focused instruction',
      'Flexible scheduling across multiple days',
      'Automatic vehicle',
      'Free pick-up and drop-off',
      'Valid for 3 months from purchase',
    ],
  },
  {
    name: '10 Hour Package',
    badge: 'Most Popular',
    badgeFeatured: true,
    price: '$550',
    from: false,
    featured: true,
    saveBadge: 'Save $50',
    features: [
      '10 hours of structured instruction',
      'Priority scheduling',
      'Automatic vehicle',
      'Free pick-up and drop-off',
      'Valid for 6 months from purchase',
      '30 logbook hours (3-for-1 scheme)',
    ],
  },
];

const testPrep = [
  {
    name: 'Mock Test',
    tag: 'Know the Routes',
    price: '$65',
    from: false,
    features: [
      'Full practice run on actual test routes',
      'Detailed feedback on every manoeuvre',
      'Covers Ryde, Silverwater, Castle Hill, Chatswood, Hornsby',
      'Automatic vehicle provided',
      'Free pick-up and drop-off',
    ],
  },
  {
    name: 'Test Day Package',
    tag: 'Test Day Ready',
    price: '$170',
    from: false,
    features: [
      '1 hour pre-test warm-up lesson',
      'Use of our automatic car for the test',
      'Pick-up from home, drop-off after result',
      'Instructor accompanies you to the test centre',
      'Available at all local test centres',
    ],
  },
  {
    name: '6 Hours + Test Day',
    tag: 'Best Value for Test Prep',
    saveBadge: 'Save $35 vs buying separately',
    price: '$500',
    from: false,
    features: [
      '6 hours of focused pre-test instruction',
      'Full test day package included',
      'We target your weak points before test day',
      'Automatic vehicle throughout',
      'Free pick-up and drop-off',
    ],
  },
];

/* ── Card Components ─────────────────────────────────────────────────── */

function PricingCard({
  name,
  tag,
  price,
  unit,
  from,
  features,
  saveBadge,
  featured,
}: {
  name: string;
  tag?: string;
  price: string;
  unit?: string;
  from?: boolean;
  features: string[];
  saveBadge?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl flex flex-col gap-5 p-7 ${
        featured
          ? 'pricing-featured shadow-[0_16px_48px_rgba(0,0,0,0.4)]'
          : 'brand-card'
      }`}
    >
      {saveBadge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className="font-sans text-[#0a0f1e] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-[0.08em] whitespace-nowrap"
            style={{ background: 'linear-gradient(90deg, #F5C842, #d4a91a)' }}
          >
            {saveBadge}
          </span>
        </div>
      )}

      <div>
        {tag && (
          <span
            className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded mb-3 inline-block"
            style={{
              background: 'rgba(245, 200, 66, 0.1)',
              color: '#F5C842',
              border: '1px solid rgba(245, 200, 66, 0.2)',
            }}
          >
            {tag}
          </span>
        )}
        <h4 className="font-sans font-semibold text-xs text-[#8899bb] uppercase tracking-[0.08em] mb-2">
          {name}
        </h4>
        <PriceDisplay from={from} price={price} unit={unit} />
      </div>

      <ul className="flex flex-col gap-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[#c0ccee]">
            <span className="text-[#F5C842] font-bold text-base leading-tight flex-shrink-0 mt-0.5">›</span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href="/book#booking-form"
        className="mt-2 font-sans font-semibold text-sm px-4 py-3 rounded text-center transition-all duration-200 bg-[#F5C842] text-[#0a0f1e] hover:bg-[#d4a91a]"
      >
        Book Now
      </Link>
    </div>
  );
}

/* ── Main Export ─────────────────────────────────────────────────────── */

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center">
          <span className="section-label">Pricing</span>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#f0f2f8]">
            Transparent Pricing
          </h2>
          <p className="font-sans text-[#8899bb] text-lg mt-2">
            Simple, honest pricing — no hidden fees
          </p>
          <span className="section-rule" />
        </div>

        {/* ── Zone pricing note ── */}
        <div
          className="rounded-xl px-6 py-4 mb-10 flex flex-col sm:flex-row sm:items-center gap-3"
          style={{ background: 'rgba(245,200,66,0.06)', border: '1px solid rgba(245,200,66,0.15)' }}
        >
          <svg className="w-5 h-5 text-[#F5C842] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="font-sans text-sm text-[#c0ccee]">
            <span className="text-[#F5C842] font-semibold">Prices start from $60/hr</span> for suburbs near North Ryde.
            Rate is confirmed instantly when you book — no surprises.
          </p>
        </div>

        {/* ── Row 1: Casual Lessons ── */}
        <SectionRow
          heading="Casual Lessons"
          subtext="Book as you go — no upfront commitment required."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {casualLessons.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </div>

        {/* ── Row 2: Lesson Packages ── */}
        <SectionRow
          heading="Lesson Packages"
          subtext="Pay upfront, lock in your lessons, and save."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-16">
          {packages.map((p) => (
            <PricingCard
              key={p.name}
              name={p.name}
              price={p.price}
              from={p.from}
              features={p.features}
              featured={p.featured}
              saveBadge={p.featured ? 'Most Popular' : p.badge}
              tag={!p.featured ? p.badge : undefined}
            />
          ))}
        </div>

        {/* ── Row 3: Test Preparation ── */}
        <SectionRow
          heading="Test Preparation"
          subtext="Get properly prepared for your Service NSW driving test."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {testPrep.map((p) => (
            <PricingCard key={p.name} {...p} />
          ))}
        </div>

        {/* ── Referral callout ── */}
        <div
          id="referral"
          className="rounded-xl p-7 flex flex-col sm:flex-row gap-5 items-start mb-8"
          style={{
            background: 'var(--bg-card)',
            borderLeft: '3px solid var(--gold)',
            border: '1px solid rgba(30, 45, 74, 0.8)',
            borderLeftWidth: '3px',
            borderLeftColor: 'var(--gold)',
          }}
        >
          <div
            className="w-11 h-11 rounded flex items-center justify-center flex-shrink-0 text-[#F5C842]"
            style={{ background: 'rgba(245, 200, 66, 0.1)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#f0f2f8]">
              Know someone learning to drive?
            </h3>
            <p className="font-sans text-sm text-[#8899bb] mt-2 leading-relaxed">
              Refer a friend and you both win. When someone you refer books their first lesson, you each receive{' '}
              <span className="text-[#F5C842] font-semibold">10% off</span> your next booking. No limits — refer as many people as you like.
            </p>
            <p className="font-sans text-xs text-[#4a5a7a] mt-2">
              Discount applied to your next lesson or package. Contact us to claim.
            </p>
          </div>
          <Link
            href="/contact"
            className="font-sans font-semibold text-sm text-[#F5C842] hover:text-[#d4a91a] transition-colors whitespace-nowrap self-start"
          >
            Ask about referrals →
          </Link>
        </div>

        {/* ── Disclaimer ── */}
        <p className="font-sans text-[11px] text-[#4a5a7a] leading-relaxed max-w-3xl mx-auto text-center">
          * Casual lesson prices start from $60/hr. Your exact rate is confirmed instantly when you submit a booking — it may vary slightly based on your suburb. Package and test preparation prices are fixed at the rates shown.
        </p>

      </div>
    </section>
  );
}
