# CDSTag

Import from `@ciscodesignsystems/cds-react-tag`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Small label/chip for status indicators or dismissible tags.

```tsx
<CDSTag sentiment="positive" size="sm">Healthy</CDSTag>
<CDSTag onClose={() => handleRemove(id)}>Filter: Active</CDSTag>
```

- `sentiment` — `"positive"` | `"warning"` | `"negative"` | `"info"` | `"neutral"` for status coloring.
- `onClose` — makes the tag dismissible with an X button.
- `icon` — ReactNode for a leading icon.

## CDSTag vs CDSBadge

- **CDSTag** — inline labels, status indicators in tables/cards, filter chips.
- **CDSBadge** — overlay dots/counts on icons or avatars (NOT inline labels).
