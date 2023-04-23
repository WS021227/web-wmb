// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'report_buyer': {cn: '采购商', en: 'Buyer'},
    'report_supplier': {cn: '供应商', en: 'Supplier'},
    'report_create_tips': {cn: '从【快速搜索】中至少输入一个搜索内容...', en: 'Enter at least one search from the [Quick Search]......'},
    'report_top_tips': {
        cn: '以下行业报告内容来自于，行业标签<b>[@标签名]</b>,[@开始时间]至[@结束时间]期间数据汇总的结果。',
        en: 'The following contents are from the industry label <b>[@标签名]</b>, [@开始时间] to [@结束时间].'
    },
    'report_import_data': {cn: '进口数据', en: 'Import data'},
    'report_build_fields': {cn: '构建分析字段', en: 'Build analysis fields '},
    'report_category_market': {cn: '市场分析', en: 'Market analysis'},
    'report_bill_detail': {cn: '详情', en: 'Details'},
    'report_bill_data': {cn: '贸易数据', en: 'Trade data'},
    'report_bill_data_exceptions': {cn: '数据查询异常', en: 'Data query exceptions'},
    'report_market_month': {cn: '月份', en: 'Month'},
    'report_market_buy_table': {cn: '采购趋势分析表', en: 'Trade trend analysis'},
    'report_market_table_form': {cn: '[@开始时间]至[@结束时间]的趋势分析', en: 'Trend analysis between [@开始时间] to [@结束时间]'},
    'report_market_table_to': {cn: '至', en: 'to'},
    'report_market_table_trend': {cn: '趋势分析', en: ' trend analysis'},
    'report_market_match': {cn: '结果匹配', en: ' results'},
    'report_market_list': {cn: '名录', en: ' list'},
    'report_market_list_export': {cn: '导出名录', en: 'Export Directory'},
    'report_no_content': {cn: '当前板块无内容', en: 'No content in the current section'},
    'report_no_content_why': {cn: '为什么没有数据?', en: 'Why is there no data?'},
    'report_module_title': {cn: '行业标签', en: 'Industry Labels'},
    'share_text_more': {cn: '更多', en: 'More'},
    // 'report_page_processing': {cn: '处理中...', en: 'In process...'},
    // 'report_page_processing': {cn: '每页[@数量]条', en: '[@数量] items per page'},
    'report_page_no_match': {cn: '没有匹配结果', en: 'No matches'},
    'report_page_data_empty': {cn: '表中数据为空', en: 'Data in table is empty'},
    'report_page_loading': {cn: '载入中...', en: 'Loading...'},
    'report_page_previous': {cn: '上一页...', en: 'Previous'},
    'report_page_next': {cn: '下一页...', en: 'Next'},
    'report_page_to': {cn: '跳到', en: 'Page to '},
    'report_page_confirmation': {cn: '确认', en: 'Confirm'},


    'report_trade_chart': {cn: '交易占比图', en: ' Transaction proportion chart'},
    'report_trade_chart_five_des': {
        cn: '[@开始时间]至[@结束时间] Top5 [@板块名]的交易量占总交易量的[@占比]',
        en: '[@开始时间] to [@结束时间] Top5 [@板块名] trading volume as a [@占比] of total trading volume'
    },
    'report_trade_Percentage': {cn: '交易占比', en: 'Percentage'},
    'report_trade_times': {cn: '交易次数', en: 'Transactions'},
    'report_area_gobal': {cn: '全球区域分布图', en: 'Global regional distribution map'},
    'report_trade_chart_ten_des': {
        cn: '[@开始时间]至[@结束时间] Top10 [@板块名]的交易量占总交易量的[@占比]',
        en: '[@开始时间] to [@结束时间] Top10 [@板块名] trading volume as a [@占比] of total trading volume'
    },


    'report_demo': {cn: '样本报告', en: ' demo'},
    'report_no_tags': {cn: '暂无标签', en: 'No labels available'},
    'report_related_companies': {cn: '相关的公司列表', en: 'Related company list'},
    'report_list_total': {cn: '共计', en: 'Total '},
    'report_trade_total': {cn: '交易数量', en: 'Quantity'},

    'report_mantags_name': {cn: '行业标签管理', en: 'Label management'},
    'report_mantags_year': {cn: '近一年', en: 'Last year'},
    'report_mantags_login': {cn: '请登录后进行操作', en: 'Please login to check'},


    'industry_tags_save': {cn: '保存', en: 'Save'},
    'industry_tags_clear': {cn: '清除', en: 'Clear'},
    'industry_tags_add': {cn: '创建标签', en: 'Create a label'},
    'industry_tags_add_tips': {cn: '提示：标签名不能为空！', en: 'Tip: The label name cannot be empty!'},
    'industry_tags_add_success': {cn: '创建成功！', en: 'Created successfully!'},
    'industry_tags_add_over': {cn: '提示：最多可自己创建5个标签！', en: 'Tip: Create up to 5 labels of your own!'},
    'industry_tags_add_anomaly': {cn: '提示：系统异常，异常状态:', en: 'Tip: System abnormality, abnormal state:'},
    'industry_tags_edit': {cn: '修改标签', en: 'edit labels'},
    'industry_tags_edit_search': {cn: '修改搜索标签', en: 'Modify search labels'},
    'industry_tags_add_failed': {cn: '提示：标签信息提交失败！', en: 'Tip: label info submited failed!'},
    'industry_tags_add_successfully': {cn: '提示：保存成功', en: 'Tip: Saved successfully'},
    'industry_tags_import_data': {cn: '进口数据', en: 'Import data'},
    'industry_tags_export_data': {cn: '出口数据', en: 'Export data'},
    'industry_tags_almost_year': {cn: '始终保持近一年', en: 'Maintained for nearly one year'},
    'industry_tags_fix_time': {cn: '固定时间', en: 'Fixed time'},
    'industry_tags_count': {cn: '个标签', en: ' labels'},
    'industry_tags_name': {cn: '行业', en: ' industry'},
    'industry_tags_create_tips': {
        cn: '提示：创建行业报告或标签时，产品或HS编码不能为空。',
        en: 'Tip: When creating an industry report or label, the product or HS code cannot be empty.'
    },
    'industry_tags_name_datatype': {cn: '标签名称/数据类型', en: 'Label name/data type'},
    'industry_tags_title': {cn: '标签名', en: 'Label name'},
    'industry_tags_datatype': {cn: '数据类型', en: 'Data type'},
    'industry_tags_select_date': {cn: '选择交易日期', en: 'Select transaction date'},
    'industry_tags_data_one': {cn: '近一年的贸易数据及行业报告', en: 'Trade data for the last year'},
    'industry_tags_data_two': {cn: '自定义时间周期，报告内容固定', en: 'Customised reporting dates'},
    'industry_tags_hscode_product': {cn: '添加产品/HS编码', en: 'Add product/HS code'},
    'industry_tags_hscode_product_tips': {
        cn: '每次添加一个产品名、HS编码，每项最多可添加5个...',
        en: 'Add one product name or HS code per time, and up to 5 items...'
    },
    'industry_tags_product_name': {cn: '产品名', en: 'Product keywords'},
    'industry_tags_product_name_tips': {cn: '输入产品名', en: 'Enter product keywords'},
    'industry_tags_hscode_name': {cn: 'HS编码', en: 'HS code'},
    'industry_tags_hscode_name_tips': {cn: '输入HS编码', en: 'Enter HS code'},
    'industry_tags_add_button': {cn: '添加', en: 'Add'},
    'industry_tags_bill_no': {cn: '提单编号', en: 'B/Ls Number'},
    'industry_tags_company_area': {cn: '采供公司/贸易区域', en: 'Company/Trade area'},
    'industry_tags_buyer_name': {cn: '采购商名', en: 'Buyer'},
    'industry_tags_supplier_name': {cn: '供应商名', en: 'Supplier'},
    'industry_tags_purchasing': {cn: '采购国', en: 'Import Country'},
    'industry_tags_supply': {cn: '供应国', en: 'Export Country'},
    'industry_tags_origin': {cn: '原产国', en: 'Country of origin'},
    'industry_tags_destiniation_country': {cn: '目的国', en: 'Destination country'},
    'industry_tags_port_method': {cn: '港口/运输方式', en: 'Port/Mode of transport'},
    'industry_tags_port_export': {cn: '发货港口', en: 'Port of export'},
    'industry_tags_port_import': {cn: '进货港口', en: 'Port of import'},
    'industry_tags_notified': {cn: '通知人', en: 'Notifier'},
    'industry_tags_mod': {cn: '运输方式', en: 'Mode of transport'},
    'industry_tags_wqp': {cn: '重量/数量/价格', en: 'Weight/quantity/price'},
    'industry_tags_weight_range': {cn: '重量范围', en: 'Weight range'},
    'industry_tags_quantity_range': {cn: '数量范围', en: 'Quantity range'},
    'industry_tags_total_range': {cn: '总额范围', en: 'Total amount range'},
    'industry_tags_price_range': {cn: '价格范围', en: 'Price range'},
    'industry_tags_tips_empty': {cn: '提示：标签名不能为空', en: 'Tip: The label name cannot be empty'},
    'industry_tags_tips_parameters': {cn: '提示：标签名或参数重复', en: 'tip: duplicate label names or parameters'},

    'bill_detail': {cn: '提单详情', en: 'B/Ls details'},
    'bill_date': {cn: '交易日期', en: 'Transaction Date'},
    'bill_number': {cn: '提单编号', en: 'B/L No.'},
    'bill_buyer': {cn: '采购商', en: 'Buyer'},
    'bill_supplier': {cn: '供应商', en: 'Supplier'},
    'bill_purchasing_area': {cn: '采购区域', en: 'Import area'},
    'bill_supply_area': {cn: '供应区域', en: 'Export area'},
    'bill_product': {cn: '产品描述', en: 'Product'},
    'bill_hscode': {cn: 'HS编码', en: 'Hs code'},
    'bill_quanty': {cn: '货物数量', en: 'Quantity'},
    'bill_weight': {cn: '货物重量', en: 'Weight'},
    'bill_poe': {cn: '出口港', en: 'POL'},
    'bill_poi': {cn: '进口港', en: 'POD'},
    'bill_methods': {cn: '运输方式', en: 'Shipping methods'},
    'bill_notified': {cn: '联系人', en: 'Contacts'},


    'export_over': {cn: '今日导出额度已用完', en: 'Quota of today has been used up'},
    'export_data': {cn: '下载数据', en: 'Download data'},
    'export_data_new': {cn: '新数据', en: 'New data'},
    'export_data_old': {cn: '老数据', en: 'Old data'},
    'export_data_update': {cn: '贸易国数据已更新至', en: 'Data has been updated to '},
    'export_left': {cn: '今日剩余', en: 'Today left '},
    'export_left_other': {cn: '剩余', en: 'left '},
    'export_trade_time': {cn: '交易时间', en: 'Trade date'},
    'export_trade_star': {cn: '起始时间', en: 'Start time'},
    'export_trade_end': {cn: '结束时间', en: 'End time'},
    'export_search': {cn: '搜索', en: 'Search'},
    'export_search_tips': {
        cn: '每次可导出500条，请通过交易时间控制下载条数。',
        en: 'You can export a max of 500 B/Ls per time and control the number of downloads by adjusting the time range.'
    },
    'export_export': {cn: '导出数据', en: 'Export data'},
    'export_exporting': {cn: '导出中，请稍后......', en: 'Export in progress, please wait ......'},
    'export_exporting_have': {cn: '已导出', en: 'Exported'},
    'export_no_export': {cn: '服务期内无可用导出数量', en: 'No number of downloads available during the service period'},
    'export_data_bill': {cn: '共计[@数量]符合搜索结果', en: 'Total [@数量] matches'},
    'export_data_bill_export': {cn: '当前查询条件下数据已导出', en: 'The data you are checking has been exported'},


    'download_time_select': {cn: '请选择时间', en: 'Please select date'},
    'download_time_select_tips': {cn: '结束时间不能小于起始时间', en: 'The end time cannot be less than the start time'},
    'download_time_over': {cn: '时间范围不能大于一年', en: 'The time range cannot be greater than one year'},
    'download_data_source': {cn: '请选择数据源', en: 'Please select a data source'},

    'no_right': {cn: '暂无权限，可向主账号申请此权限。', en: 'Request permission from main account.'},
    'data_loading': {cn: '正在加载中', en: 'Data Loading'},

    'yangben': {cn: 'yangben', en: 'demo'}
}

