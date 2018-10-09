"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var person_api_url_1 = require('./person-api-url.js');
var base_service_1 = require('../base-service.js');
var PersonService = /** @class */ (function (_super) {
    tslib_1.__extends(PersonService, _super);
    function PersonService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 人物频道页
     * @param command
     * @param forceRefresh
     */
    PersonService.prototype.personIndex = function (command, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + person_api_url_1.personApiUrl.person;
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
     * 人物详情
     * @param personItemId
     * @param forceRefresh
     */
    PersonService.prototype.personDetail = function (personItemId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = libs_utils_1.stringUtil.format("" + this.host + person_api_url_1.personApiUrl.personDetail, personItemId);
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 首页人物
     * @param pictureSize
     */
    PersonService.prototype.homePagePerson = function (pictureSize) {
        if (pictureSize === void 0) { pictureSize = 300; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + person_api_url_1.personApiUrl.homePagePerson;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 人物搜索
     * @param keywords
     */
    PersonService.prototype.personSearch = function (keywords) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + person_api_url_1.personApiUrl.personSearch;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ keywords: keywords }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return PersonService;
}(base_service_1.BaseService));
//# sourceMappingURL=person-service.js.map
