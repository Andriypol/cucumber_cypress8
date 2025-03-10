/// <reference types= 'cypress'/>
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { generateSignupData } = require('../utils/signupDataGenerator.js');
import SignUpPage from '../../e2e/pages/signupPage.js';
import HomePage from '../../e2e/pages/homePage.js';

const signUpPage = new SignUpPage();
const homePage = new HomePage();

Given('I am on the home page', () => {
  homePage.visit();
});

When('I navigate to the sign-up page', () => {
  homePage.navigateToSignUp();
});

Then('I should see the registration form', () => {
  signUpPage.verifyRegistrationFormVisible();
});

Given('I fill the registration form with valid data', () => {
  const testData = generateSignupData();
  cy.wrap(testData).as('validSignupData');
  
  cy.get('@validSignupData').then(({ firstName, lastName, email, password }) => {
    signUpPage.fillRegistrationForm({
      firstName,
      lastName,
      email,
      password,
      acceptTerms: true,
    });
  });
});

Then('I submit the registration form', () => {
  signUpPage.submitRegistrationForm();
});

Then('I add additional name', () => {
  cy.get('@validSignupData').then(({ lastName }) => {
    cy.get(signUpPage.elements.lastNameInput).type(lastName);
  });
  cy.wait(2000);
});

Then('I should see a successful registration message', () => {
  signUpPage.verifySuccessfulRegistration();
});

Given('I fill the registration form with invalid data', () => {
  signUpPage.fillRegistrationForm({
    firstName: 'Andrre',
    lastName: 'Ratnik',
    email: 'twotwoyahoo.com', // Invalid email format
    password: 'StrongPassword123!',
    acceptTerms: true,
  });
});

Then('I should see an error message {string}', (errorMessage) => {
  signUpPage.submitRegistrationForm();
  signUpPage.verifyErrorMessage(errorMessage);
});