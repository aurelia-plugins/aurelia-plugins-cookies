export class Cookies {

	/**
	 * Returns a key value object with all the cookies
	 */
	static all() {
		return this.parse(document.cookie);
	}

	/**
	 * Deletes the cookie for a given cookie key
	 */
	static delete(key) {
		document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

	/**
	 * Returns the value of a given cookie key
	 */
	static get(key) {
		let cookies = this.all();
		if (cookies && cookies[key]) return cookies[key];
		return null;
	}

	/**
	 * Returns the deserialized value of a given cookie key
	 */
	static getObject(key) {
		var value = this.get(key);
		return value ? JSON.parse(value) : value;
	}

	/**
	 * Sets a value for given cookie key
	 */
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

	/**
	 * Serializes and sets a value for given cookie key
	 */
	static setObject(key, value, options = {}) {
		this.set(key, JSON.stringify(value), options);
	}

	/* ********************************************************************* */
	// HELPER METHODS
	/* ********************************************************************* */
	static decode(value) {
		try { return decodeURIComponent(value); } catch(e) { return null; }
	}

	static encode(value) {
		try { return encodeURIComponent(value); } catch(e) { return null; }
	}

	static parse(str) {
		var obj = {}, pairs = str.split(/ *; */);
		if (pairs[0] === '') return obj;
		for (let i = 0, j = pairs.length; i < j; i++) {
			let pair = pairs[i].split('=');
			obj[this.decode(pair[0])] = this.decode(pair[1]);
		}
		return obj;
	}
}