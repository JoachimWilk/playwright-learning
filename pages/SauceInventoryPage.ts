import { BasePage } from "./BasePages";

export class SauceInventoryPage extends BasePage {
    private readonly addToCartButtons = this.page.locator('.btn_inventory');
    private readonly cartBadge = this.page.locator('.shopping_cart_badge');

    async addFirstProductToCart() {
        await this.addToCartButtons.first().click();
    }

    async getCartCount() {
        return await this.cartBadge.innerText();
    }
}