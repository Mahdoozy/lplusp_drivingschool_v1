import type { Metadata } from 'next';
import ReferContent from './ReferContent';

export const metadata: Metadata = {
  title: 'Refer a Mate — You Both Save 10% | L Plus P Driving School',
  description:
    'Refer a friend to L Plus P Driving School and you both save 10% on your next driving lesson. Share your name, they mention it when booking.',
  alternates: { canonical: '/refer' },
};

export default function ReferPage() {
  return <ReferContent />;
}
