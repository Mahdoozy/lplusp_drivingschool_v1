import Link from 'next/link';
import Image from 'next/image';

const suburbs = [
  'North Ryde', 'East Ryde', 'Ryde', 'West Ryde',
  'Macquarie Park', 'Eastwood', 'Epping', 'Castle Hill',
  'North Rocks', 'Carlingford', 'Beecroft', 'Telopea',
  'Dundas', 'Ermington', 'Rydalmere', 'Melrose Park',
  'Meadowbank', 'Rhodes', 'Gladesville', 'Putney',
  'Silverwater', 'Newington', 'Auburn', 'Chatswood',
];

const col1 = suburbs.slice(0, 12);
const col2 = suburbs.slice(12);

export default function Footer() {
  return (
    <footer className="bg-[#0f1623] border-t border-[#1a2235] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Logo & tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/lplusp_logo.svg"
                alt="L Plus P Driving School"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[#FFD700] font-semibold text-lg">Learn. Practice. Pass.</p>
            <p className="text-gray-400 text-sm">Sydney&apos;s most trusted driving school since 1997</p>
          </div>

          {/* Centre: Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div>
                <span className="text-gray-400">Mick: </span>
                <a href="tel:0469370978" className="text-[#FFD700] hover:text-yellow-300 font-semibold">0469 370 978</a>
              </div>
              <div>
                <span className="text-gray-400">Sidra: </span>
                <a href="tel:0451331140" className="text-[#FFD700] hover:text-yellow-300 font-semibold">0451 331 140</a>
              </div>
              <a href="mailto:lpluspdrivingschool44@gmail.com" className="text-gray-300 hover:text-white break-all">
                lpluspdrivingschool44@gmail.com
              </a>
              <a
                href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20lesson%20with%20L%20Plus%20P"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-lg w-fit hover:bg-green-500 transition-colors mt-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Service Areas */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-400">
              <div className="flex flex-col gap-1">
                {col1.map((suburb) => (
                  <span key={suburb}>{suburb}</span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {col2.map((suburb) => (
                  <span key={suburb}>{suburb}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1a2235] flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>&copy; 2026 L Plus P Driving School. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
