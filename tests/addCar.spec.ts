import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import Utils from '../commons/utils';
import CartPage from '../pages/cartPage';
import CheckoutStepOne from '../pages/CheckoutStepOne';
import CheckoutStepTwo from '../pages/CheckoutStepTwo';
import CheckoutStepComplete from '../pages/CheckoutComplete.ts';



let loginpage: LoginPage;
let inventorypage: InventoryPage;
let utils: Utils;
let cartPage: CartPage;
let checkoutStepOne: CheckoutStepOne;
let checkoutStepTwo: CheckoutStepTwo;
let checkoutStepComplete: CheckoutStepComplete;

test.beforeEach(async ({ page }) => {
    loginpage = new LoginPage(page);
    inventorypage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutStepOne = new CheckoutStepOne(page);
    checkoutStepTwo = new CheckoutStepTwo(page);
    checkoutStepComplete = new CheckoutStepComplete(page);
    utils = new Utils(page);
    await loginpage.visit();
    await expect(loginpage.titleLoginPage).toBeVisible();
    await utils.checkTextVisible("Swag Labs")
    await loginpage.login("standard_user", "secret_sauce");
});

test('FrontEnd Compra de un articulo', async ({ page }) => {

    await cartPage.AddProduct("Sauce Labs Backpack");
    await cartPage.AddProduct("Sauce Labs Bike Light");
    await inventorypage.clickShoppingCartButton();
    await cartPage.clickcheckOutButton();
    await checkoutStepOne.clientInformationInput("Guido", "Robles", "Lima 51");
    await checkoutStepTwo.clickFinishButton();
    await checkoutStepComplete.finalTextVisible();


});
