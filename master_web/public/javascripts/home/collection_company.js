// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'select_selected': {cn: '已选', en: 'Selected '},
    'select_company_enter': {cn: '请输入公司名称', en: 'Please enter your company name'},
    'select_company_category': {cn: '更多分类', en: 'More Categories'},
    'select_company_loading': {cn: '加载中', en: 'Loading'},
    'select_all': {cn: '所有', en: 'All'},

    'chela_title_name': {cn: '公司分类管理', en: 'Category management'},
    'chela_create_category': {cn: '创建分类', en: 'Create a category'},
    'chela_fillin_lable': {cn: '填写标签名称', en: 'Fill in the label name'},
    'chela_total': {cn: '共计[@数量]个', en: 'Total [@数量] pcs'},
    'chela_save': {cn: '保存', en: 'save'},
    'chela_clear': {cn: '取消', en: 'clear'},
    'chela_new_group': {cn: '添加新的分组', en: 'Add a new group'},
    'chela_official_tags': {cn: '官方标签不可删除', en: 'Official labels cannot be removed'},
    'chela_reedit_tags': {cn: '请选中需要重新分类的公司', en: 'Please select the companies that need to be reclassified'},
    'chela_bill_numbers': {cn: '共计[@数量]条提单符合搜索条件', en: 'Total [@数量] bills of lading match the search criteria'},
    'chela_bill_left': {cn: '剩余[@数量]', en: '[@数量] left'},
    'chela_bill_export': {cn: '当前查询条件下数据已导出', en: 'The data you are checking has been exported'},

    'shemei_tips_title': {cn: '获取当前公司雇员及其邮箱，需社媒搜搜工具支持', en: 'It needs to activate the Email Hunting tool to obtain<br/>this company employees and their emails.'},
    'shemei_tips_view': {cn: '查看详情', en: 'View detail'},
    'shemei_tips_buy': {cn: '购买社媒', en: 'Buy now'},
    'detail_export_current': {cn: '当前导出', en: 'Current Export '},

    'no_right': {cn: '暂无权限，可向主账号申请此权限。', en: 'Request permission from main account.'},


    'yangben': {cn: 'yangben', en: 'demo'}
}


let social_media_url
$(function () {
    verify_social_media('', 'follow', function (result){
        collection_list()
        load_country()
        if (result.state == 0) {
            social_media_url = result.data.url
            return
        }
        if(result.state == 22000){
            social_media_url = 'no-perms'
        }
    })

    /*下拉*/
    $('.dropdown-follow').wdropdown({
        selected: function (e, that) {
            search_follow(that.$element.data('field'), e.value)
        }
    })
    /*分类详情全选*/
    $("#checkall").click(function () {
        var flag = $(this).prop("checked");
        console.log(flag, 'flag')
        if (flag) {
            $(".check").prop("checked", true);
        } else {
            $(".check").prop("checked", false);
        }
        var len = $(".check:checked").length; //列表中被选中的长度
        $("#selected_len").text('(' + unity_lang('select_selected') + len + ')')
    });
    $(document).on('keydown', '#company_name', function (event) {
        if (event.which == 13) {
            let key = $(this).val()
            if (key) {
                follow_params['company_name'] = $(this).val()
                get_follow()
            } else {
                $.alert(unity_lang('select_company_enter'))
            }
        }
    })
})

function clear_company_name(){
    follow_params['company_name'] = ''
    get_follow()
}

/*关注标签(分类)统计列表*/
function collection_list(istart, fn) {
    let start = istart || 0
    unity_tags_stats(start, function (result) {
            let total = 0, size = result.size
            if (result.state == 0) {
                if (istart == null) {
                    $('#collect_manage ul li').not(":first").remove()
                }
                let center_company = '', _list = result.data.list || [];
                total = _list.length > 0 ? _list[0].total_count : 0;
                $.each(_list, function () {
                    center_company += ' <li onclick="get_collect_classify(this)" data-tag="' + this.tag + '" data-collect="' + this.id + '">\n' +
                        '<a> <i></i> <span>' + this.tag + '</span> <font>(' + this.count + ')</font> </a></li>'
                })

                $('#collect_manage ul').removeClass('display-none').append(center_company)
            }
            $('#collect_manage .msg').addClass('display-none')
            let next_start = start + size
            console.log('next_start: ', next_start, ', total: ', total, ',size:', size)
            if (total > size && next_start < total) {
                $('#collect_manage_more').removeClass('display-none').find('a').html(unity_lang('select_company_category')).data('start', next_start)
            } else {
                $('#collect_manage_more').addClass('display-none')
            }
        }
    )
}


