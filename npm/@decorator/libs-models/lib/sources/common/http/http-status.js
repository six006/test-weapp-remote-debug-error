"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * http请求返回状态
 *
 * 注：Typescript枚举支持字符串
 */
var HttpStatus;
(function (HttpStatus) {
    /**
     * 成功 200
     */
    HttpStatus["success"] = "success";
    /**
     * 未授权 401
     */
    HttpStatus["unauthorized"] = "unauthorized";
    /**
     * 错误 - 404
     */
    HttpStatus["pageNotFound"] = "pageNotFound";
    /**
     * 错误 500
     */
    HttpStatus["error"] = "error";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
//# sourceMappingURL=http-status.js.map
