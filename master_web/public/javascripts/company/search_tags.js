// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'search_country_all': {
        cn: '全部国家',
        en: 'All Countries'
    },
    'search_country_count': {
        cn: '共计[@数量]国家及地区，最多可选10个',
        en: 'Total [@数量] countries & areas, Up to 10'
    },
    'search_contact': {
        cn: '包含联系方式',
        en: 'Including contact'
    },
    'search_tags_management': {
        cn: '搜索标签管理',
        en: 'Search label Management'
    },
    'search_tags_create': {
        cn: '创建标签',
        en: 'Create a label'
    },
    'search_tags_count': {
        cn: '共计',
        en: 'Total '
    },

    'label_edit': {
        cn: '编辑',
        en: 'Edit'
    },
    'label_save': {
        cn: '保存',
        en: 'Save'
    },
    'label_clear': {
        cn: '清空',
        en: 'Clear'
    },

    'tags_add_title': {
        cn: '创建搜索标签',
        en: 'Create a Search label'
    },
    'tags_add_tips': {
        cn: '提示：创建搜索标签时，以下筛选条件至少要选择一项！',
        en: 'Tip: When creating a search label, select one of the following filters at least!'
    },
    'tags_add_name': {
        cn: '标签名称',
        en: 'Label name'
    },
    'tags_add_scope': {
        cn: '归属范围',
        en: 'Scope of Attribution'
    },
    'tags_label_tips': {
        cn: '提示：标签名称可以是中文，例如：从中国有采购的贸易商',
        en: 'Tip: The label name can be in Chinese, e.g.'
    },
    'tags_contact_options': {
        cn: '联系方式',
        en: 'Contact options'
    },
    'tags_contact_email': {
        cn: '包含邮箱',
        en: 'Include email'
    },
    'tags_contact_contacts': {
        cn: '包含联系人',
        en: 'Include contacts'
    },
    'tags_contact_address': {
        cn: '包含公司地址',
        en: 'Include address'
    },
    'tags_contact_telephone': {
        cn: '包含电话',
        en: 'Include telephone'
    },
    'tags_contact_fax': {
        cn: '包含传真',
        en: 'Fax included'
    },
    'tags_contact_website': {
        cn: '包含网址',
        en: 'Includes website'
    },

    'company_contries_list': {
        cn: '选择国家或地区',
        en: 'Select Countries or Areas'
    },
    'company_contries_list_save': {
        cn: '确认',
        en: 'Save'
    },


    'tags_mark': {
        cn: '公司标记',
        en: 'Company mark'
    },
    'tags_precise_match': {
        cn: '黄钻精搜',
        en: 'Accurate Match'
    },
    'tags_multiple': {
        cn: '多人收藏',
        en: 'Multiple Collections'
    },
    'tags_date': {
        cn: '交易日期',
        en: 'Transaction Date'
    },
    'tags_date_all': {
        cn: '所有日期',
        en: 'All dates'
    },
    'tags_date_three_years': {
        cn: '近三年有',
        en: 'Last 3 years'
    },
    'tags_date_one_year': {
        cn: '近一年有',
        en: 'Last 1 year'
    },
    'tags_date_half_year': {
        cn: '近半年有',
        en: 'Last 6 months'
    },
    'tags_date_3_months': {
        cn: '近3个月有',
        en: 'Last 3 months'
    },
    'tags_date_1_month': {
        cn: '近1个月有',
        en: 'Last 1 month'
    },
    'tags_times': {
        cn: '交易次数',
        en: 'Transactions'
    },
    'tags_times_all': {
        cn: '不限次数',
        en: 'No limit'
    },
    'tags_times_five': {
        cn: '交易次数大于5',
        en: 'Greater than 5'
    },
    'tags_times_hundred': {
        cn: '交易次数大于100',
        en: 'Greater than 100'
    },
    'tags_times_customization': {
        cn: '自定义交易次数',
        en: 'Customization'
    },
    'tags_times_customization_tips': {
        cn: '填写交易次数区间范围，纯数字，从小至大。',
        en: 'Fill in the range of the number of transactions,from small to large.'
    },
    'tags_area': {
        cn: '供应区域',
        en: 'Export area'
    },
    'tags_area_select': {
        cn: '选择区域',
        en: 'Select area'
    },
    'tags_area_enter': {
        cn: '输入区域名',
        en: 'Enter a area'
    },
    'tags_area_enter_tips': {
        cn: '输入国家名称时，系统会自动补全；尽量点选系统提示的国家名称。',
        en: 'Enter area, the system will complete it automatically.'
    },
    'tags_port': {
        cn: '进出港口',
        en: 'Import Export Port'
    },
    'tags_port_export': {
        cn: '出口港',
        en: 'Export Port'
    },
    'tags_port_export_enter': {
        cn: '输入出港口',
        en: 'Enter Export Port'
    },
    'tags_port_import': {
        cn: '进口港',
        en: 'Import Port'
    },
    'tags_port_import_enter': {
        cn: '输入进口港',
        en: 'Enter Import Port'
    },
    'tags_general': {
        cn: '通用',
        en: 'General'
    },
    'tags_designated_buyer': {
        cn: '指定采购商',
        en: 'Designated Buyers'
    },
    'tags_designated_supplier': {
        cn: '指定供应商',
        en: 'Designated Buyers'
    },
    'tags_mofify': {
        cn: '修改搜索标签',
        en: 'Modify search labels'
    },
    'tags_submission_failed': {
        cn: '标签信息提交失败',
        en: 'Label info submited failed'
    },
    'tags_name_not_empty': {
        cn: '标签名不能为空',
        en: 'Label name cannot be empty'
    },
    'tags_saved_successfully': {
        cn: '保存成功',
        en: 'Saved successfully'
    },
    'tags_saving': {
        cn: '保存中...',
        en: 'Saving...'
    },
    'tags_add_max': {
        cn: '提示：最多可创建5个标签！',
        en: 'Tip: create up to 5 labels!'
    },

    'country_list_hot': {
        cn: '一线',
        en: 'Hot'
    },
    'country_list_countriest_select': {
        cn: '最多可以同时选择10个国家',
        en: 'Up to 10 countries can be selected at the same time'
    },


    'detail_pingbi_visitor_tips': {
        cn: '登陆后查阅板块内容',
        en: 'Login to view board content'
    },
    'detail_pingbi_register_tips': {
        cn: '免费用户每日可查3家',
        en: 'Free users can check 3 per day'
    },
    'detail_pingbi_vip_tips': {
        cn: '今日已查阅200家公司',
        en: '200 companies have been accessed today'
    },
    'detail_pingbi_login': {
        cn: '会员登陆',
        en: 'Login'
    },
    'detail_pingbi_register': {
        cn: '免费注册',
        en: 'Free Registration'
    },
    'detail_pingbi_buy': {
        cn: '购买会员',
        en: 'Buy Membership'
    },
    'detail_pingbi_upgrade': {
        cn: '升级会员',
        en: 'Upgrade Membership'
    },
    'detail_pingbi_rights': {
        cn: '会员权限',
        en: 'Membership rights'
    },
    'country_list_countriest_total': {
        cn: '以下搜索结果包含:',
        en: 'The following search results contain '
    },
    'country_list_countriest_more': {
        cn: '多国家',
        en: 'Collection'
    },

    //补充
    'detail_pingbi_yellow_tips': {
        cn: '黄钻会员可查阅内容',
        en: 'Available to Yellow Diamond members'
    },


    'yangben': {
        cn: 'yangben',
        en: 'demo'
    }
}
var _params = {
        key: '*',
        hs: '*',
        sort: 'default',
        start: 0,
        size: 1,
        company_type: global_company_type,
        country: '*',
        filter_bill_count_min: '*',
        filter_bill_count_max: '*',
        filter_weight: 'default',
        filter_date: '*',
        search_type: '2',
        search_language: '0',
        search_relation: '0',
        trade_countries: '*',
        buyer_ports: '*',
        seller_ports: '*',
        company_mark: '*',
        off_line_counties: '*'
    },
    req_params = queryObject()
