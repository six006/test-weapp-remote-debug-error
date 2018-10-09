"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    /**
     * 格式化字符串
     *
     * 举例：
     * StringUtil.format("http://www.{0}.{1}!", "six006", "com")
     * 输出结果
     * http://www.six006.com!
     *
     * @param str 待格式化字符串.
     * @param ... args 参数值.
     */
    StringUtil.prototype.format = function (formatString) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var i, reg;
        i = 0;
        for (i = 0; i < args.length; i++) {
            reg = new RegExp('\\{' + i + '\\}', 'gm');
            formatString = formatString.replace(reg, args[i]);
        }
        return formatString;
    };
    return StringUtil;
}());
exports.stringUtil = new StringUtil();
//# sourceMappingURL=string-util.js.map
