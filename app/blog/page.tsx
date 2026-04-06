import type { Metadata } from 'next';
import Link from 'next/link';
import { posts, formatDate } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Driving Guides & Tips | L Plus P Driving School Blog',
  description:
    'Helpful guides for NSW learner drivers — logbook hours, overseas licence conversion, test prep tips and more from L Plus P Driving School.',
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1C2E] pt-16 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span
            className="font-outfit text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            style={{ color: '#C9A84C' }}
          >
            HELPFUL GUIDES
          </span>
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
            Driving guides &amp; tips
          </h1>
          <p className="font-outfit text-white/55 text-base leading-relaxed">
            Practical advice for NSW learners, international drivers, and anyone preparing for their driving test.
          </p>
        </div>
      </section>

      {/* Post list */}
      <section className="bg-[#F7F9FF] py-[72px] px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl p-8 border border-[#E8EEF8] hover:border-[#C9A84C]/40 transition-colors block"
              style={{ borderLeft: '4px solid #C9A84C' }}
            >
              <p className="font-outfit text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C9A84C' }}>
                {formatDate(post.date)}
              </p>
              <h2 className="font-syne font-bold text-xl text-[#0B1C2E] leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors">
                {post.title}
              </h2>
              <p className="font-outfit text-[#6B7FA8] text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="font-outfit font-semibold text-sm" style={{ color: '#C9A84C' }}>
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1C2E] py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-syne font-extrabold text-3xl text-white mb-3">
            Ready to book a lesson?
          </h2>
          <p className="font-outfit text-white/50 text-sm mb-6">
            Free pick-up and drop-off across 24 Sydney suburbs.
          </p>
          <Link
            href="/book"
            className="inline-block font-outfit font-bold text-sm px-8 py-3.5 rounded-xl transition-colors"
            style={{ background: '#C9A84C', color: '#0B1C2E' }}
          >
            Book a Lesson →
          </Link>
        </div>
      </section>
    </>
  );
}
