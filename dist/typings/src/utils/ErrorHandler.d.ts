export default class WeebyError extends Error {
    status: string;
    constructor(errorMessage: string, statusCode: number);
}
