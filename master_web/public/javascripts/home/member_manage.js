// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'member_count': {cn: '个成员', en: ' members'},
    'member_count_add': {cn: '还可添加[@数量]', en: '[@数量] more can be added'},
    'member_account_list': {cn: '获取账号列表', en: 'Get a list of accounts'},
    'member_add_edit': {cn: '添加/编辑成员', en: 'Adding/Editing Members'},
    'member_add_save': {cn: '保存', en: 'Save'},
    'member_add_account': {cn: '添加账号', en: 'Add account'},
    'member_add_account_tips': {cn: '输入已注册外贸邦的账号，手机号/邮箱/ID.', en: 'Enter your registered account, mobile number/email/ID.'},
    'member_add_roles': {cn: '添加成员角色', en: 'Adding member roles'},
    'member_add_roles_tips': {cn: '提示：该账号未曾注册外贸邦网，先自主注册再添加账号。', en: 'Tip: This account has not been registered on 52wmb, register yourself first before adding your account.'},
    'member_add_data_permission': {cn: '数据下载权限', en: 'Data download permission'},
    'member_add_invoice_permission': {cn: '开票管理权限', en: 'Invoice permission authority'},
    'member_add_sub_account': {cn: '添加子账号', en: 'Add a sub-account'},
    'member_edit_sub_account': {cn: '修改子账号', en: 'Edit sub-accounts'},
    'perms_module_0': {cn: '数据下载权限', en: 'Download'},
    'perms_module_1': {cn: '增值服务权限', en: 'Value Added Service'},
    'perms_module_2': {cn: '行业贸易国', en: 'Trade Country'},
    'perms_select_all': {cn: '全选', en: 'Select All'},
    'perms_select_clance': {cn: '取消', en: 'Clance'},
    'yangben': {cn: 'yangben', en: 'demo'}
}

let perms_list
$(function () {
    account_list()
    $(document).on('click', '.perms-all', function (){
        let _type = $(this).data('type')
        $('.perms-' + _type +'[name="perms"]').prop('checked', true)
    })
    $(document).on('click', '.perms-clear-all', function (){
        let _type = $(this).data('type')
        $('.perms-' + _type +'[name="perms"]').prop('checked', false)
    })
})

/*获取账号列表*/
function account_list() {
    $.ajax('/async/user_member/account/child_list', {
        datatype: 'text/json',
        type: 'get',
        data: {},
        success: function (result) {
            if (result.state == 0) {
                let _list = result.data.list || [], _len = _list.length, rema = result.data.all_open - (_len - 1)
                $('.count-info').html(_len + '' + unity_lang('member_count') + '<font>(' + replaceKey(unity_lang('member_count_add'), '[@数量]', rema) + ')</font>')
                $('#member_manage ul').find("li:gt(0)").remove()
                var center_company = ''
                $.each(result.data.list, function (index, item) {
                    let edit_html = ''
                    if (item.type == 1) {
                        edit_html = '<a class="edit" href="javaScript:void(0);" ></a><a class="del" href="javaScript:void(0);" ></a>'
                    }else {
                        edit_html = '<a class="edit" href="javaScript:void(0);" data-edit_info=' + JSON.stringify(item) + ' onclick="update_members(this)"></a>\n' +
                            '<a class="del" href="javaScript:void(0);" onclick="del_account(this,' + item.union_id + ')"></a>\n'
                    }

                    center_company += '<li>\n' +
                        '<span><img src="https://static.52wmb.com/images/userphoto/80_' + (item.photo?item.photo:'member.jpg') + '"/>' + this.contact + '</span>\n' +
                        '<span>' + item.role + '</span>\n' +
                        '<span>' + edit_html + '</span>'
                    center_company += '</li>'
                })

                $('#member_manage ul').append(center_company)
            }
        }
    })
}

function get_child_perms(fn) {
    if (perms_list) return fn(perms_list)
    $.ajax('/async/user_member/account/child_perms', {
        datatype: 'text/json',
        type: 'get',
        data: {},
        success: function (result) {
            perms_list = result.data.list
            fn(perms_list)
        }
    })
}
function get_child_had_perms(union_id, fn){
    if(!union_id) return fn(null)
    $.ajax('/async/user_member/account/child/perms', {
        datatype: 'text/json',
        type: 'get',
        data: {union_id: union_id},
        success: function (result) {
            fn(result.data.list)
        }
    })
}

