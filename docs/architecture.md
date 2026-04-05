# AEGIS Architecture

## Product Direction

AEGIS is structured as a decision-support platform rather than a globe-first visualization tool. The core workflow is:

1. ingest public orbital data
2. generate and rank conjunction candidates
3. inspect event geometry
4. evaluate candidate maneuvers
5. rescan short-horizon downstream risk

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

