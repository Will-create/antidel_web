# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React + TypeScript app entry points and feature code.
- `src/main.tsx` bootstraps the app; `src/App.tsx` owns routing.
- `src/pages/` holds route-level pages (e.g., `Home.tsx`, `PrivacyPolicy.tsx`).
- `src/components/` is split by intent: `Layout/` for shell pieces, `UI/` for reusable UI elements, and feature sections like `Hero.tsx`.
- `src/i18n/` stores i18next setup and `locales/*.ts` translation dictionaries.
- Styling lives in `src/index.css` with Tailwind config in `tailwind.config.js`.

## Build, Test, and Development Commands
- `npm run dev` starts the Vite dev server for local development.
- `npm run build` produces a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across the project.

## Coding Style & Naming Conventions
- Language: TypeScript with React function components.
- Formatting: follow existing file formatting and keep JSX readable; run `npm run lint` before pushing.
- Naming: Components use `PascalCase` (`Header.tsx`), hooks use `useX`, and constants live under `src/constants/`.
- Routes: add new pages in `src/pages/` and wire them in `src/App.tsx`.

## Testing Guidelines
- No test framework is configured yet; there are no `__tests__` or test scripts.
- If you add tests, document the framework and add a script to `package.json`.

## Commit & Pull Request Guidelines
- Git history is minimal ("First commit"/"first commit"), so no established convention exists.
- Prefer short, imperative commit subjects (e.g., "Add pricing section").
- PRs should include a clear description, relevant screenshots for UI changes, and linked issues if applicable.

## Configuration Notes
- Environment-specific config should stay out of source; document any new `.env` keys in this file.
- Keep translations in sync across `src/i18n/locales/` when adding new copy.
