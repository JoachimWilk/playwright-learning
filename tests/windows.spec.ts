import { test, expect } from '@playwright/test';
import { WindowsPage } from '../pages/WindowsPage';

test.describe('Obsługa wielu kart (Windows)', () => {

    test('Powinien otworzyć nową kartę i zweryfikować jej treść', async ({ page }) => {
        const windowPage = new WindowsPage(page);
        await windowPage.goto();

        // Wywołujemy naszą metodę, która zwraca obiekt nowej karty
        const newTab = await windowPage.openNewTab();

        // Teraz możemy używać 'newTab' dokładnie tak samo jak 'page'
        await expect(newTab).toHaveURL(/.*new/);
        const headerText = await newTab.locator('h3').innerText();
        expect(headerText).toBe('New Window');

        // Możemy też wrócić do starej karty i coś na niej sprawdzić
        await expect(page.locator('h3')).toHaveText('Opening a new window');

        // Dobra praktyka: zamknij nową kartę, gdy skończysz
        await newTab.close()
    });
});