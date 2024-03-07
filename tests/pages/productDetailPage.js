import { BasePage } from "./basePage";

export class ProductDetailPage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
        this.addToCartButton = page.locator('text=Add to Cart');
        this.productTitle = page.locator('.product-title');
        this.successMessage = page.getByRole('alert').first();
    }

    async addProductToCart() {
        await this.page.waitForTimeout(500);
        await this.addToCartButton.click();
    }

    async getProductTitle() {
        return await this.productTitle.textContent();
    }

    async getSuccessMessage() {
        return this.successMessage;
    }
}