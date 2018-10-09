"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_utils_1 = require('../../../../libs-utils/lib/index.js');
var base_service_1 = require('../base-service.js');
var address_api_url_1 = require('./address-api-url.js');
var AddressService = /** @class */ (function (_super) {
    tslib_1.__extends(AddressService, _super);
    function AddressService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 地址列表
     *
     * @param command
     * @param forceRefresh
     */
    AddressService.prototype.addressIndex = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + address_api_url_1.addressApiUrl.address;
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 单条地址详情
     *
     * @param addressId
     * @param forceRefresh
     */
    AddressService.prototype.addressDetail = function (addressId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + address_api_url_1.addressApiUrl.addressDetail;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ addressId: addressId }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.getAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 新增地址(post)
     * @param model
     * @param forceRefresh
     */
    AddressService.prototype.addressCreatePost = function (model, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + address_api_url_1.addressApiUrl.addressCreate;
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url, model)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 编辑地址(post)
     *
     * @param model
     * @param forceRefresh
     */
    AddressService.prototype.addressEditPost = function (model, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + address_api_url_1.addressApiUrl.addressEdit;
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url, model)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 默认地址
     *
     * @param addressId
     * @param forceRefresh
     */
    AddressService.prototype.addressDefaultPost = function (addressId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + address_api_url_1.addressApiUrl.addressDefault;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ addressId: addressId }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 删除地址
     * @param addressId
     * @param forceRefresh
     *
     */
    AddressService.prototype.addressDeletePost = function (addressId, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = true; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var url, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "" + this.host + address_api_url_1.addressApiUrl.addressDelete;
                        url = url.concat(libs_utils_1.urlUtil.toUrl({ addressId: addressId }));
                        return [4 /*yield*/, libs_utils_1.httpUtil.postAsync(url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 删除地址(列表与详细页删除公用方法)
     *
     * @param addressId
     * @param forceRefresh
     */
    AddressService.prototype.addressDelete = function (addressId, page) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var result, ex_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!page) {
                            page = libs_utils_1.pageUtil.currentPage();
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        page.onSubmitBefore();
                        return [4 /*yield*/, this.addressDeletePost(addressId)];
                    case 2:
                        result = _a.sent();
                        page.onSubmitAfter(result);
                        // if (result.success) {
                        //     AddressEvent.publish(AddressEvent.addressChanged, result.data);
                        // }
                        return [2 /*return*/, result];
                    case 3:
                        ex_1 = _a.sent();
                        page.onSubmitAfter(ex_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AddressService;
}(base_service_1.BaseService));
exports.AddressService = AddressService;
exports.addressService = new AddressService();
//# sourceMappingURL=address-service.js.map
