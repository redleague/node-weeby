export interface ClientOptions {
  /**
   * Token generated from the weeeby-api
   */
  token: string;
}

export interface RestOptions {
  method: string;
  endpoint: string;
  body?: Record<string, any>
}