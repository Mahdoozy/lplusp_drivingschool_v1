export interface Review {
  id: number;
  text: string;
  author: string;
  suburb: string;
  tags: string[];
}

export const allReviews: Review[] = [
  {
    id: 1,
    text: 'Mick is an excellent instructor and teaches the rules and tricks in an easy to understand manner. With his support I was able to get my full licence today.',
    author: 'Brian Joe A.',
    suburb: 'North Ryde',
    tags: ['north-ryde', 'east-ryde', 'ryde', 'west-ryde'],
  },
  {
    id: 2,
    text: "Mick is a legend! Extremely humble, experienced and professional. Without those 5 lessons from Mick it would have been difficult to pass first time. Highly recommend L Plus P to anyone looking for a driving school.",
    author: 'Google Reviewer',
    suburb: 'Ryde',
    tags: ['north-ryde', 'east-ryde', 'ryde', 'west-ryde'],
  },
  {
    id: 3,
    text: 'Best driving school in Sydney. Sidra made me feel confident behind the wheel and the 3-for-1 logbook hours saved me so much time.',
    author: 'James W.',
    suburb: 'Epping',
    tags: ['epping', 'carlingford', 'beecroft', 'north-rocks'],
  },
  {
    id: 4,
    text: "I was really nervous about getting behind the wheel but Mick was so patient and calm. He never made me feel embarrassed about making mistakes. Passed my test first try!",
    author: 'Sophie T.',
    suburb: 'Carlingford',
    tags: ['epping', 'carlingford', 'beecroft', 'north-rocks'],
  },
  {
    id: 5,
    text: "Used the 10-hour pack and it was amazing value. The 3-for-1 logbook deal is real — I got my 120 hours done so much faster than my friends at other schools.",
    author: 'Daniel K.',
    suburb: 'Castle Hill',
    tags: ['castle-hill', 'north-rocks', 'carlingford'],
  },
  {
    id: 6,
    text: "Sidra was the perfect instructor for me. As a female learner I felt completely comfortable and safe. She explains everything clearly and is super encouraging.",
    author: 'Priya M.',
    suburb: 'Macquarie Park',
    tags: ['macquarie-park', 'eastwood', 'meadowbank', 'rhodes'],
  },
  {
    id: 7,
    text: "I converted my overseas licence and Mick knew exactly what I needed to focus on for the Australian test. Passed in 3 lessons. Absolutely worth every dollar.",
    author: 'Marco R.',
    suburb: 'Chatswood',
    tags: ['chatswood', 'castle-hill', 'gladesville', 'putney'],
  },
  {
    id: 8,
    text: "The free pick-up service is a game changer. Mick picked me up from my doorstep every single time. Lessons were always on time and really productive. Can't recommend enough.",
    author: 'Aisha N.',
    suburb: 'Eastwood',
    tags: ['eastwood', 'macquarie-park', 'ermington', 'rydalmere'],
  },
];

function GoogleLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="break-inside-avoid bg-[#1a2235] rounded-2xl p-5 flex flex-col gap-3 mb-5">
      <StarRating />
      <span className="text-[#FFD700] text-3xl font-serif leading-none">&ldquo;</span>
      <p className="text-gray-300 text-sm leading-relaxed -mt-4">{review.text}</p>
      <div className="flex items-center justify-between mt-1">
        <div>
          <p className="text-white font-semibold text-sm">{review.author}</p>
          <p className="text-gray-500 text-xs">{review.suburb}, NSW</p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#0f1623] rounded-lg px-2 py-1">
          <GoogleLogo />
          <span className="text-gray-400 text-xs">Google</span>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#1a2235]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#FFD700] text-sm font-semibold uppercase tracking-widest mb-2">Student Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What&apos;s it like learning<br className="hidden sm:block" /> with L Plus P?
          </h2>
          <p className="text-gray-400 mt-3 text-base">Don&apos;t take our word for it — here&apos;s what our students say.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {allReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <GoogleLogo />
              <span className="text-white font-bold">5.0</span>
              <span className="text-gray-400 text-sm">· 80+ reviews</span>
            </div>
          </div>
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
