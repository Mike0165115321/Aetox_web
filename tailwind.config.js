/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // 1. GLOBAL SCREENS — ล็อก Ultrawide ไม่ให้พัง
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1280px", // Lock max-width at 1280px (Apple/Linear standard)
    },
    
    // 2. CONTAINER — ควบคุม Margins ป้องกันเนื้อหาชิดขอบจอ
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem", // Mobile spacing
        sm: "2.5rem",      // Tablet
        md: "4rem",        // Laptop
        lg: "6rem",        // Desktop
        xl: "8rem",        // Ultrawide (safeguard)
      },
    },
    
    extend: {
      // 3. COLOR SYSTEM — Pure Black & iOS Blue
      colors: {
        // ─── Backgrounds ───────────────────────────────────────────
        "aetox-bg":        "#050505",  // Softer Off-Black — depth focus
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

      // 4. FLUID TYPOGRAPHY — สเกลตัวอักษรอัตโนมัติ ไม่ต้องทำ Breakpoint ซ้อน
      fontSize: {
        "fluid-h1": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "fluid-h2": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "fluid-h3": ["clamp(1.25rem, 2.5vw, 2rem)", { lineHeight: "1.2" }],
        "fluid-p":  ["clamp(1rem, 1.5vw, 1.125rem)", { lineHeight: "1.6" }], // Fixed: 16px min on mobile
      },

      // 5. EFFECTS & ANIMATIONS
      backgroundImage: {
        "aetox-blueprint":
          "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), " +
          "linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
      },
      boxShadow: {
        "aetox-card": "0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.7)",
        "aetox-glow": "0 0 0 1px rgba(10,132,255,0.25), 0 8px 24px rgba(10,132,255,0.12)",
      },
      animation: {
        "aetox-breathe": "aetox-breathe 4s ease-in-out infinite",
      },
      keyframes: {
        "aetox-breathe": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.97)" },
        },
      },
      
      // 6. CORE TYPOGRAPHY
      fontFamily: {
        sans: ["var(--font-ibm-plex-thai)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

/*
 ┌─────────────────────────────────────────────┐
 │       AETOX USAGE RULES (mandatory)         │
 ├─────────────────────────────────────────────┤
 │ 1. Layout: MUST wrap all sections in        │
 │    `<div className="container">`            │
 │ 2. Text: MUST use `text-fluid-h1`,          │
 │    `text-fluid-p` (No hardcoded text-sm/lg) │
 │ 3. bg-aetox-blueprint → Hero section ONLY   │
 │ 4. shadow-aetox-glow  → CTA button ONLY     │
 │ 5. animate-aetox-breathe → Logo / hero ONLY │
 └─────────────────────────────────────────────┘
*/