var end_time = '', data_ie = Number($('meta[name="data_ie"]').attr('content')),
    countries = JSON.parse($('meta[name="countries"]').attr('content')),
    default_params = {country: countries.country},
    search_params = {},
    query_params = queryObject(),
    search_field = {}, analyse_field = {}, end_time_field = ['import_date', 'export_date'],
    raw_date_field = ['import_date', 'export_date'],
    company_types_info = {
        seller_id_std: {
            from: 'seller',
            title_tab: unity_lang('report_supplier'),
            company_route: 'supplier'
        },
        buyer_id_std: {
            from: 'buyer',
            title_tab: unity_lang('report_buyer'),
            company_route: 'buyer'
        }
    },
    // 巴基斯坦数据源时间节点
    pk_last_list = [new Date('2021-04-30'), new Date('2010-12-31')]
var user = wg.user || null
let tags = queryString('tags'), sample_report = false
let $industry_tags = $('#industry_tags')
let gperms = $('meta[name="perms"]').attr('content')


$(function () {


    if(gperms == 'false') {
        layer.alert(
            unity_lang('share_child_not_perms'),
            { 'title': unity_lang('layer_tips'), area: ['400px', 'auto'], btn: false,closeBtn: false}
        )
    }
    // 初始化 搜索字段
    get_search_field(function () {
        search_params = $.extend({}, search_params, $('#search_from').serializeObject(), false)
        // 先加载搜索字段 再加载标签  不然在搜索的时候容易出错
        init_tags(tags, function () {
            console.log('tags', tags)
            if(!tags) return false
            tags=='sample'?$('#industry_tags .sample-tag').click():$('#industry_tags [data-id="'+ tags +'"]').click()
            // let _interval = setInterval(function () {
            //     if (search_field[data_ie]) {
            //         clearInterval(_interval)
            //         sample_report?$('#industry_tags .sample-tag').click():$('#industry_tags [data-id="'+ tags +'"]').click()
            //     }
            // }, 1000)
        })
    })
    // 获取处理分析维度
    get_analyse_field()

    //贸易数据分页trade_detail
    $('#trade_data_paging').paging({
        offset: true,  // start size 模式
        callback: function (start, fn) {

            raw_unity_authority('yd', function (){
                search_params = $.extend({}, search_params, $('#search_from').serializeObject(), false)
                trade_list(start, function () {
                    $('body,html').animate({scrollTop: $("#report_tab").offset().top}, 300);
                    fn()
                })
            })
        }
    })

    /*高级搜索点击展开*/
    $("#higher_search").click(function () {
        var terms = $('#search_from fieldset:gt(5)'), is_show = $(this).data('show')

        if (terms.is(":hidden")) {
            $(this).data('show', 1)
            terms.show();    //如果元素为隐藏,则将它显现
        } else {
            $(this).removeAttr('show')
            terms.hide();     //如果元素为显现,则将其隐藏
        }
    })
    /*点击搜索*/
    $('#search_btn').click(function () {
        unity_authority('yd', function () {
            $('#search_from [name="tag_id"]').val(0)
            $('.search-tips').hide()
            var $menu = $('#industry_tags');
            var $itemActive = $menu.find('.active');
            $itemActive.removeClass('active')
            unity_search()
        }, true)
    })
    $(document).on('keydown', '.enter-input', function (e) {
        if (e.key == 'Enter') {
            $('#search_from [name="tag_id"]').val(0)
            $('.search-tips').hide()
            unity_search()
        }
    })
    /*tab切换*/
    $(document).on('click', "#report_tab a", function () {
        var field = $(this).data('field'), des = $(this).data('des'), has = $(this).data('has'), that = this
        raw_unity_authority('yd', function () {
            let has_st = true
            if($(that).index() != 0){
                has_st = false
                $.each(search_params, function (a, b){
                    if(a == 'ie'|| a == 'end_date'|| a == 'start_date'|| a == 'country'|| a == 'tag_id' || !a) return true
                    if(b == '*' || b == '' || b==null || b == undefined) return true
                    if(Number(b) <=0) return true
                    has_st = true
                    return false
                })
            }
            if (!has_st) return $.alert(unity_lang('report_create_tips'))
            if (has) return analyse_tab(that)
            if (field == 'trade_data') {
                search_trade()
            } else if (field == 'market_analysis') {
                trade_analyse_market()
            } else {
                trade_analyse(field, des)
            }
            $(that).data('has', '1')
        })
    })

    /*点击行业标签*/
    $(document).on('click', '#industry_tags span:not(.active)', function () {
        tab_tag($(this))
        build_analyse_field()
    });
    // 公司名录导出
    $(document).on('click', '.download-item', function () {
        var $this = $(this)
        unity_authority('yd', function () {
            var src = $this.data('src'), filename = $this.data('filename'),
                headercus = $this.data('headercus'), field = $this.data('counter'),
                file_name = '{0}-{1}-{2}-{3}.xlsx'.format(
                    new Date().date_format('yyyy-mm-dd'),
                    new Date().getTime(),
                    default_params.country, filename
                )
            headercus = headercus ? eval(headercus) : []
            company_item_download(field, file_name, function () {
                load_js_file('ExcelGen', function () {
                    new ExcelGen({
                        "src_id": src,
                        "show_header": true,
                        "file_name": file_name,
                        header_custom: headercus
                    }).generate();
                })
            })
        }, true)
    })
    $(document).on('click', '#search_from  input', function () {
        var $elem = $(this).parents('.fast-search-con')
        unity_authority('yd', function () {

        }, true, $elem)

    })

    /*导出贸易数据*/
    $('#download_trade').click(function () {
        verify_authority('yd', {
            login: false,
            experience: false,
            failure: 1,
            after_allow: function (fn) {
                unity_child_perms('customs_trade_download', fn)
            },
            successful: function () {
                verify_download_pers()
            }
        })
    })
})

function get_path(){
    let path_key=window.location.pathname
    return path_key
}

function raw_unity_authority(vip, callback, to_login = true) {
    verify_authority(vip, {
        hig_auth: sample_report,
        login: to_login,
        failure: 1,
        successful: callback
    })
}
let checked_tag_id
function tab_tag($this) {
    checked_tag_id = Number($this.data("id"))
    var tag_data = tags_data[checked_tag_id], user_id = $this.data("user_id")
    sample_report = user_id == '0'

    raw_unity_authority('yd', function () {
        $this.addClass('active').siblings().removeClass('active')
        checked_tag(tag_data)
    })
}

function checked_tag(tag_data) {
    let params = tag_data.params, date_type = Number(params.date_type), tag_name = tag_data.label_name
    console.log(tag_data, params, 'params')
    //以下参数在实际搜索中是无用的，所以删除
    delete params.date_type
    delete params.ie
    if (date_type == 0) {
        var end_date = new Date(countries[end_time_field[data_ie]].replace(/-/g, "/"))
        params['start_date'] = $.formatDate($.date_add(-1, new Date(end_date)))
        params['end_date'] = $.formatDate(end_date)
    }
    params['tag_id'] = tag_data.id
    loadData(params)
    unity_search()
    $('.search-tips').show().find('p').html(replaceKey(unity_lang('report_top_tips'), ['[@标签名]', '[@开始时间]', '[@结束时间]'], [tag_name, params.start_date, params.end_date,]))

}



/**
 * 重新构造搜索字段
 */
function reload_search() {
    analyse_tab('#report_tab [data-field="trade_data"]')
    get_search_field(function () {
        unity_search()
    })

}

/**
 * 构建查询字段
 * @param fn 回调方法
 */
function build_search_field(fn) {
    // 构建搜索字段时，清空之前的搜索词
    search_params = $.extend({}, default_params, query_params, false)
    query_params = {}
    let fields = search_field[data_ie], $search_from = $('#search_from');
    $search_from.html('')
    $.each(fields, function () {
        let _name = this.name,
            _html = '<fieldset class="' + (this.child ? 'double' : 'fieldset') + '"><font>' + this['des_' + _lang] + '</font>'
        // 特殊字段特殊处理
        if (this.name == 'ie') {
            var _li = '', default_des = '';
            $.each(this.child, function (a, b) {
                if (countries.data_types.indexOf(Number(b.value)) >= 0) {
                    var _active = ''
                    if (b.value == data_ie) {
                        default_des = b['des_' + _lang]
                        _active = 'active'
                    }
                    _li += '<li class="item ' + _active + '" data-value="' + b.value + '">' + b['des_' + _lang] + '</li>'
                }
            })
            _html += '<div id="search_ie_dropdown">' +
                '<div class="dropdown-btn" ><font class="show">' + default_des + '</font><i></i></div>' +
                '<ul class="dropdown-menu">' + _li + '</ul>' +
                '</div><input type="hidden" name="' + this.name + '" value="' + data_ie + '">'
        } else if (this.type == 'select') {

            _html = '<div class="mdselect-t"><div class="mdselect-btn" data-value="0"><font>' + unity_lang('report_import_data') + '</font><i></i></div>'
            _html += '<ul class="mdselect-ul" style="margin-top:10px;">'
            $.each(this.child, function (a, b) {
                _html += '<li class="mdselect-li" data-value="' + b.value + '">' + b['des_' + _lang] + '</li>'
                _html += '<option value="' + b.value + '">' + b['des_' + _lang] + '</option>'
            })
            _html += '</ul></div>'
        } else if (this.type == 'text') {
            if (this.child) {
                $.each(this.child, function (a, b) {
                    _html += '<input autocomplete="off" class="'+ (_name == 'date'?'qwe':'enter-input') +'" value="' + (search_params[b.name] || '') + '" id="' + b.name + '" placeholder="' + b['placeholder_' + _lang] + '" name="' + b.name + '" />'
                })
            } else {
                _html += '<input autocomplete="off" class="enter-input" value="' + (search_params[this.name] || '') + '" id="' + this.name + '" placeholder="' + this['placeholder_' + _lang] + '" name="' + this.name + '" />'
            }
        }
        _html += '</fieldset>'
        $search_from.append(_html)
    })
    $search_from.append('<input type="hidden" name="tag_id" value="">')
    $('#higher_search')[fields.length < 6 ? 'addClass' : 'removeClass']('display-none')

    /*初始化数据*/
    var date_fmt = 'yyyy-mm-dd', has_date = true, vmode = 'days'
    if(countries.country == 'philippines'){
        date_fmt = 'yyyy-mm'
        has_date = false
        vmode = 'months'
    }
    var end_date = countries[end_time_field[data_ie]],
        start_time = $.formatDate($.date_add(-1, new Date(end_date.replace(/-/g, "/"))), has_date),
        end_time = $.formatDate(new Date(end_date.replace(/-/g, "/")), has_date)
    /*时间选择器*/
    $('#start_date').val(start_time).data('maxdate', end_time).dcalendarpicker({
        format: date_fmt,
        language: {cn:'zh-cn',en: 'us-en'}[_lang],
        disable_keydown: false,
        lastViewMode: vmode,
        no_today: true
    });
    $('#end_date').val(end_time).data('maxdate', end_time).dcalendarpicker({
        format: date_fmt,
        language: {cn:'zh-cn',en: 'us-en'}[_lang],
        disable_keydown: false,
        lastViewMode: vmode,
        no_today: true
    });
    $('#search_ie_dropdown').wdropdown({
        selected: function (e) {
            data_ie = Number(e.value)
            $('#search_from [name="ie"]').val(data_ie)
            $('.search-tips').hide()
            get_analyse_field()
            reload_search()
            init_tags()
        }
    })
    if (!$('#higher_search').data('show')) {
        $('#search_from fieldset:gt(5)').hide();
    }
    if (fn) fn()
}

