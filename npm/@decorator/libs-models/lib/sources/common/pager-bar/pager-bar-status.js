"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 分页栏状态
 */
var PagerBarStatus;
(function (PagerBarStatus) {
    /**
     * 默认
     */
    PagerBarStatus["default"] = "default";
    /**
     * 搜索
     * @type {string}
     */
    PagerBarStatus["search"] = "search";
    /**
     * 下拉刷新
     * @type {string}
     */
    PagerBarStatus["pullDown"] = "pullDown";
    /**
     * 上拉刷新
     * @type {string}
     */
    PagerBarStatus["reachBottom"] = "reachBottom";
    /**
     * 最后一页
     * @type {string}
     */
    PagerBarStatus["lastPage"] = "lastPage";
    /**
     * 非正常结果
     *
     * 比如：空数据,请求异常等
     * @type {string}
     */
    PagerBarStatus["abnor"] = "abnor";
})(PagerBarStatus = exports.PagerBarStatus || (exports.PagerBarStatus = {}));
//# sourceMappingURL=pager-bar-status.js.map
