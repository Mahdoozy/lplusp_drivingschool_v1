import Link from 'next/link';

interface HeroProps {
  heading: string;
  headingGold?: string;
  subheading: string;
  showStars?: boolean;
  primaryBtn?: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
  showCarPlaceholder?: boolean;
}

export default function Hero({
  heading,
  headingGold,
  subheading,
  showStars = false,
  primaryBtn,
  secondaryBtn,
  showCarPlaceholder = false,
}: HeroProps) {
  return (
    <section className="bg-[#0f1623] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${showCarPlaceholder ? 'lg:flex-row' : ''} items-center gap-10`}>
          {/* Text side */}
          <div className={`flex flex-col gap-6 ${showCarPlaceholder ? 'lg:w-1/2' : 'text-center max-w-3xl'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {heading}
              {headingGold && (
                <>
                  {' '}
                  <span className="text-[#FFD700]">{headingGold}</span>
                </>
              )}
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl">{subheading}</p>

            {showStars && (
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold">5.0</span>
                <span className="text-gray-400 text-sm">(80+ reviews)</span>
              </div>
            )}

            {(primaryBtn || secondaryBtn) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryBtn && (
                  <Link
                    href={primaryBtn.href}
                    className="bg-[#FFD700] text-[#0f1623] font-bold px-6 py-3 rounded-lg text-center hover:bg-yellow-300 transition-colors"
                  >
                    {primaryBtn.label}
                  </Link>
                )}
                {secondaryBtn && (
                  <Link
                    href={secondaryBtn.href}
                    className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white hover:text-[#0f1623] transition-colors"
                  >
                    {secondaryBtn.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Car image placeholder */}
          {showCarPlaceholder && (
            <div className="lg:w-1/2 w-full">
              <div className="w-full h-72 sm:h-96 bg-[#1a2235] rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-24 h-24 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h10l2-2zM13 7h5l3 3v3h-2" />
                  </svg>
                  <p className="text-sm opacity-40">Car image</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
