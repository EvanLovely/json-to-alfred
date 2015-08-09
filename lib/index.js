'use strict';
var fs = require('fs');
var Mustache = require('Mustache');
var template = fs.readFileSync(__dirname + '/alfred.mustache', 'utf8');
var prefix = '<?xml version="1.0" encoding="utf-8"?> <items>';
var suffix = '</items>';

function createItem(myJson) {
  if (typeof myJson === 'string') {
    myJson = JSON.parse(myJson);
  }
  return Mustache.render(template, myJson);
}

function createItems(myJson) {
  var results = [];
  if (typeof myJson === 'string') {
    myJson = JSON.parse(myJson);
  }
  results.push(prefix);
  myJson.results.forEach(function (item) {
    results.push(createItem(item));
  });
  results.push(suffix);
  return results.join('\n');
}

module.exports = {
  createItem: createItem,
  createItems: createItems,
  prefix: prefix,
  suffix: suffix
};
