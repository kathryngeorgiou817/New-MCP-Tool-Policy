# CDSSlider

Import from `@ciscodesignsystems/cds-react-slider`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Range slider control.

```tsx
<CDSSlider label="Volume" min={0} max={100} value={value} onChange={setValue} />
```

- `min` / `max` / `step` — range bounds and increment.
- `value` / `onChange` — controlled state. `onChange` is `(value: number) => void`.
