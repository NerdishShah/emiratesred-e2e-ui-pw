import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SearchResultsPage } from '../pages/searchResultsPage';
import { ProductDetailPage } from '../pages/productDetailPage';

export const test = base.extend({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },

    productDetailPage: async ({ page }, use) => {
        await use(new ProductDetailPage(page));
    },

});

export { expect } from '@playwright/test';