function add_members() {
    pull_members(null,function (_) {
        $('#member_save').click(function () {
            collection_tags_save()
        })
    })
}

function update_members(elem) {
    let edit_info = $(elem).data('edit_info')
    pull_members(edit_info.union_id, function (_) {
        $('#account').parents('fieldset').remove()
        $('#role').val(edit_info.role)
        $('#member_save').click(function () {
            collection_tags_edit()
        })
    })
}

function pull_members(union_id, callback) {
    wpull.dopen(function (side) {
        get_child_perms(function (perms){
            get_child_had_perms(union_id, function (_plist){
                var found_sort_html = '<form id="child_form">'
                found_sort_html += ' <div class="collection-label-head">\n'
                found_sort_html += '<h2>' + unity_lang('member_add_edit') + '</h2>\n'
                found_sort_html += '<span class="finish" id="member_save" >' + unity_lang('member_add_save') + '</span>'
                found_sort_html += '</div>\n'
                found_sort_html += '<div class="model-member-box" id="add_member_box">'
                found_sort_html += '<fieldset><font>' + unity_lang('member_add_account') + '</font><input class="clear-target" placeholder="' + unity_lang('member_add_account_tips') + '" name="account"  id="account"/><i class="clear-txt">&#10005</i></fieldset>'
                found_sort_html += '<fieldset ><font>' + unity_lang('member_add_roles') + '</font><input class="clear-target" placeholder="' + unity_lang('member_add_roles') + '" value="" name="role"  id="role" /><i class="clear-txt">&#10005</i></fieldset>'
                // found_sort_html += '<ul>'
                let perms_md = {}
                $.each(perms, function (a, b){
                    if(!perms_md[b.type]) {
                        perms_md[b.type] = '<div><span class="md-name">'+ unity_lang('perms_module_' +b.type)  +'</span>'
                        if(b.type== 2){
                            perms_md[b.type] += '<font>(<a data-type="'+ b.type +'" class="perms-all">' + unity_lang('perms_select_all') + '</a>&nbsp;|&nbsp;<a data-type="'+ b.type +'" class="perms-clear-all">' + unity_lang('perms_select_clance') + '</a>)</font>'
                        }
                        perms_md[b.type] += '<ul>'
                    }
                    perms_md[b.type] +=  '<li><label><input class="perms-'+ b.type +'" type="checkbox" '+ (_plist?(_plist.indexOf(b.id)>=0?'checked="checked"':''):'') +' name="perms" value="'+ b.id +'"/>' + b.name + '</label></li>'
                })
                $.each(perms_md, function (k, v){
                    found_sort_html += v
                    found_sort_html += '<br class="clear"/></ul></div>'
                })
                if(union_id) found_sort_html += '<input type="hidden" name="union_id" value="'+ union_id +'">'
                found_sort_html += '</div></form>'
                side.changeContent(found_sort_html)
                callback(side)
            })
        })
    })
}

/*添加子账号*/
function collection_tags_save() {
    var account = $('#account').val()
    var role = $('#role').val()

    if (account == null || account == '')  return $.alert(unity_lang('member_add_account_tips'))

    if (role == null || role == '')  return $.alert(unity_lang('member_add_roles'))

    let formdata = new FormData($('#child_form')[0]);

    $.ajax('/async/user_member/account/child', {
        data: formdata,
        type: "POST",
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.state == 0) {
                wpull.close()
                account_list()
                return
            }
            $.alert(result.message)
        }
    })
}

/*修改子账户*/
function collection_tags_edit(id) {
    var role = $('#role').val()

    if (role == null || role == '') return $.alert(unity_lang('member_add_roles'))

    let formdata = new FormData($('#child_form')[0]);
    $.ajax('/async/user_member/account/edit_child', {
        data: formdata,
        type: "POST",
        processData: false,
        contentType: false,
        success: function (result) {
            if (result.state == 0) {
                wpull.closeAll()
                account_list()
                return;
            }
            $.alert(result.message)
        }
    })
}

/*删除子账户*/
function del_account(elem, id) {
    $.ajax('/async/user_member/account/delete_child', {
        datatype: 'text/json',
        type: 'post',
        data: {
            union_id: id,
        },
        success: function (result) {
            if (result.state == 0) {
                $(elem).parent().parent().remove()
            }
            console.log(result, '' + unity_lang('member_edit_sub_account') + '')
        }
    })
}
