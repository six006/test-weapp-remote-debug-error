"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('../../../../../@six006/lodash/lodash.js');
var DialogUtil = /** @class */ (function () {
    function DialogUtil() {
    }
    /**
     * 2.0 success
     */
    DialogUtil.prototype.success = function (options) {
        return new Promise(function (resolve, reject) {
            var toastParam = {
                title: '操作成功',
                duration: 2000,
                icon: 'success',
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                },
                complete: null
            };
            if (_.isObject(options)) {
                var param_1 = options;
                if (param_1.message) {
                    toastParam.title = param_1.message;
                }
                if (param_1.duration) {
                    toastParam.duration = param_1.duration;
                }
                if (param_1.handler) {
                    toastParam.success = function (res) {
                        resolve(res);
                        param_1.handler(function () { return wx.hideToast(); });
                    };
                }
            }
            else {
                if (!_.isEmpty(options)) {
                    var param = options;
                    toastParam.title = param;
                }
            }
            wx.showToast(toastParam);
        });
    };
    /**
     * 2.1.loading
     */
    DialogUtil.prototype.loading = function (options) {
        return new Promise(function (resolve, reject) {
            var toastParam = {
                title: '正在加载',
                duration: 10000,
                icon: 'loading',
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                },
                complete: null
            };
            if (_.isObject(options)) {
                var param_2 = options;
                if (param_2.message) {
                    toastParam.title = param_2.message;
                }
                if (param_2.duration) {
                    toastParam.duration = param_2.duration;
                }
                if (param_2.handler) {
                    toastParam.success = function (res) {
                        resolve(res);
                        param_2.handler(function () { return wx.hideToast(); });
                    };
                }
            }
            else {
                if (!_.isEmpty(options)) {
                    var param = options;
                    toastParam.title = param;
                }
            }
            wx.showToast(toastParam);
        });
    };
    /**
     * 2.2. hide loading
     */
    DialogUtil.prototype.hideLoading = function () {
        wx.hideToast();
    };
    /**
     * 3.1 alert
     */
    DialogUtil.prototype.alert = function (options) {
        return new Promise(function (resolve, reject) {
            wx.showModal({
                title: options && options.title || '',
                content: options && options.message || '',
                showCancel: false,
                confirmText: options && options.confirmText || '确定',
                success: resolve,
                fail: reject,
                complete: null
            });
        });
    };
    /**
     * 3.2 confirm
     */
    DialogUtil.prototype.confirm = function (options) {
        return new Promise(function (resolve, reject) {
            wx.showModal({
                title: options && options.title || '操作提示',
                content: options && options.message || '您确定要操作吗?',
                showCancel: true,
                cancelText: options && options.cancelText || '取消',
                confirmText: options && options.confirmText || '确定',
                success: resolve,
                fail: reject,
                complete: null
            });
        });
    };
    /**
     * 4.actionSheet
     */
    DialogUtil.prototype.actionSheet = function (items, color) {
        if (color === void 0) { color = '#E64340'; }
        return new Promise(function (resolve, reject) {
            wx.showActionSheet({
                itemList: items,
                itemColor: color,
                success: function (res) {
                    resolve(res);
                },
                fail: reject,
                complete: null
            });
        });
    };
    return DialogUtil;
}());
exports.DialogUtil = DialogUtil;
exports.dialogUtil = new DialogUtil();
//# sourceMappingURL=dialog-util.js.map
