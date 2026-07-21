/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#121319',      // canvas ink — near-black cool background
        frame: '#22242F',       // panel / card surface
        line: '#33364424',      // hairline grid — used via border utilities mostly as #333644
        hairline: '#333644',
        paper: '#EDEEF3',       // primary text on dark
        muted: '#9498AC',       // secondary text
        cursorBlue: '#5B8CFF',  // "Mihir" cursor — design layer
        cursorOrange: '#FF8A4C',// "Dev" cursor — engineering layer
        signal: '#C8FF4D',      // rare highlight / success accent
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(#33364420 1px, transparent 1px), linear-gradient(90deg, #33364420 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
