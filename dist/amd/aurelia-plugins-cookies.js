define(['exports', './aurelia-plugins-cookies-class'], function (exports, _aureliaPluginsCookiesClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Cookies = undefined;
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.container.registerSingleton(_aureliaPluginsCookiesClass.Cookies, new _aureliaPluginsCookiesClass.Cookies());
  }

  exports.Cookies = _aureliaPluginsCookiesClass.Cookies;
});