class ShopPage {
    elements = {
      cartIcon: 'a[href="/cart"]',
      shopProducts: 'slider-component ul li',
      subscribeEmailInput: 'input[type="email"]',
      subscribeButton: 'button[type="submit"]',
      // search
      searchIcon: 'summary[aria-label="Search"]',
      searchInput: 'input[type="Search"]',
      searchButton: 'button[aria-label="Search"]',
      searchResults: '.product-grid',
      productTitles: 'h3.card__heading',
      // cart
      cartItems: '.cart-item',
      productName: '.cart-item-title',
      productQuantityInput: '.cart-item-quantity input',
      updateQuantityButton: '.update-cart',
      removeProductButton: '.cart-remove',
      emptyCartMessage: '.cart-empty-message',
      checkoutButton: 'a[href="/checkout"]'
    };
  
    openShop() {
      cy.visit('https://shop.telnyx.com/');
      return this;
    }
  
    clickOnSearch() {
      cy.get(this.elements.searchIcon).click();
      return this;
    }
  
    goToFirstProduct() {
      cy.get(this.elements.shopProducts).then($products => {
        if ($products.length === 0) {
          throw new Error('No products found on the page');
        }
        cy.wrap($products).first().click();
      });
      return this;
    }
  
    clickCartIcon() {
      cy.get(this.elements.cartIcon).click();
      return this;
    }
  
    subscribeToNewsletter(email) {
      cy.get(this.elements.subscribeEmailInput).type(email);
      cy.get(this.elements.subscribeButton).click();
      return this;
    }
  
    getFeaturedProducts() {
      return cy.get(this.elements.featuredProducts).then($products => {
        const products = [];
        $products.each((i, el) => {
          products.push({
            name: Cypress.$(el).text(),
            link: Cypress.$(el).attr('href')
          });
        });
        return products;
      });
    }
  
    searchProduct(productName) {
      cy.get(this.elements.searchInput).type(productName);
      cy.get(this.elements.searchButton).click();
      return this;
    }
  
    getSearchResultsText() {
      return cy.get(this.elements.searchResults).invoke('text');
    }
  
    isProductInResults(productName) {
      return cy.get(this.elements.productTitles).then($products => {
        for (let i = 0; i < $products.length; i++) {
          if (Cypress.$($products[i]).text().includes(productName)) {
            return true;
          }
        }
        return false;
      });
    }
  }
  
  export default ShopPage;