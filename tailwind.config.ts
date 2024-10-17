import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow:{'top-primary':'0 -4px 100px 100px rgba(150, 127, 113, .7)'},
  keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(3deg)' },
          '3%': { transform: 'rotate(-3deg)' },'4%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 20s ease-in-out infinite alternate',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:'#967F71'
      }, backgroundImage: { 
        'hero' : "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../public/paiting.webp')",
      }
    },
  },
  plugins: [],
};
export default config;
