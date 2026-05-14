# Magnetic Design System

## Overview

Magnetic is Cisco's enterprise design system for network management and IT operations products. The visual language is professional, data-dense, and focused — built for operators who spend extended time in the interface.

- **Character**: Trustworthy, precise, efficient — function before form
- **Density**: Information-dense by default; every element earns its place
- **Mood**: Calm and structured — neutral surfaces, clear hierarchy, zero decorative noise
- **Themes**: `light` (default), `dark`, `classic-light`, `classic-dark`
- **Brands**: `magnetic` (default) and `magnetic-blue`

All themes are handled by `CDSThemeProvider`. Never encode theme assumptions (e.g., hardcoded background colors) into components — always use tokens so they resolve across all themes automatically.

---

## Colors

Magnetic uses **CSS custom property design tokens exclusively** — never hardcode hex or RGB values. Token names follow a semantic role pattern: `--{role}-{slot}-{variant}`.

### Semantic roles

| Role | Use |
|------|-----|
| `base` | Default page surfaces, text, and borders |
| `interact` | Primary interactive elements — links, focused rings, CTA buttons |
| `positive` | Success, healthy, connected states |
| `warning` | Degraded, cautionary states |
| `negative` | Error, critical, destructive actions |
| `neutral` | Disabled elements, non-semantic backgrounds |

### Common tokens

| Token | Role |
|-------|------|
| `var(--base-bg-default)` | Page background |
| `var(--base-bg-subtle)` | Slightly elevated surface (cards, panels) |
| `var(--base-text-default)` | Primary body text |
| `var(--base-text-weak-default)` | Muted / secondary text |
| `var(--base-text-strong)` | Emphasized text |
| `var(--base-border-default)` | Standard dividers and borders |
| `var(--interact-text-default)` | Link and interactive text |
| `var(--interact-bg-default)` | Primary action fill |
| `var(--positive-text-default)` | Success / healthy text |
| `var(--positive-bg-default)` | Success background |
| `var(--warning-text-default)` | Warning text |
| `var(--warning-bg-default)` | Warning background |
| `var(--negative-text-default)` | Error / destructive text |
| `var(--negative-bg-default)` | Error background |

Tokens resolve correctly in all themes and both brands automatically. A component that uses only tokens needs no theme-specific overrides.

---

## Typography

**Font family**: Inter (Google Fonts), set globally at 14px base size.

All visible text must use `CDSText` or `CDSHeading` — never raw `<p>`, `<span>`, `<h1>`–`<h6>`, or `<div>` for text content.

### CDSHeading sizes

| Size | HTML equiv | Use |
|------|-----------|-----|
| `primary` | h1 | Page title — one per page |
| `section` | h2 | Major content section heading |
| `sub-section` | h3 | Sub-section title within a section |
| `smallest` | h4 | Minor labels and groupings |
| `lg`, `md`, `sm` | — | Large numeric values (metric tiles), mid-size callouts |

`CDSHeading` has **no `level` prop** and **no `size="page"`** — these are common mistakes that cause build errors.

### CDSText sizes

| Size | Use |
|------|-----|
| `p1` | Large body / intro text |
| `p2` | Standard body text (default) |
| `p3` | Small / secondary text, metadata |
| `p4` | Fine print, dense data labels |
| `xxs` | Supplementary info next to headings (e.g. total count in a card) |

### Rules

- Use `CDSHeading size="primary"` once per page, at the top of content
- Use `CDSHeading size="section"` to separate major content groups
- Use `CDSHeading size="sub-section"` for card group labels
- Use `CDSHeading size="lg"` for large numeric values in metric tiles
- Line length: max ~80 characters per line
- Never write heading or body text as raw HTML — it bypasses tokens and produces inconsistent rendering

---

## Elevation

Magnetic uses a **flat elevation model** — depth is expressed through surface color contrast and borders, not drop shadows.

- Cards: 1px border + slightly elevated background (`--base-bg-subtle`), no shadow
- Header: visually separated by its inverse sentiment, not elevation
- Overlays (modals, drawers, dropdowns): background dimming + z-index stacking

### Z-index scale

| z-index | Element |
|---------|---------|
| `auto` | Page content (text, cards, buttons) |
| 70 | Sticky elements |
| 200 | CDSHeader (set manually in layouts) |
| 490 | Dropdowns |
| 500 | Popovers / Tooltips |
| 950 | Drawer |
| 970 | Navigation drawer |
| 990 | Modal |
| 1000 | Toast |

