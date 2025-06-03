import { Page, Locator, expect } from "@playwright/test"

export default class CheckoutStepComplete {

    readonly page: Page;

    readonly finishTitle: Locator;


    constructor(page: Page) {
        this.page = page;

        this.finishTitle = page.locator('[data-test="complete-header"]');
    }

    async checkTextVisible(text: string) {
        await expect(this.page.getByText(text)).toBeVisible;

    }

       async finalTextVisible() {
        await expect(this.finishTitle).toBeVisible;

    }



}