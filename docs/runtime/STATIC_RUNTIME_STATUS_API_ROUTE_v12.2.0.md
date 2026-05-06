# v12.2.0 — Static Runtime Status API Route

Adds:

```text
/api/finance/read-only/status
```

The route returns local proof status only.

No database connection.

No Supabase client.

No DB URL.

No mutation.

Also adds explicit Next build anchors:

```text
app/not-found.tsx
pages/404.tsx
```

These anchors stabilize Next manifest generation during local and Vercel builds.
