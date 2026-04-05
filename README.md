# AEGIS

AEGIS is an open-source conjunction decision-support project template. This repository provides the initial backend/frontend structure, neutral engineering documentation, and Docker scaffolding for a future public-data workflow.

## Template Contents

- FastAPI backend skeleton for ingestion, screening, ranking, and maneuver evaluation flows
- React + Vite frontend shell for an operator-facing analysis console
- Docker Compose template for API, web, and PostgreSQL services
- architecture, API, and roadmap documentation

## Repository Layout

```text
apps/
  api/
    app/
      api/
      core/
      domain/
  web/
docs/
docker-compose.yml
```

## Intended Scope

The repository is set up for:

- public orbital data ingestion
- conjunction screening and ranking
- event-detail inspection
- encounter-plane visualization
- maneuver what-if analysis

The current code is intentionally skeletal so dedicated implementation agents can build each subsystem out independently.

## Notes

- Keep product language neutral and operationally focused.
- Treat the current code as scaffolding, not a finished analytical system.
- Document public-data limitations clearly as the implementation matures.
