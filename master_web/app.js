/*
 * @Description:
 * @Version: 1.0
 * @Autor: Cong
 * @Date: 2021-12-27 11:06:03
 * @LastEditors: Cong
 * @LastEditTime: 2021-12-27 17:43:53
 */
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const md5 = require('md5-node');

const baseConfig = require("./common/base_config");
const translator = require("./common/translator");
const util = require("./common/util");
require("./common/extend");
const queryString = require("querystring");
const fs = require("fs");
const async = require("async");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
// 1.配置ejs模板引擎
app.set("view engine", "ejs");
// 2.配置静态托管
app.use(express.static("public"));
app.use(cors()); //允许跨域
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser.json({limit: '500mb'}));
// app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
// 加载翻译数据
translator.init();


app.use((req, res, next) => {
    util.init_wglobals(req, res);
    var wmb_ticket = util.getCookie(req, '_WTK')
    if(!wmb_ticket) {
        var _h = new Date().getHours()
        var bf_ticket = md5(`${res.locals.wglobals.client_ip}_${baseConfig.common.ticket_code}_${parseInt(_h / 3)}`)
        wmb_ticket = bf_ticket + String.fromCodePoint(_h + 65)
        // cookies 保留 3小时
        util.setCookie(req, res, '_WTK', wmb_ticket, 10800, true)
        res.locals.wtk = wmb_ticket
    }else{
        res.locals.wtk = wmb_ticket
    }
    next();
});
/**
 * 反爬
 * 1 验证是否是有效蜘蛛 如果是有效蜘蛛 则不验证 prov 和 ticket
 * 2 如果存在 prov 则验证prov
 * 3 如果不存在prov 则验证 ticket
 * tips: ticket 有限制 超过闸阀值则必须验证prov
 */
app.use((req, res, next) => {
    // return next()
    var results = {client_ip: util.get_client_ip(req)}
    // return res.wcerti(2403, results)
    var pathname = req.path
    if(pathname == baseConfig.common.prov_filename) return next()
    async.waterfall(
        [
            // 验证是否为有效蜘蛛, 是否IP黑名单
            function (callback) {
                util.postMasterApiQuery('/common/check/spider',
                    {http_ua: req.headers['user-agent']}, req, res,
                    function (result) {
                        try {
                            if (result.state == 1403) return res.wcerti(4000, results)
                            var is_spider = (result.data || {}).is_spider
                            if (is_spider) return next()
                            callback(null, 1)
                        }catch (e){
                            callback(null, 1)
                        }
                    }
                )
            },
            // 验证prov
            function (_, callback) {
                var certi = util.getCookie(req, 'certi')
                if (!certi) return callback(null, 1)
                try {
                    var certi_it = certi.split('_'), certi_a = parseInt(certi_it[0]), certi_b = certi_it[1]
                    //超过10分钟还在使用这个certi表示为非法请求 则验证ticket
                    if (Date.now() - parseInt(util.decrypt(certi_b)) > 600000) {
                        util.setCookie(req, res, 'certi', '', 0)
                        res.writeHead(302, {'Location': util.completeUrl(req)});
                        res.end();
                        return
                    }
                    // 验证是否为
                    var ck_prov = parseInt(util.check_prov(req))
                    if (certi_a == ck_prov) return next()
                    results.certi = certi_a
                    results.ck_prov = ck_prov
                    callback(null, 1)
                } catch (e) {
                    results.certi = -100
                    results.ck_prov = -100
                    return callback(null, 1)
                }
            },
            // 验证ticket
            function (_, callback) {
                var wmb_ticket = res.locals.wtk
                if (!wmb_ticket) return callback(null, 4001)
                util.postMasterApiQuery('/common/check/ticket',
                    {ticket: wmb_ticket}, req, res,
                    function (result) {
                        var state = -1
                        try{
                            state = result.state
                        }catch (e){
                            results.certi = -200
                            results.ck_prov = -200
                        }
                        //  当能确认是逻辑上的500 或者 502 而非系统原因（redis 或者 重启导致其他状态码 ）都临时放行
                        if (state == 500 || state == 502) {
                            util.setCookie(req, res, '_WTK', '', 0)
                            return callback(null, state == 500?4002:4003)
                            // var code = (result.data||{}).code
                            // if(code == 2){
                            // }
                        }
                        return next()
                    }
                )
            }
        ],
        function (err, code) {
            res.wcerti(code, results)
        })
});

// 当不是登录页面及登录操作时,进行所有的拦截重定向到登录页面
app.use((req, res, next) => {
  // 验证是否需要获取用户
  var access_user = util.request_access_user(req, res);
  if (access_user) return util.unity_user(req, res, false, next);
  try {
    // 没有请求用户信息的时候 获取简单版用户信息
    util.simple_user(req, res, next);
  } catch (e) {
    next();
  }
});

// 自定义一个next
app.use((req, res, next) => {
    // res.locals.wglobals.ip_area = 'IN';
    // return next();
    try {
        util.wIpArea(req, res, function (area) {
            res.locals.wglobals.ip_area = area;
            next();
        });
    } catch (e) {
        next();
    }
});