/**
 * 获取查询字段
 * @returns {boolean}
 */
function get_search_field(fn) {
    if (search_field[data_ie]) {
        build_search_field(fn)
        return false
    }
    $.ajax('/async/raw/search/fields', {
        datatype: 'text/json',
        type: 'get',
        data: {ie: data_ie, country: countries.country},
        success: function (result) {
            search_field[data_ie] = result.data.list
            build_search_field(fn)
            return false

        }
    })
}

/**
 * 构建分析字段
 */
function build_analyse_field() {
    var $report_tab = $('#report_tab'), $tab_con = $('#catalog_property')
    $report_tab.find('.analyse').remove()
    $tab_con.find('.analyse-con').remove()
    verify_authority('yd', {
        hig_auth: sample_report,
        login: false,
        call_sign: function () {
            build_analyse_field_html(true)
        },
        successful: function () {
            build_analyse_field_html(false)
        },
        failure: function () {
            build_analyse_field_html(true)
        }
    })
}

function build_analyse_field_html(lock) {
    var $report_tab = $('#report_tab'), $tab_con = $('#catalog_property')
    var tab_list = '', _lock = lock ? '<i></i>' : ''
    tab_list += '<a class="analyse" data-field="market_analysis" >' + _lock + unity_lang('report_category_market') + '</a>'
    $.each(analyse_field[data_ie], function () {
        tab_list += '<a class="analyse" data-field="' + this.name + '" data-des="' + this.des + '">' + _lock + this.des + '</a>'

        $tab_con.append('<div class="tab-con analyse-con" id="tab_' + this.name + '"></div>')
    })
    $report_tab.append(tab_list)
}

/**
 * 统一搜索
 */
function unity_search() {
    search_params = $.extend({}, search_params, $('#search_from').serializeObject(), false)
    var $report_tab = $('#report_tab'), $active = $report_tab.find('.tab-active'),
        field = $active.data('field'), // 选中项
        des = $active.data('des'); // 选中项
    $report_tab.find('a').data('has', '')
    if (field == 'trade_data') {
        search_trade()
    } else if (field == 'market_analysis') {
        trade_analyse_market()
    } else {
        trade_analyse(field, des)
    }
    $active.data('has', '1')
}

/**
 * 提单搜索
 */
function search_trade() {
    trade_list(0, function (hits) {
        $('#catalog_property .tab-trade-data h2 .hits').text(hits)

        $('#trade_data_paging').paging().reload({total: hits, current: 1})
        analyse_tab('#report_tab [data-field="trade_data"]')
    })
}

/**
 * 构建提单列表
 * @param _html
 * @param hits
 * @returns {boolean}
 */
function build_trade_list(_html, hits) {
    var $page = $('#trade_data_paging'), $con = $('#customs_data_list')
    $con.html(_html)
    if(hits<=0){
        $page.addClass('display-none')
        $('#download_trade').addClass('display-none')
        return false
    }
    $page.removeClass('display-none')
    if (download_verify()) {
        $('#download_trade').removeClass('display-none')
    }
    // if (_list.length <= 0) {
    //     $page.addClass('display-none')
    //     $('#download_trade').addClass('display-none')
    //     $con.html('<tbody><tr><td>' + unity_lang('report_no_date') + '</td></tr></tbody>').addClass('not-data')
    //     return false
    // }
    // $page.removeClass('display-none')
    // if (download_verify()) {
    //     $('#download_trade').removeClass('display-none')
    // }
    // $con.html('<thead><tr></tr></thead><tbody></tbody>').removeClass('not-data')
    // $.each(titles, function () {
    //     if (this.is_mark == 0) {
    //         $con.find('thead tr').append('<th>' + this.field_des + '</th>')
    //     }
    // })
    // $con.find('thead tr').append('<th>' + unity_lang('report_bill_detail') + '</th>')
    // _list.forEach(function (item) {
    //     var td_tab = '<tr>'
    //     titles.forEach(function (title) {
    //         if (title.is_mark == 0) {
    //             td_tab += '<td >' + item[title.field_title] + '</td>'
    //         }
    //     })
    //     td_tab += '<td data-billid="' + item.billid + '" data-date="' + item.date + '" onclick="bill_detail(this)">&gt;</td></tr>'
    //     $con.find('tbody').append(td_tab)
    // })
}

/*贸易数据*/
function trade_list(start, fn) {
    var params = $.extend({}, search_params, false)

    if (params.start_date) {
        params.start_date = $.formatDate(new Date(params.start_date))
    }
    if (params.end_date) {
        params.end_date = $.formatDate(new Date(params.end_date))
    }
    params['start'] = start || 0
    $.loadajax('/async/raw/trade/list', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
            if (result.state == 0) {
                build_trade_list(result.content, result.hits)
                $('#ptoken').val(result.ptoken)
                return fn(result.hits)
            }
            if(result.state == 22000) return $.alert(result.message)
           $.alert(unity_lang('report_bill_data_exceptions'))
        }
    })
}


/**
 * 获取维度分析字段
 * @returns {boolean}
 */
function get_analyse_field() {
    if (analyse_field[data_ie]) {
        build_analyse_field()
        return false
    }
    $.ajax('/async/raw/analyse/fields', {
        datatype: 'text/json',
        type: 'get',
        data: {ie: data_ie, country: countries.country},
        success: function (result) {
            analyse_field[data_ie] = result.data.list
            build_analyse_field()
            return false

        }
    })
}

//
function analyse_tab(elem) {
    var $elem = $(elem)
    $elem.addClass("tab-active").siblings().removeClass("tab-active");
    $("#catalog_property  .tab-con").eq($elem.index()).show().siblings().hide();
}

/*市场分析*/
function trade_analyse_market() {
    let params = Object.assign({}, search_params, {ptoken: $('#ptoken').val()})

    if (params.start_date) {
        params.start_date = $.formatDate(new Date(params.start_date))
    }
    if (params.end_date) {
        params.end_date = $.formatDate(new Date(params.end_date))
    }
    $.loadajax('/raw/trade/analyse/market', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {

            if (result.state == 0) {
                analyse_tab('#report_tab [data-field="market_analysis"]')
                $("#trend_chart").empty();
                $("#trend_box").empty();
                var stats_list = result.data.stats_list
                // 表单头部构建
                var table_columns = [
                        {
                            data: 'date', 'title': unity_lang('report_market_month') + '<i></i>'
                        }
                    ],
                    columnDefs = []
                /*市场分析图数据*/
                $.each(stats_list, function (i, values) {
                    i++
                    table_columns.push({
                        data: values.field, title: values.name + '<i></i>'
                    })
                    if (values.type == null) {
                        var trend_chart = '<div class="trend_chart tab-pane" id="echart_trends_' + values.field + '"></div>'
                        var stats_col = '<span class="trend tab"  data-target="#trend_chart" ><em></em>' + values.name + '<br>\n' +
                            '<font><b>' + values.total_quantity + '</b></font></span>'
                        $('#trend_chart').append(trend_chart)
                        $('.tab-market-analysis .trend-box').append(stats_col)
                        let xAxis = values.xAxis_data, yAxis = values.series_datas.series_data1
                        option_echart({xAxis: xAxis, yAxis: yAxis}, this.field)
                    } else {
                        if (values.field == 'prop') {
                            columnDefs.push({
                                "render": function (data, type, row) {
                                    return '<p  class="">' + data + '%</p>';
                                },
                                "targets": i
                            })
                        } else if (values.analyse) {

                            columnDefs.push({
                                "render": function (data, type, row) {
                                    if (Number(data) > 0) {
                                        return '<a class="related-company 1" onclick="related_company(this)" data-key="date" data-value="' + row.date + '" data-field="' + values.analyse + '" >' + data + '</a>';
                                    }
                                    return '-'
                                },
                                "targets": i
                            })
                        }
                    }
                })
                $('#trend_chart .trend_chart:first-child').addClass("active")
                $('#trend_box span:first-child').addClass("active")
                $('#trend_box span:first-child em:first-child').addClass("em")
                // switch_chart()
                bazaar_table_list(result.data.table_list, table_columns, columnDefs)
                return
            }
            $.alert(result.message)

        }

    })


}

/*市场分析列表*/
function bazaar_table_list(data, columns, columnDefs) {
    $('#marketing_studies_list').DataTable({
        order: [
            [0, "asc"]
        ],
        autoWidth: false, //自动宽度
        pageLength: 12,
        responsive: true,
        bPaginate: false, //分页总开关
        bLengthChange: true, //每页多少条框体
        searchable: true, //搜索总开关
        searching: false,
        ordering: true, //排序总开关
        info: false,
        columns: columns,
        columnDefs: columnDefs,
        destroy: true,
        data: data
    })
}

/*市场趋势分析图*/
function option_echart(data, type) {
    var subtext = search_params.start_date + unity_lang('report_market_table_to') + search_params.end_date + search_params.country + unity_lang('report_market_table_trend');
    $('#tab_market_analysis #trade_data_title').empty();
    $('#tab_market_analysis #trade_data_title ').append('<h2>' + unity_lang('report_market_buy_table') + '</h2><span>' + subtext + '</span>')

    var myChart = echarts.init(document.getElementById("echart_trends_" + type));

    option = {
        // title: {
        //     text:title,
        //     subtext: subtext,
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            type: 'category',
            data: data.xAxis,
            axisLabel: {
                interval: 0,
                rotate: 40
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                //y轴刻度线
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#767676'
                }
            },

            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [
            {
                data: data.yAxis,
                type: 'bar'
            }
        ]
    };
    myChart.setOption(option);
}

