import Link from 'next/link';

export interface InstructorCardProps {
  initial: string;
  title: string;
  name: string;
  tagline: string;
  bio: string[];
  quote: string;
  phone: string;
  phoneHref: string;
  bookHref: string;
  badge?: string;
}

export default function InstructorCard({
  initial,
  title,
  name,
  tagline,
  bio,
  quote,
  phone,
  phoneHref,
  bookHref,
  badge,
}: InstructorCardProps) {
  return (
    <article
      style={{
        position: 'relative',
        border: '1px solid rgba(245, 200, 66, 0.25)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'transparent',
      }}
    >
      {badge ? (
        <span
          style={{
            position: 'absolute',
            top: '-12px',
            right: '24px',
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

      {/* Header */}
      <header style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div
          style={{
            width: '96px',
            height: '120px',
            flexShrink: 0,
            background: 'var(--navy-elevated)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--type-display)',
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--gold)',
              lineHeight: 1,
            }}
          >
            {initial}
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--gold)',
              margin: 0,
              marginBottom: '10px',
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontFamily: 'var(--type-display)',
              fontSize: '32px',
              fontWeight: 600,
              color: 'var(--cream)',
              margin: 0,
              marginBottom: '6px',
              lineHeight: 1,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontSize: '13px',
              fontStyle: 'italic',
              color: 'rgba(250, 247, 242, 0.6)',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {tagline}
          </p>
        </div>
      </header>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          {bio.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: '15px',
                lineHeight: 1.65,
                color: 'rgba(250, 247, 242, 0.82)',
                marginTop: 0,
                marginBottom: '16px',
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <blockquote
          style={{
            marginTop: 'auto',
            marginBottom: '20px',
            marginLeft: 0,
            marginRight: 0,
            padding: '16px',
            background: 'rgba(245, 200, 66, 0.08)',
            borderLeft: '3px solid var(--gold)',
            fontSize: '14px',
            fontStyle: 'italic',
            color: 'rgba(250, 247, 242, 0.9)',
            lineHeight: 1.5,
          }}
        >
          {quote}
        </blockquote>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link
            href={bookHref}
            style={{
              background: 'var(--gold)',
              color: 'var(--navy-ink)',
              padding: '12px 24px',
              fontFamily: 'var(--type-mono)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              display: 'inline-block',
            }}
          >
            Book with {name} →
          </Link>
          <a
            href={phoneHref}
            style={{
              color: 'var(--gold)',
              fontFamily: 'var(--type-mono)',
              fontSize: '13px',
              borderBottom: '1px solid rgba(245, 200, 66, 0.5)',
              paddingBottom: '2px',
            }}
          >
            {phone}
          </a>
        </div>
      </div>
    </article>
  );
}
