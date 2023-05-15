// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'company_filter_more': {
        cn: '更多',
        en: 'more'
    },
    'company_filter_contact': {
        cn: '联系方式',
        en: 'Contacts'
    },
    'company_filter_mail': {
        cn: '包含邮箱',
        en: 'Include mail'
    },
    'company_filter_tel': {
        cn: '包含电话',
        en: 'Include  tel'
    },
    'company_filter_site': {
        cn: '包含网址',
        en: 'Include  site'
    },
    'company_filter_mark': {
        cn: '公司标记',
        en: 'Company masks'
    },
    'company_accurate_match': {
        cn: '精准匹配',
        en: 'Accurate Match'
    },
    'company_accurate_multiple': {
        cn: '多人收藏',
        en: 'Multiple Collections'
    },
    'company_date_transaction': {
        cn: '交易日期',
        en: 'Transaction Date'
    },
    'company_all_times': {
        cn: '所有时间',
        en: 'All times'
    },
    'company_nearly_year': {
        cn: '近一年',
        en: 'Last a year'
    },
    'company_six_months': {
        cn: '近半年',
        en: 'Last 6 months'
    },
    'company_three_months': {
        cn: '近三个月',
        en: 'Last 3 months'
    },
    'company_transactions': {
        cn: '交易次数',
        en: 'Number of B/Ls'
    },
    'company_trades_over_5': {
        cn: '交易大于5',
        en: 'Greater over 5'
    },
    'company_trades_over_100': {
        cn: '交易大于100',
        en: 'Greater over 100'
    },
    'company_trade_area': {
        cn: '贸易区域',
        en: 'Trade area'
    },
    'company_purchashing_country': {
        cn: '采购国',
        en: 'Import country'
    },
    'company_country_china': {
        cn: '中国',
        en: 'China'
    },
    'company_country_india': {
        cn: '印度',
        en: 'India'
    },
    'company_country_united_states': {
        cn: '美国',
        en: 'United States'
    },
    'company_port_import': {
        cn: '卸货港口',
        en: 'PODs'
    },
    'company_port_export': {
        cn: '发货港口',
        en: 'POLs'
    },
    'company_port_ningbo': {
        cn: '宁波',
        en: 'Ningbo'
    },
    'company_port_shanghai': {
        cn: '上海',
        en: 'Shanghai'
    },
    'company_port_shenzhen': {
        cn: '深圳',
        en: 'Shenzhen'
    },
    'company_total': {
        cn: '共计',
        en: 'Total'
    },
    'company_screening': {
        cn: '筛选',
        en: 'Screening'
    },
    'company_collect': {
        cn: '收藏',
        en: 'collect'
    },
    'company_collect_all': {
        cn: '当前页面的公司已全部关注',
        en: 'All companies on the current page have been collected.'
    },
    'search_country_count': {
        cn: '共计[@数量]国家及地区，最多可选10个',
        en: 'Total [@数量] countries & areas, Up to 10'
    },


    'company_contries_list': {
        cn: '选择国家或地区',
        en: 'Select Countries or Areas'
    },
    'company_contries_list_save': {
        cn: '确认',
        en: 'Save'
    },

    'label_del_success': {
        cn: '删除成功',
        en: 'Deleted successfully'
    },
    'label_operation_excet': {
        cn: '操作异常',
        en: 'Operation exceptions'
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
        cn: '提示：标签名称可以是中文，例如：从中国有采购的采购商',
        en: 'Tip: The label name can be in Chinese, e.g.'
    },
    'tags_contact_options': {
        cn: '联系方式选择',
        en: 'Contact options'
    },
    'tags_contact_email': {
        cn: '包含邮箱',
        en: 'Include email'
    },
    'tags_contact_contacts': {
        cn: '包含联系人',
        en: 'Include  contacts'
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
        en: 'Include Fax'
    },
    'tags_contact_website': {
        cn: '包含网址',
        en: 'Include website'
    },

    'tags_mark': {
        cn: '公司标记',
        en: 'Company marks'
    },
    'tags_precise_match': {
        cn: '精准匹配',
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
        en: 'Fill in the range of the number of transactions, from small to large.'
    },
    'tags_area': {
        cn: '贸易区域',
        en: 'Trade area'
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
        en: 'Designated Suppliers'
    },
    'tags_not_empty': {
        cn: '提示：标签名不能为空',
        en: 'Tip: The label name cannot be empty'
    },
    'tags_create_successfuly': {
        cn: '创建成功',
        en: 'Created successfully'
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
    'tags_saving': {
        cn: '保存中...',
        en: 'Saving...'
    },
    'tags_add_max': {
        cn: '提示：最多可创建5个标签！',
        en: 'Tip: Create up to 5 labels!'
    },
    'tags_clear': {
        cn: '清空',
        en: 'Clear'
    },
    'tags_customization': {
        cn: '自定义',
        en: 'Customization'
    },
    'tags_country_all': {
        cn: '全部国家',
        en: 'All'
    },
    'tags_filter_criteria': {
        cn: '搜索条件筛选',
        en: 'Filter the search criteria'
    },
    'tags_filter_criteria_complete': {
        cn: '完成',
        en: 'Completed'
    },
    'tags_tags_add': {
        cn: '创建标签',
        en: 'Create a label'
    },
    'tags_create': {
        cn: '创建',
        en: 'Create'
    },
    'country_list_countriest_select': {
        cn: '最多可以同时选择10个国家',
        en: 'Up to 10 countries can be selected at the same time'
    },
    'country_list_countriest_total': {
        cn: '以下搜索结果包含:',
        en: 'The following search results contain '
    },
    'country_list_countriest_more': {
        cn: '多国家',
        en: 'Collection'
    },

    'country_list_hot': {
        cn: '一线',
        en: 'Hot'
    },

    'company_category_selected': {
        cn: '用户选择',
        en: 'User Choice'
    },

    'company_category_no': {
        cn: '暂无标签',
        en: 'No tags available'
    }
}

let select_tag_id = parseInt(queryString('tid') || 0)
let search_default_params = {
        start: 0,
        key: '*',
        hs: '*',
        company_type: 0,
        off_line_counties: '*',
        search_type: '2',
        search_language: '0',
        search_relation: '0',
        sort: 'default',
        country: '*'
    },
    filter_default_params = {
        filter_bill_count_min: '*',
        filter_bill_count_max: '*',
        filter_weight: 'default',
        trade_countries: '*',
        buyer_ports: '*',
        seller_ports: '*',
        company_mark: '*'
    },
    filter_tag_params = $.extend({}, search_default_params, filter_default_params, {
        filter_date: '*'
    }, true),
    filter_extend_params = $.extend({}, filter_default_params, {
            filter_bill_count: 'mark',
            filter_bill_count_min: 0,
            filter_bill_count_max: 0,
            filter_date_start: '*',
            filter_date_end: '*',
        },
        true
    ),
    search_params = $.extend({}, search_default_params, true),
    query_params = queryObject(),
    filter_des = [],
    filter_params = $.extend({}, filter_extend_params, true),
    final_search_params = {}

var user = wg.user || null
/* 筛选模块
 * key 描述：为搜索参数的key值， 特殊情况下(多值，多选) 作为查询url参数关键词
 * 如果default内的value 是一个对象且对象中有值， 则key取值 default的key;
 * 比如: filter_date， 这个key用于获取url参数值或者自定义内的值，
 * 在进行搜索的时候传递的还是 filter_date_start filter_date_end
 *
 * 值为空时 不构造筛选模块， 只做传入参数的验证
 */
