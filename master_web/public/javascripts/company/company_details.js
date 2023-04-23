/*
 * @Description:
 * @Version: 1.0
 * @Autor: Cong
 * @Date: 2021-12-24 13:05:58
 * @LastEditors: Cong
 * @LastEditTime: 2021-12-27 18:20:44
 */


// 公司详情 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'share_text_create': {cn: '创建标签', en: 'Create Tags'},
    'share_text_more': {cn: '更多', en: 'More'},
    'detail_share_new': {cn: '新增', en: 'New'},
    'detail_share_wastage': {cn: '流失', en: 'Lost'},
    'detail_share_supplier': {cn: '供应商', en: 'Supplier'},
    'detail_share_buyer': {cn: '采购商', en: 'Buyer'},
    'report_no_date': {cn: '查无数据', en: 'No data available'},

    'detail_pingbi_visitor_tips': {cn: '注册用户登陆后查阅', en: 'Users can check after logging in'},
    'detail_pingbi_register_tips': {cn: '付费用户有查阅权限', en: 'The paid users can check'},
    'detail_pingbi_vip_tips': {cn: '今日已查阅200家公司', en: '200 companies have been accessed today'},
    'detail_pingbi_login': {cn: '会员登陆', en: 'Login now'},
    'detail_pingbi_register': {cn: '免费注册', en: 'Register for free'},
    'detail_pingbi_buy': {cn: '购买会员', en: 'Buy now'},
    'detail_pingbi_upgrade': {cn: '升级会员', en: 'Upgrade'},
    'detail_pingbi_rights': {cn: '会员权限', en: 'Permission'},

    'detail_data_progress': {cn: '数据查询中...', en: 'cheking...'},
    'detail_data_clear': {cn: '取消收藏', en: 'Clear'},
    'detail_data_collect': {cn: '收藏公司', en: 'Collect'},
    'detail_data_previous': {cn: '上一页', en: 'Previous'},
    'detail_data_next': {cn: '下一页', en: 'Next'},
    'detail_data_loading': {cn: '加载中', en: 'loading...'},

    'detail_tags_products_title': {cn: '公司产品标签', en: 'Company product labels'},
    'detail_tags_library': {cn: '标签库', en: 'Tag library'},
    'detail_tags_all': {cn: '全部', en: 'All'},
    'detail_tags_official': {cn: '官方标记', en: 'Official marks'},
    'detail_tags_customization': {cn: '自定义', en: 'Customization'},
    'detail_tags_total': {cn: '共计', en: 'Total '},
    'detail_tags_no_total': {cn: '当前板块无数据，去标签库关联', en: 'No data on current board, go to tag library association'},
    'detail_tags_transactions': {cn: '交易', en: ' transactions'},
    'detail_tags_percentage': {cn: '占比', en: 'Proportion '},
    'detail_tags_login_todo': {cn: '请登录后操作', en: 'Please login to operate'},
    'detail_tags_no_related': {cn: '尚无关联的标签', en: 'No related label'},
    'detail_tags_no_content': {cn: '当前板块无内容', en: 'No content'},
    'detail_tags_list_labels': {cn: '公司关联标签列表', en: 'Associated label list'},

    'label_create': {cn: '创建标签', en: 'Create a label'},
    'label_create_tips': {cn: '请输入一个标签名', en: 'Please enter a label name'},
    'label_create_key_tips': {cn: '至少输入一个关键词', en: 'Enter at least one keyword'},
    'label_edit': {cn: '编辑', en: 'Edit'},
    'label_save': {cn: '保存', en: 'Save'},
    'label_clear': {cn: '清空', en: 'Clear'},
    'label_name_enter': {cn: '输入标签名称', en: 'Enter label name'},
    'label_name_enter_tips': {
        cn: '标签的名称可以是任意文字或符号，只要有利于您的记忆。',
        en: 'The name of the label can be any word or symbol, as long as it facilitates your memory.'
    },
    'label_tags_add': {cn: '添加产品或HS编码', en: 'Add a product or HS code'},
    'label_tags_add_button': {cn: '添加标签', en: 'Add tags'},
    'label_tags_add_tips_one': {
        cn: '1、支持产品关键字(英文)和HS编码(纯数字)的输入，每次只能添加一个产品或一个HS编码。',
        en: '1. Support the input of product keywords (English) and HS codes (pure numbers), only one product or one HS code can be added at a time.'
    },
    'label_tags_add_tips_two': {
        cn: '2、目前支持3组录入，务必注意关键词拼写和编码输入的正确，以免影响报告的准确性。',
        en: '2. Currently, 3 groups of entries are supported. Be sure to input correct keywords and HS code to generate a accurate report.'
    },
    'label_tags_add_alert': {cn: '最多添加3个关键词', en: 'Up to 3 keywords can be added'},
    'label_tags_add_keywords': {cn: '请输入关键词', en: 'Please enter a keyword'},
    'label_tags_add_keywords_re': {cn: '已存在，请重新输入', en: ' already exists, please re-enter'},


    'detail_contact_person': {cn: '联系人', en: 'Contact person'},
    'detail_contact_tex': {cn: '联系电话', en: 'Telephone'},
    'detail_contact_fax': {cn: '传真', en: 'Fax'},
    'detail_contact_mail': {cn: '邮箱', en: 'E-mail'},
    'detail_contact_copy': {cn: '复制', en: 'Copy'},
    'detail_contact_address': {cn: '公司地址', en: 'Address'},
    'detail_contact_site': {cn: '公司官网', en: 'Website'},
    'label_del_success': {cn: '删除成功', en: 'Deleted successfully'},
    'label_operation_excet': {cn: '操作异常', en: 'Operation exceptions'},
    'detail_contact_copy_lable': {cn: '已复制成功', en: 'Copied successfully'},
    'detail_transactionst': {cn: '交易次数', en: 'Transactions'},
    'detail_quantity': {cn: '交易数量', en: 'Quantity'},
    'detail_weight': {cn: '交易重量', en: 'Weight'},
    
    'detail_description': {
        cn: '该公司最近两年采购[@产品]的交易共计[@数量]笔，占该公司总交易的[@占比]%，最近采供[@产品]交易日期在[@日期],[@产品]是该公司的主营产品之一。',
        en: 'The company has purchased a total of [@数量] transactions related to [@产品] in the last two years, accounting for [@占比]% of the its total transactions, the last transaction of [@产品] is [@日期], [@产品] is one of its main products.'
    },
    'detail_no_data': {cn: '无数据', en: 'No data available'},

    'detail_module_bill_date': {cn: '交易日期', en: 'Transaction date'},
    'detail_module_bill_last_date': {cn: '最新交易日期', en: 'Last Transaction date'},
    'detail_module_bill_number': {cn: '提单编号', en: 'B/L No.'},
    'detail_module_bill_supplier': {cn: '供应商', en: 'Supplier'},
    'detail_module_bill_buyer': {cn: '采购商', en: 'Buyers'},
    'detail_module_bill_export_port': {cn: '出口港', en: 'POL'},
    'detail_module_bill_import_port': {cn: '进口港', en: 'POD'},
    'detail_module_bill_trade_port': {cn: '贸易港口', en: 'Trade Port'},
    'detail_module_bill_export_area': {cn: '供应区', en: 'Export area'},
    'detail_module_bill_import_area': {cn: '采购区', en: 'Import area'},
    'detail_module_bill_quantity': {cn: '数量', en: 'Quantity'},
    'detail_module_bill_amount': {cn: '金额', en: 'Amount'},
    'detail_module_bill_product': {cn: '产品描述', en: 'Product description'},
    'detail_module_bill_method': {cn: '运输方式', en: 'Shipping methods'},
    'detail_module_bill_weight': {cn: '重量', en: 'Weight'},
    'detail_module_bill_total_price': {cn: '总价', en: 'Total price'},
    'detail_module_bill_total_unit_price': {cn: '单价', en: 'Unit price'},
    'detail_module_bill_product_tags': {cn: '产品标签', en: 'Product tags'},
    'detail_module_bill_person': {cn: '联系人', en: 'Contact person'},
    'detail_module_bill_hscode': {cn: 'HS编码', en: 'HS code'},
    'detail_module_bill_translate': {cn: '翻译', en: 'translate'},
    'detail_module_bill_translate_ing': {cn: '翻译中...', en: 'Translating...'},
    'detail_module_bill_translate_vip': {cn: 'VIP用户权限', en: 'VIP user rights'},
    'detail_trade_partner_type': {cn: {0: '采购商', 1: '供应商',}, en: {0: 'buyer', 1: ' supplier'}},
    'detail_trade_partner_deadline': {cn: '双方于[@结束时间]有最新交易', en: 'Both parties have the latest transaction on[@结束时间] '},
    'detail_activity_value': {cn: '活跃值', en: 'Active value'},

    'detail_module_partners_rank': {cn: '排名', en: 'Rank'},
    'detail_module_transactions': {cn: '交易数', en: 'Transactions'},
    'detail_module_percentage': {cn: '交易占比', en: 'Proportion'},
    'detail_module_detail': {cn: '详情', en: 'Details'},
    'detail_module_detail_enter': {cn: '完整报告', en: 'Full Reports'},
    'detail_module_company_name': {cn: '公司名称', en: 'Company'},
    'detail_module_hscode_name': {cn: 'HS编码', en: 'HS code'},
    'detail_module_area_name': {cn: '区域名称', en: 'Area'},
    'detail_module_port_name': {cn: '港口名称', en: 'Port'},
    'detail_module_product_name': {cn: '产品名称', en: 'Product'},


    'detail_industry_title': {cn: '行业报告', en: ' Industry Reports'},
    'detail_industry_des': {
        cn: '以下市场分析报告基于[@开始时间]至[@结束时间]进口数据,而创建的关于当前公司的分析报告；您可以通过完整的数据分析报告进一步深度研究[@产品]进出口市场的特点、趋势。',
        en: 'The following market analysis report is created according to import data from [@开始时间] to [@结束时间] of the current company; you can do further study about the characteristics and trends of the [@产品].'
    },
    'detail_industry_rank': {cn: '公司排名', en: 'Ranking'},
    'detail_industry_transactions': {cn: '该公司交易', en: 'Transactions'},
    'detail_industry_partners': {cn: '贸易伙伴', en: 'Partners'},
    'detail_industry_ports': {cn: '贸易港口', en: 'Trade Ports'},
    'detail_industry_current': {cn: '当前公司', en: 'Current'},
    'detail_industry_error': {cn: '查询异常，请联系我门', en: 'Query exception, please contact us'},

    'detail_module_partner': {cn: '[@国家][@公司属性],双方于[@日期]有最新交易。', en: '[@国家] [@公司属性], they trade on [@日期].'},
    'detail_module_search_partner': {cn: '支持公司名、国家搜索', en: 'Support for company name and country search'},
    'detail_module_search_hscode': {cn: '支持HS编码搜索', en: 'Support for HS code search'},
    'detail_module_search_area': {cn: '支持国家区域名称搜索', en: 'Support for region search'},
    'detail_module_search_port': {cn: '支持港口名称搜索', en: 'Support for port name search'},
    'detail_module_search_product': {cn: '支持产品名称搜索', en: 'Support for product keywords search'},
    'detail_module_loading': {cn: '加载中...', en: 'loading...'},

    'detail_cela_title': {cn: '贸易记录', en: 'Trade records'},
    'detail_cela_trend_chart': {cn: '贸易趋势图', en: 'Trade Trend Chart'},
    'detail_cela_scope': {cn: '范围', en: 'Scope'},
    'detail_cela_search': {cn: '搜索', en: 'Search'},
    'detail_cela_description': {
        cn: '双方共计有[@数量]笔交易记录，占该司总交易的[@占比]%',
        en: 'They have total [@数量] transactions, representing [@占比] of transactions'
    },
    'detail_cela_alldate': {cn: '所有时间', en: 'All date'},
    'detail_cela_transactions': {cn: '笔交易', en: 'Transactions'},

    'detail_export': {cn: '共计[@数量]条提单符合搜索条件', en: 'Total [@数量] B/Ls matches'},
    'detail_export_left': {cn: '剩余', en: 'Left '},
    'detail_export_have': {cn: '当前查询条件下数据已导出', en: 'The data you are checking has been exported'},
    'detail_export_current': {cn: '当前导出', en: 'Current Export'},


    'detail_mail_title': {cn: '自带邮箱采集工具', en: 'Free email collection tool'},
    'detail_mail_recapture': {cn: '重新采集', en: 'Recollect'},
    'detail_mail_export': {cn: '导出邮箱', en: 'Export'},
    'detail_mail_total': {cn: '共采集<font class="email-count"></font>个邮箱', en: '<font class="email-count"></font> mailboxes were collected'},
    'detail_mail_des': {cn: '快速采集该公司在全网索引中的邮箱地址', en: 'Quickly collect company email address in the web-wide index'},
    'detail_mail_website': {cn: '抓取官方网址', en: 'Crawl the official website'},
    'detail_mail_collection_website': {cn: '采集官网', en: 'Collec official websites'},
    'detail_mail_collection_recommend': {cn: '官方推荐', en: 'Recommend'},
    'detail_mail_user_input': {cn: '用户输入', en: 'User input'},
    'detail_mail_collection_caught': {cn: '已抓取', en: 'Crawled'},
    'detail_mail_site_check': {
        cn: '请从以下提供的网址中，确认官网！',
        en: 'Please select the official website from the following URL!'
    },
    'detail_mail_site_enter': {cn: '手动输入网址', en: 'Manually enter the URL'},
    'detail_mail_collection_check': {cn: '确认采集', en: 'Collect'},
    'detail_mail_clear_all': {cn: '清除所有', en: 'Clear all'},
    'detail_mail_collection_list': {cn: '网址采集列表', en: 'URL List'},
    'detail_mail_collection_progress': {cn: '添加采集中...', en: 'Adding collection...'},
    'detail_mail_collection_in_progress': {cn: '采集中,请等待...', en: 'Collecting, please wait...'},
    'detail_mail_collection_error': {cn: '采集任务添加失败', en: 'Failed to add a collection task'},
    'detail_mail_go_back': {cn: '返回上一页', en: 'Back to previous page'},
    'detail_mail_please_recapture': {cn: '没有任何邮箱,切换网址重新采集', en: 'No result, switch another URL to re-collect'},
    'detail_mail_linkedin': {cn: '来自领英', en: 'Come From Linkedin'},
    'detail_mail_web': {cn: '来自搜索引擎', en: 'Web'},
    'detail_mail_collection': {cn: '采集邮箱', en: 'Collect Email'},
    'detail_mail_name': {cn: '邮箱', en: 'E-mail'},

    'detail_contact_title': {cn: '参考联系方式', en: 'Reference contact info'},
    'detail_contact_more': {cn: '更多精准邮箱', en: 'More precise emails'},

    'no_right': {cn: '暂无权限，可向主账号申请此权限。', en: 'Request permission from main account.'},
}

/**概述页筛选信息**/
let reftoken = $('meta[name="reftoken"]').attr('content')
var company_details = $(".details-head").data('company-details')
var company_bill_count = company_details.bill_count
var default_params = {
    id: company_details.id,
    company_type: company_details.type,
    end_time: company_details.last_trade_date,
    last_trade_date: company_details.last_trade_date,
    country: company_details.country_en,
    key: '*',
    product: '*',
    sort: 'default',
    start_time: '**',
    seo_flag: 0,
    is_page: true,
    start: 0,
    size: 5,
    tag_id: 0,
    reftoken: reftoken
}
var filtrate_params = $.extend({}, default_params, false)
var company_end_time = new Date(company_details.last_trade_date.replace(/-/g, "/"))

var new_data = new Date(company_details.last_trade_date.replace(/-/g, "/"))
new_data = new_data.setFullYear(new_data.getFullYear() - 1)
var start = new Date(new_data), start_time = $.formatDate(start);
var user = wg.user || null
var analyse_state = ['', '<span class="partner-tag-new">' + unity_lang('detail_share_new') + '</span>', '<span class="partner-tag">' + unity_lang('detail_share_wastage') + '</span>'],
    partner_route = ['supplier', 'buyer'][company_details.type],
    partner_type_des = ['' + unity_lang('detail_share_supplier') + '', '' + unity_lang('detail_share_buyer') + ''][company_details.type]

