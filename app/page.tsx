import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSlideshow from '@/components/HeroSlideshow';
import StatsBar from '@/components/StatsBar';
import FAQSection from '@/components/FAQSection';
import ReviewsCarousel from '@/components/ReviewsCarousel';

export const metadata: Metadata = {
  title: 'L Plus P Driving School | Driving Lessons Sydney | Est. 1997',
  description:
    "Sydney's most trusted driving school since 1997. Expert driving lessons in North Ryde, Ryde, Epping, Carlingford, Castle Hill and 20+ suburbs. Late-model automatic cars, 3-for-1 logbook hours. Call Mick 0469 370 978.",
};

/* ── FAQ data ─────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: 'How many lessons do I need?',
    answer:
      'It depends on your experience and how quickly you progress. Complete beginners typically need 10–20 hours. Those with some supervised driving experience usually need 5–10 hours. We assess your ability in the first lesson and recommend the right package.',
  },
  {
    question: 'Do you cover my suburb?',
    answer:
      'We cover 24 suburbs across North Sydney and Ryde including North Ryde, Ryde, Epping, Carlingford, Castle Hill, Chatswood and many more. Contact us to confirm your suburb.',
  },
  {
    question: 'What is the 3-for-1 logbook scheme?',
    answer:
      'For learner drivers under 25, every 1 hour of professional instruction counts as 3 logbook hours. A 10-hour package counts as 30 logbook hours toward your 120-hour requirement — saving you months of supervised driving.',
  },
  {
    question: 'Can I use your car for the driving test?',
    answer:
      'Yes. We provide our late-model automatic car and pick you up from your preferred location. We know all local test routes at Ryde, Silverwater, Castle Hill, Hornsby and Chatswood.',
  },
  {
    question: 'Do you offer overseas licence conversion?',
    answer:
      'Yes. We tailor lessons to help you understand Australian road rules, gain confidence on local roads, and pass the practical test first time.',
  },
  {
    question: 'How do I book?',
    answer:
      'Book online, WhatsApp us, or call Mick on 0469 370 978 or Sidra on 0451 331 140. We confirm your lesson within 1 hour.',
  },
];

/* ── Services data ────────────────────────────────────────────────────── */
const services = [
  {
    serviceId: 'learner',
    title: 'Learner Driver Lessons',
    desc: 'Patient, structured lessons in a late-model automatic car. We cover every skill from basics to advanced manoeuvres.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    isNew: false,
  },
  {
    serviceId: 'test-prep',
    title: 'Driving Test Preparation',
    desc: 'Targeted mock tests on real test routes at Ryde, Silverwater, Castle Hill, Chatswood, and Hornsby.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    isNew: false,
  },
  {
    serviceId: 'overseas',
    title: 'Overseas Licence Conversion',
    desc: 'Holding a foreign licence? We help you understand Australian road rules and pass the local practical test.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    isNew: false,
  },
  {
    serviceId: 'female-instructor',
    title: 'Prefer a Female Instructor?',
    desc: 'Our instructor Sidra provides a comfortable, supportive learning environment for all students who prefer a female instructor.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    isNew: false,
  },
  {
    serviceId: 'logbook',
    title: 'Logbook Hour Assistance',
    desc: '3-for-1 scheme for learners under 25. Every 1 hour with us counts as 3 logbook hours — get to 120 hours faster.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    isNew: false,
  },
  {
    serviceId: 'intensive',
    title: 'Intensive Driving Course',
    desc: 'Need your licence fast? Our intensive courses compress weeks of practice into a short, focused programme.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    isNew: false,
  },
  {
    serviceId: 'ev',
    title: 'EV Familiarisation Course',
    desc: 'Just bought an electric vehicle? Learn regenerative braking, one-pedal driving, charging and EV-specific road techniques.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 17l2-5h14l2 5M5 12V7a1 1 0 011-1h12a1 1 0 011 1v5M12 6V4m-2 8h4" />
      </svg>
    ),
    isNew: true,
  },
  {
    serviceId: 'senior',
    title: 'Senior Driver Refresher',
    desc: 'Regain confidence after a break from driving. Our patient instructors adapt to your pace and needs.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    isNew: false,
  },
  {
    serviceId: 'pplate',
    title: 'P-Plate Confidence Course',
    desc: 'Just got your P-plates? Build real-world confidence with motorway driving, night driving, and tricky situations.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    isNew: false,
  },
];

