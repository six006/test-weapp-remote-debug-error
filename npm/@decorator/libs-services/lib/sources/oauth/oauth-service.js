"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var libs_caches_1 = require('../../../../libs-caches/lib/index.js');
var base_service_1 = require('../base-service.js');
var oauth_api_url_1 = require('./oauth-api-url.js');
/**
 * OAuth 服务
 */
var OAuthService = /** @class */ (function (_super) {
    tslib_1.__extends(OAuthService, _super);
    function OAuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取Token
     */
    OAuthService.prototype.getTokenAsync = function (username, password) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, header, data, token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = oauth_api_url_1.oauthApiUrl.token;
                        header = {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        };
                        data = libs_utils_1.formUtil.parse({
                            grant_type: 'password',
                            username: username,
                            password: password
                        });
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url, data, header)];
                    case 1:
                        token = _a.sent();
                        // 设置缓存
                        libs_utils_1.cacheUtil.set(libs_caches_1.appCache.authenticationToken, token);
                        return [2 /*return*/, token];
                }
            });
        });
    };
    /**
     * 加载Token
     */
    OAuthService.prototype.loadToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var authenticationToken;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authenticationToken = libs_utils_1.cacheUtil.get(libs_caches_1.appCache.authenticationToken);
                        if (!!authenticationToken) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTokenAsync()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return OAuthService;
}(base_service_1.BaseService));
exports.OAuthService = OAuthService;
//# sourceMappingURL=oauth-service.js.map
