'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const suburbList = [
  'North Ryde', 'East Ryde', 'Ryde', 'West Ryde', 'Macquarie Park',
  'Eastwood', 'Epping', 'Castle Hill', 'North Rocks', 'Carlingford',
  'Beecroft', 'Telopea', 'Dundas', 'Ermington', 'Rydalmere',
  'Melrose Park', 'Meadowbank', 'Rhodes', 'Gladesville', 'Putney',
  'Silverwater', 'Newington', 'Auburn', 'Chatswood',
];

const serviceOptions = [
  {
    id: 'learner',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: 'Learner Driver Lessons',
    badge: null,
  },
  {
    id: 'test-prep',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Driving Test Preparation',
    badge: null,
  },
  {
    id: 'overseas',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
      </svg>
    ),
    label: 'Overseas Licence Conversion',
    badge: null,
  },
  {
    id: 'logbook',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: 'Logbook Hour Assistance',
    badge: null,
  },
  {
    id: 'ev',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: 'EV Familiarisation Course',
    badge: 'NEW',
  },
  {
    id: 'senior',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Senior Driver Refresher',
    badge: null,
  },
  {
    id: 'pplate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h10l2-2zM13 7h5l3 3v3h-2" />
      </svg>
    ),
    label: 'P-Plate Confidence Course',
    badge: null,
  },
];

// Grouped package options with from vs exact logic
const packageGroups = [
  {
    groupId: 'casual',
    groupTitle: 'Casual Lessons',
    groupNote: 'Starting rates — exact price confirmed when we contact you (usually within 1 hour).',
    isFrom: true,
    items: [
      { id: 'casual-1h',   label: '1 Hour Lesson',   priceText: 'from $60',  priceSummary: 'from $60',  note: 'Most flexible' },
      { id: 'casual-1h5', label: '1.5 Hour Lesson', priceText: 'from $85',  priceSummary: 'from $85',  note: 'Great for beginners' },
      { id: 'casual-2h',   label: '2 Hour Lesson',   priceText: 'from $110', priceSummary: 'from $110', note: 'Deep practice' },
    ],
  },
  {
    groupId: 'packages',
    groupTitle: 'Lesson Packages',
    groupNote: 'Fixed price — pay now and your lessons are locked in.',
    isFrom: false,
    items: [
      { id: 'pkg-5h',  label: '5 Hour Package',  priceText: '$275', priceSummary: '$275', note: 'Save $25',  featured: false },
      { id: 'pkg-10h', label: '10 Hour Package', priceText: '$550', priceSummary: '$550', note: 'Save $50 · 30 logbook hrs', featured: true },
    ],
  },
  {
    groupId: 'testprep',
    groupTitle: 'Test Preparation',
    groupNote: 'Fixed prices — includes everything listed.',
    isFrom: false,
    items: [
      { id: 'test-mock', label: 'Mock Test',           priceText: '$65',  priceSummary: '$65',  note: 'Practice the real routes' },
      { id: 'test-day',  label: 'Test Day Package',    priceText: '$170', priceSummary: '$170', note: '1hr warm-up + car for test' },
      { id: 'test-full', label: '6 Hours + Test Day',  priceText: '$500', priceSummary: '$500', note: 'Best value for test prep' },
    ],
  },
];

// Flat lookup for summary display
const allPackageOptions = packageGroups.flatMap((g) => g.items);

const TOTAL_STEPS = 5;

