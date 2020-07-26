Firebase functions Implementation
===

This module will implement the API using express and will be hosted using Firebase functions.

Dependencies
===

For MacOS:

```
- brew install nvm
- nvm install v8.16.2
```

For Windows:

```
- choco install nvm
- nvm install v8.16.2
```

For this application, we are using Nodejs v8.16.2 (.nvmrc)

Using firebase Local Development
===

```
- npm run serve
- npm run shell
```

For testing firebase functions on shell

Example:

```
app.get('URL')
app.post('URL').form({"param1":"value1", "param2":"value2"})
```

[Firebase Link Reference](https://firebase.google.com/docs/functions/local-shell)

Using NodeJS
===

```
- node server/index.js
```
