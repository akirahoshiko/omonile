import useReveal from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ ...style, ...(delay ? { transitionDelay: `${delay}ms` } : {}) }} {...rest}>
      {children}
    </Tag>
  );
}
