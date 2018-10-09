"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var passport_api_url_1 = require('./passport-api-url.js');
/**
 * 护照服务(登录,注册,退出,忘记密码)
 */
var PassportService = /** @class */ (function (_super) {
    tslib_1.__extends(PassportService, _super);
    function PassportService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }


    /**
     * 用户登录
     * @param model
     * @param forceRefresh
     */
    PassportService.prototype.login = function (model, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + passport_api_url_1.passportApiUrl.login;
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url, model)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };

    return PassportService;
}(base_service_1.BaseService));
exports.passportService = new PassportService();
//# sourceMappingURL=passport-service.js.map
