<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:aetox-design-system -->
# AETOX B2B Design System Rules

Whenever modifying or creating new UI components for Aetox.dev, you MUST adhere to these design rules:

1. **Theme & Colors (Tailwind)**
   - **Background**: Ultra Dark Mode (`bg-ultra-dark` -> `#0A0F1C`)
   - **Accents**: Cyberpunk Blue (`text-cyber-blue` -> `#06B6D4`, `text-deep-blue` -> `#3B82F6`)
   - **Glow Effects**: Use `shadow-cyber-glow` or `shadow-deep-glow` for hover states. DO NOT use generic box shadows.

2. **Component Architecture (Glassmorphism)**
   - Use the custom `.glass-card` class for all panels and cards.
   - For interactive cards, add `.glass-card-hover` to trigger the translation, border highlight, and cyber-glow.
   - Avoid solid background colors for cards; they must always be slightly transparent with `backdrop-blur-2xl`.

3. **Typography & Styling**
   - Use `text-white` for primary headings, `text-gray-400` or `text-gray-300` for subtitles and descriptions.
   - For hero or main headlines, apply the `.text-gradient` utility class to create the blue gradient text.
   - Icons must be drawn from `lucide-react`. Do not use emojis.

4. **Tone & Branding**
   - The tone is "Corporate Premium, B2B, High-Tech, Silicon Valley Architecture". 
   - Highlight the founder "Chayapol Promsavana" as a "National AI Gold Medalist" to build B2B authority.
<!-- END:aetox-design-system -->
