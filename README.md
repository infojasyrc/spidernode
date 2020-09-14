Introduction
===

Application for recording information for events, participants, roles, and simulate a PoC for bank information.
It is based on NodeJS and Express. Firebase Functions are used to hosted this implementation.

This is application use Firebase, with the following services:

* Authentication
* Cloud Firestore database
* Functions

Folder structure
===

Two main folders:
* functions: this folder handles a firebase functions as a expected folder structure for deployment.
* server: this folder is the core of the application with controllers and services.

For Development
===

Create a project in firebase and generate a private key.
This file should be moved inside functions/app/services-config/ and save it as app.prod.json

Syncing with Submodule
===

```
git submodule update --remote
```
