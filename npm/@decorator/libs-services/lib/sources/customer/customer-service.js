"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var customer_api_url_1 = require('./customer-api-url.js');
var CustomerService = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerService, _super);
    function CustomerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 下载商品页
     * @param forceRefresh
     */
    CustomerService.prototype.downloadableProducts = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + customer_api_url_1.customerApiUrl.downloadableProducts;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 到货提醒页
     * @param forceRefresh
     */
    CustomerService.prototype.customerSubscriptions = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + customer_api_url_1.customerApiUrl.customerSubscriptions;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return CustomerService;
}(base_service_1.BaseService));
exports.customerService = new CustomerService();
//# sourceMappingURL=customer-service.js.map
