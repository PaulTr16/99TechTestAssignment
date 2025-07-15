import { expect, type Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { searchMessages } from '../utils/textMessages';


export class AdminPage extends BasePage {
    private readonly userSearchFieldInput: (field: string) => Locator;
    private readonly searchDropdown: (field: string) => Locator;
    private readonly searchBtn: Locator;
    private readonly userMainGrid: Locator;

    constructor(public page: Page) {
        super(page);
        this.userSearchFieldInput = (field: string) => this.page.locator('label', { hasText: field })
            .locator('../../div//input');
        this.searchDropdown = (field: string) => this.page.locator('label', { hasText: field })
            .locator('../../div', { hasText: "-- Select --" });
        this.searchBtn = page.getByRole('button', { name: 'Search' })
        this.userMainGrid = page.locator('.oxd-table-card ')
    }

    async gotoAdminPage() {
        await this.page.goto(`${this.url}/`);
        await this.mainSidebar('Admin').click();
        await this.page.waitForLoadState("load");
        await expect(this.header).toHaveText('Admin');
    }

   async searchAction(username?: string, employeeName?: string, role?: string, status?: string) {
        if (username) {
            await this.fillUserNameSearchField(username);
        }
        if (employeeName) {
            await this.fillEmployeeSearchField(employeeName);
        }
        if (role) {
            await this.selectRoleDropdown(role);
        }
        if (status) {
            await this.selectStatusDropdown(status);
        }
       await this.searchBtn.click();  
    }
    
    async expectFoundSearchResults(expectedMessage: string) {
        await expect(this.page.getByText(searchMessages.recordFound)).toBeVisible();
        await expect(this.userMainGrid.getByText(expectedMessage).first()).toBeVisible();
    }

    async expectNoResultsFound() {
        await expect(this.page.locator('span').filter({ hasText: searchMessages.noRecordFound })).toBeVisible()
        await expect(this.userMainGrid).toHaveCount(0);
    }

    async expectInvalidEmployeeName() {
        await expect(this.page.getByText(searchMessages.invalidEmployeeName)).toBeVisible()
    }

    private async fillUserNameSearchField(name: string) {
        await this.userSearchFieldInput("Username").fill(name);
    }
    
    private async fillEmployeeSearchField(name: string) {
        await this.userSearchFieldInput("Employee Name").fill(name);
    

    }
    private async selectRoleDropdown(role: string) {
        await this.searchDropdown("User Role").click();
        await this.page.getByRole('option', { name: role }).click();
    }

    private async selectStatusDropdown(status: string) {
        await this.searchDropdown("Status").click();
        await this.page.getByRole('option', { name: status }).click();
    }

}
