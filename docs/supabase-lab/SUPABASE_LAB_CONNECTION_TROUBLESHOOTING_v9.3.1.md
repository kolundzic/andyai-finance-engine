# Supabase Lab Connection Troubleshooting v9.3.1

## Previous 401 on `/rest/v1/`

If the response was:

```json
{"message":"Secret API key required","hint":"Only secret API keys can be used for this endpoint."}
```

then the connection was not necessarily broken.

The smoke test was hitting a REST endpoint that is not the right public-key health check.

## Correct Health Check

Use:

```bash
./scripts/smoke-test-supabase-lab-connection.sh
```

The script now tests:

```text
/auth/v1/health
```

## If Auth Health Fails

Check:

- project URL
- publishable key
- whether the project is paused
- network connectivity
- whether the value was copied with spaces or line breaks

## Secret Rule

Do not paste service role key into chat, GitHub, README, screenshots, or logs.
