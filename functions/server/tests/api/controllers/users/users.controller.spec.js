'use strict';

const test = require('ava');
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const {
  mockRequest,
  mockResponse
} = require('mock-req-res');

const setupBaseController = require('./../../../../api/controllers/base.controller');

let sandbox = null;

let usersController;
let baseController;

test.beforeEach(() => {
  sandbox = sinon.createSandbox();

  baseController = new setupBaseController();
});

test.afterEach(() => {
  sandbox && sandbox.restore();
});

function getSetupDBService(userService) {
  const firebaseApplication = {
    auth: sinon.stub()
  };

  const firebaseAdminApplication = {
    auth: sinon.stub(),
    firestore: sinon.stub(),
    storage: () => {
      return {
        bucket: () => {}
      }
    }
  };

  return proxyquire('./../../../../database', {
    './firebase.application': () => firebaseApplication,
    './firebase-admin.application': () => firebaseAdminApplication,
    './user.service': () => userService,
    './attendees.service': () => {},
    './events.service': () => {},
    './authentication.service': () => {},
    './roles.service': () => {},
    './headquarters.service': () => {},
    './storage.service': () => {}
  });
}

function getController(allServices) {
  return proxyquire('./../../../../api/controllers/users/users.controller', {
    './../../../database': allServices
  });
}

test.serial('Get all users', async t => {
  const req = mockRequest({
    params: {}
  });
  const res = mockResponse();

  const userServiceResponse = {
    responseCode: 200,
    data: [],
    message: ''
  };

  let userService = {};
  userService.doList = sandbox.stub();
  userService
    .doList
    .returns(Promise.resolve(userServiceResponse));

  const setupDBService = getSetupDBService(userService);

  usersController = getController(setupDBService);

  await usersController.get(req, res);

  t.true(res.status.called, 'Expected response status was executed');
  t.true(
    res.status.calledWith(userServiceResponse.responseCode),
    'Expected response status with success response'
  );
  t.true(res.json.called, 'Expected response json was executed');
  t.true(
    res.json.calledWith({
      status: baseController.successStatus,
      data: userServiceResponse.data,
      message: userServiceResponse.message
    }),
    'Expected response json was executed'
  );
});
