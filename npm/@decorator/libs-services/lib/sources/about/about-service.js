"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var about_api_url_1 = require('./about-api-url.js');
var AboutService = /** @class */ (function (_super) {
    tslib_1.__extends(AboutService, _super);
    function AboutService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 关于我们频道页
     *
     * @param command
     * @param forceRefresh
     */
    AboutService.prototype.aboutIndex = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + about_api_url_1.aboutApiUrl.about;
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
     * 关于我们详情
     *
     * @param aboutItemId
     * @param forceRefresh
     */
    AboutService.prototype.aboutDetail = function (aboutItemId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + about_api_url_1.aboutApiUrl.aboutDetail, aboutItemId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 首页关于我们
     *
     * @param pictureSize
     */
    AboutService.prototype.homePageAbout = function (pictureSize) {
        if (pictureSize === void 0) { pictureSize = 300; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + about_api_url_1.aboutApiUrl.homePageAbout;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return AboutService;
}(base_service_1.BaseService));
exports.aboutService = new AboutService();
//# sourceMappingURL=about-service.js.map
