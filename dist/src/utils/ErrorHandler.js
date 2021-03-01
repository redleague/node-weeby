"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
class WeebyError extends Error {
    constructor(errorMessage, statusCode) {
        super(errorMessage);
        this.name = "WeebyError";
        this.status = http_1.STATUS_CODES[statusCode];
    }
    ;
}
exports.default = WeebyError;
;