function page_collection_list(elem) {
    let start = Number($(elem).data('start') || 0)
    $(elem).html(unity_lang('select_company_loading'))
    collection_list(start)
}

/**
 * 加载关注公司存在的国家
 */
function load_country() {

    $.ajax('/async/user_collection/countries', {
        datatype: 'text/json',
        type: 'get',
        data: null,
        success: function (result) {
            if (result.state == 0) {
                var country_list = '<li data-value="*" class="item active">' + unity_lang('select_all') + '</li>'
                $.each(result.data.list, function () {
                    country_list += ' <li data-value="' + this.country + '" class="item">' + this.country + '</li>'
                })
                $("#country_list").append(country_list)
            }

        }
    })
}

/*侧拉管理分类标签*/
function found_sort() {
    $.wModel(function (side) {
        page_tags_stats(0, function (result) {
                let _list = result.data.list || [], total = _list.length > 0 ? _list[0].total_count : 0;

                if (total > 0) {
                    var found_sort_html = ' <div class="collection-label-head">\n' +
                        '<h2>' + unity_lang('chela_title_name') + '</h2>\n' +
                        '<span class="finish" onclick="add_tag_box()">+' + unity_lang('chela_create_category') + '</span>' +
                        '</div>\n' +
                        //'<p class="collection-total-text" id="collection_total">共计<font>' + total + '</font>个</p>' +
                        '<p class="collection-total-text" id="collection_total">' + replaceKey(unity_lang('chela_total'), '[@数量]', total) + '</p>' +
                        '<div class="collect-tags-content" id="collect_tags_content"></div>' +
                        '<div id="collect_tags_page"></div></div>'
                    side.changeContent(found_sort_html)
                    $('#collection_tags_save').click(function () {
                        side.hide();
                        collection_list()
                    })

                    $('#collect_tags_page').paging({
                        offset: true,
                        per: result.size,
                        total: total,
                        callback: function (start, page_call) {
                            page_tags_stats(start, page_call)
                        }
                    })

                }
            }
        )
    })
}

function page_tags_stats(start, callback) {
    unity_tags_stats(start, function (result) {
        if (result.state == 0) {
            if (callback) callback(result)
            var company_follow_tags_list = ''
            $.each(result.data.list, function () {
                company_follow_tags_list += '<div class="company-tags tag-type-' + this.tag_type + '" >' +
                    '<a class="tags-a"><font class="font1">' + this.tag + '</font><font class="font2">(' + this.count + ')</font></a>'
                if (this.tag_type == 1) {
                    company_follow_tags_list += '<a class="tags-a-txt" onclick="edit_tag(this,' + this.id + ')" data-tag_name=' + this.tag + '><i class="edit"></i></a>' +
                        '<a class="tagsedit-btn-txt" onclick="remove_tag(this,' + this.id + ')""><i class="del"></i></a>'
                }
                company_follow_tags_list += '</div>'
            })
            $('#collect_tags_content').html(company_follow_tags_list)
        }
    })
}

function unity_tags_stats(start, callback) {

    $.ajax('/async/user_collection/follow/tags/stats', {
        datatype: 'text/json',
        type: 'get',
        data: {start: start},
        success: function (result) {
            callback(result)
        }
    })
}

function add_tag_box() {
    var found_tags_content = '<div class="company-tags" id="add_collect_tags"><label><input type="text" class="tags-text" placeholder="' + unity_lang('chela_fillin_lable') + '"  id="collect_manage_tag_name"/></label>' +
        '<a class="tagsedit-btn" onclick="new_tag_save(this,0,0)" >' + unity_lang('chela_save') + '</a>' +
        '<a class="tagsedit-btn" onclick="add_tag_elem_del(this)">' + unity_lang('chela_clear') + '</a>' +
        '</div>'
    $('#collect_tags_content').prepend(found_tags_content)
}

