import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

test.describe('Obsługa JavaScript Alerts', () => {

    test('Powinien zaakceptować zwykły alert', async ({ page }) => {
        const alertsPage = new AlertsPage(page);
        await alertsPage.goto();

        await alertsPage.triggerAlert();
        expect(await alertsPage.getResultText()).toBe('You successfully clicked an alert');
    });

    test('Powinien pozwolić na odrzucenie (dismiss) okna Confirm', async ({ page }) => {
        const alertsPage = new AlertsPage(page);
        await alertsPage.goto();

        await alertsPage.triggerConfirm(false); // false kliknij Anuluj
        expect(await alertsPage.getResultText()).toBe('You clicked: Cancel');
    });

    test('Powinien wpisać tekst do okna Prompt i go zaakceptować', async ({ page}) => {
        const alertsPage = new AlertsPage(page);
        await alertsPage.goto();

        const mojTekst = 'Automatyzacja jest super!';
        await alertsPage.triggerPrompt(mojTekst);

        // Strona the-internet wyświetan wynik w formacie: "You entered: [tekst]"
        expect(await alertsPage.getResultText()).toBe(`You entered: ${mojTekst}`);
    });
});