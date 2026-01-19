/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Bricolage Grotesque"', 'sans-serif'],
        'sans': ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        paper: '#F4F7F7',
        ink: '#1B1B1F',
        'ink-soft': '#3A3842',
        'ink-muted': '#6D6875',
        accent: '#25D366',
        card: '#FFFFFF',
        line: '#DEE7E7',
        wash: '#EEF4F4',
      },
      backgroundImage: {
        mesh: 'radial-gradient(120% 120% at 0% 0%, rgba(37, 211, 102, 0.18) 0%, transparent 55%), radial-gradient(140% 120% at 100% 0%, rgba(37, 211, 102, 0.14) 0%, transparent 55%), radial-gradient(120% 120% at 50% 100%, rgba(37, 211, 102, 0.12) 0%, transparent 60%)',
        dots: 'radial-gradient(rgba(27, 27, 31, 0.08) 1px, transparent 1px)',
        stripes: 'repeating-linear-gradient(135deg, rgba(27, 27, 31, 0.05) 0, rgba(27, 27, 31, 0.05) 1px, transparent 1px, transparent 10px)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(27, 27, 31, 0.08)',
        lift: '0 18px 50px rgba(27, 27, 31, 0.15)',
        glow: '0 18px 45px rgba(37, 211, 102, 0.22)',
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2.5s ease-in-out infinite',
        'pulse-slow': 'pulse-subtle 5s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { boxShadow: '0 10px 30px rgba(37, 211, 102, 0.16)' },
          '50%': { boxShadow: '0 16px 40px rgba(37, 211, 102, 0.24)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
