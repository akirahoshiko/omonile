import { useEffect } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { profile } from './data/site';

const DEFAULT_TITLE = `${profile.name} · Workflow Automation & Web Development`;

// Scrolls to #section links (including when arriving from another page), otherwise to the top.
// `key` changes on every click, so clicking the same section link twice still scrolls.
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (pathname === '/') document.title = DEFAULT_TITLE;
    if (hash) {
      const id = hash.slice(1);
      // wait a frame so the target section has rendered
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);
  return null;
}

function NotFound() {
  useEffect(() => { document.title = `Page not found · ${profile.name}`; }, []);
  return (
    <main id="main" className="min-h-[70vh] grid place-items-center text-center px-5 pt-32">
      <div>
        <p className="label">404</p>
        <h1 className="font-medium tracking-display text-5xl md:text-7xl mt-4">Page not found.</h1>
        <p className="text-mute mt-4">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="btn-primary mt-8">Back home</Link>
      </div>
    </main>
  );
}

// Old page URLs now point to sections of the one-page site.
const toSection = (id) => <Navigate to={{ pathname: '/', hash: `#${id}` }} replace />;

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="/work" element={toSection('work')} />
        <Route path="/about" element={toSection('about')} />
        <Route path="/experience" element={toSection('experience')} />
        <Route path="/contact" element={toSection('contact')} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
