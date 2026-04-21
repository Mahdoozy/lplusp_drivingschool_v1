import type { Metadata } from 'next';
import { Syne, Plus_Jakarta_Sans, Outfit, DM_Mono } from 'next/font/google';
import { TRUST_STATS } from '@/lib/trustStats';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnnouncementBar from '@/components/AnnouncementBar';
import TrustBar from '@/components/TrustBar';
import MobileStickyBar from '@/components/MobileStickyBar';
import ReferralButton from '@/components/ReferralButton';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lppdrivingschool.com.au'),
  title: 'L Plus P Driving School | Driving Lessons Sydney | Est. 1997',
  description:
    "L Plus P Driving School — Sydney's most trusted driving school since 1997. Expert driving lessons in North Ryde, Ryde, Epping, Castle Hill and 20+ suburbs. Learner drivers, test prep, overseas licence conversion. 3-for-1 logbook hours. Call Mick 0469 370 978.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakartaSans.variable} ${outfit.variable} ${dmMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "DrivingSchool"],
              "name": "L Plus P Driving School",
              "description": "Family-run driving school in North Ryde, Sydney, established 1997. Automatic cars only, free pick-up and drop-off across 24 suburbs. Taught by Mick and Sidra.",
              "url": "https://lppdrivingschool.com.au",
              "telephone": "+61469370978",
              "email": "lpluspdrivingschool44@gmail.com",
              "foundingDate": "1997",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "North Ryde",
                "addressRegion": "NSW",
                "postalCode": "2113",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.7969,
                "longitude": 151.1269
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "06:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": String(TRUST_STATS.rating),
                "reviewCount": String(TRUST_STATS.reviewCount),
                "bestRating": "5"
              },
              "areaServed": [
                "North Ryde","East Ryde","Ryde","West Ryde","Macquarie Park",
                "Eastwood","Epping","Castle Hill","North Rocks","Carlingford",
                "Beecroft","Telopea","Dundas","Ermington","Rydalmere",
                "Melrose Park","Meadowbank","Rhodes","Gladesville","Putney",
                "Silverwater","Newington","Auburn","Chatswood"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Driving Lesson Packages",
                "itemListElement": [
                  { "@type": "Offer", "name": "Casual 1 Hour Lesson", "price": "60", "priceCurrency": "AUD" },
                  { "@type": "Offer", "name": "5 Hour Package", "price": "275", "priceCurrency": "AUD" },
                  { "@type": "Offer", "name": "10 Hour Package", "price": "550", "priceCurrency": "AUD" },
                  { "@type": "Offer", "name": "Mock Driving Test", "price": "65", "priceCurrency": "AUD" },
                  { "@type": "Offer", "name": "Test Day Package", "price": "170", "priceCurrency": "AUD" }
                ]
              }
            })
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18072728281"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18072728281');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <AnnouncementBar />
        <TrustBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
        <ReferralButton />
      </body>
    </html>
  );
}