var mask_opt = {
    login: {
        icon: 0,
        content: '<span>' + unity_lang('detail_pingbi_visitor_tips') + '</span>' +
            '<a href="/login" onclick="return referrer_link(this, \'detail\')" target="_self" class="link-rb">' + unity_lang('detail_pingbi_login') + '</a>' +
            '<a href="/register" onclick="return referrer_link(this, \'detail\')" class="link-rb">' + unity_lang('detail_pingbi_register') + '</a>'
    },
    ordinary: {
        icon: 1,
        content: '<span>' + unity_lang('detail_pingbi_register_tips') + '</span>' +
            '<a href="/Alipay?v=v"  target="_blank" class="link-rb">' + unity_lang('detail_pingbi_buy') + '</a>' +
            '<a href="/loft_HD" target="_blank" class="link-rb">' + unity_lang('detail_pingbi_rights') + '</a>'
    },
    vip: {
        icon: 1,
        content: '<span>' + unity_lang('detail_pingbi_vip_tips') + '</span>' +
            '<a href="/Alipay?v=bd"  target="_blank" class="link-rb">' + unity_lang('detail_pingbi_upgrade') + '</a>' +
            '<a href="/loft_HD" target="_blank" class="link-rb">' + unity_lang('detail_pingbi_rights') + '</a>'
    }
}
let gpop_mark = company_details.perms  ? '' : 'company_lock', _company_tag = '*';
$(function () {
    get_applets_code()
    left_meau_authority()
    dim_trends()
    // website_top()
    var _country_list = $("#countries").data('countries'), first_map_chart_list = [];
    if (_country_list) {
        try {
            _country_list = _country_list instanceof Array ? _country_list : JSON.parse(_country_list)
            first_map_chart_list = _country_list.map((item) => {
                return {
                    name: capitalize(item.country),
                    value: item.prop
                }
            })
            trade_area_map(first_map_chart_list)
        } catch (e) {

        }
    }

    $('#analysis').hide()

    $('.detail-tab-more').click(function () {
        $($(this).data('target')).click()
    })
    $(document).on('change', '[name="tag_check"]', function () {
        wpull.closeAll()
        var field = $(this).data('field'), value = $(this).val(), show = $(this).data('show')
        var $existed = $('.sousou-screen p a[data-field="' + field + '"][data-value="' + value + '"]')
        if ($existed.length > 0) {
            // 如果是选中状态  则不需要切换和查询数据
            if ($existed.hasClass('active')) return false
            $existed.click()
            return false
        }
        var $other = $('.sousou-screen p a.other')
        if ($other.length > 0) $other.remove()
        $('<a href="javascript:void(0)" class="other append-item failure" data-field="' + field + '" data-value="' + value + '">' + show + '</a>')
            .appendTo('.sousou-screen p').click()
    })
    //点击切换产品
    $(document).on('click', '.sousou-screen p a', function (e) {
        var $this = $(this)
        top_product_click($this, 1)
    })
    $('#blank').click(function () {
        $('#report_hint').addClass('display-none');
    })
    // 近2年的统计数据
    dim_year_stats()
    // tab datatable 搜索
    $(document).on('input propertychange change', '.datatables-search-text', function (e) {

        var $this = $(this), _txt = $this.val(),
            table_elem = $(this).parents('.tab-pane').find('.datatable-content')
        var tb = table_elem.DataTable()


        tb.search(_txt).draw();
    })
    $(document).on('click', '.deal-num .deal', function () {
        console.log(this, '.deal-num .deal' )
        var index = $(this).index(), taggle = $(this).data('taggle');
        $(this).addClass("active").siblings().removeClass("active");
        $("#echart_trends_" + taggle).show().siblings('.graph').hide()

    })
    // tab 数据下载
    $(document).on('click', '.tab-export', function () {
        var $this = $(this), _type = $this.data('type')
        verify_authority('yd', {
            login: false,
            experience: false,
            failure: 1,
            after_allow: function (fn) {
                if(_type == 'partner') return fn()
                // 其他为汇总数据
                unity_child_perms('stats_download', fn)
            },
            successful: function () {
                var fl = $this.data('fl'),
                    file_name = '{0}-{1}-{2}-{3}'.format(
                        new Date().date_format('yyyy-mm-dd'),
                        new Date().getTime(), company_details.name, fl
                    ), src = $this.data('src');

                // 如果是贸易，则添加导出记录
                if (_type == 'partner') {
                    $.ajax('/async/export/company/item', {
                        datatype: 'text/json',
                        type: 'post',
                        data: {file_name: encodeURIComponent(file_name), size: $('#content_trade_partner tbody tr').length},
                        success: function (result) {
                            if (result.state == 0) {
                                all_item_download(src, file_name)
                                return false
                            }
                            $.alert(result.message)
                        }
                    })
                } else {
                    all_item_download(src, file_name)
                }
            }
        })
    })
    // 提单下载
    $(document).on('click', '#tab_pane_trade_data .export', function () {
        verify_authority('yd', {
            login: true,
            experience: false,
            after_allow: function (fn){
                unity_child_perms('company_trade_download', function (){
                    fn()
                })
            },
            successful: function (){
                wpull.open({
                    content: '<div class="msg">' + unity_lang('detail_data_progress') + '</div>',
                    isShow: true, //初始状态
                    elemId: 'trade_download',
                    load: function (that) {
                        verify_download_perms(that)
                    }
                })
            }
        })
    })
    // 贸易概述提单分页
    $(document).on('click', '#trade_pane .page', function () {
        var $this = $(this)
        unity_authority('', function () {
            if (!company_details.perms) return false
            var num = Number($this.data('num')),
                $pages = $this.parents('.pages'), total = Number($pages.data('total')),
                curr = Number($pages.data('curr'));
            let new_curr = curr + num
            if (new_curr < 1 || new_curr > total) return false;
            $('#trade_pane .bill-list:eq(' + (new_curr - 1) + ')').removeClass('display-none')
                .siblings('.bill-list').addClass('display-none')
            $pages.data('curr', new_curr)
            $('#trade_pane .page-info').html(new_curr + '/' + total)
        }, true)
    })
    // 贸易数据模块分页
    $(document).on('click', '#mask_layer_trading_record .page', function () {

        var $this = $(this), num = Number($this.data("num")),
            $pages = $this.parents(), total = Number($pages.data('total')),
            curr = Number($pages.data('curr'));
        let new_curr = curr + num
        unity_authority('v', function () {
            if (new_curr < 1 || new_curr > total) return false;
            trade_detail($('#tab_pane_trade_data .list-con .detail[data-index="' + (new_curr - 1) + '"]'))
        })
    })
    // 采集工具邮箱类型切换
    $(document).on('click', '.email-type-tab', function () {
        let $this = $(this), data = $this.data()
        if(data.hav) return
        get_task_email(data.tid, 0, data.etype, function (result){
            build_task_email_list(data.tid, 2, result.data, data.etype)
            $this.data('hav', 1)
        })
    })
    /*联系方式邮箱复制*/
    $(document).on('click', '#email-copy', function () {

        copy_text('email-text', function (){
            layer.msg(unity_lang('detail_contact_copy_lable'))
        });
    })
    $(document).on('click', '#close_applets', function () {
        $('.applets-code').remove()
        $.cookie('applets', '0');

    })

    //切换左边菜单
    // $("#left_menu").on("click", "li", function () {
    //     let elem = this, $this = $(this), _target = $this.data('target'), _pos = $this.data('pos'),
    //         nv = $this.data('nv'), _tab_fn = $this.data('tab')


    // })
    // 获取已收藏公司个数
    $.ajax('/async/stats/count', {
        datatype: 'text/json',
        type: 'get',
        data: {'stats_fields': 'follow'},
        success: function (result) {
            $.each(result, function (a, b) {
                $.each(b, function (c, d) {
                    $('.count-' + c).html(d)
                })
            })
        }
    })

    get_company_customize_tag(function (data) {
        build_top_menu(data)
    })

    // 社媒搜搜
    to_social_media()

    window.setTimeout(function () {
        $.ajax('/async/adds-list', {
            datatype: 'json',
            type: 'get',
            data: {'adds_name': 'benchmark'},
            success: function (result) {
                let _list = result.list || [];
                if (result.state == 0 && _list.length > 0) {
                    $('#btn_benchmark').attr('href', 'https://ui.benchmarkemail.com/cn/login').attr('target', '_blank')
                } else {
                    $('#btn_benchmark').attr('href', '/benchmark').attr('target', '_blank')
                }
            }, error(e) {
                $('#btn_benchmark').attr('href', '/benchmark').attr('target', '_blank')
            }
        })
    }, 500)

    load_js_file('wMask', function () {
        // 联系方式
        get_contact();
        verify_authority('v', {
            hig_auth: company_details.perms,
            // after_allow: company_details.perms,
            call_sign: function (){
                module_mask(mask_opt.login)
            },
            failure: function (){
                module_mask(wg.user.vip_level ? mask_opt.vip : mask_opt.ordinary)
            }
        })
    })
    // 展开 / 收起
    build_shrink_open()
    //line广告
    build_line_ad(queryString('key'), 2, function (data){
        $('.market-trends').after(data)
    })

})

//公众号二维码显示
function  get_applets_code() {
    let applets=$.cookie('applets')
    console.log(applets,'applets')
    if(wg.lang == 'cn'&&applets!='0'){
        $('.applets-code').html('<div class="xiaochengxu"><img src="https://static.52wmb.com/wmb_new/images/company_detail_ewm.jpg"/>\n' +
            '<span>微信扫码打开服务号<br/>查询数据更便捷</span>\n' +
            '<font id="close_applets">×</font></div> ')
    }
}



function top_product_click($elem, s) {
    // after_allow 只在vip等级下会触发，也就是等级权限验证通过后，需要验证200条是否查看完， 如果查看完了则不能再查看
    let options = s == 1 ? true : {failure: null, login: false, only_return: true, after_allow: company_details.perms}
    unity_authority('v', function () {
        if ($elem.hasClass('open')) return false
        let $report_hint = $('#report_hint')
        $.wloading()
        let _key = $elem.data("value"), field = $elem.data('field'), nan_key = Number(_key)

        _company_tag = _key
        filtrate_params = $.extend({}, default_params, false)
        if (_key != '*' && _key != null && _key != '') {
            field = isNaN(nan_key) || field == 'tag_id' ? field : 'hs'
            filtrate_params[field] = _key
            let _text = $report_hint.data('txt')
            $report_hint.addClass('has-key')
            $report_hint.find('.show').html(replaceKey(_text, '[@产品]', _key))
        } else {
            $report_hint.removeClass('has-key')
            $report_hint.addClass('display-none')
        }
        init(function () {
            if ($report_hint.hasClass('has-key')) $report_hint.removeClass('display-none')
            $elem.addClass("open active").siblings().removeClass("open active");
            $('#menu_overview').click()
        })
    }, options, $elem)
}

function to_social_media() {
    let $this = $('#btn_social_media')
    if (!wg.user.id) {
        $this.removeClass('display-none').attr('target', '_blank').attr('href', '/social-media')
        return;
    }
    verify_social_media($this.data('keywords'), 'detail', function (result) {
        $this.removeClass('display-none')
        if (result.state == 22000) return $this.attr('onclick', "$.alert('" + result.message + "')")
        if (result.state != 0) {
            $this.attr('target', '_blank').attr('href', '/social-media')
            return;
        }
        let url = (result.data || {}).url || '/social-media'
        $this.attr('target', '_blank').attr('href', url)
    })
}
/**
 * 模块遮罩
 */
function module_mask(opt) {
    $('.perms-mask').wMask(opt)
}

function left_menu_shift(elem) {
    let _target = $(elem).data('target'), _pos = $(elem).data('pos'), nv = $(elem).data('nv'),
        _tab_fn = $(elem).data('tab')
    $(elem).addClass("active").siblings().removeClass("active");
    $(_target).find(_pos).addClass('active').siblings('.tab-pane').removeClass('active')
}

//左侧权限带锁
function left_meau_authority() {
    let $left_tab = $('.left-tab')
    $.each($left_tab, function () {
        let $this = $(this), nv = $this.data('nv')
        verify_authority(nv, {
            call_sign: function (){
                $this.append('<i></i>')
            },
            failure: function () {
                $this.append('<i></i>')
            },
            successful: function (){
                $this.append('<span>&gt;</span>')
            }
        })
    })
}


/**
 * 构建顶部产品名菜单
 * @param data
 * @returns {boolean}
 */
function build_top_menu(data) {
    var $req_tag = $('.req-tag'), _html = '', search_key = $req_tag.data('value') || '';
    // 去除所有自定义标签和产品标签
    $('.sousou-screen p .append-item').remove()
    var _list = data.list || [], max_count = 8
    if (_list.length > 0) {
        $.each(_list, function () {
            _html += '<a href="javascript:void(0)" class="append-item failure" data-field="tag_id" data-value="' + this.id + '" data-wstats="main_product_button">' + this.tag_name + '</a>'
        })
    }

    $('.sousou-screen p').append(_html)
    var product_count = company_details.product_count || 0
    let $more = $('.sousou-screen .screen-more').removeClass('display-none')
    if (_list.length > 0 || product_count > 0) {
        $more.attr('onclick', 'manager_tags()').html(unity_lang('share_text_more'))
    } else {
        $more.attr('onclick', 'side_create_customize_tag()').html(unity_lang('share_text_create'))
    }

    if (product_count <= 0) {verify_req_key();return false}
    var has_data_count = $('.sousou-screen p a').length, lave_count = max_count - has_data_count
    if (lave_count <= 0) return false
    var add_count = Math.min(product_count, lave_count)
    // 可补充条数大于0
    if (add_count <= 0) {verify_req_key();return false}
    $.each(company_details.product.slice(0, add_count), function () {
        if (search_key == this.value) {
            $req_tag.removeClass('not-verified display-none');
            return true
        }
        $('.sousou-screen p').append('<a href="javascript:void(0)" class="append-item failure" data-field="product" data-value="' + this.value + '" data-wstats="main_product_button">' + this.value + '</a>')
    })
    verify_req_key();

}

function verify_req_key(){
    var $req_tag = $('.req-tag.not-verified')
    if($req_tag.length <=0) return false

        let verify_params = Object.assign({}, filtrate_params, {key: $req_tag.data("value")})
        $.ajax('/async/detail/verify/search_key', {
            datatype: 'text/json',
            type: 'get',
            data: verify_params,
            success: function (result) {
                if (result.count > 0) {
                    $req_tag.removeClass('not-verified display-none')
                    // top_product_click($req_tag, 2)
                }
            }
        })
    // $req_tag.removeClass('not-verified display-none');

    // 先验证传过来的关键词是否有数据
    // let $req_tag = $('.sousou-screen .req-tag[data-field="key"]')
    // if ($req_tag.length > 0) {
    //     if (!$req_tag.hasClass('not-verified')) return top_product_click($req_tag, 2)
    //     let verify_params = Object.assign({}, filtrate_params, {key: $req_tag.data("value")})
    //     $.ajax('/async/detail/verify/search_key', {
    //         datatype: 'text/json',
    //         type: 'get',
    //         data: verify_params,
    //         success: function (result) {
    //             if (result.count > 0) {
    //                 $req_tag.removeClass('not-verified display-none')
    //                 // top_product_click($req_tag, 2)
    //             }
    //         }
    //     })
    // }
}

/**
 * 自定义标签有变动后的操作
 * @param data
 */
function tag_changes_after(data) {
    build_top_menu(data)
    var $all = $('.sousou-screen p a[data-value="*"]')
    if (!$all.hasClass('active')) {
        $all.click()
    }
}

var tags_side

/**
 * 标签管理
 */
function manager_tags() {
    var customize_tag_html = '', customize_tag_count = 0,
        all_tags_count = 0
    unity_authority('yd', function () {
        tags_side = new ModelBox({
            content: '',
            isShow: true, //初始状态
            elemId: 'more_products',
            load: function (that) {
                all_product(function (result) {
                    var cus_tag_list = []
                    get_company_customize_tag(function (data) {
                        var _list = data.list || [];
                        customize_tag_count = _list.length
                        $.each(_list, function () {
                            cus_tag_list.push({
                                value: this.tag_name,
                                count: 0,
                                type: 1,
                                tag_id: this.id,
                                keys: this.keys
                            })
                            customize_tag_html += '<li>' +
                                '<p class="lable-name-box"><label><input type="radio" name="tag_check" data-field="tag_id" data-show="' + this.tag_name + '" value="' + this.id + '"><span class="lable-name">' + this.tag_name + '</span></label>' +
                                '<span class="tag-edit"><i class="link" onclick="dissociate_customize_tag(this)" data-tagid="' + this.id + '" data-pe="li"></i>' +
                                '<i class="edit" onclick="side_edit_customize_tag(this)" data-tagname="' + this.tag_name + '" data-keys="' + this.keys + '" ' +
                                'data-tagid="' + this.id + '" data-pe="li"></i><span></p>' +
                                '</li>'
                        })
                        var all_tag_list = $.extend([], result.product.data.list, cus_tag_list, false)
                        all_tags_count = company_details.product_count + customize_tag_count
                        var more_products_con = ''
                        more_products_con += ' <div class="company-label-head">\n'
                        more_products_con += '<h2>' + unity_lang('detail_tags_products_title') + '</h2>\n'
                        more_products_con += '<span class="save" onclick="side_create_customize_tag()">' + unity_lang('label_create') + '</span>\n'
                        more_products_con += '<span class="tags-ku" onclick="customize_tag_library()">' + unity_lang('detail_tags_library') + '</span>\n'
                        more_products_con += '</div>\n'
                        more_products_con += ' <nav id="products_tab_box">\n'
                        more_products_con += ' <a class="tab active" data-target=".products">' + unity_lang('detail_tags_all') + '</a>\n'
                        more_products_con += ' <a class="tab" data-target=".products">' + unity_lang('detail_tags_official') + '</a>\n'
                        more_products_con += ' <a class="tab" data-target=".products">' + unity_lang('detail_tags_customization') + '</a>\n'
                        more_products_con += '</nav>\n'
                        more_products_con += '<div class="products">\n'
                        more_products_con += '<div class="total-lable-box tab-pane active" id="all_tags">\n'
                        more_products_con += '<table border="0" id="content_all_tags" class="datatable-content"></table>'
                        more_products_con += ' </div>\n'
                        more_products_con += ' <div class="total-lable-box tab-pane" id="company_tags_box">\n'
                        more_products_con += '<table border="0" id="content_official_tags" class="datatable-content"></table>'
                        more_products_con += ' </div>\n'
                        more_products_con += '<div class="total-lable-box tab-pane" id="user_tags_box">\n'
                        if (customize_tag_count == 0) {
                            more_products_con += '<p class="stat"><span class="total-lable">' + unity_lang('detail_tags_no_total') + '</span><span class="total-lable-empty"></span></p>\n'
                        } else {
                            more_products_con += '<p class="stat"><span class="total-lable">' + unity_lang('detail_tags_total') + '' + customize_tag_count + '</span><span class="total-lable-empty"></span></p>\n'
                        }

                        more_products_con += ' <ul class="total-lable-list">' + customize_tag_html + '</ul>\n'
                        more_products_con += '</div>\n'
                        more_products_con += '</div>'

                        that.changeContent(more_products_con)
                        build_tags_table(all_tag_list, all_tags_count, result.product.data.list, company_details.product_count)
                    })
                })
            }
        });
    }, true)


}

function follow_tab(elem) {
    if (!verify_sign({login: true, only_return: true})) return false
    var is_follow = $(elem).data('follow') == '1', total_count = Number($(elem).find('.count-follow').html())
    if (!is_follow) {
        company_follow(company_details.id, 3)
    } else {
        $.ajax('/async/common/company/unfollow', {
            datatype: 'text/json',
            type: 'post',
            data: {company_id: company_details.id},
            success: function (result) {
                if (result.state == 0) {
                    $(elem).data('follow', 0).find('.tool-follow')
                        .removeClass('active').siblings('font').html('' + unity_lang('detail_data_collect') + '')
                    $(elem).find('.count-follow').html(total_count - 1)
                }
                // 弹窗取关失败
            }
        })
    }
}

var customize_tag = {};

/**
 * 获取该公司关联的自定义标签
 * @param fn
 * @param reload  是否重新获取
 */
function get_company_customize_tag(fn, reload) {
    reload = reload || false
    let tags_keys = ''
    if (customize_tag && !reload) {
        if (fn) fn(customize_tag)
        return false
    }
    // 获取自定义标签
    $.ajax('/async/detail-customize-tag/tag', {
        datatype: 'text/json',
        type: 'get',
        data: {'company_id': company_details.id},
        success: function (result) {
            if (result.state == 0) {
                customize_tag = result.data
            } else {
                customize_tag = {}
            }
            if (fn) fn(customize_tag)
        }
    })
}

/**
 * 构建所有标签 和 官方标签datatables
 * @param all_tags
 * @param all_hits
 * @param official_tags
 * @param official_hits
 */
