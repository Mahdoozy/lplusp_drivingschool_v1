import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';
import { TRUST_STATS } from '@/lib/trustStats';

export const metadata: Metadata = {
  title: 'Meet Your Instructors — Mick & Sidra | L Plus P Driving School',
  description:
    'Meet Mick and Sidra — L Plus P Driving School\'s experienced instructors. 20+ years teaching in Sydney. Female instructor available. Book directly with your preferred instructor.',
  alternates: { canonical: '/instructors' },
};

const instructorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Mick',
      jobTitle: 'Head Driving Instructor',
      worksFor: {
        '@type': 'DrivingSchool',
        name: 'L Plus P Driving School',
        url: 'https://lppdrivingschool.com.au',
      },
      telephone: '+61469370978',
      knowsAbout: [
        'Learner driver instruction',
        'Driving test preparation',
        'Overseas licence conversion',
        'Nervous driver coaching',
        'NSW road rules',
      ],
    },
    {
      '@type': 'Person',
      name: 'Sidra',
      jobTitle: 'Senior Driving Instructor',
      worksFor: {
        '@type': 'DrivingSchool',
        name: 'L Plus P Driving School',
        url: 'https://lppdrivingschool.com.au',
      },
      telephone: '+61451331140',
      knowsAbout: [
        'Learner driver instruction',
        'Female instructor lessons',
        'Overseas licence conversion',
        'Nervous driver coaching',
        'Multilingual instruction',
      ],
    },
  ],
};

export default function InstructorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(instructorSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Our Instructors</span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-white mt-2">
            The people teaching you to drive
          </h1>
          <p className="mt-4 font-outfit text-gray-300 text-lg max-w-2xl mx-auto">
            Between them, Mick and Sidra have spent over {TRUST_STATS.yearsOperating} years on Sydney roads. They know every test route, every tricky intersection, and exactly where learners go wrong.
          </p>
        </div>
      </section>

      {/* Instructor cards */}
      <section className="bg-[#0a0f1e] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

          {/* Mick */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col sm:flex-row"
            style={{ background: '#0f1829', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Photo placeholder */}
            <div
              className="w-full sm:w-56 flex-shrink-0 flex items-center justify-center bg-[#1a2235] min-h-[200px]"
            >
              {/* TODO: Replace with real photo of Mick */}
              <div className="flex flex-col items-center gap-2 text-center p-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(245,200,66,0.12)' }}
                >
                  <span className="font-syne font-bold text-[#F5C842] text-3xl">M</span>
                </div>
                <span className="font-outfit text-xs text-gray-600">Photo coming soon</span>
              </div>
            </div>
            <div className="p-7 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-syne font-bold text-2xl text-white">Mick</h2>
                  <span
                    className="font-outfit text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                    style={{ background: 'rgba(245,200,66,0.1)', color: '#F5C842', border: '1px solid rgba(245,200,66,0.2)' }}
                  >
                    Head Instructor
                  </span>
                </div>
                <p className="font-outfit text-sm text-gray-400">0469 370 978 · Est. {TRUST_STATS.yearEstablished}</p>
              </div>
              <p className="font-outfit text-gray-300 text-sm leading-relaxed">
                Mick has been teaching Sydney drivers since {TRUST_STATS.yearEstablished} — that&apos;s over {TRUST_STATS.yearsOperating} years on the same roads your test will be on. He specialises in learner drivers, driving test preparation, and overseas licence conversion. His calm, structured approach means students who have failed tests elsewhere regularly pass first time with him.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['Learner drivers', 'Test preparation', 'Overseas conversion', 'Nervous drivers'].map((s) => (
                  <li
                    key={s}
                    className="font-outfit text-xs px-3 py-1 rounded-full text-gray-300"
                    style={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="self-start font-outfit font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
                style={{ background: '#F5C842', color: '#0a0f1e' }}
              >
                Book with Mick →
              </Link>
            </div>
          </div>

          {/* Sidra */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col sm:flex-row"
            style={{ background: '#0f1829', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Photo placeholder */}
            <div
              className="w-full sm:w-56 flex-shrink-0 flex items-center justify-center bg-[#1a2235] min-h-[200px]"
            >
              {/* TODO: Replace with real photo of Sidra */}
              <div className="flex flex-col items-center gap-2 text-center p-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(245,200,66,0.12)' }}
                >
                  <span className="font-syne font-bold text-[#F5C842] text-3xl">S</span>
                </div>
                <span className="font-outfit text-xs text-gray-600">Photo coming soon</span>
              </div>
            </div>
            <div className="p-7 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h2 className="font-syne font-bold text-2xl text-white">Sidra</h2>
                  <span
                    className="font-outfit text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                    style={{ background: 'rgba(245,200,66,0.1)', color: '#F5C842', border: '1px solid rgba(245,200,66,0.2)' }}
                  >
                    Senior Instructor
                  </span>
                  <span
                    className="font-outfit text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                    style={{ background: 'rgba(255,255,255,0.04)', color: '#c0ccee', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    Female Instructor
                  </span>
                </div>
                <p className="font-outfit text-sm text-gray-400">0451 331 140</p>
              </div>
              <p className="font-outfit text-gray-300 text-sm leading-relaxed">
                Sidra is L Plus P&apos;s senior female instructor, available across all 24 service suburbs. Many students from Chinese, Korean, Indian, and Middle Eastern backgrounds specifically request Sidra — she creates a comfortable, patient environment that makes a real difference for learners who feel anxious about driving. She covers learner lessons, test prep, and overseas licence conversion.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['Female instructor', 'Learner drivers', 'Overseas conversion', 'Anxious learners'].map((s) => (
                  <li
                    key={s}
                    className="font-outfit text-xs px-3 py-1 rounded-full text-gray-300"
                    style={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="self-start font-outfit font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
                style={{ background: '#F5C842', color: '#0a0f1e' }}
              >
                Book with Sidra →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Trust stats strip */}
      <section className="bg-[#060b15] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: `${TRUST_STATS.yearsOperating}+`, label: 'Years operating' },
              { value: `${TRUST_STATS.studentsTaught.toLocaleString()}+`, label: 'Students taught' },
              { value: `${TRUST_STATS.firstAttemptPassRate}%`, label: 'First-attempt pass rate' },
              { value: `${TRUST_STATS.rating}★`, label: `${TRUST_STATS.reviewCount}+ Google reviews` },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-syne font-bold text-3xl text-[#F5C842]">{stat.value}</span>
                <span className="font-outfit text-xs text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
