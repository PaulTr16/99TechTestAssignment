import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly dashboardHeader: Locator;
    
    /**
     * Initializes a new instance of the LoginPage
     * @param {Page} page - The Playwright page object.
     */
    constructor(public page: Page) {
        super(page);
        this.usernameInput = page.locator('[name=username]');
        this.passwordInput = page.locator('[name=password]');
        this.loginButton = page.locator("button[type='submit']");
    }

    async gotoLoginPage() {
        await this.page.goto(`${this.url}/auth/login`);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("load");
    }

    async expectSuccessfulLogin() {
        await expect(this.header).toHaveText('Dashboard');
    }

    async expectErrorMessage(expectedMessage: string) {
        const elements = this.page.getByText(expectedMessage);
        await expect(elements.first()).toBeVisible({ timeout: 5000 });
        const count = await elements.count();
        for (let i = 0; i < count; i++) {
            await expect(elements.nth(i)).toBeVisible();
        }
}
    
}