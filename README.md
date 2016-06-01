# aurelia-cookies
A cookies plugin for Aurelia.

## Installation
``` shell
jspm install npm:aurelia-cookie
```

or

``` shell
npm install aurelia-cookies --save
```

``` webpack.config.js
plugins: [
		new aureliaWebpackPlugin({
			includeSubModules: [
				{ moduleId: 'aurelia-cookies' }
			]
		}),...
```

## Setup
Just like you would any other plugin, simply instantiate it with the framework inside of your main bootstrapping file.

``` javascript
aurelia.use.plugin('aurelia-cookies');
```

## Use
``` javascript
import {Cookies} from 'aurelia-cookies';

Cookies.all();

Cookies.delete('key');

Cookies.get('key');

Cookies.getObject('key');

Cookies.set('key', 'value', 'options');

Cookies.setObject('key', 'value', 'options');

options: {
    domain: string,
    expires: string/date,
    path: string,
    secure: true/false
}
```
