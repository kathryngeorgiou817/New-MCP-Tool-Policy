# CDSLink

Import from `@ciscodesignsystems/cds-react-link`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Styled anchor link.

```tsx
<CDSLink href="https://example.com" icon={<ArrowSquareOutIcon weight="bold" />}>
  External Link
</CDSLink>
```

- `href` — URL string.
- `size` — `"sm"` | `"md"`.
- `icon` — ReactNode for trailing icon (e.g. ArrowSquareOutIcon for external links).

## DON'T

- Never use plain `<a>` tags — use CDSLink for consistent styling.
