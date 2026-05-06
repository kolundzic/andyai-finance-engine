# Drone Master Flight Rules

## Resumable behavior

If the script stops after a completed tag, rerun the same script from Downloads.

It will inspect the current exact HEAD tag and continue from the next milestone.

## Hard boundaries

- no local Next build
- no SQL
- no DB writes
- no service role exposure
- no provider API keys
- no microphone
- no recording
- no network call
- no live form submit
- no billing
- no checkout
- no payment