let filter_modules = {
    filter_weight: {
        name: unity_lang('company_filter_contact'),
        type: 'checkbox',
        default: {
            'email': unity_lang('company_filter_mail'),
            'tel': unity_lang('company_filter_tel'),
            'website': unity_lang('company_filter_site')
        }
    },
    company_mark: {
        name: unity_lang('company_filter_mark'),
        type: 'checkbox',
        default: {
            'product': unity_lang('company_accurate_match'),
            'follow': unity_lang('company_accurate_multiple')
        },
        not_more: true
    },
    filter_date: {
        name: unity_lang('company_date_transaction'),
        type: 'radio',
        default: {
            '*': unity_lang('company_all_times'),
            'data_12': unity_lang('company_nearly_year'),
            'data_6': unity_lang('company_six_months')
        }
    },
    filter_date_start: {
        type: 'text',
        me: 'filter_date' // 互斥字段， 当这个key对应的数据存在值，则当前字段不赋值
    },
    filter_date_end: {
        type: 'text',
        me: 'filter_date' // 互斥字段， 当这个key对应的数据存在值，则当前字段不赋值
    },
    filter_bill_count: {
        name: unity_lang('company_transactions'),
        type: 'radio',
        default: {
            '5': {
                text: unity_lang('company_trades_over_5'),
                field: 'filter_bill_count_min'
            },
            '100': {
                text: unity_lang('company_trades_over_100'),
                field: 'filter_bill_count_min'
            }
        },
        // 数量区间比较特殊，需要特殊处理
        num_range: {
            min: 'filter_bill_count_min',
            max: 'filter_bill_count_max'
        }
    },
    filter_bill_count_min: {
        type: 'text',
        me: 'filter_bill_count' // 互斥字段， 当这个key对应的数据存在值，则当前字段不赋值
    },
    filter_bill_count_max: {
        type: 'text',
        me: 'filter_bill_count' // 互斥字段， 当这个key对应的数据存在值，则当前字段不赋值

    },
    trade_countries: {
        name: [unity_lang('company_trade_area'), unity_lang('company_trade_area')][global_company_type],
        type: 'radio',
        default: {
            'china': unity_lang('company_country_china'),
            'india': unity_lang('company_country_india'),
            'united states': unity_lang('company_country_united_states'),
        }
    },
    buyer_ports: {
        name: unity_lang('company_port_import'),
        type: 'radio',
        default: {
            'ningbo': unity_lang('company_port_ningbo'),
            'shanghai': unity_lang('company_port_shanghai'),
            'shenzhen': unity_lang('company_port_shenzhen'),
        }
    },
    seller_ports: {
        name: unity_lang('company_port_export'),
        type: 'radio',
        default: {
            'ningbo': unity_lang('company_port_ningbo'),
            'shanghai': unity_lang('company_port_shanghai'),
            'shenzhen': unity_lang('company_port_shenzhen'),
        }
    },
    sort: {}
}
// 热门国家
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
        country: 'china',
        country_cn_show: '中国',
        country_en_show: 'china'
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

// 默认搜索国家
let country_data = JSON.parse($('meta[name="country_data"]').attr('content')),
    country = (country_data.country_en || '*').toLocaleLowerCase()
// 分页
let company_paging = $('#company_paging').paging({
    offset: true, // start size 模式
    callback: function (start, page_call) {

        unity_authority('', function () {
            build_final_search_params()
            final_search_params['start'] = start
            final_search_params['is_add_log'] = false
            get_company_list(true, page_call)
        }, true)

    }
})
var country_list = [],
    country_items = [],
    port_items = [];
let last_search_params = {},
    search_tags_data = {},
    country_data_item = {},
    selected_countries = {},
    selected_countries_temp = {};
