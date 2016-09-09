// IMPORTS
import {Cookies} from './aurelia-cookies-class';


// PUBLIC METHODS
export function configure(aurelia) {
  aurelia.container.registerSingleton(Cookies, new Cookies());
}


// PUBLIC CLASSES
export {Cookies};
