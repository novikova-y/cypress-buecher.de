# Cypress Testing for Buecher.de

![Cypress Tests](https://github.com/novikova-y/cypress-buecher.de/actions/workflows/cypress.yml/badge.svg)

This project is focused on **automated testing** of the **Buecher.de** website using **Cypress**. The goal is to verify core functionality, ensure the page loads correctly, and check that essential elements are present on the site.

## Technologies Used
- **Cypress**: A framework for end-to-end testing in JavaScript.
- **Page Object Model (POM)**: Used to structure tests, making them more maintainable and scalable.
- **GitHub Actions**: Integrated CI to automatically run tests on every push or pull request.

## Why This Project?
This project is part of my personal challenge to improve **web automation testing** skills by applying them to a real e-commerce website.

### Website Redesign Case Study
In late June 2025, the website underwent a major redesign that affected its UI and structure. As a result, several existing Cypress tests began to fail due to outdated selectors and DOM changes.

I audited the affected tests, updated relevant selectors and assertions, and restored full test coverage. This process helped me deepen my understanding of test resilience and sharpened my debugging skills when dealing with dynamic interfaces.

---

⚠️ **Important Notice**

These tests were originally written and executed against a live production website.  
This practice is **not recommended**, as running automated tests on production may cause unintended side effects, such as data pollution or account creation spam.

**Please do NOT run these tests against the production site.**  

This project is kept here only for educational purposes and reference.

---

### What I learned from this project

- How to write end-to-end Cypress tests with API interception (`cy.intercept`)
- Structuring tests with positive and negative scenarios
- Using Page Object Model for better maintainability
- Generating test data dynamically
- The importance of ethical testing practices and avoiding direct testing on production systems

Feel free to explore the code for learning and inspiration.