let line_promote = 0
$(function () {

    //初始化搜索参数
    init_search_params()
    // 渲染筛选模块， 结合url参数
    render_filter_modules(query_params)

    get_bang_line(search_params.key)
    search_line_ad(search_params.key)
    //排序切换
    if (filter_params.company_mark.indexOf('product') >= 0) {
        $('.product-sort').removeClass('display-none').siblings('.default-sort').addClass('display-none')
    } else {
        $('.default-sort').removeClass('display-none').siblings('.product-sort').addClass('display-none')
    }
    // 加载国家
    // load_countries()
    // 加载热门搜索
    $.ajax('/async/hotKeys', {
        datatype: 'text/json',
        type: 'get',
        success: function (result) {
            let _ht = ''
            $.each(result.list, function () {
                _ht += ', <a href="/' + ['buy', 'sup'][global_company_type] + '-' + this.keywords.replace(/ /g, '_') + '">' + this.keywords + '</a>'
            })
            $('#hot_keys').html(unity_lang('search_hot_record') + ': <p class="history-keys">' + _ht.slice(1) + '</p>').removeClass('display-none')
        }
    })
    hot_countries()
    $('#allCountries').click(function () {

        $.wModel(function (side) {
            build_stats_country(side)
        })
        // return
        //
        // var $this = $(this), _tab = $this.data('tab'), _country = $this.data('country'),
        //     tab_list = '<li class="tab continents" data-target="#country_tab_con">' + unity_lang('country_list_hot') + '</li>',
        //     tab_pane = '', once_country='', once_count=0,
        //     _screen = $('#country_list').data('screen')
        // $('#countries .country_tab_con').html('')
        // $.each(country_list, function (_index, item) {
        //     _index += 1
        //     tab_list += '<li class="tab continents" data-target="#country_tab_con">' + item['name_' + _lang] + '</li>'
        //
        //     var country_html = '', country_count = 0
        //     $.each(item.country_list, function (key, value) {
        //         let curr_country = value.country_en.toLowerCase()
        //         if (_screen == curr_country) return true
        //         if (!verify_vip_level(wg.user.vip_level, 'bd') && !verify_extended_auth('unlock_indonesia_data') && curr_country == 'indonesia') return true
        //         country_count++;
        //         country_html += '<li  class="each-country" data-sindex="' + _index + '" data-show="' + value['country_' + _lang + '_show'] + '" data-country="' + curr_country + '"> ' + value['country_' + _lang + '_show'] + '</li>'
        //         if(value.tier == 1) {
        //             once_country+='<li  class="each-country" data-sindex="0" data-show="' + value['country_' + _lang + '_show'] + '" data-country="' + curr_country + '"> ' + value['country_' + _lang + '_show'] + '</li>'
        //             once_count += 1
        //         }
        //         country_items.push(curr_country)
        //     })
        //     tab_pane += '<div class="item tab-pane company-tags-list"><p>' + unity_lang('company_total') + country_count + '</p><ul>' + country_html + '</ul></div>'
        // })
        // var countries_thml = '<ul class="tab-list tabs" id="countries_tab_list">' + tab_list + '</ul>\n' +
        //     '<div class="tab_con" id="country_tab_con">' +
        //     '<div class="item tab-pane company-tags-list"><p>' + unity_lang('company_total') + once_count + '</p><ul>'+ once_country +'</ul></div>' + tab_pane + '</div>'
        // $.wModel(function (side) {
        //     side.changeContent(countries_thml)
        //     if (_tab != null && _country != null) {
        //         $('#country_tab_con .each-country[data-country="' + _country + '"]').addClass('active').siblings().removeClass('active')
        //     } else {
        //         _tab = 0
        //     }
        //
        //     $('#countries_tab_list .tab:eq(' + _tab + ')').addClass('active').siblings().removeClass('active')
        //     $('#country_tab_con .tab-pane:eq(' + _tab + ')').addClass('active').siblings().removeClass('active')
        //
        //     $('#country_tab_con .each-country').click(function (e) {
        //         side.hide()
        //         screen_company(this)
        //     });
        // })

    });
    //选择top 国家
    $(document).on('click', '#country_list a:not(.multiple)', function () {
        console.log(this)
        search_params['country'] = $(this).data('value');
        selected_countries = {}
        selected_countries[search_params['country']] = 1
        search_recommend = 1
        console.log(search_params, 'search_params')
        build_country_selected()
        submit_filter()
    })
    $(document).on('click','.search-tag-tab',function(){
        _init_tab_pane()
    })
    // 侧拉国家选中
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

    $(document).on('input propertychange', '#search_form .mex-input', function () {
        let $this = $(this),
            mex = $this.data('mex')
        $('.' + mex).prop('checked', false)
    });
    $(document).on('change', '#search_form [type="radio"], #search_form [type="checkbox"]', function () {
        let $this = $(this),
            mex = $this.data('mex')
        if (mex) $('.' + mex).val('')
    })
    $(document).on('change', '.filter-modules [type="radio"], .filter-modules [type="checkbox"]', function () {
        let $this = $(this),
            is_checked = $this.prop('checked')
        unity_authority('yd', function () {
            let name = $this.attr('name'),
                key = $this.data('field') || name,
                val = $this.val(),
                mex = $this.data('mex')
            if (mex) $('.' + mex).val('')

            // sort_type_change(name, is_checked)
            // $this.
            build_filter_params(key, val, name, $this.attr('type'), true)
            filter_des_item()
            submit_filter()
        })
    })
    //全部国家
    $('#countriesBtn').click(function () {
        $('#countries').hide();
    });

    $('#closeTags').click(function () {
        $('#filter-box').hide();
    });
    $(document).on('click', '.more-filter', function () {
        unity_authority('yd', function () {
            pop_search_filter(1, function (side) {
                $('#filter_finish').click(function () {
                    filter_finish(function () {
                        side.hide()
                    })
                })
            }, filter_params)
        }, true)
    });
    // $('#tags_select').wdropdown({
    //     data: function (that) {
    //         get_search_tags(that)
    //     },
    //     selected: function (e) {
    //         var _filter_form = {}, tag_id = e.value, tag_data = search_tags_data[tag_id],
    //             auth = tag_data.auth
    //         unity_authority(auth, function () {
    //             $.each(tag_data.params, function (a, b) {
    //                 if(a== 'sort') {search_params['sort'] = b;return true}
    //                 if (_filter_form[a]) {
    //                     _filter_form[this.name].push(b)
    //                 } else {
    //                     _filter_form[a] = [b]
    //                 }
    //             })
    //             finish_build_filter_params(_filter_form)
    //         }, true)
    //     }
    // })

    $('#default_sort,#product_sort').wdropdown({
        selected: function (e) {
            unity_authority('v', function () {
                search_params['sort'] = e.value
                submit_filter()
            }, true)
        }
    })

    sort_type_change(last_search_params, search_params)

    last_search_params = Object.assign({}, search_params)
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


    $(document).on('click', '.clear-data', function (e) {
        clear_filter_params()
    })
    // 点击标签
    $(document).on('click', '.search-tag', function (e) {
        let $this = $(this),
            adata = $this.data('td'),
            _filter_form = {},
            is_all = $this.hasClass('all'),
            $ck = $('.search-tag.tag-' + adata.tag_id),
            ttype = adata.user_id ? 'cus' : 'gf',
            has_ac = $ck.hasClass('active')
        verify_authority(adata.auth, {
            successful: function () {
                if (is_all) wpull.closeAll()
                if (has_ac) {
                    clear_filter_params()
                    return
                }

                $('.search-tag').removeClass('active')
                $('.tab.search-tag-tab').removeClass('active').find('.dian').addClass('display-none')
                $('.tab-pane.search-tag-pane').removeClass('active')

                $ck.addClass('active')
                $('.tab.search-tag-' + ttype).addClass('active').find('.dian').removeClass('display-none')
                $('.tab-pane.pane-' + ttype).addClass('active')

                $.each(adata.params, function (a, b) {
                    if (a == 'sort') {
                        search_params['sort'] = b;
                        return true
                    }
                    if (_filter_form[a]) {
                        _filter_form[this.name].push(b)
                    } else {
                        _filter_form[a] = [b]
                    }
                })
                wstats('advance_search_button', adata.user_id ? '' : adata.tag_id)
                finish_build_filter_params(_filter_form)
            },
            login: true,
            wstats: adata.user_id ? '' : 'advance_search_button_' + adata.tag_id
        })
    })
    //将筛选、排序作为标签保存
    $('.action-search-tag').click(function () {
        let action = $(this).data('action')
        unity_authority('yd', function () {
            pop_search_filter(2, function (side) {
                $('#dw_scopeSelected').wdropdown({
                    data: [{
                            value: '-1',
                            text: unity_lang('tags_general'),
                            selected: true
                        },
                        {
                            value: 0,
                            text: unity_lang('tags_designated_buyer')
                        },
                        {
                            value: 1,
                            text: unity_lang('tags_designated_supplier')
                        }
                    ],
                    selected: function (e) {
                        $('#scopeSelected').val(e.value)
                    }
                })

                $('#submit_tag').click(function () {
                    var tag_name = $("#tag_names").val()
                    if (tag_name == '' || tag_name == null || tag_name == '*') return $.alert(unity_lang('tags_not_empty'))
                    build_search_tag_params(function (tags_params) {
                        tags_params.tag_name = tag_name
                        tags_params.size = 1
                        $.loadajax('/async/tags/create', {
                            type: 'post',
                            data: tags_params,
                            datatype: 'json/text',
                            success: function (data) {
                                if (data.state == 0) {
                                    $.alert(unity_lang('tags_create_successfuly'), function () {
                                        if (action == 'create') reload_search_tags(data.data.id)
                                    })
                                    side.hide()
                                } else if (data.state == 1000) {
                                    $.alert(unity_lang('tags_add_max'))
                                } else {
                                    $.alert('系统异常，异常状态:' + data.state)
                                }
                            }
                        });
                    })
                })

                $('#empty_params_btn').click(function () {
                    $(":input", "#search_form")
                        .not(":button", ":reset", "hidden", "submit")
                        .val("")
                        .removeAttr("checked")
                        .removeAttr("selected");

                })
            }, action == 'copy' ? filter_params : null)
        }, true)
    })
    // 全部标签
    $('.search-tags-all').click(function () {
        if (!user.id) {
            window.location.href = "/login";
            return false;
        }
        unity_authority('yd', function () {
            $.wModel(function (side) {
                unity_get_search_tags(false, function () {
                    var tags_list = '<div class="mail-collect">\n' +
                        '<p class="mail-collect-hint">' + unity_lang('company_total') + '6</p>\n' +
                        '<ul class="lable-list" id="all_search_tags_ul"></ul>\n' +
                        '</div>'
                    side.changeContent(tags_list)
                    $.each(gsearch_tag.list, function (_, b) {
                        let ttype = b.user_id ? 'cus' : 'gf'
                        let tags_li = '<li class="all tag-' + b.tag_id + ' tag search-tag ' + ttype + '-tag">'
                        tags_li += '<p class="title">' + b['tag_name_' + _lang] + '</p>'
                        tags_li += '</li>'
                        $(tags_li).data('td', b).appendTo($('#all_search_tags_ul'))
                    })
                })
            })
        }, true)
    })
    //批量收藏
    $('#bulk_follow').click(function () {

        verify_authority('yd', {
            login: true,
            experience: false,
            failure: true,
            successful: function () {
                let company_ids = '',
                    $elems = $('.list-company-like')

                $.each($elems, function () {
                    if ($(this).data('follow') == '0') {
                        company_ids += ('|' + $(this).data('id'))
                    }
                })
                company_ids = company_ids.trims('|')
                if (!company_ids) return $.alert(unity_lang('company_collect_all'))
                company_follow(company_ids, 1)
            }
        })
    })
    // 推荐的产品
    search_recommend_products(search_params)
    description_with(search_params)
    get_search_tags(search_params)

})

function clear_filter_params(){
    $('#screen_message .params-des').html('')
    $('#screen_message .filter-count').html(unity_lang('company_screening'))
    $('input.filter-input').prop('checked', false)
    // 标签
    $('.search-tag').removeClass('active')
    $('.search-tag-gf').addClass('active').siblings('.tab').removeClass('active')
    $('.tab.search-tag-tab .dian').addClass('display-none')
    $('.tab-pane.pane-gf').addClass('active').siblings('.tab-pane').removeClass('active')

    filter_params = $.extend({}, filter_extend_params, true)
    submit_filter()
}

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
                _screen = $country_list.data('screen'),
                _select = $country_list.data('select')
            $country_list.append('<a class=" ' + (_select && _select != '*' ? '' : 'active') + ' tab" data-value="*">' + unity_lang('tags_country_all') + '</a>')
            $country_list.append('<a class="display-none multiple tab" data-value="">' + unity_lang('country_list_countriest_more') + '</a>')
            if (result.top_country) {
                has_count = result.top_country.length
                $.each(result.top_country, function () {
                    if (this.country == _screen) return true
                    has_country[this.country] = 1
                    let online_new = this.online_new ? '<font>new</font>' : ''
                    console.log(this.country,"54545456")
                    $country_list.append('<a class="tab ' + (_select == this.country ? 'active' : '') + '" data-value="' + this.country + '">' + this.country + online_new + '</a>')
                })
            }
            if (has_count < top_count || has_count == 0) {
                $.each(hot_company_country, function () {
                    if (this.country == _screen) return true
                    if(turkey_ip_area == 'TR' &&  this.country == 'turkey' ) return true
                    if (!has_country[this.country]) {
                        has_country[this.country] = 1
                        let online_new = this.is_new ? '<font>new</font>' : ''
                        $country_list.append('<a class="tab ' + (_select == this.country ? 'active' : '') + '" data-value="' + this.country + '">' + this['country_' + _lang + '_show'] + online_new + '</a>')
                    }
                })
            }
            if (_select && _select != '*') {
                selected_countries[_select] = 1
                if (has_country[_select]) $country_list.append('<a class="pitch-on tab display-none"></a>')
                else $country_list.append('<a class="pitch-on tab active" data-value="' + _select + '">' + country_data['country_' + _lang] + '</a>')
            } else {
                $country_list.append('<a class="pitch-on tab display-none"></a>')
            }
            // 需要拿到国家信息用于显示  所以在请求到国家列表后再渲染选择的国家
            build_country_selected()
        }
    })
}

