# CDSDivider

Import from `@ciscodesignsystems/cds-react-divider`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Horizontal or vertical separator line.

```tsx
<CDSDivider />
<CDSDivider direction="vertical" />
```

- `direction` — `"horizontal"` (default) | `"vertical"`.
- `prominence` — `"default"` | `"strong"`.
- Always add `aria-hidden="true"` since dividers are decorative.

## DON'T

- Never put CDSDivider inside CDSNav — nav sections have built-in separation.
