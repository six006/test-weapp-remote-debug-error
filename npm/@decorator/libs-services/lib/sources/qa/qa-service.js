"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var qa_api_url_1 = require('./qa-api-url.js');
var base_service_1 = require('../base-service.js');
var QaService = /** @class */ (function (_super) {
    tslib_1.__extends(QaService, _super);
    function QaService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 问答频道页
     * @param command
     * @param forceRefresh
     */
    QaService.prototype.qaIndex = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + qa_api_url_1.qaApiUrl.qa;
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
     * 问答详情
     * @param qaItemId
     * @param forceRefresh
     */
    QaService.prototype.qaDetail = function (qaItemId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + qa_api_url_1.qaApiUrl.qaDetail, qaItemId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 首页问答
     */
    QaService.prototype.homePageQa = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + qa_api_url_1.qaApiUrl.homePageQa;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 我的问答页
     * @param command
     * @param forceRefresh
     */
    QaService.prototype.customerQa = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + qa_api_url_1.qaApiUrl.customerQa;
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
     * 新增问答(post)
     * @param model
     * @param forceRefresh
     */
    QaService.prototype.qaPost = function (model, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + qa_api_url_1.qaApiUrl.qaPost;
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url, model)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 新增回答(post)
     * @param model
     * @param forceRefresh
     */
    QaService.prototype.qaReply = function (model, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + qa_api_url_1.qaApiUrl.qaReply;
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url, model)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 问答搜索
     * @param keywords
     */
    QaService.prototype.qaSearch = function (keywords) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + qa_api_url_1.qaApiUrl.qaSearch;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ keywords: keywords }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return QaService;
}(base_service_1.BaseService));
exports.qaService = new QaService();
//# sourceMappingURL=qa-service.js.map
