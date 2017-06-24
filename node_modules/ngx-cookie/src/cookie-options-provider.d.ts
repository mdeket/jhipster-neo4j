import { Injector, OpaqueToken } from '@angular/core';
import { CookieOptions } from './cookie-options.model';
export declare const COOKIE_OPTIONS: OpaqueToken;
/** @private */
export declare class CookieOptionsProvider {
    private _injector;
    private defaultOptions;
    private _options;
    constructor(options: CookieOptions, _injector: Injector);
    readonly options: CookieOptions;
}
