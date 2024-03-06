// @ts-check
import { test, expect } from './fixtures/baseFixtures';

test.describe('Product search tests', () => {
  test('Should return product results valid product', async ({ homePage }) => {
    await homePage.goto();
    await homePage.submitSearchProduct("watch");
    await homePage.checkUrl(/.*watch/)
  });
  test('Should return no result on invalid product', async ({ homePage, searchResultsPage }) => {
    await homePage.goto();
    await homePage.searchForProduct('refrigerator');
    expect(await searchResultsPage.getNoResult()).toBeVisible()
  });
  test('Should return product suggestion on valid search term', async ({ homePage }) => {
    await homePage.goto();
    await homePage.searchForProduct('watch');
    await expect(await homePage.getSuggestion()).toHaveCount(5);
  });

});