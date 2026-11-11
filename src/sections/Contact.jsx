import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import { contactConfig } from '../data/contact';
import { ArrowUpRight } from '../components/Icons';

export default function Contact() {
  const links = [
    { href: `mailto:${contactConfig.email}`, label: 'Email', value: contactConfig.email },
    { href: contactConfig.linkedin, label: 'LinkedIn', value: 'Peace Ejiga' },
    contactConfig.whatsapp && { href: `https://wa.me/${contactConfig.whatsapp}`, label: 'WhatsApp', value: 'Send a message' },
    contactConfig.github && { href: contactConfig.github, label: 'GitHub', value: contactConfig.github.replace('https://github.com/', '') },
  ].filter(Boolean);

  return (
    <section id="contact" className="bg-ink text-bone rounded-t-[28px] md:rounded-t-[40px] py-20 md:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-site px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="label !text-fog">Contact</p>
          <h2 id="contact-title" className="h-section mt-4">Have a project in mind?</h2>
          <p className="text-fog mt-5 leading-relaxed max-w-[40ch] text-[18px]">
            Tell me what you&apos;d like built or what&apos;s slowing your business down. I reply within 1–2 business days with clear next steps.
          </p>
          <ul className="mt-10 border-t border-white/15">
            {links.map(({ href, label, value }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group grid grid-cols-12 items-center gap-3 py-4 border-b border-white/15"
                >
                  <span className="col-span-4 sm:col-span-3 font-mono text-[12px] uppercase tracking-[0.08em] text-fog">{label}</span>
                  <span className="col-span-7 sm:col-span-8 truncate text-[16px] group-hover:text-white">{value}</span>
                  <ArrowUpRight width={16} height={16} className="col-span-1 justify-self-end text-fog group-hover:text-bone group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