var search_params = $.extend({}, _params, req_params, true)
var user = wg.user || null
let hot_company_country = [{
        country: 'india',
        country_cn_show: '印度',
        country_en_show: 'india'
    },
    {
        country: 'united states',
        country_cn_show: '美国',
        country_en_show: 'united states'
    },
    {
        country: 'vietnam',
        country_cn_show: '越南',
        country_en_show: 'vietnam'
    },
    {
        country: 'england',
        country_cn_show: '英国',
        country_en_show: 'england'
    },
    {
        country: 'mexico',
        country_cn_show: '墨西哥',
        country_en_show: 'mexico'
    },
    {
        country: 'south korea',
        country_cn_show: '韩国',
        country_en_show: 'south korea'
    },
    {
        country: 'turkey',
        country_cn_show: '土耳其',
        country_en_show: 'turkey',
        is_new: 1
    }
]
let turkey_ip_area=wg.ip_area || ""
console.log(user,"用户数据")
let filter_default_params = {
    filter_bill_count_min: '交易次数大于{0}',
    filter_bill_count_max: '交易次数小于{0}',
    filter_weight: {
        email: '包含邮箱',
        contact: '包含联系人',
        address: '包含联系人',
        fax: '包含邮箱',
        tel: '包含电话',
        website: '包含邮箱',
    },
    trade_countries: '*',
    buyer_ports: '*',
    seller_ports: '*',
    company_mark: '*'
}

var tag_mask_opt = {
    login: {
        icon: 0,
        content: '<span>' + unity_lang('detail_pingbi_visitor_tips') + '</span>' +
            '<a href="/login" onclick="return referrer_link(this)" target="_self" class="link-rb">' + unity_lang('detail_pingbi_login') + '</a>' +
            '<a href="/register" onclick="return referrer_link(this)" class="link-rb">' + unity_lang('detail_pingbi_register') + '</a>'
    },
    ordinary: {
        icon: 1,
        content: '<span>' + unity_lang('detail_pingbi_yellow_tips') + '</span>' +
            '<a href="/Alipay?v=v"  target="_blank" class="link-rb">' + unity_lang('detail_pingbi_buy') + '</a>' +
            '<a href="/loft_HD" target="_blank" class="link-rb">' + unity_lang('detail_pingbi_rights') + '</a>'
    }
}

let selected_countries = {},
    selected_countries_temp = {}