function build_tags_table(all_tags, all_hits, official_tags, official_hits) {

    var size = 15,
        options = {
            displayLength: size,
            deferRender: true,
            lengthChange: false,
            // lengthMenu: [ 20, 50, 100, 200 ],
            ordering: false,
            destroy: true,
            info: false,
            language: {
                "lengthMenu": '每页 _MENU_ 条记录',
                "zeroRecords": '没有找到记录',
                "info": '第 _PAGE_ 页 ( 总共 _PAGES_ 页 _TOTAL_ 条记录 )',
                "infoEmpty": '无记录',
                "infoFiltered": '从 _MAX_ 条记录过滤)',
                'paginate': {
                    "next": unity_lang('detail_data_next'),
                    "previous": unity_lang('detail_data_previous')
                }
            },
            autoWidth: false
        },
        all_options = {
            columns: [
                {"data": "value", title: unity_lang('detail_tags_total') + '' + all_hits + ''},
                {"data": "count", title: ''}
            ],
            data: all_tags,
            columnDefs: [

                {
                    targets: 0,
                    render: function (data, type, row, meta) {
                        var _html = '', field = 'tag_id', _value = row.tag_id, _show = row.value;
                        //官方标签

                        if (_value == null) {
                            _html += '<span class="trading">(' + row.count + '' + unity_lang('detail_tags_transactions') + ',' + unity_lang('detail_tags_percentage') + '' + row.prop + '%)</span>'
                            field = 'product'
                            _value = data
                            _show = data
                        }
                        return '<label>' +
                            '<p class="lable-name-box"><input type="radio" name="tag_check" data-field="' + field + '" data-show="' + _show + '" value="' + _value + '"><span class="lable-name">' + data + '</span>' + _html + '</p>' +
                            '</label>'
                    }
                },
                {
                    targets: 1,
                    render: function (data, type, row, meta) {
                        var _html = '';
                        if (row.tag_id != null) {
                            _html = '<i class="delete" onclick="dissociate_customize_tag(this)" data-tagid="' + row.tag_id + '"  data-pe="tr"></i>'
                            _html += '<i class="edit" onclick="side_edit_customize_tag(this)" data-tagname="' + row.value + '" data-keys="' + row.keys + '" data-tagid="' + row.tag_id + '"></i>'
                        }
                        return _html
                    }

                }
            ]
        },
        off_options = {
            columns: [
                {"data": "value", title: '' + unity_lang('detail_tags_total') + '' + official_hits + ''},
                {"data": "count", title: ''}
            ],
            data: official_tags,
            columnDefs: [

                {
                    targets: 0,
                    render: function (data, type, row, meta) {
                        var _html = '', field = 'tag_id', _value = row.tag_id, _show = row.value;
                        //官方标签

                        if (_value == null) {
                            _html += '<span class="trading">(' + row.count + '' + unity_lang('detail_tags_transactions') + ',' + unity_lang('detail_tags_percentage') + '' + row.prop + '%)</span>'
                            field = 'product'
                            _value = data
                            _show = data
                        }
                        return '<label>' +
                            '<p class="lable-name-box"><input type="radio" name="tag_check" data-field="' + field + '" data-show="' + _show + '" value="' + _value + '"><span class="lable-name">' + data + '</span>' + _html + '</p>' +
                            '</label>'
                    }
                },
                {
                    targets: 1,
                    render: function (data, type, row, meta) {
                        return ''
                    }

                }
            ],
        };
    //所有标签
    $('#content_all_tags').dataTable($.extend({}, options, all_options, false))
    $('#content_all_tags_filter').remove()
    // 官方标签
    $('#content_official_tags').dataTable($.extend({}, options, off_options, false))
    $('#content_official_tags_filter').remove()

}

function customize_tag_join_company(elem) {
    var tag_id = $(elem).data("tagid")
    $.ajax('/async/detail-customize-tag/join', {
        datatype: 'text/json',
        type: 'post',
        data: {
            id: company_details.id,
            company_type: company_details.type,
            end_time: company_details.last_trade_date,
            tag_id: tag_id,
        },
        success: function (result) {
            if (result.state == 0) {
                $('.mask-layer').remove()
                get_company_customize_tag(tag_changes_after, true)
                return false
            }
            if (result.state == 200) return $.alert(unity_lang('detail_tags_login_todo'))
            $.alert(result.message)
        }
    })
}

/**
 * 公司标签解除关联
 * @param elem
 */
function dissociate_customize_tag(elem) {
    var tag_id = $(elem).data("tagid"), $parent = $(elem).parents($(elem).data('pe'))
    $.ajax('/async/detail-customize-tag/dissociate', {
        datatype: 'text/json',
        type: 'post',
        data: {
            id: company_details.id,
            tag_id: tag_id,
        },
        success: function (result) {
            if (result.state == 0) {
                try {
                    tags_side.hide()
                } catch (e) {

                }
                $parent.remove()
                get_company_customize_tag(tag_changes_after, true)
                return false
            }
            if (result.state == 200) {
                $.alertt('' + unity_lang('detail_tags_login_todo') + '')
            }
        }
    })
}

/**
 * 获取用户的所有的自定义标签
 */
function get_customize_tag(start, fn) {

    // 标签关联
    $.ajax('/async/detail-customize-tag/user', {
        datatype: 'text/json',
        type: 'get',
        data: {start: start, company_id: company_details.id},
        success: function (result) {
            fn(result)
            // if(result.state==0){
            //     user_tags_number=result.data.list.length
            //     var user_tags_list=''
            //     $.each(result.data.list, function() {
            //         user_tags_list += ' <li>\n' +
            //             ' <i class="pitch">&nbsp;&nbsp;&nbsp;</i>\n' +
            //             '  <p class="lable-name-box">\n' +
            //             ' <span class="lable-name">'+this.tag_name+'</span>\n' +
            //             // ' <span class="trading">(989笔交易,占比34%)</span>\n' +
            //             ' </p>\n' +
            //             ' <i class="delete" onclick="delete_guild_tags(this)" data-tag_id="'+this.id+'">&nbsp;</i>\n'+
            //             '  </li>'
            //         $('#all_tags ul').append(user_tags_list)
            //         $('#user_tags_box ul').append(user_tags_list)
            //     })
            // }

        }
    })
}

/**
 * 自定义标签库
 */
function customize_tag_library() {
    var company_tag_lib_list = ''
    var tags_list_lenght = ''
    var tag_lib_math = ''


    var company_label_list = new ModelBox({
        isShow: true, //初始状态
        elemId: 'tag_library',
        load: function (that) {
            get_customize_tag(0, function (result) {
                if (result.state == 0) {
                    tags_list_lenght = result.data.list.length

                    company_tags_number = result.data.list.length
                    if (tags_list_lenght > 0) {
                        var tag_lib_list = '';
                        $.each(result.data.list, function () {

                            tag_lib_list += '<li>\n'
                            tag_lib_list += '<p class="mail-name "><span class="mail-name-url">' + this.tag_name + '</span><span class="caozuo">\n'
                            if (!this.is_join) {
                                tag_lib_list += '<i class="link" data-tagid="' + this.id + '" onclick="customize_tag_join_company(this)"></i>\n'
                            }
                            tag_lib_list += '<i class="edit"data-tagname="' + this.tag_name + '" data-keys="' + this.tags + '" data-tagid="' + this.id + '" onclick="side_edit_customize_tag(this)"></i>\n'
                            tag_lib_list += '<i class="del" data-tagid="' + this.id + '" onclick="delete_customize_tag(this,' + tags_list_lenght + ')"></i>\n'
                            tag_lib_list += '</span></p></li>'

                        })
                        company_tag_lib_list = '<ul class="mail-collect">' + tag_lib_list + '</ul>'
                        tag_lib_math = '<p class="math" id="tags_math">' + unity_lang('detail_tags_no_related') + '' + tags_list_lenght + '</p>'
                    } else {
                        company_tag_lib_list = '<div class="tag_lib_box">' +
                            '<i class-="tag_lib_none"></i><p>' + unity_lang('detail_tags_no_content') + '</p>' +
                            '<a href="javascript:void(0);" id="detail_customize_tag_list" onclick="side_create_customize_tag()">+' + unity_lang('label_create') + '</a>' +
                            '</div>'
                        tag_lib_math = '<p class="math"></p>'
                    }
                    var tag_lib = ' <div class="company-label-head">\n' +
                        '<h2>' + unity_lang('detail_tags_library') + '</h2>\n' +
                        '<span class="save" id="detail_customize_tag_list" onclick="side_create_customize_tag()">+' + unity_lang('label_create') + '</span>\n' +
                        '</div>' +
                        '<div class="mail-collect-box" >' + tag_lib_math + company_tag_lib_list + '</div>'
                    that.changeContent(tag_lib, function () {
                        $('#detail_customize_tag_list').click(function () {
                            company_label_list.hide()
                            found_company_product_label()

                        })
                    })
                }

            })
        }
    })
}

/**
 * 标签创建侧拉
 */
function side_create_customize_tag() {

    unity_authority('yd', function () {
        build_customize_tag_side('' + unity_lang('label_create') + '', function (that) {
            /*保存公司标签*/
            $('#company_product_save').click(function () {
                var tag_name = $('.tags-name-input').val()
                if (!tag_name) {
                     $.alert('' + unity_lang('label_create_tips') + '')
                    return false
                }
                var keys = that.get_keys()
                if (keys.length <= 0) {
                     $.alert('' + unity_lang('label_create_key_tips') + '')
                    return false
                }
                $.ajax('/async/detail-customize-tag/add', {
                    datatype: 'text/json',
                    type: 'post',
                    data: {keys: keys.join('|'), tag_name: tag_name, company_id: company_details.id},
                    success: function (result) {
                        if (result.state == '0') {
                            that.hide();
                            get_company_customize_tag(tag_changes_after, true)
                        }
                    }
                })
            })
        })
    }, true)

}

/**
 * 侧拉编辑标签
 * @param elem
 */
function side_edit_customize_tag(elem) {
    build_customize_tag_side(unity_lang('label_edit'), function (that) {
        var $elem = $(elem), tag_name = $elem.data('tagname'),
            tag_id = $elem.data('tagid');
        var keys = ($elem.data('keys') || '').toString().split('|')
        that.set_keys(keys)
        $('#tags_name_input').val(tag_name)
        $.each(keys, function () {
            $('.makes-tags .add-tags').append('<span class="tags">' + this + '<i data-val="' + this + '" class="delete-add-tags">×</i></span>')
        })
        /*保存公司标签*/
        $('#company_product_save').click(function () {
            var tag_name = $('.tags-name-input').val()
            if (!tag_name) {
                 $.alert(unity_lang('label_create_tips'))
                return false
            }
            keys = that.get_keys()
            if (keys.length <= 0) {
                 $.alert(unity_lang('label_create_key_tips'))
                return false
            }
            $.ajax('/async/detail-customize-tag/change', {
                datatype: 'text/json',
                type: 'post',
                data: {keys: keys.join('|'), tag_name: tag_name, tag_id: tag_id},
                success: function (result) {
                    if (result.state == '0') {
                        that.hide();
                        get_company_customize_tag(tag_changes_after, true)
                    }
                }
            })
        })
    })
}

/**
 * 构建标签详情 （创建/编辑） 侧拉
 * @param title
 * @param fn
 */
function build_customize_tag_side(title, fn) {
    var content = ' <div class="company-label-head">\n' +
        '<h2>' + title + '</h2>\n' +
        '<span class="save" id="company_product_save">' + unity_lang('label_save') + '</span>\n' +
        '<span class="clear" id="company_product_clear">' + unity_lang('label_clear') + '</span>\n' +
        '</div>\n' +
        '<div class="makes-tags-box" id="cdstoms_from">\n' +
        '<p class="makes-tags">\n' +
        '<b>' + unity_lang('label_name_enter') + '</b>\n' +
        '<span class="tags-input-box power-search-box">\n' +
        ' <input class="tags-name-input clear-target" id="tags_name_input"/>\n' +
        '<i class="delete-input clear-txt">×</i>\n' +
        '</span>\n' +
        '<span class="tag-hint">' + unity_lang('label_name_enter_tips') + '</span>\n' +
        '</p>\n' +
        '<p class="makes-tags">\n' +
        '<b>' + unity_lang('label_tags_add') + '</b>\n' +
        ' <span class="tags-input-box">' +
        '<input class="tags-hs-input" id="product_text"/>' +
        '<span class="add-tags-btn">' + unity_lang('label_tags_add_button') + '</span>\n' +
        '</span>\n' +
        '<span class="add-tags"></span>\n' +
        '<span class="tag-hint">' + unity_lang('label_tags_add_tips_one') + '<br/>' + unity_lang('label_tags_add_tips_two') + '</span>\n' +
        '</p>' +
        '</div>';
    new ModelBox({
        content: content,
        //内容
        isShow: true, //初始状态
        elemId: 'customize_tag_detail',
        load: function (that) {
            var keys = []
            that.get_keys = function () {

                return keys
            }
            that.set_keys = function (_keys) {
                keys = _keys
            }
            fn(that)
            $('.add-tags-btn').click(function () {
                if (keys.length >= 3) {
                     $.alert('' + unity_lang('label_tags_add_alert') + '')
                    return false
                }
                var $key = $('#product_text'), key = $key.val()
                if (!key) {
                     $.alert('' + unity_lang('label_tags_add_keywords') + '')
                    return false
                }
                if (keys.indexOf(key) >= 0) {
                     $.alert('[' + key + ']' + unity_lang('label_tags_add_keywords_re') + '')
                    return false
                }
                keys.push(key);
                $('.makes-tags .add-tags').append('<span class="tags">' + key + '<i data-val="' + key + '" class="delete-add-tags">×</i></span>')
                $key.val('')
            })
            $(document).on('click', '.delete-add-tags', function () {
                var _val = $(this).data('val').toString()

                keys.removeVal(_val)

                $(this).parents('.tags').remove()
            })
            /*清除公司标签*/
            $('#company_product_clear').click(function () {
                $(':input', '#cdstoms_from')
                    .not(':button, :submit, :reset, :hidden')
                    .val('')
                $('.add-tags').html('')
                keys = []
            })
        }
    });
}

/**
 * 删除自定义标签
 */
function delete_customize_tag(elem, list_lenght) {
    var $elem = $(elem), $parent = $elem.parents('.caozuo'),
        tag_id = $elem.data('tagid');

    $.ajax('/async/detail-customize-tag/delete', {
        datatype: 'text/json',
        type: 'post',
        data: {tag_id: tag_id},
        success: function (result) {

            if (result.state == 0) {
                list_lenght--
                $('#tags_math').html('' + unity_lang('detail_tags_no_related') + '' + list_lenght + '')
                $elem.parents('li').remove()
            }
        },
        error: function (e) {
             $.alert('' + unity_lang('label_operation_excet') + '')
        }
    })
}

/**
 * 图表
 * @param data
 * @param type
 */
var types_name = {
    bill_counts: '' + unity_lang('detail_transactionst') + '',
    qty: '' + unity_lang('detail_quantity') + '',
    weight: '' + unity_lang('detail_weight') + ''
}

function option_echart(_legend_data,data, type) {
    var myChart = echarts.init(document.getElementById("echart_trends_" + type));
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            top: '15%',
            left: '4%',
            right: '10%',
            bottom: '18%',
            containLabel: true
        },
        legend: {
            data: _legend_data
        },
        xAxis: [
            {
                type: 'category',
                data: data.xAxis,
                axisLabel: {
                    interval: 0,
                    rotate: 45
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#86ACD6'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#86ACD6',
                        type: 'solid'
                    }
                }
            }

        ],
        textStyle: {
            color: '#666666'
        },
        yAxis: [
            {
                type: 'value',
                name: '',
                axisLabel: {
                    formatter: '{value}'
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: _legend_data[0],
                type: 'line',
                yAxisIndex: 0,
                data: data.yAxis,
                itemStyle: {
                    normal: {
                        color: '#1FCC8C',
                        width: 4
                    }
                },
                smooth: false,
                symbol: 'circle',
                symbolSize: 10
            }

        ]
    };
    // 是否有同比
    if (data.yoy_Axis) {
        option.series.push(
            {
                name: _legend_data[1],
                type: 'bar',
                yAxisIndex: 0,
                data: data.yoy_Axis,
                itemStyle: {
                    normal: {
                        color: '#AED4C2',
                        width: 4
                    }
                },
                smooth: false,
                symbol: 'circle',
                symbolSize: 10
            })
    }
    myChart.setOption(option);
}


//统一产品筛选
var all_load_count, finish = 0, load_times = 0

function init(callback) {

    $('#left_menu li').data('load', '')
    // 提单数据
    all_load_count = 0
    finish = 0
    load_times = 0
    dim_trade(function () {
        /////  有提单数据再走其他模块申请
        //产品标签
        all_load_count++;
        dim_product()
        //贸易伙伴
        all_load_count++;
        dim_partner()
        //hs 编码
        all_load_count++;
        dim_hs()
        // 贸易港口
        all_load_count++;
        dim_port()
        //贸易区域
        all_load_count++;
        dim_trade_country()
        // 近2年统计数据
        all_load_count++;
        dim_year_stats()
        //市场趋势分析
        all_load_count++;
        dim_trends()
        close_load(callback)
    })
}

function close_load(callback) {
    console.log(load_times, 'load_times', all_load_count >= finish, load_times > 5)
    if (finish >= all_load_count || load_times > 5) {
        console.log('1')
        $.wloading_close()
        callback()
    } else {

        load_times++;
        window.setTimeout(function () {
            close_load(callback)
        }, 1000)
    }
}

//----------------------------------------------------- 各个维度 查询-----------------------
function download_verify(_type, callback){

    verify_authority('yd', {
        login: false,
        experience: false,
        failure: 1,
        after_allow: function (fn) {
            if(_type == 'partner') return fn()
            // 其他为汇总数据
            unity_child_perms('stats_download', fn)
        },
        successful: function () {
            callback()
        }
    })
}

/**
 * 产品标签模块
 * @returns {boolean}
 */
function dim_product() {
    let $product_pane = $('#product_pane')
    if ($product_pane.length <= 0) return false
    // 顶部选择为全部时， 显示最初的列表
    if (_company_tag == '*') return build_dim_product($product_pane, company_details.product, company_details.product_count)

    var product_params = $.extend({}, filtrate_params, {top_count: 5}, false),
        product_filter = product_params.product && product_params.product != '*',
        key_filter = product_params.key && product_params.key != '*',
        hs_filter = product_params.hs && product_params.hs != '*',
        tag_filter = product_params.tag_id && product_params.tag_id != '0'
    //进出口报告公司统计
    dim_report_stats(product_filter, tag_filter, key_filter, hs_filter)
    // 当请求自定义标签或者搜索词时  不获取标签数据
    if (key_filter || tag_filter || hs_filter) {
        $('#menu_product').addClass('display-none')
        $product_pane.addClass('display-none')
        let prop = (company_bill_count / company_details.bill_count * 100).toFixed(2)
        $('.product-describe').html(replaceKey(
            unity_lang('detail_description'),
            ['[@产品]', '[@数量]', '[@占比]', '[@产品]', '[@日期]', '[@产品]'],
            [_company_tag, company_bill_count, prop, _company_tag, filtrate_params.end_time, _company_tag]))
            .removeClass('display-none').siblings('.describe').addClass('display-none')
        return false
    }
    //选中产品不显示产品, 但是需要显示描述
    var scene = product_filter ? 3 : 1
    unity_product(product_params, scene, function (result) {
        let product_result = result.product || {}
        if (product_result.state == 0) {
            //如果有产品标签，则显示产品标签描述
            if (product_filter) {
                if ($product_pane.length > 0) {
                    $('#menu_product').addClass('display-none')
                    $product_pane.addClass('display-none')
                }
                if (product_result.data && product_result.data.list.length > 0) {
                    let product_dt = product_result.data.list[0]
                    $('.product-describe').html(replaceKey(
                        unity_lang('detail_description'),
                        ['[@产品]', '[@数量]', '[@占比]', '[@产品]', '[@日期]', '[@产品]'],
                        [product_dt.value, product_dt.count, product_dt.prop, product_dt.name, product_dt.trade_date, product_dt.name]))
                        .removeClass('display-none').siblings('.describe').addClass('display-none')
                    return
                }
                $('.describe').removeClass('display-none').siblings('.product-describe').addClass('display-none')
            } else {
                build_dim_product($product_pane, product_result.data.list, product_result.data.hits)
            }
        }
    })
    // dim_

}

