"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var construction = route_1.Route.init({
    name: 'Construction',
    url: '/pages/construction/ConstructionIndexPage/index',
    title: '施工中心',
    description: '施工中心',
});
var constructionDetail = route_1.Route.init({
    name: 'ConstructionDetail',
    url: '/pages/construction/ConstructionDetailPage/index',
    title: '施工详情',
    description: '施工详情',
});
var constructionFilter = route_1.Route.init({
    name: 'ConstructionFilter',
    url: '/pages/construction/ConstructionFilterPage/index',
    title: '施工筛选',
    description: '施工筛选',
});
var constructionLeaders = route_1.Route.init({
    name: 'ConstructionLeaders',
    url: '/pages/construction/ConstructionLeadersPage/index',
    title: '施工设计师',
    description: '施工设计师',
});
var constructionVideo = route_1.Route.init({
    name: 'ConstructionVideo',
    url: '/pages/construction/ConstructionVideoPage/index',
    title: '视频直播',
    description: '视频直播',
});
var constructionLive = route_1.Route.init({
    name: 'ConstructionLive',
    url: '/pages/construction/ConstructionLivePage/index',
    title: '工地直播',
    description: '工地直播',
});
/**
 * 施工 - 路由集合
 */
exports.constructionRoute = {
    construction: construction,
    constructionDetail: constructionDetail,
    constructionFilter: constructionFilter,
    constructionLeaders: constructionLeaders,
    constructionVideo: constructionVideo,
    constructionLive: constructionLive
};
//# sourceMappingURL=construction-route.js.map
