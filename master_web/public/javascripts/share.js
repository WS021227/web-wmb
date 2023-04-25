var _lang = 'cn'
try {
    _lang = wg.lang || _lang
} catch (e) {}
let line_route = $('[name="line_route"]').attr('content')
let share_lang = {
    'share_company_0': {
        cn: '采购商',
        en: 'Buyer'
    },
    'share_company_1': {
        cn: '供应商',
        en: 'Supplier'
    },
    'share_save': {
        cn: '保存',
        en: 'save'
    },
    'share_clear': {
        cn: '取消',
        en: 'clear'
    },
    'share_day': {
        cn: '天',
        en: 'Day '
    },
    'share_hour': {
        cn: '时',
        en: 'Hour '
    },
    'share_min': {
        cn: '分',
        en: 'Min '
    },
    'share_sec': {
        cn: '秒',
        en: 'Sec'
    },
    'share_child_not_perms': {
        cn: '暂无查阅或使用权限，可向主账号申请此权限。',
        en: 'Request permission from main account.'
    },
    'tiyan_left_time': {
        cn: '会员体验时间剩余',
        en: 'Experience time remaining '
    },
    'tiyan_left_time_top': {
        cn: '剩余',
        en: 'Left '
    },

    'company_clear': {
        cn: '取消',
        en: 'clear'
    },
    'layer_ok': {
        cn: '确认',
        en: 'I Know'
    },
    'layer_tips': {
        cn: '提示',
        en: 'Tips'
    },
    'company_list_product_open': {
        cn: '展开',
        en: 'expand'
    },
    'company_list_product_close': {
        cn: '收起',
        en: 'collect'
    },
    'company_list_time_range': {
        cn: '所有时间',
        en: 'All time'
    },
    'company_list_unlimited': {
        cn: '不限次数',
        en: 'All transactions'
    },
    'gsupply_demand_data': {
        cn: {
            1: '采供',
            2: '采购',
            3: '供应',
            4: '服务',
            5: '物流'
        },
        en: {
            1: 'Imp/Exp ',
            2: 'Import ',
            3: 'Export ',
            4: 'Trade service',
            5: 'Logistics Services'
        }
    },
    'bangline_list_title': {
        cn: '邦LINE',
        en: 'Business Line'
    },
    'bangline_list_des': {
        cn: '通过邦Line的推荐或搜索，您可以找到的采供真人，还可以在这免费推广供求信息。',
        en: 'Your B-Line homepage will be recommended to 1 million+ global traders on 52wmb to show your supply or demand information so as to obtain business opportunities.'
    },
    'bangline_list_button': {
        cn: '开通邦Line免费获得推广',
        en: 'Free opening'
    },
    'bangline_list_link': {
        cn: '/login?redirectUrl=https%3A%2F%2Fwww.52wmb.com%2Fuser%2Fline%2Fedit',
        en: 'login?redirectUrl=https%3A%2F%2Fen.52wmb.com%2Fuser%2Fline%2Fedit'
    },
    'bangline_list_link_show': {
        cn: 'https://line.52wmb.com',
        en: 'https://line.52wmb.com/en'
    },
    'bangline_list_promotion': {
        cn: '免费加入 →',
        en: 'Free Promotion →'
    },
    'bangline_list_nocontent': {
        cn: '这里还有免费推广展示位，等你来！',
        en: 'Promotional display space still available!'
    },
    'bangline_list_insterested': {
        cn: '你可能感兴趣的',
        en: 'You may be interested in'
    },
    'bangline_list_follow': {
        cn: '关注',
        en: 'follow'
    },
    'bangline_list_friend': {
        cn: '邦友',
        en: ' friends '
    },
    'bangline_list_ie': {
        cn: '正在采供',
        en: 'are imporing & exporting '
    },
    'bangline_list_ie_des': {
        cn: '通过邦Line找到他们，并通过对话和他们取得联系',
        en: 'Find them via Bonline and get in touch with them through conversations'
    },
    search_hot_record: {
        cn: '热搜',
        en: 'Hot'
    },

    'tan_tips_title': {
        cn: '友情提示',
        en: 'Tips'
    },
    'tan_tips_tiyan': {
        cn: '申请远程演示',
        en: '申请远程演示'
    },
    'tan_tips_service': {
        cn: '上海义缘网络科技有限公司服务确认单',
        en: 'Service Confirmation Form'
    },
    'tan_tips_kefu': {
        cn: '您的专属客服',
        en: 'Dedicated Customer Service'
    },
    'tan_tips_title_yellow': {
        cn: '黄钻试用',
        en: 'Yellow Diamond Trial'
    },
    'tan_tips_title_renew': {
        cn: '续费通知',
        en: 'Renewal Notice'
    },
    'tan_tips_title_restricte': {
        cn: '受限提示',
        en: 'Restricted Tips'
    },
    'tan_loading': {
        cn: '正在加载',
        en: 'Loading'
    },

    'tan_vedio_title': {
        cn: '当前模块操作演示',
        en: 'Operation demonstration'
    },
    'tan_vedio_title_other': {
        cn: '平台操作演示',
        en: 'Operation demonstration'
    },

    'membership_visitors': {
        cn: '游客',
        en: 'Visitors'
    },
    'membership_general': {
        cn: '普通用户',
        en: 'General users'
    },
    'membership_vip': {
        cn: 'Vip',
        en: 'Vip'
    },
    'membership_blue': {
        cn: '蓝钻',
        en: 'Blue'
    },
    'membership_yellow': {
        cn: '黄钻',
        en: 'Yellow'
    },

    'membership_des_v': {
        cn: 'VIP会员可查阅此板块内容/使用此功能，建议您升级。',
        en: 'VIP Members Have Permission To Get'
    },
    'membership_des_bd': {
        cn: '钻石会员可以使用公司高级搜索功能，建议升级...',
        en: 'Diamond Members Have Permission To Get'
    },
    'membership_des_yd': {
        cn: '黄钻会员可查阅此板块内容/使用此功能，建议您升级。',
        en: 'Yellow Diamond Members Have Permission To Get'
    },

    'membership_insufficient_title': {
        cn: '抱歉，您的会员权限不足。',
        en: 'Insufficient User Permissions'
    },
    'membership_buy_button': {
        cn: '购买会员',
        en: 'Buy Membership'
    },
    'membership_buy_rights': {
        cn: '查看会员权限',
        en: 'View Rights'
    },
    'membership_vistor_rights': {
        cn: '登录后可查看数据',
        en: 'Free View For Registered Users'
    },
    'membership_login': {
        cn: '登陆',
        en: 'Login'
    },
    'membership_register': {
        cn: '注册',
        en: 'Register'
    },

    'filter_date_one': {
        cn: '一个月',
        en: 'One month'
    },
    'filter_date_three': {
        cn: '三个月',
        en: 'Three months'
    },
    'filter_date_six': {
        cn: '六个月',
        en: 'Six months'
    },
    'filter_date_one_year': {
        cn: '一年',
        en: 'One year'
    },
    'filter_date_two_year': {
        cn: '二年',
        en: 'Two years'
    },
    'filter_date_three_year': {
        cn: '三年',
        en: 'Three years'
    },

    'filter_contact_tel': {
        cn: '包含电话',
        en: 'Tel included'
    },
    'filter_contact_email': {
        cn: '包含邮箱',
        en: 'Email included'
    },
    'filter_contact_fax': {
        cn: '包含传真',
        en: 'Fax included'
    },
    'filter_contact_website': {
        cn: '包含网站',
        en: 'Website included'
    },
    'filter_contact_contact': {
        cn: '包含联系人',
        en: 'Contacts included'
    },
    'filter_contact_address': {
        cn: '包含地址',
        en: 'Address included'
    },

    'filter_rank_sorting': {
        cn: '默认排序',
        en: 'Default sorting'
    },
    'filter_rank_bls': {
        cn: '提单数',
        en: 'B/Ls'
    },
    'filter_rank_contact': {
        cn: '联系方式',
        en: 'Contacts'
    },
    'filter_rank_certification': {
        cn: '认证',
        en: 'Certification'
    },
    'filter_rank_data': {
        cn: '最近交易日期',
        en: 'Last Trading Date'
    },

    'filter_rank_from_country': {
        cn: '从[@国家]有采购',
        en: 'purchases from [@国家]'
    },
    'filter_rank_to_country': {
        cn: '供应至[@国家]',
        en: 'Supply to [@国家]'
    },
    'filter_rank_from_port': {
        cn: '从[@港口]装运',
        en: 'Shipment from [@港口]'
    },
    'filter_rank_to_port': {
        cn: '从[@港口]卸货',
        en: 'Unloading from [@港口]'
    },

    'filter_marks_accurate': {
        cn: '精准匹配',
        en: 'Accurate Match'
    },
    'filter_marks_collections': {
        cn: '多人收藏',
        en: 'Multiple Collections'
    },

    'filter_shipments_over': {
        cn: '交易大于',
        en: 'Greater than '
    },
    'filter_shipments_less': {
        cn: '交易小于',
        en: 'Less than '
    },

    'filter_start_date': {
        cn: '起始日期',
        en: 'Start date '
    },
    'filter_end_date': {
        cn: '结束日期',
        en: 'End date '
    },
    'filter_date_error_tips': {
        cn: '时间格式错误',
        en: 'Wrong time format'
    },
    'filter_page_to': {
        cn: '翻页至',
        en: 'Page to '
    },
    'filter_page_confirm': {
        cn: '确认',
        en: 'Confirm'
    },
    'filter_page_tips': {
        cn: '请输入大于0的页码',
        en: 'Please enter a page number greater than 0'
    },
    'filter_page_previous': {
        cn: '上一页',
        en: 'Previous'
    },
    'filter_page_next': {
        cn: '下一页',
        en: 'Next'
    },

    'search_records': {
        cn: '搜索记录',
        en: 'Search records'
    },
    'search_enter_keywords': {
        cn: '请输入关键词',
        en: 'Please enter a keyword'
    },

    'toolbar_nav_collection': {
        cn: '收藏的公司',
        en: 'Collection Companies'
    },
    'toolbar_nav_labels': {
        cn: '标签管理',
        en: 'Labels Management'
    },
    'toolbar_nav_viewed': {
        cn: '浏览的公司',
        en: 'Viewed Companies'
    },
    'bangline_title': {
        cn: '邦line推荐',
        en: 'Recommend'
    },
    'right_fixed_consult': {
        cn: '咨询',
        en: 'consult'
    },
    'right_fixed_out': {
        cn: '试用',
        en: 'try out'
    },

    //体验模块
    'trip_diamond_title': {
        cn: '邀您体验黄钻会员',
        en: 'Experience Yellow Diamond Membership'
    },
    'trip_diamond_des': {
        cn: '体验时间为30分钟',
        en: 'The experience lasts 30 minutes'
    },
    'trip_diamond_start': {
        cn: '开始体验',
        en: 'Start your experience'
    },

    'trip_tips_title': {
        cn: '您已暂停黄钻体验',
        en: 'You have suspended your experience'
    },
    'trip_tips_time_left': {
        cn: '会员体验时间剩余',
        en: 'Member experience time remaining '
    },
    'trip_tips_goon': {
        cn: '继续体验',
        en: 'Continue the experience'
    },
    'trip_tips_giveup': {
        cn: '放弃体验',
        en: 'Give up'
    },

    //版本控制
    'web_lang_switch': {
        cn: 'Switch now',
        en: '立即切换'
    },
    'web_lang_displayed': {
        cn: 'Not displayed',
        en: '不再显示'
    },


    'robots_tips_title': {
        cn: '请输入验证码...',
        en: 'Enter verification code'
    },
    'robots_tips_sumbit': {
        cn: '确认提交',
        en: 'Sumbit'
    },
    'robots_tips_input': {
        cn: '点击验证码图片可更换',
        en: 'Click the picture to replace'
    },


    'bline_popful_title_2': {
        cn: '邀请您开通邦Line主页',
        en: 'You are invited to open a B-line homepage'
    },
    'bline_popful_des_2': {
        cn: '开通邦Line主页，您可发布产品、采购、企业、个人介绍等商务信息获得免费展示;平台还会将与您可能有贸易往来的同行业用户推荐给彼此，帮您建立联系！',
        en: 'By opening a home page, you can post your products, purchases, companies, personal profiles and other business information for free; the platform will also recommend users in the same industry that you may have trade with to each other, helping you to establish contact!'
    },
    'bline_popful_button_2': {
        cn: '创建免费的邦Line主页→',
        en: 'Create a free B-line homepage →'
    },


    'list_bline_industry_circle': {
        cn: '行业圈',
        en: ' Industry Circle'
    },
    'list_bline_members': {
        cn: '个成员',
        en: ' members'
    },
    'list_bline_members_show': {
        cn: '成员',
        en: ' members'
    },
    'list_bline_posts': {
        cn: '个帖子',
        en: ' posts'
    },
    'list_bline_views': {
        cn: '次访问',
        en: ' views'
    },
    'list_bline_enter': {
        cn: '进入圈子',
        en: 'Enter'
    },
    'list_bline_all': {
        cn: '所有',
        en: 'All'
    },
    'list_bline_title': {
        cn: '邦Line推荐',
        en: 'B-line'
    },
    'list_bline_website': {
        cn: '进入官网→',
        en: 'Website→'
    },
    'list_bline_tips': {
        cn: '提示：以下推广展示来自于[@行业]圈成员.',
        en: 'Tip: The following promotional displays are from [@行业] circle members'
    },
    'list_bline_more': {
        cn: '更多推荐',
        en: 'More recommendations'
    },
    'line_add': {
        cn: '发布',
        en: ' publish '
    },
    'line_days_ago': {
        cn: '天前',
        en: ' days ago'
    },
    'line_hours_ago': {
        cn: '小时前',
        en: ' hours ago'
    },
    'line_minutes_ago': {
        cn: '分钟前',
        en: ' minutes ago'
    },

    'line_windows_title': {
        cn: '邀您开通邦Line,免费发供求信息！',
        en: 'Activate Business-Line to send free supply and demand info!'
    },
    'line_windows_people': {
        cn: '[@人数]开通邦Line',
        en: '[@人数] activated'
    },
    'line_windows_posts_number': {
        cn: '供求帖[@帖子]',
        en: '[@帖子] posts'
    },
    'line_windows_tips': {
        cn: '发供求，找采供商真人！',
        en: 'Post supply & demand, find real traders'
    },
    'line_windows_button': {
        cn: '立即开通邦Line主页',
        en: 'Activate Homepage'
    },
    'line_group_people': {
        cn: '[@人数]人入住',
        en: '[@人数] activated'
    },

    'line_windows_pipei_noopen_title': {
        cn: '邀您入驻[@行业]行业圈',
        en: 'Invite you to join [@行业] group'
    },
    'line_windows_pipei_noopen_button_des': {
        cn: '圈里发的供求信息，这里展示',
        en: 'Posts will be displayed here'
    },
    'line_windows_pipei_noopen_button': {
        cn: '开通邦Line，入驻行业圈',
        en: 'Activate Business-Line to join'
    },

    'line_windows_group_join_title': {
        cn: '[@行业]行业圈动态',
        en: '[@行业] group dynamic'
    },
    'line_windows_group_join_button_des': {
        cn: '圈里发布供求信息，这里展示',
        en: 'Posts will be displayed here'
    },
    'line_windows_group_join_button': {
        cn: '+免费发布供求信息',
        en: '+ Post supply & demand'
    },

    'line_windows_nopipei_noopen_title': {
        cn: '邀您开通邦Line个人主页',
        en: 'Invite you to activate Business-Line'
    },
    'line_windows_nopipei_noopen_des': {
        cn: '发供求，找采供商真人就在邦Line平台！',
        en: 'Post supply & demand, find real traders'
    },
    'line_windows_nopipei_noopen_button_des': {
        cn: '创建的主页将获得展示',
        en: 'The page created will be displayed'
    },
    'line_windows_nopipei_noopen_button': {
        cn: '+创建邦Line个人主页',
        en: '+Create Homepage'
    },

    'line_windows_nopipei_open_title': {
        cn: '活跃邦Line用户推荐',
        en: 'Active Business-Line user recommendation'
    },
    'line_windows_nopipei_open_title_des': {
        cn: '发现外贸采供真人，并与他们建立贸易联系！',
        en: 'Find real traders and business!'
    },
    'line_windows_nopipei_open_button_des': {
        cn: '与邦友互动可以获得更多展示',
        en: 'More interaction and more displays'
    },
    'line_windows_nopipei_open_button': {
        cn: '寻找更多采供商真人',
        en: 'Find more traders'
    },
    'line_windows_display': {
        cn: '展示',
        en: ' display'
    },
    'line_windows_posts': {
        cn: '帖子',
        en: ' posts'
    },
    'line_windows_follow': {
        cn: '关注',
        en: ' follow'
    },
    'close_youhuiquan_tips': {
        cn: '我已知晓这个优惠活动，不在提示!',
        en: 'I have been aware of this promotion, not reminding me!'
    },
    'search_keywords_number': {
        cn: '请输入纯数字的HS编码',
        en: 'Please enter a pure number HS code'
    },

    //二次弹窗
    'two_shows_tips': {
        cn: '高级功能试用',
        en: 'Advanced Features Trial'
    },
    'two_shows_title': {
        cn: '免费体验该高级功能',
        en: 'Experience this advanced feature for free'
    },
    'two_shows_des': {
        cn: '扫码加客服微信，免费开通黄钻会员使用。',
        en: ' Scan the WhatsApp(+86 16621075894) QR code to contact customer service, free to open the yellow diamond member trial'
    },
    'two_shows_ewmimg': {
        cn: 'https://static.52wmb.com/wmb_new/images/qiwei_ewm.png?v=20221017',
        en: 'https://static.52wmb.com/wmb_new/images/whatsapp_ewm.jpg'
    },

    //bangline产品广告位
    'bline_ad_title': {
        cn: '<邦Line广告> 免费加入？',
        en: '< Business-Line Ad > Join for free?'
    },
    'bline_ad_shows': {
        cn: '此条信息，已获取[@数量]次展示',
        en: 'This info has been displayed for [@数量] times'
    },
    'bline_ad_published': {
        cn: '发布',
        en: 'Published'
    },

    'sjj_right_name': {
        cn: '数据节',
        en: 'DATA SALE'
    },
    'sjj_right_enter': {
        cn: '会场',
        en: 'enter'
    },

    'share': {
        cn: 'share',
        en: 'share'
    },
    'big_class_exchange':{
        cn:"大课堂兑换",
        en: 'Big class redemption'
    }

}

var globalData = {
    vipMarkLevel: {
        'guest': 0,
        '': 1,
        'v': 2,
        'bd': 3,
        'yd': 4
    },
    vipLevelMark: {
        0: 'guest',
        1: '',
        2: 'v',
        3: 'bd',
        4: 'yd'
    },
    vipMarkDes: {
        'guest': '游客',
        '': '普通用户',
        'v': 'Vip用户',
        'bd': '蓝钻用户',
        'yd': '黄钻用户'
    }
}

// 标识不弹窗
let no_full_pop = $('meta[name="no_full_pop"]').attr('content')
// 指定弹窗模块， 为空则弹所有
let pop_module = $('meta[name="pop_module"]').attr('content')
let page_mark = $('meta[name="page_mark"]').attr('content') || ''
// 在第三方用户登录后的情况下 没有绑定手机号或者邮箱的，是否跳转到绑定页面
var is_third = true
try {
    let meta_third = parseInt($('meta[name=is_third]').attr('content'))
    is_third = meta_third === 1 || isNaN(meta_third)
} catch (ex) {}
// 获取浏览器语言
let browser_lang = navigator.systemLanguage || navigator.language

// 邦课堂兑换弹窗 我已兑换
function big_class_ydh(){
    console.log("我已兑换")
    $.ajax('/async/del_redemption_toast', {
        type: 'get',
        datatype: 'json',
        success: function (result) {
            if(result.state==0){
                layer.closeAll()
            }
        }
    })
}

// 倒计时
let day = 0,
    hour = 0,
    minute = 0,
    second = 0;

SetRemainTime()
var InterValObj = setInterval(function () {
    SetRemainTime()
}, 1000)

function SetRemainTime() {
    let endtime = new Date("2022-12-31 23:59:59").getTime()

    let time = new Date().getTime()
    let time_flag = (endtime - time) / 1000

    if (time_flag > 0) {
        var second = Math.floor(time_flag % 60); // 计算秒     
        var minite = Math.floor((time_flag / 60) % 60); //计算分 
        var hour = Math.floor((time_flag / 3600) % 24); //计算小时
        var day = Math.floor((time_flag / 3600) / 24); //计算天 
        // console.log("距离2022-12-31 23:59:59还有" + day + "天" + hour + "时" + minite + "分" + second + "秒")

        $("#day").text(day)
        $("#hour").text(hour)
        $("#minite").text(minite)
        $("#second").text(second)
        // 最后一小时红色显示
        if (time_flag <= 3600) {
            $("#second").css("color", "red")
            $("#minite").css("color", "red")
        }

    } else {
        if (InterValObj) window.clearInterval(InterValObj);
    }
}

//百度统计所有用户
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?c131adc40651cdf84b4c7d5fdfbec963";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();



