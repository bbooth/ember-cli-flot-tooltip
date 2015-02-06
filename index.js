/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-flot-tooltip',
  included: function (app) {
    app.import(app.bowerDirectory + "/flot.tooltip/js/jquery.flot.tooltip.js");
  }
};
