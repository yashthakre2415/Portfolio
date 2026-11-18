/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#07080D',
          surface: '#0E111A',
          card: '#131722',
          cardHover: '#181D2B',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(99, 102, 241, 0.35)',
          muted: '#94A3B8',
          text: '#F1F5F9',
        },
        accent: {
          blue: '#3B82F6',
          violet: '#8B5CF6',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.08), transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(28px)' },
        }
      }
    },
  },
  plugins: [],
}