function build_dim_product($product_pane, list, hits) {
    $('.describe').removeClass('display-none').siblings('.product-describe').addClass('display-none')
    $product_pane.removeClass('display-none').find('.list-content').remove()

    let _html = ''
    $product_pane.removeClass('display-none').find('.list-content').remove()
    $.each(list, function () {
        let last_trade_date = (this.last_trade_date || this.trade_date).split('T')[0]
        _html += '<li class="list-content" onclick="trade_record(\'product\', \'' + this.value + '\', \'' + last_trade_date + '\')">\n' +
            '<span class="name">\n' +
            '<b>' + this.value + '</b><br /><progress value="' + this.prop + '" max="100"></progress>\n' +
            '</span>\n' +
            '<span class="data">' + this.count + '</span>\n' +
            '<span class="data">' + this.prop + '%</span>\n' +
            '<span class="details"><font>&gt;</font></span>' +
            '</li>'
    })
    $product_pane.find('.header').after(_html)
    if (hits > 0) {
        $product_pane.find('.detail-tab-more').removeClass('display-none')
        $('#menu_product').removeClass('display-none')
    } else {
        $product_pane.find('.detail-tab-more').addClass('display-none')
        $('#menu_product').addClass('display-none')
    }

}

/**
 * 贸易数据模块
 */
function dim_trade(fn) {

    let $trade_pane = $('#trade_pane')
    if ($trade_pane.length <= 0) return false
    let params = Object.assign({}, filtrate_params, {size: 15})
    //提关单数据
    unity_trade_data(params, 1, function (result) {
        var trade = result.trade || {},
            bill_data = trade.data || {},
            bill_list = bill_data.list || [],
            $trade_list = $('#trade_list');
        if (bill_list.length <= 0) {
            if (result.india_offline > 0) {
                $('.sousou-list').addClass('display-none').siblings('.not-found')
                    .html('数据按照当地政策，不予展示。').removeClass('display-none')
                return false
            }
            $('.sousou-list').addClass('display-none')
                .siblings('.not-found').html(unity_lang('detail_no_data')).removeClass('display-none')
            return false
        }
        $('.sousou-list').removeClass('display-none')
            .siblings('.not-found').html('').addClass('display-none')
        company_bill_count = bill_data.hits
        $('#menu_trade_data').addClass('display-none')
        $trade_pane.addClass('display-none')
        $trade_list.html('')
        if (bill_data.hits > 0) {
            $.each(bill_list, function (index, bill_detail) {
                var product = '', descript_label = bill_detail.descript_label || []
                if(descript_label.length > 0){
                    $.each(descript_label, function (a, b){
                        product += (',' + b.key)
                    })
                    product = product.slice(1);
                }
                $trade_list.append('<ul class="bill-list ' + (index == 0 ? '' : 'display-none') + '"><li>\n' +
                    '<p class="bill-list-left"><span class="bill-list-name">' + unity_lang('detail_module_bill_date') + '</span>' +
                    '<span class="bill-list-data">' + bill_detail.date + '</span>' +
                    '</p>\n' +
                    '<p class="bill-list-right"><span class="bill-list-name">' + unity_lang('detail_module_bill_number') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.bill_no || '--') + '</span>' +
                    '</p>\n' +
                    '</li>' +
                    '<li>\n' +
                    '<p class="bill-list-left"><span class="bill-list-name">' + unity_lang('detail_module_bill_supplier') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.seller || '--') + '</span>' +
                    '</p>\n' +
                    '<p class="bill-list-right"><span class="bill-list-name">' + unity_lang('detail_module_bill_buyer') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.buyer || '--') + '</span>' +
                    '</p>\n' +
                    '</li>' +
                    '<li>\n' +
                    '<p class="bill-list-left"><span class="bill-list-name">' + unity_lang('detail_module_bill_export_port') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.seller_port || '--') + '</span>' +
                    '</p>\n' +
                    '<p class="bill-list-right"><span class="bill-list-name">' + unity_lang('detail_module_bill_import_port') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.buyer_port || '--') + '</span>' +
                    '</p>\n' +
                    '</li>' +
                    '<li>\n' +
                    '<p class="bill-list-left"><span class="bill-list-name">' + unity_lang('detail_module_bill_export_area') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.seller_country || '--') + '</span>' +
                    '</p>\n' +
                    '<p class="bill-list-right"><span class="bill-list-name">' + unity_lang('detail_module_bill_import_area') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.buyer_country || '--') + '</span>' +
                    '</p>\n' +
                    '</li>' +
                    '<li>\n' +
                    '<p class="bill-list-left"><span class="bill-list-name">' + unity_lang('detail_module_bill_quantity') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.weight|| '--') + (bill_detail.weight_unit||'') + '</span>' +
                    '</p>\n' +
                    '<p class="bill-list-right"><span class="bill-list-name">' + unity_lang('detail_module_bill_amount') + '</span>' +
                    '<span class="bill-list-data">' + (bill_detail.amount || '--') + '</span>' +
                    '</p>\n' +
                    '</li>\n' +
                    '<li>\n' +
                    '<p class="bill-list-left"><span class="bill-list-name">' + 'HS'+ '</span>' +
                    '<span class="bill-list-data">' + bill_detail.hs + '</span>' +
                    '</p>\n' +
                    '<p class="bill-list-right"><span class="bill-list-name">' + unity_lang('detail_module_bill_product_tags') + '</span>' +
                    '<span class="bill-list-data">' + (product || '--') + '</span>' +
                    '</p>\n' +
                    '</li>\n' +
                    '<li ><p class="shrink-module" data-length="210"><span class="bill-list-name">' + unity_lang('detail_module_bill_product') + '</span>\n' +
                    '<span class="bill-list-data shrink-txt">' + (bill_detail.descript || '--') + '</span></p></li></ul>'
                )
            })
            filtrate_params.end_time = new Date(bill_list[0].date).format('yyyy-MM-dd')

            let end_time = new Date(filtrate_params.end_time)
            end_time.setFullYear(end_time.getFullYear() - 1)
            start_time = $.formatDate(end_time);
            var $pages = $('#trade_pane .pages'), total = bill_list.length;
            $pages.data('total', total)
            $pages.data('curr', 1)
            $pages.find('.page-info').html('1/' + total)
            $trade_pane.removeClass('display-none').find('.detail-tab-more').removeClass('display-none')
            $('#menu_trade_data').removeClass('display-none').find('.mu-bill-count').html($.thousand(bill_data.hits))
        }
        if(bill_data.hits <= 5){
            $trade_pane.find('.detail-tab-more').addClass('display-none')
        }
        build_shrink_open()
        fn()
    })
}

/**
 * 贸易伙伴统计
 * @returns {boolean}
 */
function dim_partner() {
    let $partner_pane = $('#partner_pane')
    if ($partner_pane.length <= 0) return false
    unity_partner(filtrate_params, 1, function (result) {
        let partner_resp = result.partner || {}, data = partner_resp.data || {},
            _list = data.list || [], hits = data.hits;
        if (partner_resp.state == 0 && _list.length > 0) {
            $partner_pane.removeClass('display-none').find('.list-content').remove()
            $('#menu_trade_partner').removeClass('display-none')
                .find('.mu-tpa-count').html($.thousand(hits))
            var _html = ''
            $.each(_list, function (index, item) {
                _html += '<li class="list-content">' +
                    '<p class="rank">' + eval(index + 1) + '</p>' +
                    '<p class="name">' +
                    '<a class="firm" target="_blank" href="/' + partner_route + '/' + item.id + '"><b>' + item.name + '</b></a>\n' +
                    '<span class="lively">' + item.country + '' + unity_lang('detail_trade_partner_type')[item.type] + '' + replaceKey(unity_lang('detail_trade_partner_deadline'), ['[@结束时间]'], [item.last_trade_date]) + '</span>\n' +
                    '</p>\n' +
                    '<p class="data">' + item.bill_count + '</p>' +
                    '<p class="data">' + item.prop + '%</p>' +
                    '<span class="details"><font onclick="trade_record(\'trade_id_std\', \'' + item.id + '\', \'' + item.last_trade_date + '\')">&gt;</font></span>' +
                    '</li>'
            })
            $partner_pane.find('.header').after(_html)
            if (hits > 5) {
                $partner_pane.find('.detail-tab-more').removeClass('display-none')
            } else {
                $partner_pane.find('.detail-tab-more').addClass('display-none')
            }
            if (hits > 0) {
                $('#menu_trade_partner').removeClass('display-none')
            } else {
                $('#menu_trade_partner').addClass('display-none')
            }
        } else {
            $partner_pane.addClass('display-none')
            $('#menu_trade_partner').addClass('display-none')
        }
    })
}

/**
 * 统一获取贸易伙伴数据
 * @param params
 * @param scene  场景 1 为概述 json， 2tab为html+json, 3 为 tag json
 * @param fn
 */
function unity_partner(params, scene, fn) {
    console.log(fn)
    params['scene'] = scene
    $.ajax('/company/detail/partner', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
            console.log(result.content,"22222222222222")
            finish++;
            fn(result)
        },
        error: function () {
            finish++;

        }
    })

}

/**
 * hs 编码维度统计
 * @returns {boolean | *}
 */
function dim_hs() {
    //hs编码统计
    let $hs_pane = $('#hs_pane')
    // 如果在最页面加载时，该维度没有数据，则表示后续任何筛选都没有值， 则不进行查询
    if ($hs_pane.length <= 0) return false

    if (_company_tag == '*') return build_dim_hs($hs_pane, company_details.hs || [], company_details.hs_count, 0)

    unity_hs(filtrate_params, 1, function (result) {
        let hs_resp = result.hs || {}, data = hs_resp.data || {}, _list = data.list || [], hits = data.hits || 0
        // 大于等于2条数据显示模块
        if (hs_resp.state == 0 && _list.length >= 2) {
            build_dim_hs($hs_pane, _list, hits, 1)
        } else {
            $('#menu_hs_code').addClass('display-none')
            $hs_pane.addClass('display-none')
        }
    })
}

function build_dim_hs($hs_pane, list, hits, s) {
    $('#menu_hs_code').removeClass('display-none')
    $('.mu-hs-count').html($.thousand(hits))
    $hs_pane.removeClass('display-none').find('.list-content').remove()

    let _html = ''
    $.each(list, function (_, item) {

        if (item != null) {

            _html += '<li class="list-content"  onclick="trade_record(\'hs\', \'' + item[s == 0 ? 'value_hs' : 'hs'] + '\', \'' + item[s == 0 ? 'last_trade_date_hs' : 'last_trade_date'] + '\')">' +
                '<p class="name"><b>' + item[s == 0 ? 'value_hs' : 'hs'] + '</b></p>' +
                '<p class="data">' + item[s == 0 ? 'count_hs' : 'bill_count'] + '</p>' +
                '<p class="data">' + item[s == 0 ? 'prop_hs' : 'prop'] + '%</p>' +
                '<span class="details"><font>&gt;</font></span>' +
                '</li>'
        }
    })
    $hs_pane.find('.header').after(_html)

    if (hits > 5) {
        $hs_pane.find('.detail-tab-more').removeClass('display-none')
    } else {
        $hs_pane.find('.detail-tab-more').addClass('display-none')
    }

    if (hits > 0) {
        $('#menu_hs_code').removeClass('display-none')
    } else {
        $('#menu_hs_code').addClass('display-none')
    }
}

/**
 * 统一获取HS 编码
 * @param params
 * @param scene  场景 1 为概述 json， 2tab为html+json, 3 为 tag json
 * @param fn
 */
function unity_hs(params, scene, fn) {
    params['scene'] = scene
    $.ajax('/company/detail/hs', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
            finish++;
            fn(result)
        },
        error: function () {
            finish++;
        }
    })

}

/**
 * 港口统计
 * @returns {boolean}
 */
function dim_port() {
    let $port_pane = $('#port_pane')
    // 如果在最页面加载时，该维度没有数据，则表示后续任何筛选都没有值， 则不进行查询
    if ($port_pane.length <= 0) return false
    unity_port(filtrate_params, 1, function (result) {
        let port_resp = result.port || {}, port_data = port_resp.data || {},
            _list = port_data.list || [], hits = port_data.hits
        if (_list.length >= 2) {
            $port_pane.removeClass('display-none').find('.list-content').remove()
            $('#menu_trade_port').removeClass('display-none').find('.mu-tpo-count').html($.thousand(hits))
            $.each(_list, function () {

                $('.port-list .header').after(
                    '<li class="list-content"  onclick="trade_record(\'port\', \'' + this.port + '\', \'' + this.last_trade_date + '\')">' +
                    '<p class="name"><b>' + this.port + '</b></p>' +
                    '<p class="data">' + this.bill_count + '</p>' +
                    '<p class="data">' + this.prop + '%</p>' +
                    '<span class="details"><font>&gt;</font></span>' +
                    '</li>')
            })
            if (hits > 5) {
                $port_pane.find('.detail-tab-more').removeClass('display-none')
            } else {
                $port_pane.find('.detail-tab-more').addClass('display-none')
            }
            if (hits > 0) {
                $('#menu_trade_port').removeClass('display-none')
            } else {
                $('#menu_trade_port').addClass('display-none')
            }
        } else {
            $port_pane.addClass('display-none')
            $('#menu_trade_port').addClass('display-none')
        }
    })
}

/**
 *
 * @param params
 * @param scene 场景 1 为概述 json， 2tab为html+json, 3 为 tag json
 * @param fn
 */
function unity_port(params, scene, fn) {
    params['scene'] = scene
    $.ajax('/company/detail/port', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
            finish++;
            fn(result)
        },
        error: function () {
            finish++;
        }
    })
}

/**
 * 贸易国统计
 * @returns {boolean}
 */
function dim_trade_country() {
    let $trade_country_pane = $('#trade_country_pane')
    // 如果在最页面加载时，该维度没有数据，则表示后续任何筛选都没有值， 则不进行查询
    if ($trade_country_pane.length <= 0) return false
    var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
    unity_trade_country(_params, 1, function (result) {
        let trade_country_resp = result.country || {}, trade_country_data = trade_country_resp.data || {},
            _list = trade_country_data.list || [], hits = trade_country_data.hits
        if (_list.length > 0) {
            $('#menu_trade_area').removeClass('display-none').find('.mu-ta-count').html($.thousand(hits))
            $trade_country_pane.removeClass('display-none').find('.list-content').remove()
            var map_chart_list = [];
            $.each(_list, function () {
                $('.trade-area-list .header').after(
                    '<li class="list-content"  onclick="trade_record(\'trade_country\', \'' + this.country + '\', \'' + this.last_trade_date + '\')">' +
                    '<p class="name"><b>' + this.country + '</b></p>' +
                    '<p class="data">' + this.bill_count + '</p>' +
                    '<p class="data">' + this.prop + '%</p>' +
                    '<span class="details"><font>&gt;</font></span>' +
                    '</li>')
                map_chart_list.push({
                    name: capitalize(this.country),
                    value: this.prop
                })
            })
            if (hits > 5) {
                $trade_country_pane.find('.detail-tab-more').removeClass('display-none')
            } else {
                $trade_country_pane.find('.detail-tab-more').addClass('display-none')
            }
            if (hits > 0) {
                $('#menu_trade_area').removeClass('display-none')
            } else {
                $('#menu_trade_area').addClass('display-none')
            }
            trade_area_map(map_chart_list)
        } else {
            $('#menu_trade_area').addClass('display-none')
            $trade_country_pane.addClass('display-none')
        }
    })
}

function unity_trade_country(params, scene, fn) {
    params['scene'] = scene
    $.ajax('/company/detail/trade-country', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
            finish++;
            fn(result)
        },
        error: function (e) {
            finish++;
        }
    })
}

/**
 * 近2年的统计数据
 */
function dim_year_stats() {

    $.ajax('/company/detail/year/stats', {
        datatype: 'text/json',
        type: 'get',
        data: filtrate_params,//缺一个起始时间
        success: function (result) {
            finish++;

            if (result.state == 0 && result.data && result.data.list.length > 0) {
                var last_data = {};
                $('.analysis-data-list').removeClass('display-none')
                $('.analysis-con').remove()
                $.each(result.data.list, function (a, b) {
                    $('.analysis-data-list').append('<li class="analysis-con"><span class="year">' + b.date + '</span>\n' +
                        '<span class="trades">' + b.bill_counts + '<i class="' + year_stats_contrast(b.bill_counts, last_data.bill_counts) + '"></i></span>\n' +
                        '<span class="amount">' + b.qty + '<i class="' + year_stats_contrast(b.qty, last_data.qty) + '"></i></span>\n' +
                        '<span class="weight">' + b.weight + '<i class="' + year_stats_contrast(b.weight, last_data.weight) + '"></i></span></li>')
                    last_data = b
                })
            } else {
                $('.analysis-data-list').addClass('display-none')
            }
        },
        error: function () {
            finish++;

        }
    })
}

/**
 * 近2年的数据对比
 * @param a
 * @param b
 * @returns {string}
 */
function year_stats_contrast(a, b) {
    if (b == null) return ''
    if (a > b) return 'icon-up'
    if (a < b) return 'icon-down'
    return ''
}

/**
 * 市场趋势分析
 */
function dim_trends() {
    var trends_params = $.extend({}, filtrate_params, {start_time: start_time}, false)
    let _start_time = new Date(trends_params.start_time.replace(/-/g, "/")),
        yoy_last_time = $.formatDate(_start_time.setFullYear(_start_time.getFullYear() - 1)),
        year_start = $.formatDate(_start_time.setFullYear(_start_time.getFullYear() - 3))

    var yoy_params = $.extend({}, trends_params, {start_time: yoy_last_time,end_time:start_time}, false)

    var year_params = $.extend({}, trends_params, {start_time: year_start,calendar_interval:'year'}, false)
    var l_arr = {
        cn: [['交易次数/次', '同比次数/次'], ['数量/箱', '同比/箱'], ['重量/kg', '同比/kg']],
        en: [['Transactions/times', 'YoY/times'], ['Quantity/ctn', 'YoY/ctn'], ['Weight/kg', 'YoY/kg']]
    }
    var r = {'bill_counts':'0', 'qty':'1', 'weight':'2'}
    var _lang=wg.lang

    unity_trends(trends_params, function (result) {
        unity_trends(yoy_params, function (result_yoy) {
            $.each(result.data, function (key, value) {
              
                let op_gb=r[key]
                let xAxis = [], yAxis = [],yoy_Axis=[]
                value.forEach(function (item) {
                    xAxis.push(item.date)
                    yAxis.push(item.value)
                })
                let yoy_value=(result_yoy.data||{})[key]
                yoy_value.forEach(function (item) {
                    yoy_Axis.push(item.value)
                })
                var legend_data = l_arr[_lang][op_gb];
                option_echart(legend_data,{xAxis: xAxis, yAxis: yAxis,yoy_Axis:yoy_Axis}, key)
            })
        })
    })
    // 年度统计
    unity_trends(year_params, function (result_yar) {
        $.each(result_yar.data, function (key, value) {

            let op_gb=r[key]
            let xAxis = [], yAxis = []
            value.forEach(function (item) {
                xAxis.push(item.date)
                yAxis.push(item.value)
            })
            var legend_data = l_arr[_lang][op_gb];
            option_echart(legend_data,{xAxis: xAxis, yAxis: yAxis}, key + '_year')
        })
        $('.year-echart').removeClass('active')
    })


  
}

