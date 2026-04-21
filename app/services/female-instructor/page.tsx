import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Female Driving Instructor Sydney | Learn with Sidra | L Plus P',
  description:
    'Prefer a female driving instructor? Learn with Sidra at L Plus P Driving School, Sydney. Specialising in learner drivers, female students, logbook hours, and overseas licence conversion. Call 0451 331 140.',
  alternates: { canonical: '/services/female-instructor' },
};

export default function FemaleInstructorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-[#FFD700] text-[#0f1623] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
            Ask for Sidra
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Prefer a <span className="text-[#FFD700]">Female Instructor?</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Learn with Sidra — patient, experienced, and specialised in female students
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="bg-[#0f1623] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-start">
          <div className="flex-1 min-w-0 flex flex-col gap-12">

            {/* Instructor profile */}
            <div className="bg-[#1a2235] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-[#FFD700] flex-shrink-0 flex items-center justify-center shadow-lg">
                <span className="text-[#0f1623] font-extrabold text-4xl">S</span>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-white font-extrabold text-2xl">Sidra</h2>
                  <p className="text-[#FFD700] font-semibold">Senior Instructor</p>
                  <p className="text-gray-400 text-sm mt-1">Expert instructor · L Plus P Driving School</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Learner Drivers', 'Female Students', 'Logbook Hours', 'Overseas Conversion'].map((s) => (
                    <span key={s} className="bg-[#0f1623] text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-700">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Sidra is a senior instructor at L Plus P with a calm, encouraging teaching style. She has helped hundreds of students build confidence behind the wheel — particularly students who feel more at ease with a female instructor. Sidra teaches in our late-model automatic car and offers free pick-up across all 27 suburbs we cover.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <a
                    href="tel:0451331140"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-2.5 rounded-lg hover:bg-green-500 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Sidra — 0451 331 140
                  </a>
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center bg-[#FFD700] text-[#0f1623] font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
                  >
                    Book with Sidra
                  </Link>
                </div>
              </div>
            </div>

            {/* Why choose a female instructor */}
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Why Choose a <span className="text-[#FFD700]">Female Instructor?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'More Comfortable Learning Environment',
                    desc: 'Many students — particularly women, young learners, and those from certain cultural backgrounds — feel more relaxed and open with a female instructor. Comfort leads to faster learning.',
                  },
                  {
                    title: 'No Judgement, Just Support',
                    desc: "Sidra creates a safe space where it's okay to make mistakes. She never raises her voice or makes students feel embarrassed. Her calm, patient style works especially well for nervous drivers.",
                  },
                  {
                    title: 'Experienced with Female Learners',
                    desc: "Sidra understands the specific challenges many female learners face — from spatial awareness to managing anxiety. She's helped hundreds of women pass their test first time.",
                  },
                  {
                    title: 'Full Range of Services',
                    desc: 'Sidra teaches all lesson types: learner driver, logbook hours, test preparation, and overseas licence conversion. All lessons in our late-model automatic car.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-[#1a2235] rounded-2xl p-6 flex flex-col gap-3">
                    <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#0f1623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className="bg-[#1a2235] rounded-2xl p-8">
              <h2 className="text-2xl font-extrabold text-white mb-6">What&apos;s Included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Lessons with Sidra — experienced female instructor',
                  'Free pick-up and drop-off anywhere in our 24-suburb service area',
                  'Late-model automatic car for all lessons',
                  '3-for-1 logbook hours for learners under 25',
                  'Structured lesson plans tailored to your level',
                  'Patient, encouraging instruction at your pace',
                  'Test preparation and mock tests available',
                  'Overseas licence conversion lessons available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-4">Pricing</h2>
              <div className="flex flex-col gap-3 max-w-sm">
                {[
                  { label: 'Single Lesson', price: '$60/hr' },
                  { label: '5-Hour Pack', price: '$275', note: 'Save $25' },
                  { label: '10-Hour Pack', price: '$500', note: 'Most Popular — 30 logbook hours' },
                ].map((p) => (
                  <div key={p.label} className="bg-[#1a2235] rounded-xl px-5 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">{p.label}</p>
                      {p.note && <p className="text-gray-400 text-xs mt-0.5">{p.note}</p>}
                    </div>
                    <span className="text-[#FFD700] font-extrabold text-lg">{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Pricing is the same whether you book with Sidra or Mick. Availability subject to scheduling.
              </p>
            </div>

            {/* Student review */}
            <div className="bg-[#1a2235] rounded-2xl p-6 border-l-4 border-[#FFD700]">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                &ldquo;Sidra was the perfect instructor for me. As a female learner I felt completely comfortable and safe. She explains everything clearly and is super encouraging. Passed first time!&rdquo;
              </p>
              <p className="text-white font-semibold text-sm mt-3">Priya M.</p>
              <p className="text-gray-500 text-xs">Macquarie Park · Google Review</p>
            </div>

          </div>

          <Sidebar />
        </div>
      </div>

      <CTABanner
        heading="Book with Sidra today"
        subtext="Call 0451 331 140 or book online — we confirm within 1 hour."
        buttonLabel="Book a Lesson with Sidra"
      />
    </>
  );
}
