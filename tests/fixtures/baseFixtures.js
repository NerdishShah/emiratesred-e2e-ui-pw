import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { SearchResultsPage } from '../pages/searchResultsPage';

export const test = base.extend({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },

});

export { expect } from '@playwright/test';