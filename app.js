var simple = require('simple');

var { token } = require('./ignore/token.js');

simple.login(token);

simple.set('promptChar', '');

simple.echo('hi', 'Welcome to my server!');
