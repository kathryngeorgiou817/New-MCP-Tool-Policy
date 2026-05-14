# CDSToaster

Import from `@ciscodesignsystems/cds-react-toaster`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Toast notification system for transient messages.

```tsx
const [toasts, setToasts] = useState([]);

const deleteToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

<CDSToaster list={toasts} deleteToast={deleteToast} placement="top-right" />;
```

- `list` — `CDSToastObject[]`: `{ id, title, description, status, timeout }`.
- `deleteToast` — `(id: string) => void` (required).
- `status` — `"info"` | `"positive"` | `"warning"` | `"negative"`.
- `timeout` — ms before auto-dismiss.
