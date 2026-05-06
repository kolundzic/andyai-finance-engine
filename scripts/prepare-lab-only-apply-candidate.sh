#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Prepare Lab-Only Apply Candidate SQL"

PREVIEW="supabase/dry-run-preview/finance-engine-lab-prefixed-preview-v9.8.0.sql"
OUT="supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql"

if [ ! -f "$PREVIEW" ]; then
  echo "🔴 Missing prefixed preview: $PREVIEW"
  exit 1
fi

mkdir -p "$(dirname "$OUT")"

python3 - <<'PY'
from pathlib import Path

src = Path("supabase/dry-run-preview/finance-engine-lab-prefixed-preview-v9.8.0.sql")
dst = Path("supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql")

text = src.read_text()

lines = []
for line in text.splitlines():
    stripped = line.strip().upper()
    if stripped == "BEGIN;":
        continue
    if stripped == "ROLLBACK;":
        continue
    lines.append(line)

body = "\n".join(lines).strip() + "\n"

header = """/* AndyAI Finance Engine v9.9.0 — Lab-Only Apply Candidate
   Target: shared Supabase Free lab only
   Prefix lock: fe_
   Human Attention boundary: protected
   Production: blocked
   Review required before execution
*/

BEGIN;

"""

footer = """

COMMIT;
"""

dst.write_text(header + body + footer)
PY

echo "🟢 Lab-only apply candidate generated: $OUT"
echo "🟡 This script only prepares SQL. It does not apply SQL."
