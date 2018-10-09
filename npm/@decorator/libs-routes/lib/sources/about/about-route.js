"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var module_name_1 = require('../module-name.js');
var about = route_1.Route.init({
    name: 'About',
    url: '/pages/about/AboutIndexPage/index',
    title: '关于我们',
    description: '关于我们',
    module: module_name_1.moduleName.app
});
var aboutDetail = route_1.Route.init({
    name: 'AboutDetail',
    url: '/pages/about/AboutDetailPage/index',
    title: '关于我们详情',
    description: '关于我们详情'
});
/**
 * 关于我们 - 路由集合
 */
exports.aboutRoute = {
    about: about,
    aboutDetail: aboutDetail
};
//# sourceMappingURL=about-route.js.map
