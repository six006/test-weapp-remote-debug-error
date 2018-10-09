"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var staffIndex = route_1.Route.init({
    name: 'StaffIndex',
    url: '/pages/staff/StaffIndexPage/index',
    title: '客服首页',
    description: '客服首页'
});
var staffDetail = route_1.Route.init({
    name: 'StaffDetail',
    url: '/pages/staff/StaffDetailPage/index',
    title: '客服详情',
    description: '客服详情'
});
/**
 * 客服 - 路由集合
 */
exports.staffRoute = {
    staffIndex: staffIndex,
    staffDetail: staffDetail
};
//# sourceMappingURL=staff-route.js.map