if (wg.user.vip_level == '') {
    // 普通用户
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a8c19c55e08ffe6ce37848ec47e2d406";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();


} else if (wg.user.vip_level == 'v') {
    // vip
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2ffe39a2673eb75fec2179849120d4cc";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

} else if (wg.user.vip_level == 'bd' || wg.user.vip_level == 'yd') {
    // 钻石用户
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?4dfc744c0ddf2d15aa3f0c6bfe2900e3";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}



//右侧咨询内容
let consult_module_html = ''
if (wg.lang == 'cn') {

    $(function () {
        var _qidian1 = document.createElement('script');
        _qidian1.id = 'qd2885855166b3a2587822b57a6088c98d9d0e937271';
        _qidian1.type = 'text/javascript';
        _qidian1.async = true;
        _qidian1.charset = 'utf-8';
        _qidian1.defer = true;
        _qidian1.src = (document.location.protocol + '//wp.qiye.qq.com/qidian/2885855166/b3a2587822b57a6088c98d9d0e937271');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_qidian1);

        var _qidian2 = document.createElement('script');
        _qidian2.id = 'qd2885855166645343e3414ba13171195bb2fa73647c';
        _qidian2.type = 'text/javascript';
        _qidian2.async = true;
        _qidian2.charset = 'utf-8';
        _qidian2.defer = true;
        _qidian2.src = (document.location.protocol + '//wp.qiye.qq.com/qidian/2885855166/645343e3414ba13171195bb2fa73647c');
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_qidian2);
    });

    $('body').append('<div class="right-web-fixed" id="consult_module"></div>')

    // $('body').append('<div class="right-web-fixed" id="consult_module"></div><div class="study-fixed">' +
    //    '<a href="https://www.wjx.cn/vj/hMwrNbk.aspx" target="_blank"><img src="https://static.52wmb.com/wmb_new/images/diaoyan.png"/></a>' +
    //    '</div>')    


    consult_module_html += '<a  href="javascript:void(0)" class="wx-fixed">' +
        '<i><svg t="1665989078943" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2528" width="30" height="30"><path d="M767.818667 409.173333C867.338667 444.266667 938.666667 539.136 938.666667 650.666667c0 42.709333-10.496 83.978667-30.261334 120.842666-1.792 3.338667-4.992 8.928-9.696 16.96l14.613334 53.557334c6.506667 23.893333-15.402667 45.813333-39.296 39.296l-53.642667-14.634667-6.229333 3.669333A254.933333 254.933333 0 0 1 682.666667 906.666667c-77.994667 0-147.84-34.88-194.805334-89.888a352.608 352.608 0 0 1-56.64 4.554666c-63.338667 0-124.266667-16.853333-177.472-48.298666-1.834667-1.088-6.410667-3.733333-13.632-7.893334l-80.544 21.653334c-23.914667 6.432-45.76-15.573333-39.146666-39.434667l21.792-78.752a961.205333 961.205333 0 0 1-15.904-27.317333A336.384 336.384 0 0 1 85.333333 480c0-188.618667 154.965333-341.333333 345.888-341.333333 159.914667 0 297.984 108.010667 335.818667 259.296 0.949333 3.765333 1.173333 7.552 0.778667 11.2z m-68.106667-13.952C662.88 282.037333 555.178667 202.666667 431.221333 202.666667 275.434667 202.666667 149.333333 326.933333 149.333333 480c0 46.272 11.498667 90.837333 33.194667 130.698667 2.88 5.290667 10.176 17.706667 21.621333 36.746666a32 32 0 0 1 3.413334 25.013334l-10.517334 37.994666 39.232-10.549333a32 32 0 0 1 24.234667 3.146667c14.272 8.192 22.773333 13.098667 25.802667 14.890666A283.882667 283.882667 0 0 0 431.221333 757.333333c6.154667 0 12.288-0.192 18.389334-0.576A255.061333 255.061333 0 0 1 426.666667 650.666667c0-141.386667 114.613333-256 256-256 5.728 0 11.413333 0.192 17.045333 0.554666z m133.706667 397.056a32 32 0 0 1 3.338666-24.725333 996.672 996.672 0 0 0 15.242667-26.293333A190.997333 190.997333 0 0 0 874.666667 650.666667c0-106.037333-85.962667-192-192-192s-192 85.962667-192 192 85.962667 192 192 192a190.933333 190.933333 0 0 0 98.570666-27.2c2.208-1.322667 8.288-4.874667 18.517334-10.837334a32 32 0 0 1 24.522666-3.210666l12.565334 3.424-3.424-12.565334zM330.666667 426.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z m192 0a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z m85.333333 202.666666a32 32 0 1 1 0-64 32 32 0 0 1 0 64z m149.333333 0a32 32 0 1 1 0-64 32 32 0 0 1 0 64z" p-id="2529" fill="#fff"></path></svg></i>' +
        '<font>微信</font>' +
        '<div>' +
        '<img src="https://static.52wmb.com/wmb_new/images/qiwei_ewm.png?v=20221017"/> ' +
        '</div>' +
        '</a>'

    consult_module_html += '<a  href="javascript:void(0)" class="ty-fixed" id="wmb_qidian_1" title="网站、数据咨询">' +
        '<i><svg t="1647016819337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12659" width="30" height="30"><path d="M870.4512 555.008a273.92 273.92 0 0 0-55.296-99.328v-4.096a153.6 153.6 0 0 0-17.408-71.68 291.84 291.84 0 0 0-285.696-292.864 291.328 291.328 0 0 0-285.184 293.376 153.6 153.6 0 0 0-17.408 71.168v3.072a282.624 282.624 0 0 0-55.808 102.4c-27.136 89.088-21.504 190.976 41.472 212.992l12.288 3.072c-8.704 14.336-13.312 30.8224-13.312 47.616 0 68.608 74.752 118.272 177.664 118.272a235.52 235.52 0 0 0 131.072-35.328h18.432a235.008 235.008 0 0 0 130.56 35.328c102.4 0 178.176-51.2 178.176-118.272a87.552 87.552 0 0 0-13.824-47.616 51.2 51.2 0 0 0 12.8-3.072c62.976-24.064 68.608-125.952 41.472-215.04z m-77.824 132.608a33.792 33.792 0 0 0-30.72-12.8 33.792 33.792 0 0 0-27.648 18.944 346.112 346.112 0 0 1-23.552 36.864 36.352 36.352 0 0 0-6.144 30.72 35.84 35.84 0 0 0 20.48 24.064c20.992 9.216 34.304 22.016 34.304 33.28 0 22.016-46.08 46.592-107.52 46.592a153.6 153.6 0 0 1-96.256-27.648 35.84 35.84 0 0 0-25.6-8.704 204.8 204.8 0 0 1-35.328 0 34.816 34.816 0 0 0-26.112 8.704 153.6 153.6 0 0 1-96.768 27.648c-61.44 0-107.008-24.576-107.008-46.592 0-11.264 13.312-24.064 34.816-33.28a36.864 36.864 0 0 0 13.824-55.296 247.296 247.296 0 0 1-23.04-36.864 37.376 37.376 0 0 0-27.648-18.944 37.888 37.888 0 0 0-31.232 12.8 72.704 72.704 0 0 1-12.8 13.312 167.936 167.936 0 0 1 0-124.416 209.92 209.92 0 0 1 51.2-83.456 35.328 35.328 0 0 0 10.752-31.744 68.608 68.608 0 0 1 0-10.24 86.528 86.528 0 0 1 11.776-40.96 41.984 41.984 0 0 0 5.12-24.576 220.16 220.16 0 0 1 214.528-226.304 221.184 221.184 0 0 1 215.04 227.84 33.28 33.28 0 0 0 5.12 20.992c8.0384 13.312 12.4416 28.4672 12.8 44.032 0.256 3.584 0.256 7.168 0 10.752a37.376 37.376 0 0 0 9.216 30.72 204.8 204.8 0 0 1 51.2 82.944 176.128 176.128 0 0 1 3.584 123.904 40.96 40.96 0 0 1-16.384-12.288z" p-id="12660" fill="#fff"></path></svg></i>' +
        '<font>' + unity_lang('right_fixed_consult') + '</font>' +
        '</a>'


    var user_level_consult = 'ty'
    var user_experience = ''
    var user_vip = {
        vipMarkLevel: {
            'ty': -1,
            'guest': 0,
            '': 1,
            'v': 2,
            'bd': 3,
            'yd': 4
        },
    }
    if (wg.user.id) {
        user_level_consult = wg.user.vip_level
        user_experience = wg.user.experience;
        user_experience = user_experience !== undefined ? user_experience : ''
    }
    if (user_vip.vipMarkLevel[user_level_consult] <= 3 && user_experience != 'yd') {
        consult_module_html += '<a href="javascript:void(0)" class="top-fixed" title="申请钻石会员体验" id="wmb_qidian_2"  >' +
            '<i><svg t="1647017033241" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13811" width="30" height="30"><path d="M930.986667 450.773333l2.133333-2.986666 1.92-4.266667c0-1.066667 1.066667-2.133333 1.493333-3.413333a27.52 27.52 0 0 0 0-4.053334 22.613333 22.613333 0 0 0 0-4.053333 77.226667 77.226667 0 0 0 0-8.106667 13.44 13.44 0 0 0 0-4.053333 26.666667 26.666667 0 0 0 0-4.053333 24.533333 24.533333 0 0 0-1.28-3.626667 35.626667 35.626667 0 0 0-1.706666-4.266667l-1.066667-2.56-2.773333-4.266666-170.666667-213.333334-1.92-2.133333-2.346667-2.56-3.84-2.986667-2.773333-1.92-4.266667-2.346666-3.413333-1.28-4.266667-1.493334H288l-4.053333 1.493334-3.413334 1.28-4.266666 2.346666-2.773334 1.92-3.626666 2.986667-2.56 2.56-1.92 2.133333-170.666667 213.333334-2.773333 4.266666-1.706667 2.986667a35.626667 35.626667 0 0 0-1.706667 4.266667 24.533333 24.533333 0 0 0-1.28 3.626666 26.666667 26.666667 0 0 0 0 4.053334 13.44 13.44 0 0 0 0 4.053333 77.226667 77.226667 0 0 0 0 8.106667 22.613333 22.613333 0 0 0 0 4.053333 27.52 27.52 0 0 0 0 4.053333c0 1.28 1.066667 2.346667 1.493334 3.413334l1.92 4.266666 2.133333 2.986667 2.773333 3.84 384 426.666667 1.706667 1.493333 1.493333 1.706667 2.133334 1.706666 2.986666 2.133334 4.48 2.56 2.773334 1.28a32.64 32.64 0 0 0 5.546666 1.706666h2.346667A36.693333 36.693333 0 0 0 512 896a36.693333 36.693333 0 0 0 8.32 0h2.346667a32.64 32.64 0 0 0 5.546666-1.706667l2.773334-1.28 4.48-2.56 2.986666-2.133333 2.133334-1.706667 1.493333-1.706666 1.706667-1.493334 384-426.666666zM512 789.333333L183.893333 425.173333 320 256h384l135.253333 169.173333z" p-id="13812" fill="#fff"></path><path d="M320 384m42.666667 0l298.666666 0q42.666667 0 42.666667 42.666667l0 0q0 42.666667-42.666667 42.666666l-298.666666 0q-42.666667 0-42.666667-42.666666l0 0q0-42.666667 42.666667-42.666667Z" p-id="13813" fill="#fff"></path></svg></i>' +
            '<font>' + unity_lang('right_fixed_out') + '</font>' +
            '</a>'
    }
    consult_module_html += '<a class="ask-fixed" onclick="topFunction()" id="myBtn">' +
        '<i><svg t="1647013805377" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3787" width="30" height="30"><path d="M66.56 105.805a38.927 38.927 0 0 1 38.922-38.928h813.036c21.504 0 38.927 17.429 38.927 38.928a38.927 38.927 0 0 1-38.927 38.932H105.482a38.927 38.927 0 0 1-38.922-38.932z m445.527 109.767a38.938 38.938 0 0 1 38.933 38.933v663.69a38.932 38.932 0 0 1-77.86 0V254.5a38.932 38.932 0 0 1 38.927-38.928z" fill="#555" p-id="3788"></path><path d="M484.572 227.22a38.932 38.932 0 0 1 55.04 0L831.74 519.357a38.922 38.922 0 0 1 0 55.046 38.912 38.912 0 0 1-55.04 0L484.572 282.27a38.912 38.912 0 0 1 0-55.05z" fill="#555" p-id="3789"></path><path d="M539.612 227.22a38.932 38.932 0 0 1 0 55.056L247.475 574.403a38.902 38.902 0 0 1-55.045 0 38.912 38.912 0 0 1 0-55.046L484.572 227.22a38.932 38.932 0 0 1 55.04 0z" fill="#555" p-id="3790"></path></svg></i>' +
        '</a>'
    $("#consult_module").html(consult_module_html)
} else {
    $('body').append('<div class="right-web-fixed" id="consult_module"></div>')

    // $('body').append('<div class="right-web-fixed" id="consult_module"></div><div class="study-fixed">' +
    // '<a href="http://zpblzb638zhm8wnm.mikecrm.com/qIVqpeA" target="_blank"><img src="'+ wg.static +'images/diaoyan_en.png"/></a>' +
    // '</div>')


    consult_module_html += '<a href="https://www.facebook.com/greatexportimport" target="_blank" class="fb-fixed">' +
        ' <i><svg t="1665987759654" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2674" width="27" height="27"><path d="M625.0496 184.32h169.984v-163.84h-178.176c-147.0464 0-218.7264 137.6256-218.7264 272.7936V348.16H228.5568v158.5152l169.984 5.3248v491.52h169.984v-491.52l226.5088-5.3248V348.16h-226.5088V238.7968c0-32.3584 35.6352-54.4768 56.5248-54.4768z" fill="#ffffff" p-id="2675"></path></svg></i>' +
        '<font>FB</font>' +
        '</a>' +

        '<a href="https://wpa.qq.com/msgrd?v=3&uin=800183629&site=qq&menu=yes" target="_blank" class="ty-fixed">' +
        ' <i><svg t="1647016819337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12659" width="30" height="30"><path d="M870.4512 555.008a273.92 273.92 0 0 0-55.296-99.328v-4.096a153.6 153.6 0 0 0-17.408-71.68 291.84 291.84 0 0 0-285.696-292.864 291.328 291.328 0 0 0-285.184 293.376 153.6 153.6 0 0 0-17.408 71.168v3.072a282.624 282.624 0 0 0-55.808 102.4c-27.136 89.088-21.504 190.976 41.472 212.992l12.288 3.072c-8.704 14.336-13.312 30.8224-13.312 47.616 0 68.608 74.752 118.272 177.664 118.272a235.52 235.52 0 0 0 131.072-35.328h18.432a235.008 235.008 0 0 0 130.56 35.328c102.4 0 178.176-51.2 178.176-118.272a87.552 87.552 0 0 0-13.824-47.616 51.2 51.2 0 0 0 12.8-3.072c62.976-24.064 68.608-125.952 41.472-215.04z m-77.824 132.608a33.792 33.792 0 0 0-30.72-12.8 33.792 33.792 0 0 0-27.648 18.944 346.112 346.112 0 0 1-23.552 36.864 36.352 36.352 0 0 0-6.144 30.72 35.84 35.84 0 0 0 20.48 24.064c20.992 9.216 34.304 22.016 34.304 33.28 0 22.016-46.08 46.592-107.52 46.592a153.6 153.6 0 0 1-96.256-27.648 35.84 35.84 0 0 0-25.6-8.704 204.8 204.8 0 0 1-35.328 0 34.816 34.816 0 0 0-26.112 8.704 153.6 153.6 0 0 1-96.768 27.648c-61.44 0-107.008-24.576-107.008-46.592 0-11.264 13.312-24.064 34.816-33.28a36.864 36.864 0 0 0 13.824-55.296 247.296 247.296 0 0 1-23.04-36.864 37.376 37.376 0 0 0-27.648-18.944 37.888 37.888 0 0 0-31.232 12.8 72.704 72.704 0 0 1-12.8 13.312 167.936 167.936 0 0 1 0-124.416 209.92 209.92 0 0 1 51.2-83.456 35.328 35.328 0 0 0 10.752-31.744 68.608 68.608 0 0 1 0-10.24 86.528 86.528 0 0 1 11.776-40.96 41.984 41.984 0 0 0 5.12-24.576 220.16 220.16 0 0 1 214.528-226.304 221.184 221.184 0 0 1 215.04 227.84 33.28 33.28 0 0 0 5.12 20.992c8.0384 13.312 12.4416 28.4672 12.8 44.032 0.256 3.584 0.256 7.168 0 10.752a37.376 37.376 0 0 0 9.216 30.72 204.8 204.8 0 0 1 51.2 82.944 176.128 176.128 0 0 1 3.584 123.904 40.96 40.96 0 0 1-16.384-12.288z" p-id="12660" fill="#fff"></path></svg></i>' +
        '<font>咨询</font>' +
        '</a>' +

        '<a href="https://api.whatsapp.com/send?phone=+8616621075894&text=Hello" target="_blank" class="top-fixed">' +
        '<i><svg t="1652100675184" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912" width="24" height="24"><path d="M872.992 148.8C777.184 52.8 649.792 0 513.984 0 234.368 0 6.784 227.584 6.784 507.392c0 89.408 23.392 176.8 67.808 253.6L2.592 1024l268.992-70.592a507.456 507.456 0 0 0 242.4 61.792h0.192c279.616 0 507.392-227.616 507.392-507.392 0-135.616-52.8-263.008-148.608-359.008z m-358.784 780.8a421.44 421.44 0 0 1-214.816-58.784l-15.392-9.216-159.584 41.792 42.592-155.616-10.016-16a418.752 418.752 0 0 1-64.608-224.384c0-232.608 189.184-421.792 422.016-421.792 112.608 0 218.592 44 298.208 123.584a419.456 419.456 0 0 1 123.392 298.4c-0.192 232.8-189.408 422.016-421.792 422.016z m231.2-316c-12.608-6.4-75.008-36.992-86.592-41.216s-20-6.4-28.608 6.4c-8.384 12.608-32.8 41.216-40.192 49.792-7.392 8.384-14.784 9.6-27.392 3.2s-53.6-19.808-102.016-63.008c-37.6-33.6-63.2-75.2-70.592-87.808s-0.8-19.616 5.6-25.792c5.792-5.6 12.608-14.816 19.008-22.208s8.384-12.608 12.608-21.184c4.192-8.384 2.208-15.808-0.992-22.208s-28.608-68.8-39.008-94.208c-10.208-24.8-20.8-21.408-28.608-21.792-7.392-0.384-15.808-0.384-24.192-0.384s-22.208 3.2-33.792 15.808c-11.616 12.608-44.384 43.392-44.384 105.792s45.408 122.592 51.808 131.2c6.4 8.384 89.408 136.608 216.608 191.392 30.208 12.992 53.792 20.8 72.192 26.784 30.4 9.6 58.016 8.192 79.808 4.992 24.384-3.616 75.008-30.592 85.6-60.192s10.592-55.008 7.392-60.192c-3.008-5.6-11.392-8.8-24.192-15.2z" p-id="1913" fill="#fff"></path></svg></i>' +
        '<font>Trial</font>' +
        '<div>' +
        //'<img src="https://static.52wmb.com/wmb_img/share/en_whatsapp_left.png?v=20201105"/> ' +
        '<img src="https://static.52wmb.com/wmb_new/images/en_whatsapp_left_new.png?v=20221207"/> ' +
        '</div>' +
        '</a>' +
        '<a class="ask-fixed" onclick="topFunction()" id="myBtn">' +
        '<i><svg t="1647013805377" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3787" width="30" height="30"><path d="M66.56 105.805a38.927 38.927 0 0 1 38.922-38.928h813.036c21.504 0 38.927 17.429 38.927 38.928a38.927 38.927 0 0 1-38.927 38.932H105.482a38.927 38.927 0 0 1-38.922-38.932z m445.527 109.767a38.938 38.938 0 0 1 38.933 38.933v663.69a38.932 38.932 0 0 1-77.86 0V254.5a38.932 38.932 0 0 1 38.927-38.928z" fill="#555" p-id="3788"></path><path d="M484.572 227.22a38.932 38.932 0 0 1 55.04 0L831.74 519.357a38.922 38.922 0 0 1 0 55.046 38.912 38.912 0 0 1-55.04 0L484.572 282.27a38.912 38.912 0 0 1 0-55.05z" fill="#555" p-id="3789"></path><path d="M539.612 227.22a38.932 38.932 0 0 1 0 55.056L247.475 574.403a38.902 38.902 0 0 1-55.045 0 38.912 38.912 0 0 1 0-55.046L484.572 227.22a38.932 38.932 0 0 1 55.04 0z" fill="#555" p-id="3790"></path></svg></i>' +
        '</a>'
    $("#consult_module").html(consult_module_html)
}

$(function () {
    // get_consult()
    var thirdid = getCookies('third', 'thirdid'),
        has_login = wg.user.id != null,
        to_bind = has_login ? !(wg.user.user_name || wg.user.user_phone) : false
    if (thirdid && is_third && to_bind) {
        var ref_url = '?redirectUrl=' + encodeURIComponent(window.location.href);
        window.location.href = '/third/return' + ref_url
        return
    }
    // region 输入框的清空相关操作
    $(document).on('focus', '.clear-target', function () {
        if ($(this).val()) {
            $(this).siblings('.clear-txt').show()
        } else {
            $(this).siblings('.clear-txt').hide()
        }
    })
    $(document).on('input', '.clear-target', function () {
        if ($(this).val()) {
            $(this).siblings('.clear-txt').show()
        } else {
            $(this).siblings('.clear-txt').hide()
        }
    })
    $(document).on('blur', '.clear-target', function () {
        if ($(this).val()) {
            $(this).siblings('.clear-txt').show()
        } else {
            $(this).siblings('.clear-txt').hide()
        }
    })
    $(document).on('click', '.clear-txt', function () {
        let $search = $($(this).data('esearch'))
        $(this).siblings('.clear-target').val('').change()
        $(this).hide()
        if ($search.length > 0) return $search.click()
        let efun = $(this).data('efun')
        try {
            window[efun]()
        } catch (e) {}
    })
    if ($(".clear-target").val()) $(".clear-target").siblings('.clear-txt').show()

    // $(document).on('click', '#consult_btn', function () {
    //     window.open("https://wpa.qq.com/msgrd?v=3&uin=800183629&site=qq&menu=yes");
    // })
    // $(document).on('click', '#try_btn', function () {
    //     window.open("https://api.whatsapp.com/send?phone=+8616621075894&text=Hello");

    // })
    // endregion

    // 统一tab切换
    $(document).on('click', '.tab:not(.failure)', function () {
        // failure 切换功能失效，但是样式啥的都要保留
        $(this).addClass('active').siblings('.tab').removeClass('active')
        console.log($(this).index())
        var _target = $(this).data('target'),
            _pos = $(this).data('pos')
        if (_target) {

            if (_pos) {
                $(_target).find(_pos).addClass('active').siblings('.tab-pane').removeClass('active')
            } else {
                $(_target).find('.tab-pane').eq($(this).index()).addClass('active').siblings('.tab-pane').removeClass('active')
            }
        }
    })

    // 统一文本缩短 / 显示
    $(document).on('click', 'a.txt-shrink-open', function () {
        let $this = $(this),
            open = $this.data('open'),
            $shrink_txt = $(this).siblings('.shrink-txt'),
            content = $shrink_txt.data('text'),
            callback = $this.data('callback')
        if (!open) {
            $shrink_txt.html(content)
            $this.data('open', true).html(unity_lang('company_list_product_close'))
        } else {
            let length = $(this).parents('.shrink-module').data('length')
            $shrink_txt.html(content.substring(0, length) + '...')
            $this.data('open', false).html(unity_lang('company_list_product_open'))
        }
        if (callback) callback($shrink_txt)
    })

    $(document).on('click', '[data-wstats]', function () {
        wstats($(this).data('wstats'), $(this).data('wstats-ext') || '')
    })

    var _tool_list = '<li><a href="/user/datacenter/potential" target="_blank"><i><svg t="1652195244151" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5286" width="17" height="17"><path d="M291.61984 416.9472c-44.2624 0-80.14336-35.88096-80.14336-80.13824 0-44.2624 35.88096-80.14336 80.14336-80.14336 44.25728 0 80.13824 35.88096 80.13824 80.14336 0 44.25728-35.88096 80.13824-80.13824 80.13824z m0-40.06912a40.06912 40.06912 0 1 0 0-80.13824 40.06912 40.06912 0 0 0 0 80.13824z m0 280.48384c-44.2624 0-80.14336-35.87584-80.14336-80.13824 0-44.25728 35.88096-80.13824 80.14336-80.13824 44.25728 0 80.13824 35.88096 80.13824 80.13824 0 44.2624-35.88096 80.13824-80.13824 80.13824z m0-40.06912a40.06912 40.06912 0 1 0 0-80.13824 40.06912 40.06912 0 0 0 0 80.13824z m0 200.3456a40.06912 40.06912 0 1 0 0-80.13824 40.06912 40.06912 0 0 0 0 80.14336z m0-120.20736c44.25728 0 80.13824 35.88096 80.13824 80.14336 0 44.25728-35.88096 80.13824-80.13824 80.13824-44.2624 0-80.14336-35.88096-80.14336-80.13824 0-44.2624 35.88096-80.14336 80.14336-80.14336z m520.90368 60.1088a20.03456 20.03456 0 1 1 0 40.06912H491.96544a20.03456 20.03456 0 0 1 0-40.06912h320.55808z m0-200.3456a20.03456 20.03456 0 1 1 0 40.064H491.96544a20.03456 20.03456 0 1 1 0-40.06912h320.55808z m0-240.41984a20.03456 20.03456 0 0 1 0 40.06912H491.96544a20.03456 20.03456 0 0 1 0-40.06912h320.55808zM111.30368 96.38912a20.03456 20.03456 0 0 0-20.03456 20.03456v801.39264a20.03456 20.03456 0 0 0 20.03456 20.03456h801.39264a20.03456 20.03456 0 0 0 20.03456-20.03456V116.42368a20.03456 20.03456 0 0 0-20.03456-20.03456H111.30368z m0-40.06912h801.39264C945.88928 56.32 972.8 83.23072 972.8 116.4288v801.3824c0 33.19808-26.91072 60.1088-60.1088 60.1088H111.3088C78.1056 977.92 51.2 951.00928 51.2 917.8112V116.4288C51.2 83.2256 78.11072 56.32 111.3088 56.32z" p-id="5287"></path></svg></i><p>' + unity_lang('toolbar_nav_collection') + '</p><span><font>&gt;</font></span></a></li>' +
        ' <li><a href="/user/datacenter/label" target="_blank"><i><svg t="1652196022050" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22570" width="18" height="18"><path d="M835 959.2c-15.2 0-30.9-4.5-46-13.4L513.5 783.5 235 946c-28.3 16.2-58.7 17.3-83.4 3-25.7-14.9-40.4-43.6-40.4-78.8V174.5c0-60.5 47.2-109.7 105.2-109.7h592.1c26.9 0 52.5 10.9 72.1 30.7 20.7 21 32.5 50.2 32.2 80.2v694.6c0 34.9-15.3 64.6-41 79.2-11.4 6.4-23.9 9.7-36.8 9.7zM513.7 714l305.9 180.2c8.8 5.2 17 6.4 22.4 3.2 6.7-3.8 10.8-14 10.8-27.1V175.2c0.1-14.1-5.3-27.8-14.9-37.5-8.2-8.3-18.7-12.9-29.4-12.9H216.4c-24.9 0-45.2 22.3-45.2 49.7v695.7c0 13 3.9 23.1 10.5 26.9 5.7 3.3 14.2 2.1 23.4-3.1l308.6-180z" fill="#333333" p-id="22571"></path><path d="M314.2 283.2h395.6c13.7 0 24.7 11.1 24.7 24.7 0 13.7-11.1 24.7-24.7 24.7H314.2c-13.7 0-24.7-11.1-24.7-24.7s11-24.7 24.7-24.7z" fill="#333333" p-id="22572"></path></svg></i><p>' + unity_lang('toolbar_nav_labels') + '</p><span><font>&gt;</font></span></a></li>	' +
        ' <li><a href="/user/datacenter/viewlog" target="_blank"><i><svg t="1652196194888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24294" width="18" height="18"><path d="M511.87137 1023.99975A512.06637 512.06637 0 0 1 312.473616 40.48796 512.26137 512.26137 0 0 1 983.51179 312.730625 511.67537 511.67537 0 0 1 511.87137 1023.99975z m0-945.623836a433.752466 433.752466 0 0 0-168.735792 833.328974 434.339466 434.339466 0 0 0 568.3113-230.839716 435.315464 435.315464 0 0 0 0-336.496586l-3.514995-8.20199A432.776467 432.776467 0 0 0 511.87137 78.375914z" p-id="24295"></path><path d="M511.285371 511.542381h234.355712a39.059952 39.059952 0 0 1 0 78.118903H472.226419a39.059952 39.059952 0 0 1-39.059952-39.059951V277.186669a39.059952 39.059952 0 0 1 78.118904 0z" p-id="24296"></path></svg></i><p>' + unity_lang('toolbar_nav_viewed') + '</p><span><font>&gt;</font></span></a></li>'
    $("#tool_list").html(_tool_list)

    if ($('#df_head').length > 0) {
        $('body').append('\n' +
            '<div class="sjj-right">\n' +
            '    <a href="/2022-data-festival" target="_blank">\n' +
            '        <div class="sjj-right-text"><img src="https://static.52wmb.com/wmb_new/images/sjj_images/sjj_qiqiu.png"/></div>\n' +
            '        <div class="sjj-right-c">\n' +
            '            <b>2023</b>\n' +
            '            <span>' + unity_lang('sjj_right_name') + '</span>\n' +
            '            <font>' + unity_lang('sjj_right_enter') + '</font>\n' +
            '        </div>\n' +
            '    </a>\n' +
            '</div>')
    }
    wmb_cf()
    full_top()
    full_pop()
    // build_shrink_open()
    // 邀约体验入口
    experience_invite_entrance()
    experience_ing()
    pop_experience_pause(wg.user.user_functional || {}, false)
    // line 消息统计
    line_message_stats()
    lower_right()
})

