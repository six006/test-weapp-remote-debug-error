"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormUtil = /** @class */ (function () {
    function FormUtil() {
    }
    /**
     * 将Object对象转成Post提交的表单数据字符串
     *
     * 例如：将对象{a:1,b:2} 转成 字符串格式a=1&b=2
     */
    FormUtil.prototype.parse = function (obj) {
        var result = Object.keys(obj).map(function (key) {
            return encodeURI(key) + '=' + encodeURIComponent(obj[key]);
        }).join('&');
        return result;
    };
    return FormUtil;
}());
exports.formUtil = new FormUtil();
//# sourceMappingURL=form-util.js.map
