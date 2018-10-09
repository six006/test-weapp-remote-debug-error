"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libs_utils_1 = require('../../../libs-utils/lib/index.js');
/**
 * 事件基类
 */
var BaseEvent = /** @class */ (function () {
    function BaseEvent() {
    }
    BaseEvent.prototype.getApp = function () {
        var app = getApp();
        return app;
    };
    /**
     * 发布事件
     * @param data
     */
    BaseEvent.prototype.publish = function (name, data) {
        var app = this.getApp();
        if (name === this.eventName) {
            // 1.1 通知页面
            app.emitterEvent.emit(name, data);
        }
    };
    /**
     * 订阅事件
     * @param data
     */
    BaseEvent.prototype.subscribe = function (name, callback) {
        var app = this.getApp();
        var page = libs_utils_1.pageUtil.currentPage();
        if (name === this.eventName) {
            // app.emitterEvent.on(name, callback.bind(page), page);
            app.emitterEvent.on(name, callback, page);
        }
    };
    /**
     * 取消订阅
     */
    BaseEvent.prototype.cancel = function (name, callback) {
        var app = this.getApp();
        var page = libs_utils_1.pageUtil.currentPage();
        if (name === this.eventName) {
            // app.emitterEvent.off(name, callback.bind(page), page);
            app.emitterEvent.off(name, callback, page);
        }
    };
    return BaseEvent;
}());
exports.BaseEvent = BaseEvent;
//# sourceMappingURL=base-event.js.map
