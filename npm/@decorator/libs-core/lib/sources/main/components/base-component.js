"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 组件基类
 */
var BaseComponent = /** @class */ (function () {
    function BaseComponent(defaultData) {
        this.data = defaultData;
    }
    /**
     * 对 setData 的封装
     */
    BaseComponent.prototype.setState = function (data, callback) {
        return this.setData(data, callback);
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base-component.js.map
