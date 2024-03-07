import { expect } from '@playwright/test';
export class BasePage {
    constructor(page) {
        this.page = page;
        this.cartCount = page.locator('span.counter-number');
    }
    checkTitle = async (title) => await expect(this.page).toHaveTitle(title);
    checkUrl = async (url) => await expect(this.page).toHaveURL(url);
    getCartCount = async () => {
        await this.cartCount.waitFor();
        return this.cartCount.textContent();
    }
}