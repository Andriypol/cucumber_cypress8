const { faker } = require('@faker-js/faker');

const generateLoginData = () => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12, memorable: false, pattern: /[A-Z]/ }) + '!'
  };
};

module.exports = { generateLoginData };