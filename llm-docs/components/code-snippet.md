# CDSCodeSnippet

Import from `@ciscodesignsystems/cds-react-code-snippet`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Uses dot notation: `CDSCodeSnippet.Block`, `CDSCodeSnippet.Inline`.

**Block (multi-line code):**

```tsx
<CDSCodeSnippet.Block language="javascript" hasLineNumbers>
  {`const greeting = "Hello";
console.log(greeting);`}
</CDSCodeSnippet.Block>
```

**Inline (within text):**

```tsx
<CDSText>
  Run <CDSCodeSnippet.Inline>npm install</CDSCodeSnippet.Inline> to start.
</CDSText>
```

## DON'T

- Children of `CDSCodeSnippet.Block` must be a plain **string**, not JSX.
