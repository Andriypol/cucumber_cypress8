/// <reference types= 'cypress'/>
import navLinks from '../../fixtures/menu_links.json';
import NavigationPage from '../../e2e/pages/navigationMenu.js';
import HomePage from '../../e2e/pages/homePage.js';
import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';


  const navigationPage = new NavigationPage();
  const homePage = new HomePage();


  Given('Visit the Menu homepage', () => {
    homePage.visit();
  });
  
  // Verify that the home page loads successfully
  Then('I should check the menus are visible and have links with not empty href', () => {
    navigationPage.verifyNavigationMenuVisibility();
    navigationPage.verifyNavLinks();

    navigationPage.toggleExpandedMenu();
    navigationPage.verifyExpandedNavLinks();
  });
  
  Then('I should navigate to the correct pages when link is clicked', () => {
    navLinks.forEach((link) => {
      navigationPage.toggleExpandedMenu();
      navigationPage.navigateToPage(link.partialUrl);
      cy.url().should('include', link.partialUrl);
      homePage.visit(); // Return to the homepage
    });
  });