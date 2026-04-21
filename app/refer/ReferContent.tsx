'use client';

import { useState } from 'react';
import Link from 'next/link';

function buildMessage(name: string): string {
  const displayName = name.trim() || 'a friend';
  return `Hey, ${displayName} recommended L Plus P Driving School — mention their name when you book and you both get 10% off your next lesson. Book here: https://lppdrivingschool.com.au/book`;
}

export default function ReferContent() {
  const [name, setName] = useState('');
  const [copied, setCopied] = useState(false);

  const message = buildMessage(name);
  const encodedMessage = encodeURIComponent(message);
  const hasName = name.trim().length > 0;

  async function copyMessage() {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f4f7ff' }}>

      {/* Hero */}
      <section className="bg-[#0f1623] py-16 sm:py-24 text-center px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: '#f5c842' }}
          >
            <svg className="w-7 h-7 text-[#0d1b3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7a3 3 0 10-3-3M12 7a3 3 0 113-3" />
            </svg>
          </div>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl text-white">
            Refer a mate.{' '}
            <span style={{ color: '#f5c842' }}>You both save 10%.</span>
          </h1>
          <p className="font-sans text-gray-300 text-lg max-w-lg">
            Get a friend to mention your name when they book their first lesson with L Plus P — you both get 10% off your next booking. No catch, no limit.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-10">

        {/* How it works */}
        <div
          className="rounded-2xl p-6 flex flex-col gap-5"
          style={{ background: '#ffffff', border: '1px solid #e2e8f4' }}
        >
          <h2 className="font-syne font-bold text-xl text-[#0d1b3e]">How it works</h2>
          <ol className="flex flex-col gap-4">
            {[
              { num: '1', text: 'Share a message with your mate using the buttons below' },
              { num: '2', text: 'They book their first lesson (any type, any package) and mention your name when they get in touch' },
              { num: '3', text: 'You both get 10% off your next booking — Mick will apply it when you book' },
            ].map((step) => (
              <li key={step.num} className="flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-syne font-bold text-sm text-[#0d1b3e]"
                  style={{ background: '#f5c842' }}
                >
                  {step.num}
                </div>
                <span className="font-sans text-[#3a4a6a] text-sm leading-relaxed pt-1">{step.text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Share section */}
        <div
          className="rounded-2xl p-6 flex flex-col gap-5"
          style={{ background: '#ffffff', border: '1px solid #e2e8f4' }}
        >
          <h2 className="font-syne font-bold text-xl text-[#0d1b3e]">Share with a mate</h2>

          <div>
            <label className="block font-sans text-sm text-[#3a4a6a] mb-2">Your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full font-sans text-[#0a0f1e] placeholder-[#7a8aaa] rounded-lg px-4 py-3 focus:outline-none focus:border-[#f5c842] transition-colors"
              style={{ background: '#f4f7ff', border: '1px solid #c8d4f0' }}
            />
          </div>

          {/* Preview message */}
          <div
            className="rounded-lg p-4 text-sm font-sans text-[#3a4a6a] leading-relaxed italic"
            style={{ background: '#f4f7ff', border: '1px solid #e2e8f4' }}
          >
            &ldquo;{message}&rdquo;
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-sans font-semibold text-sm px-5 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#25D366', color: '#ffffff' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {hasName ? `Share as ${name.trim()} via WhatsApp` : 'Share via WhatsApp'}
            </a>
            <a
              href={`sms:?body=${encodedMessage}`}
              className="flex items-center justify-center gap-2 font-sans font-semibold text-sm px-5 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#0d1b3e', color: '#ffffff' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Send via SMS
            </a>
            <button
              onClick={copyMessage}
              className="flex items-center justify-center gap-2 font-sans font-semibold text-sm px-5 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#e2e8f4', color: '#0d1b3e' }}
            >
              {copied ? '✓ Copied!' : 'Copy message'}
            </button>
          </div>
        </div>

        {/* No limits */}
        <div
          className="rounded-2xl p-5 text-center"
          style={{ background: '#f5c842' }}
        >
          <p className="font-syne font-bold text-[#0d1b3e] text-lg">
            No cap — refer as many mates as you want.
          </p>
          <p className="font-sans text-[#0d1b3e] text-sm mt-1">
            Every successful referral = 10% off for both of you.
          </p>
        </div>

        {/* Fine print */}
        <div className="text-center flex flex-col gap-1">
          <p className="font-sans text-[#7a8aaa] text-xs">Discount applied to next booking · Contact us to claim · Valid for 6 months</p>
          <Link href="/book" className="font-sans text-sm text-[#3a4a6a] underline underline-offset-4 hover:text-[#0a0f1e] transition-colors">
            Ready to book? →
          </Link>
        </div>

      </div>
    </div>
  );
}
