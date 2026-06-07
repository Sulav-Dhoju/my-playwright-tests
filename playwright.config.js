const { defineConfig } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,   // Always headless in CI
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/junit-report.xml' }]
  ],
});
