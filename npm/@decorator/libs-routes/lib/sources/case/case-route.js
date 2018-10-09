"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var caseIndex = route_1.Route.init({
    name: 'Case',
    url: '/pages/case/CaseIndexPage/index',
    title: '案例中心',
    description: '案例中心',
});
var caseSearch = route_1.Route.init({
    name: 'CaseSearch',
    url: '/pages/case/CaseSearchPage/index',
    title: '案例搜索',
    description: '案例搜索',
});
var caseDetail = route_1.Route.init({
    name: 'CaseDetail',
    url: '/pages/case/CaseDetailPage/index',
    title: '案例详情',
    description: '案例详情',
});
var caseFilter = route_1.Route.init({
    name: 'CaseFilter',
    url: '/pages/case/CaseFilterPage/index',
    title: '案例筛选',
    description: '案例筛选',
});
/**
 * 案例 - 路由集合
 */
exports.caseRoute = {
    caseIndex: caseIndex,
    caseSearch: caseSearch,
    caseDetail: caseDetail,
    caseFilter: caseFilter
};
//# sourceMappingURL=case-route.js.map