// seller_country
/*维度分析*/
function trade_analyse(field, des) {

    $("#tab_" + field).empty();
    unity_analyse(field, function (result) {
        var data = result.data || {}, hits = data.hits || 0, _list = data.list || [], title = data.title;
        analyse_tab('#report_tab [data-field="' + field + '"]')
        if (hits > 0 && _list.length > 0) {
            $('#tab_' + field).html('<div class="veidoo-chart " ><div class="trade-data-title"></div>' +
                '<div class="buyer-deal-map" id="buyer_deal_' + field + '" ></div></div>' +
                '<h2 class="tab-con-hint">' + hits + unity_lang('report_market_match') +
                '<span class="export-data tb-download-item" data-src="table_' + field + '" data-counter="' + field + '" data-filename="' + des + unity_lang('report_market_list') + '">' +
                '<i class="export-data-icon"></i>' + unity_lang('report_market_list_export') + '</span></h2>' +
                '<table class="collect-supplier-list" border="0" cellspacing="0" cellpadding="0" id="table_' + field + '"></table> ')
            // console.log(field, 'field')
            if (field == 'seller_country' || field == 'buyer_country') {
                customs_trade_country(_list, field)
            } else {
                customs_data_pie(_list, field, des)
            }
            trade_analyse_table_list(field, _list, title)
        } else {
            $('#tab_' + field).append('<div class="center-tags-no"><i></i><span>' + unity_lang('report_no_content') + '<br/><a href="#" target="_blank">' + unity_lang('report_no_content_why') + '</a></span></div>')
        }

    })


}

/*维度分析table列表*/
function trade_analyse_table_list(field, data, module_table_title) {
    var company_type_info = company_types_info[field],
        columnDefs = [], columns = []
    $.each(module_table_title, function (i, v) {
        columns.push({"data": v.name, title: v.des + '<i></i>'})
        if (v.name == 'prop') {
            columnDefs.push({
                "render": function (data, type, row) {
                    return '<div class="progressBar"><div class="progressBar-width" ></div><div class="progressBar-val">' + data + '%</div></div>';
                },
                "targets": i
            })
            return true
        } else if (v.name == 'buyer_count' || v.name == 'seller_count') {
            var company_field = v.name.replace('_count', '_id_std')
            columnDefs.push({
                "render": function (data, type, row) {
                    if (Number(data) > 0) {
                        return '<a class="related-company" onclick="related_company(this)" data-key="' + field + '" data-field="' + company_field + '" data-value="' + row[field] + '">' + data + '</a>';
                    }
                    return '-'
                },
                "targets": i
            })
        }
    })
    // 不为空说明是公司（采购商，供应商）维度分析， 采购商只显示供应商个数，供应商只显示采购商个数， 需要构造跳转连接
    let visible_col = null
    if (company_type_info) {
        columnDefs.push({
            "render": function (data, type, row) {
                if(countries.country == 'india new') return data
                return '<a href="/' + company_type_info.company_route + '/' + row[field] + '" target="_blank" class="company">' + data + '</a>';
            },
            "targets": 0
        })
        columns.push({"data": field})
        visible_col = columns.length - 1
        columnDefs.push(
            {
                "visible": false,
                "targets": visible_col
            })
    }else if(field == 'buyer_country' || field == 'seller_country'){
        columnDefs.push({
            "render": function (data, type, row) {
                return sensitive_country(data)
            },
            "targets": 0
        })
    }
    let file_name  = ''
    let $table = $("#table_" + field).DataTable({
        dom: 'Br<bf<t>ipl>',
        // dom: 'Bfrtip',
        buttons: [{
            extend:'excel',
            filename: function () {
                return file_name
            },
            title: null,
            exportOptions: {
                modifier: {
                    page: 'current'
                },
                // columns : [0, 1, 3, 4, 7],
                format: {
                    header: function ( data, columnIdx ) {
                        if(visible_col && visible_col == columnIdx) return 'URL'
                        return $.fn.DataTable.Buttons.stripData( data, null );
                    },
                    body: function (html, row, col, node){
                        let $node = $(node), $company = $node.find('.company')
                        if($company.length > 0){
                            return $company.html()
                        }
                        if(visible_col && visible_col == col) return window.location.protocol + '//'+ window.location.hostname +'/'+ company_type_info.company_route+'/' + html
                        html = $.fn.DataTable.Buttons.stripData( html, null );

                        return html
                    }
                }
            }
        }],
        language: {
            "sProcessing": "处理中...",
            "sLengthMenu": "每页 _MENU_ 条",
            "sZeroRecords": "没有匹配结果",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sPrevious": unity_lang('report_page_previous'),
                "sNext": unity_lang('report_page_next'),
            }
            // "dom": 'Bfrtip',
        },

        serverSide: false, //分页，取数据等等的都放到服务端去
        processing: true, //载入数据的时候是否显示“载入中”
        order: [
            [1, "desc"]
        ],
        autoWidth: false, //自动宽度
        pageLength: 15,
        responsive: true,
        bPaginate: true, //分页总开关
        lengthChange: true,
        lengthMenu: [ 15, 50, 100, 200 ],
        // pagingType:"full_numbers",//分页样式
        searchable: true, //搜索总开关
        searching: true,
        ordering: true, //排序总开关
        // '<t><lfip>'
        columnDefs: columnDefs,
        columns: columns,
        destroy: true,
        data: data,
        infoCallback: function (settings, start, end, max, pre) {
            var api = this.api();
            var pageInfo = api.page.info();
            return +pageInfo.page + 1 + "/" + pageInfo.pages + " ";
        },
        fnDrawCallback: function (table) {
            var that = $(this), table_id = that.attr('id');
            $('#' + table_id + "_info").append(
                unity_lang('report_page_to') + "<input  class='margin text-center' value='' id='changePage' type='text'>  <a class='btn btn-default shiny' style='margin-bottom:5px' href='javascript:void(0);' id='dataTable-btn'>" + unity_lang('report_page_confirmation') + "</a>"
            );
            var oTable = $("#" + table_id).dataTable();
            $('#dataTable-btn').click(function (e) {
                if ($("#changePage").val() && $("#changePage").val() > 0) {
                    var redirectpage = $("#changePage").val() - 1;
                } else {
                    var redirectpage = 0;
                }
                oTable.fnPageChange(redirectpage);
            })
        }
    })
    $("#table_" + field +"_wrapper .dt-buttons").addClass('display-none')
    $("#tab_" + field +" .tb-download-item").click(function() {
        var $this = $(this)
        unity_authority('yd', function () {
            file_name = '{0}-{1}-{2}-{3}.xlsx'.format(
                new Date().date_format('yyyy-mm-dd'),
                new Date().getTime(),
                default_params.country, $this.data('filename')
            )
            company_item_download(field, file_name, function () {
                $table.buttons(0).trigger();
            })
        }, true)
    })

}

/*维度分析table列表*/
// $('#table_seller_country_paginate a').click(function () {
//     console.log('点击')
//         unity_authority('yd', function () {
//             // verify_download_pers()
//         },true)
//     })
//翻页(分页)事件(目的处理国际化时空白问题)

