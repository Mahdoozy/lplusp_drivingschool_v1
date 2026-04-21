import { TRUST_STATS } from '@/lib/trustStats';

export default function TrustBar() {
  return (
    <div className="hidden md:block bg-[#0B1628] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
        <div className="flex items-center justify-between gap-4 text-[11px] font-mono text-white/55">
          <div className="flex items-center gap-4">
            <span>Est. {TRUST_STATS.yearEstablished}</span>
            <span className="text-white/15">·</span>
            <span>
              <span className="text-[#F5C132]">★</span>
              {' '}{TRUST_STATS.rating} · {TRUST_STATS.reviewCount}+ Google reviews
            </span>
            <span className="text-white/15">·</span>
            <span>{TRUST_STATS.firstAttemptPassRate}% first-attempt pass rate</span>
            <span className="text-white/15">·</span>
            <span>{TRUST_STATS.studentsTaught.toLocaleString()}+ students taught</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0469370978" className="hover:text-[#F5C132] transition-colors">
              Mick 0469 370 978
            </a>
            <span className="text-white/15">·</span>
            <a href="tel:0451331140" className="hover:text-[#F5C132] transition-colors">
              Sidra 0451 331 140
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
