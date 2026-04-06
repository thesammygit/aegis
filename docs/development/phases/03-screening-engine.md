# Phase 03: Screening Engine

## Purpose

Turn orbital snapshots into conjunction candidates using a practical V1 screening pipeline.

## Target Outcome

By the end of this phase:

- the backend propagates a manageable object subset across a short horizon
- coarse screening narrows candidate pairs
- a refinement step estimates TCA and miss distance
- the UI or API can show the resulting candidate list before ranking is applied

## Design Decisions To Make

### Propagation library

Options:

- `sgp4`
- `poliastro`
- custom two-body propagation

Recommended default:

- `sgp4` for V1 public-data propagation, because it matches the public element sources and keeps the model honest about its fidelity.

### Screening strategy

Options:

- all-pairs brute force over a tiny subset
- coarse grid followed by refinement
- spatial indexing and more advanced pruning

Recommended default:

- coarse screening plus refinement, because it is simple enough to explain and strong enough for a real subset.

### Time horizon and resolution

Options:

- short horizon with fine steps
- medium horizon with coarse steps
- configurable horizon with safe defaults

Recommended default:

- configurable horizon with conservative defaults, so the human can see how sensitivity changes without rewriting code.

## Human Test

A reviewer should be able to:

- choose a small horizon and threshold
- run screening
- see candidate events appear with TCA, miss distance, and relative velocity
- change the threshold or horizon and observe the candidate set change in a way that makes sense

## Machine Checks

- unit tests for propagation helpers
- unit tests for candidate refinement
- deterministic screening test on a small frozen dataset

## Teaching Notes

The important concept here is coarse-to-fine computation.

You do not need precise math for every object pair at every instant. You need:

1. a fast pass that says "these pairs are worth a closer look"
2. a refinement pass that spends more time only where it matters

That tradeoff is what makes a laptop-scale V1 feasible.
