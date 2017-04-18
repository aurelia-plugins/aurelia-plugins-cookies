# aurelia-plugins-cookies

A cookies plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-cookies --save
```

**JSPM**

```shell
jspm install aurelia-plugins-cookies
```

**Bower**

```shell
bower install aurelia-plugins-cookies
```

## Configuration

Add to `package.json`

```json
  "aurelia": {
    "build": {
      "resources": [
        "aurelia-plugins-cookies"
      ]
    }
  }
```

It is not necessary to load the plugin inside of the configure method of your `main.js` or `main.ts`, because this plugin doesn't use any dependencies of Aurelia. The only thing you need to be sure of, is that the library is loaded in your project.

## Usage

The plugin is used as a class with static methods. No dependency injection is necessary. Just import it in your own class.

The following methods are provided:

```javascript
import {Cookies} from 'aurelia-plugins-cookies';

export class App {
  // Returns the value (string) of the given cookie key
  Cookies.get(key);
  
  // Returns a key/value object with all the cookies
  Cookies.getAll();
  
  // Returns the deserialized value (object) of the given cookie key
  Cookies.getObject(key);

  // Sets a value (string) for the given cookie key
  Cookies.put(key, value, [options]);
  
  // Sets a serialized value (object) for the given cookie key
  Cookies.putObject(key, value, [options]);
  
  // Remove the cookie with the given cookie key
  Cookies.remove(key, [options]);
  
  // Removes all the cookies
  Cookies.removeAll();
}
```

## Options

Cookie options can be set by passing a plain object in the last argument to `Cookies.put(...)`.

### domain

A `string` indicating a valid domain where the cookie should be visible. The cookie will also be visible to all subdomains.

```javascript
Cookies.put('key', 'value', { domain: 'subdomain.site.com' });
```

### expires

Define when the cookie will be removed. Value can be a `string` which will be converted to a date or a `Date` instance. If omitted, the cookie becomes a session cookie.

```javascript
Cookies.put('key', 'value', { expires: 'Fri, 09 Sep 2016 00:00:01 GMT' });
```

### path

A `string` indicating the path where the cookie is visible.

```javascript
Cookies.put('key', 'value', { path: '' });
```

### secure

Either `true` or `false`, indicating if the cookie transmission requires a secure protocol (https).

```javascript
Cookies.put('key', 'value', { secure: true });
```