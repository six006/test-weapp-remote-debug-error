"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var community_api_url_1 = require('./community-api-url.js');
var CommunityService = /** @class */ (function (_super) {
    tslib_1.__extends(CommunityService, _super);
    function CommunityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 小区频道页
     * @param command
     * @param forceRefresh
     */
    CommunityService.prototype.communityIndex = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + community_api_url_1.communityApiUrl.community;
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
     * 小区详情
     * @param communityId
     * @param forceRefresh
     */
    CommunityService.prototype.communityDetail = function (communityItemId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + community_api_url_1.communityApiUrl.communityDetail, communityItemId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 首页小区
     * @param pictureSize
     */
    CommunityService.prototype.homePageCommunity = function (pictureSize) {
        if (pictureSize === void 0) { pictureSize = 300; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + community_api_url_1.communityApiUrl.homePageCommunity;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 小区搜索
     * @param keywords
     */
    CommunityService.prototype.communitySearch = function (keywords) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + community_api_url_1.communityApiUrl.communitySearch;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ keywords: keywords }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return CommunityService;
}(base_service_1.BaseService));
exports.CommunityService = CommunityService;
exports.communityService = new CommunityService();
//# sourceMappingURL=community-service.js.map