$(function(){
    $('#top_notice .notice-close').click(function () {
        console.log("关闭top")
        $.wSetCookie('_TNOTICE_0002', '1', 86400 * 30, function () {
            $('#top_notice').remove()
        })
    })
})

function show_cj_toast(){
    full_pop('jdhd_cj')
}

function wmb_cf() {
    var $cf = $('wmb-cf')
    console.log($cf.length, 'cf')
    $.each($cf, function (a, b) {
        // wmb_cf_parse($(b).html())
    })
}

function wmb_cf_parse(text) {
    var arr = text.split(''),
        bytes = []
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) bytes.push(arr[i])
    }
    return bytes.join('')
}

/***
 * 依次执行方法
 * @param task
 */
function watertask(task) {
    if (!task) return
    if (task.length <= 0) return
    let index = 0

    function next_task() {
        if (index > task.length - 1) return

        task[index](function () {
            index++
            next_task()
        })
    }
    next_task()
}

function lower_right() {
    if (no_full_pop == 'yes') return false
    if (setLiveRecommend({})) return;
    return;
    if (!wg.user.id) return;
    $.wajax('/async/lower/right', {
        type: 'get',
        datatype: 'json/text',
        success: function (result) {
            if (result.state != 0) return;
            let lrc = getCookies('_LRC')
            window[result.fn](result, lrc == 'hide' ? 'hide' : '')
            // window[result.fn](result, 'show')
        }
    })
}


function line_invite_open(result, st) {
    if (result.data.list.length <= 0) return;
    let data = result.data || {},
        _list = data.list || [],
        _title = '',
        _head = '',
        _body = '',
        _ft = '<a target="_blank" class="lower-right-foot-button circle-lk" href="/user/line/edit">开通</a>' +
        '<span>这里显示</span>'
    _title = '<h2 class="title">' + unity_lang('line_windows_nopipei_noopen_title') + '</h2>'
    _head = '<p class="head-ls">' + unity_lang('line_windows_nopipei_noopen_des') + '</p>'
    _body += '<ul class="rowup-member bang-line-list">'
    $.each(_list, function (a, b) {
        _body += '<li><a href="' + line_route + '/line/' + b.user_id + '" target="_blank">' +
            '<div class="rowup-content">' +
            '<img src="https://static.52wmb.com/bangline/upload/images/' + b.avatar + '">' +
            '<h3>' + b.name + '<font>(' + b.position + ')</font></h3>' +
            '<span>' + b.verb + ' ' + b.products + '</span>' +
            '<span>' + b.promote_cnt + '' + unity_lang('line_windows_display') + '<font>|</font>' + b.post_cnt + '' + unity_lang('line_windows_posts') + '<font>|</font>' + b.attention_cnt + '' + unity_lang('line_windows_follow') + '</span>' +
            '</a></li>'
    })
    _body += '</ul>'
    _ft = '<div class="window-bottom"><font>' + unity_lang('line_windows_nopipei_noopen_button_des') + '</font><a href="/user/line/edit" target="_blank">' + unity_lang('line_windows_nopipei_noopen_button') + '</a></div>'

    build_lower_right({
        display: st,
        title: _title,
        head: _head,
        body: _body,
        foot: _ft,
        cst: 0
    })
}

function line_circle_data(result, st) {
    if (result.data.list.length <= 0) return;
    let data = result.data || {},
        _list = data.list || [],
        _title = '',
        _head = '',
        _body = '',
        _tabs = '',
        _ft = ''
    if (_list.length > 1) {

        //_title = '<h2 class="title">' + _list[0].name + '行业圈动态</h2>'
        _title = '<h2 class="title">' + replaceKey(unity_lang('line_windows_group_join_title'), '[@行业]', _list[0].name) + '</h2>'
        _head = '<p class="head-ls">' + replaceKey(unity_lang('line_group_people'), '[@人数]', _list[0].user_count) + '<span>|</span>' + replaceKey(unity_lang('line_windows_posts_number'), '[@帖子]', _list[0].topic_count) + '</p>'

        $.each(_list, function (a, b) {
            _tabs += '<li data-name="' + b.name + '" data-cid="' + b.id + '" data-uc="' + b.user_count + '" data-tc="' + b.topic_count + '"  class="tab ' + (a == 0 ? 'active' : '') + '" data-target="#lr_circle_topic_list" onclick="cl_circle_tab(this)">' + b.name + '</li>'
            _body += '<div class="item tab-pane ' + (a == 0 ? 'active' : '') + '">'
            _body += '<ul class="rowup">'
            $.each(b.topic_list, function (ta, tb) {
                _body += '<li>\n' +
                    '     <h4>\n' +
                    '         <a href="' + line_route + '/line/' + tb.user_id + '" target="_blank">\n' +
                    '             <img src="https://static.52wmb.com/bangline/upload/images/' + tb.avatar + '"/>\n' +
                    '             ' + tb.name + '<span>(' + tb.position + ')</span><font>' + topic_time(tb.create_time) + '</font>\n' +
                    '         </a>\n' +
                    '     </h4>\n' +
                    '     <p>\n' +
                    '         <a href="' + line_route + '/topic/' + tb.id + '" target="_blank">' + tb.contents.slice(0, 100) + '</a>\n' +
                    '     </p>'
                if (tb.images) {
                    _body += '<p class="line-new-body-imgs"><a href="' + line_route + '/topic/' + tb.id + '" target="_blank">'
                    let images = tb.images.split(',')
                    $.each(images, function (ia, ib) {
                        _body += '<img src="https://static.52wmb.com/bangline/upload/images/' + ib + '">'
                    })
                    _body += ' </a></p>'
                }
                _body += ' </li>'
            })
            _body += '</ul>'
            _body += '</div>'
        })
        _head += '<ul class="tab-list tabs">' + _tabs + '</ul>'
        _body = '<div class="tab-con" id="lr_circle_topic_list">' + _body + '</div>'
        //_ft = '<a target="_blank" class="lower-right-foot-button circle-lk" href="' + line_route + '/group-' + _list[0].id + '">发帖</a>'
        //_ft += '<span>这里显示</span>'
        _ft = '<div class="window-bottom"><font>' + unity_lang('line_windows_group_join_button_des') + '</font><a href="' + line_route + '/group-' + _list[0].id + '" target="_blank">' + unity_lang('line_windows_group_join_button') + '</a></div>'

    } else {
        let dt = data.list[0]
        // _title = ' <h2>' + dt.name + '圈动态</h2>'
        _title = '<h2>' + replaceKey(unity_lang('line_windows_group_join_title'), '[@行业]', dt.name) + '</h2>'
        _head = '<p class="head-ls">' + replaceKey(unity_lang('line_group_people'), '[@人数]', dt.user_count) + '<span>|</span>' + replaceKey(unity_lang('line_windows_posts'), '[@帖子]', dt.topic_count) + '</p>'
        _body += '<ul class="rowup">'
        $.each(dt.topic_list, function (ta, tb) {
            _body += '<li>\n' +
                '     <h4>\n' +
                '         <a href="' + line_route + '/line/' + tb.user_id + '" target="_blank">\n' +
                '             <img src="https://static.52wmb.com/bangline/upload/images/' + tb.avatar + '"/>\n' +
                '             ' + tb.name + '<span>(' + tb.position + ')</span><font>' + topic_time(tb.create_time) + '</font>\n' +
                '         </a>\n' +
                '     </h4>\n' +
                '     <p>\n' +
                '         <a href="' + line_route + '/topic/' + tb.id + '" target="_blank">' + tb.contents.slice(0, 100) + '</a>\n' +
                '     </p>'
            if (tb.images) {
                _body += '<p class="line-new-body-imgs"><a href="' + line_route + '/topic/' + tb.id + '" target="_blank">'
                let images = tb.images.split(',')
                $.each(images, function (ia, ib) {
                    _body += '<img src="https://static.52wmb.com/bangline/upload/images/' + ib + '">'
                })
                _body += ' </a></p>'
            }
            _body += ' </li>'
        })
        _body += '</ul>'
        // _ft = '<span>' + unity_lang('line_windows_tips') + '</span>' +
        //     '<a href="' + line_route + '/group-' + dt.id + '" target="_blank" class="lower-right-foot-button">发帖</a>'
        _ft = '<div class="window-bottom"><font>' + unity_lang('line_windows_group_join_button_des') + '</font><a href="' + line_route + '/group-' + dt.id + '" target="_blank">' + unity_lang('line_windows_group_join_button') + '</a></div>'

    }
    build_lower_right({
        display: st,
        title: _title,
        head: _head,
        body: _body,
        foot: _ft,
        cst: 0
    })
}

function line_hy_user(result, st) {
    if (result.data.list.length <= 0) return;
    let data = result.data || {},
        _list = data.list || [],
        _title = '',
        _head = '',
        _body = '',
        _tabs = '',
        _ft = ''
    _title = ' <h2 class="title">' + unity_lang('line_windows_nopipei_open_title') + '</h2>'
    _head = '<p class="head-ls">' + unity_lang('line_windows_nopipei_open_title_des') + '</p>'
    _body += '<ul class="rowup-member bang-line-list">'
    $.each(_list, function (a, b) {
        _body += '<li>' +
            '<div class="rowup-content"><a href="' + line_route + '/line/' + b.user_id + '" target="_blank">' +
            '<img src="https://static.52wmb.com/bangline/upload/images/' + b.avatar + '"><h3>' + b.name + '<font>(' + b.position + ')</font></h3>' +
            '<span>' + b.verb + ' ' + b.products + '</span>' +
            '<span>' + b.promote_cnt + '' + unity_lang('line_windows_display') + '<font>|</font>' + b.post_cnt + '' + unity_lang('line_windows_posts') + '<font>|</font>' + b.attention_cnt + '' + unity_lang('line_windows_follow') + '</span>' +
            '</a></div></li>'
    })
    _body += '</ul>'
    _ft += '<div class="window-bottom"><font>' + unity_lang('line_windows_nopipei_open_button_des') + '</font><a href="https://line.52wmb.com/members" target="_blank">' + unity_lang('line_windows_nopipei_open_button') + '</a></div>'
    build_lower_right({
        display: st,
        title: _title,
        head: _head,
        body: _body,
        foot: _ft,
        cst: 0
    })

}

function match_circle(result, st) {
    if (result.data.list.length <= 0) return;
    let data = result.data || {},
        _list = data.list || [],
        _title = '',
        _head = '',
        _body = '',
        _tabs = '',
        _ft = ''
    if (_list.length > 1) {

        // _title = '<h2 class="title">邀您入驻' + _list[0].name + '圈</h2>'
        _title = '<h2>' + replaceKey(unity_lang('line_windows_pipei_noopen_title'), '[@行业]', _list[0].name) + '</h2>'
        _head = '<p class="head-ls">' + replaceKey(unity_lang('line_group_people'), '[@人数]', _list[0].user_count) + '<span>|</span>' + replaceKey(unity_lang('line_windows_posts'), '[@帖子]', _list[0].topic_count) + '</p>'

        $.each(_list, function (a, b) {
            _tabs += '<li data-name="' + b.name + '" data-cid="' + b.id + '" data-uc="' + b.user_count + '" data-tc="' + b.topic_count + '"  class="tab ' + (a == 0 ? 'active' : '') + '" data-target="#lr_circle_topic_list" onclick="cl_circle_tab(this)"><h2>' + b.name + '的动态</h2></li>'
            _body += '<div class="item tab-pane ' + (a == 0 ? 'active' : '') + '">'
            _body += '<ul class="rowup">'
            $.each(b.topic_list, function (ta, tb) {
                _body += '<li>\n' +
                    '     <h4>\n' +
                    '         <a href="' + line_route + '/line/' + tb.user_id + '" target="_blank">\n' +
                    '             <img src="https://static.52wmb.com/bangline/upload/images/' + tb.avatar + '"/>\n' +
                    '             ' + b.name + '<span>(' + tb.position + ')</span><font>' + topic_time(tb.create_time) + '</font>\n' +
                    '         </a>\n' +
                    '     </h4>\n' +
                    '     <p>\n' +
                    '         <a href="' + line_route + '/topic/' + tb.id + '" target="_blank">' + tb.contents.slice(0, 100) + '</a>\n' +
                    '     </p>'
                if (tb.images) {
                    _body += '<p class="line-new-body-imgs"><a href="' + line_route + '/topic/' + tb.id + '" target="_blank">'
                    let images = tb.images.split(',')
                    $.each(images, function (ia, ib) {
                        _body += '<img src="https://static.52wmb.com/bangline/upload/images/' + ib + '">'
                    })
                    _body += ' </a></p>'
                }
                _body += ' </li>'
            })
            _body += '</ul>'
            _body += '</div>'
        })
        _head += '选择圈子：<ul class="tab-list tabs">' + _tabs + '</ul>'
        _body = '<div class="tab-con" id="lr_circle_topic_list">' + _body + '</div>'
        //_ft = '<a target="_blank" class="lower-right-foot-button circle-lk" href="' + line_route + '/group-' + _list[0].id + '">入驻</a>'
        //_ft += '<span>这里显示</span>'
        _ft = '<div class="window-bottom"><font>' + unity_lang('line_windows_pipei_noopen_button_des') + '</font><a href="/user/line/edit" target="_blank">' + unity_lang('line_windows_pipei_noopen_button') + '</a></div>'


    } else {
        let dt = data.list[0]
        //_title = ' <h2>邀您入驻' + dt.name + '圈</h2>'
        _title = '<h2>' + replaceKey(unity_lang('line_windows_pipei_noopen_title'), '[@行业]', dt.name) + '</h2>'
        _head = '<p class="head-ls">' + replaceKey(unity_lang('line_group_people'), '[@人数]', dt.user_count) + '<span>|</span>' + replaceKey(unity_lang('line_windows_posts'), '[@帖子]', dt.topic_count) + '</p>'

        _body += '<ul class="rowup">'
        $.each(dt.topic_list, function (ta, tb) {
            _body += '<li>\n' +
                '     <h4>\n' +
                '         <a href="' + line_route + '/line/' + tb.user_id + '" target="_blank">\n' +
                '             <img src="https://static.52wmb.com/bangline/upload/images/' + tb.avatar + '"/>\n' +
                '             ' + tb.name + '<span>(' + tb.position + ')</span><font>' + topic_time(tb.create_time) + '</font>\n' +
                '         </a>\n' +
                '     </h4>\n' +
                '     <p>\n' +
                '         <a href="' + line_route + '/topic/' + tb.id + '" target="_blank">' + tb.contents.slice(0, 100) + '</a>\n' +
                '     </p>'
            if (tb.images) {
                _body += '<p class="line-new-body-imgs"><a href="' + line_route + '/topic/' + tb.id + '" target="_blank">'
                let images = tb.images.split(',')
                $.each(images, function (ia, ib) {
                    _body += '<img src="https://static.52wmb.com/bangline/upload/images/' + ib + '">'
                })
                _body += ' </a></p>'
            }
            _body += ' </li>'
        })
        _body += '</ul>'
        //'<span>' + unity_lang('line_windows_tips') + '</span>' +
        //    '<a href="' + line_route + '/group-' + dt.id + '" target="_blank" class="lower-right-foot-button">入驻</a>'
        _ft = '<div class="window-bottom"><font>' + unity_lang('line_windows_pipei_noopen_button_des') + '</font><a href="/user/line/edit" target="_blank">' + unity_lang('line_windows_pipei_noopen_button') + '</a></div>'
    }
    build_lower_right({
        display: st,
        title: _title,
        head: _head,
        body: _body,
        foot: _ft,
        cst: 0
    })
}

function cl_circle_tab(elem) {
    let dt = $(elem).data()
    $('.circle-lk').attr('href', line_route + '/group-' + dt.cid)
    $('.lower-right-title .title').html(dt.name + '的动态')
    $('.head-ls').html(replaceKey(unity_lang('line_windows_people'), '[@人数]', dt.uc) + '<span>|</span>' + replaceKey(unity_lang('line_windows_posts'), '[@帖子]', dt.tc))

}

function toggle_lower_right(elem) {
    let $c = $('.lower-right-content'),
        dt = $(elem).data()

    if (dt.cst == '1') {
        $c.remove()
        $.wSetCookie('_WLLR', '1', 86400)
        return
    }
    $c.toggleClass('hide');
    let state = $c.hasClass('hide') ? 'hide' : 'show'
    $.wSetCookie('_LRC', state, 86400 * 30)
}

/**
 * 右下角弹出层
 * @param opt
 */
function build_lower_right(opt) {

    let html = '<div class="lower-right-content ' + opt.display + '">\n' +
        '    <div class="lower-right-content-position">\n' +
        '        <font class="lower-right-content-close toggle" data-cst="' + (opt.cst || 0) + '" onclick="toggle_lower_right(this)"><span class="toggle-close"><svg t="1666689159243" class="icon" viewBox="0 0 1812 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4817" width="13" height="13"><path d="M901.41708 1023.939767L1784.730777 140.204441c32.284769-32.224537 32.043838-84.32589-0.481862-116.309495a83.422398 83.422398 0 0 0-117.27322 0.481862L901.838709 789.87519 142.002208 24.617739A83.301933 83.301933 0 0 0 24.728989 23.714247a81.73588 81.73588 0 0 0-0.903492 116.309496l877.591583 883.916024z" fill="" p-id="4818"></path></svg></span><span class="toggle-open">+</span></font>\n' +
        '    </div>\n' +
        '    <div class="lower-right-title">' + opt.title + '</div>\n' +
        '    <div class="md lower-right-head">' + opt.head + '</div>\n' +
        '    <div class="md lower-right-body">' + opt.body + '</div>\n' +
        '    <div class="md lower-right-foot">' + opt.foot + '</div>\n' +
        '</div>'
    $('body').append(html)
}

//直播右下角弹窗
function setLiveRecommend(data) {
    // 如果开启直播提示，注释以下代码
    return false
    if (_lang == 'en') return false
    var live = data.live || {
        class_time: 36000000
    };
    var globalRecommend = getCookies('globalRecommend');
    var html = '',
        hide = globalRecommend || 'show';
    html += '<div id="recommend-global" class="' + hide + '">';
    html += '    <div class="t">【直播中】14:00-15:00</div>';
    html += '    <div class="close-btn hide-btn" onclick="hideRecommend();"></div>';
    html += '    <div class="recommend-global">';
    html += '        <div class="recommend-live">';
    html += '            <a class="live-content">';
    html += '                <div class="content">';
    html += '                    <div class="title line-clamp line-clamp-2" style="width:260px;">送你邮件营销3大技巧<br/>分分钟就让客户主动询盘</div>';
    html += '                     <div class="des">Meilian(Benchmark Email中国区营运总监)</div>';
    html += '                     <div class="time"><b style="color:#f30;">微信扫码看直播↓↓↓</b></div>';
    html += '                     <div class="code"><img src="https://static.52wmb.com/new_images/new_cover/content_1680067243.jpg"/></div>'
    //html += '                    <div class="btn">立即观看 →</div>';
    html += '                </div>';
    html += '            </a>';
    html += '        </div>';
    html += '    </div>';
    html += '</div>';


    var div = document.createElement('div');
    div.setAttribute('id', 'recommendGlobal');
    div.innerHTML = html;
    var body = document.body || document.documentElement;
    body.appendChild(div, body.childNodes[0]);
    setTimeout(function () {
        $("#recommendGlobal").addClass('show');
        $('.recommend-global').on({
            click: function (e) {
                e.stopPropagation();
            }
        })
        if (live.class_time > 0) {
            var endDate = $('.live-time').attr('data-time');
            if (endDate) TimeDown(endDate, function () {
                $('.live-time').html('');
            });
        }
    }, 50);
    return true

}

function hideRecommend() {
    let recommendGlobal = $('#recommend-global'),
        state = 'show';
    recommendGlobal.toggleClass('hide');
    if (recommendGlobal.hasClass('hide')) state = 'hide'
    $.wSetCookie('globalRecommend', state, 86400 * 30)
    return true
}

function line_message_stats() {
    if (!wg.user.id) return;
    if (wg.user.bang_line != 1) return;
    // 如果当前已经是line管理页  则不用获取
    if ($('.active-line').length > 0) return;
    let $line = $('.line-ms')
    if ($line.length <= 0) return;
    $.ajax('/async/line/message/stats', {
        type: 'get',
        datatype: 'json',
        success: function (result) {
            if (result.data.count > 0) {
                $line.find('.count').removeClass('display-none').html(result.data.count)
                $line.find('.point').removeClass('display-none')
            }
        }
    })
}
/**
 * 统一翻译方法
 * @param key
 * @returns {*}
 */
function unity_lang(key) {
    let _value = ''
    try {
        _value = curr_lang_json[key]
        if (_value) {
            return _value[_lang] || ''
        }
    } catch (e) {

    }
    return (share_lang[key] || {})[_lang] || ''
}

function open_new_tab(url) {
    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "wmb_new_window");
    document.body.appendChild(a);
    a.click();
}

function update_new_window_url(url) {
    let new_window = window.open(null, 'wmb_new_window');
    new_window.location.href = url;
}

function close_new_window() {
    let new_window = window.open(null, 'wmb_new_window');
    new_window.close()
}

function str_fuck(str, end) {
    str = str.replace(new RegExp(/<[^>]*>/gi), '')
    if (str.length > end) {
        str = str.slice(0, end) + '...'
    }
    return str
}

function brSlice(str, end) {
    let reg_obj = new RegExp(/<br[^>|>]*>/gi),
        real_str = str.replace(reg_obj)

    function _result(html) {
        html = html || str
        return {
            html: html,
            real_str: real_str
        }
    }
    if (str.length <= end) return _result()
    if (!reg_obj.test(str)) return _result(str.slice(0, end) + '...')

    let _str_list = str.split(reg_obj),
        new_str = '',
        html = '',
        _end = end
    for (let i = 0; i < _str_list.length; i++) {
        new_str += _str_list[i]
        // 大于截取长度 则不需要添加br, 并且截取
        if (new_str.length > end) {
            // html += _str_list[i].slice(0, _end)
            html += _str_list[i].slice(0, end)
            break
        }
        html += _str_list[i] + '<br/>'
        if (new_str.length == end) break
        end -= _str_list[i].length
        // _end -= _str_list[i].length
    }
    if (new_str.length != real_str.length) html += '...'
    return _result(html)
}

