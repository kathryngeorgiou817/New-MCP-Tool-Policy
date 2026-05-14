# CDSLegend

Import from `@ciscodesignsystems/cds-react-legend`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Legend for charts. Supports dot notation: `CDSLegend.Item`, `CDSLegend.Marker`.

```tsx
<CDSLegend
  direction="horizontal"
  kind="solid"
  items={[
    { label: 'Series A', color: '#00bceb' },
    { label: 'Series B', color: '#6ebe4a' },
  ]}
/>
```

- `direction` — `"horizontal"` or `"vertical"`.
- `kind` — `"solid"`, `"dashed"`, or `"square"`.
- `items` — array of `{ label: string, color: string }`.
- Can also compose with `CDSLegend.Item` children for custom rendering.
