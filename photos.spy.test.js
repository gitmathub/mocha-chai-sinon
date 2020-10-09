const expect = require('chai').expect
const request = require('request')
const sinon = require('sinon')
const getAlbumById = require('./photos')

describe('getPhotosByAlbumId', () => {
  let requestSpy
  before(() => {
    requestSpy = sinon.spy(request, 'get')
  })

  after(() => {
    request.get.restore()
  })

  it('is called once', (done) => {
    getAlbumById(2).then(() => {
      expect(requestSpy.calledOnce)
      done()
    })
  })

  it('is called with the right parameters', (done) => {
    getAlbumById(2).then(() => {
      expect(requestSpy.args[0][0]).to.equal("https://jsonplaceholder.typicode.com/albums/2/photos?_limit=3")
      done()
    })
  })

  it('retrieves the right properties', (done) => {
    getAlbumById(2).then((photos) => {
      photos.forEach(photo => {
        expect(photo).to.have.property('id')
        expect(photo).to.have.property('title')
        expect(photo).to.have.property('url')
      })
      done()
    })
  })
})