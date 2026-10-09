# Nexa Design System

Nexa is a clinical claims-operations platform: medical record review and payment-integrity
audits for health-plan clinical auditors and nurses. The one product surface we have ground
truth for is the auditor's daily workspace — a queue of "Medical Record Review" and "Audit
Review" assignments (claim numbers, providers, members, SLAs, paid/audit amounts) that a
Clinical Auditor (the sample user, "Dana Lewis, RN") works through every shift.

This design system was built from a single AI-native design-system project the user attached
on GitHub. Nothing here is a production codebase — it's a self-documenting design spec
(tokens, a moodboard, one page's worth of live UI) built with the same live-preview component
format this project itself uses. Explore it further at:

- **Repo:** https://github.com/swati-soni-ux/ai-native-design-system
- Files used as source-of-truth: `nexa-tokens.css` (color tokens), `My Inventory v2.dc.html`
  (the one fully-built product screen — header, nav, tabs, queue), `CardV2.dc.html` (the
  assignment/record card), `index.html` (the design system's own documentation site — type
  scale, spacing scale, radius, elevation, icon rules)
- `Visual Direction Moodboard.dc.html` is an **exploratory future direction** ("Clinical
  Calm"), explicitly proposed as a possible evolution, not the shipped system — it is
  referenced in this readme for context only and was not used as a token source.

If you have access to the repo, read it directly — it documents its own reasoning (e.g. why
each spacing/shadow/radius decision was made) in far more depth than this readme can restate.

## Content fundamentals

- **Voice:** operational and precise, not marketing copy. Labels are short nouns in Title
  Case ("Due Date", "Claim #", "Audit Amount"). Sentences in help/empty-state text are plain
  and short: *"No matching assignments — Try clearing the filter or search."*
- **Numbers over adjectives.** SLA state is communicated as a countdown ("3d left", "1d
  overdue") rather than a word like "urgent" — the auditor should be able to triage without
  reading prose.
- **IDs are load-bearing and always monospace**: `MR-2026-004821`, `CLM-88342119`,
  `AUD-77-091204`. They're never abbreviated or reformatted.
- **No "I" voice, minimal "you."** The product speaks in third person about the work
  ("Opening review MR-2026-004821…") rather than addressing the user directly.
- **No emoji, ever.** This is a clinical/financial tool; emoji would undercut trust.
- **Toasts confirm, they don't celebrate**: "Assignment pinned", "MR Request ID copied ·
  MR-2026-004821" — factual, past-tense or gerund, no exclamation points.
- **Empty and disabled states name the missing thing directly**, not "Oops!" or "Nothing
  here yet" — e.g. "No matching assignments."

## Visual foundations

- **Color:** one operational hue — teal (`--accent #008E8E` light / `#00BEB7` dark) — used
  almost nowhere except the single primary action per view and active/selected state. Status
  is carried by six tint pairs (success/warning/danger/info/review-violet/neutral), always a
  soft background + matching foreground text, never a solid saturated fill. Surfaces are a
  cool near-white (`#FCFEFE`) on a very slightly cooler canvas (`#F4FAFB`) — the gap between
  card and canvas is the entire depth model; there is no visible "dark mode inversion," dark
  theme uses the same structure with a cool near-black canvas.
- **Type:** three faces with fixed jobs. **Plus Jakarta Sans** (700/800 only) for page
  titles, KPI figures and money totals — never for body copy. **IBM Plex Sans** (400–700) for
  every label, control, paragraph and table cell. **IBM Plex Mono** for every identifier,
  claim number and monetary figure inline in a list. Display type tracks tight
  (`-0.03em` to `-0.042em`); body type tracks normal.
- **Spacing:** strict 4px rhythm (`--s0` 2px … `--s10` 40px). Generous *between* cards/panels
  gutters, disciplined *inside* them — that contrast is what keeps a dense queue screen calm.
- **Backgrounds:** flat color only. No photography, no gradients, no illustration, no
  patterns or textures anywhere in the product UI. (The one exploratory moodboard experiments
  with a soft aqua environment gradient behind cards — that treatment has not shipped.)
- **Animation:** small and functional only — dropdown/menu pop-in (translateY + scale,
  150ms, `ease-entrance`), toast slide-up (250ms), nav-width collapse (250ms
  `ease-standard`). Nothing bounces, nothing loops. `prefers-reduced-motion` collapses all
  durations to 1ms.
- **Hover states:** a soft tint wash (`--sem-action-secondary-hover`) on neutral controls;
  the primary button darkens one step (`--accent` → `--accent-hover`). No lighten-on-hover,
  no shadow-pop-on-hover.
- **Press/active states:** not separately themed in the source — hover tint persists through
  click; rely on the built-in browser/OS press feedback rather than a custom press style.
- **Borders:** almost never a visible border. Structure is drawn with `box-shadow: inset 0 0
  0 1px var(--sem-border-*)` hairlines (inputs, cards-on-cards) or with a background tint
  step, not a stroke. `--border-strong` appears only on interactive boundaries like the
  pin-button ring and secondary buttons.
- **Shadows:** four elevation steps (`--sem-elevation-resting/raised/floating/overlay`), each
  a **two-layer, teal-tinted** shadow (never neutral grey) — a tight low-opacity layer plus a
  wide soft one. Resting cards use level 1; a pinned card or open dropdown/toast uses higher
  levels. No inner shadow on cards; insets are for input fields only.
- **Corner radius:** grows with the element — `6px` small controls, `10px` inputs/buttons,
  `16px` cards/menus, fully round (`999px`/`50%`) for anything meant to read as a control:
  avatars, icon buttons, pills, badges, dots.
- **Cards:** flat surface color, `16px` radius, `24px` internal padding, resting shadow (no
  border), content laid out in a flex row of labeled fields with a right-aligned primary
  action button. A pinned card gets the next elevation step up — elevation, not color, marks
  "important."
- **Transparency/blur:** not used. Dropdowns and toasts are fully opaque with a floating
  shadow instead of translucency.
- **Layout:** fixed 64px header + collapsible left nav (240px ⇄ 64px, icon-only when
  collapsed) + scrolling main content. Header and nav are both sticky; only the queue/content
  region scrolls.
- **Imagery tone:** none in-product beyond a small circular staff-avatar photo (cool-toned,
  face-cropped). No illustration, no stock photography, no 3D — see Iconography below.

## Iconography

- **System:** [Material Symbols Outlined](https://fonts.google.com/icons), loaded from
  Google Fonts as a variable icon font — this is a direct match to the source repo, not a
  substitution. Fixed axis settings: `weight 300` (light optical weight), unfilled
  (`FILL 0`), grade `0`, no duotone.
- **Sizes:** four fixed steps only — `16 / 18 / 20 / 22px` (`--icon-sm/md/lg/xl`). Never an
  arbitrary size.
- **Color:** icons always inherit the color of the text/control beside them (`currentColor`
  pattern via `--sem-icon-*`) — they never introduce a hue of their own, and sit one shade
  lighter than adjacent text when standing alone (e.g. nav icons vs. nav labels).
  Filled-vs-outline is used as a tiny state signal exactly once in the source (the pin icon
  toggles `FILL 0 → 1` when pinned) rather than swapping to a different glyph.
  `assets/icons/` documents the exact glyph names pulled from the source for reuse:
  `search`, `notifications`, `expand_more`, `push_pin`, `content_copy`, `error`, `schedule`,
  `description`, `fact_check`, `swap_vert`, `inbox`, `dashboard`, `inventory_2`, `settings`,
  `check_circle`, `logout`, `person`, `menu` / `menu_open`, `chevron_right`.
- **Illustration/imagery:** none. No mascot, no spot illustration, no abstract 3D anywhere in
  the shipped product. The only non-icon image asset is a circular staff photo avatar
  (`assets/demo-avatar-dana-lewis.png`, used in the UI kit header as the sample logged-in
  user). **No company logo file exists in the source** — the "N" wordmark is a plain
  monospace-square glyph (teal square, white "N", `10px` radius) generated live in code, not
  an imported SVG/PNG. This system does the same: nowhere does it draw or approximate a real
  Nexa logo — the brand name is set in the display typeface wherever a mark is needed.
- **Emoji / unicode:** never used as icons or in copy.

## What's inside

- `styles.css` — root stylesheet, imports everything below.
- `tokens/colors.css` — foundation + semantic color tokens, light & dark.
- `tokens/typography.css` — font stacks, Google Fonts import, type-scale tokens.
- `tokens/spacing.css` — spacing scale, radius, elevation reference, motion, z-index.
- `guidelines/` — specimen cards for the Design System tab (colors, type, spacing, radius,
  elevation, icons).
- `components/` — reusable primitives, grouped by concern:
  - `components/forms/` — Button, Input, Select
  - `components/feedback/` — Badge, Toast
  - `components/navigation/` — Tabs, NavItem
  - `components/data-display/` — Avatar, Card, Dropdown
- `ui_kits/claims-workspace/` — the "My Inventory" screen recreated as a click-through: header
  (search, notifications, profile menu), collapsible left nav, MRR/Audit tabs, sortable
  assignment queue built from the Card component.
- `assets/` — `demo-avatar-dana-lewis.png` (sample user photo). No logo file — see
  Iconography above.
- `SKILL.md` — portable skill wrapper for use in Claude Code.

### Intentional additions

None of the components above were invented beyond what the source defines — Button, Input,
Select, Tabs, NavItem, Badge, Toast, Avatar, Card and Dropdown are all directly present in
`My Inventory v2.dc.html` / `CardV2.dc.html`. No additional primitives (e.g. Modal, Tooltip
panel, Checkbox) were added because the source never shows one.

## Caveats — please help me iterate

- The source repo is itself a design-system documentation exercise, not a production
  codebase — I only have **one fully-built product screen** (My Inventory) to work from. The
  UI kit and components are faithful to that screen; anything about other Nexa surfaces
  (dashboard, provider portal, claim detail, etc. — all listed in the nav but not built) is
  unknown to me, so I left them as disabled/placeholder nav items exactly as the source does,
  rather than inventing them.
- Fonts are loaded live from Google Fonts (IBM Plex Sans, IBM Plex Mono, Plus Jakarta Sans) —
  these matched the source exactly, so no substitution was needed, but they are not
  self-hosted. Let me know if you'd like the woff2 files vendored into `assets/fonts/`.
- No real Nexa logo exists in the source — flag if you can share one, or confirm the plain
  "N" wordmark is correct to keep using.
- The "Clinical Calm" moodboard direction (cooler aqua environment, softer radii, KPI tiles,
  charts) is a genuinely nice proposal but I deliberately did **not** merge it into the base
  tokens since the source marks it as unshipped exploration — tell me if you'd like me to
  build it out as an alternate theme instead.

**Bold ask:** please point me at the live Nexa codebase (or a Figma file) if one exists — a
single screen's worth of source is a thin foundation for a full design system, and getting
the real component library, the other product surfaces, and the actual logo would let me
make this dramatically more accurate.
