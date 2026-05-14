# CDSPopover

Import from `@ciscodesignsystems/cds-react-popover`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Floating content panel anchored to a trigger element.

```tsx
<CDSPopover
  title={<CDSText>Popover content here</CDSText>}
  open={open}
  setOpen={setOpen}
  placement="bottom">
  <CDSButton onClick={() => setOpen(!open)}>Toggle</CDSButton>
</CDSPopover>
```

- `title` — ReactNode. This is the **content** prop (despite the name), not a string tooltip.
- `open` / `setOpen` — controlled open state.
- `placement` — `"top"` | `"bottom"` | `"left"` | `"right"` and variants.

## DON'T

- Never set z-index on CDSPopover — it manages its own z-index.
- For simple text hints on hover, use CDSTooltip instead.
