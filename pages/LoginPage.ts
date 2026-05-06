import { BasePage } from "./BasePages";

export class LoginPage extends BasePage {
   // Definiujemy tylko to, co jest specyficzne dla tej strony
    private readonly usernameInput = this.page.locator('#username')
    private readonly passwordInput = this.page.locator('#password')
    private readonly loginButton = this.page.locator('button[type="submit"]')
    private readonly flashMessage = this.page.locator('#flash');

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    async getFlashMessageText() {
        return await this.flashMessage.innerText();
    }
}