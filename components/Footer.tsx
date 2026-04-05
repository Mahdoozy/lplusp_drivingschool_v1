import Link from 'next/link';
import { suburbs } from '@/lib/suburbs';

const col1 = suburbs.slice(0, 12);
const col2 = suburbs.slice(12);

const serviceLinks = [
  { label: 'Learner Lessons', href: '/services#learner' },
  { label: 'Test Prep', href: '/services#test-prep' },
  { label: 'Overseas Conversion', href: '/overseas-licence-conversion' },
  { label: 'Female Instructor', href: '/female-instructor' },
  { label: 'EV Familiarisation', href: '/services#ev' },
  { label: 'Senior Refresher', href: '/services#senior' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#040A14' }}>
      {/* Gold gradient top line */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(245,193,50,0.4) 30%, rgba(245,193,50,0.4) 70%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr_1.5fr] gap-12 mb-10">

          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#F5C132] text-[#0B1628] font-syne font-bold text-sm px-2.5 py-1 rounded leading-none">L</span>
              <span className="text-white/30 text-xs font-outfit">+</span>
              <span className="bg-[#D4D4D4] text-[#CC1500] font-syne font-bold text-sm px-2.5 py-1 rounded leading-none">P</span>
            </div>
            <p className="font-syne font-bold text-white text-base mb-1">L Plus P Driving School</p>
            <p className="font-outfit text-white/35 text-sm leading-relaxed mt-3 max-w-xs">
              Sydney&apos;s most trusted driving school since 1997. Automatic cars, free pick-up &amp; drop-off across 27 suburbs.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-syne font-bold text-sm text-white mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="footer-link font-outfit text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h3 className="font-syne font-bold text-sm text-white mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <div className="flex flex-col gap-1.5">
                {col1.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/driving-lessons/${s.slug}`}
                    className="font-outfit text-xs text-white/35 hover:text-white/70 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                {col2.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/driving-lessons/${s.slug}`}
                    className="font-outfit text-xs text-white/35 hover:text-white/70 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-syne font-bold text-sm text-white mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div>
                <span className="font-outfit text-white/45 text-xs block mb-0.5">Mick</span>
                <a href="tel:0469370978" className="font-mono text-white text-sm hover:text-[#F5C132] transition-colors">
                  0469 370 978
                </a>
              </div>
              <div>
                <span className="font-outfit text-white/45 text-xs block mb-0.5">Sidra</span>
                <a href="tel:0451331140" className="font-mono text-white text-sm hover:text-[#F5C132] transition-colors">
                  0451 331 140
                </a>
              </div>
              <a
                href="mailto:lpluspdrivingschool44@gmail.com"
                className="font-outfit text-white/45 text-xs hover:text-white/70 transition-colors break-all"
              >
                lpluspdrivingschool44@gmail.com
              </a>
              <a
                href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20lesson%20with%20L%20Plus%20P"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22C55E] text-white font-outfit font-semibold text-sm px-4 py-2 rounded-lg hover:bg-green-500 transition-colors w-fit mt-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-outfit text-xs text-white/20">
            &copy; 2026 L Plus P Driving School. All rights reserved.
          </span>
          <Link
            href="/faq"
            className="font-outfit text-xs text-[#F5C132]/50 hover:text-[#F5C132]/80 transition-colors"
          >
            Refer a friend — you both save 10%
          </Link>
        </div>
      </div>
    </footer>
  );
}
