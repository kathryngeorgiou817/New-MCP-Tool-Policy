# Magnetic Design System App — AI Guidelines

This project uses the **Cisco Magnetic Common Design System** (`@ciscodesignsystems/cds-react-*`).
Read this file **and** `DESIGN.md` before generating or modifying any UI code.

---

## Component docs

All component references, props, usage examples, and DO/DON'T rules live here:

- **Components**: `llm-docs/components/<component-name>.md`
- **Layout patterns**: `llm-docs/patterns/`
- **General rules**: `llm-docs/guidelines/general.md`
- **Icons**: `llm-docs/guidelines/icons.md`
- **Z-index**: `llm-docs/guidelines/z-index.md`
- **Design conventions**: `DESIGN.md`

Always read the relevant doc before using a component. Do not guess prop names.

For full prop tables, detailed usage examples, and variant documentation, use the **Magnetic MCP**:

```
mcp__magnetic-dev__ask_react_components
```

Example: ask `"What are all the props for CDSButton?"` or `"How do I use CDSTable with pagination?"`

---

## Core rules (never violate these)

### Imports
- Each component comes from its **own scoped package**: `import { CDSButton } from '@ciscodesignsystems/cds-react-button'`
- **Never** import from a barrel like `@ciscodesignsystems/cds-react`
- `CiscoLogo` and `CDSStatusIcon` come from `@ciscodesignsystems/cds-react-icons` — there is no separate `cds-react-logos` or `cds-react-cisco-logo` package
- `CDSMenu` (header dropdown) comes from `@ciscodesignsystems/cds-react-header`, not `cds-react-menu`

### React
- **Never** write `import React from 'react'` — this project uses the automatic JSX transform
- Do write `import { useState, useEffect } from 'react'` when hooks are needed
- Wrap `Math.random()` / `Date.now()` / generated arrays in `useState(() => ...)` to avoid infinite re-renders

### Icons

There are two completely separate icon systems in this project. Using the wrong one for the wrong context will cause a build error.

**Phosphor icons** — used everywhere except CDSNav:

```tsx
import { GearSixIcon } from '@phosphor-icons/react';
```

- Only use icon names from the **Approved Icon List** in `llm-docs/guidelines/icons.md`
- **Never guess Phosphor icon names** — if the name doesn't appear in that list, it does not exist and will cause a TypeScript build error. Use the closest match or omit the icon.
- Common mistakes that will break the build: `ServerIcon` (use `HardDriveIcon`), `NetworkIcon` (use `MonitorIcon`)

**CDSNav icons** — string prop, Cisco-specific names only:

```tsx
<CDSNav.Item icon="home">Dashboard</CDSNav.Item>
```

- The `icon` prop on `CDSNav.Item` is a **string**, not a React component — never pass `<GearSixIcon />` to it
- Only use names from the **Valid Icon Names** list in `llm-docs/components/nav.md`
- **Never guess CDSNav icon names** — invalid strings will silently break navigation and may crash the build
- Common mistakes: `icon="gear"` (use `"settings"`), `icon="house"` (use `"home"`), `icon="chart-bar"` (use `"analytics"`), `icon="dashboard"` (use `"overview"`)

---

## CSS setup

Component styles require **explicit CSS imports** — they are not auto-injected. Any new CDS package you install must have its `index.css` added to `src/index.css`.

Pattern:
```css
@import '@ciscodesignsystems/cds-react-<package-name>/index.css';
```

Currently imported in `src/index.css`:
- `cds-magnetic-theme-web` + `cds-magnetic-blue-theme-web` — design tokens (must come first)
- `cds-react-header`, `cds-react-nav`, `cds-react-card`, `cds-react-flex`
- `cds-react-footer`, `cds-react-heading`, `cds-react-icons`, `cds-react-line-chart`
- `cds-react-tab`, `cds-react-table`, `cds-react-tag`, `cds-react-text`, `cds-react-button`
- `cds-react-badge`, `cds-react-divider`, `cds-react-link`, `cds-react-container`
- `cds-react-text-input`, `cds-react-search`, `cds-react-pagination`, `cds-react-select`
- `cds-react-checkbox`, `cds-react-filter-bar`, `cds-react-menu`

If a component looks unstyled, its `index.css` is missing from `src/index.css`.

---

## Vite config note

`vite.config.ts` includes `resolve: { dedupe: ['react', 'react-dom'] }`. This is required — `cds-react-line-chart` pulls in `@nivo` which ships a nested `react-dom`. Without deduplication, React throws a `ReactCurrentDispatcher` error and the app renders blank.

---

## After making changes

**Run a build after every code change — no exceptions.** The dev server may suppress TypeScript errors; `npm run build` will catch them.

### Build and verify

```bash
npm run build
```

- If build succeeds: confirm the dev server is still running and reflects your changes in the browser.
- If build fails: **stop, fix the error, do not make further changes until the build passes.**

### If the build fails

1. Read the full error output — it will identify the exact file and line.
2. Fix only what the error describes. Do not refactor or change unrelated code.
3. Run `npm run build` again to confirm the fix.
4. The dev server may have crashed when the build failed. Restart it:

```bash
npm run dev
```

### Common build-breaking mistakes

- Importing a Phosphor icon that doesn't exist (e.g. `ServerIcon`, `NetworkIcon`) — check `llm-docs/guidelines/icons.md` for the approved list
- Using an invalid CDSNav `icon` string — check `llm-docs/components/nav.md` for valid names
- Missing CSS import in `src/index.css` after installing a new CDS package
- Using `import React from 'react'` (not needed with the automatic JSX transform)
