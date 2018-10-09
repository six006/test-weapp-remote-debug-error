"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var search_api_url_1 = require('./search-api-url.js');
var SearchService = /** @class */ (function (_super) {
    tslib_1.__extends(SearchService, _super);
    function SearchService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 搜索
     * @param keywords
     */
    SearchService.prototype.searchAll = function (keywords) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + search_api_url_1.searchApiUrl.searchAll;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ keywords: keywords }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return SearchService;
}(base_service_1.BaseService));
exports.searchService = new SearchService();
//# sourceMappingURL=search-service.js.map
