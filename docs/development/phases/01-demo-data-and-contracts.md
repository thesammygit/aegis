# Phase 01: Demo Data And Contracts

## Purpose

Create a thin vertical slice with static or seeded data so the product shape can be reviewed before live ingest and orbital math are introduced.

## Target Outcome

Build a small but coherent demo:

- the API serves a fixed set of objects and conjunction events
- the UI shows an event list and a detail page
- the data model is visible and inspectable

The output can still be fake or seeded, but it must look like the real product.

## Design Decisions To Make

### How to define contracts

Options:

- schema-first API contracts
- UI-first mock shapes
- database-first schema

Recommended default:

- schema-first contracts, because they keep both backend and frontend aligned while the underlying algorithms are still immature.

### Where demo data lives

Options:

- static JSON in the API repo
- mocked frontend data only
- seed rows in a database

Recommended default:

- static JSON served by the API so both the UI and later backend logic can use the same shapes.

## Human Test

A reviewer should be able to:

- open the dashboard
- see a ranked-looking list of demo events
- click into one event
- inspect the raw event JSON or visible fields and understand the product nouns

## Machine Checks

- contract serialization tests
- frontend build
- one UI smoke test that renders the demo list

## Teaching Notes

This phase teaches the difference between product structure and implementation depth.

You are not proving the orbital math here. You are proving:

- what an object is
- what an event is
- what an event detail page needs to say

That keeps later algorithm work grounded in a visible interface instead of in abstract backend code.
