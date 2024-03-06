class ProductCategoryPage {
    constructor(page) {
        this.page = page;
        this.productLinks = page.locator('a.product-link');
    }

    async selectProduct(index) {
        await this.productLinks.nth(index).click();
    }
}