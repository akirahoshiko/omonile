import { useState } from 'react';
import Reveal from '../components/Reveal';
import { experience } from '../data/site';

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-line" aria-labelledby="exp-title">
      <div className="mx-auto max-w-site px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <Reveal className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <p className="label">Experience</p>
          <h2 id="exp-title" className="h-section mt-4">Where I&apos;ve worked</h2>
          <p className="text-mute mt-5 leading-relaxed max-w-[36ch]">
            IT support, administration and customer relations: the work that showed me where automation saves real time.
          </p>
        </Reveal>

        <ol className="lg:col-span-8 border-t border-ink" aria-label="Work history">
          {experience.map((e, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={e.title} delay={i * 60} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`exp-${i}`}
                  className="group w-full text-left grid grid-cols-12 gap-4 items-baseline py-6"
                >
                  <span className="col-span-12 sm:col-span-3 font-mono text-[13px] text-mute">{e.period}</span>
                  <span className="col-span-10 sm:col-span-8">
                    <span className="block text-[20px] md:text-[22px] font-medium tracking-tight leading-snug group-hover:text-moss transition-colors">{e.title}</span>
                    <span className="block text-mute text-[16px] mt-0.5">{e.org}</span>
                  </span>
                  <span aria-hidden="true" className={`col-span-2 sm:col-span-1 justify-self-end grid place-items-center h-8 w-8 rounded-full border border-line text-[18px] leading-none transition-transform duration-300 ${isOpen ? 'rotate-45 bg-ink text-bone border-ink' : ''}`}>+</span>
                </button>
                <div id={`exp-${i}`} hidden={!isOpen} className="pb-7 sm:pl-[25%]">
                  <ul className="space-y-2 text-[17px] text-mute leading-relaxed list-disc pl-5 marker:text-line">
                    {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
