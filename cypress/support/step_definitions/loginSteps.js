/// <reference types= 'cypress'/>
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const { generateLoginData } = require('../utils/loginDataGenerator.js');
import HomePage from '../../e2e/pages/homePage.js';
import LoginPage from '../../e2e/pages/loginPage.js';

    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const email = Cypress.env('VALID_EMAIL');
    const password = Cypress.env('VALID_PASSWORD');
    
Given('the user is on the home page', () => {
    homePage.visit();
});

When('the user navigates to the login page', () => {
    homePage.clickOnLogin();
});

Then('the login form should be visible', () => {
    loginPage.verifyFormVisible();
});

Given('the user is on the login page', () => {
    loginPage.visitLoginPage();
});

When('the user logs in with valid credentials', () => {
    loginPage.login(email, password);
});

Then('the user should be logged in successfully', () => {
    loginPage.verifySuccessfulLogin();
});

Given('the user has invalid login data', () => {
    const testData = generateLoginData();
    cy.wrap(testData).as('invalidLoginData');
});

When('the user logs in with invalid credentials', function() {
    const { email, password } = this.invalidLoginData;
    loginPage.login(email, password);
});

Then('an error message for invalid credentials should be displayed', () => {
    loginPage.verifyInvalidCredentialsError();
});

When('the user submits the login form without entering any data', () => {
    cy.get(loginPage.elements.emailInput).click();
    cy.get(loginPage.elements.passwordInput).click();
    loginPage.clickSubmit();
});

Then('error messages for blank form fields should be displayed', () => {
    loginPage.verifyBlankFormErrors();
});