let line_promote = 3
$(function () {
    get_bang_line()
    $("#tag_stats_list .default-box:first .default-right .btn i").remove()

    // 获取已收藏公司个数和标签个数
    $.ajax('/async/stats/count', {
        datatype: 'text/json',
        type: 'get',
        data: {
            'stats_fields': 'tag|follow'
        },
        success: function (result) {
            $.each(result, function (a, b) {
                $.each(b, function (c, d) {
                    $('.count-' + c).html(d)
                })
            })
        }
    })

    /*获取顶部热门国家*/
    hot_countries()

    //选择top 国家
    $(document).on('click', '.screen-state  a:not(.multiple)', function () {
        //核心代码

        $('#country_list .multiple').addClass('display-none').removeClass('active')
        var country = $(this).data('value');
        selected_countries = {}
        selected_countries[country] = 1
        search_params.country = country
        search_recommend = 1
        submit_filter()
    })
    $('.history-keys').parents('.search-history').removeClass('display-none')
    // 加载热门搜索
    $.ajax('/async/hotKeys', {
        datatype: 'text/json',
        type: 'get',
        success: function (result) {
            let _ht = ''
            $.each(result.list, function () {
                _ht += ', <a href="/' + ['buyer', 'supplier'][global_company_type] + '/tags?key=' + this.keywords.replace(/ /g, '_') + '&search_type=2 ">' + this.keywords + '</a>'
            })
            $('#hot_keys').html(unity_lang('search_hot_record') + ': <p class="history-keys">' + _ht.slice(1) + '</p>').removeClass('display-none')
        }
    })

    $('#allCountries').click(function () {
        $.wModel(function (side) {
            build_stats_country(side)
        })
    })
    $(document).on('click', '#country_tab_con ul  .each-country', function () {

        let $this = $(this),
            country = $this.data('country'),
            active = $this.hasClass('active'),
            cont = $this.data('cont')
        if (!active) {
            let active_len = Object.keys(selected_countries_temp).length
            if (active_len > 9) return $.alert('' + unity_lang('country_list_countriest_select') + '')
            selected_countries_temp[country] = 1
            $('#country_tab_con ul  .each-country[data-country="' + country + '"]').addClass('active')
            $('#countries_tab_list .tab-' + cont).addClass('has')
        } else {
            $('#country_tab_con ul  .each-country[data-country="' + country + '"]').removeClass('active')
            delete selected_countries_temp[country]
            // 验证是否还有选中的
            let ck = $('#country_tab_con ul .each-country[data-cont="' + cont + '"].active').length
            if (ck <= 0) {
                $('#countries_tab_list .tab-' + cont).removeClass('has')
            }
        }
        let once_ck = $('#country_tab_con ul .each-country.once.active').length
        if (once_ck <= 0) $('#countries_tab_list .tab-once').removeClass('has')
        else $('#countries_tab_list .tab-once').addClass('has')
        submit_country_sw()
        // 选择国家是否存在top列中
        // if ($('#country_list .tab[data-value="' + country + '"]').length <= 0) {
        //     $(".pitch-on").html(show).data('value', country)
        //         .removeClass('display-none').addClass('active')
        //         .siblings('.tab').removeClass('active')
        // } else {
        //     // 存在则高亮
        //     $('#country_list .tab[data-value="' + country + '"]').addClass('active')
        //         .siblings('.tab').removeClass('active')
        // }
        // $('#allCountries').data('tab', $this.data('sindex')).data('country', country)
        // search_params.country = country
    })
    // $('#country_tab_con ul  .each-country').click(function (e) {
    //     side.hide()
    //     screen_company(this)
    // });

    //管理标签
    $('#byq_url').click(function () {
        if (!user.id) {
            window.location.href = "/login";
            return false;
        }
        unity_authority('yd', function () {
            $.wModel(function (side) {
                var data = {
                    start: 0,
                    company_type: global_company_type,
                    has_system: true,
                    general: true
                }
                $.ajax('/async/tags/list', {
                    datatype: 'text/json',
                    type: 'get',
                    data: data,
                    success: function (result) {

                        if (result.state == 0) {
                            var tags_li = ''
                            $.each(result.data.list, function () {
                                tags_li += '<li data-params=' + JSON.stringify(this) + '>'
                                tags_li += '<p class="title">' + this['tag_name_' + _lang] + '</p>'
                                tags_li += '<p class="mold">' + _build_params_des(3, this) + '</p>'
                                tags_li += '<p class="edit-k">'
                                if (this.user_id) {
                                    tags_li += '<i class="edit" data-tagid=' + this.tag_id + '></i>'
                                    tags_li += '<i class="del" onclick="deleteTags(this)" data-tagid=' + this.tag_id + '></i>'
                                }
                                tags_li += '</p>'
                                tags_li += '</li>'
                            })
                            var tags_list = '<div class="hearder">\n' +
                                '<h2>' + unity_lang('search_tags_management') + '</h2>\n' +
                                '<span id="create_tags">+' + unity_lang('search_tags_create') + '</span>\n' +
                                '</div>\n' +
                                '<div class="mail-collect">\n' +
                                '<p class="mail-collect-hint">' + unity_lang('search_tags_count') + '6</p>\n' +
                                '<ul class="lable-list"> ' + tags_li + '</ul>\n' +
                                '</div>'
                            side.changeContent(tags_list)

                            $('#create_tags').click(function () {
                                side.hide()
                                create_tag()
                            })
                            $('.edit').click(function () {
                                let params = $(this).parents('li').data("params")
                                side.hide()
                                create_tag(params)
                            })
                        }
                    }
                })
            })
        }, true)
    })

    $('#search_tags .mex-radio').click(function () {
        $('#search_tags .mex-text').val('')
    })

    $(document).on('input propertychange', '#search_tags .mex-text', function () {
        $('#search_tags .mex-radio').prop('checked', false)
    })
    //
    $('input:radio').click(function () {
        //alert(this.checked);
        //
        var $radio = $(this);
        // if this was previously checked
        if ($radio.data('waschecked') == true) {
            $radio.prop('checked', false);
            $radio.data('waschecked', false);
        } else {
            $radio.prop('checked', true);
            $radio.data('waschecked', true);
        }
    });

    // 推荐的产品
    search_recommend_products(search_params)
    tags_mask()
    if ($("#text_global_search").val()) {
        $('.clear-txt').show()
    }

})

