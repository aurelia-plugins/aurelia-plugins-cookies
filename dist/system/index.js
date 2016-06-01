'use strict';

System.register(['./aurelia-cookies'], function (_export, _context) {
  "use strict";

  var Cookies;
  return {
    setters: [function (_aureliaCookies) {
      Cookies = _aureliaCookies.Cookies;
    }],
    execute: function () {
      function configure(config) {
        config.container.registerSingleton(Cookies, new Cookies());
      }

      _export('configure', configure);

      _export('Cookies', Cookies);
    }
  };
});