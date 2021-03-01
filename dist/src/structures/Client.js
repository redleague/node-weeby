"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeebyAPI = void 0;
const RequestHandler_1 = require("../utils/RequestHandler");
class WeebyAPI {
    constructor(options) {
        if (typeof options.token !== 'string')
            throw new TypeError(`Type of token parameteter, is not of Type<string>`);
        this._options = options;
        this._token = options.token;
    }
    ;
    gif(type) {
        return this._request({ path: `/gif/${type}` });
    }
    word(type) {
        let request;
        if (['random', 'halloween', 'christmas', 'list'].includes(type))
            request = this._request({ path: `/json/word/${type}` });
        else
            request = this._request({ path: `/json/${type}` });
        return request;
    }
    _request(options) {
        const client = RequestHandler_1.createClient(this._token);
        let qs = '';
        if (options.params)
            qs = this._queryString(options.params);
        return new Promise((resolve, reject) => {
            client.get(`${options.path}${options.params ? `?${qs}` : ''}`)
                .then(a => resolve(a.data))
                .catch(e => console.log(e));
        });
    }
    _queryString(options) {
        let QueryString = '';
        for (const keyName of Object.keys(options.params)) {
            const oldValue = options.params[keyName];
            const newValue = Array.isArray(oldValue) ? oldValue.map(String).join(', ') : String(oldValue);
            QueryString += `${keyName}=${newValue}&`;
        }
        return QueryString;
    }
}
exports.WeebyAPI = WeebyAPI;
;
