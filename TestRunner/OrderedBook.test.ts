import { test } from "@playwright/test";


import LoginPage from "../Pages/login";
import loginjson from "../testdata/login.json";




/**
* This test case will be execution of login to Bookcart website
*/
test("Login to Bookcart website", async ({ page, baseURL }) => {

    const login = new LoginPage(page);

    await page.goto(`${baseURL}`)
    //  its used in constructor class page
    await login.enterUsername(loginjson.LoginDetails.username);
    await login.enterPassword(loginjson.LoginDetails.password);
    await login.loginButton();
    

})









