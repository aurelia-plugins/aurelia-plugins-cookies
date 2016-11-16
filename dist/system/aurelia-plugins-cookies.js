"use strict";

System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.container.registerSingleton(Cookies, new Cookies());
  }

  _export("configure", configure);

  return {
    setters: [],
    execute: function () {}
  };
});