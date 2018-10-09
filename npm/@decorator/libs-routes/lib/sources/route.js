"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('../../../../@six006/lodash/lodash.js');
var tabbar_urls_1 = require('./tabbar-urls.js');
/**
 * 构建url后参数
 *
 * @param param
 */
function prepareUrlParam(param) {
    if (!param)
        return '';
    var search = '';
    if (typeof param === 'string') {
        search += param;
    }
    else {
        search = Object.keys(param).map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent((param[k] || '') + ''); }).join('&');
    }
    if (search && search[0] !== '?') {
        search = '?' + search;
    }
    return search;
}
/**
 * 路由
 */
var Route = /** @class */ (function () {
    function Route() {
    }
    //====================================
    //  static methods
    //====================================
    /**
     * 初始化对象
     *
     * @param route 路由对象
     */
    Route.init = function (route) {
        var self = new Route();
        if (route) {
            if (route.name)
                self.name = route.name;
            if (route.url)
                self.url = route.url;
            if (route.title)
                self.title = route.title;
            if (route.description)
                self.description = route.description;
        }
        return self;
    };
    /**
     * 设置路由所属子包名称
     *
     * @param routes 路由集合
     * @param moduleName
     */
    Route.setSubPackages = function (routes, moduleName) {
        _.mapKeys(routes, function (value, key) {
            value.module = moduleName;
            return {};
        });
    };
    //====================================
    // methods
    //====================================
    /**
     * 跳转当前 url 所指定的页面
     *
     * 注意：当页面是 tabBar 中的页面是，不能带参数
     */
    Route.prototype.go = function (urlParam) {
        this.module = this.prepareModule();
        if (this.isTabBar()) {
            if (urlParam) {
                console.warn(this.url + " \u662F tabBar \u9875\u9762\uFF0C\u4E0D\u80FD\u5E26\u53C2\u6570\uFF0C\u5DF2\u81EA\u52A8\u5FFD\u7565");
            }
            wx.switchTab({ url: this.module + this.url });
        }
        else {
            wx.navigateTo({ url: this.module + this.url + prepareUrlParam(urlParam) });
        }
    };
    /**
     * 重定向到当前 url 所指定的页面
     *
     * 注意：当页面是 tabBar 时，无法使用此函数
     */
    Route.prototype.redirect = function (urlParam) {
        this.module = this.prepareModule();
        if (this.isTabBar()) {
            console.error(this.url + " \u662F tabBar \u9875\u9762\uFF0C\u4E0D\u80FD\u4F7F\u7528\u6B64 redirect\uFF0C\u4E0D\u8FC7\u4F60\u53EF\u4EE5\u4F7F\u7528 reload \u6765\u8DF3\u5230 tabBar \u9875\u9762\u4E0A");
            console.error("\u8BE6\u60C5\u67E5\u770B\uFF1A https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#tip");
        }
        else {
            wx.redirectTo({ url: this.module + this.url + prepareUrlParam(urlParam) });
        }
    };
    /**
     * 关闭所有页面，打开到应用内的某个页面
     */
    Route.prototype.reload = function (urlParam) {
        this.module = this.prepareModule();
        if (this.isTabBar() && urlParam) {
            console.warn(this.url + " \u662F tabBar \u9875\u9762\uFF0C\u4E0D\u80FD\u5E26\u53C2\u6570\uFF0C\u5DF2\u81EA\u52A8\u5FFD\u7565");
            urlParam = '';
        }
        wx.reLaunch({ url: this.module + this.url + prepareUrlParam(urlParam) });
    };
    /**
     * 构建module
     *
     * 若不是以/开头,则加上/
     */
    Route.prototype.prepareModule = function () {
        this.module = this.module || '';
        if (this.module) {
            if (!this.module.startsWith('/')) {
                this.module = '/' + this.module;
            }
        }
        return this.module;
    };
    /**
     * 判断是否为Tabbar
     */
    Route.prototype.isTabBar = function () {
        return tabbar_urls_1.tabBarUrls.indexOf(this.url) >= 0;
    };
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=route.js.map