function hot_countries() {

    $.ajax('/async/common/countries', {
        datatype: 'text/json',
        type: 'get',
        data: {
            tier: 0
        },
        success: function (result) {
            country_list = result.country_list
            _build_country_items()
            // top country 登录状态获取历史搜索，非登录获取hot,  历史不足7个 hot 补充
            var has_count = 0,
                top_count = result.top_count || 0,
                has_country = {},
                $country_list = $('#country_list'),
                _screen = $country_list.data('screen')
            $country_list.append('<a class="active tab" value="*">' + unity_lang('search_country_all') + '</a>')
            $country_list.append('<a class="display-none multiple tab" value="*">' + unity_lang('country_list_countriest_more') + '</a>')
            if (result.top_country) {
                has_count = result.top_country.length
                $.each(result.top_country, function () {
                    if (this.country == _screen) return true
                    has_country[this.country] = 1
                    let online_new = this.online_new ? '<font>new</font>' : ''
                    $country_list.append('<a class="tab" data-value="' + this.country + '">' + this.country + online_new + '</a>')
                })
            }
            if (has_count < top_count || has_count == 0) {
                $.each(hot_company_country, function () {
                    if (this.country == _screen) return true
                    if(turkey_ip_area == 'ZZ' &&  this.country == 'turkey' ) return true
                    if (!has_country[this.country]) {
                        has_country[this.country] = 1
                        let online_new = this.is_new ? '<font>new</font>' : ''
                        $country_list.append('<a class="tab" data-value="' + this.country + '">' + this['country_' + _lang + '_show'] + online_new + '</a>')
                    }
                })
            }
            $country_list.append('<a class="pitch-on tab display-none"></a>')
        }
    })
}

function build_stats_country(side) {
    let _se_params = Object.assign({}, search_params)
    delete _se_params.sort
    delete _se_params.country
    delete _se_params.is_add_log
    $.ajax('/async/common/country/stats', {
        data: _se_params,
        type: 'get',
        datatype: 'json',
        success: function (result) {
            if (result.data.list.length <= 0) {
                return $.alert('not data')
            }
            var tab_list = '<li class="tab continents tab-once" data-target="#country_tab_con">' + unity_lang('country_list_hot') + '</li>',
                tab_pane = '',
                active_country = {}, // 选中的国家，当用户选中后又进行了搜索，所以会出现选中的国家不存在的情况，这里需要剔除
                once_country = '',
                once_count = 0,
                _screen = $('#country_list').data('screen'),
                once_has_ck = ''
            $('#countries .country_tab_con').html('')
            $.each(result.data.list, function (_index, item) {
                var country_html = '',
                    country_count = 0,
                    has_ck = '',
                    _cont = item['name_en'].toLowerCase().toFix()
                $.each(item.country_list, function (key, value) {
                    let curr_country = value.country_en.toLowerCase(),
                        ct_active = ''
                    if (_screen == curr_country) return true
                    if (!verify_vip_level(wg.user.vip_level, 'bd') && !verify_extended_auth('unlock_indonesia_data') && curr_country == 'indonesia') return true
                    if (selected_countries[curr_country] == 1) {
                        active_country[curr_country] = 1
                        ct_active = 'active'
                        has_ck = 'has'
                    }
                    country_count++;
                    country_html += '<li  class="each-country ' + ct_active + '" data-cont="' + _cont + '"  data-country="' + curr_country + '"> ' + value['country_' + _lang + '_show'] + '(' + value.stats_count + ')</li>'
                    if (value.tier == 1) {
                        once_country += '<li  class="each-country once ' + ct_active + '" data-cont="' + _cont + '"  data-country="' + curr_country + '"> ' + value['country_' + _lang + '_show'] + '(' + value.stats_count + ')</li>'
                        once_count += 1
                        once_has_ck = has_ck ? "has" : once_has_ck
                    }
                })
                tab_pane += '<div class="item tab-pane" ><p>' + unity_lang('search_country_count').replace('[@数量]', country_count) + '</p><ul>' + country_html + '</ul></div>'

                tab_list += '<li class="tab continents tab-' + _cont + ' ' + has_ck + '" data-target="#country_tab_con">' + item['name_' + _lang] + '</li>'
            })
            // 更新选中的国家
            selected_countries_temp = Object.assign({}, active_country)
            var countries_html = '<div class="modal-header"><h1>' + unity_lang('company_contries_list') + '</h1><p><a href="javascript:void(0)" id="submit_country" >' + unity_lang('company_contries_list_save') + '</a></p></div>'

            countries_html += '<ul class="tab-list tabs" id="countries_tab_list">' + tab_list + '<br class="clear-box"/></ul>\n' +
                '<div class="tab_con" id="country_tab_con">' +
                '<div class="item tab-pane company-tags-list"><p>' + unity_lang('search_country_count').replace('[@数量]', once_count) + '</p><ul>' + once_country + '<br class="clear-box"/></ul></div>' + tab_pane + '</div>'

            side.changeContent(countries_html)
            $('#countries_tab_list .tab:eq(0)').addClass('active').siblings().removeClass('active')
            $('#country_tab_con .tab-pane:eq(0)').addClass('active').siblings().removeClass('active')
            if (once_has_ck) {
                $('#countries_tab_list .tab:eq(0)').addClass('has')
            }
            submit_country_sw()
            $('#submit_country').click(function () {
                let keys = Object.keys(selected_countries_temp)
                if (keys.length > 0) {
                    side.hide();
                    search_params.country = keys.join('|')
                    selected_countries = Object.assign({}, selected_countries_temp)
                    submit_filter()
                }
            })

        }
    })
}

function submit_country_sw() {
    if (Object.keys(selected_countries_temp).length > 0) {
        $('#submit_country').addClass('active')
    } else {
        $('#submit_country').removeClass('active')
    }
}

function tags_mask() {
    load_js_file('wMask', function () {
        $.each($('.perms-mask'), function () {
            let $this = $(this),
                auth = $this.data('auth')
            if (auth) return true
            if (!verify_sign({
                    only_return: true
                }, null)) return $this.wMask(tag_mask_opt.login)
            $this.wMask(tag_mask_opt.ordinary)
        })
    })
}

var country_list = [],
    country_items = [],
    port_items = [],
    country_data = {};

function _build_country_items() {
    if (country_items.length > 0) return country_items
    $.each(country_list, function (key, value) {
        country_items.push(value.country_en)
        // $.each(this.country_list, function (key, value) {
        //     country_items.push(value.country_en)
        // })
        country_data[value.country_en.toLowerCase()] = value
    })
    country_items.push('china')
    return country_items
}

