const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import ShopPage from '../../e2e/pages/shopPage';

const shopPage = new ShopPage();

Given('I open the shop for search', () => {
   shopPage.openShop();
});

Then('I click on search', () => {
    shopPage.clickOnSearch();
});

When('I search for {string}', (query) => {
    shopPage.searchProduct(query);
});

Then('the search results should be visible', () => {
    cy.get(shopPage.elements.searchResults).should('be.visible');
});

Then('the product should be in the results for {string}', (query) => {
    shopPage.isProductInResults(query).then(isRelevant => {
      expect(isRelevant).to.be.true;
    });
});

Then('the search results should not be visible', () => {
  cy.get(shopPage.elements.searchResults).should('not.be.visible');
});
