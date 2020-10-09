# Testing with Mocha, Chai and Sinon

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