For nested overlays, add parent and child z-index values (e.g., dropdown inside modal: 490 + 990 = 1480). Never manually set z-index on CDS components that manage it internally.

---

## Layout

### App shell

Three zones: header (full-width, above grid), sticky left nav, and main content. The split is CSS Grid — never flexbox.

```tsx
<CDSThemeProvider theme="light" brand="magnetic">
  {/* Header — normal flow, NOT fixed */}
  <div style={{ position: 'relative', zIndex: 200 }}>
    <CDSHeader sentiment="inverse" title="Product Name" logo={<CiscoLogo size="sm" />} />
  </div>

  {/* CSS Grid — nav auto-sizes, content fills remaining width */}
  <div style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr' }}>
    <CDSNav
      isCollapsed={isCollapsed}
      setCollapsed={setIsCollapsed}
      style={{ position: 'sticky', top: '56px', height: 'calc(100vh - 56px)', overflowY: 'auto' }}
    >
      {/* nav items */}
    </CDSNav>

    <CDSFlex direction="vertical" gap={24} margin={24}>
      {/* page content */}
      <CDSFooter brandName="Cisco Systems, Inc." />
    </CDSFlex>
  </div>
</CDSThemeProvider>
```

### Spacing scale

Based on a 4px increment. Use the string token names with CDSFlex `gap`, or pass numeric pixel values directly:

| CDSFlex token | Pixels | Use |
|---------------|--------|-----|
| `xxs` | 4px | Tight inline spacing (icon + label pairs) |
| `xs` | 8px | Compact groups, within-card tight spacing |
| `sm` | 12px | Between cards in a row |
| `md` | 16px | Between cards within a section |
| `lg` | 24px | Between content sections; standard content margin |
| `xl` | 36px | Major section breaks |
| `xxl` | 48px | Page-level vertical rhythm |

Standard content margin: `margin={24}` on the outer `CDSFlex`
Between sections: `gap="lg"` (24px), within a section: `gap="md"` (16px), between cards in a row: `gap="sm"` (12px)

### Grid

- 12-column grid, full-width
- Gutters: 16px at all breakpoints
- Design target: Medium (1440px) and Large (1920px)
- Test at: Small (980px) and XLarge (2560px)

---

## Components

All components are imported from individual scoped packages (`@ciscodesignsystems/cds-react-<name>`). See `llm-docs/components/` for full prop tables.

### Navigation (CDSNav)

Sticky left sidebar with collapsible behavior. Icon is a **string key** — never a React component.

```tsx
<CDSNav.Item icon="home" isSelected>Dashboard</CDSNav.Item>
<CDSNav.Item icon="analytics">Analytics</CDSNav.Item>
```

Valid icon keys: `home`, `settings`, `analytics`, `users`, `admin`, `alerts`, `reports`, `help`, `overview`, `security`, `configuration`, `monitor`, `inventory`, `applications`, `groups`, `policies`, `tools`, `operations`, `documentation`, `feedback`, `explore`, `design`, `placeholder`, `agents`, `bookmarks`, `connect`, `domains`, `endpoints`, `firewall`, `intelligence`, `jobs`, `licensing`, `servers`, `sites`, `software`, `vpn`, `wireless`, `workflows`

### Header (CDSHeader)

Always `sentiment="inverse"`. Wrap in a `zIndex: 200` div so it layers above page content.

### Buttons (CDSButton)

| Prop | Values | Notes |
|------|--------|-------|
| `variant` | `primary`, `secondary`, `tertiary`, `ghost` | Use `primary` for the single main CTA per view |
| `destructive` | boolean | Red styling for irreversible actions; show a confirmation before executing |

- One `primary` button per section or grouping — it anchors the visual hierarchy
- Button group order: secondary/tertiary buttons first (left), primary last (right)
- `ghost` variant is only for use on inverse/header backgrounds
- Use `CDSButton.Group` when showing multiple buttons on the same line

### Cards (CDSCard)

No shadow. Border + `--base-bg-subtle` background creates visual grouping. Use `flex: '1 1 250px'` with `CDSFlex wrap` for responsive card grids.

### Inputs

| Component | Package |
|-----------|---------|
| `CDSTextInput` | `cds-react-text-input` |
| `CDSSelect` | `cds-react-select` |
| `CDSCheckbox` | `cds-react-checkbox` |
| `CDSTextArea` | `cds-react-textarea` |
| `CDSSearch` | `cds-react-search` |

