# CDSCheckbox

Import from `@ciscodesignsystems/cds-react-checkbox`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Checkbox control with optional label.

```tsx
<CDSCheckbox id="agree" checked={checked} onChange={(e) => setChecked(e.target.checked)}>
  I agree to the terms
</CDSCheckbox>
```

- `checked` / `onChange` — controlled state.
- `indeterminate` — partial selection state.
- `children` — label text (optional, renders beside checkbox).
- `id` — required for accessibility.
