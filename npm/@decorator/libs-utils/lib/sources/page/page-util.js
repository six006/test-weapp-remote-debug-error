"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require('../url/index.js');
var PageUtil = /** @class */ (function () {
    function PageUtil() {
    }
    /**
     * 当前页面对象
     */
    PageUtil.prototype.currentPage = function () {
        var pages = getCurrentPages();
        var page = pages[pages.length - 1];
        return page;
    };
    /**
     * 页面跳转 - Tab
     * @param url
     * @param data
     */
    PageUtil.prototype.switchTab = function (url, data) {
        wx.switchTab({
            url: this.buildUrl(url, data)
        });
    };
    /**
     * 页面跳转 - redirect
     * @param url
     * @param data
     */
    PageUtil.prototype.redirectTo = function (url, data) {
        wx.redirectTo({
            url: this.buildUrl(url, data)
        });
    };
    /**
     * 页面跳转 - navigateTo
     * @param url
     * @param data
     */
    PageUtil.prototype.navigateTo = function (url, data) {
        wx.navigateTo({
            url: this.buildUrl(url, data)
        });
    };
    /**
     * 页面跳转 - navigateBack
     * @param url
     * @param data
     */
    PageUtil.prototype.navigateBack = function (delta) {
        if (delta === void 0) { delta = 1; }
        wx.navigateBack({
            delta: delta
        });
    };
    /**
     * 压栈
     * @param url
     * @param data
     */
    PageUtil.prototype.push = function (url, data) {
        url = this.buildUrl(url, data);
        var pages = getCurrentPages().length;
        if (pages < 10) {
            wx.navigateTo({
                url: url
            });
        }
        else {
            wx.redirectTo({
                url: url
            });
        }
    };
    /**
     * 扩展方法，同navigateBack
     * @param delta
     */
    PageUtil.prototype.pop = function (delta) {
        if (delta === void 0) { delta = 1; }
        wx.navigateBack({
            delta: delta
        });
    };
    /**
     * 扩展方法，同navigateBack
     * @param delta
     */
    PageUtil.prototype.back = function () {
        wx.navigateBack({
            delta: 1
        });
    };
    /**
     * 构建Url
     * @param url
     * @param data 对象类型{a:1,b:2}
     */
    PageUtil.prototype.buildUrl = function (url, data) {
        if (!url) {
            return '';
        }
        if (data) {
            url = url.concat(url_1.urlUtil.toUrl(data));
        }
        return url;
    };
    return PageUtil;
}());
exports.pageUtil = new PageUtil();
//# sourceMappingURL=page-util.js.map
