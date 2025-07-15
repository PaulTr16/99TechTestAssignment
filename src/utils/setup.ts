import { test as setup } from '../fixture/fixture';


setup("set up for search tests", async ({ loginPage, page }) => {
    loginPage.gotoLoginPage();
    await loginPage.login(process.env.USER_NAME!, process.env.USER_PASSWORD!);
    await page.waitForLoadState("load");
    await loginPage.expectSuccessfulLogin()
    await page.context().storageState({ path: "storageState.json" });
})