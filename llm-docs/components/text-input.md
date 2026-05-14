# CDSTextInput / CDSNumberInput

Import from `@ciscodesignsystems/cds-react-text-input`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Text and number input fields with built-in label, validation, and addons.

```tsx
<CDSTextInput label="Name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
<CDSTextInput label="Email" type="email" invalid contextualHint="Please enter a valid email" />
<CDSNumberInput label="Port" min={1} max={65535} step={1} />
```

- `label` — built-in field label.
- `clearable` — shows clear button. `prefix` / `suffix` — left/right addons.
- `invalid` — error state. `contextualHint` — help text below input.
- `CDSNumberInput` — same props plus `min`, `max`, `step`.

## DON'T

- Never use plain `<input>` — use CDSTextInput.
