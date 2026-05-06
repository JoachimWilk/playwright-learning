import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

test.describe('Interakcja z Listami Rozwijalnymi (Dropdown)', () => {

    test('Powinien wybrać opcję z listy i zweryfikować wybór', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);
        await dropdownPage.goto();

        // Wybieramy "Option 1" (w HTML ma value="1")
        await dropdownPage.selectByValue('1');

        // Weryfikacja: sprawdzamy czy wartość inputa to "1"
        expect(await dropdownPage.getSelectedOptionText()).toBe('1');

        // Opcjonalnie: możemy sprawdzić czy tekst widoczny dla użytkownika jest poprawny
        const selectedText = await page.locator('#dropdown option[selected="selected"]').innerText();
        expect(selectedText).toBe('Option 1');
    });
});