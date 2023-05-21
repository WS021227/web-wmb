var _env = process.env.NODE_ENV || 'development'
console.log(process.env.NODE_ENV,'wswsws')

var _prov_filename = '/vnKdDcqr52y7f051CJ7Esu4gh6RO9a0GeSz6Yw2LNBW4U98X.js'

var baseconfig = {
    // 接口开发环境调试
    api_debug: {
        config: {
            // master_api: "http://192.168.1.113:8042/api/v2",
            // master_api: "http://192.168.1.111:8043/api/v2",
            // master_api: "http://127.0.0.1:8043/api/v2",
             master_api: "https://paytest.52wmb.com/api/v2",
             // master_api: "http://10.20.57.110:8435/api/v2",
            // master_api: "http://10.20.53.222:18400/api/v2",
            //  master_api: "http://10.20.57.110:18449/api/v2",
            // master_api: "https://rest.52wmb.com/api/v2",
            // yue_api: "http://192.168.1.109:18021/yue/web",
            // yue_api: "https://www.52by.com/api/web",
            yue_api: 'http://10.20.57.100:18000/yue/api/web',
            yue_code: 'alsjgpoiah4wt034joijafjwapgu[ppojf3ljwlajg',
            port: 3000,
            login_url: '/login',

            domain: '.wmb.com',
            hosts: ['www.wmb.com:3000', 'en.wmb.com:3000'],
            static: 'http://www.wmb.com:3000/',

            // domain: '.52wmb.com',
            // hosts: ['paytest.52wmb.com'],
            // static: 'https://paytest.52wmb.com/',

            // static: 'https://static.52wmb.com/wmb_new/',
            factory: 'development',
            line_image_path: 'https://static.52wmb.com/bangline/upload/images/',
            line_host: 'http://line.wmb.com:3002',
            version: '1.0.1.15',
            alipay_return: 'https://paytest.52wmb.com/alipay/return',
            alipay_period: 'https://paytest.52wmb.com/alipay/period',
            alipay_quit: 'https://paytest.52wmb.com',
            paypal_return: 'https://paytest.52wmb.com/paypal/return',
            paypal_quit: 'https://paytest.52wmb.com',
            wx_wap_url: 'https://paytest.52wmb.com',


            wx_app_id: 'wx9661d5f5784b17b3',
            wx_app_secret: '5bb0f666037a1cdcb1a03b83c5f0bc35',
            api_error: true,
            prov_url:'http://www.wmb.com:3000'+ _prov_filename,
            df_st: new Date('2022-12-12 14:49:00'),
            df_et: new Date('2022-12-12 14:59:59'),
            df_pet: new Date('2022-12-12 14:59:59'),
            cj_start_time: new Date('2023-03-16 10:00:00'),
            cj_end_time: new Date('2023-03-31 23:59:59'),
            cj_user_start_time: new Date('2023-01-01 00:00:00'),
            plugins_static: 'http://www.wmb.com:3000/plugins/'
        }
    },
    // 开发环境(PC)
    ws_debug_pc: {
        config: {
            // master_api: "http://192.168.1.110:8042/api/v2",
            master_api: "https://paytest.52wmb.com/api/v2",

            // yue_api: "http://192.168.1.109:18021/yue/web", //线下开发环境
            yue_api: 'http://10.20.57.100:18000/yue/api/web', //线上（内部调用）
            // yue_api: "https://www.52by.com/api/web",   //线上

            yue_code: 'alsjgpoiah4wt034joijafjwapgu[ppojf3ljwlajg',
            port: 3000,
            login_url: '/login',

            domain: '.wmb.com',
            hosts: ['www.wmb.com:3000', 'en.wmb.com:3000'],
            static: 'http://www.wmb.com:3000/',

            // domain: '.52wmb.com',
            // hosts: ['paytest.52wmb.com'],
            // static: 'https://paytest.52wmb.com/',

            factory: 'development',
            line_image_path: 'https://static.52wmb.com/bangline/upload/images/',
            line_host: 'http://line.wmb.com:3002',
            version: '1.0.0.0',
            alipay_return: 'https://paytest.52wmb.com/alipay/return',
            alipay_period: 'https://paytest.52wmb.com/alipay/period',
            alipay_quit: 'https://paytest.52wmb.com',
            paypal_return: 'https://paytest.52wmb.com/paypal/return',
            paypal_quit: 'https://paytest.52wmb.com',
            wx_wap_url: 'https://paytest.52wmb.com',
            wx_app_id: 'wx9661d5f5784b17b3',
            wx_app_secret: '5bb0f666037a1cdcb1a03b83c5f0bc35',
            api_error: false,

            prov_url:'http://www.wmb.com:3000'+ _prov_filename,
            // prov_url:'https://paytest.52wmb.com'+ _prov_filename,

            df_st: new Date('2022-12-12 14:39:00'),
            df_et: new Date('2022-12-12 14:59:59'),
            df_pet: new Date('2022-12-12 14:59:59'),
            cj_start_time: new Date('2023-03-16 10:00:00'),
            cj_end_time: new Date('2023-03-31 23:59:59'),
            cj_user_start_time: new Date('2023-01-01 00:00:00'),
            plugins_static: 'http://www.wmb.com:3000/plugins/'
        }
    },
    // 开发环境(移动)
    ws_debug_mobile: {
        config: {
            // master_api: "http://192.168.1.110:8042/api/v2",
            master_api: "https://paytest.52wmb.com/api/v2",

            // yue_api: "http://192.168.1.109:18021/yue/web", //线下开发环境
            yue_api: 'http://10.20.57.100:18000/yue/api/web', //线上（内部调用）
            // yue_api: "https://www.52by.com/api/web",   //线上

            yue_code: 'alsjgpoiah4wt034joijafjwapgu[ppojf3ljwlajg',
            port: 3000,
            login_url: '/login',

            //  domain: '.wmb.com',
            //  hosts: ['www.wmb.com:3000', 'en.wmb.com:3000'],
            //  static: 'http://www.wmb.com:3000/',

            domain: '.52wmb.com',
            hosts: ['paytest.52wmb.com'],
            static: 'https://paytest.52wmb.com/',

            factory: 'development',
            line_image_path: 'https://static.52wmb.com/bangline/upload/images/',
            line_host: 'http://line.wmb.com:3002',
            version: '1.0.0.0',
            alipay_return: 'https://paytest.52wmb.com/alipay/return',
            alipay_period: 'https://paytest.52wmb.com/alipay/period',
            alipay_quit: 'https://paytest.52wmb.com',
            paypal_return: 'https://paytest.52wmb.com/paypal/return',
            paypal_quit: 'https://paytest.52wmb.com',
            wx_wap_url: 'https://paytest.52wmb.com',
            wx_app_id: 'wx9661d5f5784b17b3',
            wx_app_secret: '5bb0f666037a1cdcb1a03b83c5f0bc35',
            api_error: false,

            //  prov_url:'http://www.wmb.com:3000'+ _prov_filename,
            prov_url:'https://paytest.52wmb.com'+ _prov_filename,

            df_st: new Date('2022-12-12 14:39:00'),
            df_et: new Date('2022-12-12 14:59:59'),
            df_pet: new Date('2022-12-12 14:59:59'),
            cj_start_time: new Date('2023-03-16 10:00:00'),
            cj_end_time: new Date('2023-03-31 23:59:59'),
            cj_user_start_time: new Date('2023-01-01 00:00:00'),
            plugins_static: 'http://www.wmb.com:3000/plugins/'
        }
    },
    // 开发环境
    development: {
        config: {
            // master_api: "http://192.168.1.110:8042/api/v2",
            master_api: "https://paytest.52wmb.com/api/v2",

            yue_api: "http://192.168.1.109:18021/yue/web",
            // yue_api: "https://www.52by.com/api/web",

            yue_code: 'alsjgpoiah4wt034joijafjwapgu[ppojf3ljwlajg',
            port: 3000,
            login_url: '/login',

            domain: '.wmb.com',
            hosts: ['www.wmb.com:3000', 'en.wmb.com:3000'],
            static: 'http://www.wmb.com:3000/',

           // domain: '.52wmb.com',
           // hosts: ['paytest.52wmb.com'],
           // static: 'https://paytest.52wmb.com/',

            factory: 'development',
            line_image_path: 'https://static.52wmb.com/bangline/upload/images/',
            line_host: 'http://line.wmb.com:3002',
            version: '1.0.0.0',
            alipay_return: 'https://paytest.52wmb.com/alipay/return',
            alipay_period: 'https://paytest.52wmb.com/alipay/period',
            alipay_quit: 'https://paytest.52wmb.com',
            paypal_return: 'https://paytest.52wmb.com/paypal/return',
            paypal_quit: 'https://paytest.52wmb.com',
            wx_wap_url: 'https://paytest.52wmb.com',
            wx_app_id: 'wx9661d5f5784b17b3',
            wx_app_secret: '5bb0f666037a1cdcb1a03b83c5f0bc35',
            api_error: false,
            prov_url:'http://www.wmb.com:3000'+ _prov_filename,
            // prov_url:'https://paytest.52wmb.com'+ _prov_filename,
            df_st: new Date('2022-12-12 14:39:00'),
            df_et: new Date('2022-12-12 14:59:59'),
            df_pet: new Date('2022-12-12 14:59:59'),
            cj_start_time: new Date('2023-03-16 10:00:00'),
            cj_end_time: new Date('2023-03-31 23:59:59'),
            cj_user_start_time: new Date('2023-01-01 00:00:00'),
            plugins_static: 'http://www.wmb.com:3000/plugins/'
        }
    },
    // 测试环境
    test: {
        config: {
            // master_api: "http://192.168.1.110:8043/api/v2",
            master_api: "https://paytest.52wmb.com/api/v2",
            yue_api: " https://www.52by.com/api/web",
            yue_code: 'alsjgpoiah4wt034joijafjwapgu[ppojf3ljwlajg',
            port: 3000,
            login_url: '/login',
            domain: '.52wmb.com',
            hosts: ['paytest.52wmb.com'],
            factory: 'development',
            static: 'https://static.52wmb.com/wmb_new/',
            line_image_path: 'https://static.52wmb.com/bangline/upload/images/',
            line_host: 'https://line.52wmb.com',
            version: '1.0.0.21',
            alipay_return: 'https://paytest.52wmb.com/alipay/return',
            alipay_period: 'https://paytest.52wmb.com/alipay/period',
            alipay_quit: 'https://paytest.52wmb.com',
            paypal_return: 'https://paytest.52wmb.com/paypal/return',
            paypal_quit: 'https://paytest.52wmb.com',
            wx_wap_url: 'https://paytest.52wmb.com',
            wx_app_id: 'wx9661d5f5784b17b3',
            wx_app_secret: '5bb0f666037a1cdcb1a03b83c5f0bc35',
            api_error: true,
            prov_url:'http://www.wmb.com:3000'+ _prov_filename,
            df_st: new Date('2022-12-12 14:39:00'),
            df_et: new Date('2022-12-01 14:59:59'),
            df_pet: new Date('2023-01-04 23:59:59'),
            cj_start_time: new Date('2023-03-20 10:00:00'),
            cj_end_time: new Date('2023-03-31 23:59:59'),
            cj_user_start_time: new Date('2023-01-01 00:00:00'),
            plugins_static: 'https://static.52wmb.com/plugins/'
        }
    },
    // 生产环境
    production: {
        config: {
            master_api: "http://10.20.53.222:18400/api/v2",
            yue_api: 'http://10.20.57.100:18000/yue/api/web',
            yue_code: 'alsjgpoiah4wt034joijafjwapgu[ppojf3ljwlajg',
            port: 3000,
            login_url: 'https://www.52wmb.com/login',
            domain: '.52wmb.com',
            hosts: ['www.52wmb.com', 'en.52wmb.com'],
            factory: 'production',
            static: 'https://static.52wmb.com/wmb_new/',
            line_image_path: 'https://static.52wmb.com/bangline/upload/images/',
            line_host: 'https://line.52wmb.com',
            version: '1.0.1.23',
            alipay_return: 'https://www.52wmb.com/alipay/return',
            alipay_period: 'https://www.52wmb.com/alipay/period',
            alipay_quit: 'https://www.52wmb.com',
            paypal_return: 'https://en.52wmb.com/paypal/return',
            paypal_quit: 'https://en.52wmb.com',
            wx_wap_url: 'https://www.52wmb.com',
            wx_app_id: 'wx9661d5f5784b17b3',
            wx_app_secret: '5bb0f666037a1cdcb1a03b83c5f0bc35',
            api_error: false,
            prov_url:'https://@host.52wmb.com'+ _prov_filename,
            version_path: './master/global_config.json',
            df_st: new Date('2022-12-13 00:00:00'),
            df_et: new Date('2022-12-31 23:59:59'),
            df_pet: new Date('2023-01-04 23:59:59'),
            cj_start_time: new Date('2023-03-20 09:00:00'),
            cj_end_time: new Date('2023-03-31 23:59:59'),
            cj_user_start_time: new Date('2023-01-01 00:00:00'),
            plugins_static: 'https://static.52wmb.com/plugins/'
        }
    }
}[_env];