//市场趋势图
function unity_trends(params, fn) {
    $.ajax('/company/detail/trends', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
            finish++;
            fn(result)
        },
        error: function () {
            finish++;

        }
    })
}


function dim_report_stats(has_product, has_tag, has_key, has_hs) {
    //非一线国家没有报告
    if (company_details.tier_one_country != 1) return false
    let $analysis_pane = $('#analysis_pane')
    $analysis_pane.addClass('display-none')
    if (!(has_product || has_tag || has_key || has_hs)) return false
    var stats_params = $.extend({}, filtrate_params, {start_time: start_time}, false)
    // 把产品标签作为关键词查询
    if (has_product) {
        stats_params['key'] = stats_params.product
        delete stats_params['product']
    }
  
    $.ajax('/async/detail/report/company/stats', {
        datatype: 'text/json',
        type: 'get',
        data: stats_params,//缺一个起始时间
        success: function (result) {
            let bill_count = parseInt(result.state == 0 ? result.data.bill_count || 0 : 0);
            
            if (bill_count <= 0) return false
            $analysis_pane.html('<h2></h2><p class="intro"></p>\n' +
                '<ul class="marketTab"></ul>\n' +
                '<div class="con show">' +
                '<ul class="market-tab">\n' +
                '<li class="market-tab-header">\n' +
                '<p class="ranking">' + unity_lang('detail_module_partners_rank') + '</p>\n' +
                '<p class="company">' + unity_lang('detail_module_company_name') + '</p>\n' +
                '<p class="data">' + unity_lang('detail_module_transactions') + '</p>\n' +
                '<p class="data">' + unity_lang('detail_module_percentage') + '</p>\n' +
                '</li></ul>\n' +
                '</div>\n' +
                '<a class="market-details" target="_blank"><font>+</font>' + unity_lang('detail_module_detail_enter') + '</a>').removeClass('display-none')
            var show_key = ''
            if (has_product || has_key || has_hs) {
                show_key = has_key || has_product?stats_params.key:(has_hs?stats_params.hs:'')
            } else {
                show_key = $('.sousou-screen p a[data-field="tag_id"].active').html()
            }
            if(wg.lang == 'cn'){
                var analysis_html = company_details.country_cn + show_key + '' + unity_lang('detail_industry_title') + ''
            }else{
                var analysis_html = company_details.country_en + show_key + '' + unity_lang('detail_industry_title') + ''
            }
          
            $analysis_pane.find('h2').text(analysis_html)
            var intro_html = replaceKey(unity_lang('detail_industry_des'), ['[@开始时间]', '[@结束时间]', '[@产品]'], [stats_params.start_time, stats_params.end_time, show_key])

            $analysis_pane.find('.intro').text(intro_html)
            var company_stats = result.data
            $('.marketTab').html('').addClass('display-none')
            
            if (company_stats.company_rank) {
                var rank = company_stats.company_rank > 2000 ? '2000+' : company_stats.company_rank
                $('.marketTab').append(
                    '<li class="active"><p><span class="name">' + unity_lang('detail_industry_rank') + '</span><br />' +
                    '<span class="amount"><b>' + rank + '</b></span>' +
                    '</p><i></i></li>' +
                    '<li><p><span class="name">' + unity_lang('detail_industry_transactions') + '</span><br />' +
                    '<span class="amount"><b>' + company_stats.bill_count + '</b></span>' +
                    '</p><i></i></li>' +
                    '<li><p><span class="name">' + unity_lang('detail_industry_partners') + '</span><br />' +
                    '<span class="amount"><b>' + company_stats.partner_count + '</b></span>' +
                    '</p><i></i></li>' +
                    '<li><p><span class="name">' + unity_lang('detail_industry_ports') + '</span><br />' +
                    '<span class="amount"><b>' + company_stats.port_count + '</b></span>' +
                    '</p><i></i></li>').removeClass('display-none')
            }
            $('.market-tab .market-tab-content').remove()
            let rp_route = ['buyer', 'supplier'][company_details.type]
            $.each(company_stats.list, function () {
                var market_list = ''
                market_list += '<li class="market-tab-content">'
                market_list += '<p class="ranking">' + this.rank + '</p>'
                if (this.curr == '1') {
                    market_list += '<p class="company"><b>' + this.name + '</b><span>' + unity_lang('detail_industry_current') + '</span></p>'
                } else {
                    market_list += '<p class="company"><b><a href="/' + rp_route + '/' + this.id + '" target="_blank">' + this.name + '</a></b></p>'
                }

                market_list += '<p class="data">' + this.count + '</p>'
                market_list += '<p class="data">' + (this.count / company_stats.total_bill).toFixed(2) + '%</p></li>'
                $('.market-tab').append(market_list)
            })
            var paras = {}
            if (company_stats.hs && company_stats.hs != '*') {
                paras['hs'] = company_stats.hs
            }

            if (company_stats.key && company_stats.key != '*') {
                paras['des'] = company_stats.key
            }
            var url = Object.keys(paras).length > 0 ? ('?' + $.param(paras)) : ''
            $('.market-details').attr('href', '/customs-data/' + company_details.country_en.toFix() + url)

        }
    })
}

/**
 * 贸易数据分页
 */
function trade_data_page() {
    $('#trade_data_page').paging({
        offset: true, // start size 模式
        callback: function (start, fn) {
            trade_data(start, fn)
        }
    })
}

/**
 * 切换至联系方式板
 */
function tab_contact(elem) {
    unity_authority($(elem).data('nv'), function () {
        show_tab_contact(elem)
    }, true)
}
let $ct_obj;
function show_tab_contact(elem) {
    window.clearTimeout($ct_obj)
    if ($(elem).data('load')) return left_menu_shift(elem)
    $ct_obj = window.setTimeout(function () {
        show_tab_contact(elem)
    }, 1000)
}


function get_contact(){
    let company_details = $(".details-head").data('company-details'),
        company_id = company_details.id,
        type = company_details.type
    if(company_details.weight<1000) return

    if(!verify_authority('v', {only_return: true, after_allow: company_details.perms}))  return xn_contact()
    $.ajax('/async/company/contacts', {
        datatype: 'text/json',
        type: 'get',
        data: {id: company_id, type: type},
        success: function (result) {
            if(result.state == 10) return robot_verify('CONTACT')
            if(result.state == 200) return xn_contact()
            $('#menu_contact').data('load', 1)
            let company_detail_list = '', data = result.data
            company_detail_list += '<p class="contact">'
            company_detail_list += '<span class="contact-name">' + unity_lang('detail_contact_person') + '</span>'
            company_detail_list += '<span  class="contact-con">' + (data.contact || '--') + '</span> </p>'
            company_detail_list += '<p class="contact"><span class="contact-name">' + unity_lang('detail_contact_tex') + '</span>'
            company_detail_list += '<span  class="contact-con">' + (data.tel || '--') + '</span> </p>'
            company_detail_list += '<p class="contact"><span class="contact-name">' + unity_lang('detail_contact_fax') + '</span>'
            company_detail_list += '<span  class="contact-con">' + (data.fax || '--') + '</span></p>'
            if (data.email) {
                company_detail_list += '<p class="contact email" ><span class="left-email"><span class="contact-name">' + unity_lang('detail_contact_mail') + '</span>'
                company_detail_list += '<span  class="contact-con email" id="email-text">' + (data.email || '--').replace(RegExp("\\;", 'gi'), '<br/>') + '</span></span>'
                company_detail_list += '<span class="copy" id="email-copy">' + unity_lang('detail_contact_copy') + '</span></p>'
            }
            company_detail_list += '<p class="contact"><span class="contact-name">' + unity_lang('detail_contact_address') + '</span>'
            company_detail_list += '<span  class="contact-con">' + (data.address || '--') + '</span> </p>'
            company_detail_list += '<p class="contact"><span class="contact-name">' + unity_lang('detail_contact_site') + '</span>'
            company_detail_list += '<span  class="contact-con">' + (data.web || '--') + '</span></p>'
            $("#tab_pane_contact .trade-contact").append(company_detail_list)
            $('#company_contact').html('<h2 class="trade-contact-title">' + unity_lang('detail_contact_title') + '<a href="/social-media?s=contact_moudle" target="_blank">' + unity_lang('detail_contact_more') + ' →</a></h2>\n' +
                '<div class=""><div>'+ company_detail_list +'</div></div>').removeClass('display-none')
        }
    })
}

function xn_contact() {
    $('#company_contact').html('<h2 class="trade-contact-title">' + unity_lang('detail_contact_title') + '<a href="/social-media?s=contact_moudle" target="_blank">' + unity_lang('detail_contact_more') + ' →</a></h2>' +
        '<div class="ct-mask"><div class="contact-img">' +
        '<img src="https://static.52wmb.com/wmb_new/images/data_imgs/contact_detail.png?v=20221109" style="padding-top:9px;padding-left:1px;"/>\n' +
        '</div></div>'
    ).removeClass('display-none')

    verify_authority('v', {
        after_allow: company_details.perms,
        call_sign: function () {
            $('#company_contact .ct-mask').wMask(mask_opt.login)
        },
        failure: function () {
            $('#company_contact .ct-mask').wMask(wg.user.vip_level ? mask_opt.vip : mask_opt.ordinary)
        }
    })
}


/**
 * 切换至贸易数据模板
 */
function tab_trade(elem) {
    unity_authority($(elem).data('nv'), function () {
        animate_pos()
        if ($(elem).data('load')) {
            left_menu_shift(elem)
            return false
        } else {
            var _params = $.extend({}, filtrate_params, {size: 20, is_page: true, start: 0})
            $.wloading()
            unity_trade_data(_params, 2, function (result) {
               
                $(elem).data('load', 1)
                $.wloading_close()
                left_menu_shift(elem)

                $('#tab_pane_trade_data').html(result.content)
                trade_data_page()
                $('#trade_data_start_time').dcalendarpicker({
                    format: 'yyyy-mm-dd',
                    language: {cn:'zh-cn',en: 'us-en'}[_lang],
                    disable_keydown: false,
                    no_today: true
                }).on('datechanged', function (e) {
                    // 这里需要处理年份下拉选中为空
                });
                $('#trade_data_end_time').data('maxdate', company_details.last_trade_date).dcalendarpicker({
                    format: 'yyyy-mm-dd',
                    language: {cn:'zh-cn',en: 'us-en'}[_lang],
                    disable_keydown: false,
                    no_today: true
                }).on('datechanged', function (e) {
                    // 这里需要处理年份下拉选中为空
                });
            })
        }
    }, true)

}

/***
 * 提单查询
 * @param start  分页请求的start   如果为null 表示搜索
 * @param page_call
 */
function trade_data(start, page_call) {
    unity_authority('v', function () {
        var _params = $.extend({}, filtrate_params, {size: 20, is_page: true}, false)

        _params['start'] = start || 0
        $.each($(document).find('#trade_search_form').serializeArray(), function () {
            if (!(this.name == 'end_time' && this.value == '')) {
                _params[this.name] = this.value
            }
        })
        unity_trade_data(_params, 4, function (result) {
            animate_pos()
            if (page_call) page_call()
            var trade = result.trade || {};
            $('#tab_pane_trade_data .list-con').remove()
            if (trade.state == 0) {
                var _data = trade.data, hits = _data.hits, _list = _data.list || [], company_bill_count = _data.hits

                $('.trade-data .trading-list-box .hits').text(hits);
                $.each(_list, function (_index, item) {
                    $('.trade-data .result-list .trading-list').append('\n' +
                        '<li class="list-con">' +
                        '<p class="date">' + item.date + '</p>' +
                        '<p class="area">' + sensitive_country(item.seller_country) + '</p>' +
                        '<p class="describe">' + item.descript + '</p>' +
                        '<p class="qty">' + item.qty + '</p>' +
                        '<p class="detail" data-id="' + item.id + '" data-index="' + _index + '" onclick="trading_record(this)"><font>&gt;</font></p>' +
                        '</li>')
                })
                if (start == null) {
                    $("#trade_data_page").paging().reload({'total': hits});

                    // trade_data_page()
                }
            } else {
                $.alert('' + unity_lang('detail_industry_error') + '')
            }
        })
    })
}

/**
 * 切换至贸易伙伴tab
 * @param elem
 * @returns {boolean}
 */
function tab_partner(elem) {
    unity_authority($(elem).data('nv'), function () {
        if ($(elem).data('load')) {
            left_menu_shift(elem)
            return false
        } else {
            $(elem).data('load', 1)
            $.wloading()
            var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
            unity_partner(_params, 2, function (result) {
                $.wloading_close()
                left_menu_shift(elem)
                // tab_partner(this)

                console.log(result.content,"000000")
                if (result.partner) {
                    $('#tab_pane_partner').html(result.content)
                    build_partner_table(result.partner.data.list, result.partner.data.hits)
                } else {
                    $('#tab_pane_partner').html('' + unity_lang('detail_industry_error') + '')
                }
            })
        }
    }, true)
}
let partner_excel_filename = '',
    partner_excel_titles = [
        unity_lang('detail_module_company_name'),
        unity_lang('detail_module_transactions'), '',
        'URL', unity_lang('detail_module_area_name'),'', '',
        unity_lang('detail_module_bill_last_date')
], partner_suffix = {cn: '贸易伙伴名录', en: 'Trade Partner List'}[_lang]
/**
 * 构建贸易伙伴datatable
 * @param data
 * @param hits
 */
function build_partner_table(data, hits) {
    var columns = [
        {"data": "name", title: unity_lang('detail_module_company_name') + '<i></i>'},
        {"data": "bill_count", title: unity_lang('detail_module_transactions') + '<i></i>'},
        {"data": "prop", title: unity_lang('detail_module_percentage') + '<i></i>'},
        {"data": "id", title: unity_lang('detail_module_detail') + '<i></i>'},
        {"data": "country", title: '国家'},
        {"data": "type"},
        {"data": "state"},
        {"data": "last_trade_date", title: '最近一次交易时间'}
    ], size = 20
    let $table = $('#content_trade_partner').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            extend:'excel',
            filename: function () {
                return partner_excel_filename
            },
            title: null,
            exportOptions: {
                modifier: {
                    page: 'current'
                },
                columns : [0, 1, 3, 4, 7],
                format: {
                    header: function ( data, columnIdx ) {
                        return partner_excel_titles[columnIdx]
                    },
                    body: function (html, row, col, node){
                        if(col == 0){
                            return $(node).find('.company-name').html()
                        }
                        if(col == 2){
                            return window.location.protocol + '//'+ window.location.hostname + '/' +partner_route +'/' + $(node).find('.detail').data('id')
                        }
                        html = $.fn.DataTable.Buttons.stripData( html, null );

                        return html
                    }
                }
            }
        }],
        data: data,
        columns: columns,
        columnDefs: [
            {
                targets: 0,
                render: function (data, type, row, meta) {
                    var str_country = sensitive_country(row.country)
                    var _html = ''
                    _html += ' <p class="partner_title"><a class="company-name" href="/' + partner_route + '/' + row.id + '" target="_blank">' + data + '</a>'
                    _html += analyse_state[row.state]
                    //   _html += '<span class="deal"><font>'+ str_country +'</font>' + partner_type_des +',双方于'+ row.last_trade_date +'有最新交易。</span>'
                    _html += '<span class="deal">' + replaceKey(unity_lang('detail_module_partner'), ['[@国家]', '[@公司属性]', '[@日期]'], [str_country, partner_type_des, row.last_trade_date]) + '</span>'

                    return '<span class="name">' + _html + '</span>'
                }
            },
            {
                targets: 2,
                render: function (data, type, row, meta) {
                    return data + '%'
                }

            },
            {
                targets: 3,
                "orderable": false,
                render: function (data, type, row, meta) {
                    return '<p class="detail" data-id="'+ data +'" onclick="trade_record(\'trade_id_std\', \'' + data + '\', \'' + row.last_trade_date + '\')"  ><font>&gt;</font></p>'
                }

            },
            {
                "visible": false,
                "targets": [4, 5, 6, 7]
            }
        ],
        displayLength: size,
        deferRender: true,
        lengthChange: false,
        // lengthMenu: [ 20, 50, 100, 200 ],
        ordering: true,
        order: [[1, 'desc']],
        destroy: true,
        info: false,
        language: {
            "lengthMenu": '每页 _MENU_ 条记录',
            "zeroRecords": '没有找到记录',
            "info": '第 _PAGE_ 页 ( 总共 _PAGES_ 页 _TOTAL_ 条记录 )',
            "infoEmpty": '无记录',
            "infoFiltered": '从 _MAX_ 条记录过滤)',
            'paginate': {
                "next": '' + unity_lang('detail_data_next') + '',
                "previous": '' + unity_lang('detail_data_previous') + ''
            },
            searchPlaceholder: '' + unity_lang('detail_module_search_partner') + ''
        },
        autoWidth: false,
    }).on('page.dt', function () {
        animate_pos()
    })
    // dt.button( 0 ).action( function( e, dt, button, config ) {
    //     console.log( 'Button '+this.text()+' activated' );
    //     this.disable();
    // } );
    // let ddd = dt.columns( [0, 1] ).data();
    // console.log('ddd', ddd)
    $('#content_trade_partner_filter').remove()
    $('#content_trade_partner_wrapper .dt-buttons').addClass('display-none')
    $('#tab_pane_partner .hits').html(hits)


    $('#trade_partner_page_len').wdropdown({
        data: [
            {value: size, text: size, selected: true},
            {value: 50, text: 50},
            {value: 100, text: 100},
            {value: 200, text: 200},
        ],
        selected: function (e) {
            $table.page.len(e.value).draw()
        }
    })
    $('.partner-export').click(function() {
        download_verify('partner', function (){
            partner_excel_filename = '{0}-{1}-{2}-{3}'.format(
                new Date().date_format('yyyy-mm-dd'),
                new Date().getTime(), company_details.name, partner_suffix
            )
            $.ajax('/async/export/company/item', {
                datatype: 'text/json',
                type: 'post',
                data: {file_name: encodeURIComponent(partner_excel_filename), size: $('#content_trade_partner tbody tr').length},
                success: function (result) {
                    if (result.state == 0) {
                        $table.buttons( 0 ).trigger();
                        return;
                    }
                    $.alert(result.message)
                }
            })
        })
    })
}

