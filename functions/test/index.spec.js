'use strict';

const test = require('ava');
const request = require('supertest');

//const testFireFunctions = require('firebase-functions-test')({}, '../server/services-config/app.prod.json');

let myFunctions;

test.beforeEach(() => {});

test.afterEach(() => {
  // Do cleanup tasks
  //testFireFunctions.cleanup();
});

test.skip('Check events endpoint', t => {
  request(myFunctions.app)
    .get('/api/events')
    .expect(200)
    .end((error, res) => {
      if (error) {
        throw error;
      }
    });
});

test.skip('Check access-token endpoint', t => {
  request(myFunctions.app)
    .get('/api/token/access-token')
    .expect(200)
    .end((error, res) => {
      if (error) {
        throw error;
      }
    });
});
