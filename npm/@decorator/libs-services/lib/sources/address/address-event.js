"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require('../../../../../tslib/tslib.js');
var base_event_1 = require('../base-event.js');
var AddressEvent = /** @class */ (function (_super) {
    tslib_1.__extends(AddressEvent, _super);
    function AddressEvent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // =================================================
        // 1.常量
        // =================================================
        /**
         * 常量:地址修改事件
         */
        _this.eventName = 'addressChanged';
        return _this;
    }
    return AddressEvent;
}(base_event_1.BaseEvent));
exports.AddressEvent = AddressEvent;
exports.addressEvent = new AddressEvent();
//# sourceMappingURL=address-event.js.map
