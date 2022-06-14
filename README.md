### NODE Starter

Simple, functionizable, clean

## Usage

- Install project `npm install`
- Run `npm start`
- Run in development server `npm run dev`
- Prettier check `npm run prettier:check`
- Prettier format `npm run prettier:write`
- Lint check `npm run lint`
- Lint fix `npm run lint:fix`

## Usage using docker-compose

- Run `docker-compose up -d`

## Principle

- Functional
- Module-based
- Clean
- Simple

## Structure

- `src`
  - `app` - Application transport layer
    - `http` - HTTP layer
      - `middleware` - Middleware
      - `router` - Router
  - `module` - Module for each feature
    - `featureFolder` - Feature folder
      - `handler` - Handler for each route
      - `repository` - Data access layer
      - `service` - Business layer
      - `response` - Helper for manipulate response data
      - `index.js` - Entry point / routes entry for module
  - `config` - Configuration
  - `pkg` - Data access layer for third party service
  - `service` - Third-party service
  - `util` - Helper functions
