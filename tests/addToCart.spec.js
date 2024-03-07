// @ts-check
import { test, expect } from './fixtures/baseFixtures';

test.describe('Add to cart tests', () => {
  test('Should update card on product add from product card', async ({ homePage }) => {
    await homePage.goto();
    await homePage.addFirstProductToCart();
    expect (await homePage.getCartCount()).toBe('1')
  });
  test('Should update card on product add from details page', async ({ homePage, productDetailPage }) => {
    const productName = 'Creed Windflowers Eau de Parfum 75ml';
    await homePage.goto();
    await homePage.goToProductDetails(productName);
    await productDetailPage.checkTitle(productName)
    await productDetailPage.addProductToCart();
    await expect.soft(await productDetailPage.getSuccessMessage()).toHaveText(`You added ${productName} to your shopping cart.`);
    expect (await productDetailPage.getCartCount()).toBe('1')
  });
});