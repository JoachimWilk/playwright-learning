import { BasePage } from './BasePages';

export class AlertsPage extends BasePage {
    private readonly alertButton = this.page.locator('button').getByText('Click for JS Alert');
    private readonly confirmButton = this.page.locator('button').getByText('Click for JS Confirm');
    private readonly resultMessage = this.page.locator('#result');
    private readonly promptButton = this.page.locator('button').getByText('Click for JS Prompt');

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    }

    async triggerAlert() {
        // Przygotowujemy obsługę: gdy pojawi się dialog, zaakceptuj go
        this.page.once('dialog', dialog => dialog.accept());
        await this.alertButton.click();
    }

    async triggerConfirm(accept: boolean) {
        // Możemy zdecydować: OK (accept) lub Anuluj (dismiss)
        this.page.once('dialog', dialog => {
            if (accept) dialog.accept();
            else dialog.dismiss();
        });
        await this.confirmButton.click();
    }

    async triggerPrompt(text: string) {
        // Pułapka: gdy pojawi się dialog typu prompt, wpisz tekst i zaakceptuj
        this.page.once('dialog', dialog => {
            dialog.accept(text);
        });
        await this.promptButton.click();
    }

    async getResultText() {
        return await this.resultMessage.innerText();
    }
};