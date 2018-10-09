"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var customerFavorite = route_1.Route.init({
    name: 'CustomerFavorite',
    url: '/pages/customer/CustomerFavoritePage/index',
    title: '我的收藏',
    description: '我的收藏'
});
var recentlyView = route_1.Route.init({
    name: 'RecentlyView',
    url: '/pages/customer/RecentlyViewPage/index',
    title: '我的足迹',
    description: '我的足迹'
});
/**
 * 我的收藏 - 路由集合
 */
exports.voteRoute = {
    customerFavorite: customerFavorite,
    recentlyView: recentlyView
};
//# sourceMappingURL=vote-route.js.map
