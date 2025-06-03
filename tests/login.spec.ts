import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import Utils from '../commons/utils';


let loginpage: LoginPage;
let homepage: HomePage;
let utils: Utils;

test.beforeEach(async ({ page }) => {
  loginpage = new LoginPage(page);
  homepage = new HomePage(page);
  utils = new Utils(page);
  await loginpage.visit();
  await expect(loginpage.titleLoginPage).toBeVisible();
});

test('FrontEnd Compra de un articulo', async ({ page }) => {
  
  await utils.checkTextVisible("Swag Labs")
  await loginpage.login("standard_user", "secret_sauce");
});


test('Login Correcto', async ({ page }) => {
  
  await loginpage.login("standard_user", "secret_sauce");
  await expect(homepage.titleHomePage).toBeVisible;

});


test('Login No valido', async ({ page }) => {
  await loginpage.visit();
  
  await loginpage.login("standard_user", "secret_sauce111");
  await utils.errorMessage("Epic sadface: Username and password do not match any user in this service")

});

