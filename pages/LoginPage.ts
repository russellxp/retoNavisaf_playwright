import { Page, Locator, expect } from "@playwright/test"

export default class LoginPage {

    readonly page: Page;
    readonly titleLoginPage: Locator;
    readonly loginNameInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;
    readonly loginErrorLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleLoginPage = page.getByText('Swag Labs');
        this.loginNameInput = page.locator('[data-test="username"]');
        this.loginPasswordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.loginErrorLabel = page.locator('[data-test="error"]');
    }

    async visit() {

        await this.page.goto('https://www.saucedemo.com/');
        await this.page.waitForLoadState();

    }

    async login(user: string, password: string) {
        await expect(this.titleLoginPage).toBeVisible();
        await this.loginNameInput.fill(user);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }




}