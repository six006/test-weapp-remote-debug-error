"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var homePage = route_1.Route.init({
    name: 'HomePage',
    url: '/pages/home/home',
    title: '首页',
    description: '首页',
});
/**
 * 首页 - 路由集合
 */
exports.homeRoute = {
    homePage: homePage
};
//# sourceMappingURL=home-route.js.map
