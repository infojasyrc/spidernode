'use strict';

const test = require('ava');

const serviceContainer = require('./../../database/service.container');

test.beforeEach(() => {});


test.serial('Check events service', t => {
  const eventService = serviceContainer('events');

  t.true(eventService.hasOwnProperty('create'), 'Expected create property');
});

test.serial('Check users service', t => {
  const userService = serviceContainer('users');

  t.true(userService.hasOwnProperty('create'), 'Expected create property');
});

test.serial('Not service found', t => {
  const error = t.throws(() => { serviceContainer('event'); }, Error);
  t.is(error.message, 'Invalid Service');
});

test.serial('Check transactions service', t => {
  const transactionsService = serviceContainer('transactions');

  t.true(transactionsService.hasOwnProperty('makeTransaction'), 'Expected makeTransaction property');
});

test.serial('Check auth code service', t => {
  const service = serviceContainer('authCode');

  t.true(service.hasOwnProperty('getAccessTokenByAuthCode'), 'Expected getAccessTokenByAuthCode property');
  t.true(service.hasOwnProperty('getAccessTokenByRefreshToken'), 'Expected getAccessTokenByRefreshToken property');
});
