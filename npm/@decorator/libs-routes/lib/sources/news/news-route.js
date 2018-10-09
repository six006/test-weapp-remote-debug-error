"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var news = route_1.Route.init({
    name: 'News',
    url: '/pages/news/NewsIndexPage/index',
    title: '新闻中心',
    description: '新闻中心',
});
var newsSearch = route_1.Route.init({
    name: 'NewsSearch',
    url: '/pages/news/NewsSearchPage/index',
    title: '新闻搜索',
    description: '新闻搜索',
});
var newsDetail = route_1.Route.init({
    name: 'NewsDetail',
    url: '/pages/news/NewsDetailPage/index',
    title: '新闻详情',
    description: '新闻详情',
});
/**
 * 新闻 - 路由集合
 */
exports.newsRoute = {
    news: news,
    newsSearch: newsSearch,
    newsDetail: newsDetail
};
//# sourceMappingURL=news-route.js.map
