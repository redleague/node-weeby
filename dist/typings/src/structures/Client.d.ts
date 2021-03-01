import { GIF } from '../types/GIF';
import { Words, Words_II } from '../types/Words';
import { ClientOptions } from '../types/ClientOptions';
export declare class WeebyAPI {
    private _token;
    private _options;
    constructor(options: ClientOptions);
    gif(type: GIF): Promise<any>;
    word(type: Words | Words_II): Promise<any>;
    private _request;
    private _queryString;
}