function build_stats_country(side) {
    function verify_screen(screen, country){
        if(country == 'indonesia'){
            if(!verify_extended_auth('unlock_indonesia_data') && screen == 'indonesia') return false
            return true
        }
        return !(screen == country)

        // if (_screen == curr_country) return true
        // if (!verify_vip_level(wg.user.vip_level, 'bd') && !verify_extended_auth('unlock_indonesia_data') && curr_country == 'indonesia') return true
        // if (!verify_extended_auth('unlock_indonesia_data') && curr_country == 'indonesia' && _screen == 'indonesia') return true
        // if (_screen == curr_country) return true
    }

    build_final_search_params()
    let _se_params = Object.assign({}, final_search_params)
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
                _tab = $(this).data('tab'),
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
                    if (!verify_screen(_screen, curr_country)) return true
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
                tab_pane += '<div class="item tab-pane " ><p>' + unity_lang('search_country_count').replace('[@数量]', country_count) + '</p><ul>' + country_html + '</ul></div>'

                tab_list += '<li class="tab continents tab-' + _cont + ' ' + has_ck + '" data-target="#country_tab_con">' + item['name_' + _lang] + '</li>'
            })
            // 更新选中的国家
            selected_countries_temp = Object.assign({}, active_country)
            var countries_html = '<div class="modal-header"><h1>' + unity_lang('company_contries_list') + '</h1><p><a href="javascript:void(0)" id="submit_country" >' + unity_lang('company_contries_list_save') + '</a></p></div>'

            countries_html += '<ul class="tab-list tabs" id="countries_tab_list">' + tab_list + '</ul>\n' +
                '<div class="tab_con" id="country_tab_con">' +
                '<div class="item tab-pane company-tags-list"><p>' + unity_lang('search_country_count').replace('[@数量]', once_count) + '</p><ul>' + once_country + '</ul></div>' + tab_pane + '</div>'

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
                    search_recommend = 1
                    // 把临时选中的国家赋值给选中国家
                    selected_countries = Object.assign({}, selected_countries_temp)
                    build_country_selected()
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

function reload_search_tags(sid) {
    get_search_tags(final_search_params, true, sid)
}

let gsearch_tag

function get_search_tags(sc_params, reload, sid) {
    let search_type = sc_params.search_type || 2,
        key = sc_params.key || ''

    unity_get_search_tags(reload, function () {

        let $gf = $('#items_con .gf'),
            $cus = $('#items_con .cus'),
            data = gsearch_tag || {}
        $gf.html('')
        $cus.html('')
        $.each(data.list, function (a, b) {
            if (b.user_id == 0) {
                let suo = verify_vip_level(wg.user.vip_level, b.auth || '') ? '' : '<i class="suo"></i>'
                let disc = '',
                    company_mark = b.params.company_mark
                if (company_mark == 'product' && (!key || key == '*' || search_type != 2)) {
                    disc = 'display-none product-mark'
                }
                $('<li class="tag-' + b.tag_id + ' search-tag tag gf-tag ' + disc + '"><i class="icon"></i>' + suo + '<b>' + b['tag_name_' + _lang] + '</b>' +
                    '<span><font>' + b.prop + '% </font>' + unity_lang('company_category_selected') + '</span>' +
                    '</li>'
                ).data('td', b).appendTo($gf)
            } else {
                $('<a href="javascript:void(0)" class="tag-' + b.tag_id + ' search-tag tag cus-tag">' + b['tag_name_' + _lang] + '</a>')
                    .data('td', b).appendTo($cus)
            }
        })
        if (!$cus.html()) $cus.html('' + unity_lang('company_category_no') + '')
        if (search_type == 2) {
            $('.company-search-tags').removeClass('display-none')
        }
        $('#items_con .tag-' + sid).click()
        _init_tab_pane()
    })
}

function unity_get_search_tags(reload, fn) {
    if (gsearch_tag && !reload) return fn()
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
            gsearch_tag = result.data || {}
            if (!result.state == 0) return;
            fn()
        }
    })
}

/***
 * 产品描述处理
 * @param params
 */
function description_with(params) {
    if (!(params.search_type != 1 && params.key && params.key != '*')) return search_shrink_open()
    // 加载高亮插件，以免后续循环加载
    load_js_file('mark', function () {
        // 折叠
        search_shrink_open(params.key)
    })
}

function unity_highlight($elem, key, fn) {

    load_js_file('mark', function () {
        $elem.mark(key, {
            element: 'b',
            className: 'highlight',
            accuracy: {
                'value': 'exactly',
                "limiters": [
                    '/', ':', ';', '.', ',', '-', '–', '—', '‒', '_',
                    '(', ')', '{', '}', '[', ']', '!', '"', '+', '=', '\\', '|', 's', 'ing',
                    'ies', 'es', 'ed', 'ves'
                ]
            },
            done: function () {
                // 高亮后再处理展开与收起，
                if (fn) fn(key)
            }
        })
    })
}

/**
 *张开或收起后需要设置高亮
 * @param key
 */
function search_shrink_open(key) {
    let fn = null
    if (key) {
        fn = function ($this) {
            unity_highlight($this, key)
        }
    }
    build_shrink_open(fn)
}


//收藏公司跳转
function collect_firm() {
    if (user.id) {
        window.location.href = "/user/datacenter/potential";
    } else {
        window.location.href = "/login";
    }
}


// 提交筛选条件
function filter_finish(fn) {
    // 联系方式获取
    var _filter_form = {}
    $.each($('#search_form').serializeArray(), function () {
        if (_filter_form[this.name]) {
            _filter_form[this.name].push(this.value)
        } else {
            _filter_form[this.name] = [this.value]
        }
    })
    finish_build_filter_params(_filter_form)
    if (fn) fn()
}

function finish_build_filter_params(_params) {
    var _filter_params = {}
    $.each(_params, function (key, value) {
        _filter_params[key] = value.join('|')
    })

    filter_params = $.extend({}, filter_extend_params, true)
    render_filter_modules(_filter_params)
    submit_filter()
    $('#filter-box').hide();

}

/**
 * 构建自动补全国家数据
 * @returns {[]}
 * @private
 */
function _build_country_items() {
    if (country_items.length > 0) return country_items
    $.each(country_list, function (key, value) {
        let _country = value.country_en.toLowerCase()
        country_items.push(_country)
        // $.each(this.country_list, function (key, value) {
        //     country_items.push(value.country_en)
        // })

        country_data_item[_country] = value
    })
    country_items.push('china')
    return country_items
}

/**
 * 获取并构建港口数据
 * @param fn
 * @returns {boolean}
 * @private
 */
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
 * 构建筛选条件html
 * @param has_auth 是否有权限
 * @param $ul
 * @param elem_type
 * @param field_data
 * @param value
 * @param name name
 * @param is_checked  是否选中
 * @param is_display  是否选中
 */
function build_filter_html(has_auth, $ul, elem_type, field_data, value, name, is_checked, is_display) {
    is_display = is_display == null ? true : is_display
    let display_class = is_display ? '' : 'display-none'
    let extend_attr = '',
        params_key = name,
        vtext = field_data
    // 选中的参数非默认参数，则需要添加一个
    if (typeof field_data == "object") {
        params_key = field_data.field
        vtext = field_data.text
        extend_attr += '  data-field="' + field_data.field + '" '
    }
    if (has_auth) {
        extend_attr += (is_checked ? ' checked="checked" ' : '') // 选中
    } else {
        extend_attr += ' onclick="share_authority_failure(\'yd\', \'company_advance_search\');return false;"' //
    }
    let add_type = value == '*' ? 'prepend' : 'append'
    $ul[add_type]('<li class="' + display_class + '"> <input  class="filter-input " type="' + elem_type + '" name="' + name + '" value="' + value + '" ' + extend_attr + ' />' + vtext + ' </li>')
    build_filter_params(params_key, value, name, elem_type, is_checked)

}