// String 扩展
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
String.prototype.toFix = function () {
    return this.toLowerCase().replace(/[\[|\]|’|!|"|#|$|%|&|'|(|)|*|+|,|-|.|/|:|;|<|=|>|?|@|^|`|{|}|~|\s|_|\||：|“]+/g, "_").trims('_');

}
String.prototype.toKey = function () {
    return this.replace('_', ' ')
}

String.prototype.toClear = function () {
    return this.toFix().toKey()
}
String.prototype.InitialUpper = function () {
    return this.replace(/^\S/, s => s.toUpperCase())
}
String.prototype.trims = function (char, type) {
    if (!char) return this.replace(/^\s+|\s+$/g, '');
    if (type == 'left') return this.replace(new RegExp('^\\' + char + '+', 'g'), '');
    if (type == 'right') return this.replace(new RegExp('\\' + char + '+$', 'g'), '');
    return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
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
        format = $.parse_format(format);
    if (format.toDisplay)
        return format.toDisplay(date, format);
    var dates = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
    var seps = $.extend([], format.separators);
    for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
        if (seps.length)
            _date.push(seps.shift());
        _date.push(val[format.parts[i]]);
    }
    return _date.join('');
};

Array.prototype.removeVal = function (val) {
    var index = this.indexOf(val);
    if (index > -1) this.splice(index, 1);
};
jQuery.extend({
    /**
     * 异步请求要用到user信息的ajax方法
     * @param url
     * @param options
     * @returns {*|jQuery}
     */
    wajax: function (url, options) {
        options = options || {}
        options.headers = options.headers || {}
        options.headers.WTYPE = 2;
        if (options.loading) {
            return $.loadajax(url, options)
        }
        return $.ajax(url, options)
    },
    /**
     * 带加载中的ajax请求
     * @param url
     * @param options
     * @returns {*}
     */
    loadajax: function (url, options) {
        options = options || {}
        let _success = options.success,
            _index = $.wloading()
        options.success = function (result) {
            $.wloading_close(_index)
            if (_success) _success(result)
        }
        let _error = options.error
        options.error = function (e) {
            $.wloading_close(_index)
            if (_error) _error(e)
        }
        return $.ajax(url, options)
    },
    /**
     * 数字千位转K
     * @param value
     * @returns {string|number}
     */
    thousand: function (value) {
        if (typeof value != "number") value = Number(value)
        if (value < 1000) return value
        return (value / 1000).toFixed(2) + 'K'
    },
    /**
     * 时间戳转日期格式
     * @param now
     * @returns {string}
     */
    formatDate: function (now, has_date = true) {
        if (typeof now != 'object') now = new Date(now);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (date >= 0 && date <= 9) {
            date = "0" + date;
        }
        if (has_date) return year + "-" + month + "-" + date;
        return year + "-" + month
    },
    date_format: function (value) {
        return new Date(value.replace(/-/g, "/"))
    },
    date_add: function (add, date) {
        date = date || new Date()
        return new Date(date.setFullYear(date.getFullYear() + add))
    },
    /**
     * 时间相加
     * @param add  数量  可以为负数
     * @param date 时间
     * @param interval 单位   注意  M：月 m: 分
     * @returns {Date}
     */
    date_change: function (add, date, interval) {
        date = date || new Date()
        interval = interval || 'y'
        let fn = {
            // 秒
            s: function () {
                date.setSeconds(date.getSeconds() + add)
            },
            //分
            m: function () {
                date.setMinutes(date.getMinutes() + add);
            },
            // 时
            h: function () {
                date.setHours(date.getHours() + add);
            },
            //天
            d: function () {
                date.setDate(date.getDate() + add)
            },
            //月
            M: function () {
                date.setMonth(date.getMonth() + add)
            },
            //年
            y: function () {
                date.setFullYear(date.getFullYear() + add)
            }
        }
        try {
            fn[interval]()
        } catch (e) {}
        return date

        // var val = {
        //     d: this.getUTCDate(),
        //     D: dates.daysShort[this.getUTCDay()],
        //     DD: dates.days[this.getUTCDay()],
        //     m: this.getUTCMonth() + 1,
        //     M: dates.monthsShort[this.getUTCMonth()],
        //     MM: dates.months[this.getUTCMonth()],
        //     yy: this.getUTCFullYear().toString().substring(2),
        //     yyyy: this.getUTCFullYear()
        // }
        // return new Date(date.setFullYear(date.getFullYear() + add))
    },
    /**
     *
     * @param url 下载地址，也可以是一个blob对象，必选
     * @param saveName 保存文件名，可选
     */
    openDownloadDialog: function (url, saveName) {
        if (typeof url == 'object' && url instanceof Blob) {
            url = URL.createObjectURL(url); // 创建blob地址
        }
        var aLink = document.createElement('a');
        aLink.href = url;
        aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
        var event;
        if (window.MouseEvent) event = new MouseEvent('click');
        else {
            event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
        aLink.dispatchEvent(event);
    },
    parse_format: function (format) {
        var validParts = /dd?|DD?|mm?|MM?|yy(?:yy)?/g;

        if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
            return format;
        // IE treats \0 as a string end in inputs (truncating the value),
        // so it's a bad format delimiter, anyway
        var separators = format.replace(validParts, '\0').split('\0'),
            parts = format.match(validParts);
        if (!separators || !separators.length || !parts || parts.length === 0) {
            throw new Error("Invalid date format.");
        }
        return {
            separators: separators,
            parts: parts
        };
    },
    wloading: function () {
        return layer.load(0, {
            shade: [0.9, 'rgba(0, 0, 0, .5)']
        })
    },
    wloading_close: function (_index) {
        if (_index) return layer.close(_index)
        layer.closeAll('loading')
    },
    wModel: function (callback) {
        wpull.dopen(callback)
    },
    wSetCookie: function (name, value, expire, callback) {
        $.ajax('/async/cookie/set', {
            type: 'get',
            data: {
                name: name,
                value: value,
                expire: expire
            },
            success: function () {
                if (callback) callback()
            }
        })
    },
    alert: function (msg, okcall) {
        if (typeof layer == "undefined") {
            alert(msg)
        } else {
            layer.alert(msg, {
                'title': unity_lang('layer_tips'),
                area: ['400px', 'auto'],
                btn: unity_lang('layer_ok'),
                yes: function (a, b) {
                    layer.close(a)
                    if (okcall) okcall()
                }
            })
        }
    },
    get_browser: function () {
        var agent = navigator.userAgent.toLowerCase();
        var regStr_ie = /msie [\d.]+;/gi;
        var regStr_ff = /firefox\/[\d.]+/gi
        var regStr_chrome = /chrome\/[\d.]+/gi;
        var regStr_saf = /safari\/[\d.]+/gi;
        //IE
        if (agent.indexOf("msie") > 0) {
            return agent.match(regStr_ie);
        }
        //firefox
        if (agent.indexOf("firefox") > 0) {
            return agent.match(regStr_ff);
        }

        //Chrome
        if (agent.indexOf("chrome") > 0) {
            return agent.match(regStr_chrome);
        }

        //Safari
        if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
            return agent.match(regStr_saf);
        }
    },
    countdown: function (totalSeconds, fn) {

        var days = Math.floor(totalSeconds / (60 * 60 * 24));
        //取模（余数）
        var modulo = totalSeconds % (60 * 60 * 24);
        //小时数
        var hours = Math.floor(modulo / (60 * 60));
        modulo = modulo % (60 * 60);
        //分钟
        var minutes = Math.floor(modulo / 60);
        //秒
        var seconds = Math.floor(modulo % 60);
        //输出到页面
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }
})

var cn = /%20/g,
    pn = /\[\]$/,
    fn = /\r?\n/g,
    dn = /^(?:submit|button|image|reset|file)$/i,
    hn = /^(?:input|select|textarea|keygen)/i,
    Ct = /^(?:checkbox|radio)$/i;
$.fn.extend({
    serializeObject: function () {
        var data = {}
        $.each(this.map(function () {
            var e = $.prop(this, "elements");
            return e ? $.makeArray(e) : this
        }).filter(function () {
            var e = this.type;
            return this.name && !$(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
        }), function (a, b) {
            data[b.name] = b.value.replace(fn, "\r\n")
        })
        return data
    }
})

function pos_show(data) {
    if (data.ip_country_name && data.ip_pro_name) return data.ip_country_name + ' ' + data.ip_pro_name
    return data.country
}

function topic_time(str_date) {
    return show_time(str_date) + ''
}

function show_time(str_date) {
    let date = new Date(str_date)
    let old_time = (new Date() - date) / 1000;
    // 大于 30 天
    if (old_time > 2592000) return date.date_format('yyyy-mm-dd');
    // 大于 7  天
    if (old_time > 86400) return Math.floor(old_time / 86400) + '' + unity_lang('line_days_ago') + ''
    // 小于一天
    if (old_time > 3600) return Math.floor(old_time / 3600) + '' + unity_lang('line_hours_ago') + ''
    // 小于 1小时
    if (old_time > 60) return Math.floor(old_time / 60) + '' + unity_lang('line_minutes_ago') + ''
    return '刚刚'
}
     
// 鼠标移动轨迹判断
window.onmouseout = function (e) {
    if (no_full_pop == 'yes') return false
    //  当前逻辑
    if (e.clientY > 0) return false;
    let _qp = getCookies('_QP')
    if (_qp) return false
    // 未登录不弹
    if (!wg.user.id) return false
    //if(wg.user.user_functional.qp) return
    // 曾经付费过不弹
    if (verify_vip_level(wg.user.user_functional.mv, 'v')) return false
    // 未付费老用户不弹
    if (wg.user.no_buyer_old == 1 || wg.user.no_buyer_old == 2 || wg.user.no_buyer_old == 4) return false;
    let fExp = wg.user.user_functional.experience || 0
    // 体验过的不再弹
    if (fExp > 0) return false
    let content = ''
    if (wg.lang == 'cn') {

        var _qidian3 = document.createElement('script');
        _qidian3.id = 'qd288585516673d8670e139f21286d483d2e8f3b55d1';
        _qidian3.type = 'text/javascript';
        _qidian3.async = true;
        _qidian3.charset = 'utf-8';
        _qidian3.defer = true;
        _qidian3.src = (document.location.protocol + "//wp.qiye.qq.com/qidian/2885855166/73d8670e139f21286d483d2e8f3b55d1");
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_qidian3);

        content = '<div class="yaoqing"><h2>邀请您免费体验黄钻会员权限</h2><div class="yaoqing-content">尊敬的邦友，现在您有一次免费体验黄钻会员权限的机会，在线申请即时开通！开通体验后您可以使用HS编码搜索、公司高级筛选...更多等您来亲自体验尝鲜！</div><a href="/new/797?s=leave-tanchuang" target="_blank" class="yaoqing-link">← 观看视频课程</a><a id="wmb_qidian_3" href="javascript:void(0)" class="yaoqing-link-right">在线申请体验 →</a></div>'
    } else {
        content = '<div class="yaoqing"><h2>To experience yellow diamond member service</h2><div class="yaoqing-content">We have global 30 million companies reports and there will be your competitor and business partners within it...Free experience it right now!</div><a href="https://api.whatsapp.com/send?phone=+8616621075894&text=Hello" target="_blank" class="yaoqing-link">Free experience it →</a></div>'
    }

    layer.open({
        content: content,
        title: unity_lang('layer_tips'),
        type: 1,
        skin: 'layui-layer-rim',
        area: ['600px', ''], // 配置长高
        shadeClose: false, //点击遮罩关闭
        closeBtn: 1
    })

    $.wSetCookie('_QP', '1', 86400)
};


/**
 * 外贸邦埋点统计
 * @param code
 */
function wstats(code, ext) {
    code = ext ? code + '_' + ext : code
    $.post("/async/wstats", {
        "collect": code,
        t: Math.random()
    });
}

function unity_child_perms(mark, fn) {
    if (wg.user.account_type == 1) return fn()
    $.ajax('/async/verify/child/perms', {
        data: {
            mark: mark
        },
        datatype: 'text/json',
        type: 'get',
        success: function (result) {
            if (result.state == 0) return fn()
            $.alert(result.message)
        }
    })
}

function full_top() {
    let tpn = getCookies('_TNOTICE_0002')
    if (tpn) return;
    let html = '',
        $top_notice = $('#top_notice')
    if ($top_notice.length <= 0) return;
    if (_lang == 'cn') {
        html = '<p class="notice">' +
            '<font>【邦友福利日】免费体验Jungle Scout(亚马逊选品工具)高级版3天时间，实时获取跨境终端产品价格、销量，成就跨境热销爆款！<a href="/amazon?s=nav_top" target="_blank" style="color:#06c;padding-left:10px;">了解产品并申请体验→</a></font>' +
            '<a class="notice-close">× 关闭</a></p>'
    } else {
        html = '<p class="notice">' +
            '<font>[Welfare Day] 3 days free trial of Jungle Scout (Amazon tool), and get the product price and sales volume of the end side, and achieve hot sales! <a href="/amazon?s=nav_top" target="_blank" style="padding-left:10px;color:#06c">To learn more or try it →</a></font>' +
            '<a class="notice-close">× close</a></p>'
    }
    $top_notice.html(html).removeClass('display-none')
}

// 全局弹窗
function full_pop(designation_pop = '') {
    layer.closeAll()
    if (!lang_toggle()) return false;
    if (no_full_pop == 'yes') return false
    let _pop_mark = ''
    try {
        _pop_mark = gpop_mark
    } catch (e) {}
    let open_options = {
        type: 1,
        skin: 'layui-layer-rim',
        area: ['600px', '500px'], // 配置长高
        shadeClose: false, //点击遮罩关闭
        maxmin: false,
        closeBtn: 1
    }
    $.wajax('/async/full/pop', {
        type: 'get',
        cache: false,
        datatype: "text/html",
        data: {
            pop_mark: _pop_mark,
            pop_page_mark: page_mark,
            designation_pop: designation_pop,
            pop_module: pop_module
        },
        success: function (result) {
            if (result.state == 0) {
                open_options['content'] = result.content
                switch (result.mark) {
                    case 'big_class_exchange':
                        open_options['area'] = ['600px', '']
                        open_options['title'] = unity_lang('big_class_exchange')
                        open_options.cancel = function (index) {
                            $.wSetCookie('_big_class_show', 'false', 259200000, function () {
                                layer.close(index)
                            })
                        }
                        break
                    case 'sc_pop':
                        open_options['area'] = ['700px', '']
                        open_options['closeBtn'] = false
                        open_options['title'] = unity_lang('tan_tips_service')
                        break
                    case 'three_years':
                        open_options['area'] = ['800px', '']
                        open_options['title'] = ''
                        open_options.cancel = function (index) {
                            $.wSetCookie('_DTY', '1', 86400, function () {
                                layer.close(index)
                            })
                        }
                        break
                    case 'df_pop':
                        open_options['area'] = ['820px', '']
                        open_options['closeBtn'] = 1
                        open_options['title'] = ''
                        break
                    case 'df_dec_pop':
                        open_options['area'] = ['820px', '']
                        open_options['closeBtn'] = 1
                        open_options['title'] = ''
                        open_options.cancel = function (index) {
                            layer.close(index)
                            $.ajax('/async/close/df-dec')
                        }
                        break
                    case 'emp_cs':
                        open_options['area'] = ['500px', '']
                        open_options['title'] = unity_lang('tan_tips_kefu')
                        break
                    case 'iuc_pop':
                        open_options['area'] = ['650px', '']
                        open_options['closeBtn'] = false
                        open_options['title'] = unity_lang('tan_tips_title')
                        break
                    case 'wxq_pop':
                        open_options['area'] = ['600px', '']
                        open_options['title'] = unity_lang('tan_tips_title')
                        open_options['closeBtn'] = 1
                        break
                    case 'experience_pop':
                        open_options['area'] = ['650px', '']
                        open_options['title'] = unity_lang('tan_tips_title_yellow')
                        open_options.cancel = function (index) {
                            close_experience(function () {
                                layer.close(index)
                            })
                        }
                        break
                    case 'experience_ing':
                        open_options['area'] = ['750px', '']
                        open_options['title'] = unity_lang('tan_vedio_title')
                        if (!result.zd) {
                            open_options.cancel = function (index) {
                                $.ajax('/async/experience/lead/close', {
                                    data: {
                                        fk: page_mark
                                    },
                                    datatype: 'text/json',
                                    success: function (_) {
                                        layer.close(index)
                                    }
                                })
                            }
                        }
                        break
                    case 'experience_end':
                        open_options['area'] = ['650px', '']
                        open_options['title'] = '提示'
                        open_options['content'] = '<div style="padding:40px 0;"><b style="display:block;padding-top:5px;font-size:18px;text-align:center;">你好，您的钻石会员体验时间已到。</b><span style="color:#333;font-weight:normal;font-size:15px;padding:10px 30px;display:inline-block;line-height:150%;text-align:left;text-align:center;display:block;">在体验的过程中，如有任何问题或疑问，请联系客服咨询。</span><a style="display:block;font-size:14.4px;color:#fff;text-align:center;height:40px;line-height:40px;background:#007FFF;margin:0 220px;border-radius:3px;" href="javascript:void(0)" onclick="experience_remote()">再次申请远程体验</a></div>'
                        break
                    case 'ben_or_js_perfect':
                        open_options['closeBtn'] = false
                        open_options['area'] = ['500px', '']
                        open_options['title'] = '已购买增值服务订单确认'
                        break
                    case 'diamond_expired':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['700px', '']
                        open_options['title'] = unity_lang('tan_tips_title_renew')
                        break
                    case 'diamond_expired_ssp':
                        open_options['closeBtn'] = 0
                        open_options['area'] = ['700px', '']
                        open_options['title'] = unity_lang('tan_tips_title_renew')
                        open_options['btn'] = '× ' + unity_lang('close_youhuiquan_tips') + ''
                        open_options['yes'] = function (a) {
                            $.wajax('/async/surprise/coupon/close', {
                                type: 'get'
                            })
                            layer.close(a)
                        }

                        break
                    case 'no_buyer_old':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['600px', '']
                        open_options['title'] = unity_lang('tan_tips_title_restricte')
                        break
                    case 'vip_expired':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['600px', '']
                        open_options['title'] = unity_lang('tan_tips_title')
                        break
                    case 'en_vip':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['600px', '']
                        open_options['title'] = unity_lang('tan_tips_title')
                        break
                    case 'register_user':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['600px', '']
                        open_options['title'] = unity_lang('tan_tips_title')
                        break
                    case 'yq_open_line':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['600px', '']
                        open_options['content'] = '<div class="group-enter-other" style="text-align:center;"><div class="group-show"><img src="https://static.52wmb.com/bangline/upload/images/avatar_1626327972.png"><img src="https://static.52wmb.com/bangline/upload/images/avatar_1626319118.png"><img src="https://static.52wmb.com/images/userphoto/190_130626483850444569.jpg"><img src="https://static.52wmb.com/images/userphoto/190_162684311304162216467.jpeg"></div><div class="group-img"><img src=""></div><h1>' + unity_lang('bline_popful_title_2') + '</h1><p>' + unity_lang('bline_popful_des_2') + '</p><a href="/user/line/edit" class="group-link" target="_blank">' + unity_lang('bline_popful_button_2') + '</a></div>'
                        open_options['title'] = unity_lang('tan_tips_title')
                        break
                    case 'yq_line_circle':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['600px', '']
                        open_options['title'] = unity_lang('tan_tips_title')
                        open_options.cancel = function (index) {
                            $.wSetCookie('_YLC', '1', 86400, function () {
                                layer.close(index)
                            })
                        }
                        break
                    case 'inbounded_line_circle':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['600px', '']
                        open_options['title'] = unity_lang('tan_tips_title')
                        break
                    case 'bangline_reg':
                        open_options['closeBtn'] = 1
                        open_options['area'] = ['850px', '']
                        open_options['title'] = ''
                        open_options.cancel = function (index) {
                            $.wSetCookie('_BLR', '1', 86400, function () {
                                layer.close(index)
                            })
                        }
                        break
                    default:
                        break

                }
                layer.open(open_options);
            }
        }
    })
}



function sp_coupon(elem) {
    let $this = $(elem),
        opt = $this.data()
    // $this.html(opt.err)

    $.ajax('/async/surprise/coupon/receive', {
        type: 'get',
        datatype: 'json',
        success: function (result) {
            if (result.state == 0 || result.state == 1002) {
                $this.html(opt.sus).attr('href', '/Alipay?v=yd').attr('target', '_blank')
                return
            }
            $this.html(opt.err)
        }
    })
}

function lang_toggle() {
    // return true;
    let browser_toggle_ck = getCookies('_BTK')
    if ((browser_lang == 'zh-CN' && wg.lang == 'cn') || (browser_lang != 'zh-CN' && wg.lang == 'en')) return true
    if (browser_toggle_ck) {
        if (browser_toggle_ck == 'cn' && browser_lang != 'zh-CN') {
            window.location.href = window.location.href.replace('://en.', '://www.')
            return false
        } else if (browser_toggle_ck == 'en' && browser_lang == 'zh-CN') {
            window.location.href = window.location.href.replace('://www.', '://en.')
            return false
        }
        return true
    }
    let title = '',
        content = ''
    if (browser_lang == 'zh-CN') {
        title = '提示'
        content = '当前站点有对应的中文版本，是否切换?'
    } else {
        title = 'Tips'
        content = 'There is an English version, switch or not?'

    }
    layer.open({
        // type: 1,
        // skin: 'layui-layer-rim',
        // area: ['600px', '500px'], // 配置长高
        shadeClose: false, //点击遮罩关闭
        maxmin: false,
        closeBtn: false,
        title: title,
        content: content,
        btn: [unity_lang('web_lang_switch'), unity_lang('web_lang_displayed')],
        btn1: function () {
            let ck = '',
                _href = ''
            if (browser_lang == 'zh-CN') {
                _href = window.location.href.replace('://en.', '://www.')
                ck = 'cn'
            } else {
                _href = window.location.href.replace('://www.', '://en.')
                ck = 'en'
            }
            $.wSetCookie('_BTK', ck, 31536000, function () {
                window.location.href = _href
            })
        },
        btn2: function () {
            $.wSetCookie('_BTK', 'hide', 31536000)
        }
    })
    return false
}

function experience_remote() {
    layer.closeAll()

    let open_options = {
        type: 1,
        skin: 'layui-layer-rim',
        area: ['600px', ''], // 配置长高
        shadeClose: false, //点击遮罩关闭
        maxmin: false,
        closeBtn: 1,
        title: unity_lang('tan_tips_tiyan'),
        content: '<div class="exp-rt">' +
            '<div><h2>填写数据需求，如：贸易国、数据用来做什么？</h2><p><input autocomplete="off" placeholder="了解您的需求后，我们可以做针对性的演示..." name="demand"></p></div>' +
            '<div><h2>填写可以联系到您的手机号、电话等...</h2><p><input autocomplete="off" placeholder="请填写正确的手机、电话号码，用于和您预约演示时间..." name="contact"></p></div>' +
            '<div><a href="javascript:void(0)" onclick="experience_remote_add()" class="exp-rt-link">现在，提交远程演示申请</a><a href="javascript:void(0)" onclick="full_pop(\'experience_pop\')" class="exp-rt-back">返回上一级</a></div>' +
            '</div>',

        cancel: function (index) {
            // 关闭弹窗
            close_experience(function () {
                layer.close(index)
            })
        }
    }
    layer.open(open_options);
}

function experience_remote_add() {
    let demand = $('.exp-rt [name="demand"]').val()
    if (!demand) return $.alert('请填写数据需求')
    let contact = $('.exp-rt [name="contact"]').val()
    if (!contact) return $.alert('请输入手机或电话号码')
    $.ajax('/async/experience/remote/add', {
        type: 'post',
        datatype: 'text/json',
        data: {
            'demand': demand,
            contact: contact
        },
        success: function (result) {
            if (result.state == 0) {
                layer.closeAll()
                return $.alert('您的申请已提交，请注意接听电话(021-64033826)，数据顾问将与您联系预约远程操作时间。')
            }
            $.alert('添加失败,请咨询客服：021-64033826')
        },
        error: function () {
            $.alert('添加失败,请咨询客服：021-64033826')
        }
    })

}

function verify_social_media(keywords, scene, fn) {
    $.ajax('/async/social-media/url', {
        type: 'get',
        datatype: 'text/json',
        data: {
            'keyword': keywords,
            scene: scene
        },
        success: function (result) {
            fn(result)
        },
        error: function () {
            fn({
                state: 10
            })
        }
    })
}

// 关闭体验/拒绝体验
function close_experience(fn) {
    $.get("/async/experience/close", function () {
        if (fn) fn()
    });
}
/**
 * 文本收缩
 */
function build_shrink_open(callback) {
    $.each($('.shrink-module'), function () {
        let $shrink_txt = $(this).find('.shrink-txt'),
            length = $(this).data('length')
        if ($shrink_txt.hasClass('wmb-cf-action')) {
            var $cf = $shrink_txt.find('wmb-cf')
            $.each($cf, function (_, b) {
                var $ccf = $(b)
                $ccf.html(wmb_cf_parse($ccf.html()))
            })
        }
        var content = $shrink_txt.text()
        if (content.length > length) {
            $('<a href="javascript:void(0)" class="txt-shrink-open">' + unity_lang('company_list_product_open') + '</a>')
                .data('callback', callback).appendTo($(this))
            $shrink_txt.data('text', content)
            $shrink_txt.html(content.substring(0, length) + '...')
        }
        if (callback) callback($shrink_txt)
    })
}



/**
 * 统一翻译变量替换方法
 */
function replaceKey(str, keys, values) {
    if (!(keys instanceof Array)) return str.replace(RegExp("\\" + keys, 'gi'), values)
    for (let i = 0; i < keys.length; i++) {
        str = str.replace(RegExp("\\" + keys[i], 'gi'), values[i])
    }
    return str

    // let reg = /\[@(.*?)\]/gi;
    // let arr = str.match(reg);
    // for (let i = 0; i < arr.length; i++) {
    //     // 多个参数替换的基本规则，还有很多兼容的问题需要测试
    //     if (key instanceof Array) {
    //         if (key.length > 0 && val.length > 0) {
    //             for (let t = 0; t < key.length; t++) {
    //                 if (arr[i] == key[t]) str = str.replace(arr[i], val[t]);
    //             }
    //         }
    //     } else {
    //         if (arr[i] == key) str = str.replace(arr[i], val);
    //     }
    // };
    // return str;
}
//cookie操作
jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

function getTody(n, ds = 0, ys = 0, ms = 0) {
    var now = new Date(n);
    var time = now - 24 * 60 * 60 * 1000 * ds; //获取前N天
    var d = new Date(time);
    var year = d.getFullYear() - ys; //获取前N年的时间
    var mon = d.getMonth() + 1 + ms;
    var day = d.getDate();
    var week = d.getDay() - 1;
    var hour = d.getHours();
    var secd = d.getMinutes();
    var week = d.getDay();
    var times = '';
    if (mon == 0) {
        times = 12 + "-" + (day < 10 ? ("0" + day) : day);
    } else if (mon < 10) {
        times = (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ("0" + day) : day);
    } else {
        times = mon + "-" + (day < 10 ? ("0" + day) : day);
    }
    var today = year + '-' + times;
    return today
}

//显示加载框---使用方法，例如：this.tool.showLoading('正在加载',this,'1')
function showLoading(message, el, type) {
    var html = '';
    html += '<i class="mui-spinner mui-spinner-white"></i>';
    html += '<p class="text">' + (message || unity_lang('tan_loading')) + '</p>';

    //遮罩层
    var mask = document.getElementsByClassName("mui-show-loading-mask");
    if (mask.length == 0) {
        mask = document.createElement('div');
        mask.classList.add("mui-show-loading-mask");
        // 自己添加内容...start
        if (type !== '2' && type) {
            var winHig = document.documentElement.clientHeight;
            if (el.$refs.nav) {
                var heightNav = el.$refs.nav.offsetHeight;
                var heightFix = el.$refs.fixed.offsetHeight;
                if (type === '1') {
                    var loHig = winHig - heightNav - heightFix + 'px'
                } else {
                    loHig = winHig - heightFix + 'px'
                }
                mask.style.top = heightFix + 'px'
                mask.style.height = loHig
            }
        }
        // 自己添加内容...End
        document.body.appendChild(mask);
        mask.addEventListener("touchmove", function (e) {
            e.stopPropagation();
            e.preventDefault();
        });
    } else {
        mask[0].classList.remove("mui-show-loading-mask-hidden");
    }
    //加载框
    var toast = document.getElementsByClassName("mui-show-loading");
    if (toast.length == 0) {
        toast = document.createElement('div');
        toast.classList.add("mui-show-loading");
        toast.classList.add('loading-visible');
        document.body.appendChild(toast);
        toast.innerHTML = html;
        toast.addEventListener("touchmove", function (e) {
            e.stopPropagation();
            e.preventDefault();
        });
    } else {
        toast[0].innerHTML = html;
        toast[0].classList.add("loading-visible");
    }
}

//隐藏加载框----使用方法，例如：hideLoading();
function hideLoading(callback) {
    var mask = document.getElementsByClassName("mui-show-loading-mask");
    var toast = document.getElementsByClassName("mui-show-loading");
    if (mask.length > 0) {
        mask[0].classList.add("mui-show-loading-mask-hidden");
    }
    if (toast.length > 0) {
        toast[0].classList.remove("loading-visible");
        callback && callback();
    }
}

/**
 * 获取url参数
 * @param name
 * @returns {string}
 */
function queryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var query = '';
    if (r != null) {
        if (r[2] != null) query = r[2];
    }
    return decodeURI(query)
}

