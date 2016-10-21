'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cookies = undefined;
exports.configure = configure;

var _aureliaPluginsCookiesClass = require('./aurelia-plugins-cookies-class');

function configure(aurelia) {
  aurelia.container.registerSingleton(_aureliaPluginsCookiesClass.Cookies, new _aureliaPluginsCookiesClass.Cookies());
}

exports.Cookies = _aureliaPluginsCookiesClass.Cookies;