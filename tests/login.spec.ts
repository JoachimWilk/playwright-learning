import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Użytkownik powinien zalogować się do bezpieczenego obszaru', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('tomsmith', 'SuperSecretPassword!');

    // Asercja: Sprawdź czy URL się zmienił lub czy jest komunikacja o sukcesie
    await expect(page).toHaveURL(/.*secure/);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});