# CDSToggle

Import from `@ciscodesignsystems/cds-react-toggle`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Switch/toggle control.

```tsx
<CDSToggle checked={enabled} setChecked={setEnabled}>
  <CDSText size="p3">Enable notifications</CDSText>
</CDSToggle>
```

- `checked` / `setChecked` — controlled state. **Uses `setChecked`, NOT `onChange`.**
- `locale` — `{ supplementalText?: string }` for help text below the toggle.
- `children` — label (typically a CDSText element).

## DON'T

- Never use `onChange` — CDSToggle uses `setChecked`, not `onChange`.
