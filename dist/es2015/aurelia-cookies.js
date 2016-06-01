export let Cookies = class Cookies {
	static all() {
		return this.parse(document.cookie);
	}

	static delete(key) {
		document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	static get(key) {
		let cookies = this.all();
		if (cookies && cookies[key]) return cookies[key];
		return null;
	}

	static getObject(key) {
		var value = this.get(key);
		return value ? JSON.parse(value) : value;
	}

	static set(key, value, options = {}) {
		let expires = options.expires;
		if (value == null) expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
		if (typeof expires === 'string') expires = new Date(expires);
		let str = this.encode(key) + '=' + this.encode(value);
		if (options.path) str += '; path=' + options.path;
		if (options.domain) str += '; domain=' + options.domain;
		if (options.expires) str += '; expires=' + expires.toUTCString();
		if (options.secure) str += '; secure';
		document.cookie = str;
	}

	static setObject(key, value, options = {}) {
		this.set(key, JSON.stringify(value), options);
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
		var obj = {},
		    pairs = str.split(/ *; */);
		if (pairs[0] === '') return obj;
		for (let i = 0, j = pairs.length; i < j; i++) {
			let pair = pairs[i].split('=');
			obj[this.decode(pair[0])] = this.decode(pair[1]);
		}
		return obj;
	}
};