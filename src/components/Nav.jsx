import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav, profile } from '../data/site';
import { ArrowRight } from './Icons';

// Header: a full-width bar at the top of the page that turns into a compact floating bar once you scroll.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently on screen (home page only).
  useEffect(() => {
    if (pathname !== '/' || !('IntersectionObserver' in window)) return undefined;
    const ids = [...nav.map((n) => n.id), 'contact'];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { io.disconnect(); setActive(''); };
  }, [pathname]);

  // Mobile menu: lock page scroll and close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  const close = () => setOpen(false);
  const to = (id) => ({ pathname: '/', hash: `#${id}` });
  const floating = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <a href="#main" className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-ink text-bone px-4 py-2 rounded-full">Skip to content</a>

      <div className={`transition-[padding] duration-500 ease-out ${floating ? 'px-3 pt-3' : 'px-0 pt-0'}`}>
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            floating
              ? 'max-w-[860px] h-[60px] pl-5 pr-2 rounded-full bg-paper/85 backdrop-blur-xl border border-line shadow-[0_10px_30px_-12px_rgba(21,21,19,0.25)]'
              : 'max-w-site h-[84px] px-5 md:px-8 rounded-none bg-transparent border border-transparent'
          }`}
        >
          <Link to="/" onClick={close} className="flex items-center gap-2.5 font-medium text-[17px] tracking-tight whitespace-nowrap" aria-label={`${profile.name}, home`}>
            <span className="grid place-items-center h-8 w-8 rounded-full bg-ink text-bone text-[13px] font-semibold">PE</span>
            {profile.name}
          </Link>

          <nav aria-label="Main" className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.id}
                to={to(n.id)}
                aria-current={active === n.id ? 'location' : undefined}
                className={`relative px-3.5 py-2 rounded-full text-[15px] transition-colors ${active === n.id ? 'bg-ink/[0.06] text-ink' : 'text-mute hover:text-ink'}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to={to('contact')} onClick={close} className={`btn-primary hidden sm:inline-flex ${floating ? '!h-11 !px-5' : ''}`}>
              Start a project <ArrowRight width={16} height={16} className="arrow" />
            </Link>
            <button
              type="button"
              className="md:hidden h-11 px-4 inline-flex items-center gap-2 rounded-full border border-ink/15 text-[15px] font-medium"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Close' : 'Menu'}
              <span className="relative block h-2.5 w-4" aria-hidden="true">
                <span className={`absolute left-0 h-[1.5px] w-4 bg-ink transition-all duration-300 ${open ? 'top-[5px] rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-[1.5px] w-4 bg-ink transition-all duration-300 ${open ? 'top-[5px] -rotate-45' : 'top-[9px]'}`} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="pointer-events-auto md:hidden mx-auto max-w-[860px] mt-2 rounded-[28px] bg-paper border border-line shadow-[0_24px_60px_-20px_rgba(21,21,19,0.35)] p-3">
            {[...nav, { id: 'contact', label: 'Contact' }].map((n, i) => (
              <Link
                key={n.id}
                to={to(n.id)}
                onClick={close}
                className="flex items-baseline gap-4 px-4 py-3.5 rounded-2xl text-[26px] font-medium tracking-display hover:bg-ink/[0.04]"
              >
                <span className="font-mono text-[12px] text-mute">0{i + 1}</span>
                {n.label}
              </Link>
            ))}
            <Link to={to('contact')} onClick={close} className="btn-primary w-full mt-3">
              Start a project <ArrowRight width={16} height={16} className="arrow" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
