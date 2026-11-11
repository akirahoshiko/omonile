import { Link, useLocation } from 'react-router-dom';
import { nav, profile } from '../data/site';
import { contactConfig } from '../data/contact';

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <footer className={`bg-ink text-bone ${pathname === '/' ? '' : 'rounded-t-[28px] md:rounded-t-[40px] mt-10'}`}>
      <div className="mx-auto max-w-site px-5 md:px-8 py-10 border-t border-white/15 grid grid-cols-1 md:grid-cols-12 gap-6 md:items-center">
        <p className="md:col-span-4 text-[15px]">
          {profile.name}
          <span className="text-fog"> · {profile.role}</span>
        </p>
        <nav aria-label="Footer" className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          {nav.map((n) => (
            <Link key={n.id} to={{ pathname: '/', hash: `#${n.id}` }} className="text-fog hover:text-bone transition-colors">{n.label}</Link>
          ))}
          <a href={`mailto:${contactConfig.email}`} className="text-fog hover:text-bone transition-colors">Email</a>
        </nav>
        <div className="md:col-span-3 flex md:justify-end items-center gap-6 text-[15px] text-fog">
          <span>© {new Date().getFullYear()}</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-bone transition-colors">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
