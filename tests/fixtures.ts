import { test as base } from '@playwright/test';
import { SauceLoginPage } from '../pages/SauceLoginPage';
import { SauceInventoryPage } from '../pages/SauceInventoryPage';

type MyFixtures = {
    sauceLoginPage: SauceLoginPage;
    sauceInventoryPage: SauceInventoryPage;
};

export const test = base.extend<MyFixtures>({
    sauceLoginPage: async ({ page }, use) => {
        await use(new SauceLoginPage(page));
    },

    sauceInventoryPage: async ({ page }, use) => {
        await use(new SauceInventoryPage(page));
    },
});

export { expect } from '@playwright/test';