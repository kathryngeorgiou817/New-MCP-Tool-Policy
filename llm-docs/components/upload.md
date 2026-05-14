# CDSUpload

Import from `@ciscodesignsystems/cds-react-upload`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Uses dot notation: `CDSUpload`, `CDSUpload.Button`, `CDSUpload.Dragger`.

**Button upload:**

```tsx
<CDSUpload action="/api/upload" onChange={handleChange}>
  <CDSUpload.Button text="Upload File" />
</CDSUpload>
```

**Drag and drop:**

```tsx
<CDSUpload action="/api/upload" onChange={handleChange}>
  <CDSUpload.Dragger text="Drag files here or click to browse" />
</CDSUpload>
```

- `action` — upload endpoint URL
- `accept` — file type filter (e.g. `".csv,.json"`)
- `multiple` — boolean, allow multiple files
- `onChange` — callback when file status changes
