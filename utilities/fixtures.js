import { test as base } from '@playwright/test';

class Fixtures {
  static setup = async ({ page }, use) => {
    await page.goto('https://www.google.com/');
    await page.waitForNavigation();
    await use(page);
  };
}

export const test = base.extend({
  setup: Fixtures.setup,
});