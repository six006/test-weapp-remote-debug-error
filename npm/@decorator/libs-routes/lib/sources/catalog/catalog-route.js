"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var catalogFilter = route_1.Route.init({
    name: 'CatalogFilter',
    url: '/pages/catalog/CatalogFilterPage/index',
    title: '商品筛选',
    description: ''
});
var categoryIndex = route_1.Route.init({
    name: 'CategoryIndex',
    url: '/pages/catalog/CategoryIndexPage/index',
    title: '商品中心',
    description: ''
});
var categoryDetail = route_1.Route.init({
    name: 'CategoryDetail',
    url: '/pages/catalog/CategoryDetailPage/index',
    title: '商品中心',
    description: ''
});
var manufacturerIndex = route_1.Route.init({
    name: 'ManufacturerIndex',
    url: '/pages/catalog/ManufacturerIndexPage/index',
    title: '品牌中心',
    description: ''
});
var manufacturerDetail = route_1.Route.init({
    name: 'ManufacturerDetail',
    url: '/pages/catalog/ManufacturerDetailPage/index',
    title: '品牌中心',
    description: ''
});
var vendorIndex = route_1.Route.init({
    name: 'VendorIndex',
    url: '/pages/catalog/VendorIndexPage/index',
    title: '品牌中心',
    description: ''
});
var vendorDetail = route_1.Route.init({
    name: 'VendorDetail',
    url: '/pages/catalog/VendorDetailPage/index',
    title: '品牌中心',
    description: ''
});
/**
 * 商品分类 - 路由集合
 */
exports.catalogRoute = {
    catalogFilter: catalogFilter,
    categoryIndex: categoryIndex,
    categoryDetail: categoryDetail,
    manufacturerIndex: manufacturerIndex,
    manufacturerDetail: manufacturerDetail,
    vendorIndex: vendorIndex,
    vendorDetail: vendorDetail,
};
//# sourceMappingURL=catalog-route.js.map
