import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { suburbs, getSuburbBySlug } from '@/lib/suburbs';
import TrustStrip from '@/components/TrustStrip';
import Pricing from '@/components/Pricing';
import CTABanner from '@/components/CTABanner';

type Props = {
  params: Promise<{ suburb: string }>;
};

export async function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) return {};

  return {
    title: `Driving Lessons in ${suburb.name} | L Plus P Driving School`,
    description: `Expert driving lessons in ${suburb.name}, Sydney. Local instructors who know every ${suburb.name} test route. Free pick-up, 3-for-1 logbook hours, dual control cars. Book with L Plus P today.`,
  };
}

const reviewPairs: { text: string; author: string }[] = [
  {
    text: 'Mick is an excellent instructor and teaches the rules and tricks in an easy to understand manner. With his support I was able to get my full licence today.',
    author: 'Brian Joe A.',
  },
  {
    text: 'Best driving school in Sydney. Sidra made me feel confident behind the wheel and the 3-for-1 logbook hours saved me so much time.',
    author: 'James W.',
  },
];

export default async function SuburbPage({ params }: Props) {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);

  if (!suburb) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Driving Lessons in{' '}
              <span className="text-[#FFD700]">{suburb.name}</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl">
              Expert local instruction — we know every {suburb.name} test route
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="bg-[#FFD700] text-[#0f1623] font-bold px-6 py-3 rounded-lg text-center hover:bg-yellow-300 transition-colors"
              >
                Book a Lesson
              </Link>
              <a
                href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20lesson%20with%20L%20Plus%20P"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-[#0f1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white">
              Why Choose Us in <span className="text-[#FFD700]">{suburb.name}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: `Local ${suburb.name} Expertise`,
                description: `Our instructors know every street, intersection, and hazard in ${suburb.name}. You will practice on the exact roads used in the ${suburb.testCentre} driving test.`,
              },
              {
                title: 'Free Pick-up in ' + suburb.name,
                description: `We pick you up from your home, school, or workplace anywhere in ${suburb.name} — no travel stress before your lesson.`,
              },
              {
                title: `Pass First Time in ${suburb.name}`,
                description: `Our students in ${suburb.name} consistently pass first time thanks to thorough test preparation and familiarity with the ${suburb.testCentre} test centre routes.`,
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#1a2235] rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0f1623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {/* Reviews */}
      <section className="py-16 bg-[#1a2235]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            What Students <span className="text-[#FFD700]">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {reviewPairs.map((review) => (
              <div key={review.author} className="bg-[#0f1623] rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                <p className="text-white font-semibold text-sm">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Ready to start your lessons in ${suburb.name}?`}
        subtext={`Join hundreds of ${suburb.name} students who passed first time with L Plus P.`}
      />
    </>
  );
}
