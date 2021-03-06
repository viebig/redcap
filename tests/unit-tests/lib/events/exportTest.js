'use strict';

const expect = require ('chai').expect;

const exportModule = require ('../../../../lib/events/export.js');
const config = require ('../../../../tests/config.js');
const utils = require ('../../../../lib/utils') (config);

describe ('events#export', function () {
  it ('should be a function', function () {
    expect (exportModule).to.be.a ('function');
  });

  var exportEvents = exportModule (utils);
  it ('should return a function', function () {
    expect (exportEvents).to.be.a ('function');
  });

  it ('should return events', function (done) {
    exportEvents(function (err, res) {
      if (err)
        return done (err);
      expect (res).to.be.an ('array');

      return done ();
    });
  });

  it ('should return particular events when passed an array of arms numbers', function (done) {
    var params = {
      arms: ['1', '2']
    }

    exportEvents (params, function (err, res) {
      if (err)
        return done (err);

      expect (res).to.be.an ('array');
      expect (res.length).to.equal (2);
      
      return done ();
    });
  });
});
