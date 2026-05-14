# CDSBreadcrumb

Import from `@ciscodesignsystems/cds-react-breadcrumb`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Uses dot notation: `CDSBreadcrumb` + `CDSBreadcrumb.Link`.

```tsx
<CDSBreadcrumb role="navigation" aria-label="breadcrumb">
  <CDSBreadcrumb.Link href="/home">Home</CDSBreadcrumb.Link>
  <CDSBreadcrumb.Link href="/devices">Devices</CDSBreadcrumb.Link>
  <CDSBreadcrumb.Link href="/devices/123" aria-current="page">
    Device Details
  </CDSBreadcrumb.Link>
</CDSBreadcrumb>
```

- Always add `role="navigation"` and `aria-label="breadcrumb"` on the root.
- Set `aria-current="page"` on the **last** link.
- Separators render automatically.
