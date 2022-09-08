# 🤖 Netlify Plugin Playwright Cache

[![npm version](https://img.shields.io/npm/v/netlify-plugin-playwright-cache)](https://www.npmjs.com/package/netlify-plugin-playwright-cache)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)

Persist the Playwright executables between Netlify builds.

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

This plugins fixes the above issue by caching the Playwright executables (Chromium, ffmpeg...) between builds.

## Installation

You can install `netlify-plugin-playwright-cache` by one of the following ways:

1. Install directly from Netlify Dashboard:

<img src="https://user-images.githubusercontent.com/8603085/189162327-eb9eba2a-c0f9-49c6-a93b-a28b549423ee.png" width="900" />

2. Install as a dependency of your project:

```bash
npm install --save-dev netlify-plugin-playwright-cache
# Or
yarn add -D netlify-plugin-playwright-cache
# Or
pnpm add -D netlify-plugin-playwright-cache
```

Then update `netlify.toml` to include the plugin:

```toml
[[plugins]]
  package = "netlify-plugin-playwright-cache"
```

## Usage

Remember to **Clear cache and retry deploy** after adding the plugin.

<img src="https://user-images.githubusercontent.com/8603085/188937674-a8850b77-94ec-4a20-8aa0-8f17e9df754e.png" width="450" />
