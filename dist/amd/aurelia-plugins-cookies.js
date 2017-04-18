define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;
  let Cookies = exports.Cookies = class Cookies {
    static get(key) {
      const cookies = this.getAll();
      return cookies && cookies[key] ? cookies[key] : null;
    }

    static getAll() {
      return this.parse(document.cookie);
    }

    static getObject(key) {
      const value = this.get(key);
      return value ? JSON.parse(value) : value;
    }

    static put(key, value) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      let expires = options.expires;
      if (value == null) expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
      if (typeof expires === 'string') expires = new Date(expires);
      let str = this.encode(key) + '=' + (value != null ? this.encode(value) : '');
      if (options.path) str += '; path=' + options.path;
      if (options.domain) str += '; domain=' + options.domain;
      if (options.expires) str += '; expires=' + expires.toUTCString();
      if (options.secure) str += '; secure';
      document.cookie = str;
    }

    static putObject(key, value) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.put(key, JSON.stringify(value), options);
    }

    static remove(key) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.put(key, null, options);
    }

    static removeAll() {
      const cookies = this.getAll();
      Object.keys(cookies).forEach(key => this.remove(key));
    }

    static decode(value) {
      try {
        return decodeURIComponent(value);
      } catch (e) {
        return null;
      }
    }

    static encode(value) {
      try {
        return encodeURIComponent(value);
      } catch (e) {
        return null;
      }
    }

    static parse(str) {
      const obj = {};
      const pairs = str.split(/ *; */);
      if (pairs[0] === '') return obj;
      for (let i = 0, j = pairs.length; i < j; i += 1) {
        const pair = pairs[i].split('=');
        obj[this.decode(pair[0])] = this.decode(pair[1]);
      }
      return obj;
    }
  };
});