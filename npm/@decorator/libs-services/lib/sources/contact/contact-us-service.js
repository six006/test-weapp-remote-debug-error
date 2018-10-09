"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var contact_us_api_url_1 = require('./contact-us-api-url.js');
var ContactUsService = /** @class */ (function (_super) {
    tslib_1.__extends(ContactUsService, _super);
    function ContactUsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 联系我们
     * @param forceRefresh
     */
    ContactUsService.prototype.contactUs = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + contact_us_api_url_1.contactUsApiUrl.contactUs;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 联系我们详情页
     * @param forceRefresh
     */
    ContactUsService.prototype.contactDetail = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + contact_us_api_url_1.contactUsApiUrl.contactDetail;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ContactUsService;
}(base_service_1.BaseService));
//# sourceMappingURL=contact-us-service.js.map
