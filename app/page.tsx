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
    "Sydney's most trusted driving school since 1997. Expert driving lessons in North Ryde, Ryde, Epping, Carlingford, Castle Hill and 20+ suburbs. Automatic dual-control cars, 3-for-1 logbook hours. Call Mick 0469 370 978.",
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
      'Yes. We provide a modern automatic dual-control vehicle and pick you up from your preferred location. We know all local test routes at Ryde, Silverwater, Castle Hill, Hornsby and Chatswood.',
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
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Text */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
                Learn. Practice.{' '}
                <span className="block text-[#FFD700]">Pass.</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl">
                Sydney&apos;s most trusted driving school — Est. 1997 &middot; North Ryde &amp; Surrounding Areas
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold">5.0</span>
                <span className="text-gray-400 text-sm">(80+ reviews)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="bg-[#FFD700] text-[#0f1623] font-bold px-6 py-3 rounded-lg text-center hover:bg-yellow-300 transition-colors"
                >
                  Book a Lesson
                </Link>
                <Link
                  href="/#pricing"
                  className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white hover:text-[#0f1623] transition-colors"
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
      <Reviews />
      <About />
      <FAQ items={homepageFAQ} />
      <CTABanner />
    </>
  );
}
