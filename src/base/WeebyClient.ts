import { ClientOptions } from "../typings";
import fetch from "node-fetch";

export class WeebyClient {
  private options: ClientOptions;
  private baseURL: string;

  constructor(options: ClientOptions) {
    this.options = options;
    this.baseURL = "https://weebyapi.xyz"
  }

  private async _rest(method: string, path: string, body?: Record<string, any> ): Promise<any> {
    const url = `${this.baseURL}${path}${body && method === "GET" ? `?${new URLSearchParams(body)}` : ''}`

    const response = await fetch(url, {
      method,
      headers: { 'Authorization': `Bearer ${this.options.token}` },
      body: body && method !== "GET" ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(String(response));
    }

    let responseBody;
    if (response.headers.get("Content-Type")?.startsWith("application/json")) {
      responseBody = await response.json();
    } else {
      responseBody = await response.text();
    }

    return responseBody;
  }
}