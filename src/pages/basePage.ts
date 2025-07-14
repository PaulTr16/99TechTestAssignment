import { expect, type Locator, type Page } from '@playwright/test';


export class BasePage {
    readonly header: Locator;
    readonly mainSidebar: (option: string) => Locator;
    readonly url:string
    constructor(public page: Page) {
        this.header = page.locator('h6').first();
        this.mainSidebar = (option: string) => page.getByRole('link', { name: option });
        this.url = process.env.BASE_URL!;
    }
}