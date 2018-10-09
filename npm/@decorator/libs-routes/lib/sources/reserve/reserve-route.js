"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var reserveIndex = route_1.Route.init({
    name: 'Reserve',
    url: '/pages/reserve/ReserveIndexPage/index',
    title: '预约',
    description: '预约',
});
var customerReserve = route_1.Route.init({
    name: 'CustomerReserve',
    url: '/pages/reserve/CustomerReservePage/index',
    title: '我的预约',
    description: '我的预约',
});
var reserveDetail = route_1.Route.init({
    name: 'ReserveDetail',
    url: '/pages/reserve/ReserveDetailPage/index',
    title: '预约详情',
    description: '预约详情',
});
/**
 * 预约 - 路由集合
 */
exports.reserveRoute = {
    reserveIndex: reserveIndex,
    customerReserve: customerReserve,
    reserveDetail: reserveDetail
};
//# sourceMappingURL=reserve-route.js.map
