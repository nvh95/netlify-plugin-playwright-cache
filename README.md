# Netlify Plugin Playwright Cache

Persist the Playwright executable between Netlify builds.

## Why `netlify-plugin-playwright-cache`

When you install `playwright-chromium`, it downloads Chromium executables to a cache folder (not `node_modules`). Netlify does not cache this folder between builds, but caches `node_modules`. This leads to unsuccessful builds with the following error like this:

```
11:33:48 PM: [: Executable doesn't exist at /opt/buildhome/.cache/ms-playwright/chromium-1019/chrome-linux/chrome
╔═════════════════════════════════════════════════════════════════════════╗
11:33:48 PM: ║ Looks like Playwright Test or Playwright was just installed or updated. ║
11:33:48 PM: ║ Please run the following command to download new browsers:              ║
11:33:48 PM: ║                                                                         ║
11:33:48 PM: ║     npx playwright install                                              ║
11:33:48 PM: ║                                                                         ║
11:33:48 PM: ║ <3 Playwright Team                                                      ║
11:33:48 PM: ╚═════════════════════════════════════════════════════════════════════════╝
```

This plugins fix the above issue by caching the Playwright executables (Chromium, ffmpeg) between builds.

## Installation

You can install as a dependency of your project:

```bash
npm install --save-dev netlify-plugin-playwright-cache
# Or
yarn add -D netlify-plugin-playwright-cache
# Or
pnpm add -D netlify-plugin-playwright-cache
```

Installation via the Netlify UI is coming soon.

## Configuration

Update `netlify.toml` to include the plugin:

```toml
[[plugins]]
  package = "netlify-plugin-playwright-cache"
```

Remember to **Clear cache and retry deploy** after adding the plugin.

<img src="https://user-images.githubusercontent.com/8603085/188937674-a8850b77-94ec-4a20-8aa0-8f17e9df754e.png" width="400" />

