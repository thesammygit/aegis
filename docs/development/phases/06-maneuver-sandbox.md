# Phase 06: Maneuver Sandbox

## Purpose

Let the reviewer test a candidate maneuver and see both the local benefit and the downstream consequences.

## Target Outcome

By the end of this phase:

- the user can choose a rough maneuver direction, timing, and magnitude
- the selected event is re-evaluated after the maneuver
- baseline and post-maneuver geometry can be compared
- the backend performs a short downstream rescan for new or worsened events

## Design Decisions To Make

### Maneuver model

Options:

- simple impulsive RTN maneuver
- along-track-only impulse
- optimization-based solver

Recommended default:

- simple impulsive RTN maneuver, because it is expressive enough for a real V1 while remaining explainable.

### UX controls

Options:

- discrete presets only
- numeric controls only
- a small number of numeric controls with sane defaults

Recommended default:

- a small number of numeric controls with sane defaults, because it supports learning without overwhelming the operator.

### Downstream summary

Options:

- count only
- count plus earliest next event
- full ranked downstream list

Recommended default:

- count plus earliest next event at first, then expand to a short downstream list if the UI stays readable.

## Human Test

A reviewer should be able to:

- run a maneuver against one event
- see the baseline and post-maneuver miss distance
- see whether the score improved
- see whether a new downstream concern appeared

## Machine Checks

- unit tests for maneuver perturbation helpers
- unit tests for risk-delta summary
- API test for maneuver evaluation response shape

## Teaching Notes

This phase introduces second-order reasoning.

A maneuver that improves one event is not automatically good. It might:

- solve the selected conjunction
- waste too much delta-v
- create another conjunction soon afterward

The sandbox exists to make that tradeoff visible.
