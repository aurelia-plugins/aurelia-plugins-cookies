define(['exports', './aurelia-plugins-cookies'], function (exports, _aureliaPluginsCookies) {
  'use strict';

  exports.__esModule = true;
  Object.keys(_aureliaPluginsCookies).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPluginsCookies[key];
      }
    });
  });
});