// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'label_count': {cn: '个标签', en: ' labels'},
    'label_soso': {cn: '搜搜', en: 'soso'},
    'label_general': {cn: '通用', en: 'General'},
    'label_buyer': {cn: '指定采购商', en: 'Designated Buyers'},
    'label_supplier': {cn: '指定供应商', en: 'Designated Suppliers'},
    'label_customised_label': {cn: '自定义标签', en: 'Customised labels'},
    'label_company_directory': {cn: '公司目录', en: 'Company Directory'},
    'label_company_total': {cn: '共计[@数量]个公司', en: '[@数量] total'},
    'label_company_name': {cn: '公司名', en: 'company'},
    'label_company_bills': {cn: '交易数', en: 'transactions'},
    'label_company_date': {cn: '交易日期', en: 'trade date'},
    'label_create': {cn: '创建标签', en: 'Create a label'},
    'label_create_tips': {cn: '请输入一个标签名', en: 'Please enter a label name'},
    'label_create_key_tips': {cn: '至少输入一个关键词', en: 'Enter at least one keyword'},
    'label_edit': {cn: '编辑', en: 'Edit'},
    'label_save': {cn: '保存', en: 'Save'},
    'label_clear': {cn: '清空', en: 'Clear'},
    'label_name_enter': {cn: '输入标签名称', en: 'Enter label name'},
    'label_name_enter_tips': {
        cn: '标签的名称可以是任意文字或符号，只要有利于您的记忆。',
        en: 'The label name can be any word or symbol, as long as it facilitates your memory.'
    },
    'label_tags_add': {cn: '添加产品或HS编码', en: 'Add a product or HS code'},
    'label_tags_add_button': {cn: '添加标签', en: 'Add'},
    'label_tags_add_tips_one': {
        cn: '1、支持产品关键字(英文)和HS编码(纯数字)的输入，每次只能添加一个产品或一个HS编码。',
        en: '1. Support inputing product keywords (English) and HS codes (pure numbers), only one product or one HS code can be added per time.'
    },
    'label_tags_add_tips_two': {
        cn: '2、目前支持3组录入，务必注意关键词拼写和编码输入的正确，以免影响报告的准确性。',
        en: '2. Currently, 3 groups of entries are supported. Be sure to input correct keywords and HS code to generate a accurate report.'
    },
    'label_tags_add_alert': {cn: '最多添加3个关键词', en: 'Up to 3 keywords can be added'},
    'label_tags_add_keywords': {cn: '请输入关键词', en: 'Please enter a keyword'},
    'label_tags_add_keywords_re': {cn: '已存在，请重新输入', en: ' already exists, please re-enter'},

    'label_del_success': {cn: '删除成功', en: 'Deleted successfully'},
    'label_operation_excet': {cn: '操作异常', en: 'Operation exceptions'},

    'tags_add_tips': {cn: '提示：创建搜索标签时，以下筛选条件至少要选择一项！', en: 'Tip: Select one of the following filters at least!'},
    'tags_add_name': {cn: '标签名称', en: 'Label name'},
    'tags_add_scope': {cn: '归属范围', en: 'Scope of Attribution'},
    'tags_label_tips': {cn: '提示：标签名称可以是中文，例如：从中国有采购的采购商', en: 'Tip: The label name can be in Chinese, e.g.'},
    'tags_contact_options': {cn: '联系方式选择', en: 'Contact options'},
    'tags_contact_email': {cn: '包含邮箱', en: 'Include email'},
    'tags_contact_contacts': {cn: '包含联系人', en: 'Include contacts'},
    'tags_contact_address': {cn: '包含公司地址', en: 'Include address'},
    'tags_contact_telephone': {cn: '包含电话', en: 'Include telephone'},
    'tags_contact_fax': {cn: '包含传真', en: 'Include Fax'},
    'tags_contact_website': {cn: '包含网址', en: 'Include website'},

    'tags_mark': {cn: '公司标记', en: 'Company mark'},
    'tags_precise_match': {cn: '精准匹配', en: 'Accurate Match'},
    'tags_multiple': {cn: '多人收藏', en: 'Multiple Collections'},
    'tags_date': {cn: '交易日期', en: 'Trade Date'},
    'tags_date_all': {cn: '所有日期', en: 'All dates'},
    'tags_date_three_years': {cn: '近三年有', en: 'Last 3 years'},
    'tags_date_one_year': {cn: '近一年有', en: 'Last 1 year'},
    'tags_date_half_year': {cn: '近半年有', en: 'Last 6 months'},
    'tags_date_3_months': {cn: '近3个月有', en: 'Last 3 months'},
    'tags_date_1_month': {cn: '近1个月有', en: 'Last 1 month'},
    'tags_times': {cn: '交易次数', en: 'Transactions'},
    'tags_times_all': {cn: '不限次数', en: 'No limit'},
    'tags_times_five': {cn: '交易次数大于5', en: 'Greater than 5'},
    'tags_times_hundred': {cn: '交易次数大于100', en: 'Greater than 100'},
    'tags_times_customization': {cn: '自定义交易次数', en: 'Customization'},
    'tags_times_customization_tips': {
        cn: '填写交易次数区间范围，纯数字，从小至大。',
        en: 'Fill in the range of the number of transactions, from small to large.'
    },
    'tags_area': {cn: '供应区域', en: 'Supply areas'},
    'tags_area_select': {cn: '选择区域', en: 'Select a area'},
    'tags_area_enter': {cn: '输入区域名', en: 'Enter a area'},
    'tags_area_enter_tips': {
        cn: '输入国家名称时，系统会自动补全；尽量点选系统提示的国家名称。',
        en: 'Enter area, the system will complete it automatically.'
    },
    'tags_port': {cn: '进出港口', en: 'Import & Export Port'},
    'tags_port_export': {cn: '出口港', en: 'Export Port'},
    'tags_port_export_enter': {cn: '输入出港口', en: 'Enter Export Port'},
    'tags_port_import': {cn: '进口港', en: 'Import Port'},
    'tags_port_import_enter': {cn: '输入进口港', en: 'Enter Import Port'},
    'tags_general': {cn: '通用', en: 'General'},
    'tags_designated_buyer': {cn: '指定采购商', en: 'Designated Buyers'},
    'tags_designated_supplier': {cn: '指定供应商', en: 'Designated Suppliers'},

    'industry_tags_add': {cn: '创建标签', en: 'Create a label'},
    'industry_tags_add_tips': {cn: '提示：标签名不能为空！', en: 'Tip: The label name cannot be empty!'},
    'industry_tags_add_success': {cn: '创建成功！', en: 'Created successfully!'},
    'industry_tags_add_over': {cn: '提示：最多可自己创建5个标签！', en: 'Tip: Create up to 5 tags of your own!'},
    'industry_tags_add_anomaly': {cn: '提示：系统异常，异常状态:', en: 'Tip: System anomaly, abnormal status'},
    'industry_tags_edit': {cn: '修改标签', en: 'edit labels'},
    'industry_tags_edit_search': {cn: '修改搜索标签', en: 'Modify search labels'},
    'industry_tags_add_failed': {cn: '提示：标签信息提交失败！', en: 'Tip: Label info submitted failed!'},
    'industry_tags_add_successfully': {cn: '提示：保存成功', en: 'Tip: Saved successfully'},
    'industry_tags_import_data': {cn: '进口数据', en: 'Import data'},
    'industry_tags_export_data': {cn: '出口数据', en: 'Export data'},
    'industry_tags_almost_year': {cn: '始终保持近一年', en: 'Maintained for nearly one year'},
    'industry_tags_fix_time': {cn: '固定时间', en: 'Fixed time'},
    'industry_tags_count': {cn: '个标签', en: ' Labels'},
    'industry_tags_name': {cn: '行业', en: ' industry'},
    'industry_tags_create_tips': {cn: '提示：创建行业报告或标签时，产品或HS编码不能为空。', en: 'Tip: The product or HS code cannot be empty.'},
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
    'industry_tags_notified': {cn: '通知人', en: 'Notifier'},
    'industry_tags_mod': {cn: '运输方式', en: 'Mode of transport'},
    'industry_tags_wqp': {cn: '重量/数量/价格', en: 'Weight/quantity/price'},
    'industry_tags_weight_range': {cn: '重量范围', en: 'Weight range'},
    'industry_tags_quantity_range': {cn: '数量范围', en: 'Quantity range'},
    'industry_tags_total_range': {cn: '总额范围', en: 'Total amount range'},
    'industry_tags_price_range': {cn: '价格范围', en: 'Price range'},
    'industry_tags_tips_empty': {cn: '提示：标签名不能为空', en: 'Tip: The label name cannot be empty'},
    'industry_tags_tips_parameters': {cn: '提示：标签名或参数重复', en: 'Tip: duplicate label names or parameters'},


    'yangben': {cn: 'yangben', en: 'Transactions'}
}

