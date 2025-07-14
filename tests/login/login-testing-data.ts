import { loginErrorMessages } from "../../src/utils/textMessages";

interface TestData {
    testName: string;
    username: string;
    password: string;
    expectedMessage: string; // Optional, used for invalid login tests
}

export const validLoginData: TestData = {
    testName: "Valid Login",
    username: process.env.USER_NAME!,
    password: process.env.USER_PASSWORD!,
    expectedMessage: ""
};
export const invalidLoginData: TestData[] = [
    {
    testName: "Login with invalid password",
    username: process.env.USER_NAME!,
    password: "inValidePassword",
    expectedMessage: loginErrorMessages.invalidCredentials
    },

    {
    testName: "Login with invalid username",
    username: "nonExistingUser",
    password: process.env.USER_PASSWORD!,
    expectedMessage: loginErrorMessages.invalidCredentials
    },

    {
    testName: "Login with empty username and valid password",
    username: "",
    password: "",
    expectedMessage: loginErrorMessages.missingRequiredFields
    },

    {   
    testName: "Login with empty password",
    username: "admin",
    password: "",
    expectedMessage: loginErrorMessages.missingRequiredFields
    },

    {   
    testName: "Login with empty username",
    username: "",
    password: "password",
    expectedMessage: loginErrorMessages.missingRequiredFields
    },
];

