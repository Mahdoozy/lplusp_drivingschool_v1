import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | L Plus P Driving School',
  description:
    'Answers to common questions about driving lessons, pricing, the 3-for-1 logbook scheme, test preparation, automatic vehicles, and booking with L Plus P Driving School in Sydney.',
};

const allFAQs = [
  {
    question: 'How many lessons do I need?',
    answer:
      'It depends on your experience and how quickly you progress. Complete beginners typically need 10–20 hours of professional instruction. Those with some supervised driving experience usually need 5–10 hours. We assess your ability during the first lesson and recommend the right package for your situation.',
  },
  {
    question: 'Which suburbs do you cover?',
    answer:
      'We cover 24 suburbs across North Sydney and Ryde: North Ryde, East Ryde, Ryde, West Ryde, Macquarie Park, Eastwood, Epping, Castle Hill, North Rocks, Carlingford, Beecroft, Telopea, Dundas, Ermington, Rydalmere, Melrose Park, Meadowbank, Rhodes, Gladesville, Putney, Silverwater, Newington, Auburn, and Chatswood. Contact us if you are not sure whether your suburb is included.',
  },
  {
    question: 'What is the 3-for-1 logbook scheme?',
    answer:
      'For learner drivers under 25, every 1 hour of professional instruction with an accredited driving instructor counts as 3 logbook hours under the NSW Roads scheme. A 10-hour package therefore counts as 30 logbook hours toward your 120-hour requirement — saving months of supervised driving.',
  },
  {
    question: 'How does 3-for-1 work in practice?',
    answer:
      'After each lesson your instructor fills in your logbook with the hours completed. The logbook records 3 hours per 1 hour of professional instruction automatically. When you reach 120 logbook hours, you are eligible to sit the driving test. You can mix supervised and professional hours.',
  },
  {
    question: 'Can I use your car for the driving test?',
    answer:
      'Yes. We provide a fully inspected automatic dual-control vehicle on test day and pick you up from your preferred location. We know all local test routes at Ryde, Silverwater, Castle Hill, Hornsby, and Chatswood, so you will arrive calm and prepared.',
  },
  {
    question: 'Do you offer overseas licence conversion?',
    answer:
      'Yes. We tailor lessons to help you understand Australian road rules, adapt to local road conditions, and confidently pass the NSW practical driving test. All lessons conducted in automatic dual-control vehicles. The number of lessons needed depends on your existing skill level and which country you are converting from.',
  },
  {
    question: 'How much do lessons cost?',
    answer:
      'A single lesson is $60/hr. Our 5-hour pack is $275 (save $25) and our most popular 10-hour pack is $500 (save $100 and earn 30 logbook hours via the 3-for-1 scheme). There are no hidden fees — prices include free pick-up and drop-off.',
  },
  {
    question: 'How do I book a lesson?',
    answer:
      'You can book online using the booking form on this website, send us a WhatsApp message, or call Mick on 0469 370 978 or Sidra on 0451 331 140. We confirm all bookings within 1 hour and send a WhatsApp reminder the day before your lesson.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We ask for at least 24 hours notice if you need to cancel or reschedule a lesson. Cancellations with less than 24 hours notice may incur a cancellation fee. Lessons cancelled well in advance can be rescheduled at no charge.',
  },
  {
    question: 'Do you offer a pass guarantee?',
    answer:
      'Yes — our 10-hour pack includes a pass guarantee. If you complete all 10 hours with us and do not pass the driving test, we will provide additional lessons at no extra cost until you pass. Terms and conditions apply — please ask when booking.',
  },
  {
    question: 'What should I bring to my lesson?',
    answer:
      'All you need is your current NSW learner licence (L plate). No need to bring your own logbook for the first lesson — your instructor will advise on the correct logbook format after assessing your needs.',
  },
  {
    question: 'I am a very nervous driver — can you help?',
    answer:
      'Absolutely. Both Mick and Sidra have extensive experience with anxious and nervous drivers. We work at your pace, never rush you, and use calm, encouraging communication throughout every lesson. Many of our most successful students started out very nervous.',
  },
  {
    question: 'Do you teach automatic or manual?',
    answer:
      'All our lessons are conducted in modern automatic dual-control vehicles. We teach exclusively in automatic cars. Note that passing your test in an automatic means your licence will be restricted to automatic vehicles unless you separately pass a test in a manual car.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, bank transfer, and most major debit and credit cards. Payment for lesson packs can be made before your first lesson or in full on the day. Please contact us for details.',
  },
  {
    question: 'Do you offer gift vouchers?',
    answer:
      'Yes! Driving lessons make a fantastic gift for new drivers. Gift vouchers are available for any amount and can be sent digitally or as a physical card. Contact Mick or Sidra to arrange a voucher.',
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-[#0f1623] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Frequently Asked <span className="text-[#FFD700]">Questions</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg">Everything you need to know about learning with L Plus P</p>
        </div>
      </section>

      <div className="bg-[#0f1623] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-start">
          <div className="flex-1 min-w-0">
            <FAQ items={allFAQs} showHeading={false} />
          </div>
          <Sidebar />
        </div>
      </div>

      <CTABanner />
    </>
  );
}
