Introduction
===

Application for recording information for events and participants.
It is based on NodeJs and Express, using Firebase Functions.

This is application is meant to be hosted on Firebase, using the following services:

* Authentication
* Cloud Firestore database
* Functions

Folder structure
===

This project is built considering two main folders:
functions: this folder handles a firebase functions as backend and use nodejs 8 for the implementation.

For Development
===

Create a project in firebase and generate a private key.
This file sould be moved inside functions/server/services-config/ and name it as app.prod.json
