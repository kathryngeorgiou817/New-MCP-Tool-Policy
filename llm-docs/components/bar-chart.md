# CDSBarChart

Import from `@ciscodesignsystems/cds-react-bar-chart`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Bar chart for categorical comparisons.

```tsx
<CDSBarChart
  data={[
    { category: 'A', value1: 30, value2: 20 },
    { category: 'B', value1: 45, value2: 35 },
  ]}
  keys={['value1', 'value2']}
  indexBy="category"
  width={500}
  height={300}
  groupMode="grouped"
/>
```

- `data` — array of objects with a shared index key and numeric value keys.
- `keys` — which keys in data objects to render as bars.
- `indexBy` — the key used as the category axis label.
- `groupMode` — `"stacked"` (default) or `"grouped"`.
- `layout` — `"vertical"` (default) or `"horizontal"`.
