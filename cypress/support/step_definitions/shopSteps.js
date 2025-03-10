const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import ProductPage from '../../e2e/pages/productPage';
import ShopPage from '../../e2e/pages/shopPage';

const shopPage = new ShopPage();
const productPage = new ProductPage();

Given('I open the shop', () => {
  shopPage.openShop();
});

When('I go to the first product', () => {
  shopPage.goToFirstProduct();
});

Then('the product title should include {string}', (expectedTitle) => {
  productPage.getProductTitle().then(title => {
    expect(title).to.include(expectedTitle);
  });
});

Then('the product price should not be empty', () => {
  productPage.getProductPrice().then(price => {
    expect(price).not.to.be.empty;
  });
});

Then('the product description should not be empty', () => {
  productPage.getProductDescription().then(description => {
    expect(description).not.to.be.empty;
  });
});

When('I set the quantity to {int}', (quantity) => {
  productPage.setQuantity(quantity);
});

When('I add the product to the cart', () => {
  productPage.addToCart();
});

Then('the cart item count should be {string}', (expectedCount) => {
  productPage.getInnerCartItemCount().then(cartCount => {
    expect(cartCount).to.equal(expectedCount);
  });
});

Then('the cart item title should include {string}', (expectedTitle) => {
  productPage.getProductCartName().then(cartItemTitle => {
    expect(cartItemTitle).to.include(expectedTitle);
  });
});

Then('the cart item quantity should be {string}', (expectedQuantity) => {
  productPage.getInnerCartItemCount().then(cartItemQuantity => {
    expect(cartItemQuantity).to.equal(expectedQuantity);
  });
});

When('I set the inner quantity to {int}', (quantity) => {
  productPage.setInnerQuantity(quantity);
});

Then('the updated cart item quantity should be {string}', (expectedQuantity) => {
  productPage.getInnerCartItemCount().then(updatedQuantity => {
    expect(updatedQuantity).to.equal(expectedQuantity);
  });
});

Then('the cart item quantity should be equal to the icon cart number', () => {
  let cartItemQuantity;
  productPage.getInnerCartItemCount().then(quantity => {
    cartItemQuantity = Number(quantity);
    productPage.closeCart();
    
    productPage.getIconCartNumber().then(iconQuantity => {
      expect(cartItemQuantity).to.equal(Number(iconQuantity));
    });
  });
});
