"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var case_api_url_1 = require('./case-api-url.js');
var CaseService = /** @class */ (function (_super) {
    tslib_1.__extends(CaseService, _super);
    function CaseService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 案例频道页
     * @param command
     * @param forceRefresh
     */
    CaseService.prototype.caseIndex = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + case_api_url_1.caseApiUrl.case;
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
     * 案例详情
     * @param caseItemId
     * @param forceRefresh
     */
    CaseService.prototype.caseDetail = function (caseItemId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + case_api_url_1.caseApiUrl.caseDetail, caseItemId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 首页案例
     * @param pictureSize
     */
    CaseService.prototype.homePageCase = function (pictureSize) {
        if (pictureSize === void 0) { pictureSize = 300; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + case_api_url_1.caseApiUrl.homePageCase;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 案例搜索
     * @param keywords
     */
    CaseService.prototype.caseSearch = function (keywords) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + case_api_url_1.caseApiUrl.caseSearch;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ keywords: keywords }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return CaseService;
}(base_service_1.BaseService));
exports.CaseService = CaseService;
exports.caseService = new CaseService();
//# sourceMappingURL=case-service.js.map
