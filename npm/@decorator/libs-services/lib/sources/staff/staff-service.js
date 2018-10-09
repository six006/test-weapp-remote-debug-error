"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var staff_api_url_1 = require('./staff-api-url.js');
var StaffService = /** @class */ (function (_super) {
    tslib_1.__extends(StaffService, _super);
    function StaffService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 客服
     * @param forceRefresh
     */
    StaffService.prototype.staffIndex = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + staff_api_url_1.staffApiUrl.staff;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 联系我们客服
     * @param forceRefresh
     */
    StaffService.prototype.contactStaff = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + staff_api_url_1.staffApiUrl.contactStaff;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 客服详情
     * @param staffItemId
     * @param forceRefresh
     */
    StaffService.prototype.staffDetail = function (staffItemId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + staff_api_url_1.staffApiUrl.staffImage, staffItemId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return StaffService;
}(base_service_1.BaseService));
exports.staffService = new StaffService();
//# sourceMappingURL=staff-service.js.map
