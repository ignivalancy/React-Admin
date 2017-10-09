/*
 * @file: configureStore.js
 * @description: configure redux store as environment
 * */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}



