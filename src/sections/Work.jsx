import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ProjectArt from '../components/ProjectArt';
import { ArrowUpRight } from '../components/Icons';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-line" aria-labelledby="work-title">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="label">Selected work ({String(projects.length).padStart(2, '0')})</p>
            <h2 id="work-title" className="h-section mt-4">Recent projects</h2>
          </div>
          <p className="text-mute text-[18px] leading-relaxed max-w-[44ch]">
            Websites and automations, shown as they really run. Open a project to see the problem, the build and the result.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
              <Link to={`/work/${p.slug}`} className="group block" aria-label={`${p.title}: view project`}>
                <div className="relative aspect-[4/3] rounded-[20px] bg-well overflow-hidden grid place-items-center p-6 md:p-10">
                  <div className="h-full w-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.025]">
                    <ProjectArt project={p} className="!w-auto max-w-full max-h-full" />
                  </div>
                  <span className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-paper text-ink opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight width={17} height={17} />
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight">{p.title}</h3>
                  <span className="label shrink-0">{p.number}</span>
                </div>
                <p className="mt-1.5 text-mute leading-relaxed max-w-[52ch]">{p.tagline}</p>
                <p className="mt-3 font-mono text-[13px] text-mute">
                  {[p.category, ...(p.liveUrl ? ['Live site'] : []), ...p.tools.slice(0, 3)].join('  ·  ')}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
