# AEGIS API Outline

This is a target API outline for future phases.

There is no implemented API in the repository at Phase 0.

## Baseline Routes

These are the smallest routes worth introducing once implementation begins:

- `GET /health`
- `GET /meta`

## Planned Routes By Phase

### Phase 01

- `GET /objects`
- `GET /events`
- `GET /events/{event_id}`

### Phase 02

- `POST /ingest/refresh`
- `GET /snapshots`
- `GET /snapshots/{snapshot_id}`

### Phase 03-04

- `GET /objects`
- `GET /events`
- `GET /events/{event_id}`

### Phase 06

- `POST /maneuvers/evaluate`

### Optional Later Phase

- `GET /risk-atlas`

## Data Contracts To Flesh Out

- object snapshot payload
- conjunction event summary
- conjunction event detail
- maneuver evaluation request
- maneuver evaluation result

The recommended sequence is:

1. lock contract shapes with demo data
2. add live-ingest and snapshot contracts
3. expose screening and ranking outputs
4. add maneuver evaluation only after event detail is stable
