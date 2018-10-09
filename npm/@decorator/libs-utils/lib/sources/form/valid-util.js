"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 验证工具类
 */
var ValidUtil = /** @class */ (function () {
    function ValidUtil() {
    }
    /**
     * 1.1 验证电子邮箱格式
     */
    ValidUtil.prototype.email = function (value) {
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    };
    /**
     * 1.2 验证手机号码格式
     */
    ValidUtil.prototype.phone = function (value) {
        return /^1[34578]\d{9}$/.test(value);
    };
    /**
     * 1.3 验证网址格式
     */
    ValidUtil.prototype.url = function (value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    };
    /**
     * 1.4 验证日期格式
     */
    ValidUtil.prototype.date = function (value) {
        return !/Invalid|NaN/.test(new Date(value).toString());
    };
    /**
     * 1.5 验证ISO类型的日期格式
     */
    ValidUtil.prototype.dateISO = function (value) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    };
    /**
     * 1.6 验证身份证号码
     */
    ValidUtil.prototype.idCard = function (value) {
        return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
    };
    /**
     * 1.7 验证十进制数字
     */
    ValidUtil.prototype.number = function (value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    };
    /**
     * 1.8 验证整数
     */
    ValidUtil.prototype.digits = function (value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    };
    return ValidUtil;
}());
exports.ValidUtil = ValidUtil;
exports.validUtil = new ValidUtil();
//# sourceMappingURL=valid-util.js.map