// 加载路由管理模块
app.use("/", require("./routes/admin.js"));

// 获取版本号
try {
    fs.readFile(baseConfig.config.version_path, 'utf-8', function (err, data){
        let _json = JSON.parse(data)
        app.locals["VERSION"] = _json.static_version
        console.log('读取版本号【'+ _json.static_version +'】完成....')
    })
}catch (e){}
// 更新版本号
app.get('/update/version', function (req, res){
    if(req.query.token != 't0LscDWwbMdFkmAV3ie8oMdb8wNFMKjif1Hh0CfNYkXst0') return res.wabort()

    fs.readFile(baseConfig.config.version_path, 'utf-8', function (err, data){
        let _json = JSON.parse(data)
        _json.static_version = new Date().getTime()
        fs.writeFile(baseConfig.config.version_path, JSON.stringify(_json), function (err){
            if(err) return res.wabort()
            res.send({message: '修改成功'})
        })
    })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // var error = new Error('502')
  res.locals.message = err.message;
  console.log(err.message, req, res)
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // let _wg = {};
  // try {
  //   _wg = res.locals.wglobals;
  // } catch (e) {}
  // try {
  //   console.error(
  //     req.protocol + "://" + req.hostname + req.originalUrl,
  //     _wg,
  //     err
  //   );
  // } catch (e) {
  //   console.error("error 02:", _wg, err.message);
  // }
  res.status(err.status || 500).render("error");
});

/**
 * res 扩展全局404 -- 接口请求后的方法体内处理异常的统一方法
 * @param status
 * @param req
 */

app.response.wabortApi = function (status=404, req, ext_err){
    if(req.async) {
        try {
            this.status(status).send({state: 20000, 'message': 'error'});
        }catch (e){

        }
    }else{
        this.status(status).render("error");
    }
    this.end();
}
/**
 * res 扩展全局404或其他状态码方法
 * @param status
 * @param req
 */
app.response.wabort = function (status = 404, req, ext_err) {
  // if (req) console.error(req.protocol + "://" + req.get("host") + req.originalUrl, " wabort " + status, ext_err || "");
  this.status(status).render("error");
  this.end();
};
/**
 * res 扩展全局404或其他状态码方法 -- 返回json数据
 * @param status
 * @param req
 */

app.response.wabortJson = function (status=404, req, ext_err){
    if(req) console.error(req.protocol + '://' + req.get('host') + req.originalUrl, ' wabortJson ' + status, (ext_err|| ""))
    this.status(status).send({state: 20000, 'message': 'not found'});
    this.end();
}

// 判断PC引擎，移动端引擎
app.response.wrender = function (name, options, callback) {
    let oname = name, that = this
    try {
        // var user_id = (res.locals.wglobals.user || {}).id || 0,
        //     has = user_id == 36408

        if (this.locals.wglobals.device == "mobile") name = name.replace("./", "./mobile/");
        that.render(name, options, function (err, str) {
            if (err) return that.render(oname, options, callback);
            if (!callback) return that.send(str)
            return callback(err, str)
        });
    } catch (e) {
        that.render(oname, options, callback);
    }
};
/**
 * res 扩展触发反爬错误页
 * @param code
 * @param results
 */
app.response.wcerti = function (code, results) {
    results = results || {}
    results.code = code
    this.status(404).render("certi_expire", {results: results });
    this.end();
};

// ejs 使用的全局变量
app.locals["url_stringify"] = util.url_stringify;
app.locals["tag_url_stringify"] = util.url_stringify;
app.locals["show_country"] = util.show_country;
app.locals["node_thousand"] = util.node_thousand;
app.locals["format"] = util.format;
app.locals['translate'] = translator.ejs_translate
app.locals['keyreplace'] = translator.keyreplace
app.locals['VERIFY_AUTHORITY'] = util.ejs_verify_authority
app.locals['verify_vip_level'] = util.verify_vip_level
app.locals['ucfirst'] = util.ucfirst
app.locals['equal_real_vip'] = util.ejs_equal_real_vip
app.locals['verify_real_vip'] = util.ejs_verify_real_vip
app.locals['extended_auth'] = util.ejs_extended_auth
app.locals["company_descript_clear"] = util.ejs_company_descript_clear
app.locals["raw_bill_encrypt"] = util.ejs_raw_bill_encrypt
app.locals["URL_ENCRYPT"] = util.ejs_url_encrypt
app.locals["STATIC"] = baseConfig.config.static
app.locals["PLUGINS_STATIC"] = baseConfig.config.plugins_static
app.locals["POS_SHOW"] = util.pos_show
app.locals["VERSION"] = baseConfig.config.version
app.locals["PROV_URL"] = util.prov_url
app.locals["LINE_IMAGE_PATH"] = baseConfig.config.line_image_path
app.locals["LINE_ROUTE"] = util.line_route
app.locals["DATE_ZH_DAY"] = util.date_zh_day
app.locals["UTIL"] = util
module.exports = app;
