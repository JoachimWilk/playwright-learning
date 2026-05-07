import { test, expect } from '@playwright/test';
import { UploadPage } from '../pages/UploadPage';
import * as path from 'path';

test.describe('Obsługa Uploadu Plików', () => {

    test('Powinien poprawnie wgrać plik testowy', async ({ page }) => {
        const uploadPage = new UploadPage(page);
        await uploadPage.goto();

        // Budujemy ścieżkę do pliku test-file.txt, który stworzyliśmy wcześniej
        const filePath = path.resolve(__dirname, '../test-file.txt');

        await uploadPage.uploadFile(filePath);

        //Weryfikacja: czy na stronie po uploadzie wyświetla się nazwa pliku
        expect(await uploadPage.getUploadedFileName()).toBe('test-file.txt')
    });
});