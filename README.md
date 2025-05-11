# Web UI Automation Framework 

This framework is for Demo purposes

Web Framework is cross-platform test automation tool for different web apps. Framework supports Chrome, Firefox, Edge browsers.

TypeScript will be used to develop test cases. Node.js and npm will be used to maintain framework. Cypress has built-in mocha so we will use mocha syntax for the tests. 
XPath and CCSPath will be used to locate web elements.


## Contents

* [Project Structure](#project-structure)
* [Environment Setup](#environment-setup)
* [First-Time Setup](#first-time-setup)
* [Local Development Quick Start](#local-development-quick-start)
* [Open Cypress](#open-cypress)
* [Tests Coniguration](#tests-configuration)
* [Run tests from the command line](#run-tests-from-the-command-line)
* [Screenshots and Videos](#screenshots-and-videos)
* [Parallelization](#parallelization)
* [CI/CD integration](#cicd-integration)

# Project Structure

This is a Page Object Model which solves automation needs with single codebase.

```
.
├── e2e                                 # Folder contains e2e tests for the UI
├── tests                               # Folder contains test samples for the UI and API and Accessebility
├── helpers                             # Folder contains additional classes for the automation
├── pages                               # Folder contains Page objects
├── .env                                # Contains all environment variables
├── .env.dev                            # Contains all environment variables for dev
├── .env.test                           # Contains all environment variables for test
├── .env.sample                         # Sample file with environment variables
├── package.json                        # Main project file with app dependencies and scripts
├── azure-pipelines.yml                 # CI/CD pipeline configuration file       
├── config.ts                           # Configuration file which determines correct localization file
└── playwright.config.ts                # Playwright configuration file

```

## Environment Setup


## First-Time Setup

### Software requirements

Node.js 22 or above is recommended

### How to Install Playwright

https://playwright.dev/docs/intro#installing-playwright

### Install Playwright extention for the VS


### Open Command Pallete and install Playwright


### Before installation preparation

First of all it is required to pull project from the repository and set correct environmnet variables into .env file. Sample of this file can be find in the .env.sample

```bash

# Clone the project locally
git clone 

# Clone .env file in the Phase03 directory from sample
cp .env.sample .env
```

Make sure to input correct values into .env 

## Local Development Quick Start

To install all required dependencies including Cypress it is required to run the following command:

```bash
# Install dependencies.
npm install
```

## Tests Coniguration

Test configuration is performed using environment variables. The following variables are used:
### General configuration
NODE_ENV="dev" - sets environment we are going to test on (values: "dev", "test")


### Environment variables
BASE_URL="https://practicetestautomation.com"
USER_NAME="student2"
PASSWORD="Password1232"


## Run tests from the command line

How to run tests:

```bash
# Set environment variable from the VS Code terminal
$env:NODE_ENV="dev"

# Run all tests 
npx playwright test

# Run only tests for the login screen in the headed mode
npx playwright test .\login.spec.ts --headed

# Run only tests with tag '@smoke'
npx playwright test --grep "@smoke"

# Run last failed tests
npx playwright test --last-failed

# Repeat tests 10 times each to test the flakiness
npx playwright test --only-changed=develop --repeat-each=10

# Run tests on the required browsers
npx playwright test --project=chromium --headed

# Run tests in parallel with number of workers 5
npx playwright test --project=chromium --headed --workers 5

```

Generate Reports

```bash
# Open Playwright report
npx playwright show-report        

# Run test login test cases and generate test report data using allure-reporter
npx playwright test --reporter=allure-playwright .\login.spec.ts --headed

# Generate allure report
.\node_modules\allure-commandline\dist\bin\allure generate ./allure-results -o ./allure-report

# Open allure report on the localhost server
.\node_modules\allure-commandline\dist\bin\allure open ./allure-report

```

Generate Code

```bash
# Auto generate tests with Codegen.
npx playwright codegen      

```

Debugging tests

```bash
# Open tests in the UI mode
npx playwright test --ui    

# Debug tests with the Playwright Inspector
npx playwright test --debug   

```