// PUBLIC METHODS
export function configure(aurelia) {
  aurelia.container.registerSingleton(Cookies, new Cookies());
}