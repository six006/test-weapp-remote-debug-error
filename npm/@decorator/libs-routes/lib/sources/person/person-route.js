"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var person = route_1.Route.init({
    name: 'Person',
    url: '/pages/person/PersonIndexPage/index',
    title: '人物中心',
    description: '人物中心',
});
var personSearch = route_1.Route.init({
    name: 'PersonSearch',
    url: '/pages/person/PersonSearchPage/index',
    title: '人物搜索',
    description: '人物搜索',
});
var personDetail = route_1.Route.init({
    name: 'PersonDetail',
    url: '/pages/person/PersonDetailPage/index',
    title: '人物详情',
    description: '人物详情',
});
/**
 * 人物 - 路由集合
 */
exports.personRoute = {
    person: person,
    personSearch: personSearch,
    personDetail: personDetail
};
//# sourceMappingURL=person-route.js.map
