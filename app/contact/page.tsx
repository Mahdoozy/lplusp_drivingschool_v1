'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

const suburbList = [
  'North Ryde', 'East Ryde', 'Ryde', 'West Ryde', 'Macquarie Park',
  'Eastwood', 'Epping', 'Castle Hill', 'North Rocks', 'Carlingford',
  'Beecroft', 'Telopea', 'Dundas', 'Ermington', 'Rydalmere',
  'Melrose Park', 'Meadowbank', 'Rhodes', 'Gladesville', 'Putney',
  'Silverwater', 'Newington', 'Auburn', 'Chatswood',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', suburb: '', message: '' });

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const inputClass = 'w-full font-sans bg-white border border-[#c8d4f0] rounded-lg px-4 py-3 text-[#0a0f1e] placeholder-[#7a8aaa] focus:outline-none focus:border-[#F5C842] transition-colors';

  return (
    <>
      {/* Hero — light theme */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#f4f7ff', borderBottom: '1px solid #e2e8f4' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label-dark">Get In Touch</span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#0a0f1e]">
            Contact Us
          </h1>
          <p className="mt-4 font-sans text-[#3a4a6a] text-lg">We respond within 1 hour — usually much faster</p>
        </div>
      </section>

      <section className="py-12 pb-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-start">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div className="flex flex-col gap-6">
                <h2 className="font-serif font-bold text-2xl text-[#0a0f1e]">Contact Details</h2>

                <div
                  className="rounded-2xl p-6 flex flex-col gap-5"
                  style={{ background: '#f4f7ff', border: '1px solid #e2e8f4' }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--gold)' }}
                    >
                      <svg className="w-5 h-5 text-[#0a0f1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-[#7a8aaa] text-xs mb-0.5">Mick</p>
                      <a href="tel:0469370978" className="font-sans font-semibold text-[#0a0f1e] hover:text-[#d4a91a] transition-colors">0469 370 978</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--gold)' }}
                    >
                      <svg className="w-5 h-5 text-[#0a0f1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-[#7a8aaa] text-xs mb-0.5">Sidra</p>
                      <a href="tel:0451331140" className="font-sans font-semibold text-[#0a0f1e] hover:text-[#d4a91a] transition-colors">0451 331 140</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--gold)' }}
                    >
                      <svg className="w-5 h-5 text-[#0a0f1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:lpluspdrivingschool44@gmail.com" className="font-sans text-[#0a0f1e] hover:text-[#d4a91a] transition-colors break-all text-sm">
                      lpluspdrivingschool44@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--gold)' }}
                    >
                      <svg className="w-5 h-5 text-[#0a0f1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-[#0a0f1e]">Mon – Sat, 6am – 6pm</p>
                      <p className="font-sans text-[#7a8aaa] text-xs mt-0.5">We respond to messages 7 days a week</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/61469370978?text=Hi%2C%20I%27d%20like%20to%20book%20a%20driving%20lesson%20with%20L%20Plus%20P"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-lg w-fit hover:bg-green-500 transition-colors mt-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden h-64" style={{ border: '1px solid #e2e8f4' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8!2d151.1!3d-33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNorth+Ryde+NSW+2113!5e0!3m2!1sen!2sau!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="L Plus P Driving School — North Ryde NSW"
                  />
                </div>
              </div>

              {/* Contact form */}
              <div>
                <h2 className="font-serif font-bold text-2xl text-[#0a0f1e] mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div
                    className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                    style={{ background: '#f4f7ff', border: '1px solid #e2e8f4' }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--gold)' }}
                    >
                      <svg className="w-7 h-7 text-[#0a0f1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-serif font-bold text-xl text-[#0a0f1e]">Message Sent!</p>
                    <p className="font-sans text-[#3a4a6a] text-sm">Thanks {form.name}, we will get back to you within 1 hour.</p>
                  </div>
                ) : (
                  <div
                    className="rounded-2xl p-6 flex flex-col gap-4"
                    style={{ background: '#ffffff', border: '1px solid #e2e8f4', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                  >
                    <div>
                      <label className="block font-sans text-sm text-[#3a4a6a] mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-[#3a4a6a] mb-1">Phone *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className={inputClass}
                        placeholder="04xx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-[#3a4a6a] mb-1">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={inputClass}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-[#3a4a6a] mb-1">Suburb</label>
                      <select
                        value={form.suburb}
                        onChange={(e) => update('suburb', e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select suburb</option>
                        {suburbList.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-[#3a4a6a] mb-1">Message *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        rows={4}
                        className={`${inputClass} resize-none`}
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      onClick={() => { if (form.name && form.phone && form.message) setSubmitted(true); }}
                      className="font-sans font-bold py-3 rounded-lg hover:bg-[#d4a91a] transition-colors text-[#0a0f1e]"
                      style={{ background: 'var(--gold)' }}
                    >
                      Send Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </section>
    </>
  );
}
