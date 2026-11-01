# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## What this is

Single-app Next.js 16.4 (App Router, Turbopack, React Compiler) studio-booking frontend scaffold. Not a monorepo; no tests, no CI, no typecheck script.

## Commands

- `npm run dev` — Turbopack dev server on :3000
- `npm run build` — required before `next start`; also generates route types
- `npm run lint` — plain `eslint` (flat config, eslint-config-next)
- Typecheck: `npx tsc --noEmit` (no npm script for it)

There is no test command or test framework. Don't add one without being asked.

## Quirks that will bite you

- **Typed routes are generated.** `src/app/layout.tsx` uses the global `LayoutProps<"/">` type, which only exists after `next dev` or `next build` has written `.next/types` (and `.next/dev/types`). A fresh clone fails typecheck until you run a dev/build step once.
- **shadcn style is `base-nova`:** UI primitives in `src/components/ui/` are built on `@base-ui/react`, **not Radix**. Use `npx shadcn add <component>` to add components; do not hand-port Radix-based snippets or add Radix deps.
- **`src/components/ui/` is generated shadcn output.** Prefer editing it only when customizing; expect shadcn to overwrite on regeneration. Custom logic belongs in `src/sharedComponents/` or feature code.
- **React Compiler is on** (`reactCompiler: true` + `babel-plugin-react-compiler`). Components must follow React Compiler rules (no impure renders, no mutating props/state during render) — violations are silent miscompiles, not errors.
- **Tailwind v4, CSS-first.** No `tailwind.config`; theme lives in `src/app/globals.css`. CSS is processed via the `@tailwindcss/turbopack` loader rule in `next.config.ts` — builds assume Turbopack.

## Layout

- `src/app/` — App Router pages; single route `/` so far. `src/app/layout.tsx` wraps everything in Navbar + Footer.
- `src/sharedComponents/` — hand-written app-level components (Navbar, Banner, Footer).
- `src/components/ui/` — generated shadcn components.
- `src/lib/`, `src/hooks/` — `cn` helper, Shiki highlighter, `use-mobile`.
- Path alias: `@/*` → `./src/*`.

## Other gotchas

- `next.config.ts` allows **any** https host in `images.remotePatterns`; still prefer known-good URLs.
- Auth is a placeholder: `isAuthenticated = false` in `src/sharedComponents/Navbar.tsx` with a TODO for BetterAuth session state. Links like `/studios` have no matching routes yet.
- `metadata` in `src/app/layout.tsx` is still the create-next-app default — update when adding real pages.
