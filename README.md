# [Tatsudev.net](Tatsudev.net)

## Developing

Once you've created a project and installed dependencies with `bun install` (or `pnpm install` or `yarn` or `npm install`), start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

## Diabolic

`/diabolic` runs the Hellish Engine web export. Its generated runtime, packed game content and licenses live in `static/games/diabolic/`; `build.json` records the source game commit. The homepage's Diabolic banner links to this route.

To update the game, build and export Web from `StealthOrc/DIABOLIC` on `tatsu/hellish-engine`, replace the contents of that static directory with the complete export, and update `build.json`. Keep the exported licenses and `runtime_files.json`. Run `bun run check`, `bun run build` and `bun run test` before pushing to `main`, which deploys through the existing Vercel connection.
