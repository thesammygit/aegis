# AEGIS

AEGIS is an open-source conjunction decision-support project concept.

This repository is intentionally at Phase 0.

There is no backend, frontend, or infrastructure implementation in the repo right now. The deliverable is the development system for building AEGIS from scratch in narrow, reviewable phases.

## Start Here

If you are building AEGIS, do not jump straight into a full implementation.

Use the staged workflow in [`docs/development/README.md`](./docs/development/README.md). It defines:

- the order in which features should be built
- what each phase must prove
- which design decisions need explicit approval
- how an AI agent should explain its work to a human reviewer

## Repository Layout

```text
apps/
  api/
    README.md
  web/
    README.md
docs/
  development/
  decisions/
```

## Product Direction

AEGIS is intended to grow into a public-data-driven workflow for:

- orbital data ingestion
- conjunction screening
- explainable event ranking
- event-detail inspection
- encounter-plane visualization
- maneuver what-if evaluation

## Documentation Map

- [`docs/development/README.md`](./docs/development/README.md): phased implementation path
- [`docs/architecture.md`](./docs/architecture.md): target architecture, not current implementation
- [`docs/api-outline.md`](./docs/api-outline.md): target API surface and sequencing
- [`docs/roadmap.md`](./docs/roadmap.md): high-level phase summary
- [`docs/decisions/README.md`](./docs/decisions/README.md): ADR process

## Notes

- Keep product language neutral and operationally focused.
- Prefer visible, human-testable progress over deep one-shot implementation.
- Do not add runtime code before the relevant phase is approved.
- Document public-data limitations clearly as the implementation matures.
