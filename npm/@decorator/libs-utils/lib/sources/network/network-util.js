"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var wxp_1 = require('../../../../../@six006/wxp/lib/index.js');
var NetworkUtil = /** @class */ (function () {
    function NetworkUtil() {
    }
    /**
     * 1.1 获取网络类型(异步)
     */
    NetworkUtil.prototype.getAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, wxp_1.wxp.getNetworkType()];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.networkType];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, 'none'];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return NetworkUtil;
}());
exports.networkUtil = new NetworkUtil();
//# sourceMappingURL=network-util.js.map
