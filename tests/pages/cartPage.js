class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('text=Checkout');
        this.cartTotal = page.locator('.cart-total');
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async getCartTotal() {
        return await this.cartTotal.textContent();
    }
}