//  $('#table_seller_country_wrapper').on('page.dt', function() {
//     console.log('点击')
//  });
/*海关数据饼状图*/
function customs_data_pie(list, type, des) {
    var pie_chart = list.slice(0, 5)
    var sum = 0, pie_chart_list = [], field = type.replace('_id_std', '');
    pie_chart.forEach(function (values, _) {
        sum += values.prop;
        pie_chart_list.push({
            value: values.prop,
            name: values[field].InitialUpper(),
            bill: values.bill_count
        })
    })
    $('#tab_' + type + '  .trade-data-title').html('<h2>' + des + unity_lang('report_trade_chart') + '（top5)</h2>' +
        // '<span>' + search_params.start_date + '至' + search_params.end_date + ' Top5 ' + des + '的交易量占总交易量的' + sum.toFixed(2) + '%' + '</span>')
        '<span>' + replaceKey(unity_lang('report_trade_chart_five_des'), ['[@开始时间]', '[@结束时间]', '[@板块名]', '[@占比]',], [search_params.start_date, search_params.end_date, des, sum.toFixed(2)]) + '</span>')

    var chart_customs_data = document.getElementById("buyer_deal_" + type)

    if (!chart_customs_data) {
        return false;
    }
    var pie = echarts.init(chart_customs_data)

    // 指定图表的配置项和数据
    option = {
        tooltip: {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0,
            formatter: function (params) {
                if (params.value.toString() == 'NaN')
                    return "";
                var value = (params.value + '%')
                return params.name + '<br/>' + unity_lang('report_trade_Percentage') + ' : ' + value + ' <br/>' + unity_lang('report_trade_times') + ' : ' + params.data.bill;
            }
        },

        series: [
            {
                name: des,
                type: 'pie',
                radius: '90%',
                center: ['50%', '50%'],
                data: pie_chart_list,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    pie.setOption(option);


}

/*海关数据供应国世界图*/
function customs_trade_country(list, type) {
    var sum = 0, map_chart_list = [];
    list.slice(0, 10).forEach(function (values, index) {
        sum += values.prop;
        map_chart_list.push({
            name: capitalize(values[type]),
            value: values.prop,
            bill: values.bill_count
        })
    })
    $('#tab_' + type + '  .trade-data-title').html('<h2>' + unity_lang('report_area_gobal') + '(top10)</h2>' +
        // '<span>' + search_params.start_date + '至' + search_params.end_date + ' Top10 贸易国的交易量占总交易量的' + sum.toFixed(2) + '%' + '</span>')
        '<span>' + replaceKey(unity_lang('report_trade_chart_ten_des'), ['[@开始时间]', '[@结束时间]', '[@板块名]', '[@占比]',], [search_params.start_date, search_params.end_date, '贸易国', sum.toFixed(2)]) + '</span>')


    var myChart = echarts.init(document.getElementById("buyer_deal_" + type));

    option = {

        visualMap: {
            show: false,
            min: 0,
            max: 100,
            // left: 80,
            // bottom: 50,
            //上下拖动
            //text: ['High', 'Low'],
            //color: ['#df3d20', '#fff']
            realtime: true,
            //平均分层
            splitNumber: 120,
            inRange: {
                color: ["#DB7093", "#3CB371", "#C71585", "#ff9900", "#800080", "#FFFF00", "#D2691E", "#3333FF", "#663333"]
            },
            outOfRange: {
                color: ['#800000'],
            },
        },
        tooltip: {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0,
            formatter: function (params) {
                if (params.value.toString() == 'NaN')
                    return "";
                var value = (params.value + '%')
                return params.name + '<br/>' + unity_lang('report_trade_Percentage') + ' : ' + value + ' <br/>' + unity_lang('report_trade_times') + ' : ' + params.data.bill;
            }
        },

        series: [{
            type: 'map',
            mapType: 'world',
            roam: false,
            itemStyle: {
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: map_chart_list,
        }]
    };
    myChart.setOption(option);


}

function unity_analyse(field, fn, params) {
    params = params || {}
    params['ptoken'] = $('#ptoken').val()
    let _params = Object.assign({}, search_params, params)


    if (_params.start_date) {
        _params.start_date = $.formatDate(new Date(_params.start_date))
    }
    if (_params.end_date) {
        _params.end_date = $.formatDate(new Date(_params.end_date))
    }
    _params['field'] = field
    _params['start'] = 0
    _params['size'] = 30
    $.loadajax('/raw/trade/analyse', {
        datatype: 'text/json',
        type: 'get',
        data: _params,
        success: function (result) {
            if (result.state == 0) {
                fn(result)
                return false
            }
            $.alert(unity_lang('report_bill_data_exceptions') + ' code:' + result.state)

        }
    })

}

var tags_data = {}

/**
 *
 * @param select_id
 * @param fn
 * @param hig_id   高亮, 已选中但是刷新列表时不需要再次自动点击查询只需要高亮
 */
function init_tags(select_id, fn, hig_id) {
    tags_data = {}
    unity_tags(function (data) {
        var _list = data.list || [], $tags = $('#industry_tags'),$tags_title=$('.industry-tags-box h2');
        $tags_title.html('')
        $tags.html('')
        if (_list.length > 1) {
            $tags_title.html(unity_lang('report_module_title')+'<span id="industry_tags_list">'+unity_lang('share_text_more')+'<font>&gt;</font></span>')
        }else{
            $tags_title.html(unity_lang('report_module_title'))
        }
        console.log(_list, 'tags_data 123')
        let active_class = ''
        if (_list.length > 0) {
            $.each(_list, function (_, b) {
                active_class = hig_id==b.id?'active':active_class
                if (b.user_id == 0) {
                    $tags.append('<span class="industry-tag sample-tag '+ (hig_id==b.id?'active':'') +'" data-user_id=' + b.user_id + ' data-id="' + b.id + '" data-wstats="demo_indusrty_report">' + b.label_name + '<font>' + unity_lang('report_demo') + '</font></span>')
                } else {
                    $tags.append('<span class="industry-tag '+ (hig_id==b.id?'active':'') +'" data-id="' + b.id + '">' + b.label_name + '</span>')
                }
                tags_data[b.id] = b
            })
            if(select_id != 'sample'){
                if(select_id) {
                    $tags.find('[data-id="' + select_id + '"]').click()
                }
                else if(!active_class && hig_id) {
                    index_more_tag(hig_id)
                }
            }
            if (fn) return fn()

        } else {
            $tags.append('<span >' + unity_lang('report_no_tags') + '</span>')
        }
    })
}

function unity_tags(fn, start, sample, scene) {
    sample = sample != null ? sample : true
    $.ajax('/async/raw/trade-tags/tags', {
        datatype: 'text/json',
        type: 'get',
        data: {
            ie: data_ie,
            country: default_params.country,
            start: start || 0,
            sample: sample,
            scene: scene || 1
        },
        success: function (result) {
            console.log(result,"444")
            if (result.state == 0) {
                fn(result.data)
                return false
            }
        }
    })
}

$('.search-tips span').click(function () {
    $('.search-tips').hide()
})
/*获取业标签列表*/
$(document).on('click', '#industry_tags_list', function () {

    unity_authority('yd', function () {
        trade_tags_list()
    }, true)

})

/**
 * 侧拉相关公司列表
 * @param elem
 */
function related_company(elem) {
    var value = $(elem).data('value'), key = $(elem).data('key'), field = $(elem).data('field')
    var related_params = $.extend({}, search_params, true)
    if (key == 'date') {
        related_params['start_date'] = value + '-01';
        var start_time = $.date_format(related_params['start_date'])
        start_time = new Date(start_time.setMonth(start_time.getMonth() + 1))
        start_time = new Date(start_time.setDate(start_time.getDate() - 1))
        related_params['end_date'] = $.formatDate(start_time)
    } else {
        related_params[key] = value;
    }
    related_params['is_stats'] = true;
    var company_type_info = company_types_info[field];

    new ModelBox({
        content: '<div class="company-label-head">\n' +
            '<h2>' + unity_lang('report_related_companies') + '</h2>\n' +
            '<span class="save download-item" data-src="related_table" data-filename="' + company_type_info.title_tab + unity_lang('report_market_list') + '" data-headercus="[\''+ company_type_info.title_tab +'\']">' + unity_lang('report_market_list_export') + '</span>\n' +
            '</div><div class="mail-collect">\n' +
            '<table id="related_table"></table><div class="loading"><img src="https://static.52wmb.com/wmb_new/images/loading_dian.gif"/><br/>' + unity_lang('report_page_loading') + '</div></div>',
        //内容
        isShow: true, //初始状态
        elemId: 'company_stats',
        load: function (that) {
            unity_analyse(field, function (result) {
                build_company_stats(that, field, result.data)
            }, related_params)
        }
    })
}

/**
 * 构建公司统计数据
 * @param side
 * @param field
 * @param data
 */
function build_company_stats(side, field, data) {
    var _list = data.list || [], hits = data.hits, company_type_info = company_types_info[field];
    var columnDefs = [{
        "render": function (data, type, row) {
            if(countries.country == 'india new') return data
            return '<a href="/' + company_type_info.company_route + '/' + row[field] + '" target="_blank" class="">' + data + '</a>';
        },
        "targets": 0
    }, {
        "render": function (data, type, row) {
            return data + '%';
        },
        "targets": 1
    }]
    var columns = [
        {
            "data": company_type_info.from,
            title: unity_lang('report_list_total') + hits + company_type_info.title_tab
        },
        {"data": 'prop', title: unity_lang('report_trade_Percentage')},
        {"data": 'bill_count', title: unity_lang('report_trade_total')}
    ]

    $('#' + side.elem_make).find(".loading").hide()
    $("#related_table").DataTable({
        language: {
            "sProcessing": "处理中...",
            "sLengthMenu": "每页 _MENU_ 条",
            "sZeroRecords": "没有匹配结果",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sPrevious": unity_lang('report_page_previous'),
                "sNext": unity_lang('report_page_next'),
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            },
            // "dom": 'Bfrtip',
        },

        serverSide: false, //分页，取数据等等的都放到服务端去
        processing: true, //载入数据的时候是否显示“载入中”
        autoWidth: false, //自动宽度
        pageLength: 15,
        responsive: true,
        bPaginate: true, //分页总开关
        bLengthChange: true, //每页多少条框体
        // pagingType:"full_numbers",//分页样式
        searchable: false, //搜索总开关
        searching: false,
        ordering: true, //排序总开关
        order:[[2, 'desc']],
        dom: '<bf<t>ipl>',
        columnDefs: columnDefs,
        columns: columns,
        destroy: true,
        data: _list,
        infoCallback: function (settings, start, end, max, pre) {
            var api = this.api();
            var pageInfo = api.page.info();
            return +pageInfo.page + 1 + "/" + pageInfo.pages + " ";
        },
    })

}

function tag_ie_dt_select(_ie, date_type) {
    if (date_type == 0) {
        var end_date = countries[end_time_field[_ie]],
            start = $.formatDate($.date_add(-1, new Date(end_date)))
        $('#customs_start_date').val(start).attr('disabled', 'disabled')
        $('#customs_end_date').val(end_date).attr('disabled', 'disabled')
    } else {
        $('#customs_start_date').removeAttr('disabled')
        $('#customs_end_date').removeAttr('disabled')
    }
}

/*侧拉创建行业标签*/
function found_industry_tags() {
    unity_authority('yd', function () {
        unity_side_create_tag(1, function (that) {
            $('input:radio[name="date_type"][value="0"]').prop('checked', true);
            tag_ie_dt_select(data_ie, 0)
        })
    }, true)
}

function search_to_tag() {
    unity_authority('yd', function () {
        unity_side_create_tag(2, function (that) {
            var $start = $('#customs_start_date'), $end = $('#customs_end_date')
            var start = new Date($start.val()), end = new Date($end.val());
            var days = end.getTime() - start.getTime();
            var day = parseInt(days / (1000 * 60 * 60 * 24)),
                date_type = (day !== 365 && day !== 366) ? 1 : 0;
            $('input:radio[name="date_type"][value="' + date_type + '"]').prop('checked', true);
            tag_ie_dt_select(Number($('#tags_form [name="ie"]').val()), date_type)
            build_tag_des_hs(that)
        })
    }, true)
}

/**
 * 统一创建标签侧拉
 * @param type
 * @param fn
 */
function unity_side_create_tag(type, fn) {
    side_industry_tag(function (that) {
        // 加载数据以及html元素
        $('#tags_form [name]').not('[name="tag_name"]').each(function () {
            var $this = $(this), name = this.name, elem_type = this.type,
                $search_elem = $('#search_from [name="' + name + '"]')
            if ($search_elem.length >= 1) {
                if (type == 2) {
                    var search_val = $search_elem.val()
                    if (elem_type == 'text' || elem_type == 'select' || elem_type == 'hidden') {
                        $this.val(search_val)
                    }
                }
            } else {
                $(this).parents('fieldset').addClass('display-none')
            }
        })
        $('#customs_tags_save').click(function () {
            add_customs_tags(that)
        })

        fn(that)

    })
}

/*侧拉行业标签列表*/
var all_tags = {}

function trade_tags_list() {
    var website_html = '<div class="company-label-head">\n' +
        ' <h2>' + unity_lang('report_mantags_name') + '</h2>\n' +
        ' <span class="save" onclick="found_industry_tags()" id="create_tags">+' + unity_lang('industry_tags_add') + '</span></div>\n' +
        '<div class="mail-collect">\n' +
        '<p class="mail-collect-hint">' + unity_lang('report_list_total') + '<font class="total-tag">0</font></p>\n' +
        '<ul class="website-boc all-tags" id="all_tags"></ul>\n' +
        '\t</div>'

    new ModelBox({
        content: website_html,
        //内容
        isShow: true, //初始状态
        elemId: 'trade_tags_list',
        load: function (that) {
            var $that = $('#' + that.elem_make)
            unity_tags(function (data) {
                var tags_list = '', _list = data.list || []
                if (_list.length > 0) {
                    $.each(_list, function () {
                        all_tags[this.id] = this
                        // <label><input hidden type="radio" name="trade_tag" value="' + this.id + '">
                        tags_list += '<li class="website"><label><input hidden type="radio" class="trade-tag" name="trade_tag" value="' + this.id + '"><i class="checked"></i><span class="website-name">' + this.label_name
                        if (this.params.date_type == 0) {
                            tags_list += '<span class="official-referee">' + unity_lang('report_mantags_year') + '</span>'
                        } else {
                            tags_list += '<span class="official-referee">' + this.params.start_date + '/' + this.params.end_date + '</span>'

                        }
                        //</label>
                        tags_list += '</span></label><i class="edit" onclick="side_edit_tag(' + this.id + ')"></i><i class="del" onclick="delete_industry_tags(this)" data-tag_id="' + this.id + '"></i></span></li>'
                    })
                    $that.find('.all-tags').html(tags_list)
                    $that.find('.total-tag').html(_list[0]['total_count'])
                    $('input:radio[name="trade_tag"]').change(function (e) {

                        checked_tag_id = Number($(this).val())
                        let $stag = $industry_tags.find('.industry-tag[data-id="' + checked_tag_id + '"]');
                        if ($stag.length > 0) {
                            $stag.addClass('active').siblings().removeClass('active')
                        } else {
                            $industry_tags.find('.industry-tag').removeClass('active')
                            $industry_tags.find('.more-industry-tag').remove()
                            index_more_tag(checked_tag_id)
                        }
                        that.hide()
                    })
                }
            }, 0, false, 2)
        }
    })
}

function index_more_tag(tag_id){
    let tag_data = all_tags[tag_id]
    tags_data[tag_id] = tag_data
    $industry_tags.append('<span class="industry-tag more-industry-tag active" data-id="' + tag_id + '">' + tag_data.label_name + '</span>')
}

function delete_industry_tags(elem) {
    var tag_id = $(elem).data('tag_id')
    var $parent = $(elem).parent()
    $.ajax('/async/raw/trade-tags/tags/delete', {
        datatype: 'text/json',
        type: 'post',
        data: {
            tag_id: tag_id,
        },
        success: function (result) {
            if (result.state == 0) {
                delete all_tags[tag_id]
                delete tags_data[tag_id]
                $parent.remove()
                $('#industry_tags .industry-tag[data-id="' + tag_id + '"]').remove()
            }
            if (result.state == 200) {
                $.alert(unity_lang('report_mantags_login'))
            }

        }
    })
}

/**
 * 侧拉标签编辑
 * @param tag_id
 */
function side_edit_tag(tag_id) {
    var tag_detail = all_tags[tag_id], params = tag_detail.params, date_type = Number(params.date_type);
    side_industry_tag(function (that) {
        // 加载数据以及html元素
        $('#tags_form [name="tag_name"]').val(tag_detail.label_name)
        $('input:radio[name="date_type"][value="' + date_type + '"]').prop('checked', true);

        $('#tags_form [name]').not('[name="tag_name"],[name="date_type"]').each(function () {
            var $this = $(this), name = this.name, elem_type = this.type
            if ($('#search_from [name="' + name + '"]').length >= 1) {
                if (elem_type == 'text' || elem_type == 'select' || elem_type == 'hidden') {
                    $this.val(params[name])
                } else if (elem_type == 'radio') {
                }
            } else {
                $(this).parents('fieldset').addClass('display-none')
            }
        })
        tag_ie_dt_select(Number($('#tags_form [name="ie"]').val()), date_type)
        build_tag_des_hs(that)

        $('#customs_tags_save').click(function () {
            change_customs_tags(tag_id, that)
        })
    })
}

/**
 * 特殊处理HS和描述
 * @param that
 */
function build_tag_des_hs(that) {
    //特殊 处理hs 和 提单描述
    var tag_des = $('#tags_form [name="des"]').val() || '', tag_hs = $('#tags_form [name="hs"]').val() || '',
        des_list = tag_des.split('|'), hs_list=tag_hs.split('|');
    console.log(hs_list, 'hs_list')
    console.log(des_list, 'des_list')
    $.each(des_list, function (_, b) {
        if (b != '' && b != null) {
            $('#tags_form #product_list').append('<span>' + b + ' <font data-value="' + b + '">&#10006</font></span>')
            that.des_list.push(b)
        }
    })
    $.each(hs_list, function (_, b) {
        if (b != '' && b != null) {
            $('#tags_form #product_hs_tag').append('<span>' + b + ' <font data-value="' + b + '">&#10006</font></span>')
            that.hs_list.push(Number(b))
        }
    })
    console.log(that.hs_list, 'that.hs_listsdfasd')
}

/**
 * 侧拉tags
 */
function side_industry_tag(fn) {
    //#region 侧拉html
    var website_html = '<div class="company-label-head">\n' +
        '<h2>' + unity_lang('industry_tags_add') + '</h2>\n' +
        '<span class="save" id="customs_tags_save">' + unity_lang('industry_tags_save') + '</span>\n' +
        '<span class="clear" id="customs_tags_clear">' + unity_lang('industry_tags_clear') + '</span>\n' +
        '</div>\n' +
        '<div class="found-trade-tags-box">\n' +
        '<p class="hint">' + unity_lang('industry_tags_create_tips') + '</p>\n' +
        '<form id="tags_form" name="tags_form">' +
        '<div class="trade-tags-box">\n' +
        '<b class="subtitle">' + unity_lang('industry_tags_name_datatype') + '</b>\n' +
        '<div class="tags-name">\n' +
        '<fieldset class="">\n' +
        '<font>' + unity_lang('industry_tags_title') + '</font>\n' +
        '<input name="tag_name" value=""/>\n' +
        '</fieldset>\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_datatype') + '</font>\n' +
        ''
    // 此处的数据类型是根据搜索字段的数据类型显示
    var _li = '', des = ''
    $.each($('#search_ie_dropdown ul li'), function () {
        var $this = $(this), value = Number($this.data('value')), _active = ''
        if (value == data_ie) {
            _active = 'active'
            des = $this.html()
        }
        _li += '<li class="item ' + _active + '" data-value="' + value + '">' + $this.html() + '</li>'
    })
    website_html += '<div id="tag_ie_dropdown"><div class="dropdown-btn"><font class="show">' + des + '</font><i></i></div>' +
        '<ul class="dropdown-menu">' + _li + '</ul></div><input type="hidden" name="ie" value="' + data_ie + '">'

    website_html += '</fieldset></div></div>\n' +
        '<div class="trade-tags-box">\n' +
        '<b class="subtitle">' + unity_lang('industry_tags_select_date') + '</b>\n' +
        '<div class="trade-date">\n' +
        '<fieldset class="customs-date">\n' +
        '<font>' + unity_lang('industry_tags_select_date') + '</font>\n' +
        '<input placeholder="from" name="start_date" class="start-date tag-date" id="customs_start_date" value=""/><span>—</span>\n' +
        '<input placeholder="to" name="end_date" class="end-date tag-date" id="customs_end_date" value=""/>\n' +
        '</fieldset>\n' +
        '<span class="custom-date">\n' +
        //'<input type="radio"  name="date_type" value="0"/>\n' +
        '<font><input type="radio"  name="date_type" value="0"/>' + unity_lang('industry_tags_data_one') + '</font>\n' +
        //'<input type="radio" name="date_type" value="1" />\n' +
        '<font><input type="radio" name="date_type" value="1" />' + unity_lang('industry_tags_data_two') + '</font>\n' +
        '</span></div></div>\n' +
        '<div class="trade-tags-box">\n' +
        '<b class="subtitle">' + unity_lang('industry_tags_hscode_product') + '</b>\n' +
        '<p class="product-hint">' + unity_lang('industry_tags_hscode_product_tips') + '</p>\n' +
        '<fieldset class="product-name">\n' +
        '<font>' + unity_lang('industry_tags_product_name') + '</font>\n' +
        '<input placeholder="' + unity_lang('industry_tags_product_name_tips') + '" value="" id="product_text" />\n' +
        '<input type="hidden" value="" name="des" />\n' +
        '<span class="add" id="product_add">' + unity_lang('industry_tags_add_button') + '</span>\n' +
        '</fieldset>\n' +
        '<p class="product-name-tag" id="product_list"></p>\n' +
        '<fieldset class="product-name">\n' +
        '<font>' + unity_lang('industry_tags_hscode_name') + '</font>\n' +
        '<input value="" id="hs_text"/>\n' +
        '<input type="hidden" value="" name="hs"/>\n' +
        '<span class="add" id="hs_add">' + unity_lang('industry_tags_add_button') + '</span>\n' +
        '</fieldset>\n' +
        '<p class="product-name-tag" id="product_hs_tag"></p>\n' +
        '<fieldset class="product-name">\n' +
        '<font>' + unity_lang('industry_tags_bill_no') + '</font>\n' +
        '<input  value="" name="bill_no"/>\n' +
        '</fieldset>\n' +
        '</div>\n' +
        '<div class="trade-tags-box" id="and_supply_box">\n' +
        '<b class="subtitle">' + unity_lang('industry_tags_company_area') + '</b>\n' +
        '<div class="and-supply">\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_buyer_name') + '</font>\n' +
        '<input  name="buyer" value="" type="text" class="clear-target"/>\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt" >×</i>\n' +
        '</fieldset>\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_supplier_name') + '</font>\n' +
        '<input name="seller" value="" type="text"  class="clear-target"/>\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '</div>\n' +
        '<div class="and-supply">\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_purchasing') + '</font>\n' +
        '<input name="buyer_country" value="" type="text" class="clear-target"/>\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_supply') + '</font>\n' +
        '<input name="seller_country" value="" type="text" class="clear-target"/>\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '</div>\n' +
        '<div class="and-supply">\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_origin') + '</font>\n' +
        '<input  name="origin_country" value="" type="text" class="clear-target"/>\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        // '<fieldset>\n' +
        // '<legend>目的国</legend>\n' +
        // '<input name="" type="text"/>\n' +
        // '</fieldset>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="trade-tags-box">\n' +
        '<b class="subtitle">' + unity_lang('industry_tags_port_method') + '</b>\n' +
        '<div class="and-supply">\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_port_export') + '</font>\n' +
        '<input name="seller_port" value="" type="text" class="clear-target"/>\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_port_import') + '</font>\n' +
        '<input name="buyer_port" value="" type="text" class="clear-target"/>\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '</div>\n' +
        '<div class="and-supply">\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_notified') + '</font>\n' +
        '<input name="notify_name" value="" type="text" class="clear-target"/>\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_mod') + '</font>\n' +
        '<input name="trans" value="" type="text"/>\n' +
        '</fieldset>\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="trade-tags-box">\n' +
        '<b class="subtitle">' + unity_lang('industry_tags_wqp') + '</b>\n' +
        '<div class="amount">\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_weight_range') + '</font>\n' +
        '<input name="weight_min" value="" type="text" placeholder="from"/>\n' +
        '<span>—</span>\n' +
        '<input name="weight_max" value="" type="text" placeholder="to"/>\n' +
        '</fieldset>\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_quantity_range') + '</font>\n' +
        '<input name="qty_min" value="" type="text" placeholder="from"/>\n' +
        '<span>—</span>\n' +
        '<input name="qty_max" value="" type="text" placeholder="to"/>\n' +
        '</fieldset>\n' +
        '</div>\n' +
        '<div class="amount">\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_total_range') + '</font>\n' +
        '<input name="amount_min" value="" type="text" placeholder="from" />\n' +
        '<span>—</span>\n' +
        '<input name="amount_max" value="" type="text" placeholder="to" />\n' +
        '</fieldset>\n' +
        '<fieldset>\n' +
        '<font>' + unity_lang('industry_tags_price_range') + '</font>\n' +
        '<input name="uusd_min" value="" type="text" placeholder="from"/>\n' +
        '<span>—</span>\n' +
        '<input name="uusd_max" value="" type="text" placeholder="to"/>\n' +
        '</fieldset>\n' +
        '</div>\n' +
        '</div>\n' +
        '</form>\n' +
        '</div>'
    //#endregion
    new ModelBox({
        content: website_html,
        //内容
        isShow: true, //初始状态
        elemId: 'websiteHtml',
        load: function (that) {

            //某个模块下如果没有html元素显示，则整个模块隐藏
            $.each($('.trade-tags-box'), function () {
                var _that = $(this), $fieldsets = _that.find('fieldset:not(.display-none)')
                if ($fieldsets.length <= 0) {
                    _that.addClass('display-none')
                }
            })

            $('#customs_start_date').dcalendarpicker({
                format: 'yyyy-mm-dd',
                language: {cn:'zh-cn',en: 'us-en'}[_lang],
                disable_keydown: false
            });
            $('#customs_end_date').dcalendarpicker({
                format: 'yyyy-mm-dd',
                language: {cn:'zh-cn',en: 'us-en'}[_lang],
                disable_keydown: false
            });
            that.hs_list = []
            that.des_list = [];
            // 执行回调
            fn(that)
            console.log(that.hs_list)
            //添加hs编码
            $('#hs_add').click(function () {
                if (that.hs_list.length >= 5) return $.alert(unity_lang('industry_tags_hscode_product_tips'))

                var hs_val = $('#hs_text').val().replace(/[^0-9]/g, '')
                $('#hs_text').val(hs_val)
                if (hs_val == '' || hs_val == null) return $.alert(unity_lang('industry_tags_hscode_name_tips'))
                hs_val = Number(hs_val)
                if (that.hs_list.indexOf(hs_val) < 0) {
                    that.hs_list.push(hs_val);
                    $('#tags_form #product_hs_tag').append('<span >' + hs_val + ' <font data-value="' + hs_val + '">&#10006</font></span>')
                    $('#hs_text').val('')
                }
            })
            $(document).on('click', '#product_hs_tag span font', function () {
                that.hs_list.removeVal(Number($(this).data('value')))
                console.log(that.hs_list)
                $(this).parents('span').remove()
            })
            //添加产品名
            $('#product_add').click(function () {
                if (that.des_list.length >= 5) return $.alert(unity_lang('industry_tags_hscode_product_tips'))
                var des_val = $('#product_text').val()
                if (des_val == '' || des_val == null) return $.alert(unity_lang('industry_tags_product_name_tips'))
                if (that.des_list.indexOf(des_val) < 0) {
                    that.des_list.push(des_val.toString());
                    $('#tags_form #product_list').append('<span >' + des_val + ' <font data-value="' + des_val + '">&#10006</font></span>')
                    $('#product_text').val('')
                }
            })
            $(document).on('click', '#product_list span font', function () {
                let _val = $(this).data('value').toString()
                that.des_list.removeVal(_val)
                $(this).parents('span').remove()
            })
            $(document).on('change', '#tags_form [name="date_type"]', function () {
                tag_ie_dt_select(Number($('#tags_form [name="ie"]').val()), Number($(this).val()))
            })

            $('#tag_ie_dropdown').wdropdown({
                selected: function (e) {
                    var _ie = Number(e.value)
                    $('#tags_form [name="ie"]').val(_ie)
                    tag_ie_dt_select(_ie, Number($('#tags_form [name="date_type"]:checked').val()))
                }
            })
            //清除
            $('#customs_tags_clear').click(function () {
                $(':input', '#tags_form')
                    .not(':button, :submit, :reset')
                    .val('')
                $('#product_list').html('')
                $('#product_hs_tag').html('')
            })
        }
    })
}


