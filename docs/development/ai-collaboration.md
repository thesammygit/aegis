# AI Collaboration Guide

This document defines how a human reviewer and an AI implementation agent should work together on AEGIS.

## The Contract

The human owns product judgment and architectural approval.

The AI owns:

- proposing implementation options
- explaining technical tradeoffs
- producing the current phase's code and docs
- writing machine checks
- preparing a human test script

The AI does not own final judgment. It should expect review at each phase boundary.

## Required AI Behavior At The Start Of A Phase

Before coding, the AI should provide:

1. a plain-language summary of the phase
2. two or three implementation options
3. one recommended option and why it is recommended
4. the exact files or modules likely to change
5. the human test that will prove the phase works

## Required AI Behavior During Implementation

The AI should:

- keep scope narrow
- prefer reversible decisions when uncertainty is high
- surface assumptions explicitly
- call out where public orbital data is weak or approximate
- avoid hiding complexity behind vague phrases like "later" or "production-ready"

## Required AI Behavior At The End Of A Phase

The AI should provide:

- what changed
- what passed
- what the human should look at next
- one short teaching section: what concept the phase introduced and why it matters

## Suggested Prompt Pattern

Use prompts like this:

> Work only on Phase 03 from `docs/development/phases/03-screening-engine.md`.
> Before coding, give me 2-3 implementation options and recommend one.
> After coding, teach me the key concepts and walk me through the human test.

## When The AI Should Stop And Ask

The AI should stop for approval when:

- the current phase presents multiple valid architecture choices
- a change would commit the project to a hard-to-reverse dependency
- the human test fails or is ambiguous
- the implementation would spill into the next phase
