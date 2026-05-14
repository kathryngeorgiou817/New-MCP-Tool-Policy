# CDSAnchorLinkMenu

Import from `@ciscodesignsystems/cds-react-anchor-link-menu`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

A sidebar navigation menu that scrolls-to and highlights sections on a page. Used for long-form content pages.

```tsx
<CDSAnchorLinkMenu
  items={[
    { label: 'Overview', href: '#overview' },
    { label: 'Configuration', href: '#config' },
    { label: 'Security', href: '#security' },
  ]}
/>
```

- Automatically highlights the active section based on scroll position.
- Place it as a sticky sidebar alongside the main content.
