# Phase Review Checklist

Use this checklist before approving a phase.

## Product Review

- The phase delivers the specific outcome promised in its guide.
- A human can see the result in the UI, API output, or stored data.
- The behavior is understandable without reading large amounts of code.
- Caveats and approximations are visible in the product or docs.

## Engineering Review

- The scope stayed inside the phase boundary.
- The code is organized along the planned module boundaries.
- Deterministic logic has unit tests.
- Commands needed to run or verify the phase are documented.
- Error states degrade clearly instead of failing opaquely.

## Decision Review

- Important choices were written down in an ADR.
- Alternatives were considered, not implied.
- The chosen approach still leaves room for later phases.

## Teaching Review

- The AI explained what changed in plain language.
- The AI explained why the approach was chosen.
- The human can now describe the phase back in their own words.

## Exit Rule

If any item above is still unclear, the phase is not done.
