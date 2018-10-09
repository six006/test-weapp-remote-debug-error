"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('../../../../../../@six006/lodash/lodash.js');
function $App(options) {
    if (options === void 0) { options = {}; }
    return function (AppCtor) {
        // @ts-ignore
        if (!options.defaultStore || !options.defaultStore.__MOBX__) {
            console.warn("\u7528 $App \u51FD\u6570\u65F6\u63D0\u4F9B\u7684 defaultStore: %o \u6CA1\u6709\u7EE7\u627F @decorator/libs-core \u4E2D\u7684 $Store \u57FA\u7C7B", options.defaultStore);
        }
        var appInstance = _.toPlainObject(new AppCtor());
        appInstance.store = options.defaultStore || {};
        App(appInstance);
    };
}
exports.$App = $App;
//# sourceMappingURL=$app.js.map