/**
 * 获取url参数并转换成object
 * @returns {{}}
 */
function queryObject() {
    var strs = window.location.search.substr(1).split('&'),
        params = {}
    if (strs.length > 0) {
        for (var i = 0; i < strs.length; i++) {
            let kv = strs[i].split('=')
            params[kv[0]] = unescape(kv[1]);
        }
    }
    return params
}

function referrer_link(a, _src, redirect) {
    a = $(a).attr("href");
    var b = redirect != null ? redirect : location.href;
    let _href = 1 < a.split("?").length ? (a + "&redirectUrl=" + encodeURIComponent(b)) : (a + "?redirectUrl=" + encodeURIComponent(b));
    location.href = _src ? (_href + '&_src=' + _src) : _href
    return !1
}

/**
 * 全局验证用户权限
 * @param vip
 * @param options
 *        after_allow: 会员权限通过后的自定义权限验证
 *        after_failure: 会员权限验证不通过的自定义权限验证
 *        auth_before: 权限验证前的自定义验证
 *        hig_auth: 在常规权限前有其他最高权限
 *        experience: 是否验证体验权限
 *        successful：成功回调方法，null则不回调
 *        failure：失败回调方法 null则不回调
 *        login： 未登录时是否直接跳转登录， 默认false
 *        only_return： 未登录时，是否为只返回状态 权重低于 login 默认 false
 *        call_sign：未登录得回调方法 为空不回调，权重低于 only_return
 * @returns {any}
 */
function verify_authority(vip, options) {
    options = options || {};
    vip = vip || '';
    var _wstats = options.wstats || (options.$elem ? options.$elem.data('wstats') : '')
    options['after_allow'] = options.after_allow !== undefined ? options.after_allow : true
    options['experience'] = options.experience !== undefined ? options.experience : true
    options['after_failure'] = options.after_failure !== undefined ? options.after_failure : false
    // 如果有最高权限并且为true，则不判断其他权限
    if (options.hig_auth != undefined) {
        if (options.hig_auth) {
            options.successful ? options.successful() : '';
            return true;
        }
    }
    // 没有登录
    if (!verify_sign(options, vip)) return false;
    // 在验证vip权限前的一个验证
    if (options.auth_before) {
        options.successful ? options.successful() : '';
        return true;
    }
    // 登录了就验证权限
    let vip_levels = globalData.vipMarkLevel,
        user_experience = wg.user.experience || '';
    var _ex = options.experience && vip_levels[user_experience] >= vip_levels[vip]
    // 体验  有体验参数且是true且体验等级大于指定vip等级
    if (vip_levels[wg.user.vip_level] >= vip_levels[vip] || _ex) {
        // 如果VIP验证通过，且自定义权限验证通过
        if (typeof options.after_allow == 'function') {
            options.after_allow(function () {
                options.successful ? options.successful() : '';
            })
            return true;
        }
        if (options.after_allow) {
            options.successful ? options.successful() : '';
            return true;
        }
        if (options.only_return) return false
        auth_failure(options.failure)
        return false;
    }
    // 如果比VIP验证不通过的权重低的一个自定义权限验证存在
    var after_failure = typeof options.after_failure == 'function' ? options.after_failure() : options.after_failure
    if (after_failure) {
        options.successful ? options.successful() : '';
        return true;
    }
    if (options.only_return) return false
    auth_failure(options.failure, vip, _wstats)
    return false;
}

function verify_authority1 (user, nv, exp = true) {
    let vip_level = user && user.id ? user.vip_level : ''
    return this.verify_vip_level(vip_level || '', nv, exp ? user.experience : '')
}

function auth_failure(failure, vip, code) {
    if (typeof failure == "function") {
        failure()
        return;
    }
    if (!vip) return;
    share_authority_failure(vip, code)
}

/**
 * 验证是否登录
 * @param vip
 * @param options
 *      login: 为true: 直接跳转到登录界面，为false 则返回验证状态
 *      has_sign: 是否需要验证登录情况
 * @returns {boolean}
 */
function verify_sign(options, vip) {
    options = options || {};
    // 游客权限则不验证登录，一般在权限验证是会使用，直接验证登录状态则传null或者不传
    if (vip == 'guest') return true;
    if (wg.user.id) return true;
    if (options.login) {
        window.location.href = '/login?redirectUrl=' + encodeURIComponent(window.location.href)
        return false
    }
    if (options.only_return) return false;
    if (options.call_sign) {
        options.call_sign();
        return false;
    }
    share_login_pop()
    return false
}

function verify_extended_auth(auth) {
    if (!wg.user.id) return false;
    return wg.user.extended_auth[auth] == 'true'
}

/**
 * 通用权限不足弹窗
 * @param vip 所需vip等级
 * @param wstats 埋点标识
 */
function share_authority_failure(vip, wstats) {
    if (!wg.user.id) {
        window.location.href = "/login";
        return
    }
    layer.open({
        type: 1,
        title: unity_lang('layer_tips'),
        area: ['500px', 'auto'],
        shadeClose: true, //点击遮罩关闭
        content: '<div class="update-box">\n' +
            '<div class="update-ico"><svg t="1648304412247" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6779" width="40" height="40"><path d="M124.64128 480.8704v418.48832h774.71744V480.82944H124.64128zM0 356.1472h1024V1024H0V356.18816z" fill="#FF7E31" p-id="6780"></path><path d="M445.2352 578.7648h133.57056v222.6176H445.2352z" fill="#FA4D00" p-id="6781"></path><path d="M721.26464 124.64128v320.59392h124.64128V0H178.09408v445.2352H302.6944V124.64128z" fill="#FF7E31" p-id="6782"></path><path d="M178.09408 356.18816h124.64128v124.64128H178.09408zM721.26464 356.18816h124.64128v124.64128h-124.64128z" fill="#FA4D00" p-id="6783"></path></svg></div>\n' +
            '<div class="update-title">' + unity_lang('membership_insufficient_title') + '</div>\n' +
            '<div class="update-text">' + unity_lang('membership_des_' + vip) + '</div>\n' +
            '<div class="update-btn" ><a class="update-btn-1" href="/Alipay?v=' + vip + '">' + unity_lang('membership_buy_button') + ' →</a><a class="update-btn-2" href="/loft_HD?s=quanxian_TC">' + unity_lang('membership_buy_rights') + '</a></div>\n' +
            '</div>',
        cancel: function (index) {
            layer.close(index)
            if (wstats) wstats_contact_cs(wstats)
        }
    });
}

function share_login_pop() {
    layer.open({
        type: 1,
        area: ['500px', 'auto'],
        shadeClose: true, //点击遮罩关闭
        content: '<div class="update-box">\n' +
            '<div class="update-img"></div>\n' +
            '<span class="update-text">' + unity_lang('membership_vistor_rights') + '</span>\n' +
            '<div class="update-btn" ><a class="update" href="/register" onclick="return referrer_link(this, \'detail\')" >' + unity_lang('membership_register') + '</a><a class="update" href="/login" onclick="return referrer_link(this, \'detail\')">' + unity_lang('membership_login') + '</a></div>\n' +
            '</div>'
    });
}

/**
 * 通用权限验证
 * @param vip
 * @param call
 * @param to_login: 是否直接跳转到登录页
 * @param $elem: 是否直接跳转到登录页
 */
function unity_authority(vip, call, to_login = false, $elem) {
    let options = {
        successful: call,
        failure: 1
    }
    options.$elem = $elem
    if (typeof to_login == 'object') options = Object.assign({}, options, to_login)
    else options.login = to_login
    verify_authority(vip, options)
}

function verify_vip_level(vip, need_vip) {
    console.log(vip,need_vip,"9909")
    console.log(vip,need_vip,globalData,"9909")
    if (!vip) return false;
    return globalData.vipMarkLevel[vip] >= globalData.vipMarkLevel[need_vip]
}

/**
 * 埋点按钮如果无权查看则二次弹窗"联系客服"  埋点如已经弹窗则不再弹
 * @param code
 */
function wstats_contact_cs(code) {
    $.ajax('/async/wstats/ccs', {
        data: {
            code: code
        },
        datatype: 'text/json',
        type: 'get',
        success: function (result) {
            if (result.state != 0) return
            layer.open({
                type: 1,
                title: unity_lang('two_shows_tips'),
                area: ['500px', ''],
                content: '<div class="two-show"><h2>' + unity_lang('two_shows_title') + '</h2><p>' + unity_lang('two_shows_des') + '</p><img src="' + unity_lang('two_shows_ewmimg') + '"/></div>'
            });
        }
    })
}



//构建标签描述---------------------------------------------------

var date_des = {
    '1': '一个月',
    '3': '三个月',
    '6': '半年',
    '12': '一年',
    '24': '两年',
    '36': '三年',
}
// 搜索字段描述
if (wg.lang == 'cn') {
    var _params_des = {
        filter_weight: {
            type: 'repeat',
            des: {
                'tel': '包含电话',
                'email': '包含邮箱',
                'fax': '包含传真',
                'website': '包含网站',
                'contact': '包含联系人',
                'address': '包含地址',
            }
        },
        sort: {
            exclusion: '*',

            des: {
                default: '默认排序',
                bill_count: '提单数',
                contact: '联系方式',
                flag: '认证',
                last_trade_date: '最后一次交易时间',
            }
        },
        filter_bill_count: {
            fn: _build_bill_filter_des
        },
        filter_date: {
            fn: _build_date_filter_des
        },
        trade_countries: {
            exclusion: '*',
            type: 'by_type',
            des: {
                0: '从{0}有采购',
                1: '供应至{0}'
            }
        },
        buyer_ports: {
            exclusion: '*',
            des: '从{0}装运'
        },
        seller_ports: {
            exclusion: '*',
            des: '从{0}卸货'
        },
        company_mark: {
            exclusion: '*',
            type: 'repeat',
            des: {
                'product': '精准匹配',
                'follow': '多人收藏'
            }
        }
    }
} else {
    var _params_des = {
        filter_weight: {
            type: 'repeat',
            des: {
                'tel': 'telephone included',
                'email': 'Include email',
                'fax': 'Fax included',
                'website': 'Include website',
                'contact': 'Contact person included',
                'address': 'Include address',
            }
        },

        sort: {
            exclusion: '*',

            des: {
                default: 'default sort',
                bill_count: 'Number of bills of lading',
                contact: 'Contact information',
                flag: 'Certification',
                last_trade_date: 'Last Trading Time',
            }
        },
        filter_bill_count: {
            fn: _build_bill_filter_des
        },
        filter_date: {
            fn: _build_date_filter_des
        },
        trade_countries: {
            exclusion: '*',
            type: 'by_type',
            des: {
                0: 'There are purchases from {0}',
                1: 'Supply to{0}'
            }
        },
        buyer_ports: {
            exclusion: '*',
            des: 'Shipment from {0} '
        },
        seller_ports: {
            exclusion: '*',
            des: 'unload from{0}'
        },
        company_mark: {
            exclusion: '*',
            type: 'repeat',
            des: {
                'product': 'Yellow Diamond Fine Search',
                'follow': 'Multiple Collections'
            }
        }
    }
}


function get_params_des(key, _params, callback) {
    let options = _params_des[key]

    // 没有参数，则不执行操作
    if (options) {
        var params_value = _params[key]
        // 查看有没有回调方法
        if (options.fn != null) {
            var _des_data = options.fn(_params)
            if (_des_data) {
                callback(_des_data)
            }
            return
        }
        var pDes,
            data = {
                input: {
                    fields: {}
                }
            }
        // 为空
        if (params_value == null || params_value == '') return
        // // 排除值
        if (options.exclusion != null && params_value == options.exclusion) return
        // 需要根据公司类型替换内容
        if (options.type == 'by_type') {
            pDes = options.des[global_company_type]
            if (pDes) {
                data['des'] = pDes.format(params_value)
                data['input']['type'] = 'radio'
                data['input']['fields'][params_value] = params_value
                callback(data)
            }
            return
        }
        if (options.type == 'repeat') {
            var repeat_list = params_value.split('|');
            pDes = options.des
            var des_list = []
            for (let i = 0; i < repeat_list.length; i++) {
                var repeat_des = pDes[repeat_list[i]]
                if (repeat_des) {
                    des_list.push(repeat_des)
                    data['input']['fields'][repeat_list[i]] = repeat_des
                }
            }
            data['des'] = des_list
            data['input']['type'] = 'checkbox'
            callback(data)
            return
        }
        var ldes = options.des
        if (ldes) {
            var _des_type = typeof ldes
            if (_des_type == 'string') {
                data['des'] = ldes.format(params_value)
                data['input']['type'] = 'radio'
                data['input']['fields'][params_value] = params_value
                callback(data)
                return true
            }
            if (_des_type == 'object') {
                let _des_txt = ldes[params_value]
                if (_des_txt) {
                    data['des'] = _des_txt.format(params_value)
                    data['input']['type'] = 'radio'
                    data['input']['fields'][params_value] = params_value
                    callback(data)
                }
            }
        }
    }
}

/**
 *点击复制
 *
 */
function copy_text(elem, fn) {
    var text = document.getElementById(elem).innerText,
        new_elem = document.createElement('input');
    new_elem.setAttribute('value', text)
    document.body.appendChild(new_elem)
    new_elem.select()
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(new_elem)
        if (successful) return fn()
        layer.msg('您的浏览器不支持复制')
    } catch (e) {
        document.body.removeChild(new_elem)
        layer.msg('您的浏览器不支持复制')
    }
}

/**
 * 提单数据描述构建
 * @param filter_params
 * @returns {null|*}
 * @private
 */
function _build_bill_filter_des(filter_params) {
    var filter_bill_count_min = parseInt(filter_params['filter_bill_count_min'])
    filter_bill_count_min = isNaN(filter_bill_count_min) ? 0 : filter_bill_count_min
    var filter_bill_count_max = filter_params['filter_bill_count_max']
    filter_bill_count_max = filter_bill_count_max ? filter_bill_count_max : 0
    var data = {
        input: {
            type: 'radio',
            fields: {}
        }
    }
    if (filter_bill_count_min > 0 && filter_bill_count_max > 0 && filter_bill_count_max > filter_bill_count_min) {
        data['des'] = '{0}-{1}'.format(filter_bill_count_min, filter_bill_count_max)
        data['input']['fields']['{0}|{1}'.format(filter_bill_count_min, filter_bill_count_max)] = {
            text: data['des'],
            field: 'filter_bill_count_min|filter_bill_count_max'
        }
        return data
    }
    if (filter_bill_count_min > 0) {
        data['des'] = '交易次数大于{0}'.format(filter_bill_count_min)
        data['input']['fields'][filter_bill_count_min] = {
            text: data['des'],
            field: 'filter_bill_count_min'
        }
        return data
    }
    if (filter_bill_count_max > 0) {
        data['des'] = '交易次数小于{0}'.format(filter_bill_count_max)
        data['input']['fields'][filter_bill_count_max] = {
            text: data['des'],
            field: 'filter_bill_count_max'
        }
        return data
    }
    data['des'] = unity_lang('company_list_unlimited')
    data['input']['fields'][filter_bill_count_min] = {
        text: data['des'],
        field: 'filter_bill_count_min'
    }
    return data
}

/**
 * 交易时间描述构建
 * @param filter_params
 * @returns {Object|null}
 * @private
 */
function _build_date_filter_des(filter_params) {
    var filter_date = filter_params['filter_date']
    var filter_date_start = filter_params['filter_date_start']
    var filter_date_end = filter_params['filter_date_end']
    try {
        var data = {
            input: {
                type: 'radio',
                fields: {}
            }
        }
        if (filter_date != null && filter_date != '' && filter_date != '*') {
            data['des'] = '近{0}有交易'.format(date_des[filter_date])
            data['input']['fields'][filter_date] = '近{0}'.format(date_des[filter_date])
            return data
        } else {
            if (filter_date_start && filter_date_start != '*' && filter_date_end && filter_date_end != '*') {
                data['des'] = '从{0}至{1}'.format(filter_date_start, filter_date_end)
                data['input']['fields']['{0}|{1}'.format(filter_date_start, filter_date_end)] = {
                    text: data['des'],
                    field: 'filter_date_start|filter_date_end'
                }
                return data
            }
            if (filter_date_start && filter_date_start != '*') {
                data['des'] = '交易时间大于{0}'.format(filter_date_start)
                data['input']['fields'][filter_date_start] = {
                    text: data['des'],
                    field: 'filter_date_start'
                }
                return data
            }
            if (filter_date_end && filter_date_end != '*') {
                data['des'] = '交易时间小于{0}'.format(filter_date_end)
                data['input']['fields'][filter_date_end] = {
                    text: data['des'],
                    field: 'filter_date_end'
                }
                return data
            }
        }
    } catch (e) {
        console.log(unity_lang('filter_date_error_tips'))
    }
    data['des'] = unity_lang('company_list_time_range')
    data['input']['fields']['*'] = {
        text: data['des'],
        field: 'filter_date'
    }
    return data
}

//   构建标签描述---------------------------------------------------end

// 全局分页

/**
 * 计算用开始日期和结束日期计算天数
 * @param sDate1
 * @param sDate2
 * @returns {number}
 * @constructor
 */
function DateDiff(sDate1, sDate2) {
    var oDate1, oDate2, iDays
    oDate1 = new Date(sDate1.substring(4, 6) + '-' + sDate1.substring(6) + '-' + sDate1.substring(0, 4));
    oDate2 = new Date(sDate2.substring(4, 6) + '-' + sDate2.substring(6) + '-' + sDate2.substring(0, 4));
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
    return iDays;
}

/**
 * 根据月数获取起始时间和结束时间
 */
function month_range(months) {
    months = typeof months != 'number' ? parseInt(months) : months
    let end = new Date(),
        start = new Date(new Date().setMonth(end.getMonth() - months))
    return {
        end: end,
        start: start
    }
}


//获取cookie
function getCookies(name, key) {

    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    if (arr != null && arr[2] != null && arr[2] != '') {
        var str_arr = decodeURIComponent(arr[2].replace('"', '').replace('"', ''))
        if (key != null) {
            var key_reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
            var value = str_arr.match(key_reg)[2]
            return value
        }
        if (arr != null) return (arr[2]);
    }
    return "";
}

//退出登录
function logout() {
    $.get('/async/sign-out', function () {
        window.location.href = "/";
    })
}


// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    let mybtn = document.getElementById("myBtn")
    if (!mybtn) return false

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.opacity = "1";
    } else {
        document.getElementById("myBtn").style.opacity = "0";
    }
}
let sensitive_countries = {
    'taiwan': 'china taiwan',
    'hong kong': 'china hong kong',
    'macao': 'china macao'
}

function sensitive_country(country) {
    country = country ? country.toString() : ''
    return sensitive_countries[country.toLowerCase().toClear()] || country
}

// 点击按钮，返回顶部
function topFunction() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    $('body,html').animate({
        scrollTop: 0
    }, 300);
}

/**
 * 邀约体验黄钻
 * 首次购买超7天
 * @returns {any}
 */
function experience_invite_entrance() {
    if (no_full_pop == 'yes') return false
    let _tyv = getCookies('_TYV')
    if (_tyv == 'not') return false
    if (wg.user.experience != '' && wg.user.experience != undefined) return false
    var _texp = getCookies('_TEXP')
    if (_texp !== '' && _texp !== null) return false
    // 已经体验过的不弹
    let fExp = wg.user.user_functional.experience || 0
    // 体验过的不再弹
    if (fExp > 0) return false
    if (wg.user.vip_level !== 'v') return false
    let mv = wg.user.user_functional.mv || ''
    if (mv != '' && mv !== 'v') return false
    if (_tyv) return pop_experience_invite_entrance();

    $.ajax('/async/experience/invite/verify', {
        type: 'get',
        datatype: 'json',
        success: function (result) {
            if (result.state == 1) return;
            pop_experience_invite_entrance();
        }

    })
}

function pop_experience_invite_entrance() {
    let vip_start_time = wg.user.vip_start_time || ''
    if (!vip_start_time) return
    // console.log(new Date(vip_start_time) < $.date_change(-7, null, 'd'))
    if ($.date_change(7, new Date(vip_start_time), 'd') > new Date()) return;
    if (_lang == 'cn') {
        build_experience_top('<div class="trip-text"><font class="trip-title">邀您体验黄钻会员</font>' +
            '<font class="trip-time">体验时间为30分钟</font>' +
            '</div>' +
            '<a href="javascript:void(0)" onclick="experience_app_submit_cn()" class="trip-button-text">开始体验</a>' +
            '<a href="javascript:void(0)" onclick="close_experience_entrance()" class="trip-button" title="关闭提示" style="margin-top:7px;">' +
            '<i><svg t="1653282466565" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19080" width="19" height="19"><path d="M574.55 522.35L904.4 192.5c16.65-16.65 16.65-44.1 0-60.75l-1.8-1.8c-16.65-16.65-44.1-16.65-60.75 0L512 460.25l-329.85-330.3c-16.65-16.65-44.1-16.65-60.75 0l-1.8 1.8c-17.1 16.65-17.1 44.1 0 60.75l329.85 329.85L119.6 852.2c-16.65 16.65-16.65 44.1 0 60.75l1.8 1.8c16.65 16.65 44.1 16.65 60.75 0L512 584.9l329.85 329.85c16.65 16.65 44.1 16.65 60.75 0l1.8-1.8c16.65-16.65 16.65-44.1 0-60.75L574.55 522.35z" p-id="19081" fill="#ffffff"></path></svg></i>\n' +
            '</a>'
        )
        return;
    }
    build_experience_top('<div class="trip-text"><font class="trip-title">Experience Yellow Diamond</font>' +
        '<font class="trip-time">The experience lasts 30 minutes</font>' +
        '</div>' +
        '<a href="javascript:void(0)" onclick="experience_app_submit_en()" class="trip-button-text">Start</a>' +
        '<a href="javascript:void(0)" onclick="close_experience_entrance()" class="trip-button" title="close tips" style="margin-top:7px;">' +
        '<i><svg t="1653282466565" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19080" width="19" height="19"><path d="M574.55 522.35L904.4 192.5c16.65-16.65 16.65-44.1 0-60.75l-1.8-1.8c-16.65-16.65-44.1-16.65-60.75 0L512 460.25l-329.85-330.3c-16.65-16.65-44.1-16.65-60.75 0l-1.8 1.8c-17.1 16.65-17.1 44.1 0 60.75l329.85 329.85L119.6 852.2c-16.65 16.65-16.65 44.1 0 60.75l1.8 1.8c16.65 16.65 44.1 16.65 60.75 0L512 584.9l329.85 329.85c16.65 16.65 44.1 16.65 60.75 0l1.8-1.8c16.65-16.65 16.65-44.1 0-60.75L574.55 522.35z" p-id="19081" fill="#ffffff"></path></svg></i>\n' +
        '</a>'
    )
}

