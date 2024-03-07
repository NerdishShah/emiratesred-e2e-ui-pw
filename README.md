# End-to-End Testing for Emirates Red with Playwright and Allure Report

This project contains end-to-end tests for the `emiratesred.com` website, implemented using Playwright. It integrates the Allure Report to provide comprehensive test reports. These tests cover various functionalities of the website to ensure high-quality user experiences.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you start, ensure you have the following installed:
- Node.js (v16 or newer)
- npm (v6 or newer)

### Installing

Follow these steps to set up your development environment:

1. Clone the repository:

   ```bash
   git clone https://github.com/NerdishShah/emiratesred-e2e-ui-pw.git
   ```

2. Change into the project directory:

   ```bash
   cd emiratesred-e2e-ui-pw
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```
4. Rename sample.env to .env to set up your environment variables:
   
   ```bash
   mv sample.env .env
   ```
5. To execute Playwright tests and generate the Allure report:

   ```bash
   npm run test
   ```

   This will run your Playwright tests and produce Allure results in the `allure-results` directory.

6. To generate and view the Allure report:

   ```bash
   npm run report
   ```

   This command generates a report from the `allure-results` directory and opens it in your default web browser.

## Running the Tests

Execute the automated tests for this system as follows:

```bash
npm test
```
   This will run your Playwright tests and produce Allure results in the `allure-results` directory.

To run a specific test file, use the following command:
```bash
npx playwright test path/to/your/test/file.spec.js
```
## Project Structure
- tests/: Contains test files written in JavaScript.
- pages/: Contains JavaScript files representing page objects according to the POM.
- basePage.js: The base page class that other page objects extend from.
- node_modules/: Contains npm packages required for the project (not checked into version control).
- package.json: Defines project dependencies and scripts.
- playwright.config.js: Configuration file for Playwright settings.

## Contributing

For contributing to this project, please check [CONTRIBUTING.md](https://github.com/NerdishShah/emiratesred-e2e-tests/CONTRIBUTING.md). It includes details on our code of conduct and the process for submitting pull requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For available versions, see the [tags on this repository](https://github.com/NerdishShah/emiratesred-e2e-tests/tags).

## Authors

- **Shahul Hameed M Y** - *Initial work* - [YourProfile](https://github.com/NerdishShah)

Check out the list of [contributors](https://github.com/NerdishShah/emiratesred-e2e-tests/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
