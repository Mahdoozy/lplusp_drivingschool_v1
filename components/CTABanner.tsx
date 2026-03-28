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
    <section className="bg-[#FFD700] py-14 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1623]">{heading}</h2>
        <p className="text-[#0f1623] text-lg font-medium">{subtext}</p>
        <Link
          href="/book"
          className="bg-[#0f1623] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#1a2235] transition-colors"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
