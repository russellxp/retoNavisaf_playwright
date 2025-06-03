import { Page, Locator } from "@playwright/test"

export default class CheckoutStepOne {

    readonly page: Page;
    readonly checkFirstNameInput: Locator;
    readonly checkLastNameInput: Locator;
    readonly checkPostalCodeInput: Locator;
    readonly checkContinueButton : Locator;


    constructor(page: Page) {
        this.page = page;
        this.checkFirstNameInput = page.locator('[data-test="firstName"]');
        this.checkLastNameInput = page.locator('[data-test="lastName"]');
        this.checkPostalCodeInput = page.locator('[data-test="postalCode"]');
        this.checkContinueButton = page.locator('[data-test="continue"]');
    }

    async clickcheckContinueButton() {
        await this.checkContinueButton.click();
    }

    async clientInformationInput(firstName: string, lastName: string,postalCode : string) {
         await this.page.waitForLoadState();
       
        await this.checkFirstNameInput.fill(firstName);
        await this.checkLastNameInput.fill(lastName);
        await this.checkPostalCodeInput.fill(postalCode);
        await this.checkContinueButton.click();
    }

}