"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var help_api_url_1 = require('./help-api-url.js');
var HelpService = /** @class */ (function (_super) {
    tslib_1.__extends(HelpService, _super);
    function HelpService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 帮助频道页
     * @param forceRefresh
     */
    HelpService.prototype.helpIndex = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + help_api_url_1.helpApiUrl.help;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 帮助列表页
     * @param helpCategoryId
     * @param command
     * @param forceRefresh
     */
    HelpService.prototype.helpList = function (helpCategoryId, command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + help_api_url_1.helpApiUrl.helpList, helpCategoryId);
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
     * 帮助详情
     * @param helpItemId
     * @param forceRefresh
     */
    HelpService.prototype.helpDetail = function (helpItemId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + help_api_url_1.helpApiUrl.helpDetail, helpItemId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 首页帮助
     * @param pictureSize
     */
    HelpService.prototype.homePageHelp = function (pictureSize) {
        if (pictureSize === void 0) { pictureSize = 300; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + help_api_url_1.helpApiUrl.homePageHelp;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 版主搜索
     * @param keywords
     */
    HelpService.prototype.helpSearch = function (keywords) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + help_api_url_1.helpApiUrl.helpSearch;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ keywords: keywords }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return HelpService;
}(base_service_1.BaseService));
exports.HelpService = HelpService;
exports.helpService = new HelpService();
//# sourceMappingURL=help-service.js.map