function build_experience_top(_html) {
    $('body').append('<div class="trip-fixed top-box"><div class="trip-fixed-k">' + _html + '  </div></div>')

}

function close_experience_entrance() {
    $.wSetCookie('_TEXP', '1', 86400, function () {
        $('.top-box').remove()
    })
}

function experience_app_submit_cn() {
    pop_share_bind_phone(experience_app_submit)
}

function experience_app_submit_en() {
    pop_share_bind_social_account(experience_app_submit)
}

function experience_app_submit() {
    if (wg.user.experience != '' && wg.user.experience != undefined) return false
    let fExp = wg.user.user_functional.experience || 0
    // 体验过的不能开体验
    if (fExp > 0) return false
    if (wg.user.vip_level !== 'v') return false
    let mv = wg.user.user_functional.mv || ''
    if (mv != '' && mv !== 'v') return false
    $.wajax('/async/experience/invite/apply', {
        type: 'post',
        cache: false,
        datatype: "text/json",
        success: function (result) {
            if (result.state == 0) {
                let open_options = {
                    type: 1,
                    skin: 'layui-layer-rim',
                    area: ['650px', ''], // 配置长高
                    shadeClose: false, //点击遮罩关闭
                    maxmin: false,
                    title: unity_lang('tan_tips_title_yellow'),
                    closeBtn: 1,
                    content: result.content,
                    cancel: function (index) {
                        close_experience(function () {
                            layer.close(index)
                        })
                    }
                }
                layer.open(open_options);
                return false
            }
            if (result.state === 1001) return window.location.reload()
            $.alert(result.message)
        }
    })
}

let iexperience_countdown

function experience_ing() {
    if (no_full_pop == 'yes') return false
    let experience = wg.user.experience || ''
    if (experience == '') return false
    if (_lang == 'cn') {
        // build_experience_top('<div class="trip-text"><font class="trip-title">正在体验'+ experience +'</font>' +
        build_experience_top('<div class="trip-text"><font class="trip-title">正在体验黄钻会员</font>' +
            '<font class="trip-time"></font>' +
            '</div>' +
            '<a href="javascript:void(0)" onclick="experience_pause()" class="trip-button" title="暂停体验">' +
            '<i><svg t="1653280283655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15462" width="25" height="25"><path d="M584.06738 657.815846H730.175589V365.74561H584.06738V657.815846zM291.997145 657.815846h146.035118V365.74561H291.997145V657.815846z m219.052677 292.143326c240.979872 0 438.105353-197.198572 438.105353-438.178444 0-240.906781-197.125482-438.105353-438.105353-438.105353-240.979872 0-438.105353 197.198572-438.105354 438.105353 0 240.979872 197.125482 438.178444 438.105354 438.178444zM0 512.365453c0-281.399001 230.235546-511.634547 511.634547-511.634547s511.634547 230.235546 511.634547 511.634547-230.235546 511.634547-511.634547 511.634547-511.634547-230.235546-511.634547-511.634547z" p-id="15463" fill="#ffffff"></path></svg></i> ' +
            '</a><a href="javascript: void(0)" onclick="experience_demonstration()" class="trip-button" title="视频演示" style="margin-top:2px;">' +
            '<i><svg t="1653283428100" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30966" width="29" height="29"><path d="M888.832 743.014H138.445c-15.292 0-27.853-12.56-27.853-27.852V203.98c0-15.292 12.561-27.853 27.853-27.853h750.387c15.292 0 27.853 12.561 27.853 27.853v510.634c0 15.838-12.561 28.4-27.853 28.4zM166.298 687.31h694.681v-454.93H166.298v454.93z" p-id="30967" fill="#ffffff"></path><path d="M513.638 232.38c-15.291 0-27.852-12.561-27.852-27.853V138.99c0-15.292 12.56-27.853 27.852-27.853s27.853 12.561 27.853 27.853v64.99c0 15.838-12.56 28.399-27.853 28.399zM169.574 930.884c-7.1 0-13.653-2.73-19.114-7.646-10.923-10.922-11.47-28.399-0.546-39.321l170.94-178.04c10.922-10.922 28.398-11.468 39.32-0.546s11.47 28.4 0.547 39.322l-170.94 178.04c-6.007 4.914-13.107 8.191-20.207 8.191z m691.951 0c-7.1 0-14.745-2.73-20.207-8.738l-170.94-178.04c-10.922-10.922-10.376-28.944 0.547-39.32s28.945-10.377 39.321 0.545l170.94 178.04c10.923 10.922 10.377 28.945-0.546 39.321-5.461 5.462-12.561 8.192-19.115 8.192z m-405.23-354.44c-7.1 0-14.746-1.639-20.754-5.462-13.653-8.192-21.845-22.937-21.845-41.506V400.59c0-18.569 8.192-33.314 21.845-41.506s31.13-7.1 46.968 1.638l111.411 64.444c15.838 9.284 25.122 23.484 25.122 39.868s-9.284 30.583-25.122 39.867l-111.957 64.444c-8.738 4.915-17.477 7.1-25.669 7.1z m12.56-158.379v94.481l81.92-46.967-81.92-47.514z" p-id="30968" fill="#ffffff"></path></svg></i> ' +
            '</a>')
    } else {
        build_experience_top('<div class="trip-text"><font class="trip-title">Experience Yellow Diamond</font>' +
            '<font class="trip-time"></font>' +
            '</div>' +
            '<a href="javascript:void(0)" onclick="experience_pause()" class="trip-button" title="Stop">' +
            '<i><svg t="1653280283655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15462" width="25" height="25"><path d="M584.06738 657.815846H730.175589V365.74561H584.06738V657.815846zM291.997145 657.815846h146.035118V365.74561H291.997145V657.815846z m219.052677 292.143326c240.979872 0 438.105353-197.198572 438.105353-438.178444 0-240.906781-197.125482-438.105353-438.105353-438.105353-240.979872 0-438.105353 197.198572-438.105354 438.105353 0 240.979872 197.125482 438.178444 438.105354 438.178444zM0 512.365453c0-281.399001 230.235546-511.634547 511.634547-511.634547s511.634547 230.235546 511.634547 511.634547-230.235546 511.634547-511.634547 511.634547-511.634547-230.235546-511.634547-511.634547z" p-id="15463" fill="#ffffff"></path></svg></i> ' +
            '</a><a href="javascript: void(0)" onclick="experience_demonstration()" class="trip-button" title="Video presentation" style="margin-top:2px;">' +
            '<i><svg t="1653283428100" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30966" width="29" height="29"><path d="M888.832 743.014H138.445c-15.292 0-27.853-12.56-27.853-27.852V203.98c0-15.292 12.561-27.853 27.853-27.853h750.387c15.292 0 27.853 12.561 27.853 27.853v510.634c0 15.838-12.561 28.4-27.853 28.4zM166.298 687.31h694.681v-454.93H166.298v454.93z" p-id="30967" fill="#ffffff"></path><path d="M513.638 232.38c-15.291 0-27.852-12.561-27.852-27.853V138.99c0-15.292 12.56-27.853 27.852-27.853s27.853 12.561 27.853 27.853v64.99c0 15.838-12.56 28.399-27.853 28.399zM169.574 930.884c-7.1 0-13.653-2.73-19.114-7.646-10.923-10.922-11.47-28.399-0.546-39.321l170.94-178.04c10.922-10.922 28.398-11.468 39.32-0.546s11.47 28.4 0.547 39.322l-170.94 178.04c-6.007 4.914-13.107 8.191-20.207 8.191z m691.951 0c-7.1 0-14.745-2.73-20.207-8.738l-170.94-178.04c-10.922-10.922-10.376-28.944 0.547-39.32s28.945-10.377 39.321 0.545l170.94 178.04c10.923 10.922 10.377 28.945-0.546 39.321-5.461 5.462-12.561 8.192-19.115 8.192z m-405.23-354.44c-7.1 0-14.746-1.639-20.754-5.462-13.653-8.192-21.845-22.937-21.845-41.506V400.59c0-18.569 8.192-33.314 21.845-41.506s31.13-7.1 46.968 1.638l111.411 64.444c15.838 9.284 25.122 23.484 25.122 39.868s-9.284 30.583-25.122 39.867l-111.957 64.444c-8.738 4.915-17.477 7.1-25.669 7.1z m12.56-158.379v94.481l81.92-46.967-81.92-47.514z" p-id="30968" fill="#ffffff"></path></svg></i> ' +
            '</a>')
    }
    let total_seconds = wg.user.total_seconds
    iexperience_countdown = window.setInterval(function () {
        total_seconds--
        if (total_seconds <= 0) {
            $('.top-box').remove();
            window.clearInterval(iexperience_countdown)
            return
        }
        experience_countdown($('.trip-time'), total_seconds)
    }, 1000)
}


function experience_countdown($experience, totalSeconds) {

    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    //秒
    var seconds = modulo % 60;
    //输出到页面
    $experience.html(unity_lang('tiyan_left_time_top') + '' + days + '' + unity_lang('share_day') + '' + hours + '' + unity_lang('share_hour') + '' + minutes + '' + unity_lang('share_min') + '' + seconds + '' + unity_lang('share_sec') + '')
}


// 用户体验暂停
function experience_pause() {
    if (!wg.user.id) return;
    let ts = wg.user.total_seconds
    if (wg.user.experience == '' || wg.user.experience == undefined || ts <= 0) return;
    $.get('/async/experience/pause', function (result) {
        if (result.state == 0) return pop_experience_pause({
            exp_ft: result.data.totalSeconds,
            exp_level: result.data.vip_level
        }, true)
        $.alert(result.message)
    })
}

function pop_experience_pause(data, s) {
    if (no_full_pop == 'yes') return false
    let experience = wg.user.experience || '',
        totalSeconds = data.exp_ft || 0,
        vip = data.exp_level || ''
    if ((experience != '' && !s) || !totalSeconds || !vip) return false
    try {
        window.clearInterval(iexperience_countdown)
        $('.top-box').remove();
    } catch (e) {}
    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //取模（余数）
    var modulo = totalSeconds % (60 * 60 * 24);
    //小时数
    var hours = Math.floor(modulo / (60 * 60));
    modulo = modulo % (60 * 60);
    //分钟
    var minutes = Math.floor(modulo / 60);
    let open_options = {
        type: 1,
        skin: 'layui-layer-rim',
        area: ['500px', ''], // 配置长高
        shadeClose: false, //点击遮罩关闭
        maxmin: false,
        title: unity_lang('tan_tips_title_yellow'),
        closeBtn: false,
        //content: '<div>您暂停了体验'+ vip +'， <p>'+ unity_lang('tiyan_left_time') + '' + days + 'd ' + hours + 'h ' + minutes + 'm</p>' +
        content: '<div class="dioman-trip"><i><svg t="1655110148124" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13806" width="80" height="80"><path d="M624.014222 832a111.995259 111.995259 0 0 1-224.009481 0z" fill="#FD6112" fill-opacity=".5" p-id="13807"></path>' +
            '<path d="M480.009481 80.004741m32.009482 0l-0.018963 0q32.009481 0 32.009481 32.009481l0 31.990519q0 32.009481-32.009481 32.009481l0.018963 0q-32.009481 0-32.009482-32.009481l0-31.990519q0-32.009481 32.009482-32.009481Z" fill="#FF5050" fill-opacity=".5" p-id="13808"></path>' +
            '<path d="M520.00237 128c163.479704 0 296.011852 132.532148 296.011852 296.011852v264.00237h8.002371a40.011852 40.011852 0 0 1 0 79.985778H200.00237a40.011852 40.011852 0 0 1 0-79.985778h24.007111V423.992889c0-163.479704 132.532148-296.011852 296.011852-296.011852z m174.876445 200.229926a32.009481 32.009481 0 0 0-45.207704 2.37037l-170.135704 188.909037-89.618963-84.195555-2.085925-1.820445a32.009481 32.009481 0 0 0-41.718519 48.450371l101.527704 95.402666 2.275555 2.010074a47.995259 47.995259 0 0 0 65.573926-4.114963l181.741037-201.822814 1.763556-2.123852a32.009481 32.009481 0 0 0-4.114963-43.064889z" fill="#FD6112" p-id="13809"></path></svg></i>' +
            '<h2>' + unity_lang('trip_tips_title') + '</h2><p>' + unity_lang('tiyan_left_time') + '' + days + '' + unity_lang('share_day') + '' + hours + '' + unity_lang('share_hour') + '' + minutes + '' + unity_lang('share_min') + '</p>' +
            '<a onclick="experience_continue()" class="dioman-trip-goon">' + unity_lang('trip_tips_goon') + '</a><a onclick="waiver_experience()" class="dioman-trip-giveup">' + unity_lang('trip_tips_giveup') + '</a></div>',
        cancel: function (index) {
            close_experience(function () {
                layer.close(index)
            })
        }
    }
    layer.open(open_options);
}
// 视频演示
function experience_demonstration() {
    if (!page_mark) {
        let open_options = {
            type: 1,
            skin: 'layui-layer-rim',
            area: ['750px', ''], // 配置长高
            shadeClose: false, //点击遮罩关闭
            maxmin: false,
            title: unity_lang('tan_vedio_title_other'),
            closeBtn: 1,
            content: '<div><video autoplay="autoplay" class="editor" controls="controls" width="100%" style="margin-bottom:-4px;"><source src="http://1254062548.vod2.myqcloud.com/71cf0de4vodgzp1254062548/f8e184ae387702302014447939/xtVzuGKnUhAA.mp4" /></video></div>'
        }
        layer.open(open_options);
        return;
    }
    full_pop('experience_lead_video_pop')
}

function experience_continue() {
    $.ajax("/async/experience/start", {
        datatype: 'text/html',
        type: 'get',
        success: function (result) {
            return window.location.reload()
        }
    });
}
// 放弃体验
function waiver_experience() {
    $.get("/async/experience/waiver", function (_) {
        window.location.reload()
    });
}


function pop_share_bind_phone(fn) {

    if (wg.user.user_phone !== '' && wg.user.user_phone !== null && wg.user.verifi === 1) {
        if (fn !== undefined) fn();
        return false;
    }
    wpull.dopen(function (side) {
        $.ajax('/async/pull/bind/phone', {
            type: 'GET',
            dateType: 'text/html',
            cache: false,
            success: function (data) {
                side.changeContent(data)
                $('#btn_verify_phone').click(function () {
                    pull_bind_phone(function () {
                        fn()
                        side.hide()
                    }, this)
                })
            }
        })
    })
}

function pop_share_bind_social_account(fn) {
    $.ajax('/sync/social-account/verify', {
        type: 'GET',
        dateType: 'text/json',
        cache: false,
        success: function (result) {
            if (result.state === 0) {
                if (result.content) {
                    wpull.dopen(function (side) {
                        side.changeContent(result.content)
                        $('#btn_bind_sa').click(function () {
                            bind_sa(function () {
                                fn()
                                side.hide()
                            }, this)
                        })
                    })
                    return;
                }
                if (fn !== undefined) fn();
                return;
            }
            $.alert(result.message)
        }
    })
}


function robot_verify(mark) {
    layer.open({
        type: 1,
        skin: 'layui-layer-rim',
        area: ['400px', ''], // 配置长高
        shadeClose: false, //点击遮罩关闭
        maxmin: false,
        closeBtn: 0,
        title: unity_lang('robots_tips_title'),
        id: 'robot_verify',
        btn: [unity_lang('robots_tips_sumbit')],
        content: '<div class="input-k" style="padding:0 20px;padding-top:15px;padding-bottom:5px;"><span>' +
            '<input type="hidden" value="' + mark + '" id="robot_mark" >\n' +
            '<input style="height:40px;border:1px #ddd solid;width:204px;padding:0 10px;float:left;border-radius:5px;font-weight:bold;" type="text" value="" id="robot_picture_code" placeholder="' + unity_lang('robots_tips_input') + '">\n' +
            '<img style="height:40px;border:1px #ddd solid;float:left;margin-left:10px;cursor:pointer;border-radius:5px;" id="robot_picture" onclick="robot_change_picture(this)" src=""></span></div>',
        success: function (layero, index, that) {
            robot_change_picture('#robot_picture')
        },
        yes: function (a, b) {
            let code = $('#robot_picture_code').val()
            if (!code) return $.alert('' + unity_lang('robots_tips_title') + '')
            $.ajax('/async/robot/verify', {
                data: {
                    code: code,
                    mark: mark
                },
                datatype: 'json',
                type: 'get',
                success: function (result) {
                    if (result.state != 0) return $.alert(result.message)
                    window.location.reload()
                }
            })
        }
    });
}

/*图片验证码*/
function robot_change_picture(elem) {
    $.ajax('/async/picture-code', {
        datatype: 'text/json',
        type: 'get',
        data: {
            'width': 100,
            'height': 33
        },
        success: function (result) {
            if (result.state == 1) {
                var data = result.data.base64
                $(elem).attr('src', "data:image/png;base64," + data).removeClass('picture-code')
            }
        }
    })
}

// 延迟加载或使用时加载js
var js_file_interval = {};

function load_js_file(call, callback) {
    if (typeof window[call] !== 'undefined' || typeof $.fn[call] !== 'undefined') {
        callback()
        return false;
    }

    var js_dom = document.createElement('script');
    js_dom.type = 'text/javascript';
    js_dom.async = true;
    js_dom.src = $('#' + call + '_js').val();
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(js_dom);
    js_file_interval[call] = window.setInterval(function () {
        if (typeof window[call] !== 'undefined' || typeof $.fn[call] !== 'undefined') {
            window.clearInterval(js_file_interval[call])
            callback()
        }
    }, 1000)
}


/* 新侧拉 */
(function (window, undefined) {
    "use strict";
    var wpull = {},
        body = document.body || document.documentElement,
        default_opt = {
            content: '<div class="msg">加载中...</div>',
            isShow: false,
            close_other: true,
            load: function (that) {

            }
        };
    var WClass = function (option) {
        this.option = Object.assign({}, default_opt, option || {});
        if (this.option.close_other) {
            this.other_hide()
        }
        this.elem_make = 'mask_layer_' + option.elemId


        this.isShow = this.option.isShow;
        if (this.isShow) this.init();
    };
    WClass.prototype = {
        isShow: false,
        init: function () {

            var _this = this;

            var html =
                '<div class="model-container" id="slide_over">' +
                '<div class="controls"><a class="cancel model-cancel" >×</a>' +
                '</div><div class="model-content"></div></div>';
            var ModelBoxCon = document.createElement("div");
            ModelBoxCon.setAttribute("class", "mask-layer");
            ModelBoxCon.setAttribute("id", this.elem_make);
            ModelBoxCon.style.zIndex = this.max_index();
            ModelBoxCon.innerHTML = html;
            ModelBoxCon.querySelector(".model-content").innerHTML = _this.option.content;

            document.getElementsByTagName("body")[0].appendChild(ModelBoxCon);
            this.show(function () {
                body.style.overflowY = 'hidden';
            });
            ModelBoxCon.onclick = function (e) {
                console.log('target:', e.target, ', this: ', this)

                if (e.target == this) {
                    _this.hide();
                }
            };
            ModelBoxCon.querySelector(".cancel").onclick = _this.eventsFn.bind(
                "", this, ModelBoxCon
            );
            _this.box = ModelBoxCon
            this.option.load(_this);
        },
        /**
         * 当该侧拉弹出时， 关闭其他侧拉
         */
        other_hide: function () {
            var elem = document.querySelector('.mask-layer')
            if (elem) elem.remove()
        },
        max_index: function () {
            let arr = [...document.querySelectorAll('*')].map(e => +window.getComputedStyle(e).zIndex || 0),
                max_ix = arr.length ? Math.max(...arr) : 0
            return max_ix > 2000000000 ? max_ix - 2000000000 + 1001 : max_ix + 1
        },
        changeContent: function (html, callback) {
            $(this.box).find(".model-content").html(html);
            if (callback) return callback();
        },
        show: function (callback) {
            var elem = document.getElementById(this.elem_make)
            elem.style.display = "block";
            setTimeout(function () {
                elem.querySelector('.model-container').classList.add('show');
            })
            if (callback) return callback();
        },
        hide: function (callback) {
            var elem = document.getElementById(this.elem_make)
            elem.querySelector('.model-container').classList.remove('show');
            setTimeout(function () {
                elem.remove()
                body.style.overflowY = 'auto';
            }, 300)
            // 常规操作， 如果不走这一步，可在 callback中还原
            if (callback) return callback();
        },
        eventsFn: function (e, doc, target) {
            var _thisEvent = target.target;
            // $(doc).remove();
            // doc.style.display = "none";
            e.isShow = false;
            e.hide(function () {
                body.style = '';
            })
            return false;
        }

    } || {};
    wpull.open = function (options) {
        new WClass(options)
    }
    wpull.close = function (eid, callback) {
        let elem = document.querySelector('#mask_layer_' + (eid || 'default_open'))
        elem.querySelector('.model-container').classList.remove('show');
        setTimeout(function () {
            elem.remove()
            body.style.overflowY = 'auto';
        }, 300)
        // 常规操作， 如果不走这一步，可在 callback中还原
        if (callback) return callback();
    }
    wpull.closeAll = function (callback) {
        let elem = document.querySelector('.mask-layer')
        elem.querySelector('.model-container').classList.remove('show');
        setTimeout(function () {
            elem.remove()
            body.style.overflowY = 'auto';
        }, 300)
        // 常规操作， 如果不走这一步，可在 callback中还原
        if (callback) return callback();
    }
    /**
     * 默认侧拉
     * @param callback
     */
    wpull.dopen = function (callback, old) {
        if (old) return callback(old)
        this.open({
            //内容
            isShow: true, //初始状态
            elemId: 'default_open',
            load: callback
        })
    }

    window.wpull = wpull;
})(window);

/**
 * 老侧拉
 * @type {function(*): void|*}
 */
