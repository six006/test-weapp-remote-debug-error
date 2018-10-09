"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var community = route_1.Route.init({
    name: 'Community',
    url: '/pages/community/CommunityIndexPage/index',
    title: '小区中心',
    description: '小区中心',
});
var communitySearch = route_1.Route.init({
    name: 'CommunitySearch',
    url: '/pages/community/CommunitySearchPage/index',
    title: '小区搜索',
    description: '小区搜索',
});
var communityDetail = route_1.Route.init({
    name: 'CommunityDetail',
    url: '/pages/community/CommunityDetailPage/index',
    title: '小区详情',
    description: '小区详情',
});
/**
 * 小区 - 路由集合
 */
exports.communityRoute = {
    community: community,
    communitySearch: communitySearch,
    communityDetail: communityDetail
};
//# sourceMappingURL=community-route.js.map
