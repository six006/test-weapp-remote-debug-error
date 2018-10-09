"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var downloadableProducts = route_1.Route.init({
    name: 'DownloadableProducts',
    url: '/pages/customer/DownloadableProductsPage/index',
    title: '下载商品',
    description: '下载商品'
});
var customerSubscriptions = route_1.Route.init({
    name: 'CustomerSubscriptions',
    url: '/pages/customer/CustomerSubscriptionsPage/index',
    title: '到货提醒',
    description: '到货提醒'
});
/**
 *  会员中心 - 路由集合
 */
exports.customerRoute = {
    downloadableProducts: downloadableProducts,
    customerSubscriptions: customerSubscriptions
};
//# sourceMappingURL=customer-route.js.map
