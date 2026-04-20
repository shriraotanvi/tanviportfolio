/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0B",
        gold: {
          light: "#E5C158",
          DEFAULT: "#D4AF37",
          dark: "#B8860B",
        },
        glass: "rgba(255, 255, 255, 0.05)",
        surface: "#111112",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        'scroll-marquee': 'marquee 40s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
