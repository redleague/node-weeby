"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.WeebyAPI = void 0;
var Client_1 = require("./structures/Client");
Object.defineProperty(exports, "WeebyAPI", { enumerable: true, get: function () { return Client_1.WeebyAPI; } });
var package_json_1 = require("../package.json");
Object.defineProperty(exports, "version", { enumerable: true, get: function () { return package_json_1.version; } });
