'use strict';

  function createItems(myJson) {
    var fs = require('fs');
    var Mustache = require('Mustache');
    var template = fs.readFileSync(__dirname + '/alfred.mustache', 'utf8');
    var results = [];
    if (typeof myJson === 'string') {
      myJson = JSON.parse(myJson);
    }
    results.push('<?xml version="1.0" encoding="utf-8"?> <items>');
    myJson.results.forEach(function (item) {
      results.push(Mustache.render(template, item));
    });
    results.push('</items>');
    return results.join('\n');
  }
  
  module.exports = {
    createItems: createItems
  }
  