/*添加新的分组*/
function new_tag_save(elem) {
  
    var tag_name = $('#collect_manage_tag_name').val()
    if (!tag_name) {
        $('#add_collect_tags').append('<p class="tag-msg">' + unity_lang('chela_fillin_lable') + '</P>')
        return false
    }
    $.ajax('/async/user_collection/company/follow/tag', {
        datatype: 'text/json',
        type: 'post',
        data: {tag_name: tag_name},
        success: function (result) {
            if (result.state == 0) {
                console.log(elem,'保存')
                $(elem).parent().remove();
                collection_list()
                var total = $('#collection_total font').text()
                var tags_total = Number(total) + 1
                $('#collection_total font').text(tags_total)
                var tag_id = result.data.id
                var collect_manage_tag = '<div class="company-tags tag-type-1" >' +
                    '<a class="tags-a"><font class="font1">' + tag_name + '</font><font class="font2">(0)</font></a>' +
                    '<a class="tags-a-txt" onclick="edit_tag(this,' + tag_id + ')"  data-tag_name=' + tag_name + '><i class="edit"></i></a>' +
                    '<a class="tagsedit-btn-txt" onclick="remove_tag(this,' + tag_id + ')""><i class="del"></i></a>' +
                    '</div>'
                $('#collect_tags_content .tag-type-2:last').after(collect_manage_tag)
               
                return;
               
            }
            $.alert(result.message)
        }
    })
}

/*去除分组框*/
function add_tag_elem_del(elem) {
    $(elem).parent().remove();
}

/*删除公司收藏标签*/
function remove_tag(elem, tag_id) {
    console.log(tag_id, 'id')
    if (tag_id == '1' || tag_id == '2') {
        alert(unity_lang('chela_official_tags'))
        return false
    }
    $.ajax('/async/user_collection/follow/delete_tag', {
        datatype: 'text/json',
        type: 'post',
        data: {
            tag_id: tag_id
        },
        success: function (result) {
            if (result.state == 0) {
                $(elem).parent().remove();
                var total = $('#collection_total font').text()
                var tags_total = Number(total) - 1
                $('#collection_total font').text(tags_total)
            }
        }
    })
}

/*编辑分类*/
function edit_tag(elem, id) {
    var tag_name = $(elem).data('tag_name'), $parent = $(elem).parents('.company-tags')
    var edit_tags_content = '<div class="edit-tag">' +
        '<label><input type="text" class="tags-text" placeholder="' + unity_lang('chela_fillin_lable') + '" value=' + tag_name + '  id="collect_manage_tag_name"/></label>' +
        '<a class="tagsedit-btn" onclick="tag_change(this,' + id + ')" >' + unity_lang('chela_save') + '</a>' +
        '<a class="tagsedit-btn" onclick="cancel_tag_edit(this)">' + unity_lang('chela_clear') + '</a></div>'
    $parent.children().addClass('display-none')
    $parent.append(edit_tags_content)
}

/**
 * 取消修改标签
 * @param elem
 */
function cancel_tag_edit(elem) {
    let $parent = $(elem).parents('.company-tags')
    $parent.find('.edit-tag').remove()
    $parent.children().removeClass('display-none')
}


function tag_change(elem, id) {
    var tag_name = $('#collect_manage_tag_name').val()
    if (!tag_name) {
        $('#add_collect_tags').append('<p class="tag-msg">' + unity_lang('chela_fillin_lable') + '</P>')
        return false
    }
    $.ajax('/async/user_collection/follow/edit_tag', {
        datatype: 'text/json',
        type: 'post',
        data: {
            tag_id: id,
            tag_name: tag_name
        },
        success: function (result) {
            if (result.state == 0) {
                $(elem).parents('.company-tags').find('.font1').html(tag_name)
                cancel_tag_edit(elem)
            }
        }
    })
}


/*分类详情单选*/
function check_company() {
    var all_len = $(".check ").length; //列表长度；
    var len = $(".check:checked").length; //列表中被选中的长度
    $("#selected_len").text('(' + unity_lang('select_selected') + len + ')')
    if (all_len == len) {
        $("#checkall ").prop("checked", true);
    } else {
        $("#checkall ").prop("checked", false);
    }
    if (len > 0) {
        $('#export_contact').addClass('active')
    } else {
        $('#export_contact').removeClass('active')
    }
}

/*分类详情*/
var follow_params = {}

function get_follow_date(value) {
    // start_add 起始时间需要增加多少天，结束时间需要增加多少天(在起始时间的基础上）
    let values = value.split(','), start_add = values[0], end_add = values[1],
        start_date = toLongDate(new Date().getTime() - 86400000 * start_add) + ' 00:00:00',
        end_data = toLongDate(new Date().getTime() - 86400000 * end_add) + ' 23:59:59';
    // console.log(new Date().getTime() - 86400000 * start_add)
    follow_params['start_date'] = start_date
    follow_params['end_data'] = end_data

}