function _build_port_items(fn) {
    if (port_items.length > 0) {
        fn(port_items)
        return false
    }
    port_list(function (result) {
        $.each(result.list, function () {
            port_items.push(this.name_en.toLowerCase())
        })
        fn(port_items)
    }, 0, 10000)
}

/**
 * 构建标签描述
 */
function build_tag_params_des() {
    $.each($('.lable-list li'), function () {
        var $this = $(this),
            _filter_params = $this.data('params').params
        var des_list = _build_params_des(3, _filter_params)

        if (des_list.length > 0) {
            $this.find('.mold').html('<span>' + des_list.join('</span><span>') + '</span>')
        }
    })
}

/**
 *
 * @param max_count
 * @param _filter_params
 * @param fn  回调方法
 * @returns {[]}
 * @private
 */
function _build_params_des(max_count, _filter_params, fn) {
    var des_list = [],
        count = 0
    $.each(_params_des, function (key, options) {
        if (count >= 3) return false;

        get_params_des(key, _filter_params, function (data) {
            if (!data) return true
            if (typeof data.des == "object") {
                count += data.des.length
                des_list = des_list.concat(data.des)
            } else {
                count++
                des_list.push(data.des)
            }
        })
    })
    return des_list.length > 3 ? des_list.slice(0, count) : des_list
}


function searchKey(el) {
    other_search($(el).data('keywords'))
}

function other_search(key) {
    let search_type
    if (isNaN(parseInt(key))) {
        search_params.key = key;
        search_params.hs = '*';
        search_type = 2
    } else {
        search_params.hs = key
        search_params.key = '*'
        search_type = 3
    }

    $("#text_search_type").val(search_type)
    $('.search-tab[data-value="' + search_type + '"]').click()
    $('#text_global_search').val(key)
    search_recommend = 1
    get_bang_line(key)
    submit_filter()
}

try {
    $('#start_filter_date').fdatepicker({
        format: 'yyyy-mm-dd',
    });
    $('#end_filter_date').fdatepicker({
        format: 'yyyy-mm-dd',
    });
} catch (e) {}