/**
 * 构建筛选参数  构建筛选模块和选中时需要调用
 * @param key 关键词
 * @param val 值
 * @param name name元素值
 * @param etype 元素类型
 * @param is_checked
 */
function build_filter_params(key, val, name, etype, is_checked) {
    if (!is_checked) return false;
    if (etype == 'checkbox') {
        let $checked = $('.filter-modules input:checkbox[name="' + name + '"]:checked'),
            vals = []
        $.each($checked, function () {
            vals.push($(this).val())
        })
        val = vals.join('|')
    }

    if (key.indexOf('|') >= 0) {
        let vals = val.split('|'),
            keys = key.split('|')
        for (let i = 0; i < keys.length; i++) {
            filter_params[keys[i]] = vals[i]
        }
    } else if (name == 'filter_date') {
        // 时间选中  近 N 时间
        if (key == 'filter_date') {
            if (val != '' && val != '*') {
                let range = month_range(val)
                filter_params['filter_date_start'] = range.start.format('yyyy-MM-dd')
                filter_params['filter_date_end'] = range.end.format('yyyy-MM-dd')
            } else {
                filter_params['filter_date_start'] = '*'
                filter_params['filter_date_end'] = '*'
            }
            filter_params[name] = val
        } else {
            // 具体时间
            filter_params['filter_date_start'] = '*'
            filter_params['filter_date_end'] = '*'
            filter_params[key] = val
            filter_params[name] = ''
        }
    } else if (name == 'filter_bill_count') {
        filter_params['filter_bill_count_min'] = '0'
        filter_params['filter_bill_count_max'] = '0'
        filter_params[key] = val
        filter_params[name] = 'mark'
    } else {
        filter_params[key] = val
    }
    // filter_des_item()
}

/**
 * 构建左侧筛选块
 * @param _params 已存在的参数 （url参数 或者侧拉自定义参数）
 * 在预定义的筛选块模块中 选中或替换已存在的参数
 */
function render_filter_modules(_params) {
    var $filter_modules = $('.filter-modules')
    $filter_modules.html(
        '<div class="module">\n' +
        '  <h2 class="filter-count">' + unity_lang('company_screening') + '</h2>\n' +
        '  <ul class="screen-e">\n' +
        '    <li class="params-des"></li>\n' +
        '    <li class="clear-data">' + unity_lang('tags_clear') + '</li>\n' +
        '  </ul>\n' +
        '</div>'
    )

    let has_auth = verify_authority('yd', {
        only_return: true
    })
    // let has_auth = 1

    filter_des = []
    let idx = 0
    // 选中模块
    $.each(filter_modules, function (name, moptions) {
        let $m = this,
            $ul, _exists = {};
        // 没有预定义 则只是从 get_params_des 拿到字段描述
        if (moptions.default) {
            let $module = $('<div class="module"' + (idx == 0  ? 'id = "process_node_5"' : "") + (idx == 0  ? 'data-step = "5"' : "") + '><h2>' + (has_auth ? '' : '<i></i>') + moptions.name + '</h2></div>').appendTo($filter_modules)
            $ul = $('<ul class="screen-e"></ul>').appendTo($module)
        }
        idx++;
        // 先获取该在url参数中或者在自定义选项中存在的值
        get_params_des(name, _params, function (data) {
            if (has_auth) {
                if (typeof data.des == "object") {
                    filter_des = filter_des.concat(data.des)
                } else {
                    filter_des.push(data.des)
                }
            }
            // 没有ul 代表不构建筛选模块
            if ($ul) {
                _exists = data.input.fields
                $.each(_exists, function (value, field_data) {
                    build_filter_html(has_auth, $ul, data.input.type, field_data, value, name, true)
                })
            }
        })
        if ($ul) {
            $.each(moptions.default, function (key, value) {
                key = name == 'filter_date' ? key.replace('data_', '') : key
                let is_display = !(name == 'company_mark' && key == 'product' && (!search_params.key || search_params.key == '*' || search_params.search_type != 2))

                // 默认的筛选项如果存在已经选中，则不构建默认项
                if (!_exists[key]) {
                    build_filter_html(has_auth, $ul, $m.type, value, key, name, false, is_display)
                }
            })
            if (!moptions.not_more) {
                $ul.append('<li class="more-filter">' + unity_lang('company_filter_more') + '<font>></font></li>')
            }
        }

    })
    filter_des_item()
}

/**
 * 筛选明细
 */
function filter_des_item() {
    let _des = filter_des.splice(0, 3).join('<font>●</font>')
    $('.params-des').html(_des)

    var filter_lenght = $("#screen_message  input[type='radio']:checked").length + $("#screen_message  input[type='checkbox']:checked").length
    $('.filter-count').html(unity_lang('company_screening') + '(' + filter_lenght + ')')
}

/**
 * 加载国家筛选， 此处会加载 历史搜索（登录状态）
 */
function load_countries() {
    // 加载国家
    $.ajax('/async/common/countries', {
        datatype: 'text/json',
        type: 'get',
        data: {
            tier: 0
        },
        success: function (result) {
            country_list = result.country_list
            // top country 登录状态获取历史搜索，非登录获取hot,  历史不足7个 hot 补充
            var has_count = 0,
                top_count = result.top_count,
                has_country = {},
                active_country = '',
                $country_list = $('#country_list'),
                _screen = $country_list.data('screen')
            $country_list.append('<a class="' + (country == '*' ? 'active' : '') + ' tab" data-value="*">' + unity_lang('tags_country_all') + '</a>')
            if (result.top_country) {
                has_count = result.top_country.length
                $.each(result.top_country, function () {
                    if (this.country == _screen) return true
                    has_country[this.country] = 1
                    active_country = country == this.country ? 'active' : active_country
                    $('#country_list').append('<a class="tab ' + active_country + '" data-value="' + this.country + '">' + this.country + '</a>')
                })
            }
            // if (has_count < top_count) {
            //     $.each(hot_company_country, function () {
            //         if (has_count >= top_count) return true
            //         if(this.country == _screen) return true
            //         if (!has_country[this.country]) {
            //             has_count++;
            //             active_country = country == this.country ? 'active' : active_country
            //             $('#country_list').append('<a class="tab ' + (country == this.country ? 'active' : '') + '" data-value="' + this.country + '">' + this['country_' + _lang + '_show'] + '</a>')
            //         }
            //     })
            // }
            // if (country && country != '*' && !active_country) {
            //     $('#country_list').append('<a class="pitch-on tab active">' + country_data['country_' + _lang] + '</a>')
            // } else {
            //     $('#country_list').append('<a class="pitch-on tab display-none"></a>')
            // }
        }
    })
}


//选择筛选国家
// function screen_company(elem) {
//     let $elem = $(elem), country = $elem.data('country'), _show = $elem.data('show'),
//         sindex = Number($elem.data('sindex'))
//
//     $('#allCountries').data('country', country).data('tab', sindex)
//     exists_country(country, _show)
//     search_params['country'] = country
//     $('#countries').hide();
//     search_recommend = 1
//     submit_filter()
// }

function searchKey(el) {

    other_search($(el).data("keywords"))
}

function other_search(key) {
    let search_type = $(".search-gongsi-select .active").data("value")
    if (isNaN(parseInt(key))) {
        search_params.key = key;
        search_params.hs = '*';
    } else {
        search_params.hs = key
        search_params.key = '*'
    }
    search_params.search_type = search_type
    $("#text_search_type").val(search_type)
    $('.search-tab[data-value="' + search_type + '"]').click()
    $('#text_global_search').val(key)
    search_recommend = 1
    submit_filter()
}

/**
 * 判断国家是否存在于top列表中，如果存在则高亮
 * @param country
 * @param _show
 */
function exists_country(country, _show) {
    // 选择国家是否存在top列中
    let $elem = $('#country_list .tab[data-value="' + country + '"]')
    if ($elem.length <= 0) {
        $("#country_list .pitch-on").html(_show).data('value', country).removeClass('display-none').addClass('active')
            .siblings('.tab').removeClass('active')
    } else {
        // 存在则高亮
        $elem.addClass('active').siblings('.tab').removeClass('active')
    }
}

