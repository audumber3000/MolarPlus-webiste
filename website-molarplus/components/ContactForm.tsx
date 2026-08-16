'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { trackContactSubmitted } from '@/analytics/track';

type Props = {
  colors: { primary: string };
};

export default function ContactForm({ colors }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: '',
  });
  const [company, setCompany] = useState(''); // honeypot — see the hidden field below
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, company }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        // Say what went wrong and what to do instead. The visitor has already
        // written the message; losing it without telling them is the failure
        // mode this form used to have on every single submission.
        setErrorMessage(
          data?.error ||
            'We could not send your message. Please email us at support@molarplus.com.',
        );
        return;
      }

      // Only counted once the message genuinely left. form_id only — never send
      // raw email/phone as event properties.
      trackContactSubmitted('homepage_contact');
      setSubmitStatus("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ name: '', email: '', phone: '', practice: '', message: '' });
    } catch {
      setErrorMessage(
        'We could not reach our server. Please check your connection, or email us at support@molarplus.com.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Dr. John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john@dentclinic.com"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+91-9876543210"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Practice Name</label>
          <input
            type="text"
            name="practice"
            value={formData.practice}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Smile Dental Clinic"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us about your practice and how we can help..."
        />
      </div>
      {/*
        Honeypot. Hidden from people, visible to bots that fill every field.
        Not `display:none` — some bots skip those — and tabindex/autocomplete
        off so keyboard and password managers ignore it.
      */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {submitStatus && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700" role="status">
          {submitStatus}
        </div>
      )}
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700" role="alert">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-lg font-semibold text-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        style={{ backgroundColor: colors.primary }}
      >
        {isSubmitting ? 'Sending...' : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
