"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var praise_api_url_1 = require('./praise-api-url.js');
var base_service_1 = require('../base-service.js');
var PraiseService = /** @class */ (function (_super) {
    tslib_1.__extends(PraiseService, _super);
    function PraiseService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 口碑频道页
     * @param command
     * @param forceRefresh
     */
    PraiseService.prototype.praiseIndex = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + praise_api_url_1.praiseApiUrl.praise;
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
     * 口碑详情
     * @param praiseItemId
     * @param forceRefresh
     */
    PraiseService.prototype.praiseDetail = function (praiseItemId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + praise_api_url_1.praiseApiUrl.praiseDetail, praiseItemId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 首页口碑
     * @param pictureSize
     */
    PraiseService.prototype.homePagePraise = function (pictureSize) {
        if (pictureSize === void 0) { pictureSize = 300; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + praise_api_url_1.praiseApiUrl.homePagePraise;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return PraiseService;
}(base_service_1.BaseService));
exports.praiseService = new PraiseService();
//# sourceMappingURL=praise-service.js.map
