import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About Us | L Plus P Driving School Sydney',
  description:
    'Learn about L Plus P Driving School — founded in 1997 by Mick and Sidra. Sydney driving school serving North Ryde and 23 suburbs. RMS accredited instructors, dual control cars, WWCC.',
};

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '1,000+', label: 'Students Passed' },
  { value: '5.0', label: 'Google Rating' },
  { value: '24', label: 'Suburbs Covered' },
];

const timeline = [
  { year: '1997', event: 'L Plus P Driving School founded by Mick in North Ryde' },
  { year: '2005', event: 'Expanded coverage to 10 suburbs across Sydney' },
  { year: '2010', event: 'Sidra joins as Senior Instructor' },
  { year: '2015', event: 'Service area expanded to 20+ suburbs' },
  { year: '2020', event: '3-for-1 logbook scheme introduced for learner drivers' },
  { year: 'Today', event: '1,000+ students passed — still growing' },
];

const instructors = [
  {
    name: 'Mick',
    title: 'Head Instructor',
    credentials: ['RMS Accredited', 'WWCC Cleared', '20+ Years Experience'],
    specialties: ['Learner drivers', 'Test preparation', 'Nervous drivers', 'Overseas conversion'],
  },
  {
    name: 'Sidra',
    title: 'Senior Instructor',
    credentials: ['RMS Accredited', 'WWCC Cleared', 'Expert Instructor'],
    specialties: ['Learner drivers', 'Female students', 'Logbook hours', 'Overseas conversion'],
  },
];

const accreditations = [
  { label: 'NSW Transport Accredited' },
  { label: 'Dual Control Vehicles' },
  { label: 'Working With Children Check' },
  { label: 'ADTA Member' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            About <span className="text-[#FFD700]">L Plus P Driving School</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg sm:text-xl">
            Teaching Sydney to drive safely since 1997
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1a2235] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold text-[#FFD700]">{stat.value}</div>
                <div className="text-white text-sm font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 bg-[#0f1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-8">Our Story</h2>
              <div className="flex flex-col gap-0">
                {timeline.map((item, idx) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-[#0f1623] text-xs font-bold text-center leading-tight px-1">{item.year}</span>
                      </div>
                      {idx < timeline.length - 1 && (
                        <div className="w-0.5 h-10 bg-[#1a2235] mt-1" />
                      )}
                    </div>
                    <div className="pb-8">
                      <p className="text-gray-300 text-sm pt-2">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                L Plus P Driving School was founded with a clear mission: to produce safe, confident drivers who pass their test first time. We believe that great driving instruction is about more than passing a test — it is about developing lifelong safe driving habits.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every lesson is tailored to the individual student. Whether you are a nervous beginner, an experienced driver who failed the test, or converting from an overseas licence, we meet you where you are and get you where you need to be. Our patient, professional instructors and modern dual-control fleet make us Sydney&apos;s top choice for learner drivers.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We are proud to serve 24 suburbs across North Sydney and Ryde, offering free pick-up and drop-off from your home or school. Our 3-for-1 logbook scheme means students log 30 hours from a single 10-hour pack — accelerating the path to a full licence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor profiles */}
      <section className="py-16 bg-[#1a2235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">Meet Your Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {instructors.map((instructor) => (
              <div key={instructor.name} className="bg-[#0f1623] rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-24 h-24 bg-[#1a2235] rounded-xl mx-auto flex items-center justify-center">
                  <svg className="w-14 h-14 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl">{instructor.name}</h3>
                  <p className="text-[#FFD700] text-sm font-semibold">{instructor.title}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {instructor.credentials.map((cred) => (
                    <span key={cred} className="bg-[#1a2235] text-[#FFD700] text-xs px-2 py-1 rounded-md font-semibold">
                      {cred}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {instructor.specialties.map((spec) => (
                    <span key={spec} className="bg-[#1a2235] text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-700">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-14 bg-[#0f1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-white text-center mb-8">Accreditations &amp; Certifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {accreditations.map((acc) => (
              <div key={acc.label} className="bg-[#1a2235] rounded-xl p-5 flex flex-col items-center gap-3 text-center">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0f1623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-xs font-semibold">{acc.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
