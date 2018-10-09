"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var ImageUtil = /** @class */ (function () {
    function ImageUtil() {
    }
    /**
     * 从本地相册选择图片或使用相机拍照
     */
    ImageUtil.prototype.chooseImage = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wx.chooseImage(tslib_1.__assign({}, options, { success: function (res) {
                                resolve(res);
                            },
                            fail: function (res) {
                                reject(res);
                            } }));
                    })];
            });
        });
    };
    /**
     * 预览图片
     */
    ImageUtil.prototype.previewImage = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wx.previewImage(tslib_1.__assign({}, options, { success: function (res) {
                                resolve(res);
                            },
                            fail: function (res) {
                                reject(new Error());
                            } }));
                    })];
            });
        });
    };
    /**
     * 获取图片信息
     */
    ImageUtil.prototype.getImageInfo = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wx.getImageInfo(tslib_1.__assign({}, options, { success: function (res) {
                                resolve(res);
                            },
                            fail: function (res) {
                                reject(new Error());
                            } }));
                    })];
            });
        });
    };
    /**
     * 从本地相册选择图片或使用相机拍照
     */
    ImageUtil.prototype.saveImageToPhotosAlbum = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        wx.saveImageToPhotosAlbum(tslib_1.__assign({}, options, { success: function (res) {
                                resolve(res);
                            },
                            fail: function (res) {
                                reject(new Error());
                            } }));
                    })];
            });
        });
    };
    return ImageUtil;
}());
exports.imageUtil = new ImageUtil();
//# sourceMappingURL=image-util.js.map
