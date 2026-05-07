import { test } from '@playwright/test';
import { BasePage } from '../pages/BasePages';

test('Powinien wygenerować dokumentację wizualną strony głównej', async ({ page}) => {
    const basePage = new BasePage(page);

    await page.goto('https://the-internet.herokuapp.com');

    // 1. Robimy zrzut ekranu
    await basePage.takeFullPageScreenshot('strona_glowna');

    // 2. Generujemy PDF (tylko jesli uzywamy chromium)
    if (test.info().project.name === 'chromium') {
        await basePage.saveAsPdf('dokumentacja_strony');
    }
});