import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { suburbs, getSuburbBySlug } from '@/lib/suburbs';
import { allReviews, ReviewCard } from '@/components/Reviews';
import TrustStrip from '@/components/TrustStrip';
import Pricing from '@/components/Pricing';
import CTABanner from '@/components/CTABanner';
import Sidebar from '@/components/Sidebar';
import ImageSlideshow from '@/components/ImageSlideshow';

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
    description: `Expert driving lessons in ${suburb.name}, Sydney. Local instructors who know every ${suburb.name} test route at ${suburb.testCentre}. Our late-model automatic cars, free pick-up, 3-for-1 logbook hours. Book with L Plus P today — call 0469 370 978.`,
  };
}

function getSuburbReviews(slug: string) {
  const matching = allReviews.filter((r) => r.tags.includes(slug));
  if (matching.length >= 2) return matching.slice(0, 2);
  // Fall back: fill with reviews 1 and 3 not already included
  const fallbacks = allReviews.filter((r) => [1, 3].includes(r.id) && !matching.find((m) => m.id === r.id));
  return [...matching, ...fallbacks].slice(0, 2);
}

export default async function SuburbPage({ params }: Props) {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);

  if (!suburb) notFound();

  const displayReviews = getSuburbReviews(slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col items-start gap-6 lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Driving Lessons in{' '}
                <span className="text-[#FFD700]">{suburb.name}</span>
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl">
                Expert local instruction — we know every {suburb.name} test route at {suburb.testCentre}. All lessons in our late-model automatic cars.
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
            <div className="lg:w-1/2 w-full">
              <ImageSlideshow />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Why Choose Us + Sidebar */}
      <div className="bg-[#0f1623] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-start">
          <div className="flex-1 min-w-0 flex flex-col gap-16">
            {/* Why Choose Us */}
            <div>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-white">
                  Why Choose Us in <span className="text-[#FFD700]">{suburb.name}</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: `Local ${suburb.name} Expertise`,
                    description: `Our instructors know every street, intersection, and hazard in ${suburb.name}. You will practise on the exact roads used in the ${suburb.testCentre} driving test.`,
                  },
                  {
                    title: `Free Pick-up in ${suburb.name}`,
                    description: `We pick you up from your home, school, or workplace anywhere in ${suburb.name} — no travel stress before your lesson. Our late-model automatic cars.`,
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

            {/* Reviews */}
            <div>
              <h2 className="text-3xl font-extrabold text-white text-center mb-8">
                What Students <span className="text-[#FFD700]">Say</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>

      <Pricing />

      {/* Other suburbs we cover */}
      <section className="bg-[#1a2235] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-white mb-6">
            Other Areas We Cover
          </h2>
          <div className="flex flex-wrap gap-2">
            {suburbs
              .filter((s) => s.slug !== suburb.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/driving-lessons/${s.slug}`}
                  className="bg-[#0f1623] text-gray-300 hover:text-[#FFD700] hover:border-[#FFD700] border border-gray-700 text-sm px-3 py-1.5 rounded-lg transition-colors"
                >
                  {s.name}
                </Link>
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
