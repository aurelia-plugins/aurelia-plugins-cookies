define(['exports', './aurelia-cookies-class'], function (exports, _aureliaCookiesClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Cookies = undefined;
  exports.configure = configure;
  function configure(aurelia) {
    aurelia.container.registerSingleton(_aureliaCookiesClass.Cookies, new _aureliaCookiesClass.Cookies());
  }

  exports.Cookies = _aureliaCookiesClass.Cookies;
});