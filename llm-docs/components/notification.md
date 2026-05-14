# CDSNotification

Import from `@ciscodesignsystems/cds-react-notification`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Inline notification banners. Uses dot notation: `CDSNotification.Group`, `CDSNotification.Item`.

```tsx
<CDSNotification status="warning" title="Connection unstable">
  Check your network settings.
</CDSNotification>
```

**Grouped notifications:**

```tsx
<CDSNotification product status="info" title="System Updates">
  <CDSNotification.Group>
    <CDSNotification.Item status="warning" title="Warning" onClose={() => {}} />
    <CDSNotification.Item status="negative" title="Error" onClose={() => {}} />
  </CDSNotification.Group>
</CDSNotification>
```

- `status` — `"info"` | `"positive"` | `"warning"` | `"negative"` (required).
- `onClose` — adds dismiss button.
- `product` — product-level banner (collapsible group header).
