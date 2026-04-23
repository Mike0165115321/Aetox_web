/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '3rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    extend: {
      colors: {
        "ultra-dark": "#0A0F1C",
        "cyber-blue": "#06B6D4",
        "deep-blue": "#3B82F6",
        background: "#0A0F1C",
        foreground: "#F0F0F0",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "cyber-glow": "0 0 20px rgba(6, 182, 212, 0.3)",
        "deep-glow": "0 0 30px rgba(59, 130, 246, 0.2)",
      },
      animation: {
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: 1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" },
          "50%": { opacity: 0.8, boxShadow: "0 0 40px rgba(6, 182, 212, 0.7)" },
        }
      }
    },
  },
  plugins: [],
};