function get_collect_classify(elem) {
    try{
        wpull.closeAll()
    }catch (e){}
    let tag_id = $(elem).data('collect'), tag_name = $(elem).data('tag')
    $("#collect_list").hide()
    $('#collect_classify_details').show().find('.show-category').html(tag_name)
    if (tag_id) {
        follow_params['tag_id'] = tag_id
    }else {
        delete follow_params.tag_id
    }
    $('#collect_paging').paging({
        offset: true,  // start size 模式
        per: 20,
        lengthChange: function (_){
            get_follow()
        },
        lengthMenu: [20, 100, 200],
        callback: function (start, page_call, size) {
            unity_get_follow(start, size, function () {
                page_call()
            })
        }
    })
    get_follow()
}


/**
 * 搜索关注列表
 * @param field
 * @param value
 */
function search_follow(field, value) {
    if (value == '*') {
        if (field == 'date') {
            delete follow_params['start_date']
            delete follow_params['end_date']
        } else {
            delete follow_params[field]
        }
    } else if (field == 'date') {
        get_follow_date(value)
    } else {
        follow_params[field] = value
    }
    get_follow()
}

function get_follow() {
    let $paging = $('#collect_paging').addClass('display-none').data('paging'),
        per = $paging?$paging.per_num:20

    console.log($paging, per)
    $('#follow_list').html('<div class="loading">' + unity_lang('select_company_loading') + '</div>')
    unity_get_follow(null, per,function (total) {
        // if (total > per) {
        //     $('#collect_paging').removeClass('display-none').paging().reload({total: total})
        // }
        $('#collect_paging').removeClass('display-none').paging().reload({total: total})
    })
}

function unity_get_follow(start, size, callback) {
    follow_params['start'] = start || 0
    follow_params['size'] = size
    follow_params['sort'] = 1
    
    $('#checkall').prop('checked', false).siblings('#selected_len').html('(' + unity_lang('select_selected') + 0 + ')')
    $.ajax('/async/user_collection/company/follow/list', {
        datatype: 'text/json',
        type: 'get',
        data: follow_params,
        success: function (result) {
            if (result.state == '0') {
                let _list = result.data.list || [], total = _list.length > 0 ? _list[0].total_count : 0
                if (total > 0) {
                    var _html = ''
                    $.each(_list, function () {
                        _html += '<li>' +
                            '<span class="content-follow-list-1">' +
                            ' <input type="checkbox" class="check" name="company_id" value="' + this.company_id + '" onclick="check_company()"/>' +
                            '<a href="/' + ['buyer', 'supplier'][this.type] + '/' + this.company_id + '" target="_blank" >' + this.company_name + '</a><br/>'
                        if (this.tags) {
                            $.each(this.tags, function (index, item) {
                                _html += '<font>' + item.tag + '</font>'
                            })
                        }
                        _html += '</span>' +
                            '<span class="content-follow-list-2">' + this.country + '</span>' +
                            '<span class="content-follow-list-3">' + this.create_time.split(' ')[0].replace(/-/g,'/') + '</span>' +
                            '<span class="content-follow-list-4">' +
                            '<a class="mail" href="javascript:void(0)"  data-name="' + this.company_name + '" onclick="go_social_media(this)"></a>' +
                            '<a class="down" href="javascript:void(0)" data-country="' + this.country + '" data-type="' + this.type + '" data-id="' + this.company_id + '" data-lt="' + this.last_trade_date + '" onclick="download_trade(this)"></a>' +
                            '<a class="del" href="javaScript:void(0);" onclick="delete_collect_company(' + this.company_id + ',1,this)"></a>' +
                            '</span>' +
                            ' </li>'

                    })
                    $('#follow_list').html(_html)
                    if (callback) callback(total)
                } else {
                    $('#follow_list').html(unity_lang('chela_no_content')).addClass('not-fount')
                }
                return false
            }

            $.alert(result.message)
        },
        error(e) {
            $.alert('error')
        }
    })
}


