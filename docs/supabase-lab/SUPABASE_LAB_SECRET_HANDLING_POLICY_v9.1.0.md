# Supabase Lab Secret Handling Policy v9.1.0

## Purpose

This policy defines how Supabase credentials must be handled during lab setup.

## Never Commit

Never commit:

- `.env.local`
- service role key
- database password
- access tokens
- copied dashboard secrets
- screenshots containing keys

## Allowed in Git

Allowed:

- `.env.example`
- documentation explaining variable names
- verification scripts
- setup runbooks
- redacted examples

## Service Role Key Rule

The service role key is server-only.

It must not appear in:

- client components
- README
- GitHub issues
- screenshots
- public docs
- chat messages
- commit history

## Chat Rule

Do not paste service role key into ChatGPT.

If help is needed, describe the error without sharing the secret value.
