export class SearchResultsPage {
    constructor(page) {
        this.page = page;
        this.resultsTitle = page.locator('h1');
        this.products = page.locator('img.product-image-photo');
        this.noResult = page.locator('div.no-result')
    }

    async getResultsTitle() {
        return await this.resultsTitle.textContent();
    }

    async getProducts() {
        await this.resultsTitle.waitFor();
        return await this.products;
    }

    async getNoResult() {
        await this.noResult.waitFor();
        return await this.noResult;
    }

}