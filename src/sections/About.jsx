import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { education, profile } from '../data/site';
import { assetUrl } from '../lib/assets';
import { contactConfig } from '../data/contact';
import { ArrowRight, Download } from '../components/Icons';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-line" aria-labelledby="about-title">
      <div className="mx-auto max-w-site px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="label">About</p>
          <img
            src={assetUrl(profile.photo)}
            alt=""
            width="800"
            height="800"
            loading="lazy"
            className="mt-6 hidden lg:block w-[180px] aspect-square object-cover object-top rounded-[18px] bg-well"
          />
        </Reveal>

        <Reveal className="lg:col-span-8" delay={100}>
          <h2 id="about-title" className="font-medium tracking-display text-[30px] md:text-[42px] leading-[1.15]">
            I help businesses win more customers and lose the repetitive work.{' '}
            <span className="text-mute">Clear websites in front, quiet automations behind.</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-[17px] leading-relaxed text-mute">
            <p>
              My background is in Computer Science, and I&apos;m completing an M.Tech in Cyber Security, so security and reliability are part of how I build.
            </p>
            <p>
              Nearly four years in IT support, executive administration and customer relations taught me where teams lose time, and why clear communication matters.
            </p>
          </div>

          <dl className="mt-10 border-t border-line">
            {education.map((ed) => (
              <div key={ed.title} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-4 border-b border-line">
                <dt className="sm:col-span-7 font-medium">{ed.title}</dt>
                <dd className="sm:col-span-3 text-mute text-[16px]">{ed.org}</dd>
                <dd className="sm:col-span-2 sm:text-right font-mono text-[12px] uppercase tracking-[0.06em] text-mute pt-1">{ed.note}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={{ pathname: '/', hash: '#contact' }} className="btn-primary">
              Start a project <ArrowRight width={16} height={16} className="arrow" />
            </Link>
            {profile.cvUrl && (
              <a href={assetUrl(profile.cvUrl)} download className="btn-secondary">
                <Download width={16} height={16} /> Download CV
              </a>
            )}
            <a href={contactConfig.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
