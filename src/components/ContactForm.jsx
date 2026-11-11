import { useState } from 'react';
import { contactConfig, enquiryTypes } from '../data/contact';
import { ArrowRight } from './Icons';

const empty = { name: '', email: '', type: enquiryTypes[0], message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [honeypot, setHoneypot] = useState('');

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) e.message = 'Please write a little more (at least 10 characters).';
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (status === 'sending') return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      document.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(contactConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          enquiry: form.type,
          message: form.message.trim(),
          _subject: `Portfolio: ${form.type} enquiry from ${form.name.trim()}`,
          _gotcha: honeypot,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="rounded-[24px] border border-white/15 p-8 md:p-10" role="status" aria-live="polite">
        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-fog">Message sent</p>
        <h3 className="font-medium tracking-display text-3xl mt-4">Thanks, {form.name.trim().split(' ')[0]}.</h3>
        <p className="text-fog mt-3 leading-relaxed">Your message is on its way to my inbox. I usually reply within 1–2 business days.</p>
        <button type="button" onClick={() => { setForm(empty); setStatus('idle'); }} className="btn-secondary-dark mt-6">Send another message</button>
      </div>
    );
  }

  const field = (bad) =>
    `w-full rounded-xl bg-white/[0.04] border px-4 py-3.5 text-[17px] text-bone placeholder:text-fog/70 outline-none transition-colors ${bad ? "border-red-400" : "border-white/15 focus:border-bone"}`;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[24px] border border-white/15 bg-white/[0.02] p-6 md:p-8" aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-[14px] text-fog mb-2">Name</label>
          <input id="cf-name" autoComplete="name" className={field(errors.name)} value={form.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'cf-name-err' : undefined} />
          {errors.name && <p id="cf-name-err" className="text-red-400 text-base mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-[14px] text-fog mb-2">Email</label>
          <input id="cf-email" type="email" autoComplete="email" className={field(errors.email)} value={form.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'cf-email-err' : undefined} />
          {errors.email && <p id="cf-email-err" className="text-red-400 text-base mt-1.5">{errors.email}</p>}
        </div>
      </div>
      <fieldset className="mt-5">
        <legend className="block text-[14px] text-fog mb-2">What's this about?</legend>
        <div className="flex flex-wrap gap-2">
          {enquiryTypes.map((t) => (
            <label key={t} className={`cursor-pointer rounded-full border px-4 py-2 text-[16px] transition-colors ${form.type === t ? 'border-bone bg-bone text-ink' : 'border-white/15 text-fog hover:border-white/40 hover:text-bone'}`}>
              <input type="radio" name="type" value={t} checked={form.type === t} onChange={set('type')} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-5">
        <label htmlFor="cf-msg" className="block text-[14px] text-fog mb-2">Message</label>
        <textarea id="cf-msg" rows="5" className={`${field(errors.message)} resize-y`} value={form.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'cf-msg-err' : undefined} placeholder="Tell me about your project…" />
        {errors.message && <p id="cf-msg-err" className="text-red-400 text-base mt-1.5">{errors.message}</p>}
      </div>
      {/* Spam trap: hidden from people; Formspree rejects submissions where bots fill it in */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" aria-hidden="true" />
      {status === 'error' && (
        <p className="text-red-400 text-base mt-5" role="alert">
          Sorry, the message couldn't be sent. Please try again or email <a className="underline" href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'} className="btn-primary-dark w-full sm:w-auto mt-6 disabled:opacity-60 disabled:cursor-wait">
        {status === 'sending' ? 'Sending…' : <>Send message <ArrowRight width={16} height={16} className="arrow" /></>}
      </button>
    </form>
  );
}