/**
 * 排序方式更改
 * @param last_params
 * @param params
 */
function sort_type_change(last_params, params, is_init = false) {
    // let $sort
    // // 当前为选中状态，则需要设置为未选中
    // if (is_checked) {
    //     $sort = $('.product-sort')
    // } else {
    //     $sort = $('.default-sort')
    //     // to_checked = true
    // }
    if (params.search_type != 3) params['hs'] = '*'
    let sort
    // 搜索方式发送变更且搜索方式是 HS 搜索
    if (last_params.search_type != params.search_type) {
        if (params.search_type == 3) {
            sort = (params.sort || 'bill_count') == 'default'? 'bill_count': params.sort
            console.log('sort', sort)
            $('.product-sort').removeClass('display-none').siblings('.search-sort').addClass('display-none')
            $('#product_sort').wdropdown().change_selected('value', sort)
        }else {
            sort = params.sort || 'default'
            $('.default-sort').removeClass('display-none').siblings('.search-sort').addClass('display-none')
            $('#default_sort').wdropdown().change_selected('value', sort)
        }
        if (!is_init) params['sort'] = sort
        return params
    }

    sort = params.sort || 'bill_count'
    let company_mark = params.company_mark ? params.company_mark.split('|') : [],
        last_company_mark = last_params.company_mark ? last_params.company_mark.split('|') : []
    // 黄钻精搜变更且之前没有黄钻精搜
    if (last_company_mark.indexOf('product') < 0 && company_mark.indexOf('product') >= 0) {
        if (!is_init) params['sort'] = 'bill_count'
        $('.product-sort').removeClass('display-none').siblings('.search-sort').addClass('display-none')
        // $('#product_sort').wdropdown().change_selected('value', sort)
        $('#product_sort').wdropdown().change_selected('value', 'bill_count')
        return params;
    }
    if (last_company_mark.indexOf('product') >= 0 && company_mark.indexOf('product') < 0) {
        if (!is_init) params['sort'] = 'bill_count'
        $('.default-sort').removeClass('display-none').siblings('.search-sort').addClass('display-none')
        $('#default_sort').wdropdown().change_selected('value', sort)
        return params
    }
    $('.search-sort:not(.display-none) .dropdown-container').wdropdown().change_selected('value', sort)
    return params

}


/**
 * 搜索模块点击搜索
 */
function submit_search() {
    build_search_tkh()
    search_params.is_add_log = true
    search_recommend = 1
    search_list()
}

function init_search_params() {
    build_search_tkh()
    init_search_country()
}

// 处理搜索的关键词 或HS
function build_search_tkh() {
    search_params.search_type = $("#text_search_type").val();
    if (search_params.search_type == 3) {
        search_params.hs = $('#text_global_search').val();
    } else {
        search_params.key = $('#text_global_search').val();
    }
}

function init_search_country() {
    let qCountry = queryString('country')
    if (qCountry && qCountry != '*') {
        let qCountryList = qCountry.split('|')
        $.each(qCountryList, function (i, value) {
            selected_countries[value] = 1
        })
        search_params['country'] = qCountry
    } else {
        search_params['country'] = country
    }
}

