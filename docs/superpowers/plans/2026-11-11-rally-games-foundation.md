# Rally Games Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a runnable React and Phaser foundation for the real-time rally tycoon game, with Supabase schema and seed content.

**Architecture:** React owns routing, role-based pages, controls, and server state. Phaser owns the interactive tycoon scene and synchronizes visual entities from a typed tycoon store. Supabase migrations establish authoritative event, economy, and role data.

**Tech Stack:** Vite, React, TypeScript, Phaser 3, Zustand, React Router, Supabase, Vitest, Playwright.

**Spec:** docs/architecture.md

## Global Constraints

- All economy mutations are server-authoritative; browser code never calculates awards or deducts money.
- Phaser renders gameplay only; React owns browser UI and navigation.
- Seed one event with 15 teams, 12 positions, and 15 rounds.
- Support roles `team`, `staff`, and `organizer`.

---

### Task 1: Application scaffold

**Files:** package configuration, Vite sources, shared styles, README, GitHub CI.

- [ ] Create the Vite React TypeScript application and install runtime and test dependencies.
- [ ] Add application routes and global layout.
- [ ] Add typecheck, lint, test, build, and CI commands.

### Task 2: Domain model and test-first scheduling

**Files:** `src/features/rally/*`, `src/test/*`, `tests/unit/schedule.test.ts`.

- [ ] Write failing tests for 15-round scheduling with 9 solo assignments and three duel pairings per round.
- [ ] Implement deterministic schedule creation and test the team allocation constraints.

### Task 3: Tycoon UI and Phaser bridge

**Files:** `src/features/tycoon/*`, `tests/unit/tycoon-store.test.ts`.

- [ ] Write failing tests for local server-state replacement and shop lookup.
- [ ] Implement the typed store, React HUD, shop controls, and a Phaser scene with drag and zoom camera.

### Task 4: Supabase source of truth

**Files:** `supabase/migrations/*`, `supabase/seed.sql`, `supabase/functions/*`.

- [ ] Define event, participant, position, round, tycoon, shop, customer, and transaction tables.
- [ ] Add role-aware RLS and transactional RPC functions for awards, purchases, and opening status.
- [ ] Seed the event configuration, shop catalog, 15 teams, 12 positions, and schedule.

### Task 5: Role pages and initial content

**Files:** `src/features/auth/*`, `src/features/results/*`, `src/features/leaderboard/*`, `src/features/organizer/*`.

- [ ] Build team, staff, organizer, and leaderboard routes using deterministic seed data before Supabase is connected.
- [ ] Add placeholder adapters for Supabase services so the UI has a single future integration boundary.

### Task 6: Verification

**Files:** tests and documentation.

- [ ] Run unit tests, TypeScript typecheck, production build, and a smoke check of the generated project tree.
- [ ] Document local setup, Supabase setup, and the React–Phaser state boundary.
