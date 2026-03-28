import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Learner Driver Lessons',
    description: 'Structured, patient instruction for new drivers. Build confidence from basics to complex road situations in our late-model automatic cars.',
    badge: null,
    href: '/book',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Driving Test Preparation',
    description: 'Know every local test route at Ryde, Silverwater, Castle Hill, Hornsby and Chatswood. Mock tests in our automatic car.',
    badge: null,
    href: '/book',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Overseas Licence Conversion',
    description: 'Holding a foreign licence? We help you adapt to Australian road rules and pass the NSW practical test with confidence.',
    badge: null,
    href: '/book',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Logbook Hour Assistance',
    description: '1 professional hour = 3 logbook hours for learners under 25. A 10-hour pack earns 30 logbook hours toward your 120-hour requirement.',
    badge: null,
    href: '/book',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'EV Familiarisation Course',
    description: "Just bought a Tesla, BYD, MG or Hyundai EV? Get confident with regenerative braking, one-pedal driving, charging, and the digital dashboard in 1 session.",
    badge: 'NEW',
    href: '/book',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Senior Driver Refresher',
    description: 'Returning to the road after a break? Preparing for your NSW 75+ or 85+ assessment? We work at your pace in a calm, pressure-free environment.',
    badge: null,
    href: '/book',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h10l2-2zM13 7h5l3 3v3h-2" />
      </svg>
    ),
    title: 'P-Plate Confidence Course',
    description: 'New P-plater? The first 6 months are the most dangerous. Master motorway driving, night driving, hazard perception and emergency braking.',
    badge: null,
    href: '/book',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Prefer a Female Instructor?',
    description: 'Learn with Sidra — our experienced female instructor. Many students feel more comfortable with a female instructor. Specialises in learner drivers and overseas conversions.',
    badge: 'Ask for Sidra',
    href: '/services/female-instructor',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3h14" />
      </svg>
    ),
    title: 'Intensive Driving Course',
    description: 'Test booked and need to prepare fast? Multiple lessons packed into one week. Perfect for overseas conversions, upcoming test dates, or when you need your licence urgently.',
    badge: 'Fast-Track',
    href: '/services/intensive-course',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-label">Our Services</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#f0f2f8]">
            Everything you need to get your licence
          </h2>
          <span className="section-rule" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card brand-card relative rounded-xl overflow-hidden flex flex-col gap-4"
              style={{ padding: '32px 28px' }}
            >
              {/* Badge */}
              {service.badge && (
                <span
                  className="absolute top-4 right-4 text-[#0a0f1e] text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-[0.08em]"
                  style={{ background: 'var(--gold)' }}
                >
                  {service.badge}
                </span>
              )}

              {/* Gold square icon */}
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-[#F5C842]"
                style={{ border: '1px solid rgba(245, 200, 66, 0.3)' }}
              >
                {service.icon}
              </div>

              <h3 className="font-sans font-semibold text-[18px] text-[#f0f2f8] leading-snug">
                {service.title}
              </h3>
              <p
                className="font-sans text-[14px] text-[#8899bb] flex-1"
                style={{ lineHeight: '1.7' }}
              >
                {service.description}
              </p>
              <Link
                href={service.href}
                className="font-sans font-semibold text-sm text-[#F5C842] hover:text-[#d4a91a] transition-colors mt-auto"
              >
                {service.href === '/book' ? 'Book Now →' : 'Learn More →'}
              </Link>

              {/* Bottom gold line on hover */}
              <div className="service-card-line" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-[#F5C842] hover:text-[#d4a91a] font-semibold text-sm transition-colors"
          >
            View full service details →
          </Link>
        </div>
      </div>
    </section>
  );
}
