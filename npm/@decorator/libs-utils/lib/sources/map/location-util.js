"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var LocationUtil = /** @class */ (function () {
    function LocationUtil() {
    }
    /**
     * 打开地图选择位置
     */
    LocationUtil.prototype.choose = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wx.chooseLocation({
                            success: function (res) {
                                resolve(res.address);
                            },
                            fail: reject,
                            complete: function () {
                                // console.log('请求完成');
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 使用微信内置地图查看位置
     */
    LocationUtil.prototype.open = function (options) {
        return wx.openLocation(options);
    };
    return LocationUtil;
}());
exports.locationUtil = new LocationUtil();
//# sourceMappingURL=location-util.js.map