/*添加标签*/
function add_customs_tags(side) {
    if (!$('[name="tag_name"]').val()) return $.alert(unity_lang('industry_tags_add_tips'))

    $('#tags_form [name="des"]').val(side.des_list.join('|'))
    $('#tags_form [name="hs"]').val(side.hs_list.join('|'))
    var params = $('#tags_form').serializeObject()
    params['country'] = default_params.country
    let has_st = false
    $.each(params, function (a, b){
        if(a == 'ie'|| a == 'end_date'|| a == 'start_date'|| a == 'country'|| a == 'tag_id'|| a == 'date_type'|| a == 'tag_name' || !a) return true
        if(b == '*' || b == '' || b==null || b == undefined) return true
        if(Number(b) <=0) return true
        has_st = true
        return false
    })
    if (!has_st) return $.alert(unity_lang('industry_tags_create_tips'))
    // return false
    $.ajax('/async/raw/trade-tags/tags', {
        datatype: 'text/json',
        type: 'post',
        data: params,
        success: function (result) {
            if (result.state == '0') {
                // 加载并选中
                init_tags(result.data.id)
                side.hide()
                return false
            }
            if (result.state == 1001) return $.alert(unity_lang('industry_tags_tips_parameters'))
            if (result.state == 1000) return $.alert(unity_lang('industry_tags_create_tips'))
            $.alert(result.message)
        }
    })
}


