/// <reference types= 'cypress'/>
import HomePage from '../../e2e/pages/homePage.js';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


  const homePage = new HomePage();
  
  Given('Visit the Telnyx homepage', () => {
    homePage.visit();
  });
  
  // Verify that the home page loads successfully
  Then('I should see the title of the Home Page is not empty', () => {
    cy.title().should('not.be.empty');
  });
  
  Then('I should see the header is successfully loaded', () => {
    homePage.getHeader().should('be.visible');
  });
  
  Then('I should see the main content is successfully loaded', () => {
    homePage.getMainContent().should('be.visible');
  });
  
  Then('I should see the footer is successfully loaded', () => {
    homePage.getFooter().should('be.visible');
  });
  
  // Verify that the home page loads within 3 seconds
  Then('It should load within acceptable time', () => {
    homePage.measurePageLoadTime();
  });




