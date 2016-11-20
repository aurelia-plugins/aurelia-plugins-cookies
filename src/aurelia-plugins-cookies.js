// PUBLIC CLASS
export class Cookies {

  // PUBLIC STATIC METHODS
  static get(key) {
    var cookies = this.getAll();
    if (cookies && cookies[key]) return cookies[key];
    return null;
  }

  static getAll() {
    return this._parse(document.cookie);
  }

  static getObject(key) {
    var value = this.get(key);
    return value ? JSON.parse(value) : value;
  }

  static remove(key, options = {}) {
    this.put(key, null, options);
  }

  static removeAll() {
    var cookies = this.getAll();
    Object.keys(cookies).forEach(key => { this.remove(key); });
  }

  static put(key, value, options = {}) {
    var expires = options.expires;
    if (value == null) expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
    if (typeof expires === 'string') expires = new Date(expires);
    var str = `${this._encode(key)}=${value != null ? this._encode(value) : ''}`;
    if (options.path) str += `; path=${options.path}`;
    if (options.domain) str += `; domain=${options.domain}`;
    if (options.expires) str += `; expires=${expires.toUTCString()}`;
    if (options.secure) str += '; secure';
    document.cookie = str;
  }

  static putObject(key, value, options = {}) {
    this.put(key, JSON.stringify(value), options);
  }

  // PRIVATE STATIC METHODS
  static _decode(value) {
    try { return decodeURIComponent(value); } catch(e) { return null; }
  }

  static _encode(value) {
    try { return encodeURIComponent(value); } catch(e) { return null; }
  }

  static _parse(str) {
    var obj = {}, pairs = str.split(/ *; */);
    if (pairs[0] === '') return obj;
    for (var i = 0, j = pairs.length; i < j; i++) {
      var pair = pairs[i].split('=');
      obj[this._decode(pair[0])] = this._decode(pair[1]);
    }
    return obj;
  }
}