var ModelBox = (function (opt) {
    return wpull.open(opt)
});
/*  分页  */
(function ($) {
    var paging = function (elem, options) {
        this.$this = $(elem);
        this.options = options
        this.init()
    }
    paging.prototype = {
        /**
         *初始化
         */
        init: function () {
            this.cal()
            this.$pageCtrl = $('<div class="page_ctrl"></div>').appendTo(this.$this)
            this.$pageNum = $('<div></div>').appendTo(this.$pageCtrl)
            this.$pageDW = $('<div></div>').appendTo(this.$pageCtrl)
            this.$pageCtrl.append('<div>' + unity_lang('filter_page_to') + '</span><input class="input_page_num" type="text" value=""><span class="page_text"></span><a class="to_page_num">' + unity_lang('filter_page_confirm') + '</a></div>')
            this._render_length_menu()
            this.render()
            let _this = this
            this.$this.on('click', 'a[class="prev_page"]', function () {
                _this.prev_page()
            })
            this.$this.on('click', 'a[class="next_page"]', function () {
                _this.next_page()
            })
            this.$this.on('click', 'a[class="page_num"]', function () {
                _this.skip_page($(this).html())
            })
            this.$this.on('click', 'a[class="to_page_num"]', function () {
                let _page = parseInt(_this.$this.find('.input_page_num').val())
                if (isNaN(_page) || _page == 0) return this._alert('请输入大于0的页码')
                _this.skip_page(_page)
            })
        },
        _alert: function (msg) {
            // 注意 ： 这里需要配合layer  没有layer 插件则alert
            if (typeof layer != "undefined") layer.msg(msg)
            else alert(msg)
        },
        /**
         * 计算分页数据
         */
        cal: function () {
            this.total = parseInt(this.options.total || 10)
            this.per_num = parseInt(this.options.per || 10)
            this.current_page = parseInt(this.options.current || 1)
            this.total_page = Math.ceil(this.options.total / this.per_num); //计算总页数,
        },
        _render_length_menu: function () {
            if (!this.options.lengthChange) return;
            let _that = this
            if (typeof this.$pageDW.wdropdown != 'undefined') {
                this.$pageDW.wdropdown({
                    data: function (that) {
                        $.each(_that.options.lengthMenu, function () {
                            that.render_item({
                                value: this,
                                text: this,
                                selected: this == _that.per_num
                            })
                        })
                    },
                    selected: function (e) {
                        _that.options.per = e.value
                        _that.per_num = e.value
                        _that.options.lengthChange(e.value)
                    }
                })
            }
        },
        /**
         * 渲染分页
         */
        render: function () {

            var page_num_html = '<a class="prev_page">' + unity_lang('filter_page_previous') + '</a>';
            for (var i = 0; i < this.total_page - 1; i++) {
                if (this.total_page > 4 && this.current_page > 2 && i < this.current_page - 1) {
                    if (i < 1) {
                        page_num_html += '<a class="page_num" >' + (i + 1) + '</a>';
                    } else if (i == 1) {
                        page_num_html += '<a class="page_dot">•••</a>';
                    }
                } else if (this.total_page > 4 && this.current_page < this.total_page - 3 && i > this.current_page + 1) {
                    if (this.current_page > 4 && i == this.current_page + 2) {
                        page_num_html += '<a class="page_dot">•••</a>';
                    } else if (this.current_page < 4) {
                        if (i < 4) {
                            page_num_html += '<a class="page_num">' + (i + 1) + '</a>';
                        } else if (i == 4) {
                            page_num_html += '<a class="page_dot">•••</a>';
                        }
                    }
                    //page_num_html+='<span class="page_dot">•••</span>';
                } else {
                    if (i == this.current_page - 1) {
                        page_num_html += '<a class="page_num current_page">' + (i + 1) + '</a>';
                    } else {
                        page_num_html += '<a class="page_num">' + (i + 1) + '</a>';
                    }
                }
            }
            if (this.current_page == this.total_page) {
                page_num_html += '<a class="page_num current_page">' + (i + 1) + '</a>';
            } else {
                page_num_html += '<a class="page_num" >' + (i + 1) + '</a>';
            }
            page_num_html += '<a class="next_page" >' + unity_lang('filter_page_next') + '</a><span class="page_total">' + this.current_page + '/ ' + this.total_page
            this.$pageNum.html(page_num_html);
            if (this.current_page == 1) {
                this.$this.find('.page_ctrl .prev_page').attr('disabled', 'disabled').addClass('btn_dis');
            } else {
                this.$this.find('.page_ctrl .prev_page').removeAttr('disabled').removeClass('btn_dis');
            }
            if (this.current_page == this.total_page) {
                this.$this.find('.page_ctrl .next_page').attr('disabled', 'disabled').addClass('btn_dis');
            } else {
                this.$this.find('.page_ctrl .next_page').removeAttr('disabled').removeClass('btn_dis');
            }
            this.$this.show()
            // if()
        },
        /**
         * 上一页
         */
        prev_page: function () {
            if (this.current_page > 1) {
                this.current_page--;
                this.callback()
            }
        },
        /**
         * 下一页
         */
        next_page: function () {
            if (this.current_page < this.total_page) {
                this.current_page++;
                this.callback()
            }
        },
        /**
         * 跳页
         * @param page
         */
        skip_page: function (page) {
            this.current_page = parseInt(page);

            if (this.current_page > 0 && this.current_page <= this.total_page) {
                this.callback()
            }
        },
        reload: function (options) {
            this.options = $.extend({}, this.options, options, true);

            this.cal()
            this.render()
        },
        /**
         * 回调函数
         */
        callback: function () {
            if (this.options.btn) {

            }
            var _that = this
            // start: size 模式
            if (this.options.offset == true) {
                this.options.callback((this.current_page - 1) * this.per_num, function () {
                    _that.render()
                }, this.per_num)
            } else {
                this.options.callback(this.current_page, function () {
                    _that.render()

                }, this.per_num)
            }
        },
        clear: function () {
            this.$this.hide()
        }

    }

    /**
     * 插件化
     */
    function plugin(options) {
        var page_obj = $(this).data('paging')
        if (page_obj) {
            if (options && options.reload) {
                page_obj.reload(options)
            }
            return page_obj
        }
        let defaults = {
            callback: function (page_or_start, call, per) {
                return true
            },
            total: 10,
            per: 10,
            current: 1,
            offset: false, // 是否为 start size  模式[第一页： 0到行数]
            lengthChange: false, // 是否可以改变每页大小
            lengthMenu: [20, 40, 60], // 可以改变每页大小的情况下的页码菜单
        }


        options = $.extend(defaults, options);
        page_obj = new paging(this, $.extend({}, options, $(this).data()))
        console.log(page_obj, 'page_obj')
        $(this).data('paging', page_obj)
        return page_obj
    }

    $.fn.paging = plugin;
})(jQuery);

/* 自动补全  */
(function ($) {
    'use strict'
    var default_options = {
            source: null,
            response: null,
            select: null,
            appendTo: null,
            position_parent: null,
            position: {},
            css: null,
            delay: 0,
        },
        defaultElement = "<input>"
    var autocomplete = function (elem, options) {
        this.options = $.extend(true, {}, default_options, options)
        elem = $(elem || defaultElement || this)[0];
        this.element = $(elem);
        this.active = true;
        this.to_search = false;
        this._create();
    }
    autocomplete.prototype = {
        _create: function () {
            var nodeName = this.element[0].nodeName.toLowerCase(),
                isTextarea = nodeName === "textarea",
                isInput = nodeName === "input",
                that = this;
            this.element.addClass("autocomplete-input").attr("autocomplete", "off");
            this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"];
            this._initSource()
            this.menu = this._create_menu()
            this.element.on({
                keydown: function (event) {
                    switch (event.key) {
                        case 'ArrowUp':
                            that._move(-1, event)
                            break
                        case 'ArrowDown':
                            that._move(1, event)
                            break
                        case 'Enter':
                            this.blur()
                            that._select()
                            event.stopPropagation()
                            break
                        default:
                            break
                    }
                },
                input: function (event) {
                    that._searchTimeout(event);
                },
                focus: function (event) {
                    that.to_search = false
                    that._open()
                    if (!that.menu.html() && that.active) {
                        that._search(null)
                    }
                }
            })
            $(document).on('click', '#' + this.menu.attr('id') + ' .auto-item-a', function (event) {
                that._select()
            })
            //鼠标悬停事件
            $(document).on('mouseover', '#' + this.menu.attr('id') + ' .auto-item', function (event) {
                that._mouseover($(this).index())
            })

            document.addEventListener("click", function (e) {
                let $this = $(e.target)
                if (!($this.data('autocomplete') || $this == that.element || $this[0] == that.menu[0])) {
                    that._close(e)
                }
            });
        },
        _create_menu: function () {
            let menu_id = this.element.attr('id') + "_autocomplete_ui",
                $menu = $('#' + menu_id)
            if ($menu.length > 0) return $menu
            let _css = this.options.css || {}
            return $("<ul></ul>").addClass("ui-autocomplete ui-front").css(_css)
                .attr('id', menu_id)
                .appendTo(this._appendTo())
                .hide()
        },
        _initSource: function () {
            var that = this;
            if ($.isArray(this.options.source)) {
                var array = this.options.source;
                this.source = function (request, response) {
                    response(that.filter(array, request.term));
                };
            } else if (typeof this.options.source === "string") {
                this.source = function (request, response) {
                    // if (that.xhr) return that.xhr.abort();
                    that.xhr = $.ajax({
                        url: this.options.source,
                        data: request,
                        dataType: "json",
                        success: function (data) {
                            response(data);
                        },
                        error: function () {
                            response([]);
                        }
                    });
                };
            } else {
                this.source = this.options.source;
            }
        },
        _select: function () {
            /**
             * 默认选中
             */
            let item = this._active_item()
            if (item) this._value(item.value);
            if (this.options.select) this.options.select(item)
            this.to_search = true
            this._close()
        },
        _active_item: function () {
            if (this.active) return this.menu.find('.auto-item.active').data('item.autocomplete')
            return null
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments);
        },
        _delay: function (handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments)
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0)
        },
        _searchTimeout: function (event) {
            console.log(this.active, 'this.active')
            if (this.active) {
                this.to_search = false
                clearTimeout(this.searching);
                this.searching = this._delay(function () {
                    if (this.term !== this._value()) {
                        this._search(null, event)
                    }
                }, this.options.delay)
                if (this.options.search) this.options.search(this)
                this._open()
            }
        },

        _search: function (value, event) {
            value = value != null ? value : this._value();
            if (!value) return this._close(event)
            this.source({
                term: value
            }, this._resp(event));
        },
        _resp: function (event) {
            return $.proxy(function (content) {
                // 先销毁
                this._destroy()
                this._open()
                if (this.options.response) {
                    this.options.response(content, this)
                } else {
                    this._response(content)
                }
            }, this);
        },
        _response: function (content) {
            if (content) content = this._normalize(content)
            this._renderMenu(content);
        },
        _appendTo: function () {
            var element = this.options.appendTo;

            if (element) {
                element = element.jquery || element.nodeType ?
                    $(element) :
                    $(document).find(element);
            }

            if (!element || !element[0]) {
                element = this.element.closest(".ui-front");
            }

            if (!element.length) {
                element = window.document.body;
            }

            return element;
        },
        _move: function (direction, event) {
            // if(!this.options.move) return;
            let _li_len = this.menu.find('.auto-item'),
                _index = this.menu.find('.auto-item.active').index()
            if (_li_len <= 0) return false
            if (_index == null || _index < 0) {
                _index = 0
            } else {
                _index = _index + direction
                _index = Math.max(_index, 0)
                if (_index >= _li_len) _index = _li_len - 1
            }
            this._mouseover(_index)
            this._value(this._active_item().value)
        },
        _mouseover: function (_index) {
            this.menu.find('li:eq(' + _index + ')').addClass('active').siblings().removeClass('active')
        },
        _open: function (event) {
            this.menu.siblings('.ui-autocomplete').hide()
            if (this.active && !this.to_search) {
                this.menu.show();
                this.position();
                if (this.options.open) this.options.open(event, this)
            }

        },
        _clear: function () {
            clearTimeout(this.searching);
            this.menu.html('')
        },
        _destroy: function () {
            this._clear()
        },
        _renderMenu: function (items) {
            if (!this._value() || items.length <= 0) {
                this._close();
                return false
            }
            var that = this;
            $.each(items, function (index, item) {
                that._renderItem(item);
            });
        },
        _renderItem: function (item) {
            // var that = this;
            // this._renderLabel(item,function (_label){
            //     console.log('_label', _label)
            //     $("<li class='auto-item'>"+ _label +"</li>").data("item.autocomplete", item).appendTo(that.menu)
            // })
            let _label = this._renderLabel(item)
            $("<li class='auto-item'></li>").data("item.autocomplete", item).html(_label).appendTo(this.menu)
        },
        _renderLabel: function (item) {
            if (this.options.renderLabel) return this.options.renderLabel(item)
            return "<a class='auto-item-a'>" + item.label + "</a>"
        },
        _normalize: function (items) {
            if (items.length && items[0].label && items[0].value) return items
            return $.map(items, function (item) {
                if (typeof item === "string") {
                    return {
                        label: item,
                        value: item
                    }
                }
                return $.extend({
                    label: item.label || item.value,
                    value: item.value || item.label
                }, item)
            })
        },
        _close: function (event) {
            this.menu.hide();
        },
        _max_index: function () {
            var cu_m = 0;
            return Math.max.apply(null, $.map($("body > *:not(ins)"), function (e, n) {
                var maxz = parseInt($(e).css('z-index')) || 100;
                if (maxz >= 1147483647) return cu_m;
                else {
                    cu_m = maxz;
                    return cu_m
                }
            }));
        },
        filter: function (array, term) {
            var matcher = new RegExp(this.escapeRegex(term), "i");
            return $.grep(array, function (value) {
                return matcher.test(value.label || value.value || value);
            });
        },
        escapeRegex: function (value) {
            return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        position: function () {
            let that = this,
                _element;
            // 取父类位置已以及长度
            if (this.options.position_parent) {
                _element = that.element.parents(this.options.position_parent)
            } else {
                _element = that.element
            }
            let _offset = _element.offset()
            let element_height = _element.outerHeight(),
                top = _offset.top + element_height,
                left = _offset.left + (that.options.position.left || 0),
                width = _element.outerWidth() - 2,
                menu_height = that.menu.outerHeight(),
                wh = $(window).height()
            if (top + menu_height > wh) {
                top = top - menu_height - element_height
            }
            that.menu.css({
                "left": (parseInt(left)),
                "top": parseInt(top),
                'width': width,
                'z-index': that._max_index()
            });
        },
        destroy: function () {
            this._destroy()
        },
        invalid: function () {
            this.active = false
        },
        effective: function () {
            this.active = true
        }
    };

    /**
     * 插件化
     */
    function plugin(options) {
        let defaults = {}
        options = $.extend(defaults, options);
        var config = $.extend({}, options, $(this).data()),
            $autocomplete = new autocomplete(this, config)
        $(this).data('autocomplete', $autocomplete)
        return $autocomplete
    }

    $.fn.autocomplete = plugin;
})(jQuery);

//下拉菜单通用
(function ($) {
    var wdropdown = function (elem, options) {
        this.event = options.event
        this.$element = $(elem);
        this.options = options;
        this.init();
    }
    wdropdown.prototype = {
        stopP: function (e) {

            e ? e.stopPropagation() : this.event.cancelBubble = true;
        },
        /**
         * 修改选中项
         * @param type
         * @param value
         */
        change_selected: function (type, value) {
            let $select;
            if (type == 'index') {
                $select = this.menu.eq(value)
            } else {
                $select = this.menu.find('.item[data-value=' + value + ']')
            }
            $select.addClass('active').siblings('.item').removeClass('active')
            this.btn_container.find('.show').html($select.html())
        },
        empty_item: function () {
            this.menu.html('')
        },
        render_item: function (item) {
            var that = this
            var is_selected = item.selected ? 'active' : (that.options.init_value == item.value ? 'active' : '')
            that.menu.append('<li class="item ' + is_selected + '" data-value="' + item.value + '">' + item.text + '</li>')
            if (is_selected && !that.options.multiple) {
                that.btn_container.html('<font class="show">' + item.text + '</font><i></i>')
            }
        },
        _render_menu: function (data) {

            var that = this
            $.each(data, function () {
                that.render_item(this)
            })
        },
        _render: function () {
            var that = this
            if (typeof that.options.data == 'function') {
                that.options.data(that)
            } else if (that.options.data !== null) {
                that._render_menu(that.options.data)
            }
        },
        _selected: function () {
            var that = this
            that.menu.find('.item').unbind("click").click(function (ev) {
                var $item = $(this);
                if (!that.options.multiple) {
                    that.menu.removeClass('animate').stop(true, true).animate({
                        "margin-top": "10px"
                    }, 300);
                    if ($item.hasClass('active')) return false
                    $item.addClass('active').siblings('.item').removeClass('active')
                    that.btn_container.html('<font class="show">' + $item.html() + '</font><i></i>')
                } else {

                    if ($item.hasClass('active')) {
                        $item.removeClass('active')
                    } else {
                        $item.addClass('active')
                    }
                    that.stopP(ev)
                }
                that._selected_values()
                // 回调
                that.options.selected(that.values, that)
            })
        },
        _selected_values: function () {
            var that = this,
                $active = that.menu.find('.item.active');
            if ($active.length <= 0) return false;
            if (that.options.multiple) {
                that.values = []
                $.each(that.menu.find('.item.active'), function () {
                    that.values.push({
                        value: $(this).data('value'),
                        text: $(this).html(),
                        elem: $(this)
                    })
                })
            } else {
                var item = $active.eq(0)
                that.values = {
                    value: item.data('value'),
                    text: item.html(),
                    elem: item
                }
            }
        },
        init: function () {
            this.$element.addClass('dropdown-container')
            var that = this,
                btn = that.$element.find('.dropdown-btn'),
                menu = that.$element.find('.dropdown-menu');
            if (btn.length <= 0) {
                that.btn_container = $('<div class="dropdown-btn" ></div>').appendTo(that.$element)
            } else {
                that.btn_container = btn
            }

            if (menu.length <= 0) {
                that.menu = $('<ul class="dropdown-menu"></ul>').appendTo(that.$element);
            } else {
                that.menu = menu
            }
            // 渲染
            that._render()
            // 获取
            that._selected_values()
            that.btn_container.on({
                click: function (e) {
                    $('.dropdown-container').find('ul').removeClass('animate').stop(true, true).animate({
                        "margin-top": "10px"
                    }, 300);
                    that.menu.addClass('animate').stop(true, true).animate({
                        "margin-top": "0"
                    }, 300);
                    $(document).click(function () {
                        that.menu.removeClass('animate').stop(true, true).animate({
                            "margin-top": "10px"
                        }, 300);
                    });
                    that._selected()
                    that.stopP(e)
                }
            })
        }
    }

    function Plugin(options) {
        var page_obj = $(this).data('wdropdown')
        if (page_obj) return page_obj
        var defaults = {
            selected: function () {
                return true
            },
            multiple: false, // 是否为多值
            data: []
        }
        options = $.extend(defaults, options);
        // get the args of the outer function..
        var args = arguments;
        [].shift.apply(args);
        var chain = this.each(function () {
            var $this = $(this);
            if ($this.data('wdropdown') == null) {
                var config = $.extend({}, options, $this.data());
                $this.data('wdropdown', new wdropdown(this, config))
            }
        });
        return chain;
    }

    $.fn.wdropdown = Plugin;

    $('.wdropdown').each(function () {
        var $wdropdown = $(this);
        Plugin.call($wdropdown, $wdropdown.data());
    })
})(jQuery);

/*!
 * layer - 通用 Web 弹出层组件
 * MIT Licensed
 */
