import Link from 'next/link';

export default function MobileStickyBar() {
  return (
    <>
      <div
        className="mobile-bottom-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'var(--navy)',
          display: 'flex',
          borderTop: '1px solid rgba(245, 200, 66, 0.2)',
        }}
      >
        <a
          href="tel:0469370978"
          style={{
            flex: 1,
            padding: '16px 8px',
            textAlign: 'center',
            fontFamily: 'var(--type-body)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--cream)',
            borderRight: '1px solid rgba(250, 247, 242, 0.1)',
          }}
        >
          Call
        </a>
        <a
          href="https://wa.me/61469370978"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            padding: '16px 8px',
            textAlign: 'center',
            fontFamily: 'var(--type-body)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--cream)',
            borderRight: '1px solid rgba(250, 247, 242, 0.1)',
          }}
        >
          WhatsApp
        </a>
        <Link
          href="/book"
          style={{
            flex: 1,
            padding: '16px 8px',
            textAlign: 'center',
            fontFamily: 'var(--type-body)',
            fontSize: '13px',
            fontWeight: 500,
            background: 'var(--gold)',
            color: 'var(--navy-ink)',
          }}
        >
          Book
        </Link>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .mobile-bottom-bar { display: none; }
        }
        @media (max-width: 767px) {
          body { padding-bottom: 60px; }
        }
      `}</style>
    </>
  );
}
