import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Overseas Licence Conversion Sydney | L Plus P Driving School',
  description:
    'Holding a foreign licence? L Plus P Driving School helps you convert your overseas driving licence to a NSW licence. Serving North Ryde, Eastwood, Epping and 27 suburbs. Book online.',
  alternates: { canonical: '/overseas-licence-conversion' },
};

const steps = [
  {
    num: '1',
    title: 'Check your eligibility',
    body: 'Overseas licences can be used in NSW for up to 3 months after arriving. After that, you need to apply for an NSW licence. The process depends on your country of origin.',
  },
  {
    num: '2',
    title: 'Take a Driver Knowledge Test (DKT)',
    body: 'If your overseas licence is from a non-recognised country, you\'ll need to pass the DKT at a Service NSW centre. We can help you understand the road rules and prepare with confidence.',
  },
  {
    num: '3',
    title: 'Book driving lessons',
    body: 'Most overseas drivers need lessons to get familiar with Australian road rules, left-hand driving, and local test routes. This is where we come in — patient, structured, and tailored to you.',
  },
  {
    num: '4',
    title: 'Pass your driving test',
    body: 'We\'ll prepare you on the exact test routes at Ryde, Silverwater, Castle Hill, Chatswood, and Hornsby. Many of our overseas students pass on their very first attempt.',
  },
];

const faqs = [
  {
    q: 'Can I drive in NSW with my overseas licence?',
    a: 'Yes — for up to 3 months from your arrival date. After that you must obtain an NSW licence. If you hold a permanent visa or become an Australian resident, the 3-month rule applies from the date you became a resident.',
  },
  {
    q: 'Do I need to take a driving test if I have an overseas licence?',
    a: 'It depends on your country of origin. Some countries have reciprocal agreements with NSW (e.g. UK, USA, Canada, NZ, some European countries) which may exempt you from certain tests. Contact us and we can help you figure out what applies to your situation.',
  },
  {
    q: 'Do I need to start from scratch?',
    a: "Not always. We'll assess your current driving level in the first lesson and tailor the programme from there. If you already have solid experience, we'll focus on what's different about Australian roads and test requirements.",
  },
  {
    q: 'Do you have a female instructor?',
    a: 'Yes. Sidra is our senior female instructor and is available across all 27 suburbs we cover. Many of our international students specifically request Sidra for her patient, structured approach.',
  },
  {
    q: 'Which suburbs do you cover?',
    a: 'We cover 27 suburbs including North Ryde, Eastwood, Epping, Carlingford, Castle Hill, Chatswood, Ryde, West Ryde, Macquarie Park, Silverwater and more. Pick-up and drop-off is always free.',
  },
];

const reviews = [
  {
    text: 'I am an international driver and failed my first attempt. Then I met Mick. He taught me the tips I needed, I gained confidence and passed on my next attempt.',
    name: 'Brian Joe Adriano',
    suburb: 'Carlingford NSW',
  },
  {
    text: 'Mick is an excellent instructor and teaches the rules and tricks in an easy to understand manner. With his support I was able to get my full licence today.',
    name: 'Brian Joe A.',
    suburb: 'North Ryde NSW',
  },
  {
    text: 'Sidra is a fantastic instructor — calm, patient and incredibly knowledgeable. I was nervous every lesson but she always put me at ease. Passed first attempt.',
    name: 'Priya M.',
    suburb: 'Eastwood NSW',
  },
];