/**
 * 贸易伙伴数据查询
 */
function trade_partner() {
    // $("#company_loading").slideToggle();
    var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
    $.each($(document).find('#partner_search_form').serializeArray(), function () {
        if (!(this.name == 'end_time' && this.value == '')) {
            _params[this.name] = this.value
        }
    })
    unity_partner(_params, 3, function (result) {
        let partner = result.partner
        if (partner.state == 0) {
            build_partner_table(partner.data.list, partner.data.hits)
        }
    })
}

$(document).on('focus', '#tab_trade_partner_search', function () {
    unity_authority('v', function () {

    })
})

/**
 * 切换至HS编码tab
 * @param elem
 * @returns {boolean}
 */
function tab_hs(elem) {
    unity_authority($(elem).data('nv'), function () {
        if ($(elem).data('load')) {
            left_menu_shift(elem)
            return false
        } else {
            $(elem).data('load', 1)
            $.wloading()
            var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
            unity_hs(_params, 2, function (result) {
                $.wloading_close()
                left_menu_shift(elem)
                if (result.hs) {
                    $('#tab_pane_hs').html(result.content)
                    build_hs_table(result.hs.data.list, result.hs.data.hits)
                }
            })
        }
    }, true)
}


let hs_suffix = {cn: 'HS编码名录', en: 'HS Code List'}[_lang]
/**
 * 构建HS编码datatable
 * @param data
 * @param hits
 */
function build_hs_table(data, hits) {
    var columns = [
        {"data": "hs", title: '' + unity_lang('detail_module_hscode_name') + '<i></i>'},
        {"data": "bill_count", title: '' + unity_lang('detail_module_transactions') + '<i></i>'},
        {"data": "prop", title: '' + unity_lang('detail_module_percentage') + '<i></i>'},
        {"data": "state", title: '' + unity_lang('detail_module_detail') + ''},
    ], size = 20
    let $table = $('#content_trade_hs').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            extend:'excel',
            filename: function () {
                return '{0}-{1}-{2}-{3}'.format(
                    new Date().date_format('yyyy-mm-dd'),
                    new Date().getTime(), company_details.name, hs_suffix
                )
            },
            title: null,
            exportOptions: {
                modifier: {
                    page: 'current'
                },
                columns : [0, 1, 2],
                format: {
                    header: function ( data) {
                        return $.fn.DataTable.Buttons.stripData( data, null );
                    },
                    body: function (html, row, col, node){
                        if(col == 0) return $(node).find('.hs').html()
                        html = $.fn.DataTable.Buttons.stripData( html, null );

                        return html
                    }
                }
            }
        }],
        data: data,
        columns: columns,
        columnDefs: [

            {
                targets: 0,
                render: function (data, type, row, meta) {
                    return '<span class="name"><b class="hs">' + row.hs + '</b>' + analyse_state[row.state] + '</span>'
                }
            },
            {
                targets: 1,
                render: function (data, type, row, meta) {
                    return '<i></i>' + data
                }

            },
            {
                targets: 2,
                render: function (data, type, row, meta) {
                    return '<i></i>' + data + '%'
                }

            },
            {
                targets: 3,
                render: function (data, type, row, meta) {
                    return '<p class="detail" onclick="trade_record(\'hs\', \'' + row.hs + '\', \'' + row.last_trade_date + '\')"  ><font>&gt;</font></p>'
                }

            }
        ],
        displayLength: size,
        deferRender: true,
        lengthChange: false,
        // lengthMenu: [ 20, 50, 100, 200 ],
        ordering: true,
        order: [[1, 'desc']],
        destroy: true,
        info: false,
        language: {
            "lengthMenu": '每页 _MENU_ 条记录',
            "zeroRecords": '没有找到记录',
            "info": '第 _PAGE_ 页 ( 总共 _PAGES_ 页 _TOTAL_ 条记录 )',
            "infoEmpty": '无记录',
            "infoFiltered": '从 _MAX_ 条记录过滤)',
            'paginate': {
                "next": unity_lang('detail_data_next'),
                "previous": unity_lang('detail_data_previous')
            },
            searchPlaceholder: unity_lang('detail_module_search_hscode')
        },

        autoWidth: false,

    }).on('page.dt', function () {
        animate_pos()
    })
    $('#content_trade_hs_filter').remove()
    $('#content_trade_hs_wrapper .dt-buttons').addClass('display-none')
    $('#tab_pane_hs .hits').html(hits)
    $('#tab_pane_hs .size').html(size)


    $('#trade_hs_page_len').wdropdown({
        data: [
            {value: size, text: size, selected: true},
            {value: 50, text: 50},
            {value: 100, text: 100},
            {value: 200, text: 200},
        ],
        selected: function (e) {
            $table.page.len(e.value).draw()
        }
    })
    $('.hs-export').click(function() {
        download_verify('hs', function (){
            $table.buttons( 0 ).trigger();
        })
    })
}

// $("#hs_search_form .power-search-box .search-input").blur(function(){
//   alert('hs')
//   });
$(document).on('focus', '#tab_trade_hs_search', function () {
    unity_authority('v', function () {

    })
})

/**
 * 获取HS编码数据
 */
function trade_hs() {
    var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
    $.each($(document).find('#hs_search_form').serializeArray(), function () {
        if (!(this.name == 'start_time' && this.value == '')) {
            _params[this.name] = this.value
        }
    })
    unity_hs(_params, 3, function (result) {
        let hs = result.hs || {}
        if (hs.state == 0) {
            build_hs_table(hs.data.list, hs.data.hits)
        }
    })
}

/**
 * 切换至贸易国tab
 * @param elem
 * @returns {boolean}
 */
function tab_trade_country(elem) {
    unity_authority($(elem).data('nv'), function () {
        if ($(elem).data('load')) {
            left_menu_shift(elem)
            return false
        } else {
            $(elem).data('load', 1)
            $.wloading()
            var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
            unity_trade_country(_params, 2, function (result) {
                $.wloading_close()
                left_menu_shift(elem)
                if (result.country) {
                    $('#tab_pane_trade_country').html(result.content)
                    build_trade_country_table(result.country.data.list, result.country.data.hits)
                }
            })
        }
    }, true)

}

let trade_country_suffix = {cn: '贸易区域名录', en: 'Trade Area List'}[_lang]
/**
 * 构建贸易国datatable
 * @param data
 * @param hits
 */
function build_trade_country_table(data, hits) {
    var columns = [
        {"data": "country", title: '' + unity_lang('detail_module_area_name') + '<i></i>'},
        {"data": "bill_count", title: '' + unity_lang('detail_module_transactions') + '<i></i>'},
        {"data": "prop", title: '' + unity_lang('detail_module_percentage') + '<i></i>'},
        {"data": "state", title: '' + unity_lang('detail_module_detail') + ''},
    ], size = 20
    let $table = $('#content_trade_country').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            extend:'excel',
            filename: function () {
                return '{0}-{1}-{2}-{3}'.format(
                    new Date().date_format('yyyy-mm-dd'),
                    new Date().getTime(), company_details.name, trade_country_suffix
                )
            },
            title: null,
            exportOptions: {
                modifier: {
                    page: 'current'
                },
                columns : [0, 1, 2],
                format: {
                    header: function ( data) {
                        return $.fn.DataTable.Buttons.stripData( data, null );
                    },
                    body: function (html, row, col, node){
                        if(col == 0) return $(node).find('.country').html()
                        html = $.fn.DataTable.Buttons.stripData( html, null );

                        return html
                    }
                }
            }
        }],
        data: data,
        columns: columns,
        columnDefs: [

            {
                targets: 0,
                render: function (data, type, row, meta) {
                    return '<span class="name"><b class="country">' + data + '</b>' + analyse_state[row.state] + '</span>'
                }
            },
            {
                targets: 1,
                render: function (data, type, row, meta) {
                    return '<i></i>' + data
                }

            },
            {
                targets: 2,
                render: function (data, type, row, meta) {
                    return '<i></i>' + data + '%'
                }

            },
            {
                targets: 3,
                render: function (data, type, row, meta) {
                    return '<p class="detail" onclick="trade_record(\'trade_country\', \'' + row.country + '\', \'' + row.last_trade_date + '\')"  ><font>&gt;</font></p>'
                }

            }
        ],
        displayLength: size,
        deferRender: true,
        lengthChange: false,
        // lengthMenu: [ 20, 50, 100, 200 ],
        ordering: true,
        order: [[1, 'desc']],
        destroy: true,
        info: false,
        language: {
            "lengthMenu": '每页 _MENU_ 条记录',
            "zeroRecords": '没有找到记录',
            "info": '第 _PAGE_ 页 ( 总共 _PAGES_ 页 _TOTAL_ 条记录 )',
            "infoEmpty": '无记录',
            "infoFiltered": '从 _MAX_ 条记录过滤)',
            'paginate': {
                "next": '' + unity_lang('detail_data_next') + '',
                "previous": '' + unity_lang('detail_data_previous') + ''
            },
            searchPlaceholder: '' + unity_lang('detail_module_search_area') + ''
        },
        autoWidth: false
    }).on('page.dt', function () {
        animate_pos()
    })
    $('#content_trade_country_filter').remove()
    $('#content_trade_country_wrapper .dt-buttons').addClass('display-none')
    $('#tab_pane_trade_country .hits').html(hits)


    $('#trade_country_page_len').wdropdown({
        data: [
            {value: size, text: size, selected: true},
            {value: 50, text: 50},
            {value: 100, text: 100},
            {value: 200, text: 200},
        ],
        selected: function (e) {
            $table.page.len(e.value).draw()
        }
    })
    $('.trade-country-export').click(function() {
        download_verify('', function (){
            $table.buttons( 0 ).trigger();
        })
    })
}

$(document).on('focus', '#tab_trade_cpuntry_search', function () {
    unity_authority('v', function () {

    })
})

/**
 * 搜索贸易国数据
 */
function trade_area() {
    var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
    $.each($(document).find('#trade_country_search_form').serializeArray(), function () {
        if (!(this.name == 'start_time' && this.value == '')) {
            _params[this.name] = this.value
        }
    })
    unity_trade_country(_params, 3, function (result) {
        let _country = result.country || {}
        if (_country.state == 0) {
            build_trade_country_table(_country.data.list, _country.data.hits)
        }
    })
}

function trade_area_map(list) {
    var chart_countries = echarts.init(document.getElementById("countries"));
// var option代表定义一个名为option的变量，后面花括号里的代表我们需要作图的参数设置
    var option_countries = {
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
                color: ["#DB7093", "#3CB371", "#C71585", "#FF9900", "#800080", "#FFFF00", "#D2691E", "#3333FF", "#663333"]
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
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
            }
        },

        series: [{
            name: unity_lang('detail_module_percentage'),
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
            data: list,
        }]
    };

    chart_countries.setOption(option_countries);
}

/**
 * 切换至港口tab
 * @param elem
 * @returns {boolean}
 */
function tab_port(elem) {
    unity_authority($(elem).data('nv'), function () {
        if ($(elem).data('load')) {
            left_menu_shift(elem)
            return false
        } else {
            $(elem).data('load', 1)
            $.wloading()
            var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
            unity_port(_params, 2, function (result) {
                $.wloading_close()
                left_menu_shift(elem)
                if (result.port) {
                    $('#tab_pane_port').html(result.content)
                    build_trade_port_table(result.port.data.list, result.port.data.hits)
                    // $("#trade_port_deep").change(function(){
                    // });
                }
            })
        }
    }, true)

}


let port_suffix = {cn: '港口名录', en: 'Port List'}[_lang]
/**
 * 构建港口datatable
 * @param data
 * @param hits
 */
function build_trade_port_table(data, hits) {
    var columns = [
        {"data": "port", title: '' + unity_lang('detail_module_port_name') + '<i></i>'},
        {"data": "bill_count", title: '' + unity_lang('detail_module_transactions') + '<i></i>'},
        {"data": "prop", title: '' + unity_lang('detail_module_percentage') + '<i></i>'},
        {"data": "state", title: '' + unity_lang('detail_module_detail') + ''},
    ], size = 20
    let $table = $('#content_trade_port').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            extend:'excel',
            filename: function () {
                return '{0}-{1}-{2}-{3}'.format(
                    new Date().date_format('yyyy-mm-dd'),
                    new Date().getTime(), company_details.name, port_suffix
                )
            },
            title: null,
            exportOptions: {
                modifier: {
                    page: 'current'
                },
                columns : [0, 1, 2],
                format: {
                    header: function ( data) {
                        return $.fn.DataTable.Buttons.stripData( data, null );
                    },
                    body: function (html, row, col, node){
                        if(col == 0) return $(node).find('.port').html()
                        html = $.fn.DataTable.Buttons.stripData( html, null );

                        return html
                    }
                }
            }
        }],
        data: data,
        columns: columns,
        columnDefs: [

            {
                targets: 0,
                render: function (data, type, row, meta) {
                    return '<span class="name"><b class="port">' + data + '</b>' + analyse_state[row.state] + '</span>'
                }
            },
            {
                targets: 2,
                render: function (data, type, row, meta) {
                    return data + '%'
                }

            },
            {
                targets: 3,
                render: function (data, type, row, meta) {
                    return '<p class="detail" onclick="trade_record(\'port\', \'' + row.port + '\', \'' + row.last_trade_date + '\')"  ><font>&gt;</font></p>'
                }

            }
        ],
        displayLength: size,
        deferRender: true,
        lengthChange: false,
        // lengthMenu: [20, 50, 100, 200],
        ordering: true,
        order: [[1, 'desc']],
        destroy: true,
        info: false,
        language: {
            "lengthMenu": '每页 _MENU_ 条记录',
            "zeroRecords": '没有找到记录',
            "info": '第 _PAGE_ 页 ( 总共 _PAGES_ 页 _TOTAL_ 条记录 )',
            "infoEmpty": '无记录',
            "infoFiltered": '从 _MAX_ 条记录过滤)',
            'paginate': {
                "next": '' + unity_lang('detail_data_next') + '',
                "previous": '' + unity_lang('detail_data_previous') + ''
            }
        },
        autoWidth: false
    }).on('page.dt', function () {
        animate_pos()
    })
    $('#content_trade_port_filter').remove()
    $('#content_trade_port_wrapper .dt-buttons').addClass('display-none')
    $('#tab_pane_port .hits').html(hits)

    $('#trade_port_page_len').wdropdown({
        data: [
            {value: size, text: size, selected: true},
            {value: 50, text: 50},
            {value: 100, text: 100},
            {value: 200, text: 200},
        ],
        selected: function (e) {
            var _table_port = $('#content_trade_port').DataTable()
            _table_port.page.len(e.value).draw()
        }
    })
    $('.trade-port-export').click(function() {
        download_verify('', function (){
            $table.buttons( 0 ).trigger();
        })
    })
}

/**
 * 搜索港口数据
 */
function trade_port() {
    var _params = $.extend({}, filtrate_params, {size: 3000, is_page: false}, false)
    $.each($(document).find('#trade_port_search_form').serializeArray(), function () {
        if (!(this.name == 'start_time' && this.value == '')) {
            _params[this.name] = this.value
        }
    })
    unity_port(_params, 3, function (result) {
        let port = result.port || {}
        if (port.state == 0) {
            build_trade_port_table(port.data.list, port.data.hits)
        }
    })
}

/*侧拉贸易数据交易记录*/

var products_data;

function tab_product(elem) {
    unity_authority($(elem).data('nv'), function () {
        if ($(elem).data('load')) {
            left_menu_shift(elem)
            return false
        } else {
            $(elem).data('load', 1)
            $.wloading()
            all_product(function (result) {
                $.wloading_close()
                left_menu_shift(elem)
                if (result.product) {
                    $('#tab_pane_product').html(result.content)
                    build_product_table(result.product.data.list, result.product.data.hits)
                }
            })
        }
    }, true)

}

function all_product(fn) {
    if (products_data) {
        fn(products_data)
        return false
    }
    var _params = $.extend({}, filtrate_params, {top_count: 0}, false)
    unity_product(_params, 2, function (result) {
        if (result.product) {
            products_data = result
            fn(products_data)
        }
    })
}

let product_suffix = {cn: '产品标签名录', en: 'Product Tag List'}[_lang]
/**
 * 构建产品datatable
 * @param data
 * @param hits
 */
function build_product_table(data, hits) {
    var columns = [
        {"data": "value", title: '' + unity_lang('detail_module_product_name') + '<i></i>'},
        {"data": "count", title: '' + unity_lang('detail_module_transactions') + '<i></i>'},
        {"data": "prop", title: '' + unity_lang('detail_module_percentage') + '<i></i>'},
        {title: '' + unity_lang('detail_module_detail') + ''},
    ], size = 15
    let $table = $('#content_product').DataTable({
        dom: 'Bfrtip',
        buttons: [{
            extend:'excel',
            filename: function () {
                return '{0}-{1}-{2}-{3}'.format(
                    new Date().date_format('yyyy-mm-dd'),
                    new Date().getTime(), company_details.name, product_suffix
                )
            },
            title: null,
            exportOptions: {
                modifier: {
                    page: 'current'
                },
                columns : [0, 1, 2],
                format: {
                    header: function ( data) {
                        return $.fn.DataTable.Buttons.stripData( data, null );
                    },
                    body: function (html, row, col, node){
                        if(col == 0) return $(node).find('.product').html()
                        html = $.fn.DataTable.Buttons.stripData( html, null );

                        return html
                    }
                }
            }
        }],
        data: data,
        columns: columns,
        columnDefs: [

            {
                targets: 0,
                render: function (data, type, row, meta) {
                    // <br /><progress value="'+ row.prop +'" max="100"></progress>
                    return '<span class="name"><b class="product">' + data + '</b></span>'
                }
            },
            {
                targets: 1,
                render: function (data, type, row, meta) {
                    return '<i></i>' + data
                }

            },
            {
                targets: 2,
                render: function (data, type, row, meta) {
                    return '<i></i>' + data + '%'
                }
            },
            {
                targets: 3,
                render: function (data, type, row, meta) {
                    return '<p class="detail" onclick="trade_record(\'product\', \'' + row.value + '\', \'' + row.last_trade_date.split('T')[0] + '\')"  ><font>&gt;</font></p>'
                }

            }
        ],
        displayLength: size,
        deferRender: true,
        lengthChange: false,
        // lengthMenu: [ 15, 50, 100, 200 ],
        ordering: true,
        destroy: true,
        order: [[1, 'desc']],
        info: false,
        language: {
            "lengthMenu": '每页 _MENU_ 条记录',
            "zeroRecords": '没有找到记录',
            "info": '第 _PAGE_ 页 ( 总共 _PAGES_ 页 _TOTAL_ 条记录 )',
            "infoEmpty": '无记录',
            "infoFiltered": '从 _MAX_ 条记录过滤)',
            'paginate': {
                "next": '' + unity_lang('detail_data_next') + '',
                "previous": '' + unity_lang('detail_data_previous') + ''
            }
        },
        autoWidth: false
    }).on('page.dt', function () {
        animate_pos()
    })
    $('#content_product_filter').remove()
    $('#content_product_wrapper .dt-buttons').addClass('display-none')
    $('#tab_pane_product').find('.hits').html(hits)


    $('#trade_product_page_len').wdropdown({
        data: [
            {value: size, text: size, selected: true},
            {value: 50, text: 50},
            {value: 100, text: 100},
            {value: 200, text: 200},
        ],
        selected: function (e) {
            $table.page.len(e.value).draw()
        }
    })
    $('.product-export').click(function() {
        download_verify('', function (){
            $table.buttons( 0 ).trigger();
        })
    })
}

