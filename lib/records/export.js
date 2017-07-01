'use strict';

module.exports = function(utilRef) {
  const utils = utilRef;

  const keySet = {
    required: [
      'type'
    ],
    optional: [
      'records',
      'fields',
      'forms',
      'events',
      'rawOrLabel',
      'rawOrLabelHeaders',
      'exportCheckboxLabel',
      'exportSurveyFields',
      'exportDataAccessGroups',
      'filterLogic'
    ],
  }

  return function(params, callback) {
    var keys = utils.keyCheck(params, keySet);

    if (keys.valid === false) {
      callback({error: keys.errmsg}, {});
      return;
    }

    var body = Object.assign(keys.keys, {
      content: 'record',
      format: 'json'
    });

    if (body.hasOwnProperty ('records')) {
      var recordString = "";
      body.records.forEach (function (record) {
        recordString += "," + record;
      });
      body.records = recordString;
    }
    utils.post(body, callback);
  }
}