/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'medical-slate': '#0f172a',
        'alert-orange': '#ff4d00',
        'clinical-white': '#f8fafc',
        'brutalist-black': '#000000',
        'grid-line': '#e2e8f0',
        'soft-orange': '#fff7ed', // Added for soft backgrounds
        'fluid-blue': '#eff6ff', // Added for fluid backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'hard': '6px 6px 0px 0px #000000',
        'hard-sm': '3px 3px 0px 0px #000000',
        'hard-xl': '12px 12px 0px 0px #000000',
        // New Soft Shadows
        'soft-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 16px -2px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 12px 32px -4px rgba(0, 0, 0, 0.12)',
        'soft-orange': '0 8px 24px -4px rgba(255, 77, 0, 0.2)',
        'glow': '0 0 20px rgba(255, 77, 0, 0.3)',
      },
      animation: {
        'ticker': 'ticker 20s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
