const supertest = require('supertest')

const db = require('../data/dbConfig.js')
const { insert } = require('./hobbitsModel.js')

describe('hobbits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate()
  })

    it('is process.env.DB_ENV is pointing to testing', () => {
      expect(process.env.DB_ENV).toBe('testing')
    })

    describe('insert()', () => {
        it('insert hobbits', async () => {
          await insert({ name: 'Zach' })
          await insert({ name: 'Jay' })
          await insert({ name: 'Triston' })

          const hobbits = await db('hobbits')

          expect(hobbits).toHaveLength(3)
        })

        it('insert provided hobbit', async () => {
          let hobbit = { name: 'Zach' }
          let inserted = await insert(hobbit)
          expect(inserted.name).toBe(hobbit.name)

          hobbit = { name: 'Jay' }
          inserted = await insert(hobbit)
          expect(inserted.name).toBe(hobbit.name)
        })
    })
})
