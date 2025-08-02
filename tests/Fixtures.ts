import { test as base } from '@playwright/test';
import {setTimeout} from "timers/promises";

export const test = base.extend<{ forEachTest: void }>({
  forEachTest: [async ({ page }, use) => {
    // This code runs before every test.
    //await page.goto('https://www.google.com/');
    await page.goto('https://www.amazon.com/');    //Automatically calls the baseURL from the playwrigth.config.js
    await use();
    // This code runs after every test.
    await setTimeout(5000);
    await page.close();
  }, { auto: true }],  // automatically starts for every test.
});