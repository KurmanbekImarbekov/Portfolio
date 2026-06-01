/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#05050a',
        ink: '#0b0d17',
        plasma: '#8b5cf6',
        ion: '#38bdf8',
        pulse: '#22d3ee',
        acid: '#a3e635',
        ember: '#f59e0b',
      },
      boxShadow: {
        neon: '0 0 35px rgba(56, 189, 248, 0.28), 0 0 90px rgba(139, 92, 246, 0.18)',
        violet: '0 0 45px rgba(139, 92, 246, 0.32)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at top left, rgba(139,92,246,.18), transparent 32rem), radial-gradient(circle at top right, rgba(56,189,248,.16), transparent 30rem), radial-gradient(circle at bottom, rgba(163,230,53,.08), transparent 28rem)',
      },
      animation: {
        aurora: 'aurora 12s ease-in-out infinite',
        spinSlow: 'spin 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2rem, -1.4rem, 0) scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          to: { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
