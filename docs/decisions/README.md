# Architecture Decision Records

Use this folder to record non-trivial choices as short ADRs.

## Why This Exists

Decisions are cheap while they are verbal and expensive once they are hidden in code.

An ADR should capture:

- the decision being made
- the alternatives considered
- the reason for the choice
- what would cause the team to revisit it

## Naming

Use zero-padded numbers:

- `0001-backend-stack.md`
- `0002-snapshot-storage.md`
- `0003-geometry-rendering.md`

## When To Write One

Write an ADR when a choice:

- affects more than one file or module
- is expensive to reverse
- changes the user experience materially
- introduces a new dependency or runtime model

Use the template in [`0000-template.md`](./0000-template.md).
