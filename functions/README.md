Firebase functions Implementation
===

This module will handle the communication between nodejs and firebase.

Dependencies
===

For MacOS:

```
- brew install nvm
- nvm install v8.15.0
```

For Windows:

```
- choco install nvm
- nvm install v8.15.0
```

For this application, we are using Nodejs v8.15.0. (.nvmrc)

Local Development
===

using firebase functions local emulator

```
- firebase server
```

using nodejs

```
- node server/index.js
```

Available endpoints for local development
===

using ```firebase serve```
```
- http://localhost:5001/event-manager-app/us-central1/api/healthcheck/
- http://localhost:5001/event-manager-app/us-central1/api/users/
- get http://localhost:5001/event-manager-app/us-central1/api/user/:id
- post http://localhost:5001/event-manager-app/us-central1/api/user/
- put http://localhost:5001/event-manager-app/us-central1/api/user/:id
- delete http://localhost:5001/api/event-manager-app/us-central1/user/:id
```
