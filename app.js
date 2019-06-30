var simple = require('simple');
require('dotenv').config();

var token = process.env.TOKEN;

simple.login(token);

simple.set('promptChar', '');

simple.echo('hi', 'Welcome to my server!');
