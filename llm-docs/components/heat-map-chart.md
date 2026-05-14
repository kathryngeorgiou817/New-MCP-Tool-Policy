# CDSHeatMapChart

Import from `@ciscodesignsystems/cds-react-heat-map-chart`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Grid-based heat map for two-dimensional data.

```tsx
<CDSHeatMapChart
  data={[
    {
      id: 'Row A',
      data: [
        { x: 'Col 1', y: 10 },
        { x: 'Col 2', y: 25 },
      ],
    },
    {
      id: 'Row B',
      data: [
        { x: 'Col 1', y: 5 },
        { x: 'Col 2', y: 40 },
      ],
    },
  ]}
  width={600}
  height={300}
  colors={{ type: 'sequential', colors: ['#e8f5e9', '#1b5e20'], steps: 5 }}
/>
```

- `data` — array of `{ id: string, data: [{ x: string|number, y: number }] }` row objects.
- `colors` — `{ type: 'quantize'|'sequential'|'diverging', colors: string[], steps: number }`.
- `cellComponent` — `"rect"` (default) or `"circle"`.
