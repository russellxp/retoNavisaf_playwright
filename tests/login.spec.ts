import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import Utils from '../commons/utils';


let loginpage: LoginPage;
let inventorypage: InventoryPage;
let utils: Utils;

test.beforeEach(async ({ page }) => {
  loginpage = new LoginPage(page);
  inventorypage = new InventoryPage(page);
  utils = new Utils(page);
  await loginpage.visit();
  await expect(loginpage.titleLoginPage).toBeVisible();
});


test('Login Correcto', async ({ page }) => {
  
  await loginpage.login("standard_user", "secret_sauce");
  await expect(inventorypage.titleIventoryPage).toBeVisible;

});


test('Login No valido', async ({ page }) => {
  await loginpage.visit();
  
  await loginpage.login("standard_user", "secret_sauce111");
  await utils.errorMessage("Epic sadface: Username and password do not match any user in this service")

});

