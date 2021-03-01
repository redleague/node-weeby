//types
import { GIF } from '../types/GIF';
import { Words, Words_II } from '../types/Words';
import { ClientOptions } from '../types/ClientOptions';
import { RequestOptions } from '../types/RequestOptions';
import { QueryParams } from '../types/RequestOptions';

import { createClient } from '../utils/RequestHandler';
import Error from '../utils/ErrorHandler';

export class WeebyAPI {
  private _token: string;
  private _options: ClientOptions;

  public constructor(options: ClientOptions) {
    if(typeof options.token !== 'string') throw new TypeError(`Type of token parameteter, is not of Type<string>`);
    this._options = options;
    this._token = options.token;
  };

  public gif(type: GIF): Promise<any> {
    return this._request({ path: `/gif/${type}` });
  }

  public word(type: Words | Words_II): Promise<any> {
    let request: any;
    if(['random', 'halloween', 'christmas', 'list'].includes(type)) request = this._request({ path: `/json/word/${type}` });
    else request = this._request({ path: `/json/${type}` });

    return request;
  }

  private _request(options: RequestOptions): Promise<any> {
    const client = createClient(this._token);

    let qs: string = ''
    
    if(options.params) qs = this._queryString(options.params);

    return new Promise((resolve, reject) => {
     client.get(`${options.path}${options.params ? `?${qs}`: '' }`)
     .then(a => resolve(a.data))
     .catch(e => console.log(e))
    })
  }

  private _queryString(options: QueryParams): string {
    let QueryString: string = '';

    for (const keyName of  Object.keys(options.params)) {
        const oldValue = options.params[keyName];
        const newValue = Array.isArray(oldValue) ? oldValue.map(String).join(', ') : String(oldValue);
        QueryString += `${keyName}=${newValue}&`;
    }
    return QueryString;

  }

};