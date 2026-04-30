'use client';

import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';

const suburbList = [
  'North Ryde', 'East Ryde', 'Ryde', 'West Ryde', 'Macquarie Park',
  'Eastwood', 'Epping', 'Castle Hill', 'North Rocks', 'Carlingford',
  'Beecroft', 'Telopea', 'Dundas', 'Ermington', 'Rydalmere',
  'Melrose Park', 'Meadowbank', 'Rhodes', 'Gladesville', 'Putney',
  'Silverwater', 'Newington', 'Auburn', 'Chatswood',
];

const lessonTypes = [
  'Casual lesson (1 hour)',
  '10-hour package ($550 / $55 per hour)',
  'Mock test',
  'Test day package',
  'Overseas licence conversion',
  'Not sure — please advise',
];

const trustPoints = [
  'Reply within 1 hour',
  '28 years of teaching',
  'Free pick-up & drop-off',
];

interface FormData {
  name: string;
  phone: string;
  suburb: string;
  type: string;
  notes: string;
}

function BookPageInner() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);
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
    setSubmitError(false);
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
      if (!res.ok) throw new Error('Failed');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-18072728281',
          value: 420.0,
          currency: 'AUD',
        });
      }
      router.push('/book/thank-you');
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#ffffff',
    border: '1px solid var(--hairline)',
    padding: '14px 16px',
    fontFamily: 'var(--type-body)',
    fontSize: '15px',
    color: 'var(--navy-ink)',
    borderRadius: '2px',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--type-mono)',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'var(--ink-60)',
    marginBottom: '8px',
  };

  return (
    <div style={{ paddingBottom: '64px' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '0 20px' }}>
        {/* Trust bar with 3 checkmarks */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginTop: '24px',
            marginBottom: '32px',
          }}
        >
          {trustPoints.map((point) => (
            <span
              key={point}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--type-mono)',
                fontSize: '12px',
                color: 'var(--navy-ink)',
                letterSpacing: '0.02em',
              }}
            >
              <span style={{ color: 'var(--gold-deep)', fontWeight: 700 }} aria-hidden="true">
                ✓
              </span>
              {point}
            </span>
          ))}
        </div>

        <form
          id="booking-form"
          onSubmit={handleSubmit}
          style={{
            background: '#ffffff',
            border: '1px solid var(--hairline)',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <label htmlFor="bf-name" style={labelStyle}>
              Full name
            </label>
            <input
              id="bf-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              style={inputStyle}
              placeholder="Your full name"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="bf-phone" style={labelStyle}>
              Phone number
            </label>
            <input
              id="bf-phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              style={inputStyle}
              placeholder="04xx xxx xxx"
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="bf-suburb" style={labelStyle}>
              Suburb
            </label>
            <select
              id="bf-suburb"
              required
              value={form.suburb}
              onChange={(e) => update('suburb', e.target.value)}
              style={inputStyle}
            >
              <option value="">Select your suburb</option>
              {suburbList.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="bf-type" style={labelStyle}>
              What type of lesson?
            </label>
            <select
              id="bf-type"
              required
              value={form.type}
              onChange={(e) => update('type', e.target.value)}
              style={inputStyle}
            >
              <option value="">Select an option</option>
              {lessonTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="bf-notes" style={labelStyle}>
              Anything else? (optional)
            </label>
            <textarea
              id="bf-notes"
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              rows={3}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
              placeholder="Preferred days, test date, anything we should know"
            />
          </div>

          {submitError && (
            <p
              style={{
                fontFamily: 'var(--type-body)',
                fontSize: '14px',
                color: '#b3261e',
                margin: 0,
              }}
            >
              Something went wrong — please call Mick on{' '}
              <a href="tel:0469370978" style={{ color: '#b3261e', textDecoration: 'underline' }}>
                0469 370 978
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={sending || !form.name || !form.phone || !form.suburb || !form.type}
            style={{
              background: 'var(--gold)',
              color: 'var(--navy-ink)',
              padding: '16px',
              fontFamily: 'var(--type-body)',
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              border: 'none',
              borderRadius: '2px',
              cursor: sending ? 'not-allowed' : 'pointer',
              opacity: sending ? 0.6 : 1,
              marginTop: '4px',
            }}
          >
            {sending ? 'Sending…' : 'Send my booking request →'}
          </button>
        </form>

        <p
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '13px',
            color: 'var(--ink-60)',
            textAlign: 'center',
            marginTop: '20px',
            marginBottom: 0,
            lineHeight: 1.6,
          }}
        >
          Prefer to call? Reach Mick on{' '}
          <a href="tel:0469370978" style={{ color: 'var(--navy-ink)', borderBottom: '1px solid var(--hairline)' }}>
            0469 370 978
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default function BookForm() {
  return (
    <Suspense>
      <BookPageInner />
    </Suspense>
  );
}
