import { TRUST_STATS } from '@/lib/trustStats';

export default function TrustBar() {
  return (
    <div className="hidden md:block bg-[#0B1628] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
        <div className="flex items-center justify-center gap-5 text-xs text-white/50 font-outfit">
          <span>Est. {TRUST_STATS.yearEstablished}</span>
          <span className="text-white/20">·</span>
          <span>
            <span className="text-[#F5C132]">{'★'.repeat(5)}</span>
            {' '}{TRUST_STATS.rating} ({TRUST_STATS.reviewCount}+ Google reviews)
          </span>
          <span className="text-white/20">·</span>
          <span>{TRUST_STATS.firstAttemptPassRate}% first-attempt pass rate</span>
          <span className="text-white/20">·</span>
          <span>{TRUST_STATS.studentsTaught.toLocaleString()}+ students taught</span>
        </div>
      </div>
    </div>
  );
}
