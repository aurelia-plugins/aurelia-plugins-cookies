import { Cookies } from './aurelia-cookies';

export function configure(config) {
  config.container.registerSingleton(Cookies, new Cookies());
}

export { Cookies };