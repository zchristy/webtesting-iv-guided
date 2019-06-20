const supertest = require('supertest')

const server = require('./server.js')

describe('server', () => {
  describe('GET /', () => {
    it('responds with 200 OK', () => {
      // asynchronous test need to either return the promise
      return supertest(server)
        .get('/')
        .expect(200)
    })
    // or use the async/await
    it('responds with 200 OK', async () => {
      await supertest(server)
        .get('/')
        .expect('Content-Type', /json/)
    })

    it('responds with { api: "up" }', async () => {
      await supertest(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({ api: "up" })
        })
    })
  })
})
