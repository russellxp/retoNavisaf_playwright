import {Page, Locator} from "@playwright/test"

export default class HomePage{

    readonly page: Page;
    readonly titleHomePage : Locator;
  

    constructor(page: Page){
        this.page = page;
        this.titleHomePage = page.locator('[data-test="title"]');

    }

}