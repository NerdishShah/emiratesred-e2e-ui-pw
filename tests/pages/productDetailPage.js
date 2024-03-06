class ProductDetailPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('text=Add to cart');
        this.productTitle = page.locator('.product-title'); // Change selector as needed
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async getProductTitle() {
        return await this.productTitle.textContent();
    }
}