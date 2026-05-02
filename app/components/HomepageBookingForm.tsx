'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const lessonTypes = [
  'Learner driver lesson',
  'Casual single lesson',
  '10-hour package',
  '5-hour package',
  'Driving test preparation',
  'Test day package (use our car)',
  '6 hrs + test day combo',
  'Overseas licence conversion',
  'Senior refresher',
  'EV familiarisation',
];

interface FormData {
  name: string;
  phone: string;
  suburb: string;
  type: string;
  notes: string;
}

export default function HomepageBookingForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    suburb: '',
    type: '',
    notes: '',
  });

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.suburb || !form.type) return;
    setSending(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: '',
          suburb: form.suburb,
          service: form.type,
          package: '',
          confidence: 0,
          preferredDate: '',
          preferredTime: '',
          message: form.notes,
        }),
      });
      if (!res.ok) throw new Error('Booking failed');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag('event', 'booking_form_submission', {
          send_to: 'AW-18072728281',
          value: 420.0,
          currency: 'AUD',
        });
      }
      router.push('/book/thank-you');
    } catch {
      setSubmitError('Something went wrong. Please try again or call Mick on 0469 370 978.');
      setSending(false);
    }
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--type-mono)',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'var(--ink-60)',
    marginBottom: '6px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid var(--hairline)',
    borderRadius: '2px',
    background: '#ffffff',
    fontFamily: 'var(--type-body)',
    fontSize: '15px',
    color: 'var(--navy-ink)',
    outline: 'none',
  };

  return (
    <div
      className="booking-form-card"
      style={{
        background: 'var(--cream)',
        padding: '40px',
        color: 'var(--navy-ink)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--type-display)',
          fontSize: '22px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          margin: 0,
          marginBottom: '6px',
          color: 'var(--navy-ink)',
        }}
      >
        Send us your booking
      </p>
      <p
        style={{
          fontFamily: 'var(--type-mono)',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--ink-60)',
          margin: 0,
          marginBottom: '28px',
        }}
      >
        5 fields · 30 seconds
      </p>

      {submitError && (
        <p
          role="alert"
          style={{
            fontFamily: 'var(--type-body)',
            fontSize: '14px',
            lineHeight: 1.5,
            color: '#b3261e',
            background: 'rgba(179, 38, 30, 0.08)',
            border: '1px solid rgba(179, 38, 30, 0.25)',
            padding: '12px 14px',
            borderRadius: '2px',
            margin: '0 0 18px',
          }}
        >
          {submitError}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '18px' }}>
          <label htmlFor="hbf-name" style={labelStyle}>
            Your name
          </label>
          <input
            id="hbf-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            style={inputStyle}
            autoComplete="name"
          />
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label htmlFor="hbf-phone" style={labelStyle}>
            Phone number
          </label>
          <input
            id="hbf-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            style={inputStyle}
            autoComplete="tel"
            placeholder="04xx xxx xxx"
          />
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label htmlFor="hbf-suburb" style={labelStyle}>
            Your suburb
          </label>
          <input
            id="hbf-suburb"
            type="text"
            required
            value={form.suburb}
            onChange={(e) => update('suburb', e.target.value)}
            style={inputStyle}
            placeholder="e.g. Epping, Castle Hill, North Ryde"
          />
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label htmlFor="hbf-type" style={labelStyle}>
            What type of lesson?
          </label>
          <select
            id="hbf-type"
            required
            value={form.type}
            onChange={(e) => update('type', e.target.value)}
            style={inputStyle}
          >
            <option value="" disabled>
              Choose one&hellip;
            </option>
            {lessonTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label htmlFor="hbf-notes" style={labelStyle}>
            Anything else? (optional)
          </label>
          <textarea
            id="hbf-notes"
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
            rows={3}
            style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
          />
        </div>

        <button
          type="submit"
          disabled={sending || !form.name || !form.phone || !form.suburb || !form.type}
          style={{
            width: '100%',
            background: 'var(--gold)',
            color: 'var(--navy)',
            padding: '18px',
            border: 'none',
            borderRadius: '2px',
            fontFamily: 'var(--type-mono)',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: sending ? 'not-allowed' : 'pointer',
            opacity: sending ? 0.65 : 1,
            marginTop: '8px',
          }}
        >
          {sending ? 'Sending...' : 'Send my booking request →'}
        </button>

        <p
          style={{
            fontFamily: 'var(--type-body)',
            fontSize: '13px',
            color: 'var(--ink-60)',
            marginTop: '16px',
            marginBottom: 0,
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          We confirm within 1 hour during business hours.
          <br />
          Or call Mick directly on{' '}
          <a href="tel:0469370978" style={{ color: 'var(--navy-ink)', fontWeight: 500 }}>
            0469 370 978
          </a>
          .
        </p>
      </form>
    </div>
  );
}
