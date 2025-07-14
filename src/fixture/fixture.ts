import { test as base, expect, request } from "@playwright/test";
import { BasePage } from "../pages/basePage";
import { LoginPage } from "../pages/loginPage";
import { AdminPage } from "../pages/adminPage";


type pages = {
    loginPage: LoginPage;
    adminPage: AdminPage;
    basePage: BasePage;
}


const testPages = base.extend<pages>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },
  
});


export const test = testPages;
export { expect } from "@playwright/test";