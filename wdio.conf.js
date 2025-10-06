export const config = {
  runner: 'local',
  framework: 'mocha',
  specs: ['./tests/**/*.spec.js'],
  reporters: ['spec'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel 3',
    'appium:platformVersion': '9.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': '/path/to/app.apk'
  }],
  services: ['webdriverio'],
  mochaOpts: {
    timeout: 60000
  }
}