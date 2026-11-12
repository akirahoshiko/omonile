/** @type {import('tailwindcss').Config} */
// Quiet, editorial palette: warm off-white, near-black ink, one deep green accent used sparingly.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F3F1EC', // page background
        paper: '#FBFAF7', // raised surfaces (cards, header)
        well: '#E7E4DD', // image wells behind screenshots
        line: '#DCD8CF', // hairlines on light
        ink: '#151513', // text, primary buttons, dark sections
        mute: '#6B6963', // secondary text on light
        fog: '#A9A69F', // secondary text on dark
        moss: '#2F4A3A', // single accent (status, hover, focus)
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '1240px' },
      letterSpacing: { display: '-0.028em' },
    },
  },
  plugins: [],
};
