import { Page, Locator } from "@playwright/test"

export default class InventoryPage {

    readonly page: Page;
    readonly titleIventoryPage: Locator;
    readonly shoppingCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleIventoryPage = page.locator('[data-test="title"]');
        this.shoppingCartButton = page.locator('[data-test="shopping-cart-link"]')

    }

    async clickShoppingCartButton() {
        await this.shoppingCartButton.click();
    }

}