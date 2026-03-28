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

const services = [
  {
    id: 'learner',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: 'Learner Driver Lessons',
  },
  {
    id: 'test-prep',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Driving Test Preparation',
  },
  {
    id: 'overseas',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    label: 'Overseas Licence Conversion',
  },
  {
    id: 'logbook',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: 'Logbook Hour Assistance',
  },
];

const packages = [
  { id: 'single', label: 'Single Lesson', price: '$60/hr', note: 'Pay as you go' },
  { id: 'five', label: '5-Hour Pack', price: '$275', note: 'Save $25' },
  { id: 'ten', label: '10-Hour Pack', price: '$500', note: 'Most Popular — 30 logbook hours', featured: true },
];

interface FormData {
  service: string;
  package: string;
  name: string;
  phone: string;
  email: string;
  suburb: string;
  date: string;
  notes: string;
}

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    service: '',
    package: '',
    name: '',
    phone: '',
    email: '',
    suburb: '',
    date: '',
    notes: '',
  });

  function update(key: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function canAdvance() {
    if (step === 1) return form.service !== '';
    if (step === 2) return form.package !== '';
    if (step === 3) return form.name !== '' && form.phone !== '' && form.suburb !== '';
    return true;
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  const selectedService = services.find((s) => s.id === form.service);
  const selectedPackage = packages.find((p) => p.id === form.package);

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
            Thanks {form.name}! We will confirm your booking via WhatsApp within 1 hour.
          </p>
          <Link href="/" className="bg-[#FFD700] text-[#0f1623] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0f1623] min-h-screen py-16">
      {/* Hero */}
      <div className="text-center px-4 mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Book Your <span className="text-[#FFD700]">Lesson Online</span>
        </h1>
        <p className="mt-3 text-gray-300 text-lg">Confirmed instantly — we will WhatsApp you within the hour</p>
      </div>

      {/* Form card */}
      <div className="max-w-lg mx-auto px-4">
        <div className="bg-[#1a2235] rounded-2xl p-6 sm:p-8">
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    s <= step ? 'bg-[#FFD700] text-[#0f1623]' : 'bg-[#0f1623] text-gray-500 border border-gray-700'
                  }`}
                >
                  {s < step ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                {s < 4 && (
                  <div className={`h-0.5 w-12 sm:w-20 ${s < step ? 'bg-[#FFD700]' : 'bg-gray-700'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Select service */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-bold text-xl mb-2">Select a Service</h2>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => update('service', service.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-colors text-left ${
                    form.service === service.id
                      ? 'border-[#FFD700] bg-[#FFD700]/10'
                      : 'border-gray-700 hover:border-gray-500'
                  }`}
                >
                  <div className={form.service === service.id ? 'text-[#FFD700]' : 'text-gray-400'}>
                    {service.icon}
                  </div>
                  <span className={`font-semibold ${form.service === service.id ? 'text-white' : 'text-gray-300'}`}>
                    {service.label}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Select package */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-bold text-xl mb-2">Select a Package</h2>
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => update('package', pkg.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors text-left ${
                    form.package === pkg.id
                      ? 'border-[#FFD700] bg-[#FFD700]/10'
                      : 'border-gray-700 hover:border-gray-500'
                  }`}
                >
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

          {/* Step 3: Your details */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-white font-bold text-xl mb-2">Your Details</h2>
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
                <label className="block text-sm text-gray-400 mb-1">Your Suburb *</label>
                <select
                  value={form.suburb}
                  onChange={(e) => update('suburb', e.target.value)}
                  className="w-full bg-[#0f1623] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700]"
                >
                  <option value="">Select suburb</option>
                  {suburbList.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
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
              <div>
                <label className="block text-sm text-gray-400 mb-1">Additional Notes</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  rows={3}
                  className="w-full bg-[#0f1623] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD700] resize-none"
                  placeholder="Any extra info (e.g. nervous driver, test date...)"
                />
              </div>
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-white font-bold text-xl mb-2">Confirm Your Booking</h2>
              <div className="bg-[#0f1623] rounded-xl p-5 flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Service</span>
                  <span className="text-white font-medium">{selectedService?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Package</span>
                  <span className="text-white font-medium">{selectedPackage?.label} — {selectedPackage?.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Name</span>
                  <span className="text-white font-medium">{form.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-white font-medium">{form.phone}</span>
                </div>
                {form.email && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email</span>
                    <span className="text-white font-medium">{form.email}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-400">Suburb</span>
                  <span className="text-white font-medium">{form.suburb}</span>
                </div>
                {form.date && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Preferred Date</span>
                    <span className="text-white font-medium">{form.date}</span>
                  </div>
                )}
                {form.notes && (
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400">Notes</span>
                    <span className="text-white">{form.notes}</span>
                  </div>
                )}
              </div>
              <button
                onClick={handleSubmit}
                className="bg-[#FFD700] text-[#0f1623] font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          )}

          {/* Navigation */}
          {step < 4 && (
            <div className="flex items-center justify-between mt-6">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canAdvance()}
                className="bg-[#FFD700] text-[#0f1623] font-bold px-6 py-2.5 rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          )}
          {step === 4 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-4 text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              ← Back
            </button>
          )}
        </div>

        {/* What happens next */}
        <div className="mt-12">
          <h2 className="text-white font-bold text-xl text-center mb-6">What Happens Next</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '1', text: 'We confirm within 1 hour' },
              { num: '2', text: 'WhatsApp reminder 24hrs before your lesson' },
              { num: '3', text: 'Instructor picks you up at your chosen location' },
            ].map((item) => (
              <div key={item.num} className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-[#0f1623] font-extrabold text-xl">
                  {item.num}
                </div>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
