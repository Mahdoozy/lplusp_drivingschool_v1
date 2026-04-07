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

interface SuburbExtra {
  testCentre: string;
  testCentreAddress: string;
  localKnowledge: string;
  landmark: string;
  pickup: string;
}

const suburbData: Record<string, SuburbExtra> = {
  'north-ryde': {
    testCentre: 'Ryde',
    testCentreAddress: 'Service NSW Ryde, Macquarie Shopping Centre, Shop 1U05/6, Level 1, Corner Waterloo and Herring Road, North Ryde',
    localKnowledge: 'The Ryde Service NSW test centre is inside Macquarie Shopping Centre, just minutes from North Ryde. North Ryde sits right next to Macquarie University and the M2 motorway. We practise on Epping Road, Waterloo Road, and the busy roundabouts around Macquarie Shopping Centre — all common on the Ryde test.',
    landmark: 'Macquarie Shopping Centre',
    pickup: 'We pick up from anywhere in North Ryde including the Macquarie University campus and Student Village.',
  },
  'ryde': {
    testCentre: 'Ryde',
    testCentreAddress: 'Ryde Service Centre, 8 Small Street, Ryde',
    localKnowledge: 'Ryde is where your test happens. We know every street, give way rule, and trick intersection on the Ryde test route — Top Ryde City, Victoria Road, and the Meadowbank bridge area are all common test territory.',
    landmark: 'Top Ryde City',
    pickup: 'We pick up from anywhere in Ryde including near Top Ryde City and Ryde train station.',
  },
  'east-ryde': {
    testCentre: 'Ryde',
    testCentreAddress: 'Ryde Service Centre, 8 Small Street, Ryde',
    localKnowledge: 'East Ryde is a quiet residential suburb but the test takes you onto the busy roads around Ryde and Macquarie Park. We make sure you are comfortable on both the quiet streets and the main roads before test day.',
    landmark: 'Lane Cove National Park',
    pickup: 'We pick up from your home or school anywhere in East Ryde.',
  },
  'west-ryde': {
    testCentre: 'Ryde and Silverwater',
    testCentreAddress: 'Ryde Service Centre or Silverwater Service Centre',
    localKnowledge: 'West Ryde students can test at either Ryde or Silverwater. We cover both routes — the busy Victoria Road corridor, the West Ryde station area, and the Parramatta River routes used in the Silverwater test.',
    landmark: 'West Ryde Marketplace',
    pickup: 'We pick up from West Ryde station, West Ryde Marketplace, or your home.',
  },
  'macquarie-park': {
    testCentre: 'Ryde (at Macquarie Shopping Centre)',
    testCentreAddress: 'Service NSW Ryde, Macquarie Shopping Centre, Shop 1U05/6, Level 1, Corner Waterloo and Herring Road, North Ryde',
    localKnowledge: 'The Ryde Service NSW test centre is actually located right inside Macquarie Shopping Centre — so if you live in Macquarie Park you are practically testing in your own backyard. The test routes use Herring Road, Epping Road, Waterloo Road, and the complex intersections around Macquarie University station. We practise all of these with you before test day.',
    landmark: 'Macquarie Shopping Centre and Macquarie University',
    pickup: 'We pick up directly from Macquarie University campus, Macquarie Shopping Centre, or your home anywhere in Macquarie Park. The test centre is 2 minutes from where we pick you up.',
  },
  'eastwood': {
    testCentre: 'Ryde',
    testCentreAddress: 'Ryde Service Centre, 8 Small Street, Ryde',
    localKnowledge: 'Eastwood has some of the busiest shopping strip traffic in the area. We practise on Rowe Street, Shaftsbury Road, and the tricky give way rules around Eastwood station before heading to the Ryde test centre.',
    landmark: 'Eastwood station and shopping strip',
    pickup: 'We pick up from Eastwood station, the shopping strip, or your home anywhere in Eastwood.',
  },
  'epping': {
    testCentre: 'Ryde and Silverwater',
    testCentreAddress: 'Ryde Service Centre or Silverwater Service Centre',
    localKnowledge: 'Epping sits on the border of two test centre zones. We know both routes. The M2 on-ramp near Epping, the Oxford Street shopping area, and the school zones around Epping Boys and Girls High are all part of your local driving environment.',
    landmark: 'Epping station',
    pickup: 'We pick up from Epping station or your home anywhere in Epping.',
  },
  'castle-hill': {
    testCentre: 'Castle Hill',
    testCentreAddress: 'Service NSW Castle Hill, Old Northern Road, Castle Hill',
    localKnowledge: 'Castle Hill has its own test centre and its own test routes. We know every road the assessor will take you on — Old Northern Road, Showground Road, the Castle Towers area, and the Hills M7 interchange approach roads.',
    landmark: 'Castle Towers Shopping Centre',
    pickup: 'We pick up from Castle Towers, Castle Hill station, or your home anywhere in Castle Hill.',
  },
  'north-rocks': {
    testCentre: 'North Rocks',
    testCentreAddress: 'Service NSW North Rocks, North Rocks Shopping Centre, Shop 50-56, 328-336 North Rocks Road, North Rocks',
    localKnowledge: 'North Rocks has its own Service NSW test centre right inside North Rocks Shopping Centre. The test routes use North Rocks Road, Jenkins Road roundabouts, Barclay Road residential streets, and school zones around the shopping centre area. We know every metre of these routes and practise them specifically with every North Rocks student.',
    landmark: 'North Rocks Shopping Centre (opposite Kmart)',
    pickup: 'We pick up from North Rocks Shopping Centre or your home anywhere in North Rocks — and we can drop you directly at the test centre entrance.',
  },
  'carlingford': {
    testCentre: 'Ryde and Silverwater',
    testCentreAddress: 'Ryde Service Centre or Silverwater Service Centre',
    localKnowledge: 'Carlingford has Carlingford Court, the light rail route, and busy Pennant Hills Road. We practise all of these plus the routes into both Ryde and Silverwater test centres — you will be ready for whichever one you book.',
    landmark: 'Carlingford Court and the light rail',
    pickup: 'We pick up from Carlingford station, Carlingford Court, or your home.',
  },
  'beecroft': {
    testCentre: 'Ryde and Silverwater',
    testCentreAddress: 'Ryde Service Centre or Silverwater Service Centre',
    localKnowledge: 'Beecroft is a leafy suburb with narrow residential streets and school zones around Beecroft Public School. We make sure you are comfortable on both the quiet local streets and the busy Pennant Hills Road before test day.',
    landmark: 'Beecroft village and train station',
    pickup: 'We pick up from Beecroft station or your home anywhere in Beecroft.',
  },
  'telopea': {
    testCentre: 'Silverwater',
    testCentreAddress: 'Silverwater Service Centre, 1 Holker Street, Silverwater',
    localKnowledge: 'Telopea feeds directly into the Silverwater test route. We practise the Pennant Hills Road corridor, the Dundas Valley roads, and the approach to the Silverwater test centre so there are no surprises on the day.',
    landmark: 'Telopea and the Toongabbie Creek area',
    pickup: 'We pick up from your home anywhere in Telopea.',
  },
  'dundas': {
    testCentre: 'Silverwater',
    testCentreAddress: 'Silverwater Service Centre, 1 Holker Street, Silverwater',
    localKnowledge: 'Dundas is close to the Silverwater test centre. We know the specific roads and give way situations used on the Silverwater test route and will have you practising on the exact same streets before your test.',
    landmark: 'Dundas and the Cumberland Highway',
    pickup: 'We pick up from your home anywhere in Dundas.',
  },
  'ermington': {
    testCentre: 'Silverwater',
    testCentreAddress: 'Silverwater Service Centre, 1 Holker Street, Silverwater',
    localKnowledge: 'Ermington sits right next to the Parramatta River and close to the Silverwater test centre. We practise the River Road corridor, the Shepherd Street roundabout area, and the approach roads to Silverwater.',
    landmark: 'Parramatta River foreshore',
    pickup: 'We pick up from your home anywhere in Ermington.',
  },
  'rydalmere': {
    testCentre: 'Silverwater',
    testCentreAddress: 'Silverwater Service Centre, 1 Holker Street, Silverwater',
    localKnowledge: 'Rydalmere students test at Silverwater. We know the Church Street corridor, the TAFE area, and the approach roads to the Silverwater Service Centre. Your test will feel familiar because we will have driven those exact roads together.',
    landmark: 'TAFE NSW Rydalmere',
    pickup: 'We pick up from TAFE Rydalmere or your home anywhere in Rydalmere.',
  },
  'melrose-park': {
    testCentre: 'Silverwater',
    testCentreAddress: 'Silverwater Service Centre, 1 Holker Street, Silverwater',
    localKnowledge: 'Melrose Park is a quiet suburb close to Silverwater. We practise the Victoria Road and Wharf Road routes that connect Melrose Park to the test centre, making sure you are comfortable on the busier roads before test day.',
    landmark: 'Melrose Park and the Parramatta River',
    pickup: 'We pick up from your home anywhere in Melrose Park.',
  },
  'meadowbank': {
    testCentre: 'Ryde',
    testCentreAddress: 'Ryde Service Centre, 8 Small Street, Ryde',
    localKnowledge: 'Meadowbank is right on the Parramatta River with the light rail running through it. We practise the Meadowbank station area, the Shepherd Street bridge, and the routes up into Ryde for your test.',
    landmark: 'Meadowbank light rail and the Parramatta River',
    pickup: 'We pick up from Meadowbank station or your home anywhere in Meadowbank.',
  },
  'rhodes': {
    testCentre: 'Ryde',
    testCentreAddress: 'Ryde Service Centre, 8 Small Street, Ryde',
    localKnowledge: 'Rhodes is a high-density suburb with complex traffic around Rhodes station, the shopping centre, and the busy Concord Road and Homebush Bay Drive. We make sure you are comfortable in heavy traffic before your Ryde test.',
    landmark: 'Rhodes shopping centre and train station',
    pickup: 'We pick up from Rhodes station, the shopping centre, or your home anywhere in Rhodes.',
  },
  'gladesville': {
    testCentre: 'Ryde',
    testCentreAddress: 'Ryde Service Centre, 8 Small Street, Ryde',
    localKnowledge: 'Gladesville has the Victoria Road shopping strip and the Gladesville Bridge — busy roads that require real confidence. We practise these plus the quieter residential streets before heading to the Ryde test centre.',
    landmark: 'Gladesville Bridge and Victoria Road shopping strip',
    pickup: 'We pick up from your home anywhere in Gladesville.',
  },
  'putney': {
    testCentre: 'Ryde',
    testCentreAddress: 'Ryde Service Centre, 8 Small Street, Ryde',
    localKnowledge: 'Putney is a quiet riverside suburb close to Ryde. We practise the Meadowbank and Victoria Road routes that connect Putney to the Ryde test centre, building your confidence on both quiet and busy roads.',
    landmark: 'Putney foreshore and Kissing Point Road',
    pickup: 'We pick up from your home anywhere in Putney.',
  },
  'silverwater': {
    testCentre: 'Silverwater',
    testCentreAddress: 'Silverwater Service Centre, 1 Holker Street, Silverwater',
    localKnowledge: 'Silverwater is home to the test centre itself. We know the test routes inside out — the industrial roads, the M4 approach, and the specific intersections the assessor uses. Testing here is a home game for our students.',
    landmark: 'Silverwater Service NSW test centre',
    pickup: 'We pick up from your home anywhere in Silverwater and can drop you directly at the test centre.',
  },
  'newington': {
    testCentre: 'Silverwater',
    testCentreAddress: 'Silverwater Service Centre, 1 Holker Street, Silverwater',
    localKnowledge: 'Newington was built for the 2000 Olympics and has wide boulevards and roundabouts that are great for building confidence. We practise the Olympic Park area roads before moving to the Silverwater test routes.',
    landmark: 'Sydney Olympic Park',
    pickup: 'We pick up from Sydney Olympic Park or your home anywhere in Newington.',
  },
  'auburn': {
    testCentre: 'Silverwater',
    testCentreAddress: 'Silverwater Service Centre, 1 Holker Street, Silverwater',
    localKnowledge: 'Auburn has some of the busiest shopping streets in western Sydney — Auburn Road and the surrounding streets require confident merging, lane changing, and pedestrian awareness. We build these skills before your Silverwater test.',
    landmark: 'Auburn station and shopping district',
    pickup: 'We pick up from Auburn station or your home anywhere in Auburn.',
  },
  'chatswood': {
    testCentre: 'Chatswood',
    testCentreAddress: 'Service NSW Chatswood, 1-3 Searle Street, Chatswood',
    localKnowledge: "Chatswood has its own test centre and some of Sydney's most complex traffic — the Victoria Avenue shopping strip, the Pacific Highway, and the Chatswood Chase area are all part of your test environment. We know every metre of the route.",
    landmark: 'Chatswood Chase and the Pacific Highway',
    pickup: 'We pick up from Chatswood station, Chatswood Chase, or your home anywhere in Chatswood.',
  },
};

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
  const extra = suburbData[slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Driving Lessons in ${suburb.name}`,
    "provider": {
      "@type": "DrivingSchool",
      "name": "L Plus P Driving School",
      "url": "https://lppdrivingschool.com.au",
      "telephone": "+61469370978",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "North Ryde",
        "addressRegion": "NSW",
        "postalCode": "2113",
        "addressCountry": "AU"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "126",
        "bestRating": "5"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": suburb.name
    },
    "description": `Professional driving lessons in ${suburb.name} from L Plus P Driving School. Automatic cars, free pick-up and drop-off.`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col items-start gap-6 lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Driving Lessons in{' '}
                <span className="text-[#FFD700]">{suburb.name}</span>
                {' '}— We Know Every Street
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl">
                Your driving test will be at <strong className="text-white">{extra?.testCentre ?? suburb.testCentre}</strong>. We know that route better than anyone.
              </p>
              {extra && (
                <>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {extra.localKnowledge}
                  </p>
                  <div className="flex items-start gap-2 bg-[#1a2235] rounded-xl px-4 py-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#FFD700] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{extra.pickup}</span>
                  </div>
                </>
              )}
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
