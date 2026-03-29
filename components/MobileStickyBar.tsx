import Link from 'next/link';

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-[#E8EEF8] bg-white">
      <a
        href="tel:0469370978"
        className="flex-1 bg-[#22C55E] text-white font-outfit font-bold py-4 text-sm text-center"
      >
        Call Mick
      </a>
      <Link
        href="/book"
        className="flex-1 bg-[#F5C132] text-[#0B1628] font-outfit font-bold py-4 text-sm text-center"
      >
        Book Now
      </Link>
    </div>
  );
}
