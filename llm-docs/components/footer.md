# CDSFooter

Import from `@ciscodesignsystems/cds-react-footer`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

CDSFooter requires `brandName` prop (renders copyright with current year). Use `rightSlot` for links.

## DO

- Use CDSFooter with brandName prop (required) and rightSlot prop for links

## DON'T

- Never use CDSFooter as a generic container with inline styles — use brandName and rightSlot props

## Error Patterns

**Wrong**: `<CDSFooter style={{ padding: '24px' }}><CDSFlex>custom layout</CDSFlex></CDSFooter>`
**Right**: `<CDSFooter brandName="Cisco" rightSlot={<CDSLink href="#">Privacy</CDSLink>} />`
**Why**: CDSFooter is not a generic container. Use brandName (required) and rightSlot props.
