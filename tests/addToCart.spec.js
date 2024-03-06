// @ts-check
import { test, expect } from './fixtures/baseFixtures';

test.describe('Product search tests', () => {
  test('Should update card on product add', async ({ homePage }) => {
    await homePage.goto();
    await homePage.addFirstProductToCart();
    expect (await homePage.getCartCount()).toBe('1')
  });
});