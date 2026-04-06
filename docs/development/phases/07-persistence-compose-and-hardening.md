# Phase 07: Persistence, Compose, And Hardening

## Purpose

Make the system reproducible, demoable, and safe to hand to another human.

## Target Outcome

By the end of this phase:

- snapshots, screening runs, and evaluations persist across restarts
- Docker Compose starts the full stack
- the README reflects reality
- fallback behavior and caveats are documented
- the main flows can be demonstrated end to end

## Design Decisions To Make

### Persistence boundary

Options:

- persist only snapshots
- persist snapshots and events
- persist snapshots, events, runs, and maneuver evaluations

Recommended default:

- persist snapshots, events, runs, and maneuver evaluations so debugging and demo replay stay possible.

### Deployment target for local development

Options:

- local processes only
- Docker Compose only
- both, with Compose as the integration path

Recommended default:

- both, because fast local iteration and reliable end-to-end verification serve different needs.

### Test emphasis

Options:

- unit tests only
- unit plus API smoke tests
- full browser automation everywhere

Recommended default:

- unit tests plus API smoke tests plus one minimal browser or build verification path.

## Human Test

A reviewer should be able to:

- start the stack from a clean checkout
- ingest or load demo data
- view ranked events
- open event detail
- run a maneuver
- restart the stack and confirm persistence behaves as documented

## Machine Checks

- backend tests
- frontend build and lint
- API startup smoke test
- Compose startup and health verification

## Teaching Notes

Hardening is not glamorous, but it is what turns a prototype into a teachable system.

If the stack cannot be started reliably, the earlier phases are hard to trust because no one else can reproduce them.
