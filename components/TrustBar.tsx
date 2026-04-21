import { TRUST_STATS } from '@/lib/trustStats';

export default function TrustBar() {
  return (
    <div
      className="trustbar w-full"
      style={{
        background: 'var(--navy)',
        padding: '10px 32px',
        borderBottom: '1px solid rgba(245, 200, 66, 0.08)',
      }}
    >
      <div
        className="trustbar-row"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          fontFamily: 'var(--type-mono)',
          fontSize: '12px',
          letterSpacing: '0.04em',
          color: 'var(--gold)',
        }}
      >
        <div className="trustbar-left">
          Est. {TRUST_STATS.yearEstablished} · {TRUST_STATS.rating}★ ({TRUST_STATS.reviewCount} reviews) · {TRUST_STATS.firstAttemptPassRate}% first-attempt pass rate · {TRUST_STATS.suburbCount} suburbs
        </div>
        <div className="trustbar-right" style={{ display: 'flex', gap: '14px' }}>
          <a href="tel:0469370978" style={{ color: 'var(--gold)' }}>Mick 0469 370 978</a>
          <span style={{ opacity: 0.4 }}>·</span>
          <a href="tel:0451331140" style={{ color: 'var(--gold)' }}>Sidra 0451 331 140</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .trustbar {
            padding: 8px 16px !important;
          }
          .trustbar .trustbar-row {
            flex-direction: column !important;
            gap: 4px !important;
            font-size: 11px !important;
            text-align: center;
          }
          .trustbar .trustbar-right {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