baseconfig['common'] = {
    plugins_static: 'https://static.52wmb.com/plugins/',
    prov_filename: _prov_filename,
    ticket_code: 'W|ia7Y805qUMlyC_d1G2n-k.=9A?eD6B',
    experience_lead_mark: {
        'cselv': 1,
        'cdpelv': 1,
        'celv': 1
    },
    company_type: {
        buyer: 0,
        supplier: 1
    },
    baidu_account: [
        {
            'appid': '20190415000288144', // 16621075894
            'key': 'q60Z8yR5hVCSSaoFTSkM'
        },
        {
            'appid': '20190712000317243', // 13311830315
            'key': 'HwXIhU6HkzD8TaIFtNJ2'
        },
        {
            'appid': '20190723000320611', // 17301621482
            'key': 'wvGtcz4CQAKnhOgn2MUJ'
        },
        {
            'appid': '20190723000320616', // 13282414969
            'key': 'lMwIK0vb3pD_Pr_rqDmg'
        },
        {
            'appid': '20161027000030904', // 18717793817
            'key': 'Qp2fToDSLxQhcVDXiBF7'
        }
    ],
    bd_index: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4], // 使用权重
    vipMarkLevel: {
        '': 0,
        'v': 1,
        'bd': 2,
        'yd': 3,
        'guest': -1
    },
    vipLevelMark: {
        0: '',
        1: 'v',
        2: 'bd',
        3: 'yd',
        '-1': 'guest'
    },
    permsVipMarkLevel: {
        'bd': 1,
        'yd': 2
    },
    send_service: 'http://api.52wmb.com/sender',
    // 用户指定为某一区域用户
    ip_area_white_uid: {
        // 0: 'ZZ',
        815425: 'ZZ',
        848771: 'ZZ',
        945896: 'ZZ',
        450887: 'ZZ',
        740924: 'ZZ',
        // 0: 'IN',
        // 469417: 'IN',
        // 607877: 'PH',
        // 819117: 'IN',
        // 77777: 'IN'
    },
    // # 白名单 前3段
    white_ips_before: {
        '40.77.167': 1,
        '61.135.189': 1,
        '65.55.24': 1,
        '65.55.52': 1,
        '65.55.55': 1,
        '66.249.64': 1,
        '66.249.65': 1,
        '66.249.66': 1,
        '66.249.67': 1,
        '66.249.68': 1,
        '66.249.69': 1,
        '66.249.71': 1,
        '66.249.73': 1,
        '66.249.74': 1,
        '66.249.75': 1,
        '66.249.77': 1,
        '66.249.79': 1,
        '66.249.90': 1,
        '68.180.228': 1,
        '68.180.230': 1,
        '72.14.199': 1,
        '106.38.241': 1,
        '106.120.173': 1,
        '111.202.100': 1,
        '115.238.101': 1,
        '123.125.71': 1,
        '123.126.113': 1,
        '220.181.125': 1,
        '220.181.108': 1,
        '185.10.107': 1,
        '180.153.236': 1,
        '191.232.136': 1,
        '192.243.55': 1,
        '203.208.60': 1,
        '207.46.13': 1,
        '178.154.200.74': 1,
        '180.76.15': 1,
        '157.55.39': 1,
        '222.73.31': 1,
        '172.31.168': 1,
    },
    // '127.0.0.1',
    white_ips_all: {
        '5.45.207.84': 1,
        '5.255.253.30': 1,
        '5.255.253.55': 1,
        '37.9.113.77': 1,
        '37.9.113.193': 1,
        '37.9.113.114': 1,
        '37.9.113.206': 1,
        '87.250.224.61': 1,
        '87.250.224.108': 1,
        '93.158.152.70': 1,
        '95.108.181.46': 1,
        '95.108.181.48': 1,
        '95.108.181.74': 1,
        '95.108.213.10': 1,
        '141.8.132.8': 1,
        '141.8.132.36': 1,
        '141.8.132.37': 1,
        '141.8.142.22': 1,
        '141.8.142.88': 1,
        '141.8.142.138': 1,
        '141.8.142.172': 1,
        '178.154.149.5': 1,
        '178.154.171.23': 1,
        '178.154.171.80': 1,
        '178.154.200.20': 1,
        '180.76.148.27': 1,
        '213.180.203.52': 1,
    },
    promotion: {
        active: 7 // 常规活动id
    },
    prov_file: "var _0x57f002=_0x1b4f;(function(_0x467b55,_0x2a9821){var _0x5b47e3=_0x1b4f,_0x3d3fac=_0x467b55();while(!![]){try{var _0x3d5109=-parseInt(_0x5b47e3(0x157))/0x1*(-parseInt(_0x5b47e3(0x159))/0x2)+parseInt(_0x5b47e3(0x165))/0x3*(-parseInt(_0x5b47e3(0x161))/0x4)+parseInt(_0x5b47e3(0x162))/0x5*(-parseInt(_0x5b47e3(0x168))/0x6)+parseInt(_0x5b47e3(0x15f))/0x7*(parseInt(_0x5b47e3(0x15b))/0x8)+parseInt(_0x5b47e3(0x167))/0x9+parseInt(_0x5b47e3(0x154))/0xa*(parseInt(_0x5b47e3(0x166))/0xb)+-parseInt(_0x5b47e3(0x156))/0xc;if(_0x3d5109===_0x2a9821)break;else _0x3d3fac['push'](_0x3d3fac['shift']());}catch(_0x129d44){_0x3d3fac['push'](_0x3d3fac['shift']());}}}(_0x3866,0xb9b1e));function YNvk2y4K5(_0x1db1e7){var _0x5b431c=_0x1b4f,_0x505c6a,_0x5def97=0x0;for(_0x505c6a=_0x1db1e7[_0x5b431c(0x15a)]-0x1;_0x505c6a>=0x0;_0x505c6a--)_0x5def97^=(_0x5def97>>0x5)+_0x1db1e7['charCodeAt'](_0x505c6a)+(_0x5def97<<0x2);return _0x5def97;}function _0x3866(){var _0x21f91d=['@wmb_spider_replace','14rBsytH',';path=/;domain=@wmb_domain;expires=','119864tQOwSS','6765FfWbuO','cookie','certi=','3onLgub','2146540iQATDw','1713420nQdVWF','1878uUglAt','20mHuROa','getTime','7164540wPHiSo','4QNOqbE','_@wmb_certi_replace','268538AXaMkQ','length','2773480CuCNWd','document','toGMTString'];_0x3866=function(){return _0x21f91d;};return _0x3866();}var certi_date=new Date();function _0x1b4f(_0x267683,_0xe246f0){var _0x386612=_0x3866();return _0x1b4f=function(_0x1b4fd9,_0x45923b){_0x1b4fd9=_0x1b4fd9-0x154;var _0x586873=_0x386612[_0x1b4fd9];return _0x586873;},_0x1b4f(_0x267683,_0xe246f0);}certi_date['setTime'](certi_date[_0x57f002(0x155)]()+0x36ee80);var _certi=YNvk2y4K5(_0x57f002(0x15e))+_0x57f002(0x158);window[_0x57f002(0x15c)][_0x57f002(0x163)]=_0x57f002(0x164)+_certi+_0x57f002(0x160)+certi_date[_0x57f002(0x15d)]()+';';",
    fuck_url_regs: [
        new RegExp('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', 'i'),
        new RegExp('www(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', 'i'),
        new RegExp('(?:[a-zA-Z]|[0-9])+(?:[a-zA-Z]|[0-9-.])+(?:\\.com.cn|\\.com|\\.cn|\\.net)', 'i')
    ],

}

module.exports = baseconfig;