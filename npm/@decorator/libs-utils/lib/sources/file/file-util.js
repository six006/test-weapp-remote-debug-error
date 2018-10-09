"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var libs_models_1 = require('../../../../libs-models/lib/index.js');
var wxp_1 = require('../../../../../@six006/wxp/lib/index.js');
var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    /**
     * 1.1 获取图片
     */
    FileUtil.prototype.chooseImageAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, wxp_1.wxp.chooseImage({})];
            });
        });
    };
    /**
     * 1.2 上传文件
     *
     * url:         开发者服务器 url
     * filePath:    要上传文件资源的路径
     * name:        文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     * header:      HTTP 请求 Header, header 中不能设置 Referer
     * formData:    HTTP 请求中其他额外的 form data
     */
    FileUtil.prototype.uploadAsync = function (url, filePath, name, header, formData) {
        if (name === void 0) { name = 'file'; }
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var result, httpStatus, ex_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (header) {
                            header = {
                                'Content-Type': 'multipart/form-data',
                                'Accept': 'application/json'
                            };
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, wxp_1.wxp.uploadFile({
                                url: url,
                                filePath: filePath,
                                name: name,
                                header: header,
                                formData: formData
                            })];
                    case 2:
                        result = _a.sent();
                        httpStatus = this.prepareHttpStatus(result.statusCode);
                        if (httpStatus === libs_models_1.HttpStatus.success) {
                            // 注意：res.data 为string类型不是object类型，需要转成Json格式
                            return [2 /*return*/, JSON.parse(result.data)];
                        }
                        else {
                            // statusCode !== 2xx 全认为是错误
                            console.log('HTTP ERROR: ', result.statusCode, result.data);
                            throw new libs_models_1.HttpError(httpStatus, result.data);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        throw new libs_models_1.HttpError(libs_models_1.HttpStatus.error, ex_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 构建自定义HttpStatus
     * @param statusCode 原始http返回的状态码
     */
    FileUtil.prototype.prepareHttpStatus = function (statusCode) {
        if (statusCode === 200 ||
            statusCode === 201 ||
            statusCode === 202 ||
            statusCode === 203 ||
            statusCode === 204 ||
            statusCode === 205 ||
            statusCode === 206) {
            return libs_models_1.HttpStatus.success;
        }
        if (statusCode === 401) {
            return libs_models_1.HttpStatus.unauthorized;
        }
        if (statusCode === 404) {
            return libs_models_1.HttpStatus.pageNotFound;
        }
        return libs_models_1.HttpStatus.error;
    };
    return FileUtil;
}());
exports.fileUtil = new FileUtil();
//# sourceMappingURL=file-util.js.map
