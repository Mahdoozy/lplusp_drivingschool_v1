import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Driving Lesson Services | L Plus P Driving School Sydney',
  description:
    'Driving lesson services in Sydney: Learner driver lessons, driving test preparation, overseas licence conversion, logbook hours, EV familiarisation, senior refresher, P-plate confidence. All lessons in our automatic cars.',
};

const servicesData = [
  {
    id: 'learner',
    title: 'Learner Driver Lessons',
    badge: null,
    description:
      'Our learner driver lessons are designed to build confidence and competence from the ground up. All lessons conducted in our late-model automatic cars. We follow a structured curriculum from the very basics through to advanced manoeuvres, freeway driving, and complex intersections.',
    includes: [
      'Structured lesson plans matched to your level',
      'Free pick-up and drop-off from home, school or work',
      'Our late-model automatic car for maximum safety',
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
    badge: null,
    description:
      'Know exactly what to expect on test day. We cover all local test routes at Ryde, Silverwater, Castle Hill, Hornsby, and Chatswood. All test preparation conducted in our automatic car, which you can also use on test day.',
    includes: [
      'Full mock driving test in real test conditions',
      'Detailed feedback on every manoeuvre',
      'Knowledge of all local test routes',
      'Use of our automatic car for the actual test',
      'Pick-up from your preferred location on test day',
      'Debrief after the test — pass or fail',
    ],
    price: 'From $160',
    priceNote: 'Includes 2 hours of test prep + test day pick-up',
  },
  {
    id: 'overseas',
    title: 'Overseas Licence Conversion',
    badge: null,
    description:
      'Hold a licence from another country? Our overseas conversion lessons are tailored to your existing experience. All lessons in our automatic cars. We help you quickly adapt to Australian road rules and pass the NSW practical driving test with confidence.',
    includes: [
      'Assessment of your current driving skills',
      'Focus on Australian-specific road rules',
      'Practice on roads you will be tested on',
      'Guidance on NSW road signs and markings',
      'Late-model automatic car provided',
      'Lessons in English (other languages available on request)',
    ],
    price: 'From $60/hr',
    priceNote: 'Number of lessons varies by experience',
  },
  {
    id: 'logbook',
    title: 'Logbook Hour Assistance',
    badge: null,
    description:
      'NSW requires learner drivers under 25 to complete 120 supervised hours. Each hour of professional instruction with an accredited instructor counts as 3 logbook hours. All logbook lessons conducted in our late-model automatic cars.',
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
  {
    id: 'ev',
    title: 'EV Familiarisation Course',
    badge: 'NEW — Future-Ready Driving',
    description:
      "Australia's EV sales grew over 150% in 2024. Millions of Australians are buying their first electric vehicle and finding it unfamiliar. We offer a 1-hour EV orientation session to get you confident with regenerative braking, one-pedal driving, charging, and the digital dashboards in modern EVs like Tesla, BYD, MG and Hyundai. You do not need to be a learner driver — this course is for anyone who just bought or is considering buying an EV.",
    includes: [
      'Regenerative braking explained and practised',
      'One-pedal driving technique',
      'Understanding the EV dashboard and digital displays',
      'Charging — AC vs DC, public vs home charging',
      'Range management and trip planning',
      'Differences from automatic petrol/hybrid driving',
    ],
    price: '$80',
    priceNote: 'Per 1-hour session — no learner licence required',
  },
  {
    id: 'senior',
    title: 'Senior Driver Refresher Course',
    badge: 'All Ages Welcome',
    description:
      'Keeping your independence on the road matters. Our Senior Driver Refresher Course is designed for drivers returning to the road after illness, injury or a long break, drivers wanting to update their road rule knowledge, and drivers 75+ preparing for their annual medical assessment or 85+ preparing for their on-road assessment required by NSW Transport. Our patient, professional instructors work at your pace in a relaxed, pressure-free environment. All lessons in our automatic cars.',
    includes: [
      'Updated NSW road rules review',
      'Defensive driving techniques',
      'Hazard recognition and response',
      'Adapting driving style to physical changes',
      'Parking, reversing and intersection confidence',
      'Preparation for NSW senior driver assessment (85+)',
      'Free initial phone consultation to discuss your needs',
    ],
    price: 'From $60/hr',
    priceNote: 'Tailored to your needs — flexible lesson lengths',
  },
  {
    id: 'female-instructor',
    title: 'Prefer a Female Instructor?',
    badge: 'Ask for Sidra',
    description:
      'Many students feel more comfortable learning with a female instructor. Sidra is our experienced senior instructor specialising in learner drivers, female students, logbook hours, and overseas licence conversion. She teaches in our late-model automatic car with the same free pick-up service across all 24 suburbs. Call Sidra directly on 0451 331 140.',
    includes: [
      'Learn with Sidra — experienced, calm, encouraging female instructor',
      'Free pick-up and drop-off across all 24 suburbs',
      'Late-model automatic car for all lessons',
      '3-for-1 logbook hours for learners under 25',
      'Learner driver, test prep, logbook, and overseas conversion all available',
      'Flexible scheduling including early mornings and Saturdays',
      'Call Sidra directly: 0451 331 140',
    ],
    price: 'From $60/hr',
    priceNote: 'Same pricing as all lessons — single, 5-hour and 10-hour packages',
  },
  {
    id: 'intensive',
    title: 'Intensive Driving Course',
    badge: 'Fast-Track',
    description:
      'Test date approaching? Need your licence fast? Our Intensive Driving Course packs multiple lessons into one week, building your skills quickly and consistently with the same instructor every time. Ideal for learners with a test date booked, people who recently moved to Sydney, and those converting an overseas licence who need to get road-ready fast.',
    includes: [
      'Multiple lessons scheduled across 1–2 weeks',
      'Same instructor every lesson for consistency',
      'All lessons in our late-model automatic car',
      'Free pick-up and drop-off from home, work, or school',
      'Test route practice at Ryde, Silverwater, Castle Hill, Hornsby, Chatswood',
      'Full mock test included in longer packages',
      '3-for-1 logbook hours for learners under 25',
      'Custom schedule tailored to your test date — call to discuss',
    ],
    price: 'From $60/hr',
    priceNote: 'Custom packages available — call 0469 370 978 to discuss',
  },
  {
    id: 'pplate',
    title: 'P-Plate Confidence Course',
    badge: 'For New P-Platers',
    description:
      'Just got your P-plates? The first 6 months of solo driving are statistically the most dangerous — P-platers are 8 times more likely to be involved in a crash than when supervised. Our P-Plate Confidence Course is designed specifically for new P-platers who want extra confidence, nervous P-platers who feel anxious driving alone, and drivers who have had a minor incident and want to rebuild their skills. All lessons in our late-model automatic cars.',
    includes: [
      'Motorway and freeway driving (M1, M2, Pacific Highway)',
      'Night driving practice',
      'Hazard perception in real Sydney traffic',
      'Managing peer pressure and distractions',
      'Advanced parking manoeuvres',
      'Emergency braking and vehicle control',
      'One-on-one personalised coaching',
    ],
    price: 'From $60/hr',
    priceNote: 'Most students book 3–5 sessions',
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
            All lessons conducted in our late-model automatic cars
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="bg-[#0f1623] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-start">
          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col gap-0">
            {servicesData.map((service, idx) => (
              <section
                key={service.id}
                id={service.id}
                className={`py-12 ${idx % 2 === 1 ? 'bg-[#1a2235]' : 'bg-[#0f1623]'} -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8`}
              >
                {service.badge && (
                  <div className="mb-4">
                    <span className="bg-[#FFD700] text-[#0f1623] text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}
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
                  <div
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: idx % 2 === 1 ? '#0f1623' : '#1a2235' }}
                  >
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
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>

      <CTABanner />
    </>
  );
}
