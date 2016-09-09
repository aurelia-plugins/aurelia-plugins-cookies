'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cookies = undefined;
exports.configure = configure;

var _aureliaCookiesClass = require('./aurelia-cookies-class');

function configure(aurelia) {
  aurelia.container.registerSingleton(_aureliaCookiesClass.Cookies, new _aureliaCookiesClass.Cookies());
}

exports.Cookies = _aureliaCookiesClass.Cookies;