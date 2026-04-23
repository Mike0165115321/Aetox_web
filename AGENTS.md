# AETOX.DEV Project Charter & AI Guidelines

Welcome, Agent. You are assisting in the development of **Aetox.dev**, a high-end B2B landing page for a Software Engineering Architect & National AI Gold Medalist. 

Everything you build here must adhere to the following **Identity, Design, and Technical Rules**.

---

## 1. Brand Identity & Tone
- **Tone**: Corporate Premium, B2B, High-Tech, Software Architecture.
- **The Founder**: Chayapol Promsavana (National AI Gold Medalist). 
- **Value Proposition**: We don't just write code; we architect intelligent ecosystems (AI + Automation + Full-Stack).
- **No Emojis**: Use professional language and SVG/Lucide icons only.

## 2. Design System (Ultra Dark Cyberpunk)
- **Background**: `#0A0F1C` (Tailwind: `bg-ultra-dark`)
- **Accent 1 (Cyan)**: `#06B6D4` (Tailwind: `text-cyber-blue`)
- **Accent 2 (Blue)**: `#3B82F6` (Tailwind: `text-deep-blue`)
- **Glassmorphism**: 
  - Use the `.glass-card` utility class.
  - Cards MUST have `backdrop-blur-2xl`, subtle white borders (`border-white/10`), and an inner reflection (`border-t-white/20`).
- **Glow**: Use `shadow-cyber-glow` or `shadow-deep-glow` for hover interactions.

## 3. Tech Stack Requirements
- **Framework**: Next.js (App Router).
- **Styling**: Tailwind CSS (Configuration is in `tailwind.config.js`).
- **Animations**: Framer Motion (Keep them subtle, smooth, and high-end).
- **Type Safety**: TypeScript (`.tsx`) is the standard for all new components.
- **Icons**: `lucide-react`. If an icon is missing (like brand logos), use an inline SVG.

## 4. Component Standards
- All sections must be **Responsive** (Mobile-first).
- Interactive elements must have clear **Hover States** using the Cyber-blue theme.
- Forms must use the specific prompt: *"เล่างานที่น่าเบื่อที่สุดของคุณให้เราฟัง"*.

---

> [!IMPORTANT]
> This file is the Source of Truth for the Aetox brand. Any changes to the UI must respect these constraints to maintain a "National Gold Medalist" level of quality.

<!-- AI Context Marker: AETOX_CHARTER_V1 -->
