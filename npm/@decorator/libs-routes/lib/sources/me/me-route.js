"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var me = route_1.Route.init({
    name: 'Me',
    url: '/pages/me/index',
    title: '我',
    description: '会员中心'
});
var settings = route_1.Route.init({
    name: 'Settings',
    url: '/pages/me/SettingsPage/index',
    title: '设置',
    description: '设置'
});
/**
 * 会员中心 - 路由集合
 */
exports.meRoute = {
    me: me,
    settings: settings
};
//# sourceMappingURL=me-route.js.map
