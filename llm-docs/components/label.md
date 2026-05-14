# CDSLabel

Import from `@ciscodesignsystems/cds-react-label`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Form field label. Rarely needed directly since form components (CDSTextInput, CDSSelect, CDSTextArea) have built-in `label` props.

```tsx
<CDSLabel htmlFor="custom-input" required>
  Custom Field
</CDSLabel>
```

- Only use when building custom form controls that don't have a built-in label prop.
