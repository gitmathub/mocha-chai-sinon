const { map } = require('./map-operations')
const sinon = require('sinon')
const expect = require('chai').expect

describe('Map operation is tested', () => {

  const namesAndRoles = [{ name: 'foo', role: 'author' }, { name: 'bar', role: 'owner' }]

  describe('by simply calling it', () => {

    it('returns the right result', () => {
      const operation = item => item.name
      const expected = ['foo', 'bar']
      const result = map(namesAndRoles, operation)
      expect(result).to.deep.equal(expected)
    })

  })

  describe('by using a spy', () => {

    it('calles the operation', () => {
      const operation = sinon.spy()
      map([{ name: 'foo', role: 'author' }, { name: 'bar', role: 'owner' }], operation)
      expect(operation.called)
    })

  })

})