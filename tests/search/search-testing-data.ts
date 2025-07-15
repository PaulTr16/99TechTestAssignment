import { searchMessages } from "../../src/utils/textMessages";

interface SearchTestData {
    testName: string;
    username?: string; // Optional, used for search by username
    employeeName?: string; // Optional, used for search by employee name
    role?: string; // Optional, used for search by role
    status?: string; // Optional, used for search by status
    expected?: string; // Expected username for validation
}

export const validSearchData: SearchTestData[] = [
    {
        testName: "Valid - Search by username",
        username: "admin",
        expected: "admin",

    },
    {
        testName: "Valid - Search by userName and  Status",
        username: "admin",
        status: "Enabled",
        expected:"admin"
 
    },
    {
        testName: "Valid - Search by all fields",
        username: "admin",
        role: "admin",
        status: "Enabled",
        expected: "admin"

    },
];

export const invalidSearchData: SearchTestData[] = [
    {
        testName: "Invalid - Search by username",
        username: "invalidxx",
        expected: ""

    },
    {
        testName: "Invalid - Search by special characters",
        username: "@admin",
        expected: ""
    },
    {
        testName: "Invalid - Search by invalid Employee Name",
        employeeName: "Invalidxx",
        expected: ""
    }
]
