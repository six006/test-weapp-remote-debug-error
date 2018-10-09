"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var reserve_api_url_1 = require('./reserve-api-url.js');
var base_service_1 = require('../base-service.js');
var ReserveService = /** @class */ (function (_super) {
    tslib_1.__extends(ReserveService, _super);
    function ReserveService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 预约列表
     * @param command
     * @param forceRefresh
     */
    ReserveService.prototype.reserveList = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + reserve_api_url_1.reserveApiUrl.reserve;
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
    /**
     * 预约详情
     * @param reserveId
     * @param forceRefresh
     */
    ReserveService.prototype.reserveDetail = function (reserveId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + reserve_api_url_1.reserveApiUrl.reserveDetail, reserveId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 我的预约
     * @param command
     * @param forceRefresh
     */
    ReserveService.prototype.customerReserve = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + reserve_api_url_1.reserveApiUrl.customerReserve;
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
    /**
     * 取消预约
     * @param reserveId
     * @param forceRefresh
     */
    ReserveService.prototype.cancelReserve = function (reserveId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + reserve_api_url_1.reserveApiUrl.cancelReserve;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ reserveId: reserveId }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 首页预约
     */
    ReserveService.prototype.homePageReserve = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + reserve_api_url_1.reserveApiUrl.homePageReserve;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ReserveService;
}(base_service_1.BaseService));
exports.reserveService = new ReserveService();
//# sourceMappingURL=reserve-service.js.map
