"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var cache_1 = require('../cache/index.js');
var security_1 = require('../security/index.js');
var libs_caches_1 = require('../../../../libs-caches/lib/index.js');
var libs_models_1 = require('../../../../libs-models/lib/index.js');
var HttpUtil = /** @class */ (function () {
    function HttpUtil() {
    }
    HttpUtil.prototype.getAsync = function (url, header) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.buildRequestAsync('GET', url, {}, header)];
            });
        });
    };
    HttpUtil.prototype.postAsync = function (url, body, header) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.buildRequestAsync('POST', url, body, header)];
            });
        });
    };
    HttpUtil.prototype.putAsync = function (url, body, header) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.buildRequestAsync('PUT', url, body, header)];
            });
        });
    };
    HttpUtil.prototype.delAsync = function (url, header) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.buildRequestAsync('DELETE', url, {}, header)];
            });
        });
    };
    /**
     * 构建Http请求
     * @param method    - 请求方式GET,POST,PUT,DELETE
     * @param url       - 请求URL
     * @param body      - 请求Body
     * @param header    - 请求Header
     * @returns {Promise}
     */
    HttpUtil.prototype.buildRequestAsync = function (method, url, body, header) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!url) {
                            resolve(null);
                        }
                        // 1.header
                        if (!header) {
                            header = {
                                'Content-Type': method === 'GET' ? 'application/json; charset=utf-8' : 'application/x-www-form-urlencoded',
                                'Accept': 'application/json'
                            };
                            // Authorization
                            var customerToken = cache_1.cacheUtil.get(libs_caches_1.appCache.customerToken);
                            if (customerToken) {
                                var customerId = customerToken.customerId;
                                var deviceId = customerToken.deviceId;
                                var token = customerToken.token;
                                var salt = customerToken.salt;
                                var timestampString = new Date().toISOString();
                                var message = customerId + '&' + deviceId + '&' + token + '&' + timestampString;
                                var hash = security_1.securityUtil.hmacSHA256(message, salt);
                                header['Authorization'] = 'Bearer ' + customerId + ';' + deviceId + ';' + timestampString + ';' + hash;
                            }
                        }
                        // 2.body data
                        var data;
                        if (body) {
                            // if (typeof body === 'object') {
                            //     // notice form value is a json object so we don't need to use JSON.stringify()
                            //     // data = JSON.stringify(body);
                            //     data = body;
                            // }
                            // if (typeof body === 'string') {
                            //     data = body;
                            // }
                            data = body;
                        }
                        var param = {
                            url: url,
                            header: header,
                            method: method,
                            data: data,
                            success: function (res) {
                                if (res) {
                                    var model = res.data;
                                    var messageCode = this.prepareMessageCode(model.code);
                                    // const httpStatus = prepareHttpStatus(res.statusCode);
                                    if (messageCode === libs_models_1.MessageCode.OK) {
                                        var customerToken = model.customerToken;
                                        if (customerToken !== null && customerToken !== '' && customerToken !== undefined) {
                                            // 设置缓存
                                            cache_1.cacheUtil.set(libs_caches_1.appCache.customerToken, customerToken);
                                        }
                                        resolve(model.data);
                                    }
                                    else {
                                        // statusCode !== 2xx 全认为是错误
                                        console.log('ERROR: ', model.code, model.message, model.data);
                                        reject(new libs_models_1.MessageError(messageCode, res.data));
                                    }
                                }
                            },
                            fail: function (reason) {
                                reject(new libs_models_1.MessageError(libs_models_1.MessageCode.C9999, reason));
                            },
                            complete: function () {
                                console.log('wx.request请求完成');
                            }
                        };
                        wx.request(param);
                    })];
            });
        });
    };
    /**
     * 构建自定义MessageCode
     * @param messageCode 原始MessageCode返回的状态码
     */
    HttpUtil.prototype.prepareMessageCode = function (messageCode) {
        if (messageCode === 0) {
            return libs_models_1.MessageCode.OK;
        }
        if (messageCode === 1001) {
            return libs_models_1.MessageCode.C1001;
        }
        if (messageCode === 1010) {
            return libs_models_1.MessageCode.C1010;
        }
        if (messageCode === 1020) {
            return libs_models_1.MessageCode.C1020;
        }
        if (messageCode === 1030) {
            return libs_models_1.MessageCode.C1030;
        }
        if (messageCode === 1031) {
            return libs_models_1.MessageCode.C1031;
        }
        return libs_models_1.MessageCode.C9999;
    };
    return HttpUtil;
}());
exports.httpUtil = new HttpUtil();
//# sourceMappingURL=http-util.js.map
