#!/usr/bin/env node
'use strict';
var app = require(__dirname + '/../lib/index.js');
var arg = process.argv[2];
var fs = require('fs');
var data = fs.readFileSync(arg, 'utf8');
console.log(app.createItems(data));
