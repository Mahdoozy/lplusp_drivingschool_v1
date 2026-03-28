import Link from 'next/link';

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
}

export default function CTABanner({
  heading = 'Ready to get your licence?',
  subtext = 'Join hundreds of students who passed first time with L Plus P.',
  buttonLabel = 'Book Your First Lesson',
}: CTABannerProps) {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20 cta-texture"
      style={{
        background: 'linear-gradient(135deg, #F5C842 0%, #d4a91a 50%, #F5C842 100%)',
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        <h2
          className="font-serif font-black text-[#0a0f1e] leading-tight"
          style={{ fontSize: 'clamp(28px, 5vw, 42px)' }}
        >
          {heading}
        </h2>
        <p className="font-sans text-[#0a0f1e] text-lg font-medium opacity-80">{subtext}</p>
        <Link
          href="/book"
          className="font-serif font-bold text-white px-9 py-4 rounded hover:scale-[1.02] transition-all duration-200 shadow-lg"
          style={{ background: '#0a0f1e' }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
