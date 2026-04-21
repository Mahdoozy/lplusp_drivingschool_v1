import type { Metadata } from 'next';
import BookForm from './BookForm';

export const metadata: Metadata = {
  title: 'Book a Driving Lesson | L Plus P Driving School Sydney',
  description:
    'Book your driving lesson online with L Plus P Driving School. Serving North Ryde, Ryde, Epping, Castle Hill and 20+ Sydney suburbs. We confirm within 1 hour.',
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <div style={{ backgroundColor: '#f4f7ff', minHeight: '100vh' }}>
      {/* Static server-rendered hero — visible to crawlers immediately */}
      <div className="text-center px-4 pt-12 pb-2">
        <h1 className="font-syne font-bold text-3xl sm:text-5xl text-[#0a0f1e]">
          Book Your{' '}
          <span style={{ color: 'var(--gold, #F5C132)' }}>Lesson</span>
        </h1>
        <p className="font-sans mt-2 text-[#3a4a6a]">
          Fill in the form below and we&apos;ll confirm your lesson within 1 hour.
        </p>
      </div>

      {/* Client-side booking form */}
      <BookForm />
    </div>
  );
}
