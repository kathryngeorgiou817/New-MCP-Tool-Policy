# CDSDropdown

Import from `@ciscodesignsystems/cds-react-dropdown`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Button that opens a dropdown menu. Uses dot notation: `CDSDropdown.Item`, `CDSDropdown.Submenu`.

```tsx
<CDSDropdown label="Actions" variant="secondary">
  <CDSDropdown.Item label="Edit" onClick={handleEdit} />
  <CDSDropdown.Item label="Duplicate" onClick={handleDuplicate} />
  <CDSDropdown.Submenu label="More Options">
    <CDSDropdown.Item label="Sub Item 1" />
  </CDSDropdown.Submenu>
  <CDSDropdown.Item label="Delete" destructive onClick={handleDelete} />
</CDSDropdown>
```

- `CDSDropdown.Item` — `label` (required), `icon`, `destructive`, `disabled`, `onClick`.
- `CDSDropdown.Submenu` — wraps nested `CDSDropdown.Item` children.
