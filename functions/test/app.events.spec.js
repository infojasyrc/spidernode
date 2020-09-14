'use strict'

const request = require('supertest')
const assert = require('chai').assert

const test = require('firebase-functions-test')({}, '../app/services-config/app.prod.json')

let allFunctions

describe('Events', () => {
  before(() => {
    allFunctions = require('../index')
  })

  after(() => {
    test.cleanup()
  })

  describe('Do List events', () => {
    it('should get all events', done => {
      request(allFunctions.app)
        .get('/v1/events')
        .expect(200)
        .end((error, res) => {
          assert.equal(res.body.status, 'OK', 'Expected OK as status')
          assert.equal(
            res.body.message,
            'Getting all events successfully',
            'Expected message to be the same'
          )
          assert.isAbove(res.body.data.length, 0, 'Expected a number of events')
          if (error) throw error
          done()
        })
    })
  })

  describe('Get event information', () => {
    it('get an error message for non existing event', done => {
      const eventId = '123456'
      request(allFunctions.app)
        .get(`/v1/events/${eventId}`)
        .expect(500)
        .end((error, res) => {
          assert.equal(res.body.status, 'OK', 'Expected OK as status')
          assert.equal(
            res.body.message,
            `Error getting event ${eventId} information`,
            'Expected message to be the same'
          )
          if (error) throw error
          done()
        })
    })
  })
})