export default function OverseasLicencePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] pt-16 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label font-outfit inline-block mb-4">OVERSEAS LICENCE CONVERSION</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5">
            Driving in Australia with an{' '}
            <span style={{ color: '#F5C132' }}>overseas licence?</span>
          </h1>
          <p className="font-outfit text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We help international drivers understand NSW road rules, convert their overseas licence, and pass their driving test — with patient, experienced instruction in North Ryde since 1997.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/book"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors text-center"
              style={{ background: '#F5C132', color: '#0B1628' }}
            >
              Book a Lesson →
            </Link>
            <a
              href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20help%20with%20my%20overseas%20licence%20conversion"
              target="_blank"
              rel="noopener noreferrer"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {['Est. 1997', 'Automatic Cars Only', 'Free Pick-up & Drop-off', '24 Suburbs Covered'].map((badge) => (
              <span
                key={badge}
                className="font-outfit text-xs px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(245,193,50,0.1)', color: '#F5C132', border: '1px solid rgba(245,193,50,0.2)' }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">THE PROCESS</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-12">
            How overseas licence conversion works in NSW
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl p-7 flex gap-5"
                style={{ background: '#F7F9FF', border: '1px solid #E8EEF8' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-syne font-bold text-[#0B1628] text-base"
                  style={{ background: '#F5C132' }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0B1628] mb-2">{step.title}</h3>
                  <p className="font-outfit text-[#6B7FA8] text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY L PLUS P ───────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-[72px] px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="section-label font-outfit">WHY CHOOSE US</span>
            <h2 className="font-heading font-extrabold text-4xl text-white mt-1 mb-6">
              Why overseas drivers choose L Plus P
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                'Mick (Head Instructor, 27+ years experience) and Sidra (Senior Instructor) are both experienced with international drivers and know exactly where to focus.',
                'Patient, structured lessons tailored to overseas drivers — we know the difference between driving overseas and passing an Australian test.',
                'Free pick-up and drop-off across 27 suburbs — no need to find your own way to a lesson.',
                'We know every local test route at Ryde, Silverwater, Castle Hill, Chatswood, Hornsby, Blacktown and Bankstown.',
                'Available 7 days. Female instructor available on request.',
              ].map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(245,193,50,0.15)' }}>
                    <span style={{ color: '#F5C132', fontSize: 10 }}>✓</span>
                  </span>
                  <p className="font-outfit text-white/65 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Instructor cards */}
          <div className="flex flex-col gap-4">
            {[
              { initial: 'M', name: 'Mick', role: 'Head Instructor', note: '27+ years · Available 7 days' },
              { initial: 'S', name: 'Sidra', role: 'Senior Instructor', note: 'Female instructor · All suburbs' },
            ].map((inst) => (
              <div
                key={inst.name}
                className="rounded-2xl p-5 flex items-center gap-4"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-syne font-bold text-[#0B1628] text-xl"
                  style={{ background: '#F5C132' }}
                >
                  {inst.initial}
                </div>
                <div>
                  <p className="font-heading font-bold text-white">{inst.name}</p>
                  <p className="font-outfit text-white/45 text-sm">{inst.role}</p>
                  <p className="font-outfit text-white/30 text-xs mt-0.5">{inst.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MACQUARIE UNI CALLOUT ───────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            style={{ background: 'rgba(245,193,50,0.08)', border: '2px solid rgba(245,193,50,0.25)' }}
          >
            <div className="text-4xl flex-shrink-0">🎓</div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-2xl text-[#0B1628] mb-2">
                Studying at Macquarie University?
              </h3>
              <p className="font-outfit text-[#3a4a6a] text-base leading-relaxed mb-4">
                We pick up directly from the Macquarie University campus and Student Village in North Ryde. Join hundreds of international students who got their NSW licence with us.
              </p>
              <Link
                href="/book"
                className="self-start font-outfit font-bold text-sm px-6 py-3 rounded-xl transition-colors inline-block"
                style={{ background: '#F5C132', color: '#0B1628' }}
              >
                Book a lesson →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">SIMPLE PRICING</span>
          <h2 className="font-heading font-extrabold text-4xl text-white mt-1 mb-10">
            Honest, upfront rates
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Casual Lesson', price: 'from $60', note: 'Per hour' },
              { label: '5-Hour Pack', price: '$275', note: 'Save $25' },
              { label: '10-Hour Pack', price: '$550', note: 'Save $50 + 30 logbook hrs' },
              { label: 'Mock Test', price: 'from $65', note: 'On real test routes' },
            ].map((pkg) => (
              <div
                key={pkg.label}
                className="rounded-2xl p-5 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="font-outfit text-white/50 text-xs mb-2">{pkg.label}</p>
                <p className="font-syne font-bold text-2xl" style={{ color: '#F5C132' }}>{pkg.price}</p>
                <p className="font-outfit text-white/35 text-xs mt-1">{pkg.note}</p>
              </div>
            ))}
          </div>
          <p className="font-outfit text-white/35 text-sm text-center">
            All prices include free pick-up and drop-off. ·{' '}
            <Link href="/#pricing" className="underline hover:text-white/60 transition-colors">
              See full pricing
            </Link>
          </p>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label font-outfit">STUDENT REVIEWS</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-10">
            What our international students say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl p-6"
                style={{ background: '#F7F9FF', border: '1px solid #E8EEF8' }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#F5C132', fontSize: 14 }}>★</span>
                  ))}
                </div>
                <div className="font-syne text-5xl leading-none select-none mb-1" style={{ color: 'rgba(245,193,50,0.15)' }}>&ldquo;</div>
                <p className="font-outfit text-sm text-[#3a4a6a] leading-relaxed italic mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="font-outfit font-bold text-sm text-[#0B1628]">{r.name}</p>
                <p className="font-mono text-xs text-[#6B7FA8] mt-0.5">{r.suburb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F9FF] py-[72px] px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label font-outfit">COMMON QUESTIONS</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-10">
            Frequently asked questions
          </h2>
          <div className="flex flex-col divide-y divide-[#E8EEF8]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="font-heading font-bold text-base text-[#0B1628] cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-transform group-open:rotate-45" style={{ background: '#F5C132', color: '#0B1628', fontSize: 16, fontWeight: 700 }}>+</span>
                </summary>
                <p className="font-outfit text-[#6B7FA8] text-sm leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#0B1628] py-[72px] px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-4xl text-white mb-3">
            Ready to get your NSW licence?
          </h2>
          <p className="font-outfit text-white/50 text-base mb-8">
            Call Mick on 0469 370 978 or book online — we confirm within 1 hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              style={{ background: '#F5C132', color: '#0B1628' }}
            >
              Book Now →
            </Link>
            <a
              href="tel:0469370978"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Call Mick
            </a>
            <a
              href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20help%20with%20my%20overseas%20licence%20conversion"
              target="_blank"
              rel="noopener noreferrer"
              className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
              style={{ background: '#25D366', color: '#ffffff' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
