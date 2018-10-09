"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../../tslib/tslib.js');
var _ = require('../../../../../../@six006/lodash/lodash.js');
var COMPONENT_NATIVE_LIFE_CYCLES = ['created', 'attached', 'ready', 'moved', 'detached'];
var COMPONENT_NATIVE_PROPS = ['externalClasses', 'properties', 'data', 'options', 'relations', 'behaviors', 'methods'];
/**
 * 组件装饰器
 */
function $Component(options) {
    if (options === void 0) { options = {}; }
    return function (ComponentCtor) {
        var componentInstance = _.toPlainObject(new ComponentCtor());
        // console.log('component instance before decorator:', Object.assign({}, componentInstance));
        // 1.app 
        var app = getApp();
        componentInstance.app = app;
        // 1.2.全局对象store
        componentInstance.store = app.store;
        // 2.properties
        if (componentInstance.properties) {
            _.mapKeys(componentInstance.properties, function (value, key) {
                if (!_.isPlainObject(value)) {
                    value = { type: value };
                }
                // prop值变化通用处理函数：onPropUpdate
                if (componentInstance.onPropUpdate) {
                    var oldObserver_1 = value['observer'];
                    value['observer'] = function (newValue, oldValue) {
                        this.onPropUpdate(key, newValue, oldValue);
                        if (typeof oldObserver_1 === 'function') {
                            oldObserver_1.apply(this, arguments);
                        }
                    };
                }
                componentInstance.properties[key] = value;
                return {};
            });
        }
        // 3.methods
        var methods = {};
        // 3.1 mixins
        componentMixin(componentInstance, options);
        // 3.2 小程序组件忽略的字段
        var fields = {};
        _.mapKeys(componentInstance, function (value, key) {
            if (!COMPONENT_NATIVE_LIFE_CYCLES.includes(key) && _.isFunction(value)) {
                methods[key] = value;
                delete componentInstance[key];
            }
            else if (!COMPONENT_NATIVE_PROPS.includes(key)) {
                var desc = Object.getOwnPropertyDescriptor(componentInstance, key);
                if (desc) {
                    fields[key] = desc;
                }
            }
            return {};
        });
        componentInstance.methods = Object.assign({}, componentInstance.methods, methods);
        // 小程序组件忽略的字段，在组件created的时候赋值
        if (Object.keys(fields).length) {
            var oldCreated_1 = componentInstance.created;
            componentInstance.created = function () {
                Object.defineProperties(this, fields);
                if (oldCreated_1) {
                    oldCreated_1.apply(this, arguments);
                }
            };
        }
        console.log('component instance after decorator', ComponentCtor.name, componentInstance);
        Component(componentInstance);
    };
}
exports.$Component = $Component;
/**
 * 将Component实例方法与Mixin中同名方法合并成一个方法
 *
 * 注意：先执行原始方法,再执行mixin中的方法
 *
 * @param componentInstance
 * @param options
 */
function componentMixin(componentInstance, options) {
    var mixins = options.mixins || [];
    // 2.遍历mixins将同名函数合并
    mixins.forEach(function (src) {
        if (!src || !_.isObject(src))
            return;
        Object.getOwnPropertyNames(src).forEach(function (name) {
            var mixinProp = Object.getOwnPropertyDescriptor(src, name);
            var componentInstanceProp = Object.getOwnPropertyDescriptor(componentInstance, name);
            if (!componentInstanceProp) {
                Object.defineProperty(componentInstance, name, mixinProp);
            }
            else {
                if (_.isFunction(componentInstanceProp.value) && _.isFunction(mixinProp.value)) {
                    Object.defineProperty(componentInstance, name, tslib_1.__assign({}, componentInstanceProp, { value: function () {
                            componentInstanceProp.value.apply(this, arguments);
                            mixinProp.value.apply(this, arguments);
                        } }));
                }
                else {
                    console.warn("\u65E0\u6CD5\u5C06 %o \u5BF9\u8C61 mixin \u5230 %o \u5BF9\u8C61\u4E2D\uFF0C%o \u5B57\u6BB5\u503C\u7684\u7C7B\u578B\u4E0D\u4E00\u81F4", src, componentInstance, name);
                }
            }
        });
    });
}
//# sourceMappingURL=$component.js.map
