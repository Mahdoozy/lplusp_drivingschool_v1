import type { Metadata } from 'next';
import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import ImageSlideshow from '@/components/ImageSlideshow';

export const metadata: Metadata = {
  title: 'L Plus P Driving School | Driving Lessons Sydney | Est. 1997',
  description:
    "Sydney's most trusted driving school since 1997. Expert driving lessons in North Ryde, Ryde, Epping, Carlingford, Castle Hill and 20+ suburbs. Late-model automatic cars, 3-for-1 logbook hours. Call Mick 0469 370 978.",
};

const homepageFAQ = [
  {
    question: 'How many lessons do I need?',
    answer:
      'It depends on your experience and how quickly you progress. Complete beginners typically need 10–20 hours. Those with some supervised driving experience usually need 5–10 hours. We assess your ability in the first lesson and recommend the right package.',
  },
  {
    question: 'Do you cover my suburb?',
    answer:
      'We cover 24 suburbs across North Sydney and Ryde including North Ryde, Ryde, Epping, Carlingford, Castle Hill, Chatswood and many more. Contact us to confirm.',
  },
  {
    question: 'What is the 3-for-1 logbook scheme?',
    answer:
      'For learner drivers under 25, every 1 hour of professional instruction counts as 3 logbook hours. A 10-hour package counts as 30 logbook hours toward your 120-hour requirement.',
  },
  {
    question: 'Can I use your car for the driving test?',
    answer:
      'Yes. We provide our late-model automatic car and pick you up from your preferred location. We know all local test routes at Ryde, Silverwater, Castle Hill, Hornsby and Chatswood.',
  },
  {
    question: 'Do you offer overseas licence conversion?',
    answer:
      'Yes. We tailor lessons to help you understand Australian road rules and pass the practical test with confidence.',
  },
  {
    question: 'How do I book?',
    answer:
      'Book online, WhatsApp us, or call Mick on 0469 370 978 or Sidra on 0451 331 140. We confirm within 1 hour.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-texture py-20 sm:py-28" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex flex-col gap-7 lg:w-1/2">
              {/* Tag */}
              <div className="hero-tag">
                <span className="section-label">Est. 1997 &middot; Sydney, NSW</span>
              </div>

              {/* Headline */}
              <h1
                className="hero-headline font-serif font-black text-[#f0f2f8] leading-[1.05]"
                style={{ fontSize: 'clamp(48px, 7vw, 84px)' }}
              >
                Learn. Practice.
                <span className="hero-gold">Pass.</span>
              </h1>

              {/* Tagline */}
              <p className="hero-subtext font-sans text-[#8899bb] text-lg sm:text-xl leading-relaxed">
                Sydney&apos;s most trusted driving school — Est. 1997 &middot; North Ryde &amp; surrounding areas
              </p>

              {/* Gold rule */}
              <hr
                className="hero-rule border-0 h-px w-2/5 self-start"
                style={{ background: 'rgba(245, 200, 66, 0.35)' }}
              />

              {/* Star rating */}
              <div className="hero-rating flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#F5C842]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-sans font-semibold text-[#f0f2f8] text-sm">5.0</span>
                <span className="font-sans text-[#4a5a7a] text-sm">· 80+ Google reviews</span>
              </div>

              {/* CTAs */}
              <div className="hero-buttons flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="font-serif font-bold text-[#0a0f1e] px-8 py-3.5 rounded text-base text-center hover:bg-[#d4a91a] hover:scale-[1.02] transition-all duration-200 inline-flex items-center justify-center gap-2"
                  style={{ background: 'var(--gold)' }}
                >
                  Book a Lesson →
                </Link>
                <Link
                  href="/#pricing"
                  className="font-sans font-semibold text-[#F5C842] px-8 py-3.5 rounded text-base text-center hover:bg-[#F5C842] hover:text-[#0a0f1e] transition-all duration-200"
                  style={{ border: '1.5px solid #F5C842' }}
                >
                  View Packages
                </Link>
              </div>
            </div>

            {/* Image slideshow */}
            <div className="lg:w-1/2 w-full">
              <ImageSlideshow />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <Services />
      <Pricing />

      {/* Flexible pricing note */}
      <section className="pb-12 -mt-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pl-4 py-2" style={{ borderLeft: '3px solid var(--gold)' }}>
            <p className="font-sans text-[#8899bb] text-sm">
              <span className="text-[#f0f2f8] font-semibold">Need a custom package?</span> Pricing is flexible for block bookings, school groups, or special circumstances.{' '}
              <a href="tel:0469370978" className="text-[#F5C842] hover:text-[#d4a91a] underline underline-offset-2 font-semibold transition-colors">Call Mick on 0469 370 978</a> to discuss.
            </p>
          </div>
        </div>
      </section>

      <Reviews />
      <About />
      <FAQ items={homepageFAQ} />
      <CTABanner />
    </>
  );
}
