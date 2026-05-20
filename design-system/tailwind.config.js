/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0E1A',
          2: '#1C2236',
          3: '#2E3A56',
        },
        paper: {
          DEFAULT: '#FAFAF8',
          2: '#F4F2ED',
          3: '#EAE7DF',
        },
        bone: '#DDD9CF',
        cream: '#FBF8F2',
        gold: {
          DEFAULT: '#B8912A',
          light: '#D4AF5A',
          bg: 'rgba(184, 145, 42, 0.08)',
        },
        teal: {
          DEFAULT: '#1E7A86',
          light: '#4AA8B5',
          bg: 'rgba(30, 122, 134, 0.07)',
        },
        line: {
          DEFAULT: 'rgba(10, 14, 26, 0.08)',
          2: 'rgba(10, 14, 26, 0.14)',
        },
        green: '#1C7C4A',
      },
      fontFamily: {
        serif: ["'Instrument Serif'", 'serif'],
        sans: ["'Geist'", '-apple-system', 'sans-serif'],
        mono: ["'Geist Mono'", 'monospace'],
      },
      boxShadow: {
        sm: '0 2px 8px rgba(10,14,26,0.06), 0 0 1px rgba(10,14,26,0.08)',
        md: '0 8px 32px rgba(10,14,26,0.10), 0 0 1px rgba(10,14,26,0.08)',
        lg: '0 24px 64px rgba(10,14,26,0.14), 0 0 1px rgba(10,14,26,0.06)',
        xl: '0 40px 100px rgba(10,14,26,0.18), 0 0 1px rgba(10,14,26,0.06)',
      },
      borderRadius: {
        pill: '100px',
        card: '24px',
        'card-sm': '20px',
        input: '10px',
      },
      letterSpacing: {
        'display': '-0.035em',
        'hero': '-0.045em',
        'cta': '-0.05em',
        'tag': '0.09em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(.22, 1, .36, 1)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        orb: {
          '0%, 100%': { transform: 'scale(1) rotate(0)' },
          '50%': { transform: 'scale(1.06) rotate(180deg)' },
        },
        waveBar: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp .9s cubic-bezier(.22,1,.36,1) both',
        'ticker': 'ticker 65s linear infinite',
        'float': 'float 9s ease-in-out infinite',
        'pulse-ring': 'pulseRing 1.8s cubic-bezier(.22,1,.36,1) infinite',
        'orb': 'orb 20s ease-in-out infinite',
        'wave-bar': 'waveBar 1.4s ease-in-out infinite',
        'spin': 'spin 36s linear infinite',
      },
    },
  },
  plugins: [],
}
