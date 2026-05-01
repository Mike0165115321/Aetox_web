/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // ─── Dark Mode: class-based (Toggle override + OS default via JS) ──────────
  darkMode: "class",

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
        DEFAULT: "1.5rem",
        sm: "2.5rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
      },
    },

    extend: {
      // 3. COLOR SYSTEM ─────────────────────────────────────────────────────────
      //
      //  แนวคิด: Token ชื่อเดิม (semantic) แต่ค่าสีเปลี่ยนตาม .dark / :root
      //  → ใช้ CSS Variables เป็นตัวกลาง ทำให้ component ไม่ต้องเขียนสองชุด
      //
      //  วิธีใช้ใน component:
      //    bg-aetox-bg          ← พื้นหลังหลัก
      //    bg-aetox-surface     ← Card / Elevated
      //    text-aetox-text-main ← ข้อความหลัก
      //    text-aetox-text-soft ← ข้อความรอง
      //    border-aetox-border  ← เส้นขอบ
      //    bg-aetox-accent      ← CTA เท่านั้น
      // ─────────────────────────────────────────────────────────────────────────
      colors: {
        // ── Backgrounds (Surface Hierarchy) ───────────────────────────────────
        "aetox-bg":                "rgb(var(--aetox-bg-rgb) / <alpha-value>)",
        "aetox-surface-lowest":    "rgb(var(--aetox-surface-lowest-rgb) / <alpha-value>)",
        "aetox-surface-low":       "rgb(var(--aetox-surface-low-rgb) / <alpha-value>)",
        "aetox-surface":           "rgb(var(--aetox-surface-rgb) / <alpha-value>)",
        "aetox-surface-high":      "var(--aetox-surface-high)",
        "aetox-surface-highest":   "var(--aetox-surface-highest)",
        
        // Unified Card System
        "aetox-card-bg":           "var(--aetox-card-bg)",
        "aetox-card-border":       "var(--aetox-card-border)",
        "aetox-card-hover":        "var(--aetox-card-hover)",

        // ── Borders ───────────────────────────────────────────────────────────
        "aetox-border":            "var(--aetox-border)",
        "aetox-border-strong":     "var(--aetox-border-strong)",

        // ── Typography ────────────────────────────────────────────────────────
        "aetox-text-main":         "var(--aetox-text-main)",
        "aetox-text-soft":         "var(--aetox-text-soft)",
        "aetox-text-muted":        "var(--aetox-text-muted)",

        // ── Accent & Status (With Opacity Support) ─────────────────────────────
        "aetox-accent":            "rgb(var(--aetox-accent-rgb) / <alpha-value>)",
        "aetox-accent-hover":      "rgb(var(--aetox-accent-rgb) / 0.8)",
        "aetox-accent-subtle":     "rgb(var(--aetox-accent-rgb) / 0.1)",
        "aetox-error":             "rgb(var(--aetox-error-rgb) / <alpha-value>)",
        "aetox-error-surface":     "rgb(var(--aetox-error-rgb) / 0.1)",

        // ── Atmosphere (Auras) ────────────────────────────────────────────────
        "aetox-aura-1":            "var(--aetox-aura-1)",
        "aetox-aura-2":            "var(--aetox-aura-2)",

        // ── Legacy ────────────────────────────────────────────────────────────
        "cyber-blue":              "#06B6D4",
        "ultra-dark":              "#050505",
        "deep-blue":               "#0066CC",
      },

      // 4. FLUID TYPOGRAPHY ─────────────────────────────────────────────────────
      fontSize: {
        "fluid-h1": ["clamp(2.25rem, 4vw + 1rem, 4.5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "fluid-h2": ["clamp(1.75rem, 3vw + 1rem, 3rem)",    { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        "fluid-h3": ["clamp(1.25rem, 2vw + 1rem, 2rem)",    { lineHeight: "1.2",  fontWeight: "600" }],
        "fluid-h4": ["clamp(1.125rem, 1.5vw + 1rem, 1.5rem)", { lineHeight: "1.4", fontWeight: "500" }],
        "fluid-p":  ["clamp(1rem, 1vw + 0.75rem, 1.125rem)", { lineHeight: "1.7",  fontWeight: "400" }], // +0.1 สำหรับภาษาไทย
        "fluid-sm": ["clamp(0.875rem, 0.5vw + 0.75rem, 1rem)", { lineHeight: "1.6", fontWeight: "400" }],
        "fluid-label": ["0.75rem", { lineHeight: "1", fontWeight: "600", letterSpacing: "0.05em" }],
      },

      // 5. FONT FAMILY ──────────────────────────────────────────────────────────
      fontFamily: {
        // Display / Heading → Lexend (อ่านง่าย, geometric, รองรับภาษาไทยได้ดี)
        display: ["var(--font-lexend)", "var(--font-ibm-plex-thai)", "sans-serif"],
        // Body / UI — ใช้ Lexend เป็นหลัก + IBM Plex Thai รองรับภาษาไทย
        sans: ["var(--font-lexend)", "var(--font-ibm-plex-thai)", "var(--font-inter)", "sans-serif"],
      },

      // 6. ROUNDED SYSTEM (จาก Elite Minimalism) ────────────────────────────────
      borderRadius: {
        sm:      "0.125rem", // 2px  — Input focus ring
        DEFAULT: "0.25rem",  // 4px  — Button, Input
        md:      "0.375rem", // 6px  — Small card
        lg:      "0.5rem",   // 8px  — Card, Modal
        xl:      "0.75rem",  // 12px — Large container
        full:    "9999px",   // Pill — Badge, Tag
      },

      // 7. SPACING (4px baseline grid) ──────────────────────────────────────────
      spacing: {
        xs:     "0.5rem",  // 8px
        sm:     "1rem",    // 16px
        md:     "1.5rem",  // 24px
        lg:     "2.5rem",  // 40px
        xl:     "4rem",    // 64px
        gutter: "1.5rem",
        margin: "2rem",
      },

      // 8. EFFECTS & ANIMATIONS ─────────────────────────────────────────────────
      backgroundImage: {
        // Blueprint grid — Hero section เท่านั้น
        "aetox-blueprint":
          "linear-gradient(var(--aetox-grid-line) 1px, transparent 1px), " +
          "linear-gradient(90deg, var(--aetox-grid-line) 1px, transparent 1px)",
      },
      boxShadow: {
        "aetox-card": "var(--aetox-shadow-card)",
        "aetox-glow": "var(--aetox-shadow-glow)",   // CTA button เท่านั้น
        "aetox-inset": "inset 0 1px 0 var(--aetox-border)",
      },
      animation: {
        "aetox-breathe": "aetox-breathe 4s ease-in-out infinite",
        "aetox-fade-in": "aetox-fade-in 0.4s ease-out forwards",
      },
      keyframes: {
        "aetox-breathe": {
          "0%, 100%": { opacity: "1",   transform: "scale(1)" },
          "50%":      { opacity: "0.6", transform: "scale(0.97)" },
        },
        "aetox-fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

/*
 ┌──────────────────────────────────────────────────────────────────┐
 │                   AETOX CSS VARIABLES                            │
 │   วางใน globals.css หรือ layout.tsx (required)                  │
 ├──────────────────────────────────────────────────────────────────┤
 │                                                                  │
 │  :root {                          ← Light Mode (Apple-style)     │
 │    --aetox-bg:                #FFFFFF;                           │
 │    --aetox-surface-lowest:    #F9F9F9;                           │
 │    --aetox-surface-low:       #F3F3F3;                           │
 │    --aetox-surface:           #EBEBEB;                           │
 │    --aetox-surface-high:      #E0E0E0;                           │
 │    --aetox-surface-highest:   #D5D5D5;                           │
 │    --aetox-border:            rgba(0,0,0,0.08);                  │
 │    --aetox-border-strong:     rgba(0,0,0,0.18);                  │
 │    --aetox-text-main:         #1A1A1A;                           │
 │    --aetox-text-soft:         #555555;                           │
 │    --aetox-text-muted:        #999999;                           │
 │    --aetox-accent:            #0A84FF;                           │
 │    --aetox-accent-hover:      #0071E3;                           │
 │    --aetox-accent-subtle:     rgba(10,132,255,0.1);              │
 │    --aetox-error:             #FF3B30;                           │
 │    --aetox-error-surface:     rgba(255,59,48,0.1);               │
 │    --aetox-grid-line:         rgba(0,0,0,0.04);                  │
 │    --aetox-shadow-card:       0 1px 3px rgba(0,0,0,0.08),        │
 │                               0 4px 16px rgba(0,0,0,0.06);       │
 │    --aetox-shadow-glow:       0 0 0 1px rgba(10,132,255,0.3),    │
 │                               0 8px 24px rgba(10,132,255,0.15);  │
 │  }                                                               │
 │                                                                  │
 │  .dark {                          ← Dark Mode (Pure Black)       │
 │    --aetox-bg:                #050505;                           │
 │    --aetox-surface-lowest:    #080808;                           │
 │    --aetox-surface-low:       #0F0F0F;                           │
 │    --aetox-surface:           #111111;                           │
 │    --aetox-surface-high:      #1A1A1A;                           │
 │    --aetox-surface-highest:   #242424;                           │
 │    --aetox-border:            rgba(255,255,255,0.06);            │
 │    --aetox-border-strong:     rgba(255,255,255,0.12);            │
 │    --aetox-text-main:         #F5F5F7;                           │
 │    --aetox-text-soft:         #86868B;                           │
 │    --aetox-text-muted:        #48484A;                           │
 │    --aetox-accent:            #0A84FF;                           │
 │    --aetox-accent-hover:      #0071E3;                           │
 │    --aetox-accent-subtle:     rgba(10,132,255,0.15);             │
 │    --aetox-error:             #FF453A;                           │
 │    --aetox-error-surface:     rgba(255,69,58,0.15);              │
 │    --aetox-grid-line:         rgba(255,255,255,0.018);           │
 │    --aetox-shadow-card:       0 1px 0 rgba(255,255,255,0.04),    │
 │                               0 8px 32px rgba(0,0,0,0.7);        │
 │    --aetox-shadow-glow:       0 0 0 1px rgba(10,132,255,0.25),   │
 │                               0 8px 24px rgba(10,132,255,0.12);  │
 │  }                                                               │
 │                                                                  │
 ├──────────────────────────────────────────────────────────────────┤
 │   THEME TOGGLE SCRIPT (วางใน <head> ก่อน render)                │
 │                                                                  │
 │  <script>                                                        │
 │    const saved = localStorage.getItem('aetox-theme');            │
 │    const prefersDark = window.matchMedia(                        │
 │      '(prefers-color-scheme: dark)').matches;                    │
 │    if (saved === 'dark' || (!saved && prefersDark)) {            │
 │      document.documentElement.classList.add('dark');             │
 │    }                                                             │
 │  </script>                                                       │
 │                                                                  │
 ├──────────────────────────────────────────────────────────────────┤
 │   USAGE RULES (mandatory)                                        │
 ├──────────────────────────────────────────────────────────────────┤
 │ 1. Layout : ทุก section ต้อง wrap ด้วย <div className="container"> │
 │ 2. Text   : ใช้ text-fluid-h1 / text-fluid-p เท่านั้น           │
 │             ห้าม hardcode text-sm / text-lg                       │
 │ 3. Font   : heading → font-display / body → font-sans            │
 │ 4. Blueprint bg → Hero section เท่านั้น                          │
 │ 5. Glow shadow → CTA button เท่านั้น                             │
 │ 6. Breathe animation → Logo / Hero element เท่านั้น              │
 │ 7. Accent color → CTA, Active, Data highlight เท่านั้น           │
 │    ห้ามใช้ accent เป็นสีพื้นหลัง section                         │
 │ 8. Component min-height → 48px (รองรับ Thai glyph)              │
 └──────────────────────────────────────────────────────────────────┘
*/