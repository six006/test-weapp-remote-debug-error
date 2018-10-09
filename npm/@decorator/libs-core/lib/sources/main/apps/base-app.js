"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libs_routes_1 = require('../../../../../libs-routes/lib/index.js');
/**
 * App基类
 */
var BaseApp = /** @class */ (function () {
    function BaseApp() {
        /**
         * 路由集合
         */
        this.$routes = libs_routes_1.routes;
    }
    /**
     * 返回上 1/N 级页面，通过 delta 指定要返回的层级，默认 1
     *
     * @param {number} [delta=1] 要返回的层级
     * @returns
     * @memberof BaseApp
     */
    BaseApp.prototype.$back = function (delta) {
        if (delta === void 0) { delta = 1; }
        return wx.navigateBack({ delta: delta });
    };
    return BaseApp;
}());
exports.BaseApp = BaseApp;
//# sourceMappingURL=base-app.js.map
