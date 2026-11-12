import Reveal from '../components/Reveal';
import { process, services, toolkit } from '../data/site';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-line" aria-labelledby="services-title">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <p className="label">Services</p>
            <h2 id="services-title" className="h-section mt-4">What I do</h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-mute text-[18px] leading-relaxed max-w-[48ch]">
            Design it so people understand it, build it so it works on every screen, then automate the repetitive work behind it.
          </p>
        </Reveal>

        <ul className="mt-12 md:mt-16 border-t border-ink">
          {services.map((s, i) => (
            <Reveal as="li" key={s.no} delay={i * 80} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-8 md:py-10 border-b border-line">
              <span className="md:col-span-1 font-mono text-[13px] text-mute pt-2">{s.no}</span>
              <h3 className="md:col-span-4 text-[24px] md:text-[28px] font-normal tracking-display leading-tight">{s.title}</h3>
              <div className="md:col-span-6 md:col-start-7">
                <p className="text-[18px] leading-relaxed">{s.text}</p>
                <p className="mt-4 font-mono text-[13px] text-mute">{s.tags.join('  ·  ')}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* How I work */}
        <div id="process" className="mt-20 md:mt-28">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="label">Process</p>
              <h3 className="mt-4 text-[26px] md:text-[32px] font-normal tracking-display leading-tight">How a project runs</h3>
            </div>
          </Reveal>
          <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-[20px] overflow-hidden">
            {process.map((s, i) => (
              <Reveal as="li" key={s.no} delay={i * 80} className="bg-paper p-6 md:p-7 flex flex-col min-h-[220px]">
                <span className="font-mono text-[13px] text-mute">{s.no}</span>
                <h4 className="mt-auto pt-10 text-[20px] font-medium tracking-tight">{s.title}</h4>
                <p className="mt-2 text-mute leading-relaxed text-[16px]">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Tools */}
        <Reveal className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-line pt-8">
          <p className="md:col-span-3 label pt-1">Tools I use</p>
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {toolkit.map((g) => (
              <div key={g.group}>
                <p className="text-[15px] font-medium">{g.group}</p>
                <p className="mt-2 text-mute leading-relaxed">{g.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
