import { test, expect } from './fixtures';

test('Logowanie na SauceDemo przy użyciu Fixtures', async ({ sauceLoginPage, page }) => {
    await sauceLoginPage.goto();
    await sauceLoginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);
});