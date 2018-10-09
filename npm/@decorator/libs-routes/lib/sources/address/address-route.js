"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var address = route_1.Route.init({
    name: 'Case',
    url: '/pages/address/AddressIndexPage/index',
    title: '我的地址',
    description: '',
});
var addressEdit = route_1.Route.init({
    name: 'CaseSearch',
    url: '/pages/address/AddressEditPage/index',
    title: '编辑地址',
    description: '',
});
var addressCreate = route_1.Route.init({
    name: 'CaseDetail',
    url: '/pages/address/AddressCreatePage/index',
    title: '新增地址',
    description: '',
});
/**
 * 地址 - 路由集合
 */
exports.addressRoute = {
    address: address,
    addressEdit: addressEdit,
    addressCreate: addressCreate
};
//# sourceMappingURL=address-route.js.map
