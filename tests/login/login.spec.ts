import { test, expect } from '../../src/fixture/fixture';
import { validLoginData, invalidLoginData } from './login-testing-data';


test.beforeEach(async ({ loginPage, context }) => {
    await context.clearCookies()  // Clear cookies before each test to ensure a fresh session
    await loginPage.gotoLoginPage();
});


test.describe('Login Tests Suite', () => {
    test('Valid Login', async ({ loginPage }) => {
        await loginPage.login(validLoginData.username, validLoginData.password);
        await loginPage.expectSuccessfulLogin();
    });

    for (const data of invalidLoginData) {
        test(`${data.testName}`, async ({ loginPage }) => {
            await loginPage.login(data.username, data.password);
            await loginPage.expectErrorMessage(data.expectedMessage);
        });
    }

});
