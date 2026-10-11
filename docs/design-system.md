# CloudsInSight Design System

Plain CSS custom properties and Astro components. No CSS framework.

Live reference: `/design-system` (run `npm run dev`). The page is `noindex` and is not linked from navigation.

## Principles

* Audience is technical decision-makers first, engineers second. Tone is technical and no-nonsense, with a little warmth.
* Content and credibility before visual complexity. No stock imagery; use diagrams where they explain something.
* Accessible by default: body text and interactive colours meet WCAG AA on their backgrounds.
* Light mode only for v1.

## Files

| Path | Purpose |
| --- | --- |
| `src/styles/tokens.css` | Palette, semantic colours, type, space, radius, shadow, motion |
| `src/styles/global.css` | Reset, base elements, `.container`, `.grid`, `.stack`, `.eyebrow`, `.lead`, `.prose` |
| `src/layouts/BaseLayout.astro` | HTML shell, metadata, favicon, header, footer, skip link |
| `src/components/` | `Logo`, `Button`, `Section`, `SectionHeader`, `Card`, `Badge`, `Callout`, `ProcessSteps`, `Icon`, `SiteHeader`, `SiteFooter` |
| `src/assets/brand/` | Logo variants derived from the original artwork |

Components use semantic tokens (`--color-text`, `--color-action`) rather than palette tokens (`--sky-700`), so the palette can change in one place.

## Colour

| Token | Hex | Use |
| --- | --- | --- |
| `--sky-400` | `#5CB8FF` | Logo blue. Brand sections and calls to action, always with navy text |
| `--teal-300` | `#60CDDD` | Logo accent. Rules, list markers, step borders |
| `--navy-900` | `#0B2545` | Body text, footer, inverse sections |
| `--sky-700` | `#1466AD` | Links and primary buttons |
| `--teal-700` | `#1C8494` | Eyebrows and accent text |

White on `#5CB8FF` is 2.2:1 and fails WCAG, so never put white text on the brand blue. Navy on the brand blue is 7.2:1.

## Typography

Inter Variable (self-hosted via `@fontsource-variable/inter`) for headings and body. System monospace for code. The slab serif is reserved for the logo.

Fluid scale from `--text-xs` to `--text-4xl`. Long-form text is capped at `--measure` (68ch).

## Sections

`<Section tone="...">` sets the background and remaps text, link and accent tokens for its children:

* `default` white, `subtle` light grey, `tint` light sky: alternate between these.
* `brand`: the logo blue. Use at most once or twice per page, for a call to action.
* `inverse`: navy. Emphasis and the footer.

## Blog content

Wrap rendered Markdown in `<div class="prose">`. Use `<Callout type="note|tip|warning|danger">` in MDX for asides.

## Logo assets

Generated from the original logo PNG by removing the blue background and recolouring the white linework to navy:

* `logo-horizontal.png`, `logo-horizontal-white.png`: header and footer.
* `logo-color.png`: stacked version.
* `mark-color.png`: icon only.
* `public/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png`: the mark on brand blue.

An SVG version of the logo from the original design tool would be sharper and smaller; swap it in when available.
