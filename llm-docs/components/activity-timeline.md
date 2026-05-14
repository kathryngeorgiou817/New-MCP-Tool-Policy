# CDSActivityTimeline

Import from `@ciscodesignsystems/cds-react-activity-timeline`.

For full props and usage, use the Magnetic MCP tool `mcp__magnetic-dev__ask_react_components` to query this component's documentation.

Vertical activity/event timeline. Uses dot notation: `CDSActivityTimeline.Item`.

```tsx
<CDSActivityTimeline>
  <CDSActivityTimeline.Item
    title="Deployment started"
    status="complete"
    timestamp="Feb 20, 2026 10:00 AM"
  />
  <CDSActivityTimeline.Item
    title="Running tests"
    status="in-progress"
    timestamp="Feb 20, 2026 10:05 AM"
  />
  <CDSActivityTimeline.Item title="Pending review" status="inactive" timestamp="" />
</CDSActivityTimeline>
```

- Each `Item` needs `title`, `status`, and `timestamp`.
- `status` — `"complete"` | `"in-progress"` | `"error"` | `"inactive"` | `"neutral"`.
- `isCollapsible` / `isNumbered` on parent for collapsible or numbered items.
