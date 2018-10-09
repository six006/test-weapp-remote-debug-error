"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var qa = route_1.Route.init({
    name: 'Qa',
    url: '/pages/qa/QaIndexPage/index',
    title: '问答中心',
    description: '问答中心',
});
var qaSearch = route_1.Route.init({
    name: 'QaSearch',
    url: '/pages/qa/QaSearchPage/index',
    title: '问答搜索',
    description: '问答搜索',
});
var qaDetail = route_1.Route.init({
    name: 'QaDetail',
    url: '/pages/qa/QaDetailPage/index',
    title: '问答详情',
    description: '问答详情',
});
var customerQa = route_1.Route.init({
    name: 'CustomerQa',
    url: '/pages/qa/CustomerQaPage/index',
    title: '我的问答',
    description: '我的问答',
});
var qaPost = route_1.Route.init({
    name: 'QaPost',
    url: '/pages/qa/QaPostPage/index',
    title: '问答提问',
    description: '问答提问',
});
var qaReply = route_1.Route.init({
    name: 'QaReply',
    url: '/pages/qa/QaReplyPage/index',
    title: '问答回答',
    description: '问答回答',
});
var qaTags = route_1.Route.init({
    name: 'QaTags',
    url: '/pages/qa/QaTagsPage/index',
    title: '问答标签',
    description: '问答标签',
});
/**
 * 问答 - 路由集合
 */
exports.qaRoute = {
    qa: qa,
    qaSearch: qaSearch,
    qaDetail: qaDetail,
    customerQa: customerQa,
    qaPost: qaPost,
    qaReply: qaReply,
    qaTags: qaTags
};
//# sourceMappingURL=qa-route.js.map
