import { Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Wspólna metoda pomocnicza
    async getTitle() {
        return await this.page.title();
    }

    // Robi zdjęcie całej strony, nawet tego, co jest pod "skrollem"
    async takeFullPageScreenshot(name: string) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }

    // Generuje PDF ze strony (działa tylko w Chromium!)
    async saveAsPdf(name: string) {
        await this.page.pdf({
            path: `pdfs/${name}.pdf`,
            format: 'A4'
        });
    }
}