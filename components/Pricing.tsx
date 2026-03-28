import Link from 'next/link';

const plans = [
  {
    name: 'Single Lesson',
    price: '$60',
    unit: '/hr',
    badge: null,
    featured: false,
    features: [
      '1-hour driving lesson',
      'Free pick-up & drop-off',
      'Late-model automatic car',
      'Flexible scheduling',
    ],
    cta: 'Book Now',
    ctaStyle: 'secondary',
  },
  {
    name: '5-Hour Pack',
    price: '$275',
    unit: '',
    badge: null,
    featured: false,
    features: [
      '5 hours of instruction',
      'Free pick-up & drop-off',
      'Late-model automatic car',
      'Save $25 vs single lessons',
      'Flexible scheduling',
    ],
    cta: 'Book Now',
    ctaStyle: 'primary',
  },
  {
    name: '10-Hour Pack',
    price: '$500',
    unit: '',
    badge: 'Most Popular',
    featured: true,
    features: [
      '10 hours of instruction',
      'Free pick-up & drop-off',
      'Late-model automatic car',
      'Save $100 vs single lessons',
      '30 logbook hours (3-for-1)',
      'Pass Guarantee included',
    ],
    cta: 'Book Now',
    ctaStyle: 'primary',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-label">Packages</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#f0f2f8]">
            Affordable, transparent pricing
          </h2>
          <span className="section-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl flex flex-col gap-5 p-7 ${
                plan.featured
                  ? 'pricing-featured md:scale-[1.03] md:-translate-y-1 shadow-[0_16px_48px_rgba(0,0,0,0.4)]'
                  : 'brand-card'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="text-[#0a0f1e] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-[0.08em] whitespace-nowrap"
                    style={{ background: 'linear-gradient(90deg, #F5C842, #d4a91a)' }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-sans font-semibold text-base text-[#8899bb] uppercase tracking-[0.08em] text-xs mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-serif font-bold text-[#F5C842] leading-none"
                    style={{ fontSize: '56px' }}
                  >
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className="font-sans text-[#8899bb] text-base ml-1">{plan.unit}</span>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-[#8899bb]">
                    <span className="text-[#F5C842] font-bold text-lg leading-none flex-shrink-0">›</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className={`mt-2 font-sans font-semibold text-sm px-4 py-3 rounded text-center transition-all duration-200 ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-[#F5C842] text-[#0a0f1e] hover:bg-[#d4a91a]'
                    : 'text-[#8899bb] border border-[rgba(30,45,74,0.8)] hover:border-[rgba(245,200,66,0.3)] hover:text-[#f0f2f8]'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
