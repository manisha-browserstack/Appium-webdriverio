import { config as baseConfig } from './wdio.conf.js';
import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  ...baseConfig,
  user: process.env.BROWSERSTACK_USERNAME || 'browserstack_username',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'browerstack_accesskey',
  services: ['browserstack'],
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 7',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': process.env.BROWSERSTACK_APP_ID
  }]
}