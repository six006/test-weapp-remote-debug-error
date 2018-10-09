"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var solution = route_1.Route.init({
    name: 'Solution',
    url: '/pages/solution/SolutionIndexPage/index',
    title: '户型中心',
    description: '户型中心',
});
var solutionSearch = route_1.Route.init({
    name: 'SolutionSearch',
    url: '/pages/solution/SolutionSearchPage/index',
    title: '户型搜索',
    description: '户型搜索',
});
var solutionDetail = route_1.Route.init({
    name: 'SolutionDetail',
    url: '/pages/solution/SolutionDetailPage/index',
    title: '户型详情',
    description: '户型详情',
});
var solutionFilter = route_1.Route.init({
    name: 'SolutionFilter',
    url: '/pages/solution/SolutionFilterPage/index',
    title: '户型筛选',
    description: '户型筛选',
});
/**
 * 户型 - 路由集合
 */
exports.solutionRoute = {
    solution: solution,
    solutionSearch: solutionSearch,
    solutionDetail: solutionDetail,
    solutionFilter: solutionFilter
};
//# sourceMappingURL=solution-route.js.map
