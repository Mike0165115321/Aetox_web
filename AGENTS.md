# AETOX.DEV Project Charter & AI Guidelines

Welcome, Agent. You are assisting in the development of **Aetox.dev**, a high-end B2B landing page for a Software Engineering Architect & National AI Gold Medalist. 

Everything you build here must adhere to the following **Identity, Design, and Technical Rules**.

---

## 1. Brand Identity & Tone
- **Tone**: Corporate Premium, B2B, Strategic Technology Partner.
- **The Founder**: Chayapol Promsavana (National AI Gold Medalist)
- **Core Positioning**:
  We solve business problems by engineering scalable systems.
- **Value Proposition**:
  We don’t just write code — we design systems that reduce manual work, increase speed, and enable real business growth.
- **Technology Layer (Support, not headline)**:
  AI + Automation + Scalable Architecture
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

## 5. Layout & Interaction Standards (Strict)
- **Centered Navigation**: The Navbar menu must always be centered relative to the viewport (using `absolute left-1/2 -translate-x-1/2`), ensuring it remains perfectly centered regardless of the content length on the left (Logo) or right (Actions).
- **Consistent Spacing**: All major sections and the Navbar container must use `container mx-auto` (without additional px-6) to ensure perfectly aligned horizontal edges based on the global padding defined in `tailwind.config.js`.
- **Tactile Feedback**: All buttons and interactive cards must include an `active:scale-95` transition to provide a premium, tactile feel upon clicking.
- **Z-Index Management**: Navbar must always have `z-[100]` to stay above all animations and 3D elements.

---

> [!IMPORTANT]
> This file is the Source of Truth for the Aetox brand. Any changes to the UI must respect these constraints to maintain a "National Gold Medalist" level of quality.

<!-- AI Context Marker: AETOX_CHARTER_V1 -->
