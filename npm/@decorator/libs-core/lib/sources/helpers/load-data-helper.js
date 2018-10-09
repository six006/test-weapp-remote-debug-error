"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libs_models_1 = require('../../../../libs-models/lib/index.js');
var _ = require('../../../../../@six006/lodash/lodash.js');
/**
 * 获取数据帮助类
 *
 * 获取数据前,获取数据后,获取数据成功,获取数据异常,获取数据为空
 */
var LoadDataHelper = /** @class */ (function () {
    function LoadDataHelper() {
    }
    /**
     * 1.获取数据前
     *
     * @param {PagerBarStatus} status
     */
    LoadDataHelper.prototype.before = function (status) {
        if (status === void 0) { status = libs_models_1.PagerBarStatus.reachBottom; }
        this.setData({
            'pagerBar.status': status
        });
        // wx.showNavigationBarLoading();
    };
    /**
     * 2.获取数据后
     *
     * @param {PagerBarStatus} status
     */
    LoadDataHelper.prototype.after = function (status) {
        if (status === void 0) { status = libs_models_1.PagerBarStatus.default; }
        this.setData({
            'pageContext.status': libs_models_1.ScreenStatus.normal,
            'pagerBar.status': status // 分页状态栏状态
        });
        // wx.hideNavigationBarLoading();
    };
    /**
     * 3.获取数据成功
     *
     * @returns {} items
     */
    LoadDataHelper.prototype.success = function (items) {
        var loadDataResult = {
            success: true
        };
        // 列表页结果(列表页有分页栏)
        if (items && _.isArray(items)) {
            if (items.length === 0) {
                loadDataResult.success = false;
                loadDataResult.abnor = libs_models_1.defaultAbnorEmpty;
                this.setData({
                    'pagerBar.status': libs_models_1.PagerBarStatus.abnor,
                    'pagerBar.abnor': libs_models_1.defaultAbnorEmpty
                });
            }
            else {
                this.setData({
                    'pagerBar.status': libs_models_1.PagerBarStatus.default
                });
            }
        }
        return loadDataResult;
    };
    /**
     * 4.获取数据异常
     *
     * @param ex
     * @returns {}
     */
    LoadDataHelper.prototype.error = function (ex) {
        var loadDataResult = {
            success: false,
            abnor: libs_models_1.defaultAbnor
        };
        if (ex instanceof libs_models_1.MessageError) {
            var abnor = {};
            if (ex.messageCode === libs_models_1.MessageCode.C1010) {
                abnor = libs_models_1.defaultAbnor404;
            }
            else if (ex.messageCode === libs_models_1.MessageCode.C1030) {
                abnor = libs_models_1.defaultAbnor500;
            }
            else if (ex.messageCode === libs_models_1.MessageCode.C1020) {
                abnor = libs_models_1.defaultAbnor401;
            }
            else {
                abnor = libs_models_1.defaultAbnorUnknown;
            }
            loadDataResult.abnor = abnor;
            this.setData({
                'pagerBar.status': libs_models_1.PagerBarStatus.abnor,
                'pagerBar.abnor': abnor
            });
        }
        return loadDataResult;
    };
    /**
     * 获取数据内容为最后一页
     */
    LoadDataHelper.prototype.lastPage = function () {
        this.setData({
            'pagerBar.status': libs_models_1.PagerBarStatus.lastPage,
        });
    };
    return LoadDataHelper;
}());
/**
 * 加载数据帮助类
 */
exports.loadDataHelper = new LoadDataHelper();
//# sourceMappingURL=load-data-helper.js.map
