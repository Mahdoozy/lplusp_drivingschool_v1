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
    <section id="pricing" className="py-16 sm:py-20 bg-[#0f1623]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Affordable <span className="text-[#FFD700]">Pricing</span>
          </h2>
          <p className="mt-3 text-gray-400 text-lg">No hidden fees — just quality instruction at fair prices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-[#1a2235] rounded-2xl p-6 flex flex-col gap-4 ${
                plan.featured ? 'border-2 border-[#FFD700]' : 'border border-transparent'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FFD700] text-[#0f1623] text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-[#FFD700] text-4xl font-extrabold">{plan.price}</span>
                  {plan.unit && <span className="text-gray-400 text-sm">{plan.unit}</span>}
                </div>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#FFD700] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className={`mt-2 font-bold text-sm px-4 py-3 rounded-lg text-center transition-colors ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-[#FFD700] text-[#0f1623] hover:bg-yellow-300'
                    : 'bg-[#0f1623] text-gray-300 border border-gray-600 hover:border-gray-400 hover:text-white'
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
