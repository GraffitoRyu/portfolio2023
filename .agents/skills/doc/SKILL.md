---
name: doc
description: Use when adding or changing JSDoc, code comments, Props, union aliases, or non-obvious implementation logic in this repository.
---

# Repository Code Documentation

## Authority

- Read root and nearest nested `AGENTS.md`.
- Use root `Repository Code Documentation` or `JSDoc And Code Comments` as the format and judgment SOT.
- Keep product, project, and continuity-state SOT unchanged unless the user separately requests that contract change.

## Workflow

1. Inspect the requested diff, declarations, consumers, exports, and changed logic before documenting.
2. For each changed Props field backed by a union alias, list every allowed member in both the block `@property` and field JSDoc. For object unions, include the discriminator, variants, variant-required fields, and shared fields in both locations.
3. Inventory changed non-obvious branches, transforms, merge precedence, retry/fallback, stale/race guards, state synchronization, side effects, and boundary decisions.
4. Record current intent, constraints, or usage at the nearest stable location: declaration JSDoc for callable/public contracts and `//` immediately above cohesive implementation blocks.
5. Remove or rewrite source comments that only describe dates, tickets, addition/modification/deletion history, or removed workarounds. Git or the owning CONTEXT stores that history.
6. Run the smallest repository-provided formatting check for changed documentation files and review the contract manually.

## Report

- Documented declarations and logic decisions
- Union alias member comparison for block and field JSDoc
- Current-intent comment review and history comments moved out of source
- Formatting result and unrun validation
