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
}