"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../../tslib/tslib.js');
/**
 * 自定义错误基类
 *
 * 参考1：https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 * 参考2：https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */
var BaseError = /** @class */ (function () {
    function BaseError() {
        Error.apply(this, arguments);
    }
    return BaseError;
}());
BaseError.prototype = new Error();
/**
 * 自定义Http请求错误
 */
var HttpError = /** @class */ (function (_super) {
    tslib_1.__extends(HttpError, _super);
    function HttpError(httpStatus, data) {
        var _this = _super.call(this) || this;
        _this.httpStatus = httpStatus;
        _this.data = data;
        return _this;
    }
    return HttpError;
}(BaseError));
exports.HttpError = HttpError;
/**
 * 自定义MessageModel请求错误
 */
var MessageError = /** @class */ (function (_super) {
    tslib_1.__extends(MessageError, _super);
    function MessageError(messageCode, data) {
        var _this = _super.call(this) || this;
        _this.messageCode = messageCode;
        _this.data = data;
        return _this;
    }
    return MessageError;
}(BaseError));
exports.MessageError = MessageError;
//# sourceMappingURL=http-error.js.map
