# Design

## Theme
A minimalist, glass-walled software engineering lab at twilight. The UI relies on stark typographic precision resembling architectural blueprints, grounded by matte obsidian backgrounds and punctuated by sharp atmospheric spotlights and a single, highly saturated accent color.

## Color Strategy
**Restrained** (with atmospheric elements)
- **Background (`--bg-base`)**: Matte obsidian / twilight slate (e.g., `oklch(0.18 0.01 260)`).
- **Surface (`--bg-surface`)**: Slightly elevated, translucent glass panels (e.g., `oklch(0.23 0.02 260 / 0.5)`).
- **Ink (`--text-primary`)**: High-contrast stark white (e.g., `oklch(0.98 0 0)`).
- **Muted (`--text-muted`)**: Architectural grid lines and metadata (e.g., `oklch(0.70 0.02 260)`).
- **Accent (`--accent`)**: Vibrant neon cyan (e.g., `oklch(0.85 0.15 200)`), used extremely sparingly for primary CTAs and precise interactive focal points.

## Typography
- **Primary / Display**: `Geist Sans` (built into the Next.js scaffold). Used with strict precision, tight tracking on large display sizes (e.g., `-0.02em`), and confident, unapologetic sizing.
- **Secondary / Metadata**: `Geist Mono`. Used for architectural annotations, kickers, and structural markers.
- **Body**: `Geist Sans`, comfortable line length (~65ch), strong contrast against the dark background.

## Layout & Structure
- **Topology**: Asymmetric precision. Heavy use of intentional negative space with staggered elements aligned to a rigid architectural grid.
- **Edges**: Sharp corners (`0px` or very minimal `2px` radii) to enforce the "precision engineering" tone.
- **Borders**: Hairline borders (`1px solid oklch(1 0 0 / 0.1)`) acting as blueprint grid lines.

## Motion & Interaction
- **Feel**: Snappy, deliberate, exponential easing (`ease-out-expo`). Zero bounce or elastic effects.
- **Hover States**: Sharp glass-like reflections or a sudden flare of the cyan accent spotlighting the target.