$(function () {
    let pos = queryString('pos')
   
    gain_search_taglist()
    gain_product_taglist()
    load_raw_trade_country(function (){
        gain_trade_taglist()
    })
    if(pos) {
        console.log($('.tab[data-pos=".' + pos + '"]'), 'asdfasdf', pos)
        $('.tab[data-pos=".' + pos + '"]').click()
    }
})
var _params = {
    key: '*',
    hs: '*',
    sort: 'default',
    start: 0,
    size: 1,
    company_type: 0,
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
}

// 搜索字段描述
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
/*获取搜索标签*/
function gain_search_taglist(reload) {
    search_tag_page(0, function (total, size) {
        $('#search_tags_list .conter-k-content-title span').eq(0).text(total + unity_lang('label_count'))
        if (total > size) {
            $('#search_tags').paging({
                offset: true,  // start size 模式
                total: total,
                per: size,
                reload: reload,
                callback: function (start, page_call) {
                    search_tag_page(start, page_call)
                }
            })
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
    var des_list = [], count = 0
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

function search_tag_page(start, callback) {
    $.ajax('/user-label-manage/search-tag/tag', {
        datatype: 'text/json',
        type: 'get',
        data: {
            company_type: -1,
            start: start,
            has_system: false,
            general: true,
        },
        success: function (result) {
            if (result.state == 0) {
                let _list = result.data.list || [], total = _list.length > 0 ? _list[0].total_count : 0
                if (total > 0) {
                    callback(total, result.size)
                    $('#search_tags_list ul.body').html('')
                    $('#search_tags_list .center-tags-no').addClass('display-none')
                    $.each(_list, function () {
                        let search_tags_list = '<li>'
                        search_tags_list += '<span><a href="javascript:void(0)" data-filter='+JSON.stringify(this.params)+' data-type="'+ (this.company_type == null?2:this.company_type) +'" onclick="build_url(this)">' + this['tag_name_' + _lang] + '</a></span>'
                        search_tags_list += '<span>'+ _build_params_des(3, this) +'</span>'
                        if (this.company_type == null) {
                            search_tags_list += '<span>'+unity_lang('label_general')+'</span>'
                        } else if (this.company_type == '0') {
                            search_tags_list += '<span>'+unity_lang('label_buyer')+'</span>'
                        } else if (this.company_type == '1') {
                            search_tags_list += '<span>'+unity_lang('label_supplier')+'</span>'
                        }
                        search_tags_list += '<span><a class="edit" href="javascript:void(0)" data-type="'+ (this.company_type == null?-1:this.company_type) +'" data-id="'+ this.tag_id +'" data-name="'+ this['tag_name_' + _lang] +'"  onclick="editTags(this)"></a>'
                        search_tags_list += '  <a class="del" href="#" onclick="delete_search_tags(this,' + this.tag_id + ')"></a>'
                        search_tags_list += ' </span>'
                        search_tags_list += ' </li>'
                        $(search_tags_list).appendTo('#search_tags_list ul.body').find('.edit').data('params', this.params)
                    })
                } else {
                    $('#search_tags_list ul').empty()
                    $('#search_tags_list .center-tags-no').removeClass('display-none')
                }

            }
        }
    })
}
//字符串转换为参数
function parseParam(param, key){
    var paramStr="";
    if(param instanceof String||param instanceof Number||param instanceof Boolean){
      paramStr+="&"+key+"="+encodeURIComponent(param);
    }else{
      $.each(param,function(i){
        var k=key==null?i:key+(param instanceof Array?"["+i+"]":"."+i);
        paramStr+='&'+parseParam(this, k);
      });
    }
    return paramStr.substr(1);
  };
function build_url(elem){
    unity_authority('yd', function () {
    var params = $(elem).data('filter'),type=$(elem).data('type')
       let company_type_route = {
                0:'/buyer?',
                1:'/supplier?',  
                2:'/buyer?',         
        }  
       $(elem).attr('href', company_type_route[type]+parseParam(params)).attr('target', '_blank')

    }, true)
 }

/*获取产品标签*/
function gain_product_taglist(reload) {
    customize_tags_page(0, function (total, size) {
        $('#product_tags_list .conter-k-content-title span').eq(0).text(total + unity_lang('label_count'))

        if (total > size) {
            $("#product_tags_page").paging({
                offset: true,  // start size 模式
                total: total,
                per: size,
                reload: reload,
                callback: function (start, page_call) {
                    customize_tags_page(start, page_call)
                }
            })
        }
    })
}
function customize_tags_page(start, callback) {
    start = start || 0
    $.ajax('/user-label-manage/product-tag/tag', {
        datatype: 'text/json',
        type: 'get',
        data: {start: start},
        success: function (result) {
            console.log('公司标签', result)
            if (result.state == 0) {
                let _list = result.data.list, total = _list.length > 0 ? _list[0].total_count : 0, size = result.size
                if (total > 0) {
                    var product_tags_list = ''
                    $('#product_tags_list ul.body').html('')
                    $('#product_tags_list .center-tags-no').addClass('display-none')
                    $.each(_list, function () {
                        product_tags_list += ' <li><a href="javascript:void(0)" ><span class="tag-name">' + this.tag_name + '</a></span>'
                        if (this.count > 0) {
                            product_tags_list += '<span><a href="javascript:void(0)" onclick="customize_tag_company_list(' + this.id + ')" > ' + this.count + '</a></span>'
                        } else {
                            product_tags_list += '<span><a href="javascript:void(0)" > ' + this.count + '</a></span>'

                        }
                        product_tags_list += '<span class="cz" data-tagname="' + this.tag_name + '" data-keys="' + this.tags + '" data-tagid="' + this.id + '" >' +
                            '<a class="edit" href="javascript:void(0)" onclick="side_edit_customize_tag(this)"></a>' +
                            '<a class="del" href="javascript:void(0)" onclick="delete_customize_tag(this)"></a></span></li>'
                    })
                    $('#product_tags_list ul.body').html(product_tags_list)
                    callback(total, size)

                } else {
                    $('#product_tags_list ul').empty()
                    $('#product_tags_list .center-tags-no').removeClass('display-none')
                }
            }

        }
    })
}

function customize_tag_company_list(tag_id, rstart) {
    let start = rstart || 0;
    $.wModel(function (side) {
        page_customize_tag_company_list(start, tag_id, function (total){
            side.changeContent('<div class="company-label-head"><h2>'+unity_lang('label_company_directory')+'</h2>' +
                //'<span class="count-left" >共'+ total +'家公司</span></div>' +
                '<span class="count-left" >'+replaceKey(unity_lang('label_company_total'), '[@数量]',total)+'</span></div>' +
                '<div class="customize-tag-company-content">' +
                '<ul class="title"><li>'+unity_lang('label_company_name')+'</li><li>'+unity_lang('label_company_bills')+'</li><li>'+unity_lang('label_company_date')+'</li></ul>' +
                '<ul id="company_list"></ul>' +
                '</div>')
        })
    })
}
function page_customize_tag_company_list(start, tag_id, callback){
    $.ajax('/async/customize_tag/company/list', {
        datatype: 'text/json',
        type: 'get',
        data: {start: start, tag_id: tag_id},
        success: function (result){
            if(result.state == 0) {
                let _list = result.data.list || [], total = _list.length > 0?_list[0].total_count:0
                if (callback) callback(total)
                let _html = ''
                $.each(_list, function (){
                    _html += '<li>' +
                        '<span><a href="/'+ ['buyer','supplier'][this.type] +'/'+ this.id +'" target="_blank"> '+ this.name  +'</a></span>' +
                        '<span>'+ this.bill_count +'</span>' +
                        '<span>'+ this.last_trade_date +'</span>' +
                        '</li>'
                })
                $('#company_list').html(_html)
                return false
            }
        },
        error: function (e){}
    })
}





/**
 * 加载国家筛选， 此处会加载 历史搜索（登录状态）
 */
function load_countries(callback) {
    // 加载国家
    $.ajax('/async/common/countries', {
        datatype: 'text/json',
        type: 'get',
        data: {tier: 0},
        success: function (result) {
            callback(result.country_list)
        }
    })
}

var country_items = [], port_items = [];
function _build_country_items(callback) {
    if (country_items.length > 0) {
        callback(country_items)
    } else {
        load_countries(function (country_list) {
            $.each(country_list, function () {
                $.each(this.country_list, function (key, value) {
                    country_items.push(value.country_en)
                })
            })
            country_items.push('china')
            callback(country_items)
        })
    }
}


function _build_port_items(fn) {
    if(port_items.length >0) {
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

function port_list(fn, start, size) {

    $.ajax('/async/common/ports', {
        datatype: 'text/json',
        type: 'get',
        data: {start: start, size: size},
        success: function (result) {
            fn(result)
        }
    })
}

//创建公司标签
function add_product_tags() {
    unity_authority('yd', function () {
    build_customize_tag_side(unity_lang('label_create'), function (that) {
        /*保存公司标签*/
        $('#company_product_save').click(function () {
            var tag_name = $('.tags-name-input').val()
            if (!tag_name) {
                 $.alert(unity_lang('label_create_tips'))
                return false
            }
            var keys = that.get_keys()
            if (keys.length <= 0) {
                 $.alert(unity_lang('label_create_key_tips'))
                return false
            }
            $.ajax('/async/detail-customize-tag/add', {
                datatype: 'text/json',
                type: 'post',
                data: {keys: keys.join('|'), tag_name: tag_name},
                success: function (result) {
                    if (result.state == '0') {
                        that.hide();
                        gain_product_taglist(true)
                    }
                }
            })
        })
    })
    }, true)
    }
/**
 * 编辑公司标签侧拉
 */
/**
 * 编辑公司标签侧拉
 * @param elem
 */
 function side_edit_customize_tag(elem) {
    unity_authority('yd', function () {
    build_customize_tag_side(unity_lang('label_edit'), function (that) {
        var $elem = $(elem), $parent =$elem.parents('.cz'), tag_name = $parent.data('tagname'),
            tag_id = $parent.data('tagid');
        var keys = ($parent.data('keys')||'').toString().split('|')
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
            let spkeys = keys.join('|')
            $.ajax('/async/detail-customize-tag/change', {
                datatype: 'text/json',
                type: 'post',
                data: {keys: spkeys, tag_name: tag_name, tag_id: tag_id},
                success: function (result) {
                    if (result.state == '0') {
                        that.hide();
                        $parent.data('keys', spkeys).data('tagname', tag_name)
                            .parents('li').find('.tag-name').html(tag_name)
                    }
                }
            })
        })
    })
}, true)
}

function build_customize_tag_side(title, fn){
    var content = ' <div class="collection-label-head">' +
        '<h2>' + title + '</h2>' +
        '<span class="finish" id="company_product_save">'+unity_lang('label_save')+'</span>' +
        '<span class="finish" id="company_product_clear">'+unity_lang('label_clear')+'</span>' +
        '</div>' +
        '<div class="makes-tags-box" id="cdstoms_from">' +
        '<p class="makes-tags">\n' +
        '<b>'+unity_lang('label_name_enter')+'</b>\n' +
        '<span class="tags-input-box power-search-box">\n' +
        '<input class="tags-name-input clear-target" id="tags_name_input" autocomplete="off"/>\n' +
        '<i class="clear-txt">×</i>\n' +
        '</span>\n' +
        '<span class="tag-hint">'+unity_lang('label_name_enter_tips')+'</span>\n' +
        '</p>\n' +
        '<p class="makes-tags">\n' +
        '<b>'+unity_lang('label_tags_add')+'</b>\n' +
        '<span class="tags-input-box">' +
        '<input class="tags-hs-input" id="product_text" autocomplete="off"/>' +
        '<span class="add-tags-btn">'+unity_lang('label_tags_add_button')+'</span>\n' +
        '</span>\n' +
        '<span class="add-tags"></span>\n' +
        '<span class="tag-hint">'+unity_lang('label_tags_add_tips_one')+'<br/>'+unity_lang('label_tags_add_tips_two')+'</span>\n' +
        '</p>' +
        '</div>';
    new ModelBox({
        content: content,
        //内容
        isShow: true, //初始状态
        elemId: 'customize_tag_detail',
        load: function (that) {
            var keys = []
            that.get_keys =function () {
                return keys
            }
            that.set_keys = function(_keys){
                keys = _keys
            }
            fn(that)
            $('.add-tags-btn').click(function () {
                if (keys.length >= 3) {
                     $.alert(unity_lang('label_tags_add_alert'))
                    return false
                }
                var $key = $('#product_text'), key = $key.val()
                if (!key) {
                     $.alert(unity_lang('label_tags_add_keywords'))
                    return false
                }
                if (keys.indexOf(key) >= 0) {
                     $.alert('[' + key + ']'+unity_lang('label_tags_add_keywords_re'))
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

function delete_customize_tag(elem){
    var $elem = $(elem), $parent =$elem.parents('.cz'),
        tag_id = $parent.data('tagid');
    $.ajax('/async/detail-customize-tag/delete', {
        datatype: 'text/json',
        type: 'post',
        data: {tag_id: tag_id},
        success: function (result){
            if(result.state ==0){
                $.alert(unity_lang('label_del_success'))
                $elem.parents('li').remove()
            }else{
                $.alert(unity_lang('label_operation_excet'))
            }
        },
        error: function (e){
            $.alert(unity_lang('label_operation_excet'))
        }
    })

}

/*搜索标签*/
function mode_search_tag(title, company_type, callback) {
    // region madel html
    var found_tags_html = ' <div class="modal-header">\n' +
        '<h1 class="title">'+ title +'</h1>\n' +
        '<p>\n' +
        '<span id="submit_save_tag" class="creation">'+unity_lang('label_save')+'</span>\n' +
        '<span id="empty_params_btn" class="empty">'+unity_lang('label_clear')+'</span>\n' +
        ' </p>\n' +
        ' </div>\n' +
        '<p class="hint" id="message">'+unity_lang('tags_add_tips')+'</p>\n' +
        '<form name="search_tags" id="search_tags_from">\n' +
        '<input type="hidden" name="tag_id" value="">\n' +
        ' <div class="label-name filtrate">\n' +
        '<h3>'+unity_lang('tags_add_name')+'</h3>\n' +
        '<div class="tag-name">\n' +
        '<fieldset class="name">\n' +
        '<font>'+unity_lang('tags_add_name')+'</font>\n' +
        '<input name="tag_name" id="tag_names"  />\n' +
        '<i data-idel="tag_names">×</i>\n' +
        '</fieldset>\n' +
        '<fieldset class="scope-box">\n' +
        '<font>'+unity_lang('tags_add_scope')+'</font>\n' +
        '<div id="dw_company_type"></div>\n' +
        '<input type="hidden" id="company_type" name="company_type" value="'+ company_type +'"> ' +
        '</fieldset>\n' +
        '</div>\n' +
        '<font class="caution-tips">'+unity_lang('tags_label_tips')+'</font>\n' +
        ' </div>\n' +
        '<div class="contact-box filtrate">\n' +
        '<h3>'+unity_lang('tags_contact_options')+'</h3>\n' +
        '<ul class="filtrate-list" id="multiple">\n' +
        ' <li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="email">'+unity_lang('tags_contact_email')+'\n' +
        '</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="contact">'+unity_lang('tags_contact_contacts')+'\n' +
        '</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="address">'+unity_lang('tags_contact_address')+'\n' +
        '</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="tel">'+unity_lang('tags_contact_telephone')+'\n' +
        '</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="fax">'+unity_lang('tags_contact_fax')+'\n' +
        '</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="filter_weight" value="website">'+unity_lang('tags_contact_website')+'\n' +
        '</li>\n' +
        '</ul>\n' +
        '</div>\n' +
        '<div class="company-tag filtrate">\n' +
        '<h3>'+unity_lang('tags_mark')+'</h3>\n' +
        '<ul class="filtrate-list">\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="company_mark" value="follow">'+unity_lang('tags_multiple')+'</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="checkbox" name="company_mark" value="product">'+unity_lang('tags_precise_match')+'</li>\n' +
        '</ul>\n' +
        '</div>\n' +
        '<div class="trade-date filtrate">\n' +
        '<h3>'+unity_lang('tags_date')+'</h3>\n' +
        '<ul class="filtrate-list">\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="*">'+unity_lang('tags_date_all')+'</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="36">'+unity_lang('tags_date_three_years')+'</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="12">'+unity_lang('tags_date_one_year')+'</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="6">'+unity_lang('tags_date_half_year')+'</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="3">'+unity_lang('tags_date_3_months')+'</li>\n' +
        '<li><i class="input_style checkbox_bg"></i><input type="radio" name="filter_date" value="1">'+unity_lang('tags_date_1_month')+'</li>\n' +
        '</ul>\n' +
        '</div>\n' +
        '<div class="trade-times filtrate">\n' +
        '<h3>'+unity_lang('tags_times')+'</h3>\n' +
        '<ul class="filtrate-list">\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" class="mex-radio" value="*">'+unity_lang('tags_times_all')+'</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" class="mex-radio" value="5">'+unity_lang('tags_times_five')+'</li>\n' +
        '<li><i class=\'input_style checkbox_bg\'></i><input type="radio" name="filter_bill_count_min" class="mex-radio" value="100">'+unity_lang('tags_times_hundred')+'</li>\n' +
        '</ul>\n' +

        '<div class="filtrate-list-tips">\n' +
        '<fieldset>\n' +
        '<font>'+unity_lang('tags_times_customization')+'</font>\n' +
        '<input type="text" placeholder="from" class="two-input mex-text two-input-1" id="start_deal_count" name="filter_bill_count_min" />\n' +
        '<input type="text" placeholder="to" class="two-input mex-text" id="over_deal_count" name="filter_bill_count_max" />\n' +
        '</fieldset>\n' +
        '<font class="caution">'+unity_lang('tags_times_customization_tips')+'</font>\n' +
        '</div>\n' +

        '</div>\n' +
        '<div class="supply-area filtrate">\n' +
        '<h3>'+unity_lang('tags_area')+'</h3>\n' +

        '<div class="filtrate-list-tips">\n' +
        ' <fieldset class="auto-parent">\n' +
        '<font>'+unity_lang('tags_area_select')+'</font>\n' +
        '<input type="text" placeholder="'+unity_lang('tags_area_enter')+'" class="one-input  clear-target" value="" id="filter_trade_countries" name="trade_countries" />\n' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '<font class="caution">'+unity_lang('tags_area_enter_tips')+'</font>\n' +
        '</div>\n' +

        ' </div>\n' +
        '<div class="access-port filtrate">\n' +
        '<h3>'+unity_lang('tags_port')+'</h3>\n' +
        '<div class="port">\n' +
        '<fieldset class="auto-parent">\n' +
        '<font>'+unity_lang('tags_port_export')+'</font>\n' +
        '<input type="text" placeholder="'+unity_lang('tags_port_export_enter')+'" value="" id="seller_ports" name="buyer_ports"  class="clear-target"/>\n' +
        '<i data-idel="seller_ports" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '<fieldset class="unload auto-parent">\n' +
        '<font>'+unity_lang('tags_port_import')+'</font>\n' +
        '<input type="text" placeholder="'+unity_lang('tags_port_import_enter')+'" value="" id="buyer_ports" name="seller_ports" class="clear-target" />\n' +
        '<i data-idel="buyer_ports" class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        '</div>\n' +
        '</div>\n' +
        '</form>';

    // endregion
    $.wModel(function (side){
        side.changeContent(found_tags_html)
        $('#filter_trade_countries').autocomplete({
            source: function (request, response) {
                let _that = this
                _build_country_items(function (array){
                    response(_that.filter(array, request.term));
                })
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
        $('#dw_company_type').wdropdown({
            data: [
                {value: '-1', text: unity_lang('tags_general'), selected: -1==company_type},
                {value: '0', text: unity_lang('tags_designated_buyer'), selected: 0==company_type},
                {value: '1', text: unity_lang('tags_designated_supplier'), selected: 1==company_type}
            ],
            selected: function (e){
                $('#company_type').val(e.value)
            }
        })
        $('#empty_params_btn').click(function () {
            $(":input", "#search_tags_from")
                .not(":button", ":reset", "hidden", "submit")
                .val("")
                .removeAttr("checked")
                .removeAttr("selected");

        })
        callback(side)
    })
}



/**
 * 自定义标签有变动后的操作
 * @param data
 */
function tag_changes_after(data) {
    build_top_menu(data)
    var $all = $('.sousou-screen p a[data-value="*"]')
    if(!$all.hasClass('active')){
        $all.click()
    }
}
function create_tag(){
    unity_authority('yd', function () {
    mode_search_tag(unity_lang('industry_tags_add'), -1, function (side){
        $('#submit_save_tag').click(function () {
            var tag_name = $("#tag_names").val()
            if (tag_name == '' || tag_name == null || tag_name == '*') {
                $('.hint').css('color', 'red');
                $('.hint').text(unity_lang('industry_tags_add_tips'));
                return false
            }
            build_tag_params(function (tags_params) {
                tags_params.tag_name = tag_name
                $.loadajax('/async/tags/create', {
                    type: 'post',
                    data: tags_params,
                    datatype: 'json/text',
                    success: function (data) {
                        if (data.state == 0) {
                            $('.hint').text(unity_lang('industry_tags_add_success')).css('color', 'red');
                            side.hide()
                            gain_search_taglist(true)
                        } else if (data.state == 1000) {
                            $('.hint').text(unity_lang('industry_tags_add_over')).css('color', 'red');
                        } else if (data.state == 100) {
                            $('.hint').text(unity_lang('industry_tags_add_anomaly')+': 100').css('color', 'red');
                        }
                    }
                });
            })

        })
    })
    }, true)
    }
//标签详情 - 修改标签
function editTags(elem) {
    unity_authority('yd', function () {
    var tagsParams = $(elem).data('params'), tag_name = $(elem).data('name'), tag_id = $(elem).data('id'),
        company_type = Number($(elem).data('type'))
    // 创建侧拉
    mode_search_tag(unity_lang('industry_tags_edit'), company_type, function (side){
        $('.modal-header .title').html(unity_lang('industry_tags_edit_search'))
        $('#search_tags_from [name="tag_name"]').val(tag_name)
        $('#search_tags_from [name="tag_id"]').val(tag_id)
        $.each(tagsParams, function (key, value) {
            var elems = $('#search_tags_from [name="' + key + '"]')
            if (elems && elems.length > 0) {
                let $elem = $(elems[0]), type = $elem.attr('type')
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
        // 保存
        $('#submit_save_tag').click(function () {
            let tag_name = $("#tag_names").val(), tag_id = $('#search_tags_from [name="tag_id"]').val();
            if (tag_id == '' || tag_id == null || tag_id == '*' || tag_id == '0') {
                return $.alert(unity_lang('industry_tags_add_failed'))
            }
            if (tag_name == '' || tag_name == null || tag_name == '*') {
                return $.alert(unity_lang('industry_tags_add_tips'))
            }
            build_tag_params(function (tags_params) {
                tags_params.tag_name = tag_name
                tags_params.tag_id = tag_id
                $.loadajax('/async/tags/edit', {
                    type: 'post',
                    data: tags_params,
                    datatype: 'json/text',
                    success: function (data) {
                        if (data.state == 0) {
                            side.hide()
                            return $.alert(unity_lang('industry_tags_add_successfully'))
                        }
                        if (data.state == 100) {
                            return $.alert(unity_lang('industry_tags_add_anomaly'))
                        }
                        $.alert(data.message)
                    }
                });
            })
        })

    })
}, true)
}
// 构建标签参数
function build_tag_params(fn) {
    var tags_params = $.extend(true, {}, _params)
    $.each(tags_params, function (key, value) {
        var elems = $('#search_tags_from [name="' + key + '"]')
        if (elems && elems.length > 0) {
            let $elem = $(elems[0]), type = $elem.attr('type'), has_checked
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
                let arr = $('#search_tags_from :checkbox[name="' + key + '"]:checked'), _vals = []
                $.each(arr, function () {
                    _vals.push($(this).val())
                })
                if(_vals.length > 0) {
                    tags_params[key] = _vals.join('|')
                }
            }

        }
    })
    //归属范围
    var scope_selected = $("#scopeSelected option:selected").val();
    if (scope_selected) {
        tags_params.company_type = scope_selected
    }
    fn(tags_params)
}
/*清空*/
function empty_tag_params() {
    $(':input', '#search_tags')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
}

/*删除搜索标签*/
function delete_search_tags(elem,id) {
    $.ajax('/user-label-manage/search-tag/tag_delete', {
        datatype: 'text/json',
        type: 'post',
        data: {
            id: id
        },
        success: function (result) {
            if (result.state == '0') {
                $(elem).parent().parent().remove()
            }
            console.log(result, 'result')
        }
    })
}




// region 行业标签



let trade_data_types = {
        0: {txt: unity_lang('industry_tags_import_data'), date_field: 'import_date'},
        1: {txt: unity_lang('industry_tags_export_data'), date_field: 'export_date'}
    },
    trade_date_types = {
        0: unity_lang('industry_tags_almost_year'),
        1: unity_lang('industry_tags_fix_time')
    },
    raw_trade_country = {};
function load_raw_trade_country(callback) {
    $.ajax('/async/raw/trade/countries', {
        datatype: 'text/json',
        type: 'get',
        success: function (result) {
            callback()
            $.each(result.data.list, function (){
                raw_trade_country[this.country] = this
            })
        }
    })
}
/*获取行业标签*/
function gain_trade_taglist() {
    trade_tag_page(0, function (total, size) {
        $('#trade_tags_list .conter-k-content-title span').eq(0).text(total + unity_lang('label_count'))
        if (total > size) {
            $("#trade_tags_page").paging({
                offset: true,  // start size 模式
                total: total,
                per: size,
                callback: function (start, page_call) {
                    trade_tag_page(start, page_call)
                }
            })
        }
    })
}

function trade_tag_page(start, callback) {
    $.ajax('/user-label-manage/trade-tags/tag', {
        datatype: 'text/json',
        type: 'get',
        data: {start: start},
        success: function (result) {
            if (result.state == 0) {
                let _list = result.data.list || [], total = _list.length > 0 ? _list[0].total_count : 0,
                    size = result.size
                if (total > 0) {
                    $('#trade_tags_list ul.body').html('')
                    $('#trade_tags_list .center-tags-no').addClass('display-none')
                    $.each(_list, function () {
                        let _html = '<li>\n'
                        _html += '<span><a href=" javascript:void(0)" data-country="'+this.country+'"  onclick="trade_tag_url(this,'+this.id+')">' + this.label_name + '</a></span>\n'
                        _html += '<span>' + this.country + '</span>\n'
                        _html += '<span>' + trade_data_types[this.data_type].txt + '</span>\n'
                        _html += '<span>' + trade_date_types[this.date_type] + '</span>\n'
                        _html += '<span class="ope"><a class="edit" onclick="edit_trade_tags(this)"></a>\n'
                        _html += '<a class="del" onclick="delete_trade_tags(this)"></a>\n'
                        _html += '</span>\n'
                        _html += '</li>'
                        $(_html).appendTo('#trade_tags_list ul.body').find('.ope').data('tag', this)
                    })
                    callback(total, size)
                } else {
                    $('#trade_tags_list ul').empty()
                    $('#trade_tags_list .center-tags-no').removeClass('display-none')
                }
            }
        }
    })
}
function trade_tag_url(elem,id) {
   let country=$(elem).data('country');
    unity_authority('yd', function () {
        $(elem).attr('href','/customs-data/'+country+'?tags='+id+'').attr('target', '_blank')
    }, true)

}

function edit_trade_tags(elem) {
    unity_authority('yd', function () {
    let $this = $(elem),$ope = $this.parents('.ope'),tag_detail = $ope.data('tag'), params = tag_detail.params,
        date_type = Number(tag_detail.date_type), data_type = Number(tag_detail.data_type);
    // region 侧拉html
    var _html = '<div class="company-label-head">' +
        '<h2>'+unity_lang('industry_tags_edit')+'</h2>' +
        '<span class="save" id="customs_tags_save">'+unity_lang('label_save')+'</span>' +
        '<span class="clear" id="customs_tags_clear">'+unity_lang('label_clear')+'</span>' +
        '</div>' +
        '<div class="found-trade-tags-box">' +
        '<p class="hint">'+unity_lang('industry_tags_create_tips')+'</p>' +
        '<form id="cdstoms_from">' +
        '<div class="trade-tags-box">' +
        '<b class="subtitle">'+unity_lang('industry_tags_name_datatype')+'</b>' +
        '<div class="tags-name">' +
        '<fieldset class="">' +
        '<font>'+unity_lang('industry_tags_title')+'</font>' +
        '<input placeholder="" name="tag_name" value=""/>' +
        '</fieldset>' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_datatype')+'</font>' +
        '<input type="hidden" id="data_type" name="ie" value="'+ data_type +'">' +
        '<span>'+ trade_data_types[data_type].txt +'</span>' +
        '</fieldset>' +
        '</div>' +
        '</div>' +
        '<div class="trade-tags-box">' +
        '<b class="subtitle">'+unity_lang('industry_tags_select_date')+'</b>' +
        '<div class="trade-date">' +
        '<fieldset class="customs-date">' +
        '<font>'+unity_lang('industry_tags_select_date')+'</font>' +
        '<input placeholder="from" name="start_date" class="start-date" id="customs_start_date" value=""/><span>—</span>' +
        '<input placeholder="to" name="end_date" class="end-date" id="customs_end_date" value=""/>' +
        '</fieldset>' +
        '<span class="custom-date">' +
        '<input type="radio"  name="date_type" value="0"/>' +
        '<font>'+unity_lang('industry_tags_data_one')+'</font><br />' +
        '<input type="radio" name="date_type" value="1" />' +
        '<font>'+unity_lang('industry_tags_data_two')+'</font>' +
        '</span>' +
        '</div>' +
        '</div>' +
        '<div class="trade-tags-box">' +
        '<b class="subtitle">'+unity_lang('industry_tags_hscode_product')+'</b>' +
        '<p class="product-hint">'+unity_lang('industry_tags_hscode_product_tips')+'</p>' +
        '<fieldset class="product-name">' +
        '<font>'+unity_lang('industry_tags_product_name')+'</font>' +
        '<input placeholder="'+unity_lang('industry_tags_product_name_tips')+'" value="" id="product_text" />' +
        '<input value="" type="hidden" name="des" />' +
        '<span class="add" id="product_add">'+unity_lang('industry_tags_add_button')+'</span>' +
        '</fieldset>' +
        '<p class="product-name-tag" id="product_list"></p>' +
        '<fieldset class="product-name">' +
        '<font>'+unity_lang('industry_tags_hscode_name')+'</font>' +
        '<input placeholder="" value="" id="hs_text"/>' +
        '<input value="" type="hidden" name="hs" />' +
        '<span class="add" id="hs_add">'+unity_lang('industry_tags_add_button')+'</span>' +
        '</fieldset>' +
        '<p class="product-name-tag" id="product_hs_tag"></p>' +
        '<fieldset class="product-name">' +
        '<font>'+unity_lang('industry_tags_bill_no')+'</font>' +
        '<input  value="" name="bill_no"/>' +
        '</fieldset>' +
        '</div>' +
        '<div class="trade-tags-box" id="and_supply_box">' +
        '<b class="subtitle">'+unity_lang('industry_tags_company_area')+'</b>' +
        '<div class="and-supply">' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_buyer_name')+'</font>' +
        '<input  name="buyer" value="" type="text" class="clear-target" />' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_supplier_name')+'</font>' +
        '<input name="seller" value="" type="text" class="clear-target" />' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        '</div>' +
        '<div class="and-supply">' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_purchasing')+'</font>' +
        '<input name="buyer_country" value=""  class="clear-target" type="text"/>' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_supply')+'</font>' +
        '<input name="seller_country" value="" type="text" class="clear-target"/>' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        '</div>' +
        '<div class="and-supply">' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_origin')+'</font>' +
        '<input  name="origin_country" value="" type="text" class="clear-target"/>' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        // '<fieldset>' +
        // '<font>目的国</font>' +
        // '<input name="" type="text"/>' +
        // '</fieldset>' +
        '</div>' +
        '</div>' +
        '<div class="trade-tags-box">' +
        '<b class="subtitle">'+unity_lang('industry_tags_port_method')+'</b>' +
        '<div class="and-supply">' +
        '<fieldset>' +
        '<font>'+unity_lang('tags_port_export')+'</font>' +
        '<input name="seller_port" value="" type="text" class="clear-target"/>' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        '<fieldset>' +
        '<font>'+unity_lang('tags_port_import')+'</font>' +
        '<input name="buyer_port" value="" type="text" class="clear-target"/>' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        '</div>' +
        '<div class="and-supply">' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_notified')+'</font>' +
        '<input name="notify_name" value="" type="text" class="clear-target"/>' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_mod')+'</font>' +
        '<input name="trans" value="" type="text" class="clear-target"/>' +
        '<i data-idel="filter_trade_countries" class="clear-txt">×</i>\n' +
        '</fieldset>' +
        '</div>' +
        '</div>' +
        '<div class="trade-tags-box">' +
        '<b class="subtitle">'+unity_lang('industry_tags_wqp')+'</b>' +
        '<div class="amount">' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_weight_range')+'</font>' +
        '<input name="weight_min" value="" type="text" placeholder="from"/>' +
        '<span>—</span>' +
        '<input name="weight_max" value="" type="text" placeholder="to"/>' +
        '</fieldset>' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_quantity_range')+'</font>' +
        '<input name="qty_min" value="" type="text" placeholder="from"/>' +
        '<span>—</span>' +
        '<input name="qty_max" value="" type="text" placeholder="to"/>' +
        '</fieldset>' +
        '</div>' +
        '<div class="amount">' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_total_range')+'</font>' +
        '<input name="amount_min" value="" type="text" placeholder="from" />' +
        '<span>—</span>' +
        '<input name="amount_max" value="" type="text" placeholder="to" />' +
        '</fieldset>' +
        '<fieldset>' +
        '<font>'+unity_lang('industry_tags_price_range')+'</font>' +
        '<input name="uusd_min" value="" type="text" placeholder="from"/>' +
        '<span>—</span>' +
        '<input name="uusd_max" value="" type="text" placeholder="to"/>' +
        '</fieldset>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>'
    // endregion
    $.wModel(function (side) {
        side.changeContent(_html)
        $('#wd_ie').wdropdown({
            data: function (that){
                $.each(trade_data_types, function (key, value){
                    that.render_item({value: key, text: value.txt, selected: key == data_type})
                })
            },
            selected:  function (e){
                $('#data_type').val(e.value)
            }
        })
        $('[name="date_type"]').change(function (){
            date_type_change(tag_detail.country, data_type, $(this).val())
        })


        side.hs_list = []
        side.des_list = [];
        //添加hs编码
        $('#hs_add').click(function () {
            let key = Number($('#hs_text').val())
            if (side.hs_list.length < 5 &&key && !isNaN(key)) {
                if(side.hs_list.indexOf(key)>-1) return $.alert('关键词已存在')
                side.hs_list.push(key);
                $('.trade-tags-box #product_hs_tag').append('<span>' + key + ' <font data-f="hs_list" class="delete-m" data-v="'+ key +'">&#10006</font></span>')
                console.log(side.hs_list)
                return
            }
            $.alert(unity_lang('industry_tags_hscode_product_tips'))
        })

        //添加产品名
        $('#product_add').click(function () {
            let key = $('#product_text').val()
            if (side.des_list.length < 5 && key) {
                if(side.des_list.indexOf(key)>-1) return $.alert('关键词已存在')
                side.des_list.push(key);
                $('.trade-tags-box #product_list').append('<span>' + key + ' <font data-f="des_list"  class="delete-m" data-v="'+ key +'">&#10006</font></span>')
                return
            }
            $.alert(unity_lang('industry_tags_hscode_product_tips'))
        })
        //添加产品名
        $(document).on('click', '.delete-m', function () {
            let $this = $(this), f=$this.data('f'),v=$this.data('v')
            if(f=='des_list'){
                side.des_list.removeVal(v.toString())
            }else{
                side.hs_list.removeVal(Number(v))
            }
            $(this).parents('span').remove()
        })
        //清除
        $('#customs_tags_clear').click(function () {
            $(':input', '#cdstoms_from')
                .not(':button, :submit, :reset, :hidden')
                .val('')
        })

        $('#cdstoms_from [name="tag_name"]').val(tag_detail.label_name)
        $('input:radio[name="date_type"][value="' + date_type + '"]').prop('checked', true);
        $('#cdstoms_from [name]').not('[name="tag_name"],[name="date_type"],[name="ie"]').each(function () {
            var $this = $(this), name = this.name, elem_type = this.type
            if ($('#cdstoms_from [name="' + name + '"]').length >= 1) {
                if (elem_type == 'text' || elem_type == 'hidden') {
                    $this.val(params[name])
                }
            } else {
                $(this).parents('fieldset').addClass('display-none')
            }
        })
        build_tag_des_hs(side)
        date_type_change(tag_detail.country, data_type, date_type)

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
        $('#customs_tags_save').click(function () {

            if (side.des_list.length <= 0 && side.hs_list.length <= 0) return $.alert(unity_lang('industry_tags_create_tips'))
            console.log(side.des_list, 'side.des_list')
            console.log(side.hs_list, 'side.hs_list')
            // return false
            $('#cdstoms_from [name="des"]').val(side.des_list.join('|'))
            $('#cdstoms_from [name="hs"]').val(side.hs_list.join('|'))
            var params = $('#cdstoms_from').serializeObject()
            params['tag_id'] = tag_detail.id
            params['country'] = tag_detail.country
            $.ajax('/async/raw/trade-tags/tags/change', {
                datatype: 'text/json',
                type: 'post',
                data: params,
                success: function (result) {
                    if (result.state == 0) {
                        side.hide()
                        gain_trade_taglist()
                    } else if (result.state == 100) {
                        $('.found-trade-tags-box .hint').html(unity_lang('industry_tags_tips_empty')).css({"color": "red"})
                    } else if (result.state == 1000) {
                        $('.found-trade-tags-box .hint').html(unity_lang('industry_tags_create_tips')).css({"color": "red"})

                    } else if (result.state == 1001) {
                        $('.found-trade-tags-box .hint').html(unity_lang('industry_tags_tips_parameters')).css({"color": "red"})
                    }
                }
            })
        })
    })
}, true)
}

function delete_trade_tags(elem){
    let $this = $(elem),$ope = $this.parents('.ope'),tag_detail = $ope.data('tag')
    $.ajax('/async/raw/trade-tags/tags/delete', {
        datatype: 'text/json',
        type: 'post',
        data: {tag_id: tag_detail.id},
        success: function (result){
            if(result.state ==0){
                $.alert(unity_lang('label_del_success'))
                $this.parents('li').remove()
            }else{
                $.alert(unity_lang('label_operation_excet'))
            }
        },
        error: function (e){
            $.alert(unity_lang('label_operation_excet'))
        }
    })
}
/**
 * 特殊处理HS和描述
 * @param side
 */
function build_tag_des_hs(side) {
    //特殊 处理hs 和 提单描述
    var tag_des = $('#cdstoms_from [name="des"]').val() || '', tag_hs = $('#cdstoms_from [name="hs"]').val() || '',
        des_list =  tag_des.split('|'), hs_list=tag_hs.split('|')
    $.each(des_list, function (_, b) {
        if (b != '' && b != null) {
            side.des_list.push(b)
            $('#cdstoms_from #product_list').append('<span>' + b + ' <font data-f="des_list"  class="delete-m" data-v="'+ b +'">&#10006</font></span>')
        }
    })
    $.each(hs_list, function (_, b) {
        let hs = Number(b)
        if (b != '' && b != null && !isNaN(hs)) {
            side.hs_list.push(hs)
            $('#cdstoms_from #product_hs_tag').append('<span>' + hs + ' <font data-f="hs_list"  class="delete-m" data-v="'+ hs +'">&#10006</font></span>')
        }
    })
}

function date_type_change(country, ie, date_type){
    let country_data = raw_trade_country[country],
        end_date = country_data[trade_data_types[ie].date_field]
    if (date_type == 0) {
        var start_date = $.formatDate($.date_add(-1, new Date(end_date)))
        $('#customs_start_date').data('maxdate', end_date).val(start_date).attr('disabled', 'disabled')
        $('#customs_end_date').data('maxdate', end_date).val(end_date).attr('disabled', 'disabled')
    } else {
        $('#customs_start_date').data('maxdate', end_date).removeAttr('disabled')
        $('#customs_end_date').data('maxdate', end_date).removeAttr('disabled')
    }
}

// endregion