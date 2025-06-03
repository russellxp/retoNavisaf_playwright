import { Page, Locator } from "@playwright/test"

export default class CheckoutStepTwo {

    readonly page: Page;
    
    readonly finishButton : Locator;


    constructor(page: Page) {
        this.page = page;
       
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }

 

}