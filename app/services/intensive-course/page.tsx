import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Intensive Driving Course Sydney | Fast-Track Lessons | L Plus P',
  description:
    'Intensive driving course in Sydney with L Plus P. Multiple lessons in one week — ideal if your test is approaching, you recently moved to Sydney, or need to get your licence fast. Call 0469 370 978.',
  alternates: { canonical: '/services/intensive-course' },
};

export default function IntensiveCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-[#FFD700] text-[#0f1623] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
            Fast-Track
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Intensive <span className="text-[#FFD700]">Driving Course</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Multiple lessons in one week — get test-ready fast
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="bg-[#0f1623] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-start">
          <div className="flex-1 min-w-0 flex flex-col gap-12">

            {/* Who this is for */}
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Is This <span className="text-[#FFD700]">Right for You?</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our Intensive Driving Course is designed for people who need to make rapid progress in a short period of time. Rather than spreading lessons over many weeks, we pack multiple hours into a condensed schedule — sometimes several lessons in a single week — to build your skills quickly and consistently.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Test Date Approaching',
                    desc: "You've already booked your driving test and need to sharpen your skills fast. We focus on exactly what you'll be assessed on.",
                  },
                  {
                    title: 'Recently Moved to Sydney',
                    desc: "You hold an interstate or overseas licence and need to get familiar with Sydney roads and the NSW test format quickly.",
                  },
                  {
                    title: 'Need Your Licence for Work',
                    desc: "A new job or opportunity requires a licence. Our intensive format gets you to test-ready standard as efficiently as possible.",
                  },
                  {
                    title: 'Logbook Hours to Complete',
                    desc: "Learner under 25? Our 3-for-1 logbook scheme means an intensive week of professional lessons can dramatically accelerate your logbook hours.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-[#1a2235] rounded-2xl p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-[#0f1623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className="bg-[#1a2235] rounded-2xl p-8">
              <h2 className="text-2xl font-extrabold text-white mb-6">What&apos;s Included</h2>
              <ul className="flex flex-col gap-3">
                {[
                  'Multiple lessons scheduled across 1–2 weeks to your availability',
                  'Consistent instructor — same instructor every lesson for continuity',
                  'All lessons in our late-model automatic car',
                  'Free pick-up and drop-off from your home, work, or school',
                  'Test route practice at your local test centre (Ryde, Silverwater, Castle Hill, Hornsby, Chatswood)',
                  'Full mock driving test included in longer packages',
                  '3-for-1 logbook hours counted for learners under 25',
                  'Flexible scheduling including early mornings and Saturdays',
                  'WhatsApp updates and lesson summaries after each session',
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
              <h2 className="text-2xl font-extrabold text-white mb-2">Pricing</h2>
              <p className="text-gray-400 text-sm mb-6">
                Intensive courses use the same per-hour pricing as our standard packages — the difference is the schedule, not the price.
              </p>
              <div className="flex flex-col gap-3 max-w-sm">
                {[
                  { label: 'Single Lesson', price: '$60/hr', note: 'Pay as you go' },
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
              <div className="mt-4 border-l-4 border-[#FFD700] pl-4 py-1">
                <p className="text-gray-300 text-sm">
                  <span className="text-white font-semibold">Need a custom intensive package?</span> We can tailor lesson frequency and duration to your exact schedule and test date.{' '}
                  <a href="tel:0469370978" className="text-[#FFD700] hover:underline font-semibold">
                    Call Mick on 0469 370 978
                  </a>{' '}
                  to discuss.
                </p>
              </div>
            </div>

            {/* How it works */}
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-6">How It Works</h2>
              <div className="flex flex-col gap-4">
                {[
                  { step: '1', title: 'Call or WhatsApp Us', desc: 'Tell us your test date, your current experience level, and how many lessons you want per week.' },
                  { step: '2', title: 'We Plan Your Schedule', desc: "We book your lessons across the week based on your availability and instructor schedule. You'll have the same instructor every time." },
                  { step: '3', title: 'Intensive Lessons Begin', desc: 'Each lesson builds directly on the last — no gap means no forgetting. Progress is fast and consistent.' },
                  { step: '4', title: 'Mock Test', desc: 'Before your actual test we run a full mock test on the real test route so you know exactly what to expect.' },
                  { step: '5', title: 'Test Day', desc: 'We pick you up, provide our automatic car, and drive with you to the test centre. You walk in confident.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-[#FFD700] flex-shrink-0 flex items-center justify-center">
                      <span className="text-[#0f1623] font-extrabold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <Sidebar />
        </div>
      </div>

      <CTABanner
        heading="Ready to fast-track your licence?"
        subtext="Call Mick on 0469 370 978 or book online. We confirm within 1 hour."
        buttonLabel="Book Your Intensive Course"
      />
    </>
  );
}
