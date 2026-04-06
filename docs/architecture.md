# AEGIS Architecture

This document describes the target architecture only.

It does not describe code that already exists in the repository. At Phase 0, the runtime implementation is intentionally absent.

## Product Direction

AEGIS is structured as a decision-support platform rather than a globe-first visualization tool. The core workflow is:

1. ingest public orbital data
2. generate and rank conjunction candidates
3. inspect event geometry
4. evaluate candidate maneuvers
5. rescan short-horizon downstream risk

The build order for reaching that architecture lives in [`docs/development/README.md`](./development/README.md).

## Planned Backend Modules

- `app/api/`
  HTTP routes and request/response contracts
- `app/core/`
  configuration, settings, shared dependencies
- `app/domain/`
  propagation, screening, ranking, and maneuver logic

## Planned Frontend Areas

- events dashboard
- event detail page
- encounter-plane view
- maneuver sandbox

## Persistence Targets

- object snapshots
- screening runs
- conjunction events
- maneuver evaluations

## Architectural Rule

Do not try to fully realize every module at once.

Instead:

- establish contracts with demo data
- make live data inspectable before making it clever
- add deterministic screening before ranking polish
- add ranking before advanced geometry
- add maneuver logic only after the baseline event pipeline is reviewable

Major architecture choices should be recorded in [`docs/decisions/`](./decisions/README.md).
