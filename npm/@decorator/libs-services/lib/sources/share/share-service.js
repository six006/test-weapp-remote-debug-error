"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var share_api_url_1 = require('./share-api-url.js');
var base_service_1 = require('../base-service.js');
var ShareService = /** @class */ (function (_super) {
    tslib_1.__extends(ShareService, _super);
    function ShareService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 获取分享
     *
     * @param entityName
     * @param entityId
     * @param forceRefresh
     */
    ShareService.prototype.share = function (entityName, entityId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + share_api_url_1.shareApiUrl.share;
                        url = libs_utils_1.stringUtil.format(url, entityName, entityId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获取分享
     *
     * @param scene
     * @param forceRefresh
     */
    ShareService.prototype.shareScene = function (scene, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + share_api_url_1.shareApiUrl.shareScene;
                        url = libs_utils_1.stringUtil.format(url, scene);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ShareService;
}(base_service_1.BaseService));
//# sourceMappingURL=share-service.js.map
