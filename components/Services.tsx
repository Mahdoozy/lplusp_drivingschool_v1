import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Learner Driver Lessons',
    description:
      'Structured, patient instruction tailored for new drivers. We cover everything from basics to complex road situations, building your confidence step by step.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Driving Test Preparation',
    description:
      'Know exactly what to expect on test day. We cover all local test routes at Ryde, Silverwater, Castle Hill, Hornsby and Chatswood with mock tests in our dual-control car.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Overseas Licence Conversion',
    description:
      'Hold a licence from another country? We help you understand Australian road rules, adapt to local conditions, and pass the practical driving test with confidence.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Logbook Hour Assistance',
    description:
      'Every 1 hour of professional instruction counts as 3 logbook hours for learners under 25. A 10-hour package earns you 30 logbook hours toward your 120-hour requirement.',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1a2235] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#FFD700] border border-transparent transition-colors"
            >
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
      </div>
    </section>
  );
}
