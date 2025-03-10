const { faker } = require('@faker-js/faker');

const generateSignupData = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12, memorable: true }),
  };
};

module.exports = { generateSignupData };