import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Learner Driver Lessons',
    description: 'Structured, patient instruction for new drivers. Build confidence from basics to complex road situations in modern automatic dual-control vehicles.',
    badge: null,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Driving Test Preparation',
    description: 'Know every local test route at Ryde, Silverwater, Castle Hill, Hornsby and Chatswood. Mock tests in our automatic dual-control car.',
    badge: null,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Overseas Licence Conversion',
    description: 'Holding a foreign licence? We help you adapt to Australian road rules and pass the NSW practical test with confidence.',
    badge: null,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Logbook Hour Assistance',
    description: '1 professional hour = 3 logbook hours for learners under 25. A 10-hour pack earns 30 logbook hours toward your 120-hour requirement.',
    badge: null,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'EV Familiarisation Course',
    description: "Just bought a Tesla, BYD, MG or Hyundai EV? Get confident with regenerative braking, one-pedal driving, charging, and the digital dashboard in 1 session.",
    badge: 'NEW',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Senior Driver Refresher',
    description: 'Returning to the road after a break? Preparing for your NSW 75+ or 85+ assessment? We work at your pace in a calm, pressure-free environment.',
    badge: null,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h10l2-2zM13 7h5l3 3v3h-2" />
      </svg>
    ),
    title: 'P-Plate Confidence Course',
    description: 'New P-plater? The first 6 months are the most dangerous. Master motorway driving, night driving, hazard perception and emergency braking.',
    badge: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-[#0f1623]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our <span className="text-[#FFD700]">Services</span>
          </h2>
          <p className="mt-3 text-gray-400 text-lg">Comprehensive driving instruction for all skill levels</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-[#1a2235] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#FFD700] border border-transparent transition-colors"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 bg-[#FFD700] text-[#0f1623] text-xs font-bold px-2 py-0.5 rounded-full">
                  {service.badge}
                </span>
              )}
              <div className="text-[#FFD700]">{service.icon}</div>
              <h3 className="text-white font-bold text-lg">{service.title}</h3>
              <p className="text-gray-400 text-sm flex-1">{service.description}</p>
              <Link
                href="/book"
                className="mt-2 bg-[#FFD700] text-[#0f1623] font-bold text-sm px-4 py-2 rounded-lg text-center hover:bg-yellow-300 transition-colors"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/services" className="text-[#FFD700] hover:text-yellow-300 font-semibold text-sm underline underline-offset-4">
            View full service details →
          </Link>
        </div>
      </div>
    </section>
  );
}