/**
 * 统一获取产品标签
 * @param params
 * @param scene
 * @param fn
 */
function unity_product(params, scene, fn) {
    params['scene'] = scene;
    $.ajax('/async/detail/product-list', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
            finish++;

            fn(result)
        },
        error: function () {
            finish++;

        }
    })
}

/***
 * 获取提单详情
 * @param elem 提单ID
 */
function trading_record(elem) {
    wpull.open({
        content: '<div class="msg">' + unity_lang('detail_module_loading') + '</div>',
        //内容
        isShow: true, //初始状态
        elemId: 'trading_record',
        load: function (side) {
            side.changeContent('<div class="bill-detail-head">\n' +
                '<span class="bill-detail-head-top">\n' +
                '<h2>' + unity_lang('detail_cela_title') + '</h2>\n' +
                '</span>\n' +
                '</div>\n' +
                '<div class="bill-list-box">\n' +
                '<p class="bill-list-head"><span class="total-page" data-total=""></span></p>\n' +
                '<ul class="bill-list">' + unity_lang('detail_module_loading') + '</ul>\n' +
                '</div>')
            trade_detail($(elem))
        }
    })
}

/**
 *
 * @param $elem 当前提到的详情html元素
 */
function trade_detail($elem) {
    let bill_id = $elem.data('id'), curr = $elem.data('index') + 1,
        hits = $('#tab_pane_trade_data .list-con').length

    $.ajax('/company/detail/bill', {
        datatype: 'text/json',
        type: 'get',
        data: {bill_id: bill_id, reftoken: reftoken, id: company_details.id},
        success: function (result) {

            if (result.state == 0) {
                let detail = result.data
                $('#mask_layer_trading_record .total-page')
                    .html('<span class="page-left page" data-num="-1"><</span>' +
                        '<span class="pageing">' + curr + '/' + hits + '</span><span class="page-right page" data-num="1"> >')
                    .data('total', hits).data('curr', curr)

                $('#mask_layer_trading_record .bill-list').html(trading_record_html(detail))
                return
            }
            $.alert(result.message)
        }
    })
}

/**
 * 提单详情侧拉
 * @param detail
 */
