'use strict';

exports.__esModule = true;

var _aureliaPluginsCookies = require('./aurelia-plugins-cookies');

Object.keys(_aureliaPluginsCookies).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaPluginsCookies[key];
    }
  });
});