interface FormData {
  confidence: number;
  service: string;
  package: string;
  suburb: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

const HOUR_SLOTS = [
  '7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm',
  '1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm',
];

const DAY_NAMES = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function BookPageInner() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && serviceOptions.some((s) => s.id === serviceParam)) {
      setForm((prev) => ({ ...prev, service: serviceParam }));
      setStep(3); // skip straight to package selection
    }
  }, [searchParams]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [form, setForm] = useState<FormData>({
    confidence: 0,
    service: '',
    package: '',
    suburb: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function prevMonth() {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
    setSelectedDate(null);
    setSelectedTime(null);
  }

  function nextMonth() {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
    setSelectedDate(null);
    setSelectedTime(null);
  }

  function formatSelectedDate(d: Date) {
    return d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  function formatDateLabel(d: Date) {
    return d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
  }

  function advance() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleConfirm() {
    setSending(true);
    setSubmitError(false);
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          suburb: form.suburb,
          service: selectedService?.label ?? form.service,
          package: selectedPackage ? `${selectedPackage.label} — ${selectedPackage.priceSummary}` : '',
          confidence: form.confidence,
          preferredDate: selectedDate ? formatSelectedDate(selectedDate) : '',
          preferredTime: selectedTime ?? '',
          message: form.message,
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
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  }

  const selectedService = serviceOptions.find((s) => s.id === form.service);
  const selectedPackage = allPackageOptions.find((p) => p.id === form.package);
  const progressPct = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  const confidenceLabels = [
    '', 'Not confident at all', 'Slightly confident',
    'Fairly confident', 'Quite confident', 'Very confident',
  ];

  // Light theme inputs
  const inputClass =
    'w-full font-sans text-[#0a0f1e] placeholder-[#7a8aaa] rounded px-4 py-3 focus:outline-none focus:border-[#F5C842] transition-colors';
  const inputStyle = {
    background: '#ffffff',
    border: '1px solid #c8d4f0',
  };

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: '#f4f7ff' }}
      >
        <div
          className="rounded-xl p-8 max-w-md w-full text-center flex flex-col items-center gap-5"
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f4',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #F5C842, #d4a91a)' }}
          >
            <svg className="w-8 h-8 text-[#0a0f1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-syne font-bold text-2xl text-[#0a0f1e]">Booking Received!</h2>
          <p className="font-sans text-[#3a4a6a] text-sm leading-relaxed">
            Thanks{form.name ? ` ${form.name}` : ''}! We'll be in contact with you shortly to confirm your lesson.
          </p>
          <div
            className="w-full rounded-xl p-4 flex flex-col gap-2 text-sm text-left"
            style={{ background: '#f4f7ff', border: '1px solid #e2e8f4' }}
          >
            {selectedService && (
              <div className="flex justify-between">
                <span className="font-sans text-[#7a8aaa]">Service</span>
                <span className="font-sans text-[#0a0f1e]">{selectedService.label}</span>
              </div>
            )}
            {selectedPackage && (
              <div className="flex justify-between">
                <span className="font-sans text-[#7a8aaa]">Package</span>
                <span className="font-sans text-[#0a0f1e]">{selectedPackage.label} — {selectedPackage.priceSummary}</span>
              </div>
            )}
            {form.suburb && (
              <div className="flex justify-between">
                <span className="font-sans text-[#7a8aaa]">Suburb</span>
                <span className="font-sans text-[#0a0f1e]">{form.suburb}</span>
              </div>
            )}
          </div>
          <Link
            href="/"
            className="font-syne font-bold text-[#0a0f1e] px-6 py-3 rounded w-full text-center hover:bg-[#d4a91a] transition-colors"
            style={{ background: 'var(--gold)' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-12" style={{ backgroundColor: '#f4f7ff' }}>
      <div className="max-w-xl mx-auto px-4">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-[#7a8aaa] text-xs">Step {step} of {TOTAL_STEPS}</span>
            <span className="font-sans text-[#7a8aaa] text-xs">{Math.round(progressPct)}% complete</span>
          </div>
          <div className="w-full rounded-full h-1.5" style={{ background: '#e2e8f4' }}>
            <div
              className="h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%`, background: 'var(--gold)' }}
            />
          </div>
        </div>

        {/* BUG 1 FIX: solid opaque white card, no transparency, no backdrop-filter */}
        {/* BUG 2 FIX: id="booking-form" for anchor link from pricing cards */}
        <div
          id="booking-form"
          className="rounded-xl p-6 sm:p-8"
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f4',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            position: 'relative',
            zIndex: 1,
          }}
        >

          {/* STEP 1 — Confidence rating */}
          {step === 1 && (
            <div className="flex flex-col items-center gap-6">
              <h2 className="font-syne font-bold text-xl text-[#0a0f1e] text-center">
                How confident are you with road rules and driving?
              </h2>
              <p className="font-sans text-[#7a8aaa] text-sm text-center">Click a star to continue</p>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => { update('confidence', star); advance(); }}
                    className="group flex flex-col items-center gap-1"
                  >
                    <svg
                      className={`w-12 h-12 transition-colors ${
                        star <= form.confidence ? 'text-[#F5C842]' : 'text-[#dde4f0] group-hover:text-[#F5C842]'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-mono text-xs text-[#7a8aaa]">{star}</span>
                  </button>
                ))}
              </div>
              {form.confidence > 0 && (
                <p className="font-sans text-[#d4a91a] text-sm font-medium">{confidenceLabels[form.confidence]}</p>
              )}
            </div>
          )}

          {/* STEP 2 — Service selection */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-syne font-bold text-xl text-[#0a0f1e] mb-1">
                What are you looking to do?
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {serviceOptions.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => { update('service', service.id); advance(); }}
                    className="relative flex items-center gap-3 p-4 rounded-xl text-left"
                    style={{
                      border: `1.5px solid ${form.service === service.id ? '#F5C842' : '#c8d4f0'}`,
                      background: form.service === service.id ? 'rgba(245,200,66,0.08)' : '#ffffff',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (form.service !== service.id) {
                        e.currentTarget.style.background = '#f0f4ff';
                        e.currentTarget.style.borderColor = '#a0b0d0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (form.service !== service.id) {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.borderColor = '#c8d4f0';
                      }
                    }}
                  >
                    {service.badge && (
                      <span
                        className="absolute top-2 right-2 text-[#0a0f1e] text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                        style={{ background: 'var(--gold)' }}
                      >
                        {service.badge}
                      </span>
                    )}
                    <div className={form.service === service.id ? 'text-[#d4a91a]' : 'text-[#7a8aaa]'}>
                      {service.icon}
                    </div>
                    <span
                      className="font-sans font-semibold text-sm"
                      style={{ color: form.service === service.id ? '#0a0f1e' : '#3a4a6a' }}
                    >
                      {service.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 — Package / pricing selection */}
          {step === 3 && (
            <div className="flex flex-col gap-6">
              <h2 className="font-syne font-bold text-xl text-[#0a0f1e]">
                Choose a lesson type
              </h2>

              {packageGroups.map((group) => (
                <div key={group.groupId}>
                  {/* Group header */}
                  <div className="mb-3">
                    <h3 className="font-sans font-semibold text-sm text-[#0a0f1e]">{group.groupTitle}</h3>
                    <p className="font-sans text-xs text-[#7a8aaa] mt-0.5">{group.groupNote}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    {group.items.map((pkg) => {
                      const isSelected = form.package === pkg.id;
                      const isFeatured = 'featured' in pkg && pkg.featured;

                      return (
                        <button
                          key={pkg.id}
                          onClick={() => { update('package', pkg.id); advance(); }}
                          className="relative flex items-center justify-between p-4 rounded-xl transition-all text-left"
                          style={{
                            border: `1.5px solid ${
                              isSelected ? '#F5C842' : isFeatured ? 'rgba(245,200,66,0.35)' : '#c8d4f0'
                            }`,
                            background: isSelected ? 'rgba(245,200,66,0.08)' : '#ffffff',
                            transition: 'all 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = '#f0f4ff';
                              e.currentTarget.style.borderColor = '#a0b0d0';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = '#ffffff';
                              e.currentTarget.style.borderColor = isFeatured ? 'rgba(245,200,66,0.35)' : '#c8d4f0';
                            }
                          }}
                        >
                          {isFeatured && !isSelected && (
                            <span
                              className="absolute -top-2.5 left-4 font-sans text-[#0a0f1e] text-[10px] font-semibold px-2 py-0.5 rounded-full"
                              style={{ background: 'var(--gold)' }}
                            >
                              Most Popular
                            </span>
                          )}
                          <div>
                            <span
                              className="font-sans font-semibold text-sm block"
                              style={{ color: isSelected ? '#0a0f1e' : '#3a4a6a' }}
                            >
                              {pkg.label}
                            </span>
                            <span className="font-sans text-xs text-[#7a8aaa] mt-0.5 block">{pkg.note}</span>
                          </div>
                          <div className="text-right flex-shrink-0 ml-4">
                            {group.isFrom && (
                              <span className="font-sans text-[10px] text-[#7a8aaa] block">from</span>
                            )}
                            <span className="font-mono font-medium text-[#d4a91a] text-base">
                              {pkg.priceText.replace('from ', '')}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4 — Suburb */}
          {step === 4 && (
            <div className="flex flex-col gap-5">
              <h2 className="font-syne font-bold text-xl text-[#0a0f1e]">
                Which suburb are you in?
              </h2>
              <select
                value={form.suburb}
                onChange={(e) => update('suburb', e.target.value)}
                className={inputClass}
                style={inputStyle}
              >
                <option value="">Select your suburb</option>
                {suburbList.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          {/* STEP 5 — Details */}
          {step === 5 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-syne font-bold text-xl text-[#0a0f1e] mb-1">
                Your Details
              </h2>

              <div>
                <label className="block font-sans text-sm text-[#3a4a6a] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block font-sans text-sm text-[#3a4a6a] mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="04xx xxx xxx"
                />
              </div>
              <div>
                <label className="block font-sans text-sm text-[#3a4a6a] mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="you@email.com"
                />
              </div>
              {/* ── INLINE CALENDAR ───────────────────────────────── */}
              <div>
                <label className="block font-sans text-sm text-[#3a4a6a] mb-0.5">Preferred date &amp; time</label>
                <p className="font-sans text-xs text-[#7a8aaa] mb-3">(optional) — we'll confirm availability when we call</p>
                <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #e2e8f4' }}>
                  {/* Month header */}
                  <div className="flex items-center justify-between px-4 py-3" style={{ background: '#f4f7ff' }}>
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a4a6a] hover:bg-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="font-sans font-semibold text-sm text-[#0a0f1e]">
                      {MONTH_NAMES[calMonth]} {calYear}
                    </span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a4a6a] hover:bg-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  {/* Day headers */}
                  <div className="grid grid-cols-7 px-2 pt-2">
                    {DAY_NAMES.map((d) => (
                      <div key={d} className="text-center font-sans text-[10px] font-semibold text-[#7a8aaa] uppercase py-1">{d}</div>
                    ))}
                  </div>
                  {/* Date grid */}
                  <div className="grid grid-cols-7 gap-0.5 px-2 pb-3">
                    {(() => {
                      const firstDay = new Date(calYear, calMonth, 1);
                      // Mon=0 offset: getDay() returns 0=Sun,1=Mon...
                      const startOffset = (firstDay.getDay() + 6) % 7;
                      const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
                      const cells: React.ReactNode[] = [];
                      for (let i = 0; i < startOffset; i++) cells.push(<div key={`e${i}`} />);
                      for (let d = 1; d <= daysInMonth; d++) {
                        const date = new Date(calYear, calMonth, d);
                        const isSunday = date.getDay() === 0;
                        const isPast = date < today;
                        const disabled = isSunday || isPast;
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        cells.push(
                          <button
                            key={d}
                            type="button"
                            disabled={disabled}
                            onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                            className="aspect-square rounded-lg text-xs font-sans font-medium flex items-center justify-center transition-all duration-150"
                            style={{
                              background: isSelected ? '#F5C842' : 'transparent',
                              color: disabled ? '#c8d4f0' : isSelected ? '#0a0f1e' : '#0a0f1e',
                              fontWeight: isSelected ? 700 : 400,
                              cursor: disabled ? 'default' : 'pointer',
                              border: isSelected ? '1.5px solid #F5C842' : '1.5px solid transparent',
                            }}
                            onMouseEnter={(e) => { if (!disabled && !isSelected) { e.currentTarget.style.background = '#fffbea'; e.currentTarget.style.borderColor = '#F5C842'; } }}
                            onMouseLeave={(e) => { if (!disabled && !isSelected) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; } }}
                          >
                            {d}
                          </button>
                        );
                      }
                      return cells;
                    })()}
                  </div>
                </div>

                {/* Time slots — shown after date selected */}
                {selectedDate && (
                  <div className="mt-4">
                    <p className="font-sans text-sm font-semibold text-[#0a0f1e] mb-2">
                      Available times — {formatDateLabel(selectedDate)}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {HOUR_SLOTS.map((slot) => {
                        const active = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className="py-2 px-3 rounded-xl text-xs font-sans font-medium text-center transition-all duration-150"
                            style={{
                              border: `1.5px solid ${active ? '#F5C842' : '#c8d4f0'}`,
                              background: active ? '#F5C842' : '#ffffff',
                              color: active ? '#0a0f1e' : '#3a4a6a',
                              fontWeight: active ? 700 : 400,
                            }}
                            onMouseEnter={(e) => { if (!active) { e.currentTarget.style.background = '#fffbea'; e.currentTarget.style.borderColor = '#F5C842'; } }}
                            onMouseLeave={(e) => { if (!active) { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#c8d4f0'; } }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block font-sans text-sm text-[#3a4a6a] mb-1.5">Message <span className="text-[#7a8aaa]">(optional)</span></label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={inputClass}
                  style={{ ...inputStyle, resize: 'none' }}
                  rows={3}
                  placeholder="Anything you'd like us to know..."
                />
              </div>

              {/* Booking summary */}
              <div
                className="rounded-xl p-4 flex flex-col gap-2.5 text-sm mt-2"
                style={{ background: '#f4f7ff', border: '1px solid #e2e8f4' }}
              >
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#7a8aaa] mb-1">
                  Booking Summary
                </p>
                {selectedService && (
                  <div className="flex justify-between">
                    <span className="font-sans text-[#7a8aaa]">Service</span>
                    <span className="font-sans text-[#0a0f1e]">{selectedService.label}</span>
                  </div>
                )}
                {selectedPackage && (
                  <div className="flex justify-between">
                    <span className="font-sans text-[#7a8aaa]">Package</span>
                    <span className="font-mono text-[#d4a91a] font-medium">
                      {selectedPackage.label} — {selectedPackage.priceSummary}
                    </span>
                  </div>
                )}
                {form.suburb && (
                  <div className="flex justify-between">
                    <span className="font-sans text-[#7a8aaa]">Suburb</span>
                    <span className="font-sans text-[#0a0f1e]">{form.suburb}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-sans text-[#7a8aaa]">Confidence</span>
                  <span className="font-sans text-[#0a0f1e]">{form.confidence}/5</span>
                </div>
              </div>

              {submitError && (
                <p className="font-sans text-sm text-red-500 text-center">
                  Something went wrong — please call Mick on 0469 370 978
                </p>
              )}
              <button
                onClick={handleConfirm}
                disabled={!form.name || !form.phone || sending}
                className="font-syne font-bold text-[#0a0f1e] py-3.5 rounded transition-all duration-200 hover:bg-[#d4a91a] disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                style={{ background: 'var(--gold)' }}
              >
                {sending ? 'Sending...' : 'Confirm Booking'}
              </button>
            </div>
          )}

          {/* Step navigation */}
          <div className="flex items-center justify-between mt-6">
            {step > 1 ? (
              <button
                onClick={back}
                className="font-sans text-[#7a8aaa] hover:text-[#0a0f1e] text-sm font-medium transition-colors"
              >
                ← Previous
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={advance}
              className="font-sans text-[#7a8aaa] hover:text-[#0a0f1e] text-sm font-medium transition-colors"
            >
              Next →
            </button>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-10">
          <h2 className="font-syne font-bold text-lg text-[#0a0f1e] text-center mb-6">
            What Happens Next
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: '1', text: 'We confirm within 1 hour' },
              { num: '2', text: 'WhatsApp reminder 24hrs before' },
              { num: '3', text: 'Instructor picks you up' },
            ].map((item) => (
              <div
                key={item.num}
                className="flex flex-col items-center gap-2 text-center rounded-xl p-4"
                style={{ background: '#ffffff', border: '1px solid #e2e8f4' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-syne font-bold text-[#0a0f1e]"
                  style={{ background: 'var(--gold)' }}
                >
                  {item.num}
                </div>
                <p className="font-sans text-[#3a4a6a] text-xs leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
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
