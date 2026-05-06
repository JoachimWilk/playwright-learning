import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Funkcjonalność Logowania', () => {
    test('Powinien zalogować poprawnie przy użyciu prawidłowych danych', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');

        // Asercja: Sprawdź czy URL się zmienił lub czy jest komunikacja o sukcesie
        await expect(page).toHaveURL(/.*secure/);
        expect( await loginPage.getFlashMessageText()).toContain('You logged into a secure area!');
    });

    test('Powinien wyświetlić błąd przy użyciu nieprawidłowych danych', async ({ page }) =>{
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('badUser', 'badPassword');
        
        // Asercja: Sprawdź czy URL się zmienił lub czy jest komunikacja o sukcesie
        expect(await loginPage.getFlashMessageText()).toContain('Your username is invalid!');
    });

})
