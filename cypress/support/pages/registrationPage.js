export class RegistrationPage {
  visit() {
    cy.visit('/go/my_my/my_new_billing/');
  }

  get titleInput() {
    return cy.get('input[name="form[title]"]');
  }

  get firstNameInput() {
    return cy.get('input[name="form[first_name]"]');
  }

  get lastNameInput() {
    return cy.get('input[name="form[last_name]"]');
  }

  get streetInput() {
    return cy.get('input[name="form[street]"]');
  }

  get streetNumberInput() {
    return cy.get('input[name="form[street_number]"]');
  }

  get zipInput() {
    return cy.get('input[name="form[zip]"]');
  }

  get cityInput() {
    return cy.get('input[name="form[city]"]');
  }

  get birthdateInput() {
    return cy.get('input[name="form[birthdate]"]');
  }

  get emailInput() {
    return cy.get('input[name="form[email]"]');
  }

  get passwordInput() {
    return cy.get('input[name="form[password]"]');
  }

  get submitButton() {
    return cy.get('input[type="submit"][value="Weiter"]');
  }

  fillForm(user) {
    this.titleInput.type(user.title);
    this.firstNameInput.type(user.firstName);
    this.lastNameInput.type(user.lastName);
    this.streetInput.type(user.street);
    this.streetNumberInput.type(user.streetNumber);
    this.zipInput.type(user.zip);
    this.cityInput.invoke('val', user.city).trigger('input');
    this.birthdateInput.type(user.birthdate);
    this.emailInput.type(user.email);
    this.passwordInput.type(user.password);
  }

  submit() {
    this.submitButton.click();
  }
}

export const registrationPage = new RegistrationPage();