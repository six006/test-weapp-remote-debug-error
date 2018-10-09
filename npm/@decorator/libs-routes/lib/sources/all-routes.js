"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../tslib/tslib.js');
var about_1 = require('./about/index.js');
var address_1 = require('./address/index.js');
var affiliate_1 = require('./affiliate/index.js');
var case_1 = require('./case/index.js');
var catalog_1 = require('./catalog/index.js');
var common_1 = require('./common/index.js');
var community_1 = require('./community/index.js');
var construction_1 = require('./construction/index.js');
var contact_us_1 = require('./contact-us/index.js');
var customer_1 = require('./customer/index.js');
var help_1 = require('./help/index.js');
var home_1 = require('./home/index.js');
var me_1 = require('./me/index.js');
var menu_1 = require('./menu/index.js');
var news_1 = require('./news/index.js');
var passport_1 = require('./passport/index.js');
var person_1 = require('./person/index.js');
var praise_1 = require('./praise/index.js');
var qa_1 = require('./qa/index.js');
var reserve_1 = require('./reserve/index.js');
var search_1 = require('./search/index.js');
var service_1 = require('./service/index.js');
var solution_1 = require('./solution/index.js');
var staff_1 = require('./staff/index.js');
var vote_1 = require('./vote/index.js');
var route_1 = require('./route.js');
var module_name_1 = require('./module-name.js');
// 主包
var moduleApp = tslib_1.__assign({}, common_1.commonRoute, contact_us_1.contactUsRoute, home_1.homeRoute, me_1.meRoute, menu_1.menuRoute, passport_1.passportRoute, search_1.searchRoute, staff_1.staffRoute);
// 商城中心 - 子包
var moduleMall = tslib_1.__assign({}, catalog_1.catalogRoute);
// 文章中心 - 子包
var moduleCms = tslib_1.__assign({}, about_1.aboutRoute, case_1.caseRoute, construction_1.constructionRoute, community_1.communityRoute, help_1.helpRoute, news_1.newsRoute, praise_1.praiseRoute, person_1.personRoute, qa_1.qaRoute, service_1.serviceRoute, solution_1.solutionRoute, vote_1.voteRoute);
// 会员中心 - 子包
var moduleMy = tslib_1.__assign({}, address_1.addressRoute, affiliate_1.affiliateRoute, reserve_1.reserveRoute, customer_1.customerRoute);
// 批量设置包名
route_1.Route.setSubPackages(moduleApp, module_name_1.moduleName.app);
route_1.Route.setSubPackages(moduleMall, module_name_1.moduleName.mall);
route_1.Route.setSubPackages(moduleCms, module_name_1.moduleName.cms);
route_1.Route.setSubPackages(moduleMy, module_name_1.moduleName.my);
/**
 * 路由集合
 */
exports.routes = tslib_1.__assign({}, moduleApp, moduleMall, moduleCms, moduleMy);
//# sourceMappingURL=all-routes.js.map
