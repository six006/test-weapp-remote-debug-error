"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var contactUs = route_1.Route.init({
    name: 'ContactUs',
    url: '/pages/contact/ContactIndexPage/index',
    title: '联系我们',
    description: '联系我们'
});
var contactDetail = route_1.Route.init({
    name: 'ContactDetail',
    url: '/pages/contact/ContactDetailPage/index',
    title: '联系我们详情',
    description: '联系我们详情'
});
var contactMap = route_1.Route.init({
    name: 'ContactMap',
    url: '/pages/contact/ContactMapPage/index',
    title: '联系我们地图',
    description: '联系我们地图'
});
/**
 * 联系我们 - 路由集合
 */
exports.contactUsRoute = {
    contactUs: contactUs,
    contactDetail: contactDetail,
    contactMap: contactMap
};
//# sourceMappingURL=contact-us-route.js.map