/* ── Lifestyle cards ──────────────────────────────────────────────────── */
const lifestyle = [
  {
    caption: 'The first solo drive',
    src: '/More Photos/1.jpg',
    alt: 'First solo drive — a milestone moment',
  },
  {
    caption: 'The road trip with mates',
    src: '/More Photos/2.jpg',
    alt: 'Road trip freedom with friends',
  },
  {
    caption: 'The job that needs a licence',
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600',
    alt: 'Career opportunities unlocked by a licence',
  },
  {
    caption: 'The freedom of your own car',
    src: '/More Photos/4.jpg',
    alt: 'The freedom of owning your own car',
  },
];

/* ════════════════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero-texture bg-[#0B1628] min-h-[calc(100vh-68px)] flex items-center py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left column */}
            <div className="flex flex-col gap-6">
              {/* Badge */}
              <div className="hero-tag">
                <span className="inline-flex items-center gap-2 bg-[#F5C132]/12 border border-[#F5C132]/30 rounded-full px-3.5 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5C132] flex-shrink-0" />
                  <span className="font-outfit font-semibold text-[#F5C132] text-xs uppercase tracking-widest">
                    Est. 1997 — Sydney&apos;s Most Trusted
                  </span>
                </span>
              </div>

              {/* Headline */}
              <h1
                className="hero-headline font-syne font-extrabold text-white leading-[1.05]"
                style={{ fontSize: 'clamp(48px, 7vw, 84px)' }}
              >
                Learn.
                <br />
                Practice.
                <br />
                <span className="hero-gold">Pass.</span>
              </h1>

              {/* Subheadline */}
              <p className="hero-subtext font-outfit text-white/65 text-base leading-relaxed max-w-md">
                North Ryde&apos;s driving school since 1997. Automatic cars, free pick-up and drop-off across 24 Sydney suburbs.
              </p>

              {/* Gold rule */}
              <hr
                className="hero-rule border-0 self-start"
                style={{ height: '1px', width: '200px', background: 'rgba(245,193,50,0.4)' }}
              />

              {/* Stars */}
              <div className="hero-rating flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F5C132]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-outfit text-white/70 text-sm">4.8 · 80+ Google Reviews</span>
              </div>

              {/* CTAs */}
              <div className="hero-buttons flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="bg-[#F5C132] text-[#0B1628] font-outfit font-bold px-7 py-3 rounded-xl hover:bg-[#E8A800] transition-colors text-center"
                >
                  Book a Lesson →
                </Link>
                <Link
                  href="#pricing"
                  className="border-2 border-white/30 text-white font-outfit font-semibold px-7 py-3 rounded-xl hover:border-white/60 transition-colors text-center"
                >
                  View Packages
                </Link>
              </div>
            </div>

            {/* Right column — slideshow */}
            <div className="w-full">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
      <section
        className="py-5"
        style={{
          background: '#0F1E35',
          borderTop: '1px solid rgba(245,193,50,0.15)',
          borderBottom: '1px solid rgba(245,193,50,0.08)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: (
                  <svg className="w-[18px] h-[18px] text-[#F5C132]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: '20+ Years',
                sub: 'Experience since 1997',
              },
              {
                icon: (
                  <svg className="w-[18px] h-[18px] text-[#F5C132]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 6H5l-1.5 6h15L17 6h-4zM3 11h18" />
                  </svg>
                ),
                title: 'Automatic Cars Only',
                sub: 'Modern, safe vehicles',
              },
              {
                icon: (
                  <svg className="w-[18px] h-[18px] text-[#F5C132]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Free Pick-up & Drop-off',
                sub: 'We come to you',
              },
              {
                icon: (
                  <svg className="w-[18px] h-[18px] text-[#F5C132]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: '3-for-1 Logbook Hours',
                sub: 'For learners under 25',
              },
            ].map((item, i, arr) => (
              <div
                key={i}
                className={`flex items-center gap-3 py-2 ${
                  i < arr.length - 1
                    ? 'md:border-r md:border-white/8 md:pr-4'
                    : ''
                }`}
              >
                <div className="w-9 h-9 flex-shrink-0 bg-[#F5C132]/10 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <span className="font-syne font-bold text-white text-sm block">{item.title}</span>
                  <span className="font-outfit text-white/45 text-xs">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MQ CALLOUT ────────────────────────────────────────────────── */}
      <div className="bg-[#0B1628] px-6 pb-6">
        <div
          className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-3.5 rounded-xl"
          style={{ borderLeft: '3px solid #C9A84C', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderLeftColor: '#C9A84C', borderLeftWidth: 3 }}
        >
          <span className="text-base flex-shrink-0" aria-hidden="true">🎓</span>
          <p className="font-outfit text-sm text-white/60 leading-snug flex-1">
            Studying at Macquarie University? We pick up directly from campus in North Ryde.
          </p>
          <Link
            href="/book"
            className="font-outfit font-semibold text-xs whitespace-nowrap transition-colors flex-shrink-0"
            style={{ color: '#C9A84C' }}
          >
            Book a lesson →
          </Link>
        </div>
      </div>

      {/* ── STATS BAR ─────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label-blue font-outfit">GETTING STARTED</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-3">
            Getting your licence has never been easier
          </h2>
          <p className="font-outfit text-[#6B7FA8] text-base max-w-lg mb-12">
            Three simple steps from zero to licence — we handle the rest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Book your way',
                desc: "Fill in our online form or send a WhatsApp message. We confirm your lesson within 1 hour.",
              },
              {
                num: '02',
                title: 'We come to you',
                desc: "Your instructor picks you up from home, school or work. No need to travel anywhere.",
              },
              {
                num: '03',
                title: 'Pass with confidence',
                desc: "We know every test route at Ryde, Silverwater, Castle Hill, Chatswood and Hornsby.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-[#F7F9FF] rounded-2xl p-8">
                <div className="font-syne font-extrabold text-6xl text-[#F5C132] leading-none mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0B1628] mb-2">{step.title}</h3>
                <p className="font-outfit text-[#6B7FA8] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section id="services" className="bg-[#F7F9FF] py-[72px] px-6">
        <div className="max-w-6xl mx-auto">
          <span className="section-label-blue font-outfit">WHAT WE OFFER</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-12">
            Every lesson type you need
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="service-card bg-white border border-[#E8EEF8] rounded-2xl p-6 group relative flex flex-col h-full"
              >
                {/* Icon square */}
                <div className="w-11 h-11 bg-[#EBF3FF] rounded-xl flex items-center justify-center mb-4 text-[#1A56DB]">
                  {svc.icon}
                </div>

                {/* NEW badge */}
                {svc.isNew && (
                  <span className="inline-block bg-[#F5C132] text-[#0B1628] text-[10px] font-outfit font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-2">
                    New
                  </span>
                )}

                <h3 className="font-heading font-bold text-lg text-[#0B1628] mb-2">{svc.title}</h3>
                <p className="font-outfit text-[#6B7FA8] text-sm leading-relaxed mb-4 flex-1">{svc.desc}</p>

                <Link
                  href={`/book?service=${svc.serviceId}`}
                  className="mt-auto self-start bg-[#F5C132] text-[#0B1628] font-outfit font-semibold text-sm px-5 py-2.5 rounded-2xl hover:bg-[#E8A800] transition-colors"
                >
                  Book Now
                </Link>

                {/* Bottom gold line */}
                <span className="service-card-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFESTYLE CARDS ───────────────────────────────────────────── */}
      <section style={{ background: '#0d1b2e', padding: '48px 24px' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — 2×2 photo grid */}
          <div className="grid grid-cols-2" style={{ gap: '10px' }}>
            {lifestyle.map((card) => (
              <div
                key={card.caption}
                className="relative overflow-hidden cursor-pointer group"
                style={{ borderRadius: '10px', aspectRatio: '4/3' }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="h-[2px] mb-2" style={{ width: '22px', background: '#f5c842' }} />
                  <p className="font-heading font-bold text-sm text-white leading-snug">{card.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Motive panel */}
          <div className="flex flex-col gap-5">
            {/* Pill tag */}
            <span
              className="self-start font-outfit font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ color: '#f5c842', border: '1px solid rgba(245,200,66,0.25)', background: 'rgba(245,200,66,0.06)' }}
            >
              Our Motive
            </span>

            {/* Headline */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              More than just a{' '}
              <span style={{ color: '#f5c842' }}>driving lesson.</span>
            </h2>

            {/* Gold divider */}
            <div style={{ width: '36px', height: '2px', background: '#f5c842' }} />

            {/* Body */}
            <p className="font-outfit text-white/60 text-base leading-relaxed">
              We don&apos;t just teach people to pass a test — we build drivers who are ready for the road ahead. Every lesson is designed to develop real confidence, sharper instincts, and the judgement to handle whatever comes next.
            </p>

            {/* Rating row */}
            <div className="flex items-center gap-2">
              <span style={{ color: '#f5c842', fontSize: '16px' }}>★★★★★</span>
              <span className="font-outfit text-white/50 text-sm">4.8 · Based on 80+ Google Reviews</span>
            </div>

            {/* CTA */}
            <Link
              href="/book"
              className="self-start font-outfit font-bold text-sm px-6 py-3 rounded-xl transition-colors"
              style={{ background: '#f5c842', color: '#0d1b2e' }}
            >
              Book a lesson →
            </Link>
          </div>

        </div>
      </section>

      {/* ── TEST PREP CALLOUT ─────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-5xl mx-auto">
          <span className="section-label-blue font-outfit">TEST PREPARATION</span>
          <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1 mb-4">
            Failed your test? You&apos;re not alone — and you&apos;re not done.
          </h2>
          <p className="font-outfit text-[#6B7FA8] text-base leading-relaxed max-w-2xl mb-8">
            Many of our students come to us after failing with another school. In most cases, 2–3 focused lessons on the actual test routes is all it takes. We know exactly what Service NSW assessors look for at Ryde, Silverwater, Castle Hill, Chatswood, and Hornsby.
          </p>
          <blockquote
            className="font-outfit text-sm leading-relaxed italic px-6 py-5 rounded-2xl mb-8 max-w-2xl"
            style={{ borderLeft: '3px solid #C9A84C', background: '#F7F9FF', color: '#3a4a6a' }}
          >
            &ldquo;After failing twice elsewhere, I came to L Plus P and passed first try. Mick identified exactly what I was doing wrong and fixed it in 3 lessons.&rdquo;
            <span className="block font-bold not-italic mt-3 text-[#0B1628]">— Tom W., Castle Hill</span>
          </blockquote>
          <Link
            href="/book?service=test-prep"
            className="font-outfit font-bold text-sm px-7 py-3.5 rounded-xl transition-colors inline-block"
            style={{ background: '#0B1628', color: '#F5C132' }}
          >
            Book a mock test — from $65 →
          </Link>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section id="pricing" className="bg-[#0B1628] py-[72px] px-6">
        <div className="max-w-6xl mx-auto">
          <span className="section-label font-outfit">TRANSPARENT PRICING</span>
          <h2 className="font-heading font-extrabold text-4xl text-white mt-1 mb-2">
            Simple, honest pricing
          </h2>
          <p className="font-outfit text-white/50 text-base">
            No hidden fees. Packages confirmed when we contact you.
          </p>

          {/* Group 1: Casual */}
          <div className="mt-10 mb-4">
            <p className="font-outfit font-bold text-xs uppercase tracking-widest text-white/40">
              Casual Lessons — Pay as you go
            </p>
            <p className="font-outfit text-white/25 text-xs mt-1">
              Prices shown are starting rates — confirmed when we contact you based on your suburb.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { price: '$60', duration: '1 hour', features: ['Suitable for beginners', 'Free pick-up & drop-off', 'Any suburb we cover'] },
              { price: '$85', duration: '1.5 hours', features: ['More time on road', 'Great for practice runs', 'Focus on weak areas'] },
              { price: '$110', duration: '2 hours', features: ['Deep skill building', 'Long-route experience', 'Best for test prep'] },
            ].map((pkg) => (
              <div key={pkg.duration} className="bg-[#162440] border border-white/7 rounded-2xl p-6">
                <p className="font-outfit text-white/35 text-xs mb-1">from</p>
                <p className="font-mono font-medium text-[#F5C132] text-4xl leading-none">{pkg.price}</p>
                <h3 className="font-heading font-bold text-white text-base mt-3 mb-3">{pkg.duration}</h3>
                <ul className="flex flex-col gap-1.5 mb-5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-outfit text-white/60 text-xs">
                      <span className="text-[#F5C132] mt-0.5">›</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="block w-full bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-sm py-2.5 rounded-lg text-center hover:bg-[#E8A800] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          {/* Group 2: Packages */}
          <p className="font-outfit font-bold text-xs uppercase tracking-widest text-white/40 mt-10 mb-4">
            Packages — Better Value
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="bg-[#162440] border border-white/7 rounded-2xl p-6">
              <p className="font-outfit text-white/35 text-xs mb-1">save more with</p>
              <p className="font-mono font-medium text-[#F5C132] text-4xl leading-none">$275</p>
              <h3 className="font-heading font-bold text-white text-base mt-3 mb-3">5 hours</h3>
              <ul className="flex flex-col gap-1.5 mb-5">
                {['All suburbs covered', '3-for-1 logbook eligible', 'Flexible scheduling'].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-outfit text-white/60 text-xs">
                    <span className="text-[#F5C132] mt-0.5">›</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block w-full bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-sm py-2.5 rounded-lg text-center hover:bg-[#E8A800] transition-colors"
              >
                Book Package
              </Link>
            </div>

            <div className="pricing-featured rounded-2xl p-6 relative scale-[1.02]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                Most Popular
              </span>
              <p className="font-outfit text-white/35 text-xs mb-1">best value</p>
              <p className="font-mono font-medium text-[#F5C132] text-4xl leading-none">$550</p>
              <h3 className="font-heading font-bold text-white text-base mt-3 mb-3">10 hours</h3>
              <ul className="flex flex-col gap-1.5 mb-5">
                {['30 logbook hours (3-for-1)', 'All suburbs covered', 'Priority scheduling'].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-outfit text-white/60 text-xs">
                    <span className="text-[#F5C132] mt-0.5">›</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block w-full bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-sm py-2.5 rounded-lg text-center hover:bg-[#E8A800] transition-colors"
              >
                Book Package
              </Link>
            </div>
          </div>

          {/* Group 3: Test Prep */}
          <div className="mt-10 mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="font-outfit font-bold text-xs uppercase tracking-widest text-white/40">
              Test Preparation
            </p>
            <span
              className="font-outfit text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide w-fit"
              style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              Most popular for students who&apos;ve failed before
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#162440] border border-white/7 rounded-2xl p-6">
              <p className="font-outfit text-white/35 text-xs mb-1">from</p>
              <p className="font-mono font-medium text-[#F5C132] text-4xl leading-none">$65</p>
              <h3 className="font-heading font-bold text-white text-base mt-3 mb-1">Mock Test</h3>
              <p className="font-outfit text-white/35 text-[10px] mb-3">Book after a failed test</p>
              <ul className="flex flex-col gap-1.5 mb-5">
                {['Full test simulation', 'Detailed feedback', "Routes you'll actually drive"].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-outfit text-white/60 text-xs">
                    <span className="text-[#F5C132] mt-0.5">›</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book?service=test-prep"
                className="block w-full bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-sm py-2.5 rounded-lg text-center hover:bg-[#E8A800] transition-colors"
              >
                Book Now
              </Link>
            </div>

            <div className="pricing-featured rounded-2xl p-6 relative scale-[1.02]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                Most Popular
              </span>
              <p className="font-outfit text-white/35 text-xs mb-1">complete package</p>
              <p className="font-mono font-medium text-[#F5C132] text-4xl leading-none">$170</p>
              <h3 className="font-heading font-bold text-white text-base mt-3 mb-3">Test Day Package</h3>
              <ul className="flex flex-col gap-1.5 mb-5">
                {['1 hr prep lesson', 'Car for the test', 'Pick-up & drop-off included'].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-outfit text-white/60 text-xs">
                    <span className="text-[#F5C132] mt-0.5">›</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book?service=test-prep"
                className="block w-full bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-sm py-2.5 rounded-lg text-center hover:bg-[#E8A800] transition-colors"
              >
                Book Now
              </Link>
            </div>

            <div className="bg-[#162440] border border-white/7 rounded-2xl p-6">
              <p className="font-outfit text-white/35 text-xs mb-1">best value</p>
              <p className="font-mono font-medium text-[#F5C132] text-4xl leading-none">$500</p>
              <h3 className="font-heading font-bold text-white text-base mt-3 mb-3">6 Hours + Test Day</h3>
              <ul className="flex flex-col gap-1.5 mb-5">
                {['6 hrs lessons', 'Mock test included', 'Car for the real test'].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-outfit text-white/60 text-xs">
                    <span className="text-[#F5C132] mt-0.5">›</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book?service=test-prep"
                className="block w-full bg-[#F5C132] text-[#0B1628] font-outfit font-bold text-sm py-2.5 rounded-lg text-center hover:bg-[#E8A800] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Custom pricing callout */}
          <div className="mt-8 p-5 bg-white/5 rounded-xl border-l-4 border-[#F5C132]">
            <p className="font-outfit text-white/60 text-sm">
              <span className="text-white font-semibold">Need something different?</span> Pricing is flexible for block bookings, school groups, or special circumstances.{' '}
              <a href="tel:0469370978" className="text-[#F5C132] hover:text-[#E8A800] underline underline-offset-2 transition-colors">
                Call Mick on 0469 370 978
              </a>{' '}
              to discuss a custom package.
            </p>
          </div>

          {/* Disclaimer */}
          <p className="font-outfit text-xs text-white/25 mt-8 border-t border-white/5 pt-6">
            All prices are starting rates and subject to confirmation based on location and scheduling. Prices are per lesson in a late-model automatic vehicle with a fully qualified instructor. 3-for-1 logbook scheme applies to learner drivers under 25 years of age.
          </p>
        </div>
      </section>

      {/* ── REFERRAL CALLOUT ──────────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ background: '#0B1628', borderTop: '4px solid #C9A84C' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-center sm:text-left">
          <div>
            <span className="font-outfit text-xs font-bold uppercase tracking-widest" style={{ color: '#C9A84C' }}>
              REFER A FRIEND
            </span>
            <h2 className="font-heading font-extrabold text-2xl text-white mt-1 mb-1">
              Know someone learning to drive?
            </h2>
            <p className="font-outfit text-white/50 text-sm leading-relaxed max-w-lg">
              When someone you refer books their first lesson, you both get 10% off. No limits — refer as many people as you like.
            </p>
          </div>
          <Link
            href="/faq"
            className="flex-shrink-0 font-outfit font-bold text-sm px-6 py-3 rounded-xl transition-colors self-center whitespace-nowrap"
            style={{ background: '#C9A84C', color: '#0B1628' }}
          >
            Ask us how →
          </Link>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────── */}
      <ReviewsCarousel />

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-[72px] px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label-blue font-outfit inline-block">COMMON QUESTIONS</span>
            <h2 className="font-heading font-extrabold text-4xl text-[#0B1628] mt-1">
              Frequently asked questions
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section
        className="cta-texture py-[72px] px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #F5C132 0%, #E8A800 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-[42px] text-[#0B1628] mb-3 leading-tight">
            Ready to get your licence?
          </h2>
          <p className="font-outfit text-[#0B1628]/65 text-base mb-8">
            Join hundreds of students who passed first time with L Plus P.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#0B1628] text-white font-outfit font-bold text-base px-9 py-4 rounded-xl hover:bg-[#162440] transition-colors"
          >
            Book First Lesson →
          </Link>
        </div>
      </section>
    </>
  );
}
