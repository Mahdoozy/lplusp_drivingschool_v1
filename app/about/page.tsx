import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'About Us | L Plus P Driving School Sydney',
  description:
    'Learn about L Plus P Driving School — founded in 1997 by Mick and Sidra. Sydney driving school serving North Ryde and 23 suburbs. All lessons in our automatic cars. RMS accredited, WWCC cleared.',
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
    initial: 'M',
    title: 'Head Instructor',
    credentials: ['RMS Accredited', 'WWCC Cleared', '20+ Years Experience'],
    specialties: ['Learner drivers', 'Test preparation', 'Nervous drivers', 'Overseas conversion'],
  },
  {
    name: 'Sidra',
    initial: 'S',
    title: 'Senior Instructor',
    credentials: ['RMS Accredited', 'WWCC Cleared', 'Expert Instructor'],
    specialties: ['Learner drivers', 'Female students', 'Logbook hours', 'Overseas conversion'],
  },
];

const accreditations = [
  { label: 'NSW Transport Accredited' },
  { label: 'Automatic Vehicles Only' },
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

      {/* Main content + sidebar */}
      <div className="bg-[#0f1623] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-start">
          <div className="flex-1 min-w-0 flex flex-col gap-16">
            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  L Plus P Driving School was founded with a clear mission: to produce safe, confident drivers who pass their test first time. We believe that great driving instruction is about more than passing a test — it is about developing lifelong safe driving habits.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  All lessons are conducted in our late-model automatic cars. Every lesson is tailored to the individual student. Whether you are a nervous beginner, an experienced driver who failed the test, or converting from an overseas licence, we meet you where you are and get you where you need to be.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We serve 24 suburbs across North Sydney and Ryde, offering free pick-up and drop-off. Our 3-for-1 logbook scheme means students log 30 hours from a single 10-hour pack — accelerating the path to a full licence.
                </p>
              </div>
            </div>

            {/* Instructor profiles */}
            <div>
              <h2 className="text-3xl font-extrabold text-white text-center mb-10">Meet Your Instructors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {instructors.map((instructor) => (
                  <div key={instructor.name} className="bg-[#1a2235] rounded-2xl p-6 flex flex-col gap-4">
                    <div className="w-20 h-20 bg-[#FFD700] rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <span className="text-[#0f1623] font-extrabold text-3xl">{instructor.initial}</span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-white font-bold text-xl">{instructor.name}</h3>
                      <p className="text-[#FFD700] text-sm font-semibold">{instructor.title}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {instructor.credentials.map((cred) => (
                        <span key={cred} className="bg-[#0f1623] text-[#FFD700] text-xs px-2 py-1 rounded-md font-semibold">
                          {cred}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {instructor.specialties.map((spec) => (
                        <span key={spec} className="bg-[#0f1623] text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-700">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditations */}
            <div>
              <h2 className="text-2xl font-extrabold text-white text-center mb-8">Accreditations &amp; Certifications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
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
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>

      <CTABanner />
    </>
  );
}
