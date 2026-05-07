import { test, expect } from '@playwright/test';
import { IframePage } from '../pages/IframePage';

test.describe('Obsługa iFrames', () => {

    test('Powinien wpisać tekst do edytora wewnątrz iFrame', async ({ page}) => {
        const iframePage = new IframePage(page);
        await iframePage.goto();

        const mojTekst = 'Cześć! Jestem wewnętrz iFrame!';
        await iframePage.forceTypeText(mojTekst);

        // Weryfikacja: sprawdzamy czy tekst wewnątrz ramki jest poprawny
        expect(await iframePage.getEditorText()).toBe(mojTekst)
    });
});