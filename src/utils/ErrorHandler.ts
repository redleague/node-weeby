import { STATUS_CODES } from 'http';

export default class WeebyError extends Error {
  public status: string;
  public constructor(errorMessage: string, statusCode: number) {
    super(errorMessage);

    this.name = "WeebyError";
    this.status = STATUS_CODES[statusCode]!;
  };
};