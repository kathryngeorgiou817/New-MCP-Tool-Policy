# CDSSkeleton

Import from `@ciscodesignsystems/cds-react-skeleton`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Loading placeholder that mimics content layout.

- `height` — `'sm' | 'md' | 'lg'` or number (px)
- `lines` — number of lines (default: 1)
- `oblique` — boolean, vary line widths
- `shade` — `'regular' | 'dark'` (use `'dark'` for title placeholders)
- Width via `style={{ width: '...' }}`

```tsx
<CDSSkeleton height="lg" shade="dark" style={{ width: '50%' }} />
<CDSSkeleton height="sm" lines={4} oblique />
```