/*分类详情删除单个公司*/
function delete_collect_company(company_id, type, elem) {
    var company_list = [];
    if (type == '1') {
        company_list.push(company_id)
    } else if (type == '2') {
        $('input[name="company_id"]:checked').each(function (index, element) {
            //追加到数组中
            var company_id = $(this).val();
            company_list.push(company_id);
        });
    }
    if(company_list.length <=0) return $.alert('请选择至少一个公司')

    $.ajax('/async/user_collection/company/follow/cancel', {
        datatype: 'text/json',
        type: 'post',
        data: {
            company_list: JSON.stringify(company_list)
        },
        success: function (result) {
            if (result.state == 0) {
                get_follow()
                return false
            }
            $.alert(result.message)
        }
    })
}

/*选择分类*/
function selection_sort() {
    wpull.dopen(function (side) {
        side.changeContent('<div class="head">\n' +
            '<h2>选择分类</h2></div>\n' +
            '<div class="box">\n' +
            '<ul id="pull_tags_list">' + unity_lang('detail_module_loading') + '</ul>\n' +
            '<div id="pull_tags_page"></div>' +
            '</div>'
        )
        pull_tags_paging(0, function (total, size){
            $('#pull_tags_page').paging({
                offset: true,
                total: total,
                per: size,
                callback: function (start, fn){
                    pull_tags_paging(start, fn)
                }
            })
        })
    })
}

function pull_tags_paging(start, fn){
    unity_tags_stats(0, function (result) {
        let total = 0, size = result.size
        if (result.state == 0) {
            let center_company = '', _list = result.data.list || [];
            total = _list.length > 0 ? _list[0].total_count : 0;
            $.each(_list, function () {
                center_company += ' <li onclick="get_collect_classify(this)" data-tag="' + this.tag + '" data-collect="' + this.id + '">\n' +
                    '<a> <i></i> <span>' + this.tag + '</span> <font>(' + this.count + ')</font> </a></li>'
            })
            if(fn) fn(total, size)
            $('#pull_tags_list').html(center_company)
        }
    })

}

/*选择国家*/
function choose_param(type) {
    console.log(type, 'typecountry')

}

function toLongDate(m) {
    var date = new Date(m);
    return date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());//+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

/*重新分类*/
function reclassify() {
    var chrcked_on = $(".check:checked").length
    if (chrcked_on < 1) return $.alert(unity_lang('chela_reedit_tags'))
    $.wModel(function (side) {
        unity_tags_stats(0, function (result) {
            if (result.state == 0) {
                if (result.data.list.length > 0) {
                    var company_tags_list = ''
                    $.each(result.data.list, function () {
                        company_tags_list += '<li>\n' +
                            '<span><input type="checkbox" name="collect_tag" data-tag_id="' + this.id + '"/></span>\n' +
                            '<span>' + this.tag + '(' + this.count + ')</span>\n' +
                            '</li>\n'
                    })
                    var company_tags_html = ' <div class="collection-label-head">\n' +
                        '<h2>' + unity_lang('chela_title_name') + '</h2>\n' +
                        '<span class="finish" id="move_tags_save">' + unity_lang('chela_save') + '</span>' +
                        '</div>\n' +
                        ' <div class="collect-tags-content" id="">\n' +
                        '<ul>\n' +
                        '' + company_tags_list + ' ' +
                        '</ul>\n' +
                        '</div></div>'
                    side.changeContent(company_tags_html)
                    $('#move_tags_save').click(function () {
                        save_move_collect(side)
                    })
                }
            }
        })
    })
}

/*移动分类*/
function save_move_collect(side) {
    var tsgs_id = [], company_list = []
    $('input[name="collect_tag"]:checked').each(function (index, element) {
        //追加到数组中
        tsgs_id.push($(this).data('tag_id'));
    });
    $('input[name="company_id"]:checked').each(function (index, element) {
        //追加到数组中
        company_list.push($(this).val());
    });
    $.ajax('/async/user_collection/company/follow/bulk', {
        datatype: 'text/json',
        type: 'post',
        data: {tag_list: JSON.stringify(tsgs_id), company_list: JSON.stringify(company_list)},
        success: function (result) {
            if (result.state == 0) {
                side.hide()
                get_follow()
                collection_list()
                return false
            }
            $.msg(result.message)
        }
    })
}


var download_params = {}, dw_last_trade_date;

