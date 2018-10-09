"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var search = route_1.Route.init({
    name: 'Search',
    url: '/pages/search/index',
    title: '搜索',
    description: '搜索'
});
/**
 * 搜索 - 路由集合
 */
exports.searchRoute = {
    search: search
};
//# sourceMappingURL=search-route.js.map
