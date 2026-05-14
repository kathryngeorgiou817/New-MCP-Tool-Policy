# CDSKeyValue

Import from `@ciscodesignsystems/cds-react-key-value`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Displays key-value pairs.

```tsx
<CDSKeyValue
  pairs={[
    ['Name', 'Jane Doe'],
    ['Email', 'jane@example.com'],
    [
      'Status',
      <CDSTag sentiment="positive" size="sm" key="s">
        Active
      </CDSTag>,
    ],
  ]}
/>
```

- `pairs` — array of `[key, value]` tuples. Both accept strings or ReactNodes.
- `placement` — `'beside'` (default) or `'above'`
- `size` — `'sm' | 'md'`
- Wrap in `CDSContainer` for card-style presentation.