function download_trade(elem) {

    verify_authority('yd', {
        login: false,
        experience: false,
        failure: 1,
        after_allow: function (fn) {
            unity_child_perms('company_trade_download', fn)
        },
        successful: function () {
            dw_last_trade_date = $(elem).data('lt')
            download_params.company_id = $(elem).data('id')
            download_params.company_type = $(elem).data('type')
            download_params.country = $(elem).data('country')
            $.wModel(function (side) {
                verify_download_perms(side)
            })
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
            download_end = dw_last_trade_date, _format = 'yyyy-mm-dd',
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
        console.log(e)
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

    // size 和 start 在下载场景下无效
    download_params['start'] = 0
    download_params['start_time'] = $('#download_date_start').val()
    download_params['end_time'] = $('#download_date_end').val()
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
            $('.download-count').html(replaceKey(unity_lang('chela_bill_numbers'), '[@数量]', count)).removeClass('display-none')

            if (0 < count <= 500 || days == 0) {
                var size = Math.min(count, 500)
                load_js_file('JSONToExcelConvertor', function () {
                    $btn_trade_download.data('size', size).data('last-bill', '').addClass('active').removeAttr('disabled').attr('onclick', 'go_download_trade(this)')
                })
            }
        }
    })
}


function go_download_trade(elem) {
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
                                row += "<td align='center'>" + (v[fv.field] || '--') + "</td>";
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
                    $('.download-bill-page-tips').html(',' + replaceKey(unity_lang('chela_bill_left'), '[@数量]', total)).removeClass('display-none')
                    $btn_trade_download.data('last-bill', last_id).data('size', size).removeAttr('disabled').addClass('active').attr('onclick', 'go_download_trade(this)')
                } else {
                    $('.download-bill-page-tips').html(unity_lang('chela_bill_export')).removeClass('display-none')
                    $btn_trade_download.attr('disabled', 'disabled').removeClass('active').removeAttr('onclick')
                }
                return false
            }
            $.alert(result.message)
        }
    })
}

let contact_title = [
    {
        'title': '公司名称',
        'key': 'name'
    },
    {
        'title': '公司地址',
        'key': 'address'
    }, {
        title: '联系人',
        key: 'contact'
    }, {
        title: '邮箱',
        key: 'email'
    }, {
        title: '传真',
        key: 'fax'
    }, {
        title: '电话',
        key: 'tel'
    }, {
        title: '网址',
        key: 'web'
    }]

function export_contact(elem) {
    verify_authority('yd', {
        login: false,
        experience: false,
        failure: 1,
        after_allow: function (fn) {
            unity_child_perms('company_contact_download', fn)
        },
        successful: function () {

            let $ids = $('[name="company_id"]:checked')

            if ($ids.length <= 0) return $.alert('请选择至少一家公司')
            let formdata = new FormData($('#follow_form')[0])

            $.ajax('/async/follow/export/contact', {
                data: formdata,
                type: "POST",
                processData: false,
                contentType: false,
                success: function (result) {
                    _lock = false;
                    if (result.state == 0) {
                        load_js_file('JSONToExcelConvertor', function () {
                            //下载数据
                            JSONToExcelConvertor(result.data.file_name, function (fn) {
                                result.data.list.forEach(function (v, i) {
                                    var row = "";
                                    contact_title.forEach(function (fv, _) {
                                        row += "<td align='center'>" + (v[fv.key] || '--') + "</td>";
                                    })
                                    if (row) fn('<tr>' + row + '</tr>')
                                })
                            }, function (fn) {
                                contact_title.forEach(function (values, index) {
                                    fn(values.title)
                                })
                            });

                        })
                        $.alert('下载成功')
                        return false
                    }
                    $.alert(result.message)
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $.alert('error')
                }
            });
        }
    })
}


function go_social_media(elem) {
    if (!social_media_url) {
        let buyer_url=verify_vip_level(wg.user.vip_level, 'bd')?'/product?product=4&adds=soso':'/Alipay?v=yd&rs=4'
        layer.alert(unity_lang('shemei_tips_title'), {
            btn_href: ['/social-media', buyer_url],
            btn: [unity_lang('shemei_tips_view'), unity_lang('shemei_tips_buy')]
            //shemei_tips_title
        })
        return
    }
    if(social_media_url == 'no-perms') return $.alert(unity_lang('no_right'))
    let name = $(elem).data('name')
    // let _url = social_media_url ? (social_media_url + '&keywords=' + encodeURIComponent(name)) : '/social-media'
    $(elem).attr('href', social_media_url + '&keywords=' + encodeURIComponent(name)).removeAttr('onclick').attr('target', "_blank")
}

