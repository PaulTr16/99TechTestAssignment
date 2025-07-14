import { test } from '../../src/fixture/fixture';
import { validSearchData,invalidSearchData } from './search-testing-data';





test.describe('Search Tests Suite', () => {
    for (const data of validSearchData) {
        test(`${data.testName}`, async ({ adminPage }) => {
            // Navigate to the admin page
            await adminPage.gotoAdminPage();
            // Perform the search action with the provided data
            await adminPage.searchAction(data.username, data.employeeName, data.role, data.status);
            // Add assertions to verify the search results
            await adminPage.expectFoundSearchResults(data.expected!);
        });
    }
});


test.describe('Invalid Search Tests Suite', () => {
    // Add tests for invalid search scenarios if needed
  for (const data of invalidSearchData) {
        test(`${data.testName}`, async ({ adminPage }) => {
            // Navigate to the admin page
            await adminPage.gotoAdminPage();
            // Perform the search action with the provided data
            await adminPage.searchAction(data.username, data.employeeName, data.role, data.status);
            // Verify invalid employee name error message
            if(data.employeeName) {
                await adminPage.expectInvalidEmployeeName()
            } else {
            // Verify no result found
            await adminPage.expectNoResultsFound();
            }
        });
    }
});