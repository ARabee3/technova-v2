# Technova Digital Studio

A high-performance, production-ready landing page built for modern digital agencies. Engineered with strict adherence to design system principles, tactile micro-interactions, and accessibility standards.

## The "Twilight Lab" Aesthetic
This project rejects generic templates in favor of a "twilight lab" aesthetic—dark mode, high-contrast cyan accents, and precise architectural alignments. 

- **Custom SVG Stencil Logo**: A dynamic monogram that responds to hover states and is fully accessible to screen readers.
- **Asymmetric Bento Grid**: A precisely calculated 4-item portfolio grid that balances visual weight without relying on identical, repetitive cards.
- **Optical Typography**: Font pairings and line heights tuned for readability and visual rhythm, capped at optimal character lengths.

## Engineering & Interaction
Built not just to look good, but to feel physically responsive:
- **Tactile Inputs**: All primary buttons and CTAs feature `active:scale-[0.98]` physical depression states to simulate real-world hardware feedback.
- **Power-User Shortcuts**: A global keyboard event listener allows users to press `C` anywhere on the site to instantly scroll to and focus the contact form. Documented in the UI with a subtle `<kbd>` badge.
- **Hardened Forms**: The contact component is a fully interactive React Client Component featuring:
  - Custom client-side validation with inline error states (removing ugly browser defaults).
  - An animated "Establishing Connection..." loading overlay.
  - A secure, accessible digital receipt state equipped with `aria-live` for screen readers.
  - Smart vertical resizing constraints that allow users freedom without breaking the grid.

## Built with Impeccable
This project was conceptualized and iterated using **Impeccable**—an advanced agentic workflow for frontend engineering. Impeccable acts as a relentless design critic and pair-programmer, enforcing strict heuristics:
- `/impeccable critique`: Heuristic scoring against Nielsen's principles to identify UX gaps and eliminate "AI slop" patterns (gradient text, repetitive eyebrows, generic cards).
- `/impeccable layout`: Grid alignments, rhythm correction, and pixel-perfect spacing.
- `/impeccable harden & polish`: Ensuring the final product handles edge cases, error states, and responsive constraints flawlessly.
- `/impeccable delight`: Injecting the power-user shortcuts and tactile feedback that turn a good UI into a memorable one.

*Using Impeccable ensures the gap between "working code" and "premium product" is bridged through rigorous, systematic design engineering.*

## Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [React 19](https://react.dev/)
- **Typography**: Geist & Geist Mono

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
This project is optimized for deployment on [Vercel](https://vercel.com).
