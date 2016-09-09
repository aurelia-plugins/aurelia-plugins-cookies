'use strict';

System.register(['./aurelia-cookies-class'], function (_export, _context) {
  "use strict";

  var Cookies;
  function configure(aurelia) {
    aurelia.container.registerSingleton(Cookies, new Cookies());
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaCookiesClass) {
      Cookies = _aureliaCookiesClass.Cookies;
    }],
    execute: function () {
      _export('Cookies', Cookies);
    }
  };
});