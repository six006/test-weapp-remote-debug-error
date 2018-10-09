"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var DeviceUtil = /** @class */ (function () {
    function DeviceUtil() {
    }
    /**
     * 1.网络类型
     *
     * 返回网络类型2g|3g|4g|wifi
     */
    DeviceUtil.prototype.networkTypeAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wx.getNetworkType({
                            success: function (res) {
                                resolve(res.networkType);
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 2.系统信息(异步)
     *
     * 返回SystemInfo
     */
    DeviceUtil.prototype.systemInfoAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wx.getSystemInfo({
                            success: function (res) {
                                resolve(res);
                            },
                            fail: function (res) {
                                resolve(null);
                            },
                            complete: null
                        });
                    })];
            });
        });
    };
    /**
     * 2.系统信息(同步)
     */
    DeviceUtil.prototype.systemInfo = function () {
        return wx.getSystemInfoSync();
    };
    // 3.重力感应
    // 4.罗盘
    /**
     * 5.拨打电话
     * @param phoneNumber
     */
    DeviceUtil.prototype.callPhone = function (phoneNumber) {
        wx.makePhoneCall({
            phoneNumber: phoneNumber,
            success: function () { }
        });
    };
    return DeviceUtil;
}());
exports.deviceUtil = new DeviceUtil();
//# sourceMappingURL=device-util.js.map
