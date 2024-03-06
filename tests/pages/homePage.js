import { BasePage } from "./basePage";
export class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.searchInput = page.locator('#search');
        this.preorderWindow = page.locator('div.window');
        this.closePreorderPopup = page.locator('div.close');
        this.productlist = page.locator('#product');
        this.firtAddToCart = page.locator('div:nth-child(6) > .widget-item > .product-item-info > .product-item-details > .product-item-actions > .btn').first();
        this.cartCount = page.locator('span.counter-number');
    }

    goto = async () => {
        await this.page.goto('/');
        await this.#closePreorderPopup();
    }

    searchForProduct = async (productName) => {
        await this.searchInput.fill(productName);
    }

    submitSearchProduct = async (productName) => {
        await this.searchInput.fill(productName);
        await this.searchInput.press('Enter');
    }

    #closePreorderPopup = async () => {
        if (await this.preorderWindow.isVisible()) {
            await this.closePreorderPopup.click();
        }
    }

    getSuggestion = async () => {
        await this.productlist.waitFor();
        return this.productlist.locator('a');
    }

    addFirstProductToCart = async () => {
        await this.firtAddToCart.click();
    }

    getCartCount = async () => {
        await this.cartCount.waitFor();
        return this.cartCount.textContent();
    }

}