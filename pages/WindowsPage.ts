import { Page } from '@playwright/test';
import { BasePage } from './BasePages';

export class WindowsPage extends BasePage {
    private readonly clickHereLink = this.page.getByText('Click Here');

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/windows');
    }

    async openNewTab(): Promise<Page> {
        // Przygotowujemy "obietnicę" (Promise), ze pojawi się nowa karta
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),   // Czekaj na zdarzenie otwaria nowej strony
            this.clickHereLink.click(),                 // Kliknij w link, który to wywoła 
        ]);

        // Czekamy, aż nowa karta w pełni się załaduje
        await newPage.waitForLoadState();
        return newPage;
    }
}