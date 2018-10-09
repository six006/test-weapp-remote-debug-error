"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../../tslib/tslib.js');
var mobx_1 = require('../../../../../../mobx/lib/mobx.js');
var BaseStore = /** @class */ (function () {
    function BaseStore() {
        // @ts-ignore
        this.__MOBX__ = true; // mobx autorun 中需要有取值的操作，才会触发监听
        /**
         * 注意：
         *  小程序 setData({key: value}) 中，如果 value 为 undefined，小程序会报错（主要 undefined 时，小程序不会更新原来存储在 key 中的值）
         *  而 start 中的值会被注入到 page 的 data 中，所以不要有 undefined
         *
         *  另外，函数相关的 ts 定义都存储在 wx.[同名函数] 的 namespace 中，如下面的 ParamPropSuccessParamPropUserInfo
         */
        this.userInfo = null;
        this.nopName = 'Hello NopCommerce';
        /**
         * 是否注册用户
         */
        this.isRegistered = false;
    }
    BaseStore.prototype.changeName = function () {
        this.nopName = '通过action来修改nopName的值';
    };
    tslib_1.__decorate([
        mobx_1.observable
    ], BaseStore.prototype, "__MOBX__", void 0);
    tslib_1.__decorate([
        mobx_1.observable
    ], BaseStore.prototype, "userInfo", void 0);
    tslib_1.__decorate([
        mobx_1.observable
    ], BaseStore.prototype, "nopName", void 0);
    tslib_1.__decorate([
        mobx_1.action.bound
    ], BaseStore.prototype, "changeName", null);
    tslib_1.__decorate([
        mobx_1.observable
    ], BaseStore.prototype, "isRegistered", void 0);
    return BaseStore;
}());
exports.BaseStore = BaseStore;
//# sourceMappingURL=base-store.js.map
