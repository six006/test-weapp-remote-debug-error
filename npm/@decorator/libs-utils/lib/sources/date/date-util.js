"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateUtil;
(function (DateUtil) {
    /**
     * 日期字符串转日期类型
     * @param strDate 日期字符串
     */
    function strToDate(strDate) {
        var fullDate = strDate.split('-');
        return new Date(fullDate[0], fullDate[1] - 1, fullDate[2], 0, 0, 0);
    }
    DateUtil.strToDate = strToDate;
    /**
     * 日期字符串转年月日对象
     * @param strDate 日期字符串
     */
    function strToYearMonthDay(strDate) {
        var fullDate = strDate.split('-');
        return {
            year: fullDate[0],
            month: fullDate[1],
            day: fullDate[2],
        };
    }
    DateUtil.strToYearMonthDay = strToYearMonthDay;
    function format(t, fmt) {
        try {
            var o = {
                'M+': t.getMonth() + 1,
                'd+': t.getDate(),
                'h+': t.getHours(),
                'm+': t.getMinutes(),
                's+': t.getSeconds(),
                'q+': Math.floor((t.getMonth() + 3) / 3),
                'S': t.getMilliseconds() // 毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k].toString()) : (('00' + o[k]).substr(o[k].toString().length)));
            return fmt;
        }
        catch (e) {
            return t.toString();
        }
    }
    DateUtil.format = format;
    function diff(beginDate, endDate, type) {
        if (type === void 0) { type = 'ms'; }
        var startTime, endTime, timespan = 0;
        try {
            startTime = beginDate.getTime();
            endTime = endDate.getTime();
            if (type === 'd') {
                timespan = (endTime - startTime) / (1000 * 60 * 60 * 24);
            }
            else if (type === 'h') {
                timespan = (endTime - startTime) / (1000 * 60 * 60);
            }
            else if (type === 'm') {
                timespan = (endTime - startTime) / (1000 * 60);
            }
            else if (type === 's') {
                timespan = (endTime - startTime) / (1000);
            }
            else if (type === 'ms') {
                timespan = endTime - startTime;
            }
            return timespan;
        }
        catch (e) {
            return NaN;
        }
    }
    DateUtil.diff = diff;
    function nowDateFormat(fmt) {
        return format(new Date(), fmt ? fmt : 'yyyy-MM-dd');
    }
    DateUtil.nowDateFormat = nowDateFormat;
    function GetMaxDaysOfDate(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
    DateUtil.GetMaxDaysOfDate = GetMaxDaysOfDate;
    var weekDayTypeEnum;
    (function (weekDayTypeEnum) {
        weekDayTypeEnum[weekDayTypeEnum["en"] = 0] = "en";
        weekDayTypeEnum[weekDayTypeEnum["en_simple"] = 1] = "en_simple";
        weekDayTypeEnum[weekDayTypeEnum["cn_zhou"] = 2] = "cn_zhou";
        weekDayTypeEnum[weekDayTypeEnum["cn_xingQi"] = 3] = "cn_xingQi";
    })(weekDayTypeEnum = DateUtil.weekDayTypeEnum || (DateUtil.weekDayTypeEnum = {}));
    var weekData = [
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
        ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    ];
    function GetWeekDay(date, type) {
        if (type === void 0) { type = 3; }
        var weekDay = date.getDay();
        return weekData[type][weekDay];
    }
    DateUtil.GetWeekDay = GetWeekDay;
})(DateUtil = exports.DateUtil || (exports.DateUtil = {}));
//# sourceMappingURL=date-util.js.map
