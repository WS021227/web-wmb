/*
    扩展方法大全
 */
const util = require('util')
const rd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')
const rdl = rd.length

Object.prototype.fget = function (field) {
    let values = this[field] || []
    return values.length > 0 ? values[0] : null
}

Object.prototype.faget = function (field) {
    return this[field] || []
}

Object.prototype.pop = function (key){
    let value = this[key]
    delete this[key]
    return value
}


String.prototype.trims = function (char, type) {
    if (!char) return this.replace(/^\s+|\s+$/g, '');
    if (type == 'left') return this.replace(new RegExp('^\\' + char + '+', 'g'), '');
    if (type == 'right') return this.replace(new RegExp('\\' + char + '+$', 'g'), '');
    return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
}

String.prototype.toKey = function (){
    return this.replace(/_/g, ' ').trim()
}

String.prototype.toFix = function () {
    return this.toLowerCase().replace(/[`~!@#$^\-&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g, "_")
        .replace(/[_]/g, "_");
}

String.prototype.toClear = function (){
    return this.toFix().toKey()
}

String.prototype.format = function (args){
    return util.format(this.toString(), args)
}

String.prototype.parse_format = function (){

    var validParts = /dd?|DD?|mm?|MM?|yy(?:yy)?/g;

    if (typeof this.toValue === 'function' && typeof this.toDisplay === 'function')
        return this;
    // IE treats \0 as a string end in inputs (truncating the value),
    // so it's a bad format delimiter, anyway
    var separators = this.replace(validParts, '\0').split('\0'),
        parts = this.match(validParts);
    if (!separators || !separators.length || !parts || parts.length === 0) {
        throw new Error("Invalid date format.");
    }
    return {separators: separators, parts: parts};
}
String.prototype.bd_encode = function () {
    var bytes = [];
    for (var i = 0; i < this.length; i++) {
        bytes.push(rd[Math.floor(Math.random()*rdl)])
        bytes.push(this[i])
    }
    return bytes.join('');
}

Number.prototype.reverseZeroOne = function (num) {
    return 1 ^ num;
}

//日期格式化
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, // month
        "d+": this.getDate(), // day
        "h+": this.getHours(), // hour
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
        "S": this.getMilliseconds()
        // millisecond
    }

    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

Date.prototype.date_format = function (format) {
    if (typeof format === 'string')
        format = format.parse_format()
    var dates = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
        titleFormat: "MM yyyy"
    };
    var val = {
        d: this.getUTCDate(),
        D: dates.daysShort[this.getUTCDay()],
        DD: dates.days[this.getUTCDay()],
        m: this.getUTCMonth() + 1,
        M: dates.monthsShort[this.getUTCMonth()],
        MM: dates.months[this.getUTCMonth()],
        yy: this.getUTCFullYear().toString().substring(2),
        yyyy: this.getUTCFullYear()
    };
    val.dd = (val.d < 10 ? '0' : '') + val.d;
    val.mm = (val.m < 10 ? '0' : '') + val.m;
    var _date = [];
    var seps = format.separators.concat()
    for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
        if (seps.length)
            _date.push(seps.shift());
        _date.push(val[format.parts[i]]);
    }
    return _date.join('');
};
