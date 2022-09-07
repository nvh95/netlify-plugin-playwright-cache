const path = require("path");
const os = require("os");

// https://github.com/microsoft/playwright/blob/b6bc8b654d4bee7460256b65b1cf4eb3f1b889ad/packages/playwright-core/src/server/registry/index.ts#L229-L230
const CACHE_LOCATION = path.join(
  process.env.XDG_CACHE_HOME || path.join(os.homedir(), ".cache"),
  "ms-playwright"
);

console.log("Cache Location", CACHE_LOCATION);

export const onPreBuild = async function ({ utils }) {
  await utils.cache.restore(CACHE_LOCATION);
};

export const onPostBuild = async function ({ utils }) {
  await utils.cache.save(CACHE_LOCATION);
};