function change_customs_tags(tag_id, side) {
    if (side.des_list.length <= 0 && side.hs_list.length <= 0) return $.alert(unity_lang('industry_tags_create_tips'))
    $('#tags_form [name="des"]').val(side.des_list.join('|'))
    $('#tags_form [name="hs"]').val(side.hs_list.join('|'))
    var params = $('#tags_form').serializeObject()
    params['tag_id'] = tag_id
    params['country'] = default_params.country
    $.ajax('/async/raw/trade-tags/tags/change', {
        datatype: 'text/json',
        type: 'post',
        data: params,
        success: function (result) {
            if (result.state == 0) {
                init_tags(null, null, checked_tag_id)
                return side.hide()
            }
            if (result.state == 1000) $.alert(unity_lang('industry_tags_create_tips'))
            if (result.state == 1001) $.alert(unity_lang('industry_tags_tips_parameters'))
            $.alert(result.message)
        }
    })
}

/*侧拉提单详情*/
function bill_detail(elem) {

    raw_unity_authority('yd', function (){
        var id = $(elem).data("billid"), date = $.formatDate(new Date($(elem).data('date')))
        new ModelBox({
            content: '<div class="company-label-head"><h2>' + unity_lang('bill_detail') + '</h2></div>\n' +
                '<div class="bill-data-list-box"><div class="bill-list-box" id="trade_detail"></div></div>',
            //内容
            isShow: true, //初始状态
            elemId: 'raw_bill_detail',
            load: function (that) {
                $("#trade_detail").html('<p style="text-align:center;color:#666;font-size:12.4px;padding-top:90px;"><img src="https://static.52wmb.com/wmb_new/images/loading_dian.gif"/><br/>' + unity_lang('data_loading') + '</p>')
                $.ajax('/async/raw/bill/detail', {
                    datatype: 'text/json',
                    type: 'get',
                    data: {id: id, ie: data_ie, trade_date: date, country: default_params.country, ptoken: $('#ptoken').val()},
                    success: function (result) {
                        if(result.state == 3001) return
                        if (result.state != 0) return $.alert(result.message)
                        var data = result.data || {}, detail = data.detail, raw = data.raw, title = data.title
                        if (raw == 1) return build_raw_detail(detail, title)
                        build_trade_detail(detail)
                    }
                })
            }
        })
    })
}

/**
 * 原始海关提单详情
 */
function build_raw_detail(detail, title) {
    $('#trade_detail').html('<table border="0" cellpadding="0" cellspacing="1"><tbody></tbody></table>')
    let _tds = '', col = 0, max_col = 2

    $.each(title, function (index, values) {
        var detail_module_id = values.detail_module_id, $m = $('tr.module-' + detail_module_id),
            child_titles = values.child_titles || [], detail_values = detail[values.field_title];
        // 构建模块title
        if ($m.length <= 0 && values.detail_module_name) {
            // 如果上一个模块还存在数据，则先拼接
            if (_tds) $('#trade_detail tbody').append('<tr class="' + (col > 0 ? 'complete' : '') + '">' + _tds + '</tr>')
            // 拼接新的模块
            $('#trade_detail tbody').append('<tr class="kb"><td colspan="4"></td></tr><tr class="title module-' + detail_module_id + '"><td height="21" colspan="4"><strong>' + values.detail_module_name + '</strong></td></tr>')
            col = 0
            _tds = ''
        }

        if(values.is_mark) return true
        if (child_titles.length > 0 && detail_values) {
            if (_tds) {
                $('#trade_detail tbody').append('<tr class="' + (col > 0 ? 'complete' : '') + '">' + _tds + '</tr>')
                _tds = ''
            }

            try {
                if (typeof detail_values == 'string') detail_values = JSON.parse('[' + detail_values + ']')

                let child_table = '<table class="child-table"><tr class="ct-title">'
                $.each(child_titles, function () {
                    child_table += '<td>' + this.field_des + '</td>'
                })
                child_table += '<tr>'
                $.each(detail_values, function () {
                    let _v = this
                    child_table += '<tr>'
                    $.each(child_titles, function () {
                        child_table += '<td>' + (_v[this.field_title] || '--') + '</td>'
                    })
                    child_table += '</tr>'
                })
                child_table += '</table>'
                _tds += '<td colspan="4">' + child_table + '</td>'

            } catch (e) {
            }
            col = 0
        } else if(values.detail_is_row == 1) {
            if (_tds) $('#trade_detail tbody').append('<tr class="complete">' + _tds + '</tr>')
            $('#trade_detail tbody').append('<tr class="complete"><td class="field">' + values.field_des + '</td><td class="value">' + (detail_values || '--') + '</td></tr>')
            col = 0
            _tds = ''
        }else {
            _tds += '<td class="field">' + values.field_des + '</td><td class="value">' + (detail_values || '--') + '</td>'
            col += 1
        }
        if (col >= max_col) {
            $('#trade_detail tbody').append('<tr>' + _tds + '</tr>')
            col = 0
            _tds = ''
        }
    })

    if (_tds){
        $('#trade_detail tbody').append('<tr>' + _tds + '</tr>')
    }

    $('#trade_detail .complete td.value').attr('colspan', 3)
}

    /**
 * 提单详情
 */
