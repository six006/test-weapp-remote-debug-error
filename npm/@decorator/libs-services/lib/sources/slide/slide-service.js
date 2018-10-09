"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var slide_api_url_1 = require('./slide-api-url.js');
var SlideService = /** @class */ (function (_super) {
    tslib_1.__extends(SlideService, _super);
    function SlideService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 幻灯片详情
     * @param systemName
     * @param forceRefresh
     */
    SlideService.prototype.info = function (systemName, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + slide_api_url_1.slideApiUrl.slide, systemName);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return SlideService;
}(base_service_1.BaseService));
exports.slideService = new SlideService();
//# sourceMappingURL=slide-service.js.map
