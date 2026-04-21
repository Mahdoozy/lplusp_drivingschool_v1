import Link from 'next/link';

export interface MatchCardProps {
  number: string;
  title: string;
  body: string;
  packageLabel: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
  variant: 'light' | 'dark';
  badge?: string;
}

export default function MatchCard({
  number,
  title,
  body,
  packageLabel,
  price,
  ctaLabel,
  ctaHref,
  variant,
  badge,
}: MatchCardProps) {
  const isDark = variant === 'dark';
  const bg = isDark ? 'var(--navy)' : 'var(--paper)';
  const textColor = isDark ? 'var(--cream)' : 'var(--navy-ink)';
  const bodyColor = isDark ? 'rgba(250, 247, 242, 0.7)' : 'var(--ink-60)';
  const border = isDark ? '1px solid rgba(245, 200, 66, 0.2)' : '1px solid var(--hairline)';
  const hairlineColor = isDark ? 'rgba(250, 247, 242, 0.15)' : 'var(--hairline)';
  const labelColor = isDark ? 'rgba(250, 247, 242, 0.55)' : 'var(--ink-60)';
  const numberColor = isDark ? 'var(--gold)' : 'var(--gold-deep)';
  const priceColor = isDark ? 'var(--gold)' : 'var(--navy-ink)';

  const btnStyle = isDark
    ? { background: 'var(--gold)', color: 'var(--navy-ink)' }
    : { background: 'var(--navy)', color: 'var(--gold)' };

  return (
    <article
      style={{
        position: 'relative',
        background: bg,
        border,
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        color: textColor,
      }}
    >
      {badge ? (
        <span
          style={{
            position: 'absolute',
            top: '-12px',
            left: '24px',
            background: 'var(--gold)',
            color: 'var(--navy-ink)',
            fontFamily: 'var(--type-mono)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            padding: '5px 14px',
            fontWeight: 500,
          }}
        >
          {badge}
        </span>
      ) : null}

      <p
        style={{
          fontFamily: 'var(--type-display)',
          fontSize: '40px',
          fontWeight: 700,
          color: numberColor,
          margin: 0,
          marginBottom: '12px',
          lineHeight: 1,
        }}
      >
        {number}
      </p>

      <h3
        style={{
          fontFamily: 'var(--type-display)',
          fontSize: '22px',
          fontWeight: 600,
          lineHeight: 1.2,
          margin: 0,
          marginBottom: '14px',
          color: textColor,
        }}
      >
        &ldquo;{title}&rdquo;
      </h3>

      <p
        style={{
          fontSize: '14px',
          lineHeight: 1.6,
          color: bodyColor,
          margin: 0,
          marginBottom: '24px',
          flex: 1,
        }}
      >
        {body}
      </p>

      <div
        style={{
          borderTop: `1px solid ${hairlineColor}`,
          paddingTop: '16px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '13px',
            color: labelColor,
          }}
        >
          {packageLabel}
        </span>
        <span
          style={{
            fontFamily: 'var(--type-display)',
            fontSize: '24px',
            fontWeight: 700,
            color: priceColor,
            lineHeight: 1,
          }}
        >
          {price}
        </span>
      </div>

      <Link
        href={ctaHref}
        style={{
          ...btnStyle,
          display: 'block',
          textAlign: 'center',
          padding: '14px',
          fontFamily: 'var(--type-mono)',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.02em',
          marginTop: 'auto',
        }}
      >
        {ctaLabel}
      </Link>
    </article>
  );
}
