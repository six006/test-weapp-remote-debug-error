"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var vote_api_url_1 = require('./vote-api-url.js');
var VoteService = /** @class */ (function (_super) {
    tslib_1.__extends(VoteService, _super);
    function VoteService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 我的收藏 - 案例
     * @param forceRefresh
     */
    VoteService.prototype.favoriteCases = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + vote_api_url_1.voteApiUrl.favoriteCases;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 我的收藏 - 设计师
     * @param forceRefresh
     */
    VoteService.prototype.favoritePerson = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + vote_api_url_1.voteApiUrl.favoritePerson;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 我的足迹 - 案例
     * @param forceRefresh
     */
    VoteService.prototype.recentlyViewCases = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + vote_api_url_1.voteApiUrl.recentlyViewCases;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 我的足迹 - 设计师
     * @param forceRefresh
     */
    VoteService.prototype.recentlyViewPerson = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + vote_api_url_1.voteApiUrl.recentlyViewPerson;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return VoteService;
}(base_service_1.BaseService));
exports.voteService = new VoteService();
//# sourceMappingURL=vote-service.js.map
