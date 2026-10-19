"use client";

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { site, whatsappLink } from '@/lib/site';

const inputClass =
  'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('SEO');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const problems: string[] = [];
    if (!firstName.trim()) problems.push('Please enter your first name.');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      problems.push('Please enter a valid email address.');
    if (!message.trim()) problems.push('Please write your message.');
    setErrors(problems);
    if (problems.length > 0) return;

    const text =
      `New enquiry from ${site.name} website\n` +
      `Name: ${firstName.trim()} ${lastName.trim()}\n` +
      `Email: ${email.trim()}\n` +
      `Interested in: ${service}\n` +
      `Message: ${message.trim()}`;
    window.open(whatsappLink(text), '_blank', 'noopener');
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Message ready to send</h2>
        <p className="text-slate-600 max-w-md mx-auto">
          We opened WhatsApp with your enquiry filled in — just press send there
          and we&apos;ll get back to you shortly. Prefer email? Write to us at{' '}
          <a href={`mailto:${site.email}`} className="text-primary hover:underline">
            {site.email}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {errors.length > 0 && (
        <div className="rounded-md bg-red-50 border border-red-200 p-4">
          <ul className="list-disc pl-5 text-sm text-red-700 space-y-1">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">
            First name
          </label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
            placeholder="John"
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
            placeholder="Doe"
            autoComplete="family-name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="john@example.com"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700">
          Service you are interested in
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${inputClass} bg-white`}
        >
          <option>SEO</option>
          <option>Meta Ads</option>
          <option>Google Ads</option>
          <option>Web Development</option>
          <option>E-commerce Store</option>
          <option>Video Editing</option>
          <option>Business Transition</option>
          <option>Other / Unsure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder="Tell us about your project..."
        />
      </div>

      <div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
        <p className="text-xs text-slate-500 text-center mt-3">
          This opens WhatsApp with your message ready — no account needed on our site.
        </p>
      </div>
    </form>
  );
}
