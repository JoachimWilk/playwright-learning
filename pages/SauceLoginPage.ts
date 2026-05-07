import { BasePage } from './BasePages';

export class SauceLoginPage extends BasePage {
    private readonly usernameInput = this.page.locator('[data-test="username"]');
    private readonly passwordInput = this.page.locator('[data-test="password"]');
    private readonly loginButton = this.page.locator('[data-test="login-button"]');

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}