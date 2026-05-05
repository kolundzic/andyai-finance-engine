# ARCHITECTURE

## Layers

1. **Input Loader** — accepts briefs, PDFs, spreadsheets, notes and business documents.
2. **Financial Extractor** — extracts revenue, costs, margins, assumptions and key metrics.
3. **Assumption Engine** — separates facts from assumptions.
4. **Model Builder** — creates structured model outputs.
5. **Verification Layer** — checks logic, balances, formulas and consistency.
6. **Audit Trail** — records sources, assumptions, changes and decisions.
7. **Human Approval Gate** — requires review and explicit approval.
8. **Export Packager** — exports Excel, PDF, memo and proposal artifacts.

## Trust architecture

The engine must never treat generated financial output as automatically true. Every model requires verification and human approval before use.
