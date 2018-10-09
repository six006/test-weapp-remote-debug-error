"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlUtil = /** @class */ (function () {
    function UrlUtil() {
    }
    /**
     * 1.将Url中的字符串转换成Json对象
     *
     * 如：将字符串 http://www.six006.com?a=1&b=2 转成 Json对象 {a:1,b:2}
     */
    UrlUtil.prototype.toJson = function (url) {
        var result = {};
        if (!url)
            return result;
        var s = url.split('?');
        if (!s[1])
            return result;
        var params = s[1].split('&');
        if (!params || params.length <= 0)
            return result;
        params.forEach(function (v) {
            var str = v.split('=');
            if (str[0]) {
                result[str[0]] = decodeURI(str[1]);
            }
        });
        return result;
    };
    /**
     * 2.将Json对象转成字符串
     *
     * 如：将Json对象 {a:1,b:2} 转成字符串格式 ?a=1&b=2
     */
    UrlUtil.prototype.toUrl = function (obj) {
        var result = Object.keys(obj)
            .filter(function (key) { return typeof obj[key] !== 'object'; })
            .map(function (key) {
            return encodeURI(key) + '=' + encodeURI(obj[key] || '');
        }).join('&');
        return "?" + result;
    };
    /**
     * 3.3 获取url参数值（根据传递的名称）
     *
     * @param options object|string
     * @param key 属性名称
     */
    UrlUtil.prototype.getQueryString = function (options, name) {
        if (typeof options === 'string') {
            var url = options;
            var result = url.match(new RegExp('[\?\&]' + name + '=([^&]*)(&|$)', 'i'));
            if (result == null || result.length < 1) {
                return '';
            }
            return unescape(result[1]);
        }
        if (typeof options === 'object') {
            if (options && options[name]) {
                return options[name];
            }
        }
        return null;
    };
    /**
     * 4.构建Url
     * @param url
     * @param data
     */
    UrlUtil.prototype.buildPageUrl = function (url, data) {
        if (data) {
            url = url.concat(this.toUrl(data));
        }
        return url;
    };
    return UrlUtil;
}());
exports.urlUtil = new UrlUtil();
//# sourceMappingURL=url-util.js.map