function trading_record_html(detail) {
    let _html = '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_date') + '</span>\n' +
        '<span class="bill-con">' + (detail.date || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_number') + '</span>\n' +
        '<span class="bill-con">' + (detail.bill_no || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_buyer') + '</span>\n'
    if (company_details.type != 0 && detail.buyer ) {
        _html += '<span class="bill-con"><a target="_blank" href="/buyer/'+ detail.buyer_id_std +'">' + (detail.buyer || '--') + '</a></span>'
    }else {
        _html += '<span class="bill-con">' + (detail.buyer || '--') + '</span>'
    }
    _html += '</li><li><span class="bill-name">' + unity_lang('detail_module_bill_supplier') + '</span>'

    if (company_details.type != 1 && detail.seller) {
        _html += '<span class="bill-con"><a target="_blank" href="/supplier/'+ detail.seller_id_std +'">' + (detail.seller || '--') + '</a></span>'
    }else {
        _html += '<span class="bill-con">' + (detail.seller || '--') + '</span>'
    }
    _html +='</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_import_area') + '</span>\n' +
        '<span class="bill-con">' + (detail.buyer_country || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_export_area') + '</span>\n' +
        '<span class="bill-con">' + (detail.seller_country || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_product') + '</span>\n' +
        '<span class="bill-con">' + detail.descript + '<font class="translate-mo"></font><a class="bill-translate" data-word="' + detail.descript + '" onclick="bill_translate(this)">翻译</a></span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_hscode') + '</span>\n' +
        '<span class="bill-con">' + (detail.hs || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_quantity') + '</span>\n' +
        // '<span class="bill-con">' + (detail.qty || '--')+ (detail.qty_unit || '')  + '</span>\n' +
        '<span class="bill-con">' + (detail.qty_text || (detail.qty || '--')) + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_weight') + '</span>\n' +
        // '<span class="bill-con">' + (detail.weight || '--') + (detail.weight_unit || '') + '</span>\n' +
        '<span class="bill-con">' + (detail.weight_text || (detail.weight || '--')) + '</span>\n' +
        '</li>\n' + 
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_total_price') + '</span>\n' +
        '<span class="bill-con">' + (detail.amount || '--')+ '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_total_unit_price') + '</span>\n' +
        '<span class="bill-con">' + (detail.uusd || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_export_port') + '</span>\n' +
        '<span class="bill-con">' + (detail.seller_port || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_import_port') + '</span>\n' +
        '<span class="bill-con">' + (detail.buyer_port || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_method') + '</span>\n' +
        '<span class="bill-con">' + (detail.trans || '--') + '</span>\n' +
        '</li>\n' +
        '<li>\n' +
        '<span class="bill-name">' + unity_lang('detail_module_bill_person') + '</span>\n' +
        '<span class="bill-con">' + (detail.notify_name || '--') + '</span>\n' +
        '</li>\n'
    return _html
}

/**
 * 各个维度侧拉交易记录
 * @param filed
 * @param value
 * @param last_date
 */
function trade_record(filed, value, last_date) {
    unity_authority('', function () {
        var box_id = filed + '_trade_record'
        var trade_record_params = $.extend({}, filtrate_params, {size: 1}, false)
        trade_record_params[filed] = value
        var deal_html = '<div class="trade-record"><div class="bill-detail-head">\n' +
            '<span class="bill-detail-head-top"><h2>' + unity_lang('detail_cela_title') + '</h2></span>\n' +
            '<p class="bill-data"></p></div>\n' +
            '<div class="trade-trend-box">\n' +
            '<p class="trade-trend-head">\n' +
            '<b class="bill-title">' + unity_lang('detail_cela_trend_chart') + '</b>\n' +
            '<span class="time-slot trends-date-range"></span>\n' +
            '</span></p>\n' +
            '<div class="display-none trade-trend-md"><div class="ecahrt-box">' +
            '<div class="chart tab-pane active" id="bill_counts" style="width:540px;height:300px">' + unity_lang('detail_transactionst') + '</div>\n' +
            '<div class="chart tab-pane" id="qty" style="width:540px;height:300px">' + unity_lang('detail_quantity') + '</div>\n' +
            '<div class="chart tab-pane" id="weight" style="width:540px;height:300px">' + unity_lang('detail_weight') + '</div>\n' +
            '</div>\n' +
            '<span class="chart-tab">\n' +
            '<a class="active deal-chart-tab tab" data-target=".ecahrt-box">' + unity_lang('detail_transactionst') + '</a>\n' +
            '<a class="deal-chart-tab tab" data-target=".ecahrt-box">' + unity_lang('detail_quantity') + '</a>\n' +
            '<a class="deal-chart-tab tab" data-target=".ecahrt-box">' + unity_lang('detail_weight') + '</a>\n' +
            '</span></div><div class="trade-trend-loading msg">Loading...</div></div>\n' +            
            '<div class="bill-data-list-box">\n' +
            '<div class="bill-list-box display-none">\n' +
            '<p class="bill-list-head">\n' +
            '<b class="bill-title bill-count"></b>\n' +
            '<span class="total-page">\n' +
            '<span class="page-left"><</span><span class="pageing"></span><span class="page-right">></span>\n' +
            '</span>\n' +
            '</p>' +

            '<div class="bill-search-box">\n' +
            '<span class="bill-search">\n' +
            '<fieldset class="fieldset">\n' +
            '<font>' + unity_lang('detail_module_bill_date') + '</font>' +
            '<div id="dw_record_date_year"></div>' +
            '</fieldset>\n' +
            '<fieldset class="fieldset">\n' +
            '<font>' + unity_lang('detail_module_hscode_name') + '</font><input value="" id="record_trade_hs" class="clear-target" /><i class="clear-txt" data-esearch=".bill-search-btn" >×</i>\n' +
            '</fieldset>\n' +
            '<fieldset class="fieldset">\n' +
            '<font>' + unity_lang('detail_module_product_name') + '</font><input value="" id="record_trade_product" class="clear-target"  /><i class="clear-txt" data-esearch=".bill-search-btn">×</i>\n' +
            '</fieldset>\n' +
            '<a class="bill-search-btn">' + unity_lang('detail_cela_search') + '</a></span></div>\n' +

            '<ul class="bill-list"></ul></div>' +
            '<div class="trade-loading msg">Loading...</div>' +
            '</div></div>'
        new ModelBox({
            content: deal_html,
            //内容
            isShow: true, //初始状态
            elemId: box_id,
            load: function (that) {
                // return false
                var $elem = $('#mask_layer_' + box_id)
                unity_trade_data(trade_record_params, 4, function (result) {
                    $('.bill-list-box').removeClass('display-none').siblings('.trade-loading').remove()
                    var bill_hits = (result.trade.data || {}).hits || 0
                    //构建提单信息
                    let bill_data = build_trade_record_list(box_id, result, 1)
                    if (bill_hits <= 0 || !bill_data) return false
                    $elem.find('.bill-data').html(replaceKey(unity_lang('detail_cela_description'), ['[@数量]', '[@占比]'], [bill_hits, ((bill_hits / company_bill_count) * 100).toFixed(2)]))

                    $('.bill-search-btn').click(function () {
                        unity_authority('v', function () {
                            trade_record_params['product'] = $('#record_trade_product').val();
                            trade_record_params['hs'] = $('#record_trade_hs').val();
                            unity_trade_data(trade_record_params, 1, function (cresult) {
                                build_trade_record_list(box_id, cresult, 1)
                            })
                        })
                    })
                    $('.page-right').click(function () {

                        unity_authority('v', function () {

                            if (trade_record_params.start >= bill_hits - 1) {
                                return false
                            }
                            trade_record_params.start++;

                            trade_record_list(box_id, trade_record_params)
                        })
                    })
                    $('.page-left').click(function () {

                        if (trade_record_params.start == 0) {
                            return false
                        }
                        trade_record_params.start--;
                        trade_record_list(box_id, trade_record_params)
                    })
                    var year_list = result.year.list || [];
                    $('#dw_record_date_year').wdropdown({
                        data: function (that) {

                            that.render_item({
                                value: 0,
                                text: unity_lang('detail_cela_alldate'),
                                selected: true
                            })
                            $.each(year_list, function () {
                                that.render_item({value: this.key_as_string, text: this.key_as_string})
                            })

                        },

                        selected: function (e) {
                            unity_authority('v', function () {
                                var trade_data_year = Number(e.value)
                                if (trade_data_year == 0) {
                                    trade_record_params['start_time'] = '**'
                                    trade_record_params['end_time'] = last_date
                                } else {
                                    trade_record_params['start_time'] = trade_data_year + '-01-01'
                                    trade_record_params['end_time'] = trade_data_year + '-12-31'
                                }
                                unity_trade_data(trade_record_params, 1, function (cresult) {
                                    build_trade_record_list(box_id, cresult, 1)
                                })

                            }, true)
                        }
                    })

                    var trade_trends_params = $.extend({}, filtrate_params, {}, false),
                        _lt = new Date((last_date?last_date:bill_data.date).replace(/-/g, "/"))
                    trade_trends_params[filed] = value
                    trade_trends_params['start_time'] = $.formatDate($.date_add(-1, new Date(_lt)))
                    trade_trends_params['end_time'] = $.formatDate(_lt)
                    unity_trends(trade_trends_params, function (trends_result) {
                        $('.trade-trend-md').removeClass('display-none').siblings('.trade-trend-loading').remove()
                        if (trends_result.state == 0) {
                            $('.trends-date-range').html(unity_lang('detail_cela_scope') + '：<span class="time">' + trade_trends_params.start_time + '—' + trade_trends_params.end_time)
                            $.each(trends_result.data, function (key, value) {
                                let xAxis = [], yAxis = []
                                value.forEach(function (item) {
                                    xAxis.push(item.date)
                                    yAxis.push(item.value)
                                });
                                // var index=this.item
                                option_echart_detal({xAxis: xAxis, yAxis: yAxis}, key)
                            })
                        }
                    })
                })
            }
        })
    })
}

function option_echart_detal(data, type) {
    var chartDom = document.getElementById(type);
    var trade_record_echarts = echarts.init(chartDom);
    var option = {
        xAxis: {
            type: 'category',
            data: data.xAxis,
        },
        yAxis: {
            type: 'value',
            axisTick: {
                //y轴刻度线
                show: true
            },
            axisLine: {
                show: true, // Y轴
                lineStyle: {
                    color: '#767676' // 颜色
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
    trade_record_echarts.setOption(option);
}

/**
 *
 * @param elem
 * @param result
 * @param page
 */
function build_trade_record_list(elem, result, page) {
    var $elem = $('#mask_layer_' + elem),
        trade_data = result.trade.data || {},
        list = trade_data.list,
        hits = trade_data.hits || 0,
        data = list[0]
    $elem.find('.bill-count').html(hits + '' + unity_lang('detail_cela_transactions') + '')
    $elem.find('.trade-record').removeClass('display-none')
    if (hits <= 0) {
        if (result.india_offline > 0) {
            $elem.find('.trade-record').html('<span class="not-data">根据当地法律数据不显示</span>')
            return data
        }
        $elem.find('.bill-list').html('<li><span class="not-data">' + unity_lang('report_no_date') + '</span></li>')
        $elem.find('.total-page').addClass('display-none')
        $elem.find('.bill-count').html('')
        return data
    }
    $elem.find('.bill-count').html(hits + '' + unity_lang('detail_cela_transactions') + '')
    $elem.find('.total-page').removeClass('display-none').find('.pageing').text(page + '/' + hits)
    let product = '', descript_label = data.descript_label || []
    if(descript_label.length > 0){
        $.each(descript_label, function (a, b){
            product += (',' + b.key)
        })
        product = product.slice(1);
    }

    $elem.find('.bill-list').html(trading_record_html(data))
    return data
}

function trade_record_list(box_id, params) {
    unity_trade_data(params, 3, function (result) {
        build_trade_record_list(box_id, result, params.start + 1)
    })
}

/**
 * 贸易数据统一获取方法
 * @param params
 * @param scene 场景  1 为返回json数据 2为放回模板(html), 3 , 4json+year 数据
 * @param fn
 */
function unity_trade_data(params, scene, fn) {

    params['scene'] = scene
    $.ajax('/company/detail/trade', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
         
            fn(result)
        }
    })
}

/**
 * 提单翻译
 * @param elem
 */
function bill_translate(elem) {
    verify_authority('v', {
        successful: function () {
            var words = $(elem).html('' + unity_lang('detail_module_bill_translate_ing') + '').data('word');
            $.wajax('/async/trade/translate', {
                type: 'get',
                datatype: 'text/json',
                data: {words: words, translate_to: 'zh'},
                success: function (result) {
                    if (result.state == 0) {
                        $(elem).siblings('.translate-mo').html(result.words)
                        $(elem).remove()
                    }
                }
            })
        },
        call_sign: function () {
            layer.alert('登录后可使用翻译功能')
        },

        failure: function () {
            layer.alert('' + unity_lang('detail_module_bill_translate_vip') + '')
        }
    })
}

/**
 * 获取下载权限
 */
function verify_download_perms(side) {
    $.ajax('/async/company/export-trade/perms', {
        datatype: 'text/html',
        type: 'get',
        success: function (_html) {
            side_trade_download(side, _html)
        }
    })
}

/**
 * 侧拉下载框
 * @param side
 * @param _html
 */
function side_trade_download(side, _html) {
    side.changeContent(_html)
    try {
        var $start = $('#download_date_start'), $end = $('#download_date_end'),
            download_end = company_details.last_trade_date, _format = 'yyyy-mm-dd',
            maxdate = new Date(download_end).date_format(_format)
        /*时间选择器*/
        $start.data('maxdate', maxdate).val(maxdate).dcalendarpicker({
            format: _format,
            language: {cn:'zh-cn',en: 'us-en'}[_lang],
            disable_keydown: false
        });
        $end.data('maxdate', maxdate).val(maxdate).dcalendarpicker({
            format: _format,
            language: {cn:'zh-cn',en: 'us-en'}[_lang],
            disable_keydown: false
        });
    } catch (e) {
    }
}

var download_params = {}

/**
 * 获取下载条数
 */
function get_download_count() {
    var $btn_trade_download = $('#btn_trade_download')
    $btn_trade_download.attr('disabled', 'disabled').removeClass('active').removeAttr('onclick')
    $('.download-bill-page-tips').html('').addClass('display-none')
    $('.download-count').html('').addClass('display-none')
    $('.curr-download-count').html('').addClass('display-none')

    // size 和 start 在下载场景下无效
    download_params = $.extend({}, filtrate_params, {size: 0, is_page: false}, false)
    download_params['start'] = 0
    $.each($(document).find('#trade_search_form').serializeArray(), function () {
        if (!(this.name == 'end_time' && this.value == '')) {
            download_params[this.name] = this.value
        }
    })
    download_params['start_time'] = $('#download_date_start').val()
    download_params['end_time'] = $('#download_date_end').val()
    download_params['company_id'] = company_details.id
    download_params['company_type'] = company_details.type
    download_params['country'] = company_details.country_en
    delete download_params['last_bill']


    var _st = new Date(download_params['start_time']), _et = new Date(download_params['end_time'])
    var days = (_et - _st) / (1000 * 60 * 60 * 24)


    $.ajax('/async/company-export/trade/count', {
        datatype: 'text/json',
        type: 'get',
        data: download_params,
        success: function (result) {
            var data = result.data || {}, count = data.count || 0;
            //$('.download-count').html('共计<font>'+ count +'</font>条提单符合搜索条件').removeClass('display-none')
            $('.download-count').html(unity_lang('detail_export').replace('[@数量]', count)).removeClass('display-none')

            if (count <= 500 || days == 0) {
                var size = Math.min(count, 500)
                load_js_file('JSONToExcelConvertor', function () {
                    $btn_trade_download.data('size', size).data('last-bill', '').addClass('active').removeAttr('disabled').attr('onclick', 'download_trade(this)')
                })
            }
        }
    })
}


function download_trade(elem) {


    var last_bill = $(elem).data('last-bill'), size = $(elem).data('size') || 500,
        $btn_trade_download = $('#btn_trade_download')
    $btn_trade_download.attr('disabled', 'disabled').removeClass('active').removeAttr('onclick')

    download_params['last_bill'] = last_bill
    download_params['size'] = size
    $.ajax('/async/company-export/trade', {
        datatype: 'text/json',
        type: 'get',
        data: download_params,
        success: function (result) {
            if (result.state == 0) {
                var data = result.data || {},
                    last_id = data.last_id || '', // 本次导出的最大ID
                    total_bill = data.hits || 0, //本次查询的总提单数
                    _list = data.list || [], // 本次导出数据
                    curr_count = _list.length || 0, //本次导出数量
                    title_list = data.title_list || [], //本次导出数量
                    file_name = data.file_name;
                if (curr_count > 0) {
                    $('.curr-download-count').html('' + unity_lang('detail_export_current') + '' + curr_count).removeClass('display-none')
                    //下载数据
                    JSONToExcelConvertor(file_name, function (fn) {
                        _list.forEach(function (v, i) {
                            var row = "";
                            title_list.forEach(function (fv, _) {
                                row += "<td align='center'>" + v[fv.field] + "</td>";
                            })
                            if (row) {
                                fn('<tr>' + row + '</tr>')
                            }
                        })
                    }, function (fn) {
                        title_list.forEach(function (values, index) {
                            fn(values.title)
                        })
                    });
                }
                //判断是否有下一批数据
                var rem_count = total_bill - curr_count  // 剩余下载次数
                var size = Math.min(rem_count, 500)
                if (size > 0) {
                    $('.download-bill-page-tips').html(',' + unity_lang('detail_export_left') + '' + rem_count + '').removeClass('display-none')
                    $btn_trade_download.data('last-bill', last_id).data('size', size).removeAttr('disabled').addClass('active').attr('onclick', 'download_trade(this)')
                } else {
                    $('.download-bill-page-tips').html('' + unity_lang('detail_export_have') + '').removeClass('display-none')
                    $btn_trade_download.attr('disabled', 'disabled').removeClass('active').removeAttr('onclick')
                }
                return false
            }
            $.alert(result.message)
        }
    })
}


//切换市场分析统计图
$(".marketTab li").click(function () {
    var index = $(this).index();

    $(this).addClass("active").siblings().removeClass("active");
    $(".bazaar .con").eq(index).addClass("show").siblings().removeClass("show");
})

function all_item_download(src, file_name) {

    new ExcelGen({
        "src_id": src,
        "show_header": true,
        "file_name": file_name,
        // header_custom: headercus
    }).generate();
}


/**
 * 侧拉采集
 */
function side_crawler(elem) {
    // return $.alert(_lang == 'cn'?'功能正在优化...':'Features are being optimized...')
    unity_authority('yd', function () {
        new ModelBox({
            content: '<div>Loading...</div>',
            //内容
            isShow: true, //初始状态
            elemId: 'email_list',
            load: function (that) {
                $.ajax('/company/email-crawler/task/detail', {
                    datatype: 'text/json',
                    type: 'get',
                    data: {id: filtrate_params['id']},
                    success: function (result) {
                        if (result.state == 1000) {
                            side_web_site(that)
                            return false
                        }
                        if (result.state == 0) {
                            var task_type = result.data.task_type;
                            var task_state = result.data.task_state;
                            // 网址采集
                            if (task_type == 1) {
                                if (task_state == 2) {
                                    side_crawler_website(that)
                                    return false
                                }
                                side_web_site(that)
                                return false
                            }
                            side_task_email_list(result.data.task_id, task_state, result.data, that)
                            if(task_state == 1) cycle_email_task_status(result.data.task_id)
                        }
                    }
                })
            }
        })
    }, true, $(elem))

}

/**
 * 获取任务状态
 * @param task_id
 * @param fn 回调方法
 */
function crawler_task_status(task_id, fn) {
    $.ajax('/async/email-crawler/task/state', {
        datatype: 'text/json',
        type: 'get',
        data: {task_id: task_id},
        success: function (result) {
            fn(result)
        }
    })
}

/**
 * 侧拉采集官网列表
 */
function side_web_site(that) {
    if (!that) {
        new ModelBox({
            content: '',
            //内容
            isShow: true, //初始状态
            elemId: 'websiteHtml',
            load: function (_that) {
                that = _that
            }
        })
    }
    that.changeContent('<div class="company-label-head">\n' +
        '<h2>' + unity_lang('detail_mail_title') + '</h2>\n' +
        '</div>\n' +
        '<div class="mail-collect">\n' +
        '<p class="get-mailbox">\n' +
        '<i class="mail"><img src="https://static.52wmb.com/wmb_new//images/data_imgs/mail_show.png"></i> \n' +
        '<span class="mail-hint">' + unity_lang('detail_mail_des') + '</span>\n' +
        '<span class="crawle-ing display-none"><img src="https://static.52wmb.com/wmb_new//images/loading_dian.gif"/><br/>' + unity_lang('detail_mail_website') + '</span>\n' +
        '<span class="getweb-btn">' + unity_lang('detail_mail_collection_website') + '</span>\n' +
        ' </p> \n' +
        '</div>')

    $('.getweb-btn').click(function () {
        add_task_url()
    })
}

/**
 *
 * @param that
 */
function build_side_web_site(that) {
    that.changeContent('<div class="company-label-head">\n' +
        '<h2>' + unity_lang('detail_mail_title') + '</h2>\n' +
        '</div>\n' +
        '<div class="mail-collect">\n' +
        '<p class="get-mailbox">\n' +
        '<i class="mail"><img src="https://static.52wmb.com/wmb_new/images/data_imgs/mail_show.png"></i> \n' +
        '<span class="mail-hint">' + unity_lang('detail_mail_detail_mail_destitle') + '</span>\n' +
        '<span class="crawle-ing display-none"><img src="https://static.52wmb.com/wmb_new/images/loading_dian.gif"/><br/>' + unity_lang('detail_mail_website') + '</span>\n' +
        '<span class="getweb-btn">' + unity_lang('detail_mail_collection_website') + '</span>\n' +
        ' </p> \n' +
        '</div>')
}

/*添加网址爬取任务*/
function add_task_url() {
    $.ajax('/async/email-crawler/task/url/add', {
        datatype: 'text/json',
        type: 'post',
        data: {
            id: company_details.id,
        },
        success: function (result) {
            if (result.state == 0) {
                // 添加好之后显示抓取页
                $('.crawle-ing').removeClass('display-none').siblings('.getweb-btn').addClass('display-none')
                cycle_url_task_status(result.data.task_id)
            }
        }
    })
}

function cycle_url_task_status(task_id) {
    crawler_task_status(task_id, function (result) {
        if (result.data.state != 2) {
            //抓取 0为未开始，1为采集中
            window.setTimeout(function () {
                cycle_url_task_status(task_id)
            }, 2000)
        } else {
            //抓取完成
            side_crawler_website()
        }
    })

}

/*网址采集列表*/
function side_crawler_website(that) {
    wpull.dopen(function (side){
        crawler_task_get_url(function (result) {
            build_side_crawler_website(side, result)
        })
    }, that)
}

function build_side_crawler_website(that, result) {

    var task_list = result.data.list;
    var website_list = '';
    $.each(task_list, function () {
        website_list += '<li class="website">'
        website_list += '<input type="radio" class="checked" name="website" data-task=' + JSON.stringify(this) + ' />'
        website_list += '<span class="website-name">' + this.url
        if (this.src_type == 0) {
            website_list += '<span class="official-referee">' + unity_lang('detail_mail_collection_recommend') + '</span>'
        } else if (this.src_type == 1) {
            website_list += '<span class="official-referee">' + unity_lang('detail_mail_user_input') + '</span>'
        }
       if (this.has_data) {
            website_list += '<span onclick="email_crawler_detail(' + this.use_task_id + ', 2)" class="official-referee">' + unity_lang('detail_mail_collection_caught') + '</span>'
        }
        website_list += '</span>'
        website_list += '</li>'
    })
    var mailbox = '<div class="company-label-head">\n' +
        '  <h2>' + unity_lang('detail_mail_title') + '</h2>\n' +
        ' </div>\n' +
        '<div class="mail-collect">\n' +
        '<p class="mail-collect-hint">' + unity_lang('detail_mail_site_check') + '</p>\n' +
        '<ul class="website-boc">\n' +
        '' + website_list + '' +
        '<li class="hand-website">\n' +
        '<input type="radio" class="checked" name="website" data-task=""/>\n' +
        '<span class="website-input">\n' +
        '<input placeholder="' + unity_lang('detail_mail_site_enter') + '" class="custom" value=""/>\n' +
        '</span></span>\n' +
        '</li></ul>\n' +
        '<p class="affirm-box">\n' +
        '<span class="affirm-btn" >' + unity_lang('detail_mail_collection_check') + '</span>\n' +
        '</p></div>'
    that.changeContent(mailbox)

    $('input[name="website"]').bind('change', function () {
        $('input[name="website"]').unbind('click');
        $(this).bind('click', function () {
            $(this).prop('checked', false);
            $(this).unbind('click');
        });
    });
    /*确认采集*/
    $('.affirm-btn').click(function () {

        var task_url_data = $('input[name="website"]:checked').data('task');
        var add_params = {
            id: company_details.id
        }
        if (task_url_data) {
            if(task_url_data.src_type == 0){
                add_params.url_type = task_url_data.src
            }else {
                add_params.url_type = task_url_data.src_type == 1?3:2
            }
            if (add_params.url_type == 2 || add_params.url_type == 3) {
                add_params.url_id = task_url_data.id
            }
        } else {
            add_params.url = $(".custom").val();
            add_params.url_type = 3;
        }
        add_email_crawler(add_params)

    })

}

function crawler_task_get_url(fn) {
    $.ajax('/company/email-crawler/task/get-url', {
        datatype: 'text/json',
        type: 'get',
        data: {id: company_details.id, start: 0, size: 10},
        success: function (result) {

            if (result.state == 0) {
                fn(result)
            }
        }
    })

}

/**
 * 添加邮箱爬取任务
 * @param params
 */
function add_email_crawler(params) {
    wpull.open({
        content: ' <div class="company-label-head"><h2>' + unity_lang('detail_mail_title') + '</h2></div>' +
            '<div class="mail-collect-box">' + unity_lang('detail_mail_collection_progress') + '</div>',
        isShow: true, //初始状态
        elemId: 'email_list',
        load: function (that) {
            $.ajax('/async/email-crawler/task/email/add', {
                datatype: 'text/json',
                type: 'post',
                data: params,
                success: function (result) {
                    if (result.state == 0) {
                        var task_id = result.data.task_id
                        cycle_email_task_status(task_id)
                        that.changeContent('<div class="company-label-head"><h2>' + unity_lang('detail_mail_title') + '</h2></div>' +
                            '<div class="mail-collect-box">' +

                            '<div class="crawler-ing"><img src="https://static.52wmb.com/wmb_new/images/loading_dian.gif"><span>' + unity_lang('detail_mail_collection_in_progress') + '</span></div>' +
                            '</div>')
                        // 由于存在不需要抓取的linkedin数据，不需要抓取 所以这里需要在添加完成后查询一次
                        email_crawler_detail(task_id, 0, that)
                    } else {
                        that.changeContent('<div class="company-label-head"><h2>' + unity_lang('detail_mail_title') + '</h2></div>' +
                            '<div class="mail-collect-error"><div class="mail-collect-error-title">' + unity_lang('detail_mail_collection_error') + '</div> ' +
                            '<span class="mail-collect-error-sumbit" onclick="side_crawler_website()">' + unity_lang('detail_mail_go_back') + '</span></div>')
                    }
                }
            })
        }
    })
}

function cycle_email_task_status(task_id) {
    crawler_task_status(task_id, function (result) {
        if (result.data.state != 2) {
            //抓取 0为未开始，1为采集中
            window.setTimeout(function () {
                cycle_email_task_status(task_id)
            }, 2000)
        } else {
            //抓取完成， 验证是否抓取成功（获取第一页）
            get_task_email(task_id, 0, 1,function (result) {
                build_task_email_list(task_id, 2, result.data, 1)
            })
        }
    })
}

function email_crawler_detail(task_id, state, side) {
    wpull.dopen(function (_side) {
        get_task_email(task_id, 0, 2, function (result) {
            side_task_email_list(task_id, state, result.data, _side)
        })
    }, side)
}

/*邮箱采集列表接口*/
function get_task_email(task_id, start, etype, fn) {
    $.ajax('/company/email-crawler/task/get-email', {
        datatype: 'text/json',
        type: 'get',
        data: {
            task_id: task_id,
            start: start,
            etype: etype,
        },
        success: function (result) {
            if(result.state == 2000) return $.alert('分页过大，请联系外贸邦')
            fn(result)
        }
    })
}

/**
 *
 * @param task_id
 * @param task_state
 * @param email_data
 * @param side 已存在的侧拉，为空则创建侧拉
 */
function side_task_email_list(task_id, task_state, email_data, side) {
    let email_len = (email_data.list || []).length,
        tabs = '', tabs_class = 'display-none', tab_pane = '', _class='display-none'
    if(email_len > 0) {
        if (email_data.etype == 2) {
            tabs_class = ''
            tabs += '<li class="tab email-type-tab active" data-target="#crawler_email_panes" data-hav="1" data-tid="'+ task_id +'" data-etype="2">' + unity_lang('detail_mail_linkedin') + '</li>'
            tab_pane += '<div class="item tab-pane active">' +
                '<p class="math email-title-2 display-none">' + unity_lang('detail_mail_total') + '</p>' +
                '<ul class="mail-collect" id="email_list_2"></ul>\n' +
                '<div class="paging" id="page_email_list_2"></div></ul></div>'
        }
        if(email_data.etype == 1){
            _class = 'active'
            tabs_class = 'active'
        }else if(email_data.has_cd == 1){
            _class = ''
            tabs_class = ''
        }
        tabs += '<li class="tab email-type-tab '+ _class +'" data-target="#crawler_email_panes" data-hav="'+(email_data.etype == 1?'1':'')+'" data-tid="'+ task_id +'" data-etype="1">' + unity_lang('detail_mail_web') + '</li>'
    }

    var email_box = ' <div class="company-label-head">\n' +
        '<h2>' + unity_lang('detail_mail_title') + '</h2>\n' +
        '<span class="again-collect" onclick="side_crawler_website()">' + unity_lang('detail_mail_recapture') + '</span>' +
        '<span class="export-mail display-none" id="export_crawler_email" data-total="" data-task="' + task_id + '"><i class="export-mail-ico"></i>' + unity_lang('detail_mail_export') + '</span></div>' +
        '<div class="mail-collect-box"><ul class="display-none info"></ul>' +
        '<ul class="tab-list tabs '+ tabs_class +'">' + tabs + '</ul>' +

        '<div class="tab-con" id="crawler_email_panes">' + tab_pane +
        '<div class="item tab-pane '+ _class +'">' +
        '<p class="math email-title-1 display-none">' + unity_lang('detail_mail_total') + '</p>' +
        '<ul class="mail-collect" id="email_list_1"></ul>\n' +
        '<div class="paging" id="page_email_list_1"></div>' +
        '</ul>' +
        '</div>'+
        '</div>'+

        '</div>'
    side.changeContent(email_box)
    build_task_email_list(task_id, task_state, email_data, email_data.etype)
}

/**
 * 邮箱采集列表页面
 * @param task_state 为 0 或者 1  都需要循环获取抓取状态
 * @param email_data
 * @param task_id 任务ID
 * @param etype 任务ID
 */
function build_task_email_list(task_id, task_state, email_data, etype) {
    let email_list = email_data.list || [], has_linked = email_data.has_linkedin
    if (email_list.length <= 0 && task_state == 2 && has_linked == 2) {
        let email_html = '<p class="mail-collect-no"><i><img src="https://static.52wmb.com/wmb_new/images/data_imgs/no_content.png"/></i><span>' + unity_lang('detail_mail_please_recapture') + '</span></p>'
        $('.mail-collect-box .info').removeClass('display-none').html(email_html);
        return false
    }
    build_task_email_page(email_list, etype)
    var total = email_data.total || 0
    $('.email-title-' + etype).removeClass('display-none').find('.email-count').html(total)
    $('#export_crawler_email').removeClass('display-none').data('total', total).attr('onclick', "export_crawler_email(this)")
    if (task_state !== 2) {
        $('.mail-collect-box .info').removeClass('display-none').prepend('<div class="crawler-ing"><img src="https://static.52wmb.com/wmb_new/images/loading_dian.gif"><span>' + unity_lang('detail_mail_collection_in_progress') + '</span></div>')
    } else {
        var $crawler_ing = $('.crawler-ing')
        if ($crawler_ing.length > 0) $crawler_ing.remove()
    }
    // 分页
    total = total > 1000 ? 1000: total
    $('#page_email_list_' + etype).paging({
        total: total,
        per: 20,
        offset: true,
        callback: function (start, page_call) {
            get_task_email(task_id, start, etype, function (result) {
                page_call()
                build_task_email_page(result.data.list, etype)
            })
        }
    })
}

function build_task_email_page(_list, etype) {
    var _html = ''
    $.each(_list, function () {
        _html += '<li>\n'
        _html += '<span class="mail-name"><span class="mail-name-url">' + this.email + '</span></span>\n'
        _html += '</li>'
    })
    $('#email_list_' + etype).html(_html);
}


function export_crawler_email(elem) {
    let task_id = $(elem).data('task'), total = $(elem).data('total')
    unity_authority('yd', function () {
        $.wloading()
        $.ajax('/async/email-crawler/export', {
            datatype: 'text/json',
            type: 'get',
            data: {task_id: task_id, total: total},
            success: function (result) {

                load_js_file('JSONToExcelConvertor', function () {
                    $.wloading_close()
                    let file_name = '{0}-{1}-{2}-{3}.xlsx'.format(
                        new Date().date_format('yyyy-mm-dd'),
                        new Date().getTime(), company_details.name, '' + unity_lang('detail_mail_collection') + ''
                    )
                    JSONToExcelConvertor(file_name, function (fn) {
                        result.data.list.forEach(function (v, i) {
                            fn('<tr><td align="center">' + v['email'] + '</td></tr>')
                        })
                    }, ['' + unity_lang('detail_mail_name') + '']);
                })
            }
        })
    })
}

$(".selectContainer").select(); //调用

/*首字母大写*/
function capitalize(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

function animate_pos() {
    $('body,html').animate({scrollTop: $(".sousou-screen").offset().top + 72}, 300);
}


let $top_mark = $('.right-content-box'), left_top_mark_top = $top_mark.offset().top + 80,
    right_top_mark_top = left_top_mark_top + 250
$(window).on('scroll', function () {
    var top = $(window).scrollTop(),$right_box=$('.module-content.mar-l'), right_height= $right_box.height(),
        operate_box = $('#operate_box'), left_menu = $('#left_menu')

    if (top >= right_top_mark_top) {
        operate_box.addClass("right-fixed");
    }else{
        operate_box.removeClass("right-fixed");
    }
    if (top > left_top_mark_top) {
        left_menu.css({'position': 'fixed', 'top': '20px', 'z-index': 9,'width': '168px'});
    } else {
        left_menu.css("position", 'static');
    }
})
