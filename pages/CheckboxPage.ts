import { BasePage } from './BasePages'

export class CheckboxPage extends BasePage {
    // Playwright pozwala łapać elementy po tekście lub indeksie
    // Tutaj złapiemy wszystkie inputy typu checkbox
    private readonly checkboxes = this.page.locator('input[type="checkbox"]');

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }

    async checkCheckbox(index: number) {
        await this.checkboxes.nth(index).check();
    }

    async uncheckCheckbox(index: number) {
        await this.checkboxes.nth(index).uncheck();
    }

    async isChecked(index: number): Promise<boolean> {
        return await this.checkboxes.nth(index).isChecked();
    }
}