import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ProjectArt from '../components/ProjectArt';
import { ArrowRight, ArrowUpRight } from '../components/Icons';
import { assetUrl } from '../lib/assets';
import { getProject, projects } from '../data/projects';
import { profile } from '../data/site';

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug);

  useEffect(() => {
    if (p) document.title = `${p.title} · ${profile.name}`;
  }, [p]);

  if (!p) return <Navigate to={{ pathname: '/', hash: '#work' }} replace />;

  const next = projects[(projects.findIndex((x) => x.slug === slug) + 1) % projects.length];
  const story = [
    ['The problem', p.problem],
    ['How it works', p.process],
    ['The solution', p.solution],
    ['The result', p.outcome],
  ];
  const meta = [
    ['Role', p.role],
    ['Category', p.category],
    ['Type', p.type],
    ['Tools', p.tools.join(', ')],
  ];

  return (
    <main id="main" className="pt-32 md:pt-40 pb-20">
      <article className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <Link to={{ pathname: '/', hash: '#work' }} className="text-[15px] text-mute hover:text-ink transition-colors">← All work</Link>
          <p className="label mt-10">{p.number} · {p.category}</p>
          <h1 className="mt-4 font-medium tracking-display text-[44px] md:text-[76px] leading-[1.02] max-w-[16ch]">{p.title}</h1>
          <p className="text-mute mt-6 max-w-[60ch] text-[19px] md:text-[20px] leading-relaxed">{p.description}</p>
          {p.liveUrl && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={assetUrl(p.liveUrl)} target="_blank" rel="noreferrer" className="btn-primary">
                Visit the live site <ArrowUpRight width={16} height={16} className="arrow" />
              </a>
              <span className="text-mute text-[15px]">Opens in a new tab · template with sample content</span>
            </div>
          )}
        </Reveal>

        <Reveal as="dl" className="mt-12 grid grid-cols-2 md:grid-cols-4 border-t border-line">
          {meta.map(([k, v], i) => (
            <div key={k} className={`py-5 pr-4 ${i % 2 ? 'pl-4 border-l border-line' : ''} md:pl-4 md:first:pl-0 ${i ? 'md:border-l md:border-line' : ''}`}>
              <dt className="label">{k}</dt>
              <dd className="mt-1.5 text-[16px]">{v}</dd>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-4 rounded-[24px] bg-well p-4 sm:p-8 md:p-14">
          <ProjectArt project={p} eager />
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-ink">
          {story.map(([h, t], i) => (
            <Reveal key={h} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-8 md:py-10 border-b border-line">
              <span className="md:col-span-1 font-mono text-[13px] text-mute pt-1.5">0{i + 1}</span>
              <h2 className="md:col-span-3 text-[24px] md:text-[28px] font-medium tracking-tight leading-tight">{h}</h2>
              <p className="md:col-span-7 md:col-start-6 text-[18px] md:text-[19px] leading-relaxed">{t}</p>
            </Reveal>
          ))}
        </div>

        {p.workflow && (
          <Reveal className="mt-16">
            <p className="label">The flow</p>
            <ol className="mt-5 flex flex-wrap items-center gap-2" aria-label="Workflow steps">
              {p.workflow.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="rounded-full border border-line bg-paper px-4 py-2 text-[15px]">{s}</span>
                  {i < p.workflow.length - 1 && <ArrowRight width={14} height={14} className="text-mute" />}
                </li>
              ))}
            </ol>
          </Reveal>
        )}

        {p.gallery?.length > 0 && (
          <Reveal className="mt-16">
            <p className="label">More from this project</p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {p.gallery.map((g) => (
                <div key={g} className="rounded-[20px] bg-well p-4 md:p-8"><ProjectArt project={p} path={g} /></div>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal className="mt-20 md:mt-28 border-t border-line pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <Link to={`/work/${next.slug}`} className="group block">
            <p className="label">Next project</p>
            <p className="mt-3 text-[32px] md:text-[52px] font-medium tracking-display leading-[1.05] flex items-center gap-4 group-hover:text-moss transition-colors">
              {next.title}
              <ArrowRight width={36} height={36} className="shrink-0 transition-transform group-hover:translate-x-2" />
            </p>
          </Link>
          <div className="md:justify-self-end">
            <Link to={{ pathname: '/', hash: '#contact' }} className="btn-primary">
              Start a project <ArrowRight width={16} height={16} className="arrow" />
            </Link>
          </div>
        </Reveal>
      </article>
    </main>
  );
}
