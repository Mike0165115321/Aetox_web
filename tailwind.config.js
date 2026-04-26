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
        DEFAULT: "2rem",
        sm: "4rem",
        lg: "6rem",
        xl: "8rem",
      },
    },
    extend: {
      colors: {
        // ─── Backgrounds ───────────────────────────────────────────
        "aetox-bg":        "#000000",  // Pure Black — authority & depth
        "aetox-surface":   "#111111",  // Elevated surface (cards)
        "aetox-surface-2": "#1A1A1A",  // Second layer (nested cards)
        "aetox-border":    "#2A2A2A",  // Sharp 1px industrial border

        // ─── Typography ────────────────────────────────────────────
        "aetox-text-main":  "#F5F5F7", // Apple headline white — clarity
        "aetox-text-soft":  "#86868B", // Apple secondary — readable muted
        "aetox-text-muted": "#48484A", // Near-invisible — luxury breathing

        // ─── Accent (USE ONLY ON CTA) ──────────────────────────────
        "aetox-accent":       "#0A84FF", // iOS Blue — trust + technology
        "aetox-accent-hover": "#0071E3", // Apple button hover
      },

      backgroundImage: {
        // Aetox signature grid — felt more than seen (blueprint feel)
        "aetox-blueprint":
          "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), " +
          "linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
      },

      boxShadow: {
        // Elevation — no glow except CTA
        "aetox-card": "0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.7)",
        // CTA glow — single use only
        "aetox-glow": "0 0 0 1px rgba(10,132,255,0.25), 0 8px 24px rgba(10,132,255,0.12)",
      },

      animation: {
        // Breathe — slow, subtle, purposeful (logo / hero element only)
        "aetox-breathe": "aetox-breathe 4s ease-in-out infinite",
      },

      keyframes: {
        "aetox-breathe": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.6",
            transform: "scale(0.97)",
          },
        },
      },

      fontFamily: {
        // Thai-first, EN second — both premium and legible
        sans: ["var(--font-ibm-plex-thai)", "var(--font-inter)", "sans-serif"],
      },

      letterSpacing: {
        // Used for badge/label text
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

/*
 ┌─────────────────────────────────────────────┐
 │         AETOX USAGE RULES (mandatory)       │
 ├─────────────────────────────────────────────┤
 │ bg-aetox-blueprint  → Hero section ONLY     │
 │ shadow-aetox-glow   → CTA button ONLY       │
 │ text-aetox-accent   → 1-2 words max         │
 │ animate-aetox-breathe → Logo / hero ONLY    │
 │ Everything else     → No glow, no animate   │
 └─────────────────────────────────────────────┘
*/