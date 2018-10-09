"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require('../route.js');
var passport = route_1.Route.init({
    name: 'Passport',
    url: '/pages/passport/index',
    title: '护照中心',
    description: '护照中心',
});
/**
 * 护照中心 - 路由集合
 */
exports.passportRoute = {
    passport: passport
};
//# sourceMappingURL=passport-route.js.map
