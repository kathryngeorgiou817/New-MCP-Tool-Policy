# CDSDateTimePicker

Import from `@ciscodesignsystems/cds-react-date-time-picker`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Also exports `CDSDateTimeRangePicker` and `CDSNativeDateTimePicker`.

```tsx
const [value, setValue] = useState(new Date());

<CDSDateTimePicker label="Start date" preset="date" value={value} onChange={setValue} />;
```

- `preset` — `"date"` | `"time"` | `"datetime"` (default: `"date"`).
- `CDSDateTimeRangePicker` — takes `defaultValue` as `[Date, Date]` array.
- `CDSNativeDateTimePicker` — lightweight native input variant with `type="date"|"datetime-local"|"time"`, uses string values in `YYYY-MM-DD` format.
- `size` — `"sm"` | `"md"` | `"lg"`.
