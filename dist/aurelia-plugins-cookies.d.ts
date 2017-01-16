export default class Cookies {
    static get(key: any): any;
    static getAll(): {};
    static getObject(key: any): any;
    static remove(key: any, options?: {}): void;
    static removeAll(): void;
    static put(key: any, value: any, options: any): void;
    static putObject(key: any, value: any, options?: {}): void;
    static decode(value: any): string;
    static encode(value: any): string;
    static parse(str: any): {};
}
