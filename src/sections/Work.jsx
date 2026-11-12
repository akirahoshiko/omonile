import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ProjectArt from '../components/ProjectArt';
import { ArrowUpRight } from '../components/Icons';
import { projects } from '../data/projects';

const groups = [
  {
    id: 'websites',
    key: 'web',
    title: 'Websites',
    text: 'Designed and built end to end, live online and taking real orders, donations and enquiries.',
  },
  {
    id: 'automation',
    key: 'automation',
    title: 'Workflow automation',
    text: 'n8n workflows that connect chat, AI, spreadsheets, calendars and email, so routine work runs on its own.',
  },
];

const pad = (n) => String(n).padStart(2, '0');

function Meta({ p }) {
  const bits = p.group === 'web' ? [...(p.liveUrl ? ['Live site'] : []), ...p.tools.slice(0, 3)] : p.tools.slice(0, 3);
  return <p className="mt-3 font-mono text-[12.5px] text-mute">{bits.join('  ·  ')}</p>;
}

function Arrow() {
  return (
    <span className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-paper text-ink opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
      <ArrowUpRight width={17} height={17} />
    </span>
  );
}

/** Large card for the lead website project: image left, text right on desktop. */
function FeaturedWebsite({ p }) {
  return (
    <Reveal>
      <Link to={`/work/${p.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end" aria-label={`${p.title}: view project`}>
        <div className="lg:col-span-8 relative aspect-[16/10] rounded-[20px] bg-well overflow-hidden grid place-items-center p-6 md:p-10">
          <div className="h-full w-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <ProjectArt project={p} className="!w-auto max-w-full max-h-full" />
          </div>
          <Arrow />
        </div>
        <div className="lg:col-span-4 lg:pb-2">
          <p className="label">{p.number} · {p.type}</p>
          <h4 className="mt-3 text-[22px] md:text-[26px] font-normal tracking-display leading-tight">{p.title}</h4>
          <p className="mt-3 text-mute leading-relaxed">{p.tagline}</p>
          <Meta p={p} />
          <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium link-underline">View case study <ArrowUpRight width={15} height={15} /></span>
        </div>
      </Link>
    </Reveal>
  );
}

function WebsiteCard({ p, delay }) {
  return (
    <Reveal delay={delay}>
      <Link to={`/work/${p.slug}`} className="group block" aria-label={`${p.title}: view project`}>
        <div className="relative aspect-[4/3] rounded-[20px] bg-well overflow-hidden grid place-items-center p-6 md:p-10">
          <div className="h-full w-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.025]">
            <ProjectArt project={p} className="!w-auto max-w-full max-h-full" />
          </div>
          <Arrow />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h4 className="text-[18px] md:text-[19px] font-medium tracking-tight">{p.title}</h4>
          <span className="label shrink-0">{p.number}</span>
        </div>
        <p className="mt-1.5 text-mute leading-relaxed max-w-[52ch] text-[16px]">{p.tagline}</p>
        <Meta p={p} />
      </Link>
    </Reveal>
  );
}

/** Compact card for automations: the workflow is shown as a chain of steps. */
function AutomationCard({ p, delay }) {
  const steps = p.workflow.slice(0, 4);
  return (
    <Reveal delay={delay} className="h-full">
      <Link to={`/work/${p.slug}`} className="group flex h-full flex-col rounded-[20px] border border-line bg-paper p-4 hover:border-ink/30 transition-colors" aria-label={`${p.title}: view project`}>
        <div className="relative aspect-[16/10] rounded-[14px] bg-well overflow-hidden grid place-items-center p-4">
          <div className="h-full w-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <ProjectArt project={p} className="!w-auto max-w-full max-h-full" />
          </div>
          <Arrow />
        </div>
        <div className="flex flex-1 flex-col px-1 pt-5 pb-1">
          <div className="flex items-baseline justify-between gap-4">
            <h4 className="text-[17px] md:text-[18px] font-medium tracking-tight">{p.title}</h4>
            <span className="label shrink-0">{p.number}</span>
          </div>
          <p className="mt-1.5 text-mute leading-relaxed text-[15.5px]">{p.tagline}</p>
          <ol className="mt-auto pt-5 flex flex-wrap items-center gap-x-1.5 gap-y-1.5 font-mono text-[11.5px] text-mute" aria-label="Workflow steps">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-1.5">
                <span className="rounded-full border border-line bg-bone px-2 py-0.5">{s}</span>
                {i < steps.length - 1 && <span aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Work() {
  const web = projects.filter((p) => p.group === 'web');
  const auto = projects.filter((p) => p.group === 'automation');
  const counts = { web: web.length, automation: auto.length };

  return (
    <section id="work" className="py-20 md:py-28 border-t border-line" aria-labelledby="work-title">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="label">Selected work ({pad(projects.length)})</p>
            <h2 id="work-title" className="h-section mt-4">Recent projects</h2>
          </div>
          <div className="max-w-[44ch]">
            <p className="text-mute text-[17px] leading-relaxed">Two kinds of work: websites people use, and automations that run the busywork behind a business.</p>
            <nav aria-label="Jump to" className="mt-4 flex flex-wrap gap-2">
              {groups.map((g) => (
                <a key={g.id} href={`#${g.id}`} className="rounded-full border border-ink/15 px-4 py-1.5 text-[14px] hover:border-ink transition-colors">
                  {g.title} <span className="text-mute">({pad(counts[g.key])})</span>
                </a>
              ))}
            </nav>
          </div>
        </Reveal>

        {/* Websites */}
        <section id="websites" aria-labelledby="websites-title" className="mt-14 md:mt-20 scroll-mt-28">
          <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 border-t border-ink pt-6">
            <h3 id="websites-title" className="md:col-span-5 text-[22px] md:text-[24px] font-normal tracking-display">{groups[0].title}</h3>
            <p className="md:col-span-6 md:col-start-7 text-mute leading-relaxed text-[16px]">{groups[0].text}</p>
          </Reveal>
          <div className="mt-10">
            <FeaturedWebsite p={web[0]} />
          </div>
          <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {web.slice(1).map((p, i) => <WebsiteCard key={p.slug} p={p} delay={i * 100} />)}
          </div>
        </section>

        {/* Automation */}
        <section id="automation" aria-labelledby="automation-title" className="mt-20 md:mt-28 scroll-mt-28">
          <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 border-t border-ink pt-6">
            <h3 id="automation-title" className="md:col-span-5 text-[22px] md:text-[24px] font-normal tracking-display">{groups[1].title}</h3>
            <p className="md:col-span-6 md:col-start-7 text-mute leading-relaxed text-[16px]">{groups[1].text}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auto.map((p, i) => <AutomationCard key={p.slug} p={p} delay={i * 80} />)}
          </div>
        </section>
      </div>
    </section>
  );
}
