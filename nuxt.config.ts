import path from "path";

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  modules: [
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
  ],
  alias: {
    nanoid: path.resolve(__dirname, "node_modules/nanoid/index.browser.js"),
  },
});
