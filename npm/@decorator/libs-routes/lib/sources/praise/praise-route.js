"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var praise = route_1.Route.init({
    name: 'Praise',
    url: '/pages/praise/PraiseIndexPage/index',
    title: '口碑中心',
    description: '口碑中心',
});
var praiseSearch = route_1.Route.init({
    name: 'PraiseSearch',
    url: '/pages/praise/PraiseSearchPage/index',
    title: '口碑搜索',
    description: '口碑搜索',
});
/**
 * 口碑 - 路由集合
 */
exports.praiseRoute = {
    praise: praise,
    praiseSearch: praiseSearch
};
//# sourceMappingURL=praise-route.js.map
