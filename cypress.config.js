const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const preprocessor = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { allureCypress } = require('allure-cypress/reporter'); 

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/features/**/*.feature',
    baseUrl: 'https://telnyx.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile: 'cypress/support/e2e.js',
    chromeWebSecurity: false,
    env: {
      VALID_EMAIL: process.env.VALID_EMAIL,
      VALID_PASSWORD: process.env.VALID_PASSWORD,
      allure: true,
      allureReuseAfterSpec: true,
    },
    setupNodeEvents(on, config) {
   
      addCucumberPreprocessorPlugin(on, config);
      allureCypress(on, config);

      on(
        'file:preprocessor',
        createBundler({
          plugins: [preprocessor.default(config)],
        })
      );

      return config;
    },
  },
});
