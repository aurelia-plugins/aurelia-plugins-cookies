export declare class Cookies {
    static get(key: any): any;
    static getAll(): {};
    static getObject(key: any): any;
    static put(key: any, value: any, options?: {}): void;
    static putObject(key: any, value: any, options?: {}): void;
    static remove(key: any, options?: {}): void;
    static removeAll(): void;
    static _decode(value: any): string;
    static _encode(value: any): string;
    static _parse(str: any): {};
}
