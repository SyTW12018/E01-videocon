// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register');

// Import the rest of our application.
module.exports = require('../server/server.js');
