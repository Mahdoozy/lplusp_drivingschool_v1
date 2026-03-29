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
      {/* Hero — dark (keep dramatic) */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Est. 1997</span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#f0f2f8]">
            About L Plus P Driving School
          </h1>
          <p className="mt-4 font-sans text-[#8899bb] text-lg sm:text-xl">
            Teaching Sydney to drive safely since 1997
          </p>
        </div>
      </section>

      {/* Stats bar — light */}
      <section
        className="py-10"
        style={{ background: '#eef2ff', borderTop: '1px solid #c8d4f0', borderBottom: '1px solid #c8d4f0' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x divide-[#c8d4f0]">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4">
                <div
                  className="font-serif font-bold text-[#0a0f1e]"
                  style={{ fontSize: '48px', lineHeight: '1.1' }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-sans text-[#3a4a6a] mt-1 uppercase tracking-widest"
                  style={{ fontSize: '11px' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story — white */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-start">
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif font-bold text-2xl text-[#0a0f1e] mb-8">Our Story</h2>
                <div className="flex flex-col gap-0">
                  {timeline.map((item, idx) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: 'var(--gold)' }}
                        >
                          <span className="text-[#0a0f1e] text-xs font-bold text-center leading-tight px-1">{item.year}</span>
                        </div>
                        {idx < timeline.length - 1 && (
                          <div className="w-0.5 h-10 bg-[#e2e8f4] mt-1" />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className="font-sans text-[#3a4a6a] text-sm pt-2">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a0f1e]">Our Mission</h2>
                <p className="font-sans text-[#3a4a6a] leading-relaxed">
                  L Plus P Driving School was founded with a clear mission: to produce safe, confident drivers who pass their test first time. We believe that great driving instruction is about more than passing a test — it is about developing lifelong safe driving habits.
                </p>
                <p className="font-sans text-[#3a4a6a] leading-relaxed">
                  All lessons are conducted in our late-model automatic cars. Every lesson is tailored to the individual student. Whether you are a nervous beginner, an experienced driver who failed the test, or converting from an overseas licence, we meet you where you are and get you where you need to be.
                </p>
                <p className="font-sans text-[#3a4a6a] leading-relaxed">
                  We serve 24 suburbs across North Sydney and Ryde, offering free pick-up and drop-off. Our 3-for-1 logbook scheme means students log 30 hours from a single 10-hour pack — accelerating the path to a full licence.
                </p>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>

      {/* Instructor profiles — light #f4f7ff */}
      <section className="py-16" style={{ backgroundColor: '#f4f7ff', borderTop: '1px solid #e2e8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-[#0a0f1e] text-center mb-10">Meet Your Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {instructors.map((instructor) => (
              <div
                key={instructor.name}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: '#ffffff', border: '1px solid #e2e8f4', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #F5C842, #d4a91a)' }}
                >
                  <span className="font-serif font-bold text-[#0a0f1e] text-3xl">{instructor.initial}</span>
                </div>
                <div className="text-center">
                  <h3 className="font-sans font-bold text-xl text-[#0a0f1e]">{instructor.name}</h3>
                  <p className="font-sans text-sm font-semibold text-[#d4a91a]">{instructor.title}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {instructor.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="font-sans text-[#d4a91a] text-xs px-2 py-1 rounded-md font-semibold"
                      style={{ background: 'rgba(245, 200, 66, 0.1)', border: '1px solid rgba(212, 169, 26, 0.2)' }}
                    >
                      {cred}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {instructor.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="font-sans text-[#3a4a6a] text-xs px-2 py-1 rounded-md"
                      style={{ background: '#f4f7ff', border: '1px solid #c8d4f0' }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations — dark (keep dramatic) */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-2xl text-[#f0f2f8] text-center mb-8">Accreditations &amp; Certifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {accreditations.map((acc) => (
              <div
                key={acc.label}
                className="rounded-xl p-5 flex flex-col items-center gap-3 text-center"
                style={{ background: 'var(--bg-card)', border: '1px solid rgba(30,45,74,0.8)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--gold)' }}
                >
                  <svg className="w-5 h-5 text-[#0a0f1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-sans text-[#f0f2f8] text-xs font-semibold">{acc.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
