"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var affiliate_api_url_1 = require('./affiliate-api-url.js');
var AffiliateService = /** @class */ (function (_super) {
    tslib_1.__extends(AffiliateService, _super);
    function AffiliateService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 推广
     * @param command
     * @param forceRefresh
     */
    AffiliateService.prototype.affiliate = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + affiliate_api_url_1.affiliateApiUrl.affiliate;
                        if (command) {
                            url = url.concat(libs_utils_1.urlUtil.toUrl(command));
                        }
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return AffiliateService;
}(base_service_1.BaseService));
exports.AffiliateService = AffiliateService;
exports.affiliateService = new AffiliateService();
//# sourceMappingURL=affiliate-service.js.map
