'use strict';

System.register(['./aurelia-plugins-cookies-class'], function (_export, _context) {
  "use strict";

  var Cookies;
  function configure(aurelia) {
    aurelia.container.registerSingleton(Cookies, new Cookies());
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPluginsCookiesClass) {
      Cookies = _aureliaPluginsCookiesClass.Cookies;
    }],
    execute: function () {
      _export('Cookies', Cookies);
    }
  };
});