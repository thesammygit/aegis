# Phase 00: Working Agreement

## Purpose

Create a shared development contract before writing meaningful code.

This phase exists to prevent avoidable churn. It locks in how the project will be built, reviewed, and explained.

## Target Outcome

By the end of this phase, the team should agree on:

- the development process in this folder
- the initial runtime stack
- the initial package and tooling choices
- how decisions will be recorded
- what counts as "done" for each future phase

## Design Decisions To Make

### Backend stack

Options:

- FastAPI + Pydantic + SQLAlchemy
- FastAPI + Pydantic + direct SQL layer
- Flask or Django alternative

Recommended default:

- Stay with FastAPI because the template already points there and its request-model ergonomics fit a typed API-first workflow.

### Frontend stack

Options:

- React + Vite + TypeScript
- Next.js
- SvelteKit

Recommended default:

- Stay with React + Vite + TypeScript because it is already scaffolded, fast to iterate locally, and sufficient for a single-operator analysis console.

### Local persistence

Options:

- SQLite first, then PostgreSQL in Compose
- PostgreSQL from day one
- file-backed JSON only

Recommended default:

- SQLite first for local iteration, with PostgreSQL reserved for Compose and end-to-end verification.

## Human Test

The human test for this phase is not product behavior. It is process clarity.

A reviewer should be able to answer:

- What phase are we in?
- What will be built next?
- What exact behavior will prove that phase worked?
- Which decisions still need approval before coding starts?

## Machine Checks

- `docker compose config`
- backend and frontend skeleton commands run without needing feature code

## What You Learn In This Phase

Software projects often fail long before the code is wrong. They fail because the team is solving different problems in different orders.

This phase fixes the order:

- visible outcome first
- deterministic logic second
- infrastructure only when it supports human review
