"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePage = /** @class */ (function () {
    function BasePage(defaultData) {
        if (defaultData === void 0) { defaultData = {}; }
        /**
         * 延迟setData数组
         */
        this.$lazySetDataStacks = [];
        /**
         * 延迟setData
         */
        this.$lazySetData = true;
        /**
         * 当前页面是否显示
         */
        this.$visiable = false;
        this.data = Object.assign({}, defaultData);
    }
    /**
     * 获取当前 page 的 location 相关信息，包括当前 pathname 和 query 参数
     */
    // getLocation() {
    //     return new Location()
    // }
    /**
     * 对 setData 的封装(延迟更新)
     */
    BasePage.prototype.setState = function (data, callback) {
        if (this.$visiable || !this.$lazySetData) {
            this.setData(data, callback);
        }
        else {
            this.$lazySetDataStacks.push([data, callback]);
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=base-page.js.map
