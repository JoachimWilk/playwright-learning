import { SauceInventoryPage } from '../pages/SauceInventoryPage';
import { SauceLoginPage } from '../pages/SauceLoginPage';
import { test, expect } from './fixtures';

test.describe('SauceDemo - Proces zakupowy', () => {
    
    test('Powinien dodać produkt do koszyka po poprawnym zalogowaniu', async ({ sauceLoginPage, sauceInventoryPage}) => {
        await sauceLoginPage.goto();
        await sauceLoginPage.login('standard_user', 'secret_sauce');

        await sauceInventoryPage.addFirstProductToCart();

        expect(await sauceInventoryPage.getCartCount()).toBe('1');
    });
});