Each package requires its own `index.css` imported in `src/index.css`.

### Status indicators (CDSStatusIcon)

Always use `CDSStatusIcon` for health and status — never plain colored dots. It combines color and shape for accessibility (two-identifier rule).

Valid `status` values: `"positive"`, `"warning"`, `"negative"`, `"info"`, `"neutral"`

**Always pair with a text label. The icon goes AFTER the label, not before:**

```tsx
import { CDSStatusIcon } from '@ciscodesignsystems/cds-react-icons';

// Correct: label first, icon after
<CDSFlex gap="xxs" align="center">
  <CDSText weight="semi-bold">Healthy</CDSText>
  <CDSStatusIcon size={18} status="positive" />
</CDSFlex>

// Wrong: icon before label
<CDSFlex gap="xxs" align="center">
  <CDSStatusIcon size={18} status="positive" />
  <CDSText>Healthy</CDSText>
</CDSFlex>
```

### Icons (Phosphor — general purpose)

Used everywhere except CDSNav. Import from `@phosphor-icons/react`, always `weight="bold"`.

Only use names from the approved list in `llm-docs/guidelines/icons.md`. **Never guess** — an invalid name causes a TypeScript build error.

Common sizes: `size={20}` or `size={24}` for toolbar icons, `size={32}` for illustrative/card icons.

---

## Responsive Behavior

- Design at Medium (1440px); test at Small (980px) and Large (1920px)
- Card grids: `CDSFlex wrap` (boolean) + `flex: '1 1 250px'` on each card — cards reflow automatically
- Navigation collapses to icon-only mode via CDSNav's built-in toggle — always controlled via `useState`
- Tables: CDSTable handles horizontal scroll internally — never wrap in an overflow container
- Minimum interactive target: 44×44px

---

## Do's and Don'ts

### DO

- Use CSS custom property tokens (`var(--...)`) for all colors
- Use `CDSText` and `CDSHeading` for all visible text
- Use `CDSFlex` for all layout composition inside page content
- Use CSS Grid `min-content 1fr` for the nav + content split
- Use `CDSStatusIcon` with a `status` prop for all health/status indicators
- Use only the valid nav icon string keys listed above
- Use only Phosphor icon names from the approved list in `llm-docs/guidelines/icons.md`
- Maintain 4.5:1 contrast ratio for text (WCAG AA) and 3:1 for icons
- Import `index.css` for every CDS package used, in `src/index.css`
- Wrap `CDSNav` collapse state in `useState` and pass `setCollapsed`
- Place `CDSFooter` inside the content `CDSFlex`, not outside the grid

### DON'T

- Don't hardcode hex, RGB, or HSL colors anywhere in UI code
- Don't use `<div>`, `<span>`, `<p>`, or `<h1>`–`<h6>` for visible text
- Don't use flexbox for the nav + content split
- Don't use `position: fixed` for CDSNav or CDSHeader
- Don't guess Phosphor icon names — only use the approved list
- Don't guess CDSNav icon strings — only use the valid key list
- Don't pass a Phosphor `<Icon />` component as the `icon` prop to `CDSNav.Item`
- Don't use colored dots or custom badges for status — use `CDSStatusIcon`
- Don't use more than one primary CTA button per view
- Don't add decorative visual elements that don't carry meaning

---

## Agent Prompt Guide

### Token quick reference

```
Page background:    var(--base-bg-default)
Card/panel surface: var(--base-bg-subtle)
Primary text:       var(--base-text-default)
Secondary text:     var(--base-text-weak-default)
Borders/dividers:   var(--base-border-default)
Interactive/CTA:    var(--interact-text-default)
Success:            var(--positive-text-default)
Warning:            var(--warning-text-default)
Error/destructive:  var(--negative-text-default)
```

### Example prompts

> Add a Network Health page with a line chart showing packet loss over time, a summary table of top devices by error rate, and a link in the left navigation under Dashboard using the `monitor` icon.

> Add a Settings page with a CDSHeading primary title, a form using CDSTextInput and CDSSelect, and a CDSButton variant="primary" to save. Add a link in the navigation using the `settings` icon.

> Add a status summary row at the top of the Dashboard page showing device counts by health status. Use CDSStatusIcon for each status type (positive, warning, negative, neutral) and CDSText for the count labels.
