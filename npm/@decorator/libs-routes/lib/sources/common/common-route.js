"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var sharePage = route_1.Route.init({
    name: 'SharePage',
    url: '/pages/common/SharePage/index',
    title: '分享',
    description: '分享到朋友圈'
});
/**
 * 分享到朋友圈 - 路由集合
 */
exports.commonRoute = {
    sharePage: sharePage
};
//# sourceMappingURL=common-route.js.map
