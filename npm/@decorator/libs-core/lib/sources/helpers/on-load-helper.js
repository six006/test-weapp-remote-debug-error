"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libs_models_1 = require('../../../../libs-models/lib/index.js');
/**
 * onLoad事件前后帮助类
 */
var OnLoadHelper = /** @class */ (function () {
    function OnLoadHelper() {
    }
    OnLoadHelper.prototype.before = function (status) {
        if (status === void 0) { status = libs_models_1.ScreenStatus.loading; }
        this.setData({
            'pageContext.status': status
        });
    };
    /**
     * onLoad 事件之后
     *
     * @param {} result 获取数据结果
     * @param {} status 屏幕状态
     */
    OnLoadHelper.prototype.after = function (result, status) {
        if (status === void 0) { status = libs_models_1.ScreenStatus.normal; }
        if (result.success) {
            this.setData({
                'pageContext.status': status
            });
        }
        else {
            this.setData({
                'pageContext.status': libs_models_1.ScreenStatus.abnor,
                'pageContext.abnor': result.abnor
            });
        }
    };
    return OnLoadHelper;
}());
/**
 * onLoad事件前后设置的状态
 */
exports.onLoadHelper = new OnLoadHelper();
//# sourceMappingURL=on-load-helper.js.map
