# Human-Centric Development Path

This folder defines how AEGIS should be built: in narrow, reviewable phases rather than in one large implementation pass.

The intent is simple:

- every phase ends with something a human can see and judge
- every phase has at least one deterministic test target
- every meaningful design choice is written down before it disappears into code
- an AI agent should teach and explain, not just produce files

## Development Rules

1. Build only one phase at a time.
2. Prefer visible progress over hidden infrastructure.
3. Prefer seeded or mocked data before live pipelines when that makes review easier.
4. Add unit tests around deterministic logic, not around everything indiscriminately.
5. Record architecture decisions as short ADRs in [`docs/decisions/`](../decisions/README.md).
6. Do not advance to the next phase until the current phase passes both machine checks and a human review.

## What A Complete Phase Looks Like

Every phase should produce all of the following:

- a narrow product outcome
- a human test script
- a small set of machine checks
- a list of design decisions that must be made
- a short teaching section explaining what is happening and why

## Workflow

For each phase:

1. Read the phase guide in [`docs/development/phases/`](./phases).
2. Choose the design options for that phase and record them in an ADR if the choice is meaningful.
3. Implement only the stated scope.
4. Run the machine checks listed in the phase.
5. Run the human test with the reviewer watching.
6. Capture open questions before moving on.

## AI Collaboration Standard

When an AI agent works on AEGIS, it should:

- explain the current phase in plain language
- offer two or three viable options, with a recommended default
- describe tradeoffs before coding
- implement only the current phase unless explicitly asked to go further
- provide exact commands and visible cues for the human test
- explain the underlying concept after the phase is complete

Use [`ai-collaboration.md`](./ai-collaboration.md) and [`review-checklist.md`](./review-checklist.md) as the default operating procedure.

## Phase Index

- [`00-working-agreement.md`](./phases/00-working-agreement.md)
- [`01-demo-data-and-contracts.md`](./phases/01-demo-data-and-contracts.md)
- [`02-ingestion-and-snapshot-browser.md`](./phases/02-ingestion-and-snapshot-browser.md)
- [`03-screening-engine.md`](./phases/03-screening-engine.md)
- [`04-ranking-and-dashboard.md`](./phases/04-ranking-and-dashboard.md)
- [`05-event-detail-and-geometry.md`](./phases/05-event-detail-and-geometry.md)
- [`06-maneuver-sandbox.md`](./phases/06-maneuver-sandbox.md)
- [`07-persistence-compose-and-hardening.md`](./phases/07-persistence-compose-and-hardening.md)

## Recommended Pace

Do not optimize for finishing the roadmap quickly. Optimize for making the next decision obvious.

A reasonable cadence is:

- one phase per review cycle
- one ADR for each non-trivial design choice
- one visible demo before any major refactor
