# Phase 02: Ingestion And Snapshot Browser

## Purpose

Replace static-only data with a real public-data ingest path while keeping the results visible and easy to debug.

## Target Outcome

By the end of this phase:

- the backend can fetch a manageable subset from CelesTrak
- each ingest is timestamped and stored as a reusable snapshot
- the UI or API exposes enough snapshot detail for a human to inspect the raw inputs
- the system falls back to seeded demo data if live ingest fails

## Design Decisions To Make

### HTTP client

Options:

- `httpx`
- `requests`
- standard-library `urllib`

Recommended default:

- `httpx`, because it is modern, predictable, and works well if async behavior is needed later.

### Snapshot storage format

Options:

- raw source payload plus normalized objects
- normalized objects only
- database rows only, with no preserved raw payload

Recommended default:

- preserve raw payload plus normalized records so debugging and replay stay possible.

### Subset strategy

Options:

- fixed NORAD list
- one or two CelesTrak groups
- user-provided object list

Recommended default:

- a small source-group subset for V1, because it is easier to refresh and explain than a hand-curated object list.

## Human Test

A reviewer should be able to:

- trigger or observe an ingest
- see when the snapshot was taken
- inspect object count and sample objects
- disable network access or force failure and see the demo fallback path still work

## Machine Checks

- parser and normalization tests
- fallback-path test
- API smoke test for ingest metadata

## Teaching Notes

This phase teaches reproducibility.

Without snapshots, every bug becomes a moving target because the source data can change underneath you.

Snapshotting means:

- you can replay a screening run later
- you can compare logic changes against the same inputs
- you can discuss bugs using real, frozen evidence
