import {defineConfig} from 'cypress';
import Browser = Cypress.Browser;

export default defineConfig({

    e2e: {
        setupNodeEvents(on, config) {
            // inside config.browsers array each object has information like
            // {
            //   name: 'chrome',
            //   channel: 'canary',
            //   family: 'chromium',
            //   displayName: 'Canary',
            //   version: '80.0.3966.0',
            //   path:
            //    '/Applications/Canary.app/Contents/MacOS/Canary',
            //   majorVersion: 80
            // }
            return {
                'baseUrl': 'http://localhost:4200',
                browsers: config.browsers.concat([<Browser>{
                    name: 'chrome',
                    channel: 'dev',
                    family: 'chromium',
                    displayName: 'Chrome Dev',
                    version: '116.0.5829.0 ',
                    path: 'C:\\Program Files\\Google\\Chrome Dev\\Application\\chrome.exe',
                    majorVersion: 116
                }]),
            };
        },
    },

    component: {
        devServer: {
            framework: 'angular',
            bundler: 'webpack',
        },
        specPattern: '**/*.cy.ts'
    }

});
