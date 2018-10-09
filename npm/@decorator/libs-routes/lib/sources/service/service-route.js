"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var service = route_1.Route.init({
    name: 'Service',
    url: '/pages/service/ServiceIndexPage/index',
    title: '服务中心',
    description: '服务中心',
});
var serviceSearch = route_1.Route.init({
    name: 'ServiceSearch',
    url: '/pages/service/ServiceSearchPage/index',
    title: '服务搜索',
    description: '服务搜索',
});
var serviceDetail = route_1.Route.init({
    name: 'ServiceDetail',
    url: '/pages/service/ServiceDetailPage/index',
    title: '服务详情',
    description: '服务详情',
});
/**
 * 服务 - 路由集合
 */
exports.serviceRoute = {
    service: service,
    serviceSearch: serviceSearch,
    serviceDetail: serviceDetail
};
//# sourceMappingURL=service-route.js.map
