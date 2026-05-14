# CDSCollapse

Import from `@ciscodesignsystems/cds-react-collapse`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Uses dot notation: `CDSCollapse`, `CDSCollapse.Heading`, `CDSCollapse.Panel`, `CDSCollapse.Group`.

```tsx
<CDSCollapse.Group>
  <CDSCollapse kind="stacked" size="md">
    <CDSCollapse.Heading>Section 1</CDSCollapse.Heading>
    <CDSCollapse.Panel>Content here</CDSCollapse.Panel>
  </CDSCollapse>
  <CDSCollapse kind="stacked" size="md">
    <CDSCollapse.Heading>Section 2</CDSCollapse.Heading>
    <CDSCollapse.Panel>More content</CDSCollapse.Panel>
  </CDSCollapse>
</CDSCollapse.Group>
```

- `kind`: `'stacked' | 'contained' | 'borderless' | 'unstyled'`
- Use `CDSCollapse.Group` to wrap multiple stacked items.
- For accordion (one open at a time), use controlled `open` + `onChange` props.
