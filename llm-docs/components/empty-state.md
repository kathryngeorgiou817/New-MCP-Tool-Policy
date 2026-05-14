# CDSEmptyState

Import from `@ciscodesignsystems/cds-react-empty-state`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Uses dot notation: `CDSEmptyState`, `CDSEmptyState.Illustration`, `CDSEmptyState.Title`, `CDSEmptyState.Message`.

```tsx
<CDSCard>
  <CDSEmptyState>
    <CDSEmptyState.Illustration aria-labelledby="empty-msg" />
    <div style={{ textAlign: 'center' }}>
      <CDSEmptyState.Title>No results found</CDSEmptyState.Title>
      <CDSEmptyState.Message id="empty-msg">Try adjusting your filters.</CDSEmptyState.Message>
      <CDSButton>Clear Filters</CDSButton>
    </div>
  </CDSEmptyState>
</CDSCard>
```

- `CDSEmptyState.Message` is the only required sub-component.
- Typically placed inside a `CDSCard` or container.