function create_tag(param) {

    unity_authority('yd', function () {
        var tagsParams = param
        var found_tags_html = ' <div class="modal-header">\n' +
            '<h1 class="title">' + unity_lang('tags_add_title') + '</h1>\n' +
            '<p>\n' +
            '<span id="submit_tag" class="creation">' + unity_lang('search_tags_create') + '</span>\n' +
            '<span id="submit_save_tag" class="creation">' + unity_lang('label_save') + '</span>\n' +
            '<span id="empty_params_btn" class="empty">' + unity_lang('label_clear') + '</span>\n' +
            ' </p>\n' +
            ' </div>\n' +
            '<p class="hint" id="message">' + unity_lang('tags_add_tips') + '</p>\n' +
            '<form name="search_tags" id="search_tags_from">\n' +
            '<input type="hidden" name="tag_id" value="">\n' +
            ' <div class="label-name filtrate">\n' +
            '<h3>' + unity_lang('tags_add_name') + '</h3>\n' +
            '<div class="tag-name">\n' +
            '<fieldset class="name">\n' +
            '<font>' + unity_lang('tags_add_name') + '</font>\n' +
            '<input placeholder="" name="tag_name" id="tag_names" class="clear-target" />\n' +
            '<i data-idel="tag_names" class="clear-txt">×</i>\n' +
            '</fieldset>\n' +
            '<fieldset class="scope-box">\n' +
            '<font>' + unity_lang('tags_add_scope') + '</font>\n' +
            '<div id="dw_scopeSelected"></div><input type="hidden" id="scopeSelected" value="-1">' +
            '</fieldset>\n' +
            '</div>\n' +
            '<font class="caution-tips">' + unity_lang('tags_label_tips') + '</font>\n' +
            ' </div>\n' +
            '<div class="contact-box filtrate">\n' +
            '<h3>' + unity_lang('tags_contact_options') + '</h3>\n' +
            '<ul class="filtrate-list" id="multiple">\n' +
            ' <li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="email">' + unity_lang('tags_contact_email') + '\n' +
            '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="contact">' + unity_lang('tags_contact_contacts') + '\n' +
            '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="address">' + unity_lang('tags_contact_address') + '\n' +
            '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="tel">' + unity_lang('tags_contact_telephone') + '\n' +
            '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="fax">' + unity_lang('tags_contact_fax') + '\n' +
            '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="website">' + unity_lang('tags_contact_website') + '\n' +
            '</li>\n' +
            '</ul>\n' +
            '</div>\n' +
            '<div class="company-tag filtrate">\n' +
            '<h3>' + unity_lang('tags_mark') + '</h3>\n' +
            '<ul class="filtrate-list">\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="company_mark" value="follow">' + unity_lang('tags_multiple') + '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="company_mark" value="product">' + unity_lang('tags_precise_match') + '</li>\n' +
            '</ul>\n' +
            '</div>\n' +
            '<div class="trade-date filtrate">\n' +
            '<h3>' + unity_lang('tags_date') + '</h3>\n' +
            '<ul class="filtrate-list">\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="*">' + unity_lang('tags_date_all') + '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="36">' + unity_lang('tags_date_three_years') + '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="12">' + unity_lang('tags_date_one_year') + '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="6">' + unity_lang('tags_date_half_year') + '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="3">' + unity_lang('tags_date_3_months') + '</li>\n' +
            '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="1">' + unity_lang('tags_date_1_month') + '</li>\n' +
            '</ul>\n' +
            '</div>\n' +
            '<div class="trade-times filtrate">\n' +
            '<h3>' + unity_lang('tags_times') + '</h3>\n' +
            '<ul class="filtrate-list">\n' +
            '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" class="mex-radio" value="*">' + unity_lang('tags_times_all') + '</li>\n' +
            '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" class="mex-radio" value="5">' + unity_lang('tags_times_five') + '</li>\n' +
            '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" class="mex-radio" value="100">' + unity_lang('tags_times_hundred') + '</li>\n' +
            '</ul>\n' +

            '<div class="filtrate-list-tips">\n' +
            '<fieldset>\n' +
            '<font>' + unity_lang('tags_times_customization') + '</font>\n' +
            '<input type="text" placeholder="from" class="two-input mex-text two-input-1" id="start_deal_count" name="filter_bill_count_min" />\n' +
            '<input type="text" placeholder="to" class="two-input mex-text" id="over_deal_count" name="filter_bill_count_max" />\n' +
            '</fieldset>\n' +
            '<font class="caution">' + unity_lang('tags_times_customization_tips') + '</font>\n' +
            '</div>\n' +

            '</div>\n' +
            '<div class="supply-area filtrate">\n' +
            '<h3>' + unity_lang('tags_area') + '</h3>\n' +
            '<div class="filtrate-list-tips">\n' +
            ' <fieldset class="auto-parent">\n' +
            '<font>' + unity_lang('tags_area_select') + '</font>\n' +
            '<input type="text" placeholder="' + unity_lang('tags_area_enter') + '" class="one-input clear-target" value="" id="filter_trade_countries" name="trade_countries" />\n' +
            '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
            '</fieldset>\n' +
            '<font class="caution">' + unity_lang('tags_area_enter_tips') + '</font>\n' +
            '</div>\n' +

            ' </div>\n' +
            '<div class="access-port filtrate">\n' +
            '<h3>' + unity_lang('tags_port') + '</h3>\n' +
            '<div class="port">\n' +
            '<fieldset class="auto-parent">\n' +
            '<font>' + unity_lang('tags_port_export') + '</font>\n' +
            '<input type="text" class="clear-target" placeholder="' + unity_lang('tags_port_export_enter') + '" value="" id="seller_ports" name="buyer_ports" />\n' +
            '<i data-idel="seller_ports" class="clear-txt">×</i>\n' +
            '</fieldset>\n' +
            '<fieldset class="unload auto-parent">\n' +
            '<font>' + unity_lang('tags_port_import') + '</font>\n' +
            '<input type="text" class="clear-target" placeholder="' + unity_lang('tags_port_import_enter') + '" value="" id="buyer_ports" name="seller_ports" />\n' +
            '<i data-idel="buyer_ports" class="clear-txt">×</i>\n' +
            '</fieldset>\n' +
            '</div>\n' +
            '</div>\n' +
            '</form>';
        new ModelBox({
            content: found_tags_html,
            isShow: true, //初始状态
            elemId: 'websiteHtml',
            load: function (that) {

                $('#dw_scopeSelected').wdropdown({
                    data: [{
                            value: '-1',
                            text: '' + unity_lang('tags_general') + '',
                            selected: true
                        },
                        {
                            value: 0,
                            text: '' + unity_lang('tags_designated_buyer') + ''
                        },
                        {
                            value: 1,
                            text: '' + unity_lang('tags_designated_supplier') + ''
                        }
                    ],
                    selected: function (e) {
                        $('#scopeSelected').val(e.value)
                    }
                })
                $('#filter_trade_countries').autocomplete({
                    source: function (request, response) {
                        let array = _build_country_items()
                        response(this.filter(array, request.term));
                    },
                    position_parent: '.auto-parent'
                })
                $('#seller_ports').autocomplete({
                    source: function (request, response) {
                        let that = this
                        _build_port_items(function (array) {
                            console.log(array)
                            response(that.filter(array, request.term));
                        })
                    },
                    position_parent: '.auto-parent'
                })
                $('#buyer_ports').autocomplete({
                    source: function (request, response) {
                        let that = this
                        _build_port_items(function (array) {
                            response(that.filter(array, request.term));
                        })
                    },
                    position_parent: '.auto-parent'
                })
                $(document).on('input propertychange', '[name="filter_bill_count_min"], [name="filter_bill_count_max"]', function () {
                    let _val = $(this).val(),
                        num_val = _val.replace(/[^0-9]/g, '')
                    $(this).val(num_val)
                    if (_val != num_val) $.alert('请输入纯数字的交易次数')
                })

                if (tagsParams == undefined || tagsParams.length == 1) {
                    $('#submit_save_tag').addClass('display-none')
                } else if (tagsParams.params) {
                    $('.modal-header .title').html('' + unity_lang('tags_mofify') + '')
                    $('#submit_tag').addClass('display-none')
                    $('#search_tags_from [name="tag_id"]').val(tagsParams.tag_id)
                    $('#tag_names').val(tagsParams.tag_name_cn)
                    $.each(tagsParams.params, function (key, value) {
                        var elems = $('#search_tags_from [name="' + key + '"]')
                        if (elems && elems.length > 0) {
                            let $elem = $(elems[0]),
                                type = $elem.attr('type'),
                                has_checked
                            if (type == 'text') {
                                // 先验证有没有单选
                                let _radio = $('#search_tags_from :radio[name="' + key + '"][value="' + value + '"]')
                                //没有单选再赋值text
                                if (_radio.length > 0) {
                                    _radio.prop('checked', true)
                                } else {
                                    value != '' && value != '*' ? $elem.val(value) : null;
                                }
                                return true
                            }
                            if (type == 'radio') {
                                let _radio = $('#search_tags_from :radio[name="' + key + '"][value="' + value + '"]')
                                if (_radio.length > 0) {
                                    _radio.prop('checked', true)
                                } else {
                                    $('#search_tags_from :text[name="' + key + '"]').val(value);
                                }
                                return true
                            }
                            if (type == 'checkbox') {
                                let arr = value.split('|');
                                $.each(arr, function () {
                                    $('#search_tags_from :checkbox[name="' + key + '"][value="' + this + '"]').prop('checked', true)
                                })
                            }

                        }
                    })
                }

                $('#submit_save_tag').click(function () {
                    let tag_name = $("#tag_names").val(),
                        tag_id = $('#search_tags_from [name="tag_id"]').val();
                    if (tag_id == '' || tag_id == null || tag_id == '*' || tag_id == '0') {
                        $('.hint').css('color', 'red');
                        $('.hint').text('' + unity_lang('tags_submission_failed') + '');
                        return false
                    }
                    if (tag_name == '' || tag_name == null || tag_name == '*') {
                        $('.hint').css('color', 'red');
                        $('.hint').text('' + unity_lang('tags_name_not_empty') + '');
                        return false
                    }
                    build_tag_params(function (tags_params) {
                        tags_params.tag_name = tag_name
                        tags_params.tag_id = tag_id
                        showLoading('' + unity_lang('tags_saving') + '', this)
                        $.ajax('/async/tags/edit', {
                            type: 'post',
                            data: tags_params,
                            datatype: 'json/text',
                            success: function (data) {
                                hideLoading()
                                if (data.state == 0) {
                                    $('.hint').text('' + unity_lang('tags_saved_successfully') + '').css('color', 'red');
                                    that.hide()
                                    submit_filter()
                                } else if (data.state == 100) {
                                    $('.hint').text('提示：系统异常，异常状态: 100').css('color', 'red');
                                }
                            }
                        });
                    })
                })

                $('#submit_tag').click(function () {
                    var tag_name = $("#tag_names").val()
                    if (tag_name == '' || tag_name == null || tag_name == '*') return $.alert(unity_lang('tags_add_title'))
                    build_tag_params(function (tags_params) {
                        tags_params.tag_name = tag_name
                        $.loadajax('/async/tags/create', {
                            type: 'post',
                            data: tags_params,
                            datatype: 'json/text',
                            success: function (data) {
                                if (data.state == 0) {
                                    $.alert(unity_lang('tags_saved_successfully'))
                                    that.hide()
                                    submit_filter()
                                    change_tags_count(1)
                                    return;
                                }
                                if (data.state == 1000) return $.alert(unity_lang('tags_add_max'))
                                if (data.state == 200) return $.alert('黄钻权限可查看，如已登录且已经是会员，请刷新后再试')
                                $.alert('系统异常，异常状态: ' + data.state)
                            }
                        });
                    })
                })

                $('#empty_params_btn').click(function () {
                    $(":input", "#search_tags_from")
                        .not(":button", ":reset", "hidden", "submit")
                        .val("")
                        .removeAttr("checked")
                        .removeAttr("selected");

                })
            }
        })
    }, true)


}

