'use strict';

const test = require('ava');
const request = require('supertest');

const testFireFunctions = require('firebase-functions-test')({
  projectId: 'spider-node-app',
  databaseURL: 'https://spidernode-app.firebaseio.com',
  storageBucket: 'spider-node-app.appspot.com',
}, '../server/services-config/app.prod.json');

let myFunctions;

test.beforeEach(() => {
  myFunctions = require('./../');
});

test.afterEach(() => {
  // Do cleanup tasks
  testFireFunctions.cleanup();
});

test.serial('Check events endpoint', t => {
  request(myFunctions.app)
    .get('/api/events')
    .expect(200)
    .end((error, res) => {
      if (error) {
        throw error;
      }
    });
});

test.serial('Check access-token endpoint', t => {
  request(myFunctions.app)
    .get('/api/token/access-token')
    .expect(200)
    .end((error, res) => {
      if (error) {
        throw error;
      }
    });
});
