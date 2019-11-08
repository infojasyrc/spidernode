'use strict';

const test = require('firebase-functions-test')({
  projectId: 'spider-node-app',
  databaseURL: 'https://spidernode-app.firebaseio.com',
  storageBucket: 'spider-node-app.appspot.com',
}, '../server/services-config/app.prod.json');