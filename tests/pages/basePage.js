import { expect } from '@playwright/test';
export class BasePage {
    constructor(page) {
        this.page = page;
    }
    checkTitle = async (title) => await expect(this.page).toHaveTitle(title);
    checkUrl = async (url) => await expect(this.page).toHaveURL(url);
}