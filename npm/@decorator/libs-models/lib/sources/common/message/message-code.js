"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageCode;
(function (MessageCode) {
    /**
     * 成功 200
     */
    MessageCode[MessageCode["OK"] = 0] = "OK";
    /**
     * 301 跳转
     */
    MessageCode[MessageCode["C1001"] = 1001] = "C1001";
    /**
     * 404 页面不存在
     */
    MessageCode[MessageCode["C1010"] = 1010] = "C1010";
    /**
     * 401 未授权
     */
    MessageCode[MessageCode["C1020"] = 1020] = "C1020";
    /**
     * 500 服务器错误
     */
    MessageCode[MessageCode["C1030"] = 1030] = "C1030";
    /**
     * 502 网关错误
     */
    MessageCode[MessageCode["C1031"] = 1031] = "C1031";
    /**
     * 未知错误
     */
    MessageCode[MessageCode["C9999"] = 9999] = "C9999";
})(MessageCode = exports.MessageCode || (exports.MessageCode = {}));
//# sourceMappingURL=message-code.js.map
