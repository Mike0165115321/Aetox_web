# AETOX.DEV Project Charter & AI Guidelines

Welcome, Agent. You are assisting in the development of **Aetox.dev**, a high-end B2B landing page for a Software Engineering Architect & National AI Gold Medalist. 

**[PRIME DIRECTIVE]**
Everything you build here must balance Technical Excellence with Business Conversion. You are not just writing code; you are building a "Closing Engine".

---

## 1. Brand Identity & Tone
- **Tone**: Corporate Premium, B2B, Strategic Technology Partner.
- **The Founder**: Mike (Chayapol Promsavana) - National AI Gold Medalist.
- **Core Positioning**: We solve business problems by engineering scalable AI and Automation systems.
- **Value Proposition**: We don’t just write code — we design systems that reduce manual work, increase speed, and enable real business growth.
- **No Emojis in UI**: Use professional language and SVG/Lucide icons only for the actual frontend interface.

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
- **Icons**: `lucide-react`. If an icon is missing, use an inline SVG.
- **Modular Architecture**: Strictly enforce component separation (UI, Logic, Data) with a maximum of 300 lines per file to prevent monolithic code structures.
- **No Unauthorized Dependencies**: Restrict imports exclusively to the approved stack (Tailwind, Framer Motion, Lucide) unless explicitly authorized by the Founder.
- **Executive Thai Language**: Generated Thai copy must be concise, impactful, and match C-Level business communication standards, strictly avoiding any robotic or direct-translation phrasing.

## 4. Layout & Interaction Standards (Strict)
- **Conversion-First Layout**: Always follow the 7-Step Funnel Flow (Hook → Pain → Trust → Engage → Money → Logic → Close).
- **Centered Navigation**: The Navbar menu must always be centered relative to the viewport (`absolute left-1/2 -translate-x-1/2`).
- **Consistent Spacing**: All major sections must use `container mx-auto` to ensure perfectly aligned horizontal edges.
- **Tactile Feedback**: All buttons and interactive cards must include an `active:scale-95` transition.
- **Z-Index Management**: Navbar must always have `z-[100]` to stay above all animations.
- **Dynamic Engagement**: Calculators or sliders must update resulting monetary values in real-time.

---

> [!IMPORTANT]
> This file is the Source of Truth for the Aetox brand's technical and visual foundation. Combine this with the Conversion Rules to maintain a "National Gold Medalist" level of quality.