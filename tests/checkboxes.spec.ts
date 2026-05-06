import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../pages/CheckboxPage';

test.describe('Interakcja z Checkboxami', () => {

    test('Powinien zaznaczyać i odznaczać opcje', async ({ page }) => {
        const checkboxPage = new CheckboxPage(page);
        await checkboxPage.goto();

        // 1. Zaznacz pierwszy checkbox (indeks 0)
        await checkboxPage.checkCheckbox(0);
        expect(await checkboxPage.isChecked(0)).toBeTruthy();

        // 2. Odznacz drugi checkbox (indeks 1 - on jest domyślnie zaznaczony na tej stronie)
        await checkboxPage.uncheckCheckbox(1);
        expect(await checkboxPage.isChecked(1)).toBeFalsy();
    });
});