function build_country_selected() {
    console.log(selected_countries, 'selected_countries')
    // 处理国家选项
    let cts = Object.keys(selected_countries),
        sc_len = cts.length
    if (sc_len == 1) {
        $('.country-selected').html('').addClass('display-none');
        $('#country_list .multiple').removeClass('active').addClass('display-none')
        var stcountry = cts[0];
        console.log(stcountry, 'stcountry')
        // 选择国家是否存在top列中
        if ($('#country_list .tab[data-value="' + stcountry + '"]').length <= 0) {
            $(".pitch-on").html(country_data_item[stcountry]['country_' + _lang + '_show']).data('value', stcountry)
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
        $.each(cts, function (_, _country) {
            let show = country_data_item[_country]['country_' + _lang + '_show'];
            selected_html += ('、' + show)
        })
        $('.country-selected').html('' + unity_lang('country_list_countriest_total') + '' + selected_html.slice(1)).removeClass('display-none');
        $('#country_list .multiple').addClass('active').removeClass('display-none').siblings().removeClass('active')
    }
}

function submit_filter() {
    search_params.is_add_log = false
    search_list()
}

function build_final_search_params() {
    search_params.company_type = global_company_type;
    filter_des = []
    let _filter = $.extend({}, filter_params, true)
    $.each(_filter, function (key, value) {
        let ck = filter_default_params[key]
        if ((value == null || value == '') && ck) {
            _filter[key] = ck
        }
        get_params_des(key, _filter, function (data) {
            if (typeof data.des == "object") {
                filter_des = filter_des.concat(data.des)
            } else {
                filter_des.push(data.des)
            }
        })
    })
    filter_des_item()
    // 国家列表 或单个国家处理
    delete _filter.filter_date
    delete _filter.filter_bill_count
    final_search_params = $.extend({}, search_params, _filter, true)
    if (final_search_params.key && final_search_params.search_type == 2) {
        $('.product-mark').removeClass('display-none')
    } else {
        $('.product-mark').addClass('display-none')
    }
    _init_tab_pane()
}
/**
 * 搜索总入口
 */
function search_list() {

    build_final_search_params()
    get_company_list()
}

/**
 * 获取公司列表
 * @param is_page 是否为分页
 * @param page_call 分页回调
 */
function get_company_list(is_page, page_call) {
    is_page = is_page || false
    //处理排序方式
    final_search_params = sort_type_change(last_search_params, final_search_params)

    $.loadajax('/async/company/search', {
        datatype: 'text/json',
        type: 'get',
        data: final_search_params,
        success: function (result) {
            if (page_call) page_call()
            search_recommend_products(final_search_params)
            $('body,html').animate({
                scrollTop: $("#country_list").offset().top
            }, 300);
            // $("#company_loading").slideToggle();
            $('#company_list').html(result.content)
            if (final_search_params.is_add_log) get_bang_line(final_search_params.key)
            search_line_ad(final_search_params.key)
            if (final_search_params.key != '*' && final_search_params.key && final_search_params.search_type == 2) {
                $('[name="company_mark"][value="product"]').parents('li').removeClass('display-none')
            } else {
                $('[name="company_mark"][value="product"]').parents('li').addClass('display-none')
            }
            last_search_params = Object.assign({}, final_search_params)
            if (result.total <= 0) {
                $('.sousou-head').addClass('display-none')
                company_paging.clear()
                return false
            }
            $('.sousou-head').removeClass('display-none')
            if (!is_page) {
                company_paging.reload({
                    total: result.total
                })
                $('.company-hits').html(result.total)
            }
            description_with(final_search_params)
        },
        error: function (e) {
            $('#company_list').html('搜索异常，请联系外贸邦或更换参数')
        }
    })
}

function search_line_ad(key) {
    build_line_ad(key, 1, function (data) {
        $('#company_list li:eq(0)').after(data)
    })
}

/**
 * 弹窗过滤参数 / 参数转搜索标签
 * @param type 1 为 弹窗更多过滤参数筛选  2为 过滤转标签
 * @param fn 回调
 */
function pop_search_filter(type, fn, curr_filter_params) {

    //#region des="html 代码块"
    var search_filtering = ''
    if (type == 1) {
        search_filtering += '<div class="modal-header"><h1>' + unity_lang('tags_filter_criteria') + '</h1><a id="filter_finish">' + unity_lang('tags_filter_criteria_complete') + '</a></div>' +
            '<form name="search_form" id="search_form">'
    } else {
        search_filtering += '<div class="modal-header"><h1>' + unity_lang('tags_tags_add') + '</h1>' +
            '<span id="submit_tag" class="creation">' + unity_lang('tags_create') + '</span>' +
            '<span id="empty_params_btn" class="empty">' + unity_lang('tags_clear') + '</span></div>' +
            '<p class="hint">' + unity_lang('tags_add_tips') + '</p>' +
            '<form name="search_form" id="search_form">' +
            '<div class="label-name filtrate">\n' +
            '<h3>' + unity_lang('tags_add_name') + '</h3>\n' +
            '<div class="tag-name">\n' +
            '<fieldset class="name">\n' +
            '<font>' + unity_lang('tags_add_name') + '</font>\n' +
            '<input placeholder="" name="tag_name" class="clear-target" id="tag_names">\n' +
            '<i class="clear-txt">×</i>\n' +
            '</fieldset>\n' +
            '<fieldset class="scope-box">\n' +
            '<font>' + unity_lang('tags_add_scope') + '</font>\n' +
            '<div id="dw_scopeSelected"></div><input type="hidden" id="scopeSelected" value="-1">' +
            '</fieldset>\n' +
            '</div>\n' +
            '<font class="caution-tips">' + unity_lang('tags_label_tips') + '</font>\n' +
            ' </div>'
    }

    search_filtering += ' <div class="contact-box filtrate">\n' +
        ' <h3>' + unity_lang('tags_contact_options') + '</h3>\n' +
        '<ul class="filtrate-list" id="multiple">\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="checkbox" name="filter_weight" value="email">' + unity_lang('tags_contact_email') + '\n' +
        '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="checkbox" name="filter_weight" value="contact">' + unity_lang('tags_contact_contacts') + '\n' +
        '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="checkbox" name="filter_weight" value="address">' + unity_lang('tags_contact_address') + '\n' +
        ' </li>\n' +
        ' <li><i class=\'input_style checkbox_bg\'></i><input type="checkbox" name="filter_weight" value="tel">' + unity_lang('tags_contact_telephone') + '\n' +
        ' </li>\n' +
        ' <li><i class=\'input_style checkbox_bg\'></i><input type="checkbox" name="filter_weight" value="fax">' + unity_lang('tags_contact_fax') + '\n' +
        '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="checkbox" name="filter_weight" value="website">' + unity_lang('tags_contact_website') + '\n' +
        ' </li>\n' +
        '</ul>\n' +
        '</div>\n' +
        '<div class="company-tag filtrate">\n' +
        '<h3>' + unity_lang('tags_mark') + '</h3>\n' +
        '<ul class="filtrate-list">\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="checkbox" name="company_mark" value="follow">' + unity_lang('tags_multiple') + '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="checkbox" name="company_mark" value="product">' + unity_lang('tags_precise_match') + '</li>\n' +
        '</ul>\n' +
        '</div>\n' +
        '<div class="trade-date filtrate">\n' +
        '<h3>' + unity_lang('tags_date') + '</h3>\n' +
        '<ul class="filtrate-list">\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_date" value="*" data-mex="txt-date" class="radio-date">' + unity_lang('tags_date_all') + '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_date" value="36" data-mex="txt-date" class="radio-date">' + unity_lang('tags_date_three_years') + '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_date" value="12" data-mex="txt-date" class="radio-date">' + unity_lang('tags_date_one_year') + '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_date" value="6" data-mex="txt-date" class="radio-date">' + unity_lang('tags_date_half_year') + '</li>\n' +
        ' <li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_date" value="3" data-mex="txt-date" class="radio-date">' + unity_lang('tags_date_3_months') + '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_date" value="1" data-mex="txt-date" class="radio-date">' + unity_lang('tags_date_1_month') + '</li>\n' +
        '</ul>\n' +
        '</div>\n' +
        '<div class="trade-times filtrate">\n' +
        '<h3>' + unity_lang('tags_times') + '</h3>\n' +
        '<ul class="filtrate-list">\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" data-mex="txt-bill-count" class="radio-bill-count" value="0">' + unity_lang('tags_times_all') + '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" data-mex="txt-bill-count" class="radio-bill-count" value="5">' + unity_lang('tags_times_five') + '</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" data-mex="txt-bill-count" class="radio-bill-count" value="100">' + unity_lang('tags_times_hundred') + '</li>\n' +
        ' </ul>\n' +

        '<div class="filtrate-list-tips">\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('tags_times_customization') + '</font>\n' +
        '<input type="text" name="filter_bill_count_min" placeholder="from" class="two-input mex-input txt-bill-count legendlegend two-input-1" data-mex="radio-bill-count" id="start_deal_count" />\n' +
        '<input type="text" name="filter_bill_count_max" placeholder="to" class="two-input mex-input txt-bill-count" data-mex="radio-bill-count" id="over_deal_count" />\n' +
        '</fieldset>\n' +
        '<font class="caution">' + unity_lang('tags_times_customization_tips') + '</font>\n' +
        '</div>\n' +
        '</div>\n' +

        '<div class="supply-area filtrate">\n' +
        '<h3>' + unity_lang('tags_area') + '</h3>\n' +

        '<div class="filtrate-list-tips">\n' +
        '<fieldset class="auto-parent">\n' +
        '<font>' + unity_lang('tags_area_select') + '</font>\n' +
        '<input type="text" placeholder="' + unity_lang('tags_area_enter') + '"  class="one-input clear-target" value="" name="trade_countries" id="filter_trade_countries" />\n' +
        '<i  class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '<font class="caution">' + unity_lang('tags_area_enter_tips') + '</font>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="access-port filtrate">\n' +
        '<h3>' + unity_lang('tags_port') + '</h3>\n' +
        '<div class="port">\n' +
        '<fieldset class="auto-parent">\n' +
        ' <font>' + unity_lang('tags_port_export') + '</font>\n' +
        ' <input type="text" placeholder="' + unity_lang('tags_port_export_enter') + '" value="" name="seller_ports" id="seller_ports"  class="clear-target" />\n' +
        '<i  class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        ' <fieldset class="unload auto-parent">\n' +
        '<font>' + unity_lang('tags_port_import') + '</font>\n' +
        ' <input type="text"  class="clear-target" placeholder="' + unity_lang('tags_port_import_enter') + '" value="" name="buyer_ports" id="buyer_ports" />\n' +
        '<i  class="clear-txt">×</i>\n' +
        ' </fieldset>\n' +
        '</div>\n' +
        ' </div>\n' +
        ' </form>'
    //#endregion
    $.wModel(function (side) {
        side.changeContent(search_filtering)
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
        // 先清空各种选中或输入的值
        $('#search_form :checkbox').prop('checked', false)
        $('#search_form :radio').prop('checked', false)
        $('#search_form :text').val('')
        if (curr_filter_params) {
            $.each(curr_filter_params, function (key, value) {
                let moption = filter_modules[key] || {}
                if (Object.keys(moption).length > 0) {
                    if (!(value)) return true
                    //特殊处理数量区间
                    let num_range = moption.num_range
                    if (num_range) {
                        let _min = filter_params[num_range.min]
                        let _max = filter_params[num_range.max]
                        if (_min && _max && _min < _max) {
                            $(':text[name="' + num_range.min + '"]').val(_min)
                            $(':text[name="' + num_range.max + '"]').val(_max)
                        } else if (_min) {
                            let $min = $(':radio[name="' + num_range.min + '"][value="' + _min + '"]')
                            if ($min.length > 0) {
                                $min.prop('checked', true)
                            } else {
                                $(':text[name="' + num_range.min + '"]').val(_min)
                            }
                        } else if (_max) {
                            let $max = $(':radio[name="' + num_range.max + '"][value="' + _max + '"]')
                            if ($max.length > 0) {
                                $max.prop('checked', true)
                            } else {
                                $(':text[name="' + num_range.max + '"]').val(_max)
                            }
                        } else if (_min == '0') {
                            $(':radio[name="filter_bill_count_min"][value="0"]').prop('checked', true)
                        }
                        return true
                    }
                    // 提单筛选比较特殊，单独拿出来
                    //复选
                    if (moption.type == 'checkbox') {
                        $.each(value.split('|'), function () {
                            $(':checkbox[name="' + key + '"][value="' + this + '"]').prop('checked', true)
                        })
                        return true
                    }
                    // 单选
                    if (moption.type == 'radio') {
                        $(':radio[name="' + key + '"][value="' + value + '"]').prop('checked', true)
                    }
                    // text
                    let _me = moption.me // 是否有互斥
                    if (_me) {
                        if (filter_params[_me]) return true
                    }
                    if (value != '*') $(':text[name="' + key + '"]').val(value)
                }
            })
        }
        fn(side)
    })
}

// 构建标签参数
function build_search_tag_params(fn) {
    var tags_params = $.extend({}, filter_tag_params, true)
    $.each(tags_params, function (key, value) {
        var elems = $('#search_form [name="' + key + '"]')
        if (elems && elems.length > 0) {
            let $elem = $(elems[0]),
                type = $elem.attr('type'),
                has_checked
            if (type == 'text') {
                // 先验证有没有单选
                let _radio = $('#search_form :radio[name="' + key + '"]:checked')
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
                let _radio = $('#search_form :radio[name="' + key + '"]:checked')
                if (_radio.length > 0) {
                    tags_params[key] = _radio.val()
                } else {
                    let _val = $('#search_form :text[name="' + key + '"]').val()
                    if (_val) {
                        tags_params[key] = _val
                    }
                }
                return true
            }
            if (type == 'checkbox') {
                let arr = $('#search_form :checkbox[name="' + key + '"]:checked'),
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


/**
 * 取关和关注
 * @param elem
 */
function likeTap(elem) {
    // 验证是否登录
    if (verify_sign({
            login: true,
            only_return: true
        }, null)) {

        var is_follow = $(elem).data("follow") == '1',
            company_id = $(elem).data('id')
        if (!is_follow) {
            company_follow(company_id, 2)
        } else {
            $.ajax('/async/common/company/unfollow', {
                datatype: 'text/json',
                type: 'post',
                data: {
                    company_id: company_id
                },
                success: function (result) {
                    if (result.state == 0) {
                        $(elem).data('follow', '0').find('.like').removeClass('active').siblings('font').html(unity_lang('company_collect'))
                    }
                    // 弹窗取关失败
                }
            })
        }
    }
}


var right_box = ''
var left_seach_box = ''
var operate_box = $('#operate_box')
var offset_top = ''
var screen_message = $('#screen_message')

function move_div() {
    right_box = $('.module-content.mar-l').height();
    left_seach_box = $('#screen_message').offset().top;
    offset_top = $('.module-content.mar-l').offset().top + right_box;
    console.log(offset_top, 'right_box_top')
}

$.fn.wmbScroll = function (options, callback) {
    var defaults = {
        scroll_bar: 'wmb-scroll-bar', //只支持class,不支持id
        scroll_line: 'wmb-scroll-line', //只支持class,不支持ID
        scroll_width: '6px',
        scroll_bar_color: 'rgba(255,255,255,0)',
        scroll_line_color: '#eee'
    };
    options = $.extend(defaults, options); //继承默认参数
    var that = this; //当然响应事件对象
    var $this = $(that); //当然响应事件对象
    var delay_hide = null;

    initScrollDom(); //初始化时创建滚动条

    $this.on({
        mouseover: function () {
            clearTimeout(delay_hide);
            $('.' + options.scroll_bar).addClass('show');
        },
        mouseleave: function () {
            delay_hide = setTimeout(function () {
                $('.' + options.scroll_bar).removeClass('show');
            }, 300);
        },
        mousewheel: function (event) {
            initScrollPosition(event);
            return false;
        }
    });

    function initScrollDom() {
        let html = '';
        html += '<style type="text/css">';
        html += '    .' + options.scroll_bar + ' {visibility: hidden;opacity: 0;position: absolute;right: 0;top: 0;height:100%;width:' + options.scroll_width + ';background-color:' + options.scroll_bar_color + ';}';
        html += '    .' + options.scroll_bar + '.show {visibility: visible;opacity: 1;}';
        html += '    .' + options.scroll_line + ' {position: absolute;left: 0;top: 0;width:' + options.scroll_width + ';background-color:' + options.scroll_line_color + ';}';
        html += '</style>';
        html += '<div>';
        html += '    <div class="' + options.scroll_bar + '">';
        html += '        <div class="' + options.scroll_line + '"></div>';
        html += '    </div>';
        html += '</div>';
        $this.append(html).css({
            overflow: 'hidden'
        });
    }

    // 初始化滚动条位置和样式
    function initScrollPosition(event) {
        let now_scroll_top = $this.scrollTop();
        let originalEvent = event.originalEvent || {};
        let delteY = originalEvent.deltaY; // 滚动区域内容高度
        let scroll_bar_h = $this.innerHeight(); // 获取滚动区域高度
        let scrollHeight = $this.prop('scrollHeight'); // 获取组件内容的实际高度
        let max_h = scrollHeight - scroll_bar_h; // 用于检测是否已经滚动到了最后
        let scroll_line_h = scroll_bar_h - max_h; // 获取滚动指示器的高度
        delteY = delteY > max_h ? max_h : delteY;
        $this.scrollTop(now_scroll_top + delteY);
        now_scroll_top = $this.scrollTop();
        $this.find('.' + options.scroll_bar).css({
            top: now_scroll_top + 'px'
        });
        $this.find('.' + options.scroll_line).css({
            height: scroll_line_h + 'px',
            top: now_scroll_top + 'px'
        });
    }
};

$(function () {
    $('#screen_message').wmbScroll();
    $(window).on('scroll', function () {
        var top = $(window).scrollTop();

        if (top > offset_top) {
            operate_box.addClass("load");
        }
        if (top < offset_top) {
            operate_box.removeClass("load");
        }

        let elem = $('#screen_message'); // 固定对象
        let border_elem = $('.company-foot'); // 底部边界对象
        scrollFixed(elem, border_elem)
    })
})

function scrollFixed(elem, border_elem) {
    let marginTop = 0;
    let scroll_top = $(window).scrollTop(); // 当前滚动条高度
    let init_offset_top = elem.parent().offset().top + 40; // 初始化固定高度
    let border_offset_top = border_elem.offset().top - $(window).height(); // 底部极限高度
    let parent_width = elem.width();
    if (scroll_top <= init_offset_top) return elem.attr('style', '')
    // 超出边界执行
    if (scroll_top > border_offset_top) marginTop = border_offset_top - scroll_top;
    elem.css({
        position: 'fixed',
        top: 0,
        zIndex: 9,
        width: parent_width + 'px',
        marginTop: marginTop + 'px'
    })
}

//公司分类左右滚动。。。。
function _init_tab_pane() {
    console.log(1)
    let re_pane = $('.company-category-re');
    let re_list = re_pane.find('ul');
    re_pane.find('.company-category-button.left').hide()
    console.log(re_list[0].clientWidth)
    console.log(re_pane[0].clientWidth)
    re_pane.find('.company-category-button.right').toggle(!(re_list[0].clientWidth <= re_pane[0].clientWidth))
    $(document).on('click', '.company-category-re .company-category-button', function () {
        let left_btn = re_pane.find('.company-category-button.left');
        let right_btn = re_pane.find('.company-category-button.right');
        let type = $(this).hasClass('left') ? 'left' : 'right';
        _category_tab({
            parent: re_pane,
            list: re_list,
            left_btn: left_btn,
            right_btn: right_btn,
            type: type
        })
    })

    let user_pane = $('.company-category-user');
    let user_list = user_pane.find('.company-category-content');
    user_pane.find('.company-category-button.left').hide()
    user_pane.find('.company-category-button.right').toggle(!(user_list[0].clientWidth <= user_pane[0].clientWidth))
    $(document).on('click', '.company-category-user .company-category-button', function () {
        let left_btn = user_pane.find('.company-category-button.left');
        let right_btn = user_pane.find('.company-category-button.right');
        let type = $(this).hasClass('left') ? 'left' : 'right';
        _category_tab({
            parent: user_pane,
            list: user_list,
            left_btn: left_btn,
            right_btn: right_btn,
            type: type
        })
    })
}

function _category_tab(options) {
    var move_scale = 3 // 回弹力度
    var $dom = options.parent
    var $el = options.list
    var elWidth = $el[0].clientWidth // 内部菜单的宽度
    var wrapWidth = $dom[0].clientWidth
    var canmove = elWidth - wrapWidth // 可以移动的距离
    canmove = canmove > 0 ? canmove : 0
    var currleft = $el[0].offsetLeft // 当前向左偏移的距离
    if (options.type == 'left') {
        options.right_btn.show()
        currleft = currleft + wrapWidth
        $el.stop().animate({
            marginLeft: currleft / move_scale + 'px'
        }, 300, function () {
            if (currleft >= 0) {
                options.left_btn.hide()
                options.right_btn.show()
                $el.stop().animate({
                    marginLeft: 0 + 'px'
                })
            }
        })
    } else {
        options.left_btn.show()
        currleft = Math.abs(currleft) + wrapWidth
        $el.stop().animate({
            marginLeft: -currleft / move_scale + 'px'
        }, 300, function () {
            if (currleft >= canmove) {
                options.right_btn.hide()
                options.left_btn.show()
                $el.stop().animate({
                    marginLeft: -canmove + 'px',
                })
            }
        })
    }
}