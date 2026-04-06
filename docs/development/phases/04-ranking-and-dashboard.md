# Phase 04: Ranking And Dashboard

## Purpose

Transform a raw candidate list into an operator-facing triage surface.

## Target Outcome

By the end of this phase:

- events are ranked by an explainable score
- score components are visible
- the dashboard supports sorting and filtering
- a reviewer can challenge the ranking logic from the UI

## Design Decisions To Make

### Ranking model

Options:

- weighted score
- rule-based severity buckets
- learned ranking model

Recommended default:

- weighted score with readable component reasons, because it is transparent and easy to tune during early product development.

### Where ranking happens

Options:

- backend only
- frontend only
- hybrid: backend score, frontend presentation transforms

Recommended default:

- backend scoring, frontend filtering and presentation.

### Filtering behavior

Options:

- all client-side
- all server-side
- hybrid

Recommended default:

- hybrid only if needed later; start with server-backed filters for correctness and client-side affordances for responsiveness.

## Human Test

A reviewer should be able to:

- sort events by score and time
- filter by severity or horizon
- inspect why the top event is at the top
- disagree with the ranking and identify which weight or rule caused it

## Machine Checks

- unit tests for score calculation
- unit tests for explanation generation
- API test for ranked ordering on a frozen fixture

## Teaching Notes

Ranking is not just math. It is policy.

The score answers: "What should an operator look at first?"

That means the ranking system must be explainable enough that a human can say:

- this ordering makes sense
- this ordering is wrong, and I know why
