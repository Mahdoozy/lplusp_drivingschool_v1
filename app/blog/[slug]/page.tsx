import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost, formatDate } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title + ' | L Plus P Driving School',
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-[#0B1C2E] pt-14 pb-16 px-6">
        <div className="max-w-[720px] mx-auto">
          <Link
            href="/blog"
            className="font-outfit text-xs font-semibold uppercase tracking-widest transition-colors mb-8 inline-block"
            style={{ color: '#C9A84C' }}
          >
            ← All guides
          </Link>
          <p className="font-outfit text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A84C' }}>
            {formatDate(post.date)}
          </p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-[64px] px-6">
        <div
          className="max-w-[720px] mx-auto font-outfit text-[#374060] text-base leading-[1.8] prose-custom"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div
          className="max-w-[720px] mx-auto mt-14 rounded-2xl px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
          style={{ background: '#0B1C2E' }}
        >
          <div>
            <p className="font-syne font-bold text-lg text-white mb-1">Ready to book a lesson?</p>
            <p className="font-outfit text-white/50 text-sm">Free pick-up across 24 Sydney suburbs.</p>
          </div>
          <Link
            href="/book"
            className="flex-shrink-0 font-outfit font-bold text-sm px-7 py-3 rounded-xl transition-colors whitespace-nowrap"
            style={{ background: '#C9A84C', color: '#0B1C2E' }}
          >
            Book a Lesson →
          </Link>
        </div>
      </section>

      <style>{`
        .prose-custom h2 {
          font-family: var(--font-syne), sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: #0B1C2E;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }
        .prose-custom p { margin-bottom: 1.1rem; }
        .prose-custom ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .prose-custom ul li::before {
          content: '›';
          color: #C9A84C;
          font-weight: 700;
          margin-right: 0.5rem;
        }
        .prose-custom strong { color: #0B1C2E; font-weight: 700; }
      `}</style>
    </>
  );
}
