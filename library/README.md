# Vue.js Library Bug Reproducer

This folder contains a simple reproducer showing problems with importing components from a Vue.js library into a Vue.js application.
Both `app` and `lib` projects use [Vue.js 3](https://v3.vuejs.org/) and are linked together with [NPM link](https://docs.npmjs.com/cli/v7/commands/npm-link).
They have been generated by [Vue.js CLI](https://cli.vuejs.org/) and almost no changes have been made to the default configuration.

## Steps To Reproduce

1. Install and build the library:

```
cd lib
npm install
npm run build
```

2. Link library and start the application:

```
cd ../app
npm link ../lib
npm run serve
```

3. Open the application running at http://localhost:8080/
4. Notice missing content and warnings in the dev console
