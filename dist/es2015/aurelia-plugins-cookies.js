
export let Cookies = class Cookies {
  static get(key) {
    const cookies = this.getAll();
    return cookies && cookies[key] ? cookies[key] : null;
  }

  static getAll() {
    return this._parse(document.cookie);
  }

  static getObject(key) {
    const value = this.get(key);
    return value ? JSON.parse(value) : value;
  }

  static put(key, value, options = {}) {
    let expires = options.expires;
    if (value == null) expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
    if (typeof expires === 'string') expires = new Date(expires);
    let str = `${this._encode(key)}=${value != null ? this._encode(value) : ''}`;
    if (options.path) str += `; path=${options.path}`;
    if (options.domain) str += `; domain=${options.domain}`;
    if (options.expires) str += `; expires=${expires.toUTCString()}`;
    if (options.secure) str += '; secure';
    document.cookie = str;
  }

  static putObject(key, value, options = {}) {
    this.put(key, JSON.stringify(value), options);
  }

  static remove(key, options = {}) {
    this.put(key, null, options);
  }

  static removeAll() {
    const cookies = this.getAll();
    Object.keys(cookies).forEach(key => this.remove(key));
  }

  static _decode(value) {
    try {
      return decodeURIComponent(value);
    } catch (e) {
      return null;
    }
  }

  static _encode(value) {
    try {
      return encodeURIComponent(value);
    } catch (e) {
      return null;
    }
  }

  static _parse(str) {
    const obj = {};
    const pairs = str.split(/ *; */);
    if (pairs[0] === '') return obj;
    for (let i = 0, j = pairs.length; i < j; i += 1) {
      const pair = pairs[i].split('=');
      obj[this._decode(pair[0])] = this._decode(pair[1]);
    }
    return obj;
  }
};