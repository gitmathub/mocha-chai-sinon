# Testing with Mocha, Chai and Sinon

- [Testing with Mocha, Chai and Sinon](#testing-with-mocha-chai-and-sinon)
- [About the Libraries](#about-the-libraries)
- [Installation](#installation)
- [Mocha - Test Runner](#mocha---test-runner)
- [Chai - Assertion](#chai---assertion)
- [Sinon](#sinon)
- [Learning Resources](#learning-resources)


This is a learning resource for learning about the JavaScript test libraries: **Mocha**, **Chai** and **Sinon**. It's going to be quite basic and starting from scratch. 

# About the Libraries

**Mocha** and **Chai** are used together. Mocha as test runner and chai for assertion. While with **Jest** you get both functionalities alltogether, you have to install and study mocha and chai seperatly.

And if you want to test with stub, spy and mock, you'll need **Sinon**.

# Installation

```bash
npm i mocha chai
npm i sinon
```


# Mocha - Test Runner

- https://mochajs.org

Example:
```js
describe('Result', () => {
  it('should not be an array', () => {
    const result = [] // result of some method
    expect(result).to.be.an('array'); // chai assertion
  })
})

```


# Chai - Assertion

- https://www.chaijs.com/guide/resources/

Example:
```js
expect(foo).to.be.a('string');
```

# Sinon

# Learning Resources
- [Using Stubs for Testing in JavaScript with Sinon.js](https://stackabuse.com/using-stubs-for-testing-in-javascript-with-sinon-js/)