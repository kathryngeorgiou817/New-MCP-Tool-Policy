# CDSViewSwitcher

Import from `@ciscodesignsystems/cds-react-view-switcher`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Segmented control for switching between views.

```tsx
const [view, setView] = useState('grid');

<CDSViewSwitcher
  options={[
    { label: 'Grid', value: 'grid' },
    { label: 'List', value: 'list' },
    { label: 'Map', value: 'map' },
  ]}
  value={view}
  onChange={setView}
/>;
```

- `options` — array of strings or `{ label, value, disabled? }` objects.
- `value` — controlled selected value.
- `onChange` — `(value: string) => void`
- Can also accept icon-based options with `icon` prop on option objects.
