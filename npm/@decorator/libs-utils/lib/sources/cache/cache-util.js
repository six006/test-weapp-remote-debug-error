"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var wxp_1 = require('../../../../../@six006/wxp/lib/index.js');
var CacheUtil = /** @class */ (function () {
    function CacheUtil() {
    }
    /**
     * 1.1 获取缓存(异步)
     */
    CacheUtil.prototype.getAsync = function (key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, wxp_1.wxp.getStorage({ key: key })];
            });
        });
    };
    /**
     * 1.2 获取缓存(同步)
     */
    CacheUtil.prototype.get = function (key) {
        return wx.getStorageSync(key);
    };
    /**
     * 2.1 保存缓存(异步)
     */
    CacheUtil.prototype.setAsync = function (key, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, wxp_1.wxp.setStorage({ key: key, data: data })];
            });
        });
    };
    /**
     * 2.2 保存缓存(同步)
     */
    CacheUtil.prototype.set = function (key, data) {
        return wx.setStorageSync(key, data);
    };
    /**
     * 3.1 移除缓存(异步)
     */
    CacheUtil.prototype.removeAsync = function (key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, wxp_1.wxp.removeStorage({ key: key })];
            });
        });
    };
    /**
     * 3.2 移除缓存(同步)
     */
    CacheUtil.prototype.remove = function (key) {
        wx.removeStorageSync(key);
    };
    /**
     * 4.1 清空缓存(异步)
     */
    CacheUtil.prototype.clearAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                wxp_1.wxp.clearStorage();
                return [2 /*return*/];
            });
        });
    };
    /**
     * 4.2 清空缓存(同步)
     */
    CacheUtil.prototype.clear = function () {
        wx.clearStorageSync();
    };
    return CacheUtil;
}());
exports.cacheUtil = new CacheUtil();
//# sourceMappingURL=cache-util.js.map
