import { assetUrl } from '../lib/assets';

export default function ProjectArt({ project, path, eager = false, className = '' }) {
  const src = path || project.image;
  return (
    <img
      src={assetUrl(src)}
      alt={`${project.title}: screenshot`}
      className={`w-full h-auto rounded-lg border border-black/10 shadow-[0_18px_40px_-22px_rgba(21,21,19,0.45)] ${className}`}
      loading={eager ? 'eager' : 'lazy'}
    />
  );
}
