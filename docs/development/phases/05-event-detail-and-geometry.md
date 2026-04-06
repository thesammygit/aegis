# Phase 05: Event Detail And Geometry

## Purpose

Give the reviewer a geometry view that makes the conjunction understandable, not just numerically listed.

## Target Outcome

By the end of this phase:

- each event has a dedicated detail page
- the page shows summary metrics and explanation text
- an encounter-plane-style geometry view renders relative motion near TCA
- a time scrubber changes the visual state around the event

## Design Decisions To Make

### Rendering approach

Options:

- SVG
- canvas
- charting library such as Plotly

Recommended default:

- SVG for the initial encounter-plane view, because it is inspectable, deterministic, and easy to keep visually intentional without adding a heavy charting dependency.

### Geometry fidelity

Options:

- TCA-only static frame
- short scrub window around TCA
- full continuous replay

Recommended default:

- short scrub window around TCA, because it is enough to explain geometry while keeping the implementation teachable.

### Uncertainty display

Options:

- omit uncertainty in V1
- simple labeled placeholder ellipse
- pseudo-precise covariance rendering

Recommended default:

- either omit it explicitly or show a clearly labeled simplified placeholder. Do not imply fidelity the public data cannot support.

## Human Test

A reviewer should be able to:

- open an event detail page
- explain the close approach using the geometry view
- move the scrubber and see the relative geometry evolve
- confirm that the visualization matches the event metrics instead of contradicting them

## Machine Checks

- unit tests for coordinate-transform helpers
- frontend rendering smoke test for the detail page
- build verification

## Teaching Notes

The geometry view exists because tables alone do not explain risk well.

The encounter plane is useful because it reduces a moving 3D problem into a local 2D view near closest approach. That makes relative spacing and direction easier for a human to reason about.
