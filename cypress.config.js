module.exports = {
  e2e: {
    baseUrl: 'http://localhost:4272',
    retries: {
      runMode: 3,
      openMode: 0,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    experimentalInteractiveRunEvents: true,
    async setupNodeEvents(on, config) {
        on('after:run', (results) => {
          console.log("Cypress Test after:run");
        });
        
        on('after:spec', (results) => {
          console.log("Cypress Test after:spec");
        });
      }
      return config;
    },
  },
  },
}
