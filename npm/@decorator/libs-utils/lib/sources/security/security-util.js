"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = require('../../../../../@six006/crypto-js/build/index.js');
var SecurityUtil = /** @class */ (function () {
    function SecurityUtil() {
    }
    SecurityUtil.prototype.hmacSHA256 = function (message, token) {
        if (message && token) {
            return CryptoJS.HmacSHA256(message, CryptoJS.enc.Hex.parse(token));
        }
        return '';
    };
    return SecurityUtil;
}());
exports.securityUtil = new SecurityUtil();
//# sourceMappingURL=security-util.js.map
