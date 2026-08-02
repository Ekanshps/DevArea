import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // DevArea Theme - Light mode
        light: {
          'bg': '#eeeedf',
          'card': '#ffffff',
          'heading': '#0f172a',
          'text': '#0f172a',
          'text-secondary': '#475569',
          'primary': '#fbbf24',
          'primary-dark': '#f59e0b',
          'accent': '#b91c1c',
          'border': '#e5e7eb',
        },
        // DevArea Theme - Dark mode
        dark: {
          '50': '#f8fafc',
          '100': '#e2e8f0',
          '200': '#cbd5e1',
          '300': '#94a3b8',
          '400': '#64748b',
          '500': '#475569',
          '600': '#334155',
          '700': '#1e293b',
          '800': '#0f172a',
          '900': '#050505',
          '950': '#000000',
          'bg': '#050505',
          'card': '#0f172a',
          'heading': '#ffffff',
          'text': '#ffffff',
          'text-secondary': '#cbd5e1',
          'primary': '#fbbf24',
          'primary-dark': '#f59e0b',
          'accent': '#dc2626',
          'border': '#1e293b',
        },
        // Service colors (no purple)
        services: {
          webdev: '#ea580c',  // orange/red
          appdev: '#2563eb',  // blue
          marketing: '#059669', // green
          ai: '#db2777',      // pink
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '4xl': '56rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
