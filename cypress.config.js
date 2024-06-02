const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 4000,
  viewportHeight: 800,
  viewportWidth: 1080,
  failOnStatusCode: false,

  env: {                     // this is a .json body format/ we can define some environmental variable url/username etc
    baseUrl: "https://www.demoblaze.com/",
    username: "merkanb",
    password: "1234567Aa"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