(function (window, undefined) {
    "use strict";

    var isLayui = window.layui && layui.define,
        $, win, ready = {
            config: {},
            end: {},
            minIndex: 0,
            minLeft: [],
            btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],

            //五种原始层模式
            type: ['dialog', 'page', 'iframe', 'loading', 'tips'],

            //获取节点的style属性值
            getStyle: function (node, name) {
                var style = node.currentStyle ? node.currentStyle : window.getComputedStyle(node, null);
                return style[style.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](name);
            },

        };

    //默认内置方法。
    var layer = {
        v: '3.5.1',
        ie: function () { //ie版本
            var agent = navigator.userAgent.toLowerCase();
            return (!!window.ActiveXObject || "ActiveXObject" in window) ? (
                (agent.match(/msie\s(\d+)/) || [])[1] || '11' //由于ie11并没有msie的标识
            ) : false;
        }(),
        index: (window.layer && window.layer.v) ? 100000 : 0,
        config: function (options, fn) {
            options = options || {};
            layer.cache = ready.config = $.extend({}, ready.config, options);
            typeof options.extend === 'string' && (options.extend = [options.extend]);

            //如果设置了路径，则加载样式
            if (ready.config.path) layer.ready();

            if (!options.extend) return this;
            return this;
        },

        //主体CSS等待事件
        ready: function (callback) {
            return this;
        },

        //各种快捷引用
        alert: function (content, options, yes) {
            var type = typeof options === 'function';
            if (type) yes = options;
            return layer.open($.extend({
                content: content,
                yes: yes
            }, type ? {} : options));
        },

        confirm: function (content, options, yes, cancel) {
            var type = typeof options === 'function';
            if (type) {
                cancel = yes;
                yes = options;
            }
            return layer.open($.extend({
                content: content,
                btn: ready.btn,
                yes: yes,
                btn2: cancel
            }, type ? {} : options));
        },

        msg: function (content, options, end) { //最常用提示层
            var type = typeof options === 'function',
                rskin = ready.config.skin;
            var skin = (rskin ? rskin + ' ' + rskin + '-msg' : '') || 'layui-layer-msg';
            var anim = doms.anim.length - 1;
            if (type) end = options;
            return layer.open($.extend({
                content: content,
                time: 3000,
                shade: false,
                skin: skin,
                title: false,
                closeBtn: false,
                btn: false,
                resize: false,
                end: end
            }, (type && !ready.config.skin) ? {
                skin: skin + ' layui-layer-hui',
                anim: anim
            } : function () {
                options = options || {};
                if (options.icon === -1 || options.icon === undefined && !ready.config.skin) {
                    options.skin = skin + ' ' + (options.skin || 'layui-layer-hui');
                }
                return options;
            }()));
        },

        load: function (icon, options) {
            return layer.open($.extend({
                type: 3,
                icon: icon || 0,
                resize: false,
                shade: 0.01
            }, options));
        },

        tips: function (content, follow, options) {
            return layer.open($.extend({
                type: 4,
                content: [content, follow],
                closeBtn: false,
                time: 3000,
                shade: false,
                resize: false,
                fixed: false,
                maxWidth: 260
            }, options));
        }
    };

    var Class = function (setings) {
        var that = this,
            creat = function () {
                that.creat();
            };
        that.index = ++layer.index;
        that.config.maxWidth = $(win).width() - 15 * 2; //初始最大宽度：当前屏幕宽，左右留 15px 边距
        that.config = $.extend({}, that.config, ready.config, setings);
        document.body ? creat() : setTimeout(function () {
            creat();
        }, 30);
    };

    Class.pt = Class.prototype;

    //缓存常用字符
    var doms = ['layui-layer', '.layui-layer-title', '.layui-layer-main', '.layui-layer-dialog', 'layui-layer-iframe', 'layui-layer-content', 'layui-layer-btn', 'layui-layer-close'];
    doms.anim = ['layer-anim-00', 'layer-anim-01', 'layer-anim-02', 'layer-anim-03', 'layer-anim-04', 'layer-anim-05', 'layer-anim-06'];

    doms.SHADE = 'layui-layer-shade';
    doms.MOVE = 'layui-layer-move';

    //默认配置
    Class.pt.config = {
        type: 0,
        shade: 0.3,
        fixed: true,
        move: doms[1],
        title: '&#x4FE1;&#x606F;',
        offset: 'auto',
        area: 'auto',
        closeBtn: 1,
        time: 0, //0表示不自动关闭
        zIndex: 19891014,
        maxWidth: 360,
        anim: 0,
        isOutAnim: true, //退出动画
        minStack: true, //最小化堆叠
        icon: -1,
        moveType: 1,
        resize: true,
        scrollbar: true, //是否允许浏览器滚动条
        tips: 2
    };

    //容器
    Class.pt.vessel = function (conType, callback) {
        var that = this,
            times = that.index,
            config = that.config;
        var zIndex = config.zIndex + times,
            titype = typeof config.title === 'object';
        var ismax = config.maxmin && (config.type === 1 || config.type === 2);
        var titleHTML = (config.title ? '<div class="layui-layer-title" style="' + (titype ? config.title[1] : '') + '">' +
            (titype ? config.title[0] : config.title) +
            '</div>' : '');

        config.zIndex = zIndex;
        callback([
            //遮罩
            config.shade ? ('<div class="' + doms.SHADE + '" id="' + doms.SHADE + times + '" times="' + times + '" style="' + ('z-index:' + (zIndex - 1) + '; ') + '"></div>') : '',

            //主体
            '<div class="' + doms[0] + (' layui-layer-' + ready.type[config.type]) + (((config.type == 0 || config.type == 2) && !config.shade) ? ' layui-layer-border' : '') + ' ' + (config.skin || '') + '" id="' + doms[0] + times + '" type="' + ready.type[config.type] + '" times="' + times + '" showtime="' + config.time + '" conType="' + (conType ? 'object' : 'string') + '" style="z-index: ' + zIndex + '; width:' + config.area[0] + ';height:' + config.area[1] + ';position:' + (config.fixed ? 'fixed;' : 'absolute;') + '">' +
            (conType && config.type != 2 ? '' : titleHTML) +
            '<div id="' + (config.id || '') + '" class="layui-layer-content' + ((config.type == 0 && config.icon !== -1) ? ' layui-layer-padding' : '') + (config.type == 3 ? ' layui-layer-loading' + config.icon : '') + '">' +
            (config.type == 0 && config.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + config.icon + '"></i>' : '') +
            (config.type == 1 && conType ? '' : (config.content || '')) +
            '</div>' +
            '<span class="layui-layer-setwin">' + function () {
                var closebtn = ismax ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : '';
                config.closeBtn && (closebtn += '<a  class="layui-layer-ico ' + doms[7] + ' ' + doms[7] + (config.title ? config.closeBtn : (config.type == 4 ? '1' : '2')) + '" href="javascript:;"></a>');
                return closebtn;
            }() + '</span>' +
            (config.btn ? function () {
                var button = '';
                typeof config.btn === 'string' && (config.btn = [config.btn]);
                for (var i = 0, len = config.btn.length; i < len; i++) {
                    let _href = config.btn_href && config.btn_href.length >= i ? config.btn_href[i] : ''
                    button += '<a class="' + doms[6] + '' + i + '" ' + (_href ? (' target="_blank" href="' + _href + '"') : '') + '>' + config.btn[i] + '</a>'
                }
                return '<div class="' + doms[6] + ' layui-layer-btn-' + (config.btnAlign || '') + '">' + button + '</div>'
            }() : '') +
            (config.resize ? '<span class="layui-layer-resize"></span>' : '') +
            '</div>'
        ], titleHTML, $('<div class="' + doms.MOVE + '" id="' + doms.MOVE + '"></div>'));
        return that;
    };

    //创建骨架
    Class.pt.creat = function () {
        var that = this,
            config = that.config,
            times = that.index,
            nodeIndex, content = config.content,
            conType = typeof content === 'object',
            body = $('body');

        if (config.id && $('#' + config.id)[0]) return;

        if (typeof config.area === 'string') {
            config.area = config.area === 'auto' ? ['', ''] : [config.area, ''];
        }

        //anim兼容旧版shift
        if (config.shift) {
            config.anim = config.shift;
        }

        if (layer.ie == 6) {
            config.fixed = false;
        }

        switch (config.type) {
            case 0:
                config.btn = ('btn' in config) ? config.btn : ready.btn[0];
                layer.closeAll('dialog');
                break;
            case 2:
                var content = config.content = conType ? config.content : [config.content || '', 'auto'];
                config.content = '<iframe scrolling="' + (config.content[1] || 'auto') + '" allowtransparency="true" id="' + doms[4] + '' + times + '" name="' + doms[4] + '' + times + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + config.content[0] + '"></iframe>';
                break;
            case 3:
                delete config.title;
                delete config.closeBtn;
                config.icon === -1 && (config.icon === 0);
                layer.closeAll('loading');
                break;
            case 4:
                conType || (config.content = [config.content, 'body']);
                config.follow = config.content[1];
                config.content = config.content[0] + '<i class="layui-layer-TipsG"></i>';
                delete config.title;
                config.tips = typeof config.tips === 'object' ? config.tips : [config.tips, true];
                config.tipsMore || layer.closeAll('tips');
                break;
        }
        //建立容器
        that.vessel(conType, function (html, titleHTML, moveElem) {
            body.append(html[0]);
            conType ? function () {
                (config.type == 2 || config.type == 4) ? function () {
                    $('body').append(html[1]);
                }() : function () {
                    if (!content.parents('.' + doms[0])[0]) {
                        content.data('display', content.css('display')).show().addClass('layui-layer-wrap').wrap(html[1]);
                        $('#' + doms[0] + times).find('.' + doms[5]).before(titleHTML);
                    }
                }();
            }() : body.append(html[1]);
            $('#' + doms.MOVE)[0] || body.append(ready.moveElem = moveElem);

            that.layero = $('#' + doms[0] + times);
            that.shadeo = $('#' + doms.SHADE + times);

            config.scrollbar || doms.html.css('overflow', 'hidden').attr('layer-full', times);
        }).auto(times);

        //遮罩
        that.shadeo.css({
            'background-color': config.shade[1] || '#000',
            'opacity': config.shade[0] || config.shade
        });

        config.type == 2 && layer.ie == 6 && that.layero.find('iframe').attr('src', content[0]);

        //坐标自适应浏览器窗口尺寸
        config.type == 4 ? that.tips() : function () {
            that.offset()
            //首次弹出时，若 css 尚未加载，则等待 css 加载完毕后，重新设定尺寸
            parseInt(ready.getStyle(document.getElementById(doms.MOVE), 'z-index')) || function () {
                that.layero.css('visibility', 'hidden');
                layer.ready(function () {
                    that.offset();
                    that.layero.css('visibility', 'visible');
                });
            }();
        }();

        //如果是固定定位
        if (config.fixed) {
            win.on('resize', function () {
                that.offset();
                (/^\d+%$/.test(config.area[0]) || /^\d+%$/.test(config.area[1])) && that.auto(times);
                config.type == 4 && that.tips();
            });
        }

        config.time <= 0 || setTimeout(function () {
            layer.close(that.index);
        }, config.time);
        that.move().callback();

        //为兼容jQuery3.0的css动画影响元素尺寸计算
        if (doms.anim[config.anim]) {
            var animClass = 'layer-anim ' + doms.anim[config.anim];
            that.layero.addClass(animClass).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass(animClass);
            });
        }


        //记录关闭动画
        if (config.isOutAnim) {
            that.layero.data('isOutAnim', true);
        }
    };

    //自适应
    Class.pt.auto = function (index) {
        var that = this,
            config = that.config,
            layero = $('#' + doms[0] + index);

        if (config.area[0] === '' && config.maxWidth > 0) {
            //为了修复IE7下一个让人难以理解的bug
            if (layer.ie && layer.ie < 8 && config.btn) {
                layero.width(layero.innerWidth());
            }
            layero.outerWidth() > config.maxWidth && layero.width(config.maxWidth);
        }

        var area = [layero.innerWidth(), layero.innerHeight()],
            titHeight = layero.find(doms[1]).outerHeight() || 0,
            btnHeight = layero.find('.' + doms[6]).outerHeight() || 0,
            setHeight = function (elem) {
                elem = layero.find(elem);
                elem.height(area[1] - titHeight - btnHeight - 2 * (parseFloat(elem.css('padding-top')) | 0));
            };

        switch (config.type) {
            case 2:
                setHeight('iframe');
                break;
            default:
                if (config.area[1] === '') {
                    if (config.maxHeight > 0 && layero.outerHeight() > config.maxHeight) {
                        area[1] = config.maxHeight;
                        setHeight('.' + doms[5]);
                    } else if (config.fixed && area[1] >= win.height()) {
                        area[1] = win.height();
                        setHeight('.' + doms[5]);
                    }
                } else {
                    setHeight('.' + doms[5]);
                }
                break;
        }


        return that;
    };

    //计算坐标
    Class.pt.offset = function () {
        var that = this,
            config = that.config,
            layero = that.layero;
        var area = [layero.outerWidth(), layero.outerHeight()];
        var type = typeof config.offset === 'object';
        that.offsetTop = (win.height() - area[1]) / 2;
        that.offsetLeft = (win.width() - area[0]) / 2;

        if (type) {
            that.offsetTop = config.offset[0];
            that.offsetLeft = config.offset[1] || that.offsetLeft;
        } else if (config.offset !== 'auto') {

            if (config.offset === 't') { //上
                that.offsetTop = 0;
            } else if (config.offset === 'r') { //右
                that.offsetLeft = win.width() - area[0];
            } else if (config.offset === 'b') { //下
                that.offsetTop = win.height() - area[1];
            } else if (config.offset === 'l') { //左
                that.offsetLeft = 0;
            } else if (config.offset === 'lt') { //左上角
                that.offsetTop = 0;
                that.offsetLeft = 0;
            } else if (config.offset === 'lb') { //左下角
                that.offsetTop = win.height() - area[1];
                that.offsetLeft = 0;
            } else if (config.offset === 'rt') { //右上角
                that.offsetTop = 0;
                that.offsetLeft = win.width() - area[0];
            } else if (config.offset === 'rb') { //右下角
                that.offsetTop = win.height() - area[1];
                that.offsetLeft = win.width() - area[0];
            } else {
                that.offsetTop = config.offset;
            }

        }

        if (!config.fixed) {
            that.offsetTop = /%$/.test(that.offsetTop) ?
                win.height() * parseFloat(that.offsetTop) / 100 :
                parseFloat(that.offsetTop);
            that.offsetLeft = /%$/.test(that.offsetLeft) ?
                win.width() * parseFloat(that.offsetLeft) / 100 :
                parseFloat(that.offsetLeft);
            that.offsetTop += win.scrollTop();
            that.offsetLeft += win.scrollLeft();
        }

        if (layero.attr('minLeft')) {
            that.offsetTop = win.height() - (layero.find(doms[1]).outerHeight() || 0);
            that.offsetLeft = layero.css('left');
        }

        layero.css({
            top: that.offsetTop,
            left: that.offsetLeft
        });
    };

    //Tips
    Class.pt.tips = function () {
        var that = this,
            config = that.config,
            layero = that.layero;
        var layArea = [layero.outerWidth(), layero.outerHeight()],
            follow = $(config.follow);
        if (!follow[0]) follow = $('body');
        var goal = {
                width: follow.outerWidth(),
                height: follow.outerHeight(),
                top: follow.offset().top,
                left: follow.offset().left
            },
            tipsG = layero.find('.layui-layer-TipsG');

        var guide = config.tips[0];
        config.tips[1] || tipsG.remove();

        goal.autoLeft = function () {
            if (goal.left + layArea[0] - win.width() > 0) {
                goal.tipLeft = goal.left + goal.width - layArea[0];
                tipsG.css({
                    right: 12,
                    left: 'auto'
                });
            } else {
                goal.tipLeft = goal.left;
            }

        };

        //辨别tips的方位
        goal.where = [function () { //上
            goal.autoLeft();
            goal.tipTop = goal.top - layArea[1] - 10;
            tipsG.removeClass('layui-layer-TipsB').addClass('layui-layer-TipsT').css('border-right-color', config.tips[1]);
        }, function () { //右
            goal.tipLeft = goal.left + goal.width + 10;
            goal.tipTop = goal.top;
            tipsG.removeClass('layui-layer-TipsL').addClass('layui-layer-TipsR').css('border-bottom-color', config.tips[1]);
        }, function () { //下
            goal.autoLeft();
            goal.tipTop = goal.top + goal.height + 10;
            tipsG.removeClass('layui-layer-TipsT').addClass('layui-layer-TipsB').css('border-right-color', config.tips[1]);
        }, function () { //左
            goal.tipLeft = goal.left - layArea[0] - 10;
            goal.tipTop = goal.top;
            tipsG.removeClass('layui-layer-TipsR').addClass('layui-layer-TipsL').css('border-bottom-color', config.tips[1]);
        }];
        goal.where[guide - 1]();

        /* 8*2为小三角形占据的空间 */
        if (guide === 1) {
            goal.top - (win.scrollTop() + layArea[1] + 8 * 2) < 0 && goal.where[2]();
        } else if (guide === 2) {
            win.width() - (goal.left + goal.width + layArea[0] + 8 * 2) > 0 || goal.where[3]()
        } else if (guide === 3) {
            (goal.top - win.scrollTop() + goal.height + layArea[1] + 8 * 2) - win.height() > 0 && goal.where[0]();
        } else if (guide === 4) {
            layArea[0] + 8 * 2 - goal.left > 0 && goal.where[1]()
        }

        layero.find('.' + doms[5]).css({
            'background-color': config.tips[1],
            'padding-right': (config.closeBtn ? '30px' : '')
        });
        layero.css({
            left: goal.tipLeft - (config.fixed ? win.scrollLeft() : 0),
            top: goal.tipTop - (config.fixed ? win.scrollTop() : 0)
        });
    }

    //拖拽层
    Class.pt.move = function () {
        var that = this,
            config = that.config,
            _DOC = $(document),
            layero = that.layero,
            moveElem = layero.find(config.move),
            resizeElem = layero.find('.layui-layer-resize'),
            dict = {};

        if (config.move) {
            moveElem.css('cursor', 'move');
        }

        moveElem.on('mousedown', function (e) {
            e.preventDefault();
            if (config.move) {
                dict.moveStart = true;
                dict.offset = [
                    e.clientX - parseFloat(layero.css('left')), e.clientY - parseFloat(layero.css('top'))
                ];
                ready.moveElem.css('cursor', 'move').show();
            }
        });

        resizeElem.on('mousedown', function (e) {
            e.preventDefault();
            dict.resizeStart = true;
            dict.offset = [e.clientX, e.clientY];
            dict.area = [
                layero.outerWidth(), layero.outerHeight()
            ];
            ready.moveElem.css('cursor', 'se-resize').show();
        });

        _DOC.on('mousemove', function (e) {

            //拖拽移动
            if (dict.moveStart) {
                var X = e.clientX - dict.offset[0],
                    Y = e.clientY - dict.offset[1],
                    fixed = layero.css('position') === 'fixed';

                e.preventDefault();

                dict.stX = fixed ? 0 : win.scrollLeft();
                dict.stY = fixed ? 0 : win.scrollTop();

                //控制元素不被拖出窗口外
                if (!config.moveOut) {
                    var setRig = win.width() - layero.outerWidth() + dict.stX,
                        setBot = win.height() - layero.outerHeight() + dict.stY;
                    X < dict.stX && (X = dict.stX);
                    X > setRig && (X = setRig);
                    Y < dict.stY && (Y = dict.stY);
                    Y > setBot && (Y = setBot);
                }

                layero.css({
                    left: X,
                    top: Y
                });
            }

            //Resize
            if (config.resize && dict.resizeStart) {
                var X = e.clientX - dict.offset[0],
                    Y = e.clientY - dict.offset[1];

                e.preventDefault();

                layer.style(that.index, {
                    width: dict.area[0] + X,
                    height: dict.area[1] + Y
                })
                dict.isResize = true;
                config.resizing && config.resizing(layero);
            }
        }).on('mouseup', function (e) {
            if (dict.moveStart) {
                delete dict.moveStart;
                ready.moveElem.hide();
                config.moveEnd && config.moveEnd(layero);
            }
            if (dict.resizeStart) {
                delete dict.resizeStart;
                ready.moveElem.hide();
            }
        });

        return that;
    };

    Class.pt.callback = function () {
        var that = this,
            layero = that.layero,
            config = that.config;
        that.openLayer();
        if (config.success) {
            if (config.type == 2) {
                layero.find('iframe').on('load', function () {
                    config.success(layero, that.index, that);
                });
            } else {
                config.success(layero, that.index, that);
            }
        }
        layer.ie == 6 && that.IE6(layero);

        //按钮
        layero.find('.' + doms[6]).children('a').on('click', function () {
            var index = $(this).index();
            console.log(index, 'asdfasdfasdfasdf')
            if (index === 0) {
                if (config.yes) {
                    config.yes(that.index, layero)
                } else if (config['btn1']) {
                    config['btn1'](that.index, layero)
                } else {
                    layer.close(that.index);
                }
            } else {
                var close = config['btn' + (index + 1)] && config['btn' + (index + 1)](that.index, layero);
                close === false || layer.close(that.index);
            }
        });

        //取消
        function cancel() {
            var close = config.cancel && config.cancel(that.index, layero);
            close === false || layer.close(that.index);
        }

        //右上角关闭回调
        layero.find('.' + doms[7]).on('click', cancel);

        //点遮罩关闭
        if (config.shadeClose) {
            that.shadeo.on('click', function () {
                layer.close(that.index);
            });
        }

        //最小化
        layero.find('.layui-layer-min').on('click', function () {
            var min = config.min && config.min(layero, that.index);
            min === false || layer.min(that.index, config);
        });

        //全屏/还原
        layero.find('.layui-layer-max').on('click', function () {
            if ($(this).hasClass('layui-layer-maxmin')) {
                layer.restore(that.index);
                config.restore && config.restore(layero, that.index);
            } else {
                layer.full(that.index, config);
                setTimeout(function () {
                    config.full && config.full(layero, that.index);
                }, 100);
            }
        });

        config.end && (ready.end[that.index] = config.end);
    };

    //for ie6 恢复select
    ready.reselect = function () {
        $.each($('select'), function (index, value) {
            var sthis = $(this);
            if (!sthis.parents('.' + doms[0])[0]) {
                (sthis.attr('layer') == 1 && $('.' + doms[0]).length < 1) && sthis.removeAttr('layer').show();
            }
            sthis = null;
        });
    };

    Class.pt.IE6 = function (layero) {
        //隐藏select
        $('select').each(function (index, value) {
            var sthis = $(this);
            if (!sthis.parents('.' + doms[0])[0]) {
                sthis.css('display') === 'none' || sthis.attr({
                    'layer': '1'
                }).hide();
            }
            sthis = null;
        });
    };

    //需依赖原型的对外方法
    Class.pt.openLayer = function () {
        var that = this;

        //置顶当前窗口
        layer.zIndex = that.config.zIndex;
        layer.setTop = function (layero) {
            var setZindex = function () {
                layer.zIndex++;
                layero.css('z-index', layer.zIndex + 1);
            };
            layer.zIndex = parseInt(layero[0].style.zIndex);
            layero.on('mousedown', setZindex);
            return layer.zIndex;
        };
    };

    //记录宽高坐标，用于还原
    ready.record = function (layero) {
        var area = [
            layero.width(),
            layero.height(),
            layero.position().top,
            layero.position().left + parseFloat(layero.css('margin-left'))
        ];
        layero.find('.layui-layer-max').addClass('layui-layer-maxmin');
        layero.attr({
            area: area
        });
    };

    ready.rescollbar = function (index) {
        if (doms.html.attr('layer-full') == index) {
            if (doms.html[0].style.removeProperty) {
                doms.html[0].style.removeProperty('overflow');
            } else {
                doms.html[0].style.removeAttribute('overflow');
            }
            doms.html.removeAttr('layer-full');
        }
    };

    /** 内置成员 */

    window.layer = layer;

    //获取子iframe的DOM
    layer.getChildFrame = function (selector, index) {
        index = index || $('.' + doms[4]).attr('times');
        return $('#' + doms[0] + index).find('iframe').contents().find(selector);
    };

    //得到当前iframe层的索引，子iframe时使用
    layer.getFrameIndex = function (name) {
        return $('#' + name).parents('.' + doms[4]).attr('times');
    };

    //iframe层自适应宽高
    layer.iframeAuto = function (index) {
        if (!index) return;
        var heg = layer.getChildFrame('html', index).outerHeight();
        var layero = $('#' + doms[0] + index);
        var titHeight = layero.find(doms[1]).outerHeight() || 0;
        var btnHeight = layero.find('.' + doms[6]).outerHeight() || 0;
        layero.css({
            height: heg + titHeight + btnHeight
        });
        layero.find('iframe').css({
            height: heg
        });
    };

    //重置iframe url
    layer.iframeSrc = function (index, url) {
        $('#' + doms[0] + index).find('iframe').attr('src', url);
    };

    //设定层的样式
    layer.style = function (index, options, limit) {
        var layero = $('#' + doms[0] + index),
            contElem = layero.find('.layui-layer-content'),
            type = layero.attr('type'),
            titHeight = layero.find(doms[1]).outerHeight() || 0,
            btnHeight = layero.find('.' + doms[6]).outerHeight() || 0,
            minLeft = layero.attr('minLeft');

        if (type === ready.type[3] || type === ready.type[4]) {
            return;
        }

        if (!limit) {
            if (parseFloat(options.width) <= 260) {
                options.width = 260;
            }


            if (parseFloat(options.height) - titHeight - btnHeight <= 64) {
                options.height = 64 + titHeight + btnHeight;
            }

        }

        layero.css(options);
        btnHeight = layero.find('.' + doms[6]).outerHeight();

        if (type === ready.type[2]) {
            layero.find('iframe').css({
                height: parseFloat(options.height) - titHeight - btnHeight
            });
        } else {
            contElem.css({
                height: parseFloat(options.height) - titHeight - btnHeight -
                    parseFloat(contElem.css('padding-top')) -
                    parseFloat(contElem.css('padding-bottom'))
            })
        }
    };

    //最小化
    layer.min = function (index, options) {
        options = options || {};
        var layero = $('#' + doms[0] + index),
            shadeo = $('#' + doms.SHADE + index),
            titHeight = layero.find(doms[1]).outerHeight() || 0,
            left = layero.attr('minLeft') || (181 * ready.minIndex) + 'px',
            position = layero.css('position'),
            settings = {
                width: 180,
                height: titHeight,
                position: 'fixed',
                overflow: 'hidden'
            };

        //记录宽高坐标，用于还原
        ready.record(layero);

        if (ready.minLeft[0]) {
            left = ready.minLeft[0];
            ready.minLeft.shift();
        }

        //是否堆叠在左下角
        if (options.minStack) {
            settings.left = left;
            settings.top = win.height() - titHeight;
            layero.attr('minLeft') || ready.minIndex++; //初次执行，最小化操作索引自增
            layero.attr('minLeft', left);
        }

        layero.attr('position', position);
        layer.style(index, settings, true);

        layero.find('.layui-layer-min').hide();
        layero.attr('type') === 'page' && layero.find(doms[4]).hide();
        ready.rescollbar(index);

        //隐藏遮罩
        shadeo.hide();
    };

    //还原
    layer.restore = function (index) {
        var layero = $('#' + doms[0] + index),
            shadeo = $('#' + doms.SHADE + index),
            area = layero.attr('area').split(','),
            type = layero.attr('type');

        //恢复原来尺寸
        layer.style(index, {
            width: parseFloat(area[0]),
            height: parseFloat(area[1]),
            top: parseFloat(area[2]),
            left: parseFloat(area[3]),
            position: layero.attr('position'),
            overflow: 'visible'
        }, true);

        layero.find('.layui-layer-max').removeClass('layui-layer-maxmin');
        layero.find('.layui-layer-min').show();
        layero.attr('type') === 'page' && layero.find(doms[4]).show();
        ready.rescollbar(index);

        //恢复遮罩
        shadeo.show();
    };

    //全屏
    layer.full = function (index) {
        var layero = $('#' + doms[0] + index),
            timer;
        ready.record(layero);
        if (!doms.html.attr('layer-full')) {
            doms.html.css('overflow', 'hidden').attr('layer-full', index);
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            var isfix = layero.css('position') === 'fixed';
            layer.style(index, {
                top: isfix ? 0 : win.scrollTop(),
                left: isfix ? 0 : win.scrollLeft(),
                width: win.width(),
                height: win.height()
            }, true);
            layero.find('.layui-layer-min').hide();
        }, 100);
    };

    //改变title
    layer.title = function (name, index) {
        var title = $('#' + doms[0] + (index || layer.index)).find(doms[1]);
        title.html(name);
    };
    layer.closeByChild = function ($el) {
        layer.close($el.parents('.layui-layer').attr('times') || 1)
    }
    //关闭layer总方法
    layer.close = function (index, callback) {
        console.log(index, "layer弹窗")
        var layero = $('#' + doms[0] + index),
            type = layero.attr('type'),
            closeAnim = 'layer-anim-close';
        if (!layero[0]) return;
        var WRAP = 'layui-layer-wrap',
            remove = function () {
                if (type === ready.type[1] && layero.attr('conType') === 'object') {
                    layero.children(':not(.' + doms[5] + ')').remove();
                    var wrap = layero.find('.' + WRAP);
                    for (var i = 0; i < 2; i++) {
                        wrap.unwrap();
                    }
                    wrap.css('display', wrap.data('display')).removeClass(WRAP);
                } else {
                    //低版本IE 回收 iframe
                    if (type === ready.type[2]) {
                        try {
                            var iframe = $('#' + doms[4] + index)[0];
                            iframe.contentWindow.document.write('');
                            iframe.contentWindow.close();
                            layero.find('.' + doms[5])[0].removeChild(iframe);
                        } catch (e) {}
                    }
                    layero[0].innerHTML = '';
                    layero.remove();
                }
                typeof ready.end[index] === 'function' && ready.end[index]();
                delete ready.end[index];
                typeof callback === 'function' && callback();
            };

        if (layero.data('isOutAnim')) {
            layero.addClass('layer-anim ' + closeAnim);
        }

        $('#layui-layer-moves, #' + doms.SHADE + index).remove();
        layer.ie == 6 && ready.reselect();
        ready.rescollbar(index);
        if (layero.attr('minLeft')) {
            ready.minIndex--;
            ready.minLeft.push(layero.attr('minLeft'));
        }

        if ((layer.ie && layer.ie < 10) || !layero.data('isOutAnim')) {
            remove()
        } else {
            setTimeout(function () {
                remove();
            }, 200);
        }
    };

    //关闭所有层
    layer.closeAll = function (type, callback) {
        if (typeof type === 'function') {
            callback = type;
            type = null;
        }

        var domsElem = $('.' + doms[0]);
        $.each(domsElem, function (_index) {
            var othis = $(this);
            var is = type ? (othis.attr('type') === type) : 1;
            is && layer.close(othis.attr('times'), _index === domsElem.length - 1 ? callback : null);
            is = null;
        });
        if (domsElem.length === 0) typeof callback === 'function' && callback();
    };

    /**

     拓展模块，layui 开始合并在一起

     */

    var cache = layer.cache || {},
        skin = function (type) {
            return (cache.skin ? (' ' + cache.skin + ' ' + cache.skin + '-' + type) : '');
        };

    //仿系统prompt
    layer.prompt = function (options, yes) {
        var style = '';
        options = options || {};

        if (typeof options === 'function') yes = options;

        if (options.area) {
            var area = options.area;
            style = 'style="width: ' + area[0] + '; height: ' + area[1] + ';"';
            delete options.area;
        }
        var prompt,
            content = options.formType == 2 ? '<textarea class="layui-layer-input"' + style + '></textarea>' : function () {
                return '<input type="' + (options.formType == 1 ? 'password' : 'text') + '" class="layui-layer-input">';
            }();

        var success = options.success;
        delete options.success;

        return layer.open($.extend({
            type: 1,
            btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
            content: content,
            skin: 'layui-layer-prompt' + skin('prompt'),
            maxWidth: win.width(),
            success: function (layero) {
                prompt = layero.find('.layui-layer-input');
                prompt.val(options.value || '').focus();
                typeof success === 'function' && success(layero);
            },
            resize: false,
            yes: function (index) {
                var value = prompt.val();
                if (value === '') {
                    prompt.focus();
                } else if (value.length > (options.maxlength || 500)) {
                    layer.tips('&#x6700;&#x591A;&#x8F93;&#x5165;' + (options.maxlength || 500) + '&#x4E2A;&#x5B57;&#x6570;', prompt, {
                        tips: 1
                    });
                } else {
                    yes && yes(value, index, prompt);
                }
            }
        }, options));
    };


    //主入口
    ready.run = function (_$) {
        $ = _$;
        win = $(window);
        doms.html = $('html');
        layer.open = function (deliver) {
            var o = new Class(deliver);
            return o.index;
        };
    };

    //加载方式
    window.layui && layui.define ? (
        layer.ready(), layui.define('jquery', function (exports) { //layui 加载
            layer.path = layui.cache.dir;
            ready.run(layui.$);

            //暴露模块
            window.layer = layer;
            exports('layer', layer);
        })
    ) : (
        (typeof define === 'function' && define.amd) ? define(['jquery'], function () { //requirejs 加载
            ready.run(window.jQuery);
            return layer;
        }) : function () { //普通 script 标签加载
            layer.ready();
            ready.run(window.jQuery);
        }()
    );

})(window);