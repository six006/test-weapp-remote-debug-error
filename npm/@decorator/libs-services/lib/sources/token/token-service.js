"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var libs_caches_1 = require('../../../../libs-caches/lib/index.js');
var token_api_url_1 = require('./token-api-url.js');
var base_service_1 = require('../base-service.js');
var TokenService = /** @class */ (function (_super) {
    tslib_1.__extends(TokenService, _super);
    function TokenService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 用户Token信息
     * @param forceRefresh
     */
    TokenService.prototype.getCustomerToken = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + token_api_url_1.tokenApiUrl.customerToken;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        // 设置缓存
                        libs_utils_1.cacheUtil.set(libs_caches_1.appCache.customerToken, result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取用户Token
     */
    TokenService.prototype.loadCustomerToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var customerToken;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerToken = libs_utils_1.cacheUtil.get(libs_caches_1.appCache.customerToken);
                        if (!!customerToken) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getCustomerToken()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return TokenService;
}(base_service_1.BaseService));
exports.tokenService = new TokenService();
//# sourceMappingURL=token-service.js.map
