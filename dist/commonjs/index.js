'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaCookies = require('./aurelia-cookies');

Object.keys(_aureliaCookies).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaCookies[key];
    }
  });
});