"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../../tslib/tslib.js');
var _ = require('../../../../../../@six006/lodash/lodash.js');
var mobx_1 = require('../../../../../../mobx/lib/mobx.js');
/**
 * 页面装饰器
 * @param options $PageOptions
 */
function $Page(options) {
    if (options === void 0) { options = {}; }
    return function (PageCtor) {
        var app = getApp();
        var pageInstance = _.toPlainObject(new PageCtor());
        // console.log('page instance before decorator:', Object.assign({}, pageInstance));
        // 1.app 
        if (!pageInstance.app) {
            pageInstance.app = getApp();
        }
        // 2.mixins
        pageMixin(pageInstance, options);
        // 3.lazySetData
        pageInstance.$lazySetData = options.lazySetData === undefined ? true : !!options.lazySetData;
        // 4.全局对象
        pageInstance.store = app.store || {};
        // console.log('page instance after decorator:', pageInstance);
        // 4.Page对象
        Page(pageInstance);
    };
}
exports.$Page = $Page;
/**
 * 将Page实例方法与Mixin中同名方法合并成一个方法
 *
 * 注意：先执行原始方法,再执行mixin中的方法
 *
 * @param pageInstance
 * @param options
 */
function pageMixin(pageInstance, options) {
    var dispose;
    var mixins = options.mixins || [];
    // 1.给mixins中添加onShow与onHide方法
    mixins.push({
        onShow: function () {
            if (this.$lazySetData && this.$lazySetDataStacks && this.$lazySetDataStacks.length) {
                var data_1 = {};
                var callbacks_1 = [];
                this.$lazySetDataStacks.forEach(function (it) {
                    data_1 = tslib_1.__assign({}, data_1, it[0]);
                    if (typeof it[1] === 'function') {
                        callbacks_1.push(it[1]);
                    }
                });
                this.$lazySetDataStacks.length = 0; // 清空队列
                this.setData(data_1, function () { return callbacks_1.forEach(function (cb) { return cb(); }); });
            }
            this.$visiable = true;
        },
        onHide: function () {
            this.$visiable = false;
        }
    });
    // 全局状态
    if (options.observe !== false) {
        mixins.push({
            onLoad: function () {
                var _this = this;
                dispose = mobx_1.autorun(function () {
                    var data;
                    if (_.isFunction(options.mapStoreToData)) {
                        data = options.mapStoreToData(pageInstance.store);
                    }
                    else {
                        data = mobx_1.toJS(pageInstance.store);
                        if (data.__MOBX__) {
                            delete data.constructor;
                            delete data.__MOBX__;
                        }
                    }
                    _this.setState(data);
                });
                // @ts-ignore mobx 4 没有 onError 了，放在 autorun 配置中，但 4 之前 autorun 有个 scope 配置
                if (dispose.onError) {
                    dispose.onError(function (e) { return console.error(e); });
                }
            },
            onUnload: function () {
                if (dispose) {
                    dispose();
                }
            }
        });
    }
    // 2.遍历mixins将同名函数合并
    mixins.forEach(function (src) {
        if (!src || !_.isObject(src))
            return;
        Object.getOwnPropertyNames(src).forEach(function (name) {
            var mixinProp = Object.getOwnPropertyDescriptor(src, name);
            var pageInstanceProp = Object.getOwnPropertyDescriptor(pageInstance, name);
            if (!pageInstanceProp) {
                Object.defineProperty(pageInstance, name, mixinProp);
            }
            else {
                if (_.isFunction(pageInstanceProp.value) && _.isFunction(mixinProp.value)) {
                    Object.defineProperty(pageInstance, name, tslib_1.__assign({}, pageInstanceProp, { value: function () {
                            pageInstanceProp.value.apply(this, arguments);
                            mixinProp.value.apply(this, arguments);
                        } }));
                }
                else {
                    console.warn("\u65E0\u6CD5\u5C06 %o \u5BF9\u8C61 mixin \u5230 %o \u5BF9\u8C61\u4E2D\uFF0C%o \u5B57\u6BB5\u503C\u7684\u7C7B\u578B\u4E0D\u4E00\u81F4", src, pageInstance, name);
                }
            }
        });
    });
}
//# sourceMappingURL=$page.js.map
