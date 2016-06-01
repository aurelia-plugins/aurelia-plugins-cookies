'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = exports.Cookies = function () {
	function Cookies() {
		_classCallCheck(this, Cookies);
	}

	Cookies.all = function all() {
		return this.parse(document.cookie);
	};

	Cookies.delete = function _delete(key) {
		document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	};

	Cookies.get = function get(key) {
		var cookies = this.all();
		if (cookies && cookies[key]) return cookies[key];
		return null;
	};

	Cookies.getObject = function getObject(key) {
		var value = this.get(key);
		return value ? JSON.parse(value) : value;
	};

	Cookies.set = function set(key, value) {
		var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

		var expires = options.expires;
		if (value == null) expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
		if (typeof expires === 'string') expires = new Date(expires);
		var str = this.encode(key) + '=' + this.encode(value);
		if (options.path) str += '; path=' + options.path;
		if (options.domain) str += '; domain=' + options.domain;
		if (options.expires) str += '; expires=' + expires.toUTCString();
		if (options.secure) str += '; secure';
		document.cookie = str;
	};

	Cookies.setObject = function setObject(key, value) {
		var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

		this.set(key, JSON.stringify(value), options);
	};

	Cookies.decode = function decode(value) {
		try {
			return decodeURIComponent(value);
		} catch (e) {
			return null;
		}
	};

	Cookies.encode = function encode(value) {
		try {
			return encodeURIComponent(value);
		} catch (e) {
			return null;
		}
	};

	Cookies.parse = function parse(str) {
		var obj = {},
		    pairs = str.split(/ *; */);
		if (pairs[0] === '') return obj;
		for (var i = 0, j = pairs.length; i < j; i++) {
			var pair = pairs[i].split('=');
			obj[this.decode(pair[0])] = this.decode(pair[1]);
		}
		return obj;
	};

	return Cookies;
}();