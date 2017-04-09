const app = require('./server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('Expeadia API ', function () {
  it('Should get all hotels offers ', function (done) {
    request(app)
      .get('/api/data')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          throw new Error(err)
        }
        expect(resp.body).to.be.an('object')
        done()
      })
  })
})
