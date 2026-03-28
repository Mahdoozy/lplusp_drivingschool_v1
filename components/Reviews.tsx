const reviews = [
  {
    text: 'Mick is an excellent instructor and teaches the rules and tricks in an easy to understand manner. With his support I was able to get my full licence today.',
    author: 'Brian Joe A.',
    source: 'Google Review',
  },
  {
    text: "Mike is a legend! Extremely humble, experienced and professional. Without those 5 lessons from Mike it would have been difficult to pass first time.",
    author: 'Google Reviewer',
    source: 'Google Review',
  },
  {
    text: 'Best driving school in Sydney. Sidra made me feel confident behind the wheel and the 3-for-1 logbook hours saved me so much time.',
    author: 'James W.',
    source: 'Google Review',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#1a2235]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What Our Students <span className="text-[#FFD700]">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.author} className="bg-[#0f1623] rounded-2xl p-6 flex flex-col gap-4">
              <StarRating />
              <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              <div>
                <p className="text-white font-semibold text-sm">{review.author}</p>
                <p className="text-gray-500 text-xs">{review.source}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com.au/search?q=l+plus+p+driving+school"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD700] hover:text-yellow-300 font-semibold text-sm underline underline-offset-4 transition-colors"
          >
            See all our reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
