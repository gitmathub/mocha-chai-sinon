# Testing with Mocha, Chai and Sinon

- [Testing with Mocha, Chai and Sinon](#testing-with-mocha-chai-and-sinon)
- [Testing Types](#testing-types)
  - [Function Testing](#function-testing)
  - [Testing with a stub](#testing-with-a-stub)
  - [Testing with a spy](#testing-with-a-spy)
  - [Testing wiht mock](#testing-wiht-mock)
- [About the Libraries](#about-the-libraries)
- [Installation](#installation)
- [Mocha - Test Runner](#mocha---test-runner)
- [Chai - Assertion](#chai---assertion)
- [Sinon - Stub, Spy, Mock](#sinon---stub-spy-mock)
- [Testing an API - Service - Repository Stack](#testing-an-api---service---repository-stack)
- [Learning Resources](#learning-resources)


This is a learning resource for learning about the JavaScript test libraries: **Mocha**, **Chai** and **Sinon**. It's going to be quite basic and starting from scratch. 

# Testing Types

## Function Testing

Units tests are usualy testing the input and output of functions/ methods.

## Testing with a stub

When testing a function is not wanted or possible because it uses a not available database or internet connection or external service, then you can **stub** the function. The function is *"somehow overridden"* by a custom function that mimics the function by returning the expected result.
  
## Testing with a spy

Testing with a spy is quite similar to stub testing: the function in question is wrapped/ overridden. But the focus is different. It's not about testing the return value but the behavior and side effects of the function. For example: Does the function call another function, and if so, how often. This information might be important to deduct if the function works correctly.

## Testing wiht mock

It's like combining stub with spy.

Example: a function fetches some data from online
- stub: prevent going online, return expected data when the function is called
- spy: report if the fetch has been called with which parameters
- mock: stub + spy

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

For running a test by name, you can use the `grep` option. For example if the description of the test contains the String "MOCK", then the command looks like this:

```bash
npm run test -- -g MOCK
```


# Chai - Assertion

- https://www.chaijs.com/guide/resources/

Example:
```js
expect(foo).to.be.a('string');
```

# Sinon - Stub, Spy, Mock

see the *.test.js files for the example implementations.

# Testing an API - Service - Repository Stack

Considerations about testing a stack like this:

`-> router -> service -> repository -> database`

- router
  - request sent -> expected result
  - why? asure the api contract is met

- service
  - service method call -> response
  - why? specified busines logic is met
  - assumes busines logic rules
  - parameter validations?

- repository
  - repository method call -> data result
  - why?
    - assure the query correctly implemented
    - assure the pagination works (batch query)
    - check the required parameters
    - assure result is in the expected format
  - assumes real database in order to get errors on a wrong query
  - assumes real database to test parameter
  - assumes real database to check the result comes in expected format

- does it make sense to mock the database?
  - at build time we don't want a connection to the database


- resources
  - API testing: https://www.sisense.com/blog/rest-api-testing-strategy-what-exactly-should-you-test/

# Learning Resources

- [Stubs with Sinon.js](https://stackabuse.com/using-stubs-for-testing-in-javascript-with-sinon-js/)
- [Spy with Sinon.js](https://stackabuse.com/using-spies-for-testing-in-javascript-with-sinon/)
- [Mock with Sinon.js](https://stackabuse.com/using-mocks-for-testing-in-javascript-with-sinon-js/)