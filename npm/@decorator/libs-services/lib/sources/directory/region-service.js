"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var region_api_url_1 = require('./region-api-url.js');
var RegionService = /** @class */ (function (_super) {
    tslib_1.__extends(RegionService, _super);
    function RegionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegionService.prototype.GetAllRegionByCode = function (code, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + region_api_url_1.regionApiUrl.getAllRegionByCode;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ code: code }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RegionService.prototype.GetAllProvinces = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + region_api_url_1.regionApiUrl.getAllProvinces;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RegionService.prototype.GetAllCities = function (provinceCode, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + region_api_url_1.regionApiUrl.getAllCities;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ provinceCode: provinceCode }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RegionService.prototype.GetAllAreas = function (cityCode, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + region_api_url_1.regionApiUrl.getAllAreas;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ cityCode: cityCode }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return RegionService;
}(base_service_1.BaseService));
exports.regionService = new RegionService();
//# sourceMappingURL=region-service.js.map
