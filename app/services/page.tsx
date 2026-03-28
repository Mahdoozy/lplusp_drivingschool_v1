import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Driving Lesson Services | L Plus P Driving School Sydney',
  description:
    'Driving lesson services in Sydney: Learner driver lessons, driving test preparation, overseas licence conversion, logbook hour assistance. Book with L Plus P today.',
};

const servicesData = [
  {
    id: 'learner',
    title: 'Learner Driver Lessons',
    description:
      'Our learner driver lessons are designed to build confidence and competence from the ground up. We follow a structured curriculum that takes you from the very basics — starting, stopping, steering — through to advanced manoeuvres, freeway driving, and complex intersections.',
    includes: [
      'Structured lesson plans matched to your level',
      'Free pick-up and drop-off from home, school or work',
      'Dual control vehicle for maximum safety',
      '3-for-1 logbook hours for learners under 25',
      'Lessons tailored for nervous and anxious drivers',
      'Flexible scheduling including early mornings and Saturdays',
    ],
    price: 'From $60/hr',
    priceNote: 'Single, 5-hour and 10-hour packages available',
  },
  {
    id: 'test-prep',
    title: 'Driving Test Preparation',
    description:
      'Feeling ready is the key to passing first time. Our dedicated test preparation lessons target the exact skills the examiner will assess — from observation and signalling to reverse parking and giving way. We know all the local test routes at Ryde, Silverwater, Castle Hill, Hornsby, and Chatswood inside out.',
    includes: [
      'Full mock driving test in real test conditions',
      'Detailed feedback on every manoeuvre',
      'Knowledge of all local test routes',
      'Use of our dual-control car for the actual test',
      'Pick-up from your preferred location on test day',
      'Debrief after the test — pass or fail',
    ],
    price: 'From $160',
    priceNote: 'Includes 2 hours of test prep + test day pick-up',
  },
  {
    id: 'overseas',
    title: 'Overseas Licence Conversion',
    description:
      'Driving in Australia is different in many ways — road rules, road signs, and driving culture all vary from country to country. Our overseas conversion lessons are tailored to your existing experience and help you quickly bridge the gap so you can pass the NSW practical driving test with confidence.',
    includes: [
      'Assessment of your current driving skills',
      'Focus on Australian-specific road rules',
      'Practice on roads you will be tested on',
      'Guidance on NSW road signs and markings',
      'Test day car provision',
      'Lessons in English (other languages available on request)',
    ],
    price: 'From $60/hr',
    priceNote: 'Number of lessons varies by experience',
  },
  {
    id: 'logbook',
    title: 'Logbook Hour Assistance',
    description:
      'NSW requires learner drivers under 25 to complete 120 supervised hours before sitting the driving test. Each hour of professional instruction with an accredited instructor counts as 3 logbook hours — dramatically reducing the time it takes to reach 120 hours.',
    includes: [
      '1 professional hour = 3 logbook hours',
      '10-hour pack = 30 logbook hours',
      'Signed and verified logbook entries',
      'Progress tracked lesson by lesson',
      'Flexible scheduling to fit school or work',
      'Advice on safe supervised driving at home',
    ],
    price: 'From $60/hr',
    priceNote: '10-hour pack = 30 logbook hours toward your 120',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our <span className="text-[#FFD700]">Services</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Comprehensive driving instruction for every stage of the learning journey
          </p>
        </div>
      </section>

      {/* Service sections */}
      <div className="bg-[#0f1623]">
        {servicesData.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 sm:py-20 ${idx % 2 === 1 ? 'bg-[#1a2235]' : 'bg-[#0f1623]'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="flex flex-col gap-5">
                  <h2 className="text-3xl font-extrabold text-white">{service.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  <div className="flex flex-col gap-1">
                    <div className="text-[#FFD700] text-3xl font-extrabold">{service.price}</div>
                    <div className="text-gray-400 text-sm">{service.priceNote}</div>
                  </div>
                  <Link
                    href="/book"
                    className="bg-[#FFD700] text-[#0f1623] font-bold px-6 py-3 rounded-lg text-center hover:bg-yellow-300 transition-colors w-fit"
                  >
                    Book Now
                  </Link>
                </div>
                <div className={`bg-[${idx % 2 === 1 ? '#0f1623' : '#1a2235'}] rounded-2xl p-6`} style={{ backgroundColor: idx % 2 === 1 ? '#0f1623' : '#1a2235' }}>
                  <h3 className="text-white font-bold mb-4">What&apos;s Included</h3>
                  <ul className="flex flex-col gap-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABanner />
    </>
  );
}
