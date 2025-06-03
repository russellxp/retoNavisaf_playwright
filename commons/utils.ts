import { Page, Locator, expect } from "@playwright/test"

export default class Utils {

    readonly page: Page;
    readonly loginErrorLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginErrorLabel = page.locator('[data-test="error"]');
    }

    async checkTextVisible(text: string) {
        await expect(this.page.getByText(text)).toBeVisible;

    }

    async errorMessage(message: string) {
        await expect(this.loginErrorLabel).toBeVisible();
        await expect(this.loginErrorLabel).toContainText(message);
    }

}