//收藏公司跳转
function collect_firm() {
    if (user.id) {
        window.location.href = "/user/datacenter/potential";
    } else {
        window.location.href = "/login";
    }
}

//删除标签
function deleteTags(elem) {
    var tagsId = $(elem).data("tagid")
    $.ajax('/async/tags/delete', {
        datatype: 'text/json',
        type: 'post',
        data: {
            tagsId: tagsId
        },
        success: function (result) {
            if (result.state == 0) {
                $(elem).parents('li').remove()
                change_tags_count(-1)
                submit_filter()
                return false
            }
            // 删除失败弹窗
        }
    })

}

//标签详情 - 修改标签
function editTags(params) {
    empty_tag_params()
    var tagsParams = params
    // $('#myModal').show().find('.modal-header .title').html('修改搜索标签');
    // $('#submit_edit_tag').removeClass('display-none')
    //     .siblings('.creation').addClass('display-none')

    $('#search_tags [name="tag_id"]').val(tagsParams.tag_id)
    $('#tag_name').val(tagsParams.tag_name_cn)
    create_tag(tagsParams)
    $.each(tagsParams.params, function (key, value) {
        var elems = $('#search_tags [name="' + key + '"]')
        if (elems && elems.length > 0) {
            let $elem = $(elems[0]),
                type = $elem.attr('type'),
                has_checked
            if (type == 'text') {
                // 先验证有没有单选
                let _radio = $('#search_tags :radio[name="' + key + '"][value="' + value + '"]')
                //没有单选再赋值text
                if (_radio.length > 0) {
                    _radio.prop('checked', true)
                } else {
                    value != '' && value != '*' ? $elem.val(value) : null;
                }
                return true
            }
            if (type == 'radio') {
                let _radio = $('#search_tags :radio[name="' + key + '"][value="' + value + '"]')
                if (_radio.length > 0) {
                    _radio.prop('checked', true)
                } else {
                    $('#search_tags :text[name="' + key + '"]').val(value);
                }
                return true
            }
            if (type == 'checkbox') {
                let arr = value.split('|');
                $.each(arr, function () {
                    $('#search_tags :checkbox[name="' + key + '"][value="' + this + '"]').prop('checked', true)
                })
            }

        }
        // 目前暂时只有 input, 如果后续有其他元素， 再使用以下方法
        // var elems = $("#search_tags [name='" + key + "']")
        // if(elems && elems[0]){
        //     let elem = elems[0], tagName = elem.tagName, $elem = $(elem)
        //     console.log($elem, tagName)
        //     if (tagName == 'INPUT') {
        //
        //     }
        // }
    })
}

function change_tags_count(add) {

    // 修改显示的个数
    let count_elem = $('.count-tags'),
        _count = count_elem.html()
    _count = _count != null && _count != '' ? Number(_count) : 0
    _count = _count + add
    count_elem.html(_count)
}

// 构建标签参数
function build_tag_params(fn) {
    var tags_params = $.extend(true, {}, _params)
    $.each(tags_params, function (key, value) {
        var elems = $('#search_tags_from [name="' + key + '"]')
        if (elems && elems.length > 0) {
            let $elem = $(elems[0]),
                type = $elem.attr('type'),
                has_checked
            if (type == 'text') {
                // 先验证有没有单选
                let _radio = $('#search_tags_from :radio[name="' + key + '"]:checked')
                //没有单选再赋值text
                if (_radio.length > 0) {
                    tags_params[key] = _radio.val()
                } else {
                    let _val = $elem.val()
                    if (_val) {
                        tags_params[key] = _val
                    }
                }
                return true
            }
            if (type == 'radio') {
                let _radio = $('#search_tags_from :radio[name="' + key + '"]:checked')
                if (_radio.length > 0) {
                    tags_params[key] = _radio.val()
                } else {
                    let _val = $('#search_tags_from :text[name="' + key + '"]').val()
                    if (_val) {
                        tags_params[key] = _val
                    }
                }
                return true
            }
            if (type == 'checkbox') {
                let arr = $('#search_tags_from :checkbox[name="' + key + '"]:checked'),
                    _vals = []
                $.each(arr, function () {
                    _vals.push($(this).val())
                })
                if (_vals.length > 0) {
                    tags_params[key] = _vals.join('|')
                }
            }

        }
    })
    //归属范围
    var scope_selected = $("#scopeSelected").val();
    if (scope_selected != null && scope_selected != '') {
        tags_params.company_type = scope_selected
    }
    fn(tags_params)
}

function empty_tag_params() {
    $(':input', '#search_tags')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
}

//选择筛选国家
function screen_company(elem) {
    let $this = $(elem),
        country = $this.data('country'),
        show = $this.data('show');
    // 选择国家是否存在top列中
    if ($('#country_list .tab[data-value="' + country + '"]').length <= 0) {
        $(".pitch-on").html(show).data('value', country)
            .removeClass('display-none').addClass('active')
            .siblings('.tab').removeClass('active')
    } else {
        // 存在则高亮
        $('#country_list .tab[data-value="' + country + '"]').addClass('active')
            .siblings('.tab').removeClass('active')
    }
    $('#allCountries').data('tab', $this.data('sindex')).data('country', country)
    search_params.country = country
    submit_filter()

}

//搜索按钮后的操作
function submit_search() {

    if (search_params.search_type == 3) {
        search_params.hs = $('#text_global_search').val();
    } else {
        search_params.key = $('#text_global_search').val();

    }
    search_params.is_add_log = true
    search_list()
}

function submit_filter() {
    search_params.is_add_log = false
    search_list()
}

//搜索接口
function search_list() {
    search_params.search_type = Number($("#text_search_type").val());
    // 处理国家选项
    let scountry = search_params.country,
        scountry_list = scountry && scountry != '' && scountry != '*' ? scountry.split('|') : []
    let sc_len = scountry_list.length
    if (sc_len == 1) {
        $('.country-selected').html('').addClass('display-none');
        $('#country_list .multiple').removeClass('active').addClass('display-none')
        let stcountry = scountry_list[0];
        // 选择国家是否存在top列中
        if ($('#country_list .tab[data-value="' + stcountry + '"]').length <= 0) {
            $(".pitch-on").html(country_data[stcountry]['country_' + _lang + '_show']).data('value', stcountry)
                .removeClass('display-none').addClass('active')
                .siblings('.tab').removeClass('active')
        } else {
            // 存在则高亮
            $('#country_list .tab[data-value="' + stcountry + '"]').addClass('active')
                .siblings('.tab').removeClass('active')
        }
    } else if (sc_len > 1) {
        $(".pitch-on").html('').addClass('display-none');
        let selected_html = ''
        $.each(scountry_list, function (_, _country) {
            let show = country_data[_country]['country_' + _lang + '_show'];
            selected_html += ('、' + show)
        })
        $('.country-selected').html('' + unity_lang('country_list_countriest_total') + '' + selected_html.slice(1)).removeClass('display-none');
        $('#country_list .multiple').addClass('active').removeClass('display-none').siblings().removeClass('active')
    }
    $.loadajax('/async/tags', {
        datatype: 'text/html',
        type: 'get',
        data: search_params,
        success: function (result) {
            $('#tag_stats_list').html(result)
            search_recommend_products(search_params)
            tags_mask()
            build_shrink_open()
        }
    })

}

function build_url(elem) {
    var params = $(elem).data('filter'),
        _url_params = $(elem).data('url'),
        key = $('#text_global_search').val(),
        search_type = parseInt($("#text_search_type").val()),
        auth = $(elem).data('auth'),
        tid = $(elem).data('tid')
    unity_authority(auth, function () {
        key = key && key != '' && typeof key == 'string' ? key.toFix() : key
        search_type = isNaN(search_type) ? params.search_type : search_type
        var _route = get_company_route(global_company_type, search_type, key, params.country)
        $(elem).attr('href', _route + '&' + _url_params + '&tid=' + tid).attr('target', '_blank')
    }, true)
}

function get_scrollTop_of_body() {
    var scrollTop;
    if (typeof window.pageYOffset != 'undefined') { //pageYOffset指的是滚动条顶部到网页顶部的距离
        scrollTop = window.pageYOffset;
    } else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
        scrollTop = document.documentElement.scrollTop;
    } else if (typeof document.body != 'undefined') {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
var right_box, operate_box, offset_top

function move_div() {
    right_box = $('.module-content.mar-l').height();
    operate_box = $('#operate_box')
    offset_top = $('.module-content.mar-l').offset().top + right_box;
    console.log(offset_top, 'right_box_top')
}
$(window).on('scroll', function () {
    var top = $(window).scrollTop();
    if (operate_box) {
        if (top > offset_top) {
            operate_box.addClass("load");
        }
        if (top < offset_top) {
            operate_box.removeClass("load");
        }
    }


})


// document.cookie="access_token=de676a4dc45c505c";