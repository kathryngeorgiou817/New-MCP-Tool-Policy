# CDSStickyBar

Import from `@ciscodesignsystems/cds-react-sticky-bar`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

A sticky action bar that sticks to the top or bottom of a container. Used for persistent actions on long pages (e.g. save/cancel buttons on a form).

```tsx
<CDSStickyBar position="bottom">
  <CDSFlex justify="flex-end" gap="sm">
    <CDSButton variant="tertiary">Cancel</CDSButton>
    <CDSButton>Save Changes</CDSButton>
  </CDSFlex>
</CDSStickyBar>
```
