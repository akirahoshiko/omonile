import { Link } from 'react-router-dom';
import { heroFacts, profile } from '../data/site';
import { assetUrl } from '../lib/assets';
import { ArrowRight } from '../components/Icons';

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24" aria-labelledby="hero-title">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2.5 text-[15px] text-mute">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-moss opacity-40 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
              </span>
              {profile.availability}
            </p>

            <h1 id="hero-title" className="mt-6 font-normal tracking-display text-[40px] leading-[1.04] sm:text-[52px] lg:text-[62px]">
              I design websites and automate the work behind them.
            </h1>
            <p className="mt-7 max-w-[52ch] text-[19px] leading-relaxed text-mute">
              I&apos;m {profile.name}, a web designer, developer and automation specialist. I help businesses look credible online and stop
              losing hours to enquiries, bookings and follow-ups done by hand.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to={{ pathname: '/', hash: '#contact' }} className="btn-primary">
                Start a project <ArrowRight width={16} height={16} className="arrow" />
              </Link>
              <Link to={{ pathname: '/', hash: '#work' }} className="btn-secondary">
                View work
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative mx-auto max-w-[440px] lg:ml-auto">
              <img
                src={assetUrl(profile.photo)}
                alt={`Portrait of ${profile.name}`}
                width="800"
                height="800"
                fetchpriority="high"
                className="block w-full aspect-[4/5] object-cover object-top rounded-[24px] bg-well"
              />
              <figcaption className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-paper/90 backdrop-blur-md border border-white/60 px-4 py-3">
                <span>
                  <span className="block text-[15px] font-medium">{profile.name}</span>
                  <span className="block text-[13px] text-mute">{profile.role}</span>
                </span>
                <span className="label !text-[11px]">Portfolio ’{String(new Date().getFullYear()).slice(2)}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <dl className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 border-t border-line">
          {heroFacts.map((f, i) => (
            <div key={f.k} className={`pt-5 pb-1 sm:pr-6 ${i ? 'sm:pl-6 sm:border-l border-line' : ''} ${i ? 'border-t sm:border-t-0 border-line mt-4 sm:mt-0' : ''}`}>
              <dt className="label">{f.k}</dt>
              <dd className="mt-1.5 text-[17px]">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
