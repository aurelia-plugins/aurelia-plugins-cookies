'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cookies = undefined;
exports.configure = configure;

var _aureliaCookies = require('./aurelia-cookies');

function configure(config) {
  config.container.registerSingleton(_aureliaCookies.Cookies, new _aureliaCookies.Cookies());
}

exports.Cookies = _aureliaCookies.Cookies;