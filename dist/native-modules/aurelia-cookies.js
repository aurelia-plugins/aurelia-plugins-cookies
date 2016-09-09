
import { Cookies } from './aurelia-cookies-class';

export function configure(aurelia) {
  aurelia.container.registerSingleton(Cookies, new Cookies());
}

export { Cookies };