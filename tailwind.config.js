/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        "primary-hover": "#6D28D9",
        bg: "#131313",
        "surface-low": "#1C1B1B",
        "surface-high": "#2A2A2A",
        purple: {
          DEFAULT: "#7C3AED",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        }
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        accent: ["Montserrat", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
      animation: {
        'in': 'fadeIn 0.5s ease-out forwards',
        'float-3d': 'float3d 4s ease-in-out infinite',
        'lens-flare': 'flare 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float3d: {
          '0%, 100%': { transform: 'translateY(0) rotate(15deg) scale(1)' },
          '50%': { transform: 'translateY(-25px) rotate(12deg) scale(1.05)' },
        },
        flare: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '25%, 75%': { opacity: '0' },
          '50%': { opacity: '0.8', transform: 'scale(1.2) rotate(180deg)' },
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
