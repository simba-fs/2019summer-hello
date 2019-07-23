var simply = require('simply.js');
require('dotenv').config();

var token = process.env.TOKEN;

simply.login(token);

simply.set('prefix', '');

simply.echo('hi', 'Welcome to my server!');
