"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var help = route_1.Route.init({
    name: 'Help',
    url: '/pages/help/HelpIndexPage/index',
    title: '帮助中心',
    description: '帮助中心'
});
var helpList = route_1.Route.init({
    name: 'HelpList',
    url: '/pages/help/HelpListPage/index',
    title: '帮助列表',
    description: '帮助列表'
});
var helpDetail = route_1.Route.init({
    name: 'HelpDetail',
    url: '/pages/help/HelpDetailPage/index',
    title: '帮助详情',
    description: '帮助详情'
});
var helpSearch = route_1.Route.init({
    name: 'HelpSearch',
    url: '/pages/help/HelpSearchPage/index',
    title: '帮助搜索',
    description: '帮助搜索'
});
/**
 * 帮助 - 路由集合
 */
exports.helpRoute = {
    help: help,
    helpList: helpList,
    helpDetail: helpDetail,
    helpSearch: helpSearch
};
//# sourceMappingURL=help-route.js.map
