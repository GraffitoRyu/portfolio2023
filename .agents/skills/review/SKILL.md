---
name: review
description: Use when reviewing changed source before staging or handoff, especially for incomplete union-alias JSDoc or missing implementation intent comments.
---

# Repository Code Documentation Review

## Workflow

1. Read root and nearest nested `AGENTS.md`, then consult `doc`.
2. Review only the requested diff and keep pre-existing WIP separate.
3. Treat a missing union member in either the containing block `@property` or field JSDoc as an actionable finding. For object unions, also require the discriminator, variants, variant-required fields, and shared fields in both locations.
4. Inventory changed non-obvious branches, transforms, merge precedence, retry/fallback, stale/race guards, state synchronization, side effects, and boundary decisions. Missing current intent, constraints, or usage at the nearest stable location is an actionable finding.
5. Reject comments that narrate syntax or store dates, tickets, change history, or removed-workaround history in source.
6. Run the smallest repository-provided changed-file formatting check and keep formatting, lint/typecheck/test, and manual documentation review results separate.

## Report

- Lead with actionable findings ordered by severity and exact file/line.
- If none remain, state that explicitly and list residual risk or unrun checks.
- Do not modify source during a review-only request.