function build_trade_detail(detail) {
    $('#trade_detail').html('<ul class="bill-list">\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_date') + '</span>\n' +
        '<span class="bill-con">' + (detail.date || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_number') + '</span>\n' +
        '<span class="bill-con">' + (detail.bill_no || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_buyer') + '</span>\n' +
        '<span class="bill-con">' + (detail.buyer || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_supplier') + '</span>\n' +
        '<span class="bill-con">' + (detail.seller || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_purchasing_area') + '</span>\n' +
        '<span class="bill-con">' + (detail.buyer_country || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_supply_area') + '</span>\n' +
        '<span class="bill-con">' + (detail.seller_country || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_product') + '</span>\n' +
        '<span class="bill-con">' + (detail.descript || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_hscode') + '</span>\n' +
        '<span class="bill-con">' + (detail.hs || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_quanty') + '</span>\n' +
        '<span class="bill-con">' + (detail.qty || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_weight') + '</span>\n' +
        '<span class="bill-con">' + (detail.weight || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_poe') + '</span>\n' +
        '<span class="bill-con">' + (detail.seller_port || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_poi') + '</span>\n' +
        '<span class="bill-con">' + (detail.buyer_port || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_methods') + '</span>\n' +
        '<span class="bill-con">' + (detail.trans || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('bill_notified') + '</span>\n' +
        '<span class="bill-con">' + (detail.notify_name || '--') + '</span>\n' +
        '</li>\n' +
        '</ul></div></div>')
}

/*首字母大写*/
function capitalize(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

/*给from表单赋值*/
function loadData(obj) {
    $('#search_from [name]').not('[name="ie"]').each(function () {
        var $this = $(this), name = this.name, type = this.type, value = obj[name]
        if (type == 'text' || type == 'hidden') {
            $this.val(value ? value : '')
        }
    })
}

/**
 * 获取下载权限
 */
function verify_download_pers() {
    $.wModel(function (side) {
        $.ajax('/async/export/pers', {
            datatype: 'text/json',
            type: 'get',
            data: {export_type: 3},
            success: function (result) {
                if (result.state == 0) {
                    var data = result.data
                    if (data.day_can_count <= 0) {
                        $.alert(unity_lang('export_over'))
                        return false
                    }
                    side_download(data, side)
                    return false
                }
                if (result.state == 1001) {
                    $.alert(unity_lang('export_no_export'))
                    return false
                }

                $.alert(result.message)
            }
        })
    })
}

/**
 * 侧拉下载框
 * @param data
 */
function side_download(data, side) {
    side.changeContent('<div class="company-label-head"><h2>' + unity_lang('export_data') + '</h2><span class="count-left" data-day-count="' + data.day_can_count + '">' + unity_lang('export_left') + data.day_can_count + '</span></div>\n' +
        '<div class="trade-download-search">' +
        '<div class="label-moudle">' +
        '<div class="form-time-select"><h3>' + unity_lang('export_trade_time') + '</h3><span>' +
        '<input type="text" class="form-control" autocomplete="off" id="download_date_start" placeholder="' + unity_lang('export_trade_star') + '"></span><font>-</font>' +
        '<span><input type="text" class="form-control" autocomplete="off" id="download_date_end" placeholder="' + unity_lang('export_trade_end') + '"></span>' +
        '<span><a class="get-bill" onclick="get_download_count(this)">' + unity_lang('export_search') + '</a></span></div>' +
        '<div class="source-select display-none">' +
        '<label><b>' + unity_lang('export_data_new') + '</b></span>' +
        '<input type="radio" id="new_data_source"  value="1" name="is_new"></label>' +
        '<label><b>' + unity_lang('export_data_old') + '</b></span>' +
        '<input type="radio" id="old_data_source" value="0" name="is_new"></label></div>' +
        '<div class="form-tips"><p>' + unity_lang('export_data_update') + countries[raw_date_field[data_ie]] + '</p>' +
        '<p>' + unity_lang('export_search_tips') + '</p>' +
        '<p class="download-count display-none"></p>' +
        '<button class="goum-dclxfs" id="btn_trade_download" disabled="disabled">' + unity_lang('export_export') + '</button><br/>' +
        '<span class="curr-download-count display-none"></span>' +
        '<span class="download-bill-page-tips display-none"></span>' +
        '</div>' +
        '</div></div>')

    var $start = $('#download_date_start'), $end = $('#download_date_end'),
        _format = {cn: 'yyyy-mm-dd', en: 'yyyy-mm-dd'}[_lang],
        vmode = 'days';

    if (default_params.country === 'philippines') {
        _format = {cn: 'yyyy-mm', en: 'yyyy-mm'}[_lang];
        vmode = 'months'
    }
    var download_end = countries[raw_date_field[data_ie]];
    var maxdate = new Date(download_end).date_format(_format)
    /*时间选择器*/
    $start.data('maxdate', maxdate).val(maxdate).dcalendarpicker({
        format: _format,
        language: {cn:'zh-cn',en: 'us-en'}[_lang],
        disable_keydown: false,
        lastViewMode: vmode
    }).on('dateselected', function (e) {
        download_date_select(e.date)
    });
    $end.data('maxdate', maxdate).val(maxdate).dcalendarpicker({
        format: _format,
        language: {cn:'zh-cn',en: 'us-en'}[_lang],
        disable_keydown: false,
        lastViewMode: vmode
    });
}

/**
 * 下载数据选中时间时判断是否有新数据源（目前是巴基斯坦国家）
 * @param date
 */
function download_date_select(date) {
    $('.source-select').addClass('display-none')
    $('[name="is_new"]').prop('checked', false)
    if (default_params.country != 'pakistan') return false;
    try {

        // 选中了老数据，则提示筛选数据源下载
        if (new Date(date).getTime() <= pk_last_list[data_ie].getTime()) {
            $('.source-select').removeClass('display-none')
        } else {
            $('#new_data_source').prop('checked', true)
        }
    } catch (e) {
        console.log(e.message)
    }
}

/**
 * 获取下载条数
 */
function get_download_count() {
    var $btn_trade_download = $('#btn_trade_download')
    $btn_trade_download.attr('disabled', 'disabled').removeClass('active').removeAttr('onclick')
    $('.download-bill-page-tips').html('').addClass('display-none')
    $('.download-count').html('').addClass('display-none')
    $('.curr-download-count').html('').addClass('display-none')
    download_params_verify(function (params, days) {
        $.ajax('/async/raw/trade-export/trade/count', {
            datatype: 'text/json',
            type: 'get',
            data: params,
            success: function (result) {
                var data = result.data || {}, count = data.count || 0;
                //$('.download-count').html('共计<font>' + count + '</font>条提单符合搜索条件').removeClass('display-none')
                $('.download-count').html(replaceKey(unity_lang('export_data_bill'), '[@数量]', count)).removeClass('display-none')


                if (count <= 500 || days == 0) {
                    var size = Math.min(count, 500)
                    load_js_file('JSONToExcelConvertor', function () {
                        $btn_trade_download.data('size', size).data('last-bill', '').addClass('active').removeAttr('disabled').attr('onclick', 'download_bill(this)')
                    })
                }
            }
        })
    })
}

/**
 * 下载提单
 * @param elem
 */
function download_bill(elem) {
    var last_bill = $(elem).data('last-bill'), size = $(elem).data('size') || 500,
        $btn_trade_download = $('#btn_trade_download')
    $btn_trade_download.attr('disabled', 'disabled').remove('active').removeAttr('onclick').html(unity_lang('export_exporting'))
    download_params_verify(function (params) {
        params['last_bill'] = last_bill
        params['size'] = size
        $.ajax('/async/raw/trade-export/trade', {
            datatype: 'text/json',
            type: 'get',
            data: params,
            success: function (result) {
                if (result.state == 0) {
                    var data = result.data || {}, hits = data.hits || 0, max_bill = data.max_bill || '',
                        total_bill = data.total_bill || 0, //本次查询的总提单数
                        official_count = data.official_count || 0,  // 实际下载条数
                        _list = data.list || [], title = data.title || [],
                        file_name = data.file_name;
                    if (_list.length > 0) {
                        $('.curr-download-count').html(replaceKey(unity_lang('export_data_bill'), '[@数量]', total_bill) + official_count).removeClass('display-none')
                        //下载数据
                        JSONToExcelConvertor(file_name, function (fn) {
                            _list.forEach(function (v, i) {
                                var row = "";
                                title.forEach(function (fv, _) {
                                    if (fv.is_mark !== 1) {
                                        row += "<td align='center'>" + v[fv.field_title] + "</td>";
                                    }
                                })
                                if (row) {
                                    fn('<tr>' + row + '</tr>')
                                }
                            })
                        }, function (fn) {
                            title.forEach(function (values, index) {
                                if (values.is_mark !== 1) {
                                    fn(values.field_des)
                                }
                            })
                        });
                    }
                    //判断是否有下一批数据
                    var rem_count = hits - total_bill  // 剩余下载次数
                    var size = Math.min(rem_count, 500)
                    if (size > 0) {
                        $('.download-bill-page-tips').html(',' + unity_lang('export_left_other') + rem_count).removeClass('display-none')
                        $btn_trade_download.data('last-bill', max_bill).data('size', size).removeAttr('disabled').addClass('active').attr('onclick', 'download_bill(this)').html(unity_lang('export_export'))
                    } else {
                        $btn_trade_download.removeClass('active').html(unity_lang('export_export'))
                        $('.download-bill-page-tips').html(unity_lang('export_data_bill_export')).removeClass('display-none')
                    }
                    return false
                }
                $.alert(result.message)
            }
        })
    })
}

/**
 * 下载提单参数验证
 * @param fn
 * @returns {boolean}
 */
function download_params_verify(fn) {
    if (!download_verify()) return false
    var start_date = $('#download_date_start').val(), end_date = $('#download_date_end').val()

    if (!(start_date && end_date)) {
        $.alert(unity_lang('download_time_select'))
        return false
    }
    var _st = new Date(start_date), _et = new Date(end_date)
    var days = (_et - _st) / (1000 * 60 * 60 * 24)
    if (days < 0) {
        $.alert(unity_lang('download_time_select_tips'))
        return false
    }
    if (days > 366) {
        $.alert(unity_lang('download_time_over'))
        return false
    }
    var is_new = $('[name="is_new"]:checked').val()
    if (!$('.source-select').hasClass('display-none') && (is_new == null || is_new == '')) {
        $.alert(unity_lang('download_data_source'));
        return false
    }
    var params = $.extend({}, search_params, false)
    params['start_date'] = $.formatDate(_st)
    params['end_date'] = $.formatDate(_et)
    params['new_source'] = is_new
    fn(params, days)
}

/**
 * 下载验证
 * @returns {boolean}
 */
function download_verify() {
    var params = $.extend({}, search_params, false), is_down_load = false
    delete params.ie
    delete params.country
    delete params.start_date
    delete params.end_date
    $.each(params, function (k, v) {
        if (v != null && v != 'undefined' && v != '' && v != '*' && v != '0') {
            is_down_load = true
            return false
        }
    })
    return is_down_load
}

function company_item_download(field, file_name, fn) {
    if (!company_types_info[field]) {
        unity_child_perms('stats_download', fn)
        return
    }
    var $table = $('#table_' + field + ' tbody tr')
    $.ajax('/async/export/company/item', {
        datatype: 'text/json',
        type: 'post',
        data: {file_name: encodeURIComponent(file_name), size: $table.length},
        success: function (result) {
            if (result.state == 0) return fn()
            $.alert(result.message)
        }
    })
}

var collect_box = $('.collect-box')
var right_box = $('.industry-tags-box')
var operate_box = $('.module-content ').height()
var left_meau = $('.report-tab')
var offset_top = $('.module-content').offset().top + operate_box;
var lfet_meau_height = $('.report-tab').offset().top
// var bang_classroom = $("#bang_classroom")
// var right_bang_classroom = bang_classroom.offset().top + bang_classroom.height()
// console.log(right_bang_classroom, 'right_bang_classroom')


$(window).on('scroll', function () {
    var top = $(window).scrollTop();
    if (top > offset_top) {
        collect_box.addClass("load");
        right_box.addClass("load-tags-box");
    }
    if (top < offset_top) {
        collect_box.removeClass("load");
        right_box.removeClass("load-tags-box");
    }
//    if (top > lfet_meau_height) {
//        left_meau.css("position", 'fixed');
//        left_meau.css("top", '0px');
//        left_meau.css("z-index", 9);
//        left_meau.css("background-color", '#fff');
//        left_meau.css("width", '900px');
//    } else {
//        left_meau.css("position", 'static');
//    }


})


