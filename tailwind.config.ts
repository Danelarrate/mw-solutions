import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-primary': '0 -4px 100px 100px rgba(150, 127, 113, .7)'
      },
      keyframes: {
        'bounce-delay-opacity': {
          '0%, 10%, 100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '2%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '4%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '5%': {
            transform: 'translateY(-15%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '6%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '7%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '8%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }, '20%': { opacity: '0.2' }, '95%': { opacity: '0.2' }
        }, 'bounce-delay': {
          '0%, 10%, 100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '2%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '4%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '5%': {
            transform: 'translateY(-15%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '6%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '7%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '8%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        wiggle: {
          '0%': { transform: 'rotate(3deg)' },
          '3%': { transform: 'rotate(-3deg)' },
          '4%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'bounce-delay': 'bounce-delay 20s infinite',
        'bounce-delay-opacity': 'bounce-delay 20s infinite',
        wiggle: 'wiggle 20s ease-in-out infinite alternate'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#967F71'
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../public/paiting.webp')",
        wp: "url('../public/wp.png')"
      }
    }
  },
  plugins: []
}
export default config
