'use client';

import { useState } from 'react';
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
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: 'Learner Driver Lessons',
    badge: null,
  },
  {
    id: 'test-prep',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Driving Test Preparation',
    badge: null,
  },
  {
    id: 'overseas',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
      </svg>
    ),
    label: 'Overseas Licence Conversion',
    badge: null,
  },
  {
    id: 'logbook',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: 'Logbook Hour Assistance',
    badge: null,
  },
  {
    id: 'ev',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: 'EV Familiarisation Course',
    badge: 'NEW',
  },
  {
    id: 'senior',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Senior Driver Refresher',
    badge: null,
  },
  {
    id: 'pplate',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h10l2-2zM13 7h5l3 3v3h-2" />
      </svg>
    ),
    label: 'P-Plate Confidence Course',
    badge: null,
  },
];

const packageOptions = [
  { id: 'single', label: 'Single Lesson', price: '$60/hr', note: 'Pay as you go', featured: false },
  { id: 'five', label: '5-Hour Pack', price: '$275', note: 'Save $25', featured: false },
  { id: 'ten', label: '10-Hour Pack', price: '$500', note: 'Most Popular — 30 logbook hours', featured: true },
];

const TOTAL_STEPS = 5;

interface FormData {
  confidence: number;
  service: string;
  package: string;
  suburb: string;
  name: string;
  phone: string;
  email: string;
  date: string;
}

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    confidence: 0,
    service: '',
    package: '',
    suburb: '',
    name: '',
    phone: '',
    email: '',
    date: '',
  });

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function advance() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleConfirm() {
    // TODO: Replace with Stripe payment — see README.md for setup instructions
    // When ready, create a Stripe checkout session here and redirect
    setSubmitted(true);
  }

  const selectedService = serviceOptions.find((s) => s.id === form.service);
  const selectedPackage = packageOptions.find((p) => p.id === form.package);
  const progressPct = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  const confidenceLabels = ['', 'Not confident at all', 'Slightly confident', 'Fairly confident', 'Quite confident', 'Very confident'];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0f1623] flex items-center justify-center px-4">
        <div className="bg-[#1a2235] rounded-2xl p-8 max-w-md w-full text-center flex flex-col items-center gap-5">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-[#0f1623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-white">Booking Received!</h2>
          <p className="text-gray-300 text-sm">
            Thanks{form.name ? ` ${form.name}` : ''}! We will confirm your booking via WhatsApp within 1 hour.
          </p>
          <div className="flex flex-col gap-2 w-full text-sm bg-[#0f1623] rounded-xl p-4 text-left">
            {selectedService && <p className="text-gray-300"><span className="text-gray-500">Service:</span> {selectedService.label}</p>}
            {selectedPackage && <p className="text-gray-300"><span className="text-gray-500">Package:</span> {selectedPackage.label} — {selectedPackage.price}</p>}
            {form.suburb && <p className="text-gray-300"><span className="text-gray-500">Suburb:</span> {form.suburb}</p>}
          </div>
          <Link href="/" className="bg-[#FFD700] text-[#0f1623] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors w-full text-center">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f1623] min-h-screen py-12">
      {/* Hero */}
      <div className="text-center px-4 mb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Book Your <span className="text-[#FFD700]">Lesson</span>
        </h1>
        <p className="mt-2 text-gray-300">We will WhatsApp you within the hour to confirm</p>
      </div>

      <div className="max-w-xl mx-auto px-4">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-xs">Step {step} of {TOTAL_STEPS}</span>
            <span className="text-gray-400 text-xs">{Math.round(progressPct)}% complete</span>
          </div>
          <div className="w-full bg-[#1a2235] rounded-full h-2">
            <div
              className="bg-[#FFD700] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="bg-[#1a2235] rounded-2xl p-6 sm:p-8">
          {/* STEP 1 — Confidence rating */}
          {step === 1 && (
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-white font-bold text-xl text-center">
                How confident are you with road rules and driving?
              </h2>
              <p className="text-gray-400 text-sm text-center">Click a star to continue</p>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => { update('confidence', star); advance(); }}
                    className="group flex flex-col items-center gap-1"
                  >
                    <svg
                      className={`w-12 h-12 transition-colors ${star <= form.confidence ? 'text-[#FFD700]' : 'text-gray-600 group-hover:text-yellow-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-gray-500">{star}</span>
                  </button>
                ))}
              </div>
              {form.confidence > 0 && (
                <p className="text-[#FFD700] text-sm font-medium">{confidenceLabels[form.confidence]}</p>
              )}
            </div>
          )}

          {/* STEP 2 — Service selection */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-bold text-xl mb-1">What are you looking to do?</h2>
              <div className="grid grid-cols-1 gap-2">
                {serviceOptions.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => { update('service', service.id); advance(); }}
                    className={`relative flex items-center gap-3 p-4 rounded-xl border-2 transition-colors text-left ${
                      form.service === service.id
                        ? 'border-[#FFD700] bg-[#FFD700]/10'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    {service.badge && (
                      <span className="absolute top-2 right-2 bg-[#FFD700] text-[#0f1623] text-xs font-bold px-1.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                    <div className={form.service === service.id ? 'text-[#FFD700]' : 'text-gray-400'}>
                      {service.icon}
                    </div>
                    <span className={`font-semibold text-sm ${form.service === service.id ? 'text-white' : 'text-gray-300'}`}>
                      {service.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 — Package selection */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-bold text-xl mb-1">Which package suits you?</h2>
              {packageOptions.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => { update('package', pkg.id); advance(); }}
                  className={`relative flex items-center justify-between p-4 rounded-xl border-2 transition-colors text-left ${
                    form.package === pkg.id
                      ? 'border-[#FFD700] bg-[#FFD700]/10'
                      : pkg.featured
                      ? 'border-gray-500 hover:border-[#FFD700]'
                      : 'border-gray-700 hover:border-gray-500'
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-2.5 left-4 bg-[#FFD700] text-[#0f1623] text-xs font-bold px-2 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <div className={`font-semibold ${form.package === pkg.id ? 'text-white' : 'text-gray-300'}`}>
                      {pkg.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{pkg.note}</div>
                  </div>
                  <span className="text-[#FFD700] font-bold text-lg">{pkg.price}</span>
                </button>
              ))}
            </div>
          )}

          {/* STEP 4 — Suburb */}
          {step === 4 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-white font-bold text-xl">Which suburb are you in?</h2>
              <select
                value={form.suburb}
                onChange={(e) => update('suburb', e.target.value)}
                className="w-full bg-[#0f1623] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700]"
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
              <h2 className="text-white font-bold text-xl mb-1">Your Details</h2>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full bg-[#0f1623] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD700]"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full bg-[#0f1623] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD700]"
                  placeholder="04xx xxx xxx"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full bg-[#0f1623] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD700]"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className="w-full bg-[#0f1623] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              {/* Summary */}
              <div className="bg-[#0f1623] rounded-xl p-4 flex flex-col gap-2 text-sm mt-2">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Booking Summary</p>
                {selectedService && <div className="flex justify-between"><span className="text-gray-400">Service</span><span className="text-white">{selectedService.label}</span></div>}
                {selectedPackage && <div className="flex justify-between"><span className="text-gray-400">Package</span><span className="text-white">{selectedPackage.label} — {selectedPackage.price}</span></div>}
                {form.suburb && <div className="flex justify-between"><span className="text-gray-400">Suburb</span><span className="text-white">{form.suburb}</span></div>}
                <div className="flex justify-between"><span className="text-gray-400">Confidence</span><span className="text-white">{form.confidence}/5 stars</span></div>
              </div>

              <button
                onClick={handleConfirm}
                disabled={!form.name || !form.phone}
                className="bg-[#FFD700] text-[#0f1623] font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2"
              >
                Confirm Booking
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {step > 1 ? (
              <button onClick={back} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                ← Previous
              </button>
            ) : (
              <div />
            )}
            <button onClick={advance} className="text-gray-500 hover:text-gray-300 text-sm font-medium transition-colors">
              Next →
            </button>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-10">
          <h2 className="text-white font-bold text-lg text-center mb-5">What Happens Next</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: '1', text: 'We confirm within 1 hour' },
              { num: '2', text: 'WhatsApp reminder 24hrs before' },
              { num: '3', text: 'Instructor picks you up' },
            ].map((item) => (
              <div key={item.num} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#0f1623] font-extrabold">
                  {item.num}
                </div>
                <p className="text-gray-400 text-xs">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
