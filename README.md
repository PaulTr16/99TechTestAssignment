<h1 align="center" style="font-weight: bold;"> 99Tech Home Assignment - Automation Test 📱</h1>

<p align="center">
<a href="#tech">Technologies</a> |
<a href="#started">Getting Started</a> |
<a href="#structure">Structure</a>
</p>

<h2>💻 Technologies</h2>

- Playwright
- Typscript

<h2>🚀 Getting started</h2>

Setting up Automation Test Repo for Orangehr webpage

<h3>Prerequisites</h3>

All prerequisites necessary for running project.

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Node >= v20](https://nodejs.org/en)
- [Playwright](https://playwright.dev/docs/intro)

<h2>Cloning and Starting</h2>

```bash
git clone https://github.com/PaulTr16/99TechTestAssignment.git
```

```bash
#Install npm
npm install
```

```bash
#Run all test cases
npm run test
```

```bash
#Run chrome test cases
npm run test-chrome
```

```bash
#Run firefox test cases
npm run test-firefox
```

```bash
# Open report
npm run open-report
```

> NOTE: Make sure the Prerequisites section is followed and installed successfully

<h2>Structure of the automation folder</h2>

- **Test Directory** (`/tests`) : This directory contains all the test scripts organized by test type
- **Pages Directory** (`/src/pages`): This directory follows the Page Object Model (POM) design pattern, which helps keep test logic separate from browser interaction code. It contains reusable page object files that can be shared across different test cases.
- **Fixtures** (`/src/fixture`): Fixtures help manage and initialize shared test states
- **Test Configuration** (`/playwright.config.ts`): This file defines the Playwright configuration, allowing customization of settings like browser types, timeout durations, retry behavior, and test projects.
- **GitHub Actions Workflow** (`/.github/workflows/`): This directory holds YAML files that define the CI/CD workflows using GitHub Actions. These workflows run automated tests on events like pull request updates or at scheduled intervals.

<h2>Structure of the automation folder</h2>

- This project uses GitHub Actions to automatically run tests on every push or pull request targeting the `main` branches.

<h3> Workflow Overview</h3>

- **Trigger on Pull Request**
  The workflow is triggered whenever a pull request is created or updated against the main branch.

- **Install Dependencies**
  The workflow installs project dependencies using `npm ci`, followed by installing Playwright and its required browsers using
  
```bash
#bash
npx playwright install --with-deps
```

- **Run Tests**

```bash
#bash
npx  npx playwright test tests/
```

- **Generate and Upload Playwright Report**

<h2> Viewing Reports</h2>
 To view the test report

- Navigate to the Actions tab of your GitHub repository.
- Select the relevant workflow run (triggered by a pull request job)
- Review the test logs and download the report from the uploaded artifacts section.
