'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = exports.Cookies = function () {
  function Cookies() {
    _classCallCheck(this, Cookies);
  }

  Cookies.get = function get(key) {
    var cookies = this.getAll();
    return cookies && cookies[key] ? cookies[key] : null;
  };

  Cookies.getAll = function getAll() {
    return this._parse(document.cookie);
  };

  Cookies.getObject = function getObject(key) {
    var value = this.get(key);
    return value ? JSON.parse(value) : value;
  };

  Cookies.put = function put(key, value) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var expires = options.expires;
    if (value == null) expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
    if (typeof expires === 'string') expires = new Date(expires);
    var str = this._encode(key) + '=' + (value != null ? this._encode(value) : '');
    if (options.path) str += '; path=' + options.path;
    if (options.domain) str += '; domain=' + options.domain;
    if (options.expires) str += '; expires=' + expires.toUTCString();
    if (options.secure) str += '; secure';
    document.cookie = str;
  };

  Cookies.putObject = function putObject(key, value) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    this.put(key, JSON.stringify(value), options);
  };

  Cookies.remove = function remove(key) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.put(key, null, options);
  };

  Cookies.removeAll = function removeAll() {
    var _this = this;

    var cookies = this.getAll();
    Object.keys(cookies).forEach(function (key) {
      return _this.remove(key);
    });
  };

  Cookies._decode = function _decode(value) {
    try {
      return decodeURIComponent(value);
    } catch (e) {
      return null;
    }
  };

  Cookies._encode = function _encode(value) {
    try {
      return encodeURIComponent(value);
    } catch (e) {
      return null;
    }
  };

  Cookies._parse = function _parse(str) {
    var obj = {};
    var pairs = str.split(/ *; */);
    if (pairs[0] === '') return obj;
    for (var i = 0, j = pairs.length; i < j; i += 1) {
      var pair = pairs[i].split('=');
      obj[this._decode(pair[0])] = this._decode(pair[1]);
    }
    return obj;
  };

  return Cookies;
}();