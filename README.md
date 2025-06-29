# Cypress Testing for Buecher.de

![Cypress Tests](https://github.com/novikova-y/cypress-buecher.de/actions/workflows/cypress.yml/badge.svg)

This project is focused on **automated testing** of the **Buecher.de** website using **Cypress**. The goal is to verify core functionality, ensure the page loads correctly, and check that essential elements are present on the site.

## Technologies Used
- **Cypress**: A framework for end-to-end testing in JavaScript.
- **Page Object Model (POM)**: Used to structure tests, making them more maintainable and scalable.
- **GitHub Actions**: Integrated CI to automatically run tests on every push or pull request.

## Why This Project?
This project is part of my personal challenge to improve **web automation testing** skills by applying them to a real e-commerce website.

### European Accessibility Act update Case Study

In late June 2025, a new EU Accessibility Act came into effect, causing significant changes to the website's UI and structure. This led to many of the existing Cypress tests failing.

I performed a thorough audit of the failing tests, updated selectors and assertions according to the new accessibility standards, and restored full test coverage.

This experience strengthened my debugging skills and taught me how to maintain resilient tests in a changing environment.
