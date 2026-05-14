# CDSProgressBar

Import from `@ciscodesignsystems/cds-react-progress-bar`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Progress indicator bar.

```tsx
<CDSProgressBar value={65} size="md" sentiment="positive" label="Upload progress" />
<CDSProgressBar indeterminate size="sm" label="Loading..." />
```

- `value` — 0–100 percentage.
- `indeterminate` — animated loading state (no specific progress).
- `sentiment` — `"positive"` | `"warning"` | `"negative"` | `"info"` | `"neutral"`.
