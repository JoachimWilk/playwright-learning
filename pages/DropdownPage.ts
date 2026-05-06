import { BasePage } from './BasePages';

export class DropdownPage extends BasePage {
    private readonly dropdown = this.page.locator('#dropdown');

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectByValue(value: string) {
        await this.dropdown.selectOption(value);
    }

    async getSelectedOptionText() {
        // Ta metoda wyciąga tekst aktualnie wybranej opcji
        return await this.dropdown.inputValue();
    }
};