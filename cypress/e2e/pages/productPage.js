class ProductPage {
    elements = {
      productTitle: 'h1',
      productPrice: '.price--large',
      productDescription: '.product__description',
      quantityInput: 'input.quantity__input',
      addToCartButton: '.product-form__submit',
      cartQuantity: '#Drawer-quantity-1',
      cartProductName: '.cart-item__name',
      cartItemCount: '[data-testid="CartCount"]',
      iconCartNumber: '.cart-count-bubble span[aria-hidden="true"]',
      closeIcon: '.drawer__close',
      checkoutBtn: '#CartDrawer-Checkout'
    };
  
    getProductTitle() {
      return cy.get(this.elements.productTitle).invoke('text');
    }
  
    getProductPrice() {
      return cy.get(this.elements.productPrice).invoke('text');
    }
  
    getProductDescription() {
      return cy.get(this.elements.productDescription).invoke('text');
    }
  
    setQuantity(quantity) {
      cy.get(this.elements.quantityInput).clear().type(quantity);
      return this;
    }
    
    setInnerQuantity(quantity) {
      cy.get(this.elements.cartQuantity).clear().type(quantity);
      return this;
    }
  
    addToCart() {
      cy.get(this.elements.addToCartButton).click();
      return this;
    }
  
    getInnerCartItemCount() {
      return cy.get(this.elements.cartQuantity).invoke('val');
    }
  
    getIconCartNumber() {
      return cy.get(this.elements.iconCartNumber).invoke('text');
    }
  
    closeCart() {
      cy.get(this.elements.closeIcon).click();
      return this;
    }
  
    getProductCartName() {
      return cy.get(this.elements.cartProductName).invoke('text');
    }
  
    goToCart() {
      cy.get(this.elements.cartIcon).click();
      return this;
    }
  
    clickCheckout() {
      cy.get(this.elements.checkoutBtn).click();
      return this;
    }
  }
  
  export default ProductPage;