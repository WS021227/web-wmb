// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'spacecp_edit_giveup': {cn: '是否放弃编辑?', en: 'Give up the edit or not'},
    'spacecp_saveing': {cn: '正在保存，请稍后...', en: 'Saving, please wait...'},
    'spacecp_save': {cn: '保存', en: 'Save'},
    'spacecp_exceptions': {cn: '操作异常', en: 'Operation exceptions'},

    'spacecp_mail_account': {cn: '邮箱账号', en: 'E-mail'},
    'spacecp_mail_pic_code': {cn: '图片验证码', en: 'Image Verification Code'},
    'spacecp_mail_mail_code': {cn: '邮箱验证码', en: 'Mailbox verification code'},
    'spacecp_mail_get_code': {cn: '获取验证码', en: 'Get verification code'},
    'spacecp_mail_next_step': {cn: '下一步', en: 'Next step'},
    'spacecp_mail_sending': {cn: '正在发送...', en: 'Sending...'},
    'spacecp_mail_code_acquire': {cn: '秒后获取', en: ' seconds to acquire'},
    'spacecp_mail_recode_acquire': {cn: '重新获取验证码', en: 'Retrieve the verification code'},
    'spacecp_mail_recode_failed': {cn: '验证码发送失败', en: 'Verification code sending failed'},
    'spacecp_mail_code_progress': {cn: '验证中请稍后...', en: 'Verifying, please wait...'},
    'spacecp_mail_new_account': {cn: '新邮箱账号', en: 'New email'},
    'spacecp_mail_new_pic_code': {cn: '新邮箱验证码', en: 'New email verification code'},
    'spacecp_mail_binding': {cn: '点击右侧"保存"按钮完成绑定', en: 'Click the "Save" button to complete the binding'},
    'spacecp_mail_reenter_email': {cn: '邮箱格式不正确，请重新输入', en: 'Incorrect email format, please re-enter'},
    'spacecp_mail_binding_failed': {cn: '绑定失败', en: 'Bind failed'},

    'spacecp_product_exists': {cn: '已存在', en: ' already exists'},
    'spacecp_product_add_max': {cn: '最多添加5个产品关键词', en: 'Add up to 5 product keywords'},
    'spacecp_company_type': {cn: '请选择公司类型', en: 'Select type of company'},
    'spacecp_product_add_min': {cn: '请选择至少添加一个产品', en: 'Please add one product at least'},
    'spacecp_save_failed': {cn: '保存失败', en: 'Failed to save'},

    'spacecp_pw_not_match': {cn: '新密码两次输入不一致', en: 'The passwords entered twice are inconsistent'},
    'spacecp_pw_new_pw_min': {cn: '密码长度应该在6-20位', en: 'Password length should be between 6-20 digits'},
    'spacecp_pw_change_success': {cn: '密码修改成功', en: 'Password changed successful'},
    'spacecp_person_set': {cn: '个人设置', en: 'Personal info set'}

}
let static_url = $('meta[name="static_url"]').attr('content'),
    lading_gif = static_url +'images/loading.gif'
$(function () {

    $("#spacecp .center-tag-select").on("click", "a", function() {
        var index = $(this).index();
        if(index==3){
            login_record_list()
        }
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents("#spacecp").find(".center-k-nom-box").eq(index).show().siblings().hide();
    })
    // 加载产品
    if(wg.user.usertype != null) {
        $.ajax('/async/user/datacenter/product', {
            datatype: 'text/json',
            type: 'get',
            data: {user_type: wg.user.usertype},
            success: function (result) {
                $.each(result.data.list, function () {
                    product_add_item(this.key)
                })
            }
        })
    }

    $('#company_attributes').wdropdown({
        selected: function (e) {
            $('#type_id').val(e.value).data('name', e.text)

        }
    })
    $(document).on('click', '.edit-info', function (){
        let $this = $(this), $parent = $this.parents('.center-user-info-list'),
            has_open = $('.center-user-info-list.open').length

        if(has_open){
            $.alert(''+unity_lang('spacecp_edit_giveup')+'', {
                yes: function (index){
                    tab_more($parent)
                    layer.close(index)
                }
            })
            return false
        }
        tab_more($parent)
    })
    $(document).on('click', '.cancel-edit', function (){
        let $parent = $(this).parents('.center-user-info-list')
        $.alert(''+unity_lang('spacecp_edit_giveup')+'', {
            yes: function (index){
                tab_close_more($parent)
                layer.close(index)
            }
        })
    })
})

function tab_more($info){
    $info.addClass('open').find('.info-simple').addClass('display-none')
        .siblings('.info-more').removeClass('display-none')
    tab_close_more($info.siblings('.center-user-info-list'))
}

function tab_close_more($info){
    $info.removeClass('open').find('.info-simple').removeClass('display-none')
        .siblings('.info-more').addClass('display-none')
}
function save_finish($elem){
    tab_close_more($elem.parents('.center-user-info-list'))
}


/**
 * 用户常规字段保存
 * @param elem
 * @returns {boolean}
 */
function general_save(elem) {
    let $this = $(elem), field = $this.data('field'), tips = $this.data('ntips'),
        value = $('#txt_general_' + field).val()
    if (!value) {
        $.alert(tips)
        return false
    }
    $this.html(''+unity_lang('spacecp_saveing')+'').removeAttr('onclick')
    $.ajax('/async/user-spacecp/user/info', {
        datatype: 'text/joon',
        type: 'post',
        data: {field: field, value: value},
        success: function (result){
            $this.html(''+unity_lang('spacecp_save')+'').attr('onclick', 'general_save(this)')
            if(result.state == 0){
                $('#show_' + field).html(value)
                save_finish($this)
                return false;
            }
            $.alert(result.message)
        },
        error: function (){
            $.alert(''+unity_lang('spacecp_exceptions')+'')
            $this.html(''+unity_lang('spacecp_save')+'').attr('onclick', 'general_save(this)')
        }
    })
}

// region 邮箱绑定和更新绑定

/**
 * 重新绑定邮箱
 */
function reload_bind_email() {
    var bind_email_html = '<div>\n' +
        ' <fieldset class="fieldset" style="background-color:#fafafa;">\n' +
        '<legend>'+unity_lang('spacecp_mail_account')+'</legend>\n' +
        ' <input style="background-color:#fafafa;" value="' + wg.user.encrypt_user_name + '" disabled="disabled">' +
        '</fieldset>\n' +
        ' <fieldset class="fieldset" >\n' +
        '<legend>'+unity_lang('spacecp_mail_pic_code')+'</legend>\n' +
        '<input value="" type="text" id="email_picture_code">\n' +
        '<span><img src="" class="picture-code" id="email_picture" onclick="change_code(this)"/></span>\n' +
        '</fieldset>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>'+unity_lang('spacecp_mail_mail_code')+'</legend>\n' +
        '<input class="clear-target" value="" style="width:220px;" id="email_code"><i class="clear-txt">×</i>\n' +
        '<a onclick="change_email_code(this)">'+unity_lang('spacecp_mail_get_code')+'</a>\n' +
        '</fieldset><a onclick="change_email_next(this)">'+unity_lang('spacecp_mail_next_step')+'</a></div>'
    $('#bind_email_center').html(bind_email_html)
    change_code('#email_picture')
}


/**
 * 更换邮箱时获取当前邮箱验证码
 * @param elem
 */
function change_email_code(elem) {
    let $this = $(elem)
    $this.html(''+unity_lang('spacecp_mail_sending')+'').removeAttr('onclick').addClass('disabled')
    $.ajax('/async/user-spacecp/account/bind/old-email/send/verify/code', {
        datatype: 'text/json',
        type: 'get',
        data: {picture_code: $("#email_picture_code").val()},
        success: function (result) {
            if (result.state == 0) {
                let _timer = 60
                let email_code_timer = window.setInterval(function () {
                    if (_timer > 0) {
                        _timer--;
                        $this.html(_timer + ''+unity_lang('spacecp_mail_code_acquire')+'').removeAttr('onclick').addClass('disabled')
                    } else {
                        window.clearInterval(email_code_timer)
                        $this.html(''+unity_lang('spacecp_mail_recode_acquire')+'').attr('onclick', 'change_email_code(this)').removeClass('disabled')
                    }
                }, 1000)
            } else {
                $.alert(result.message)
                $this.html(''+unity_lang('spacecp_mail_recode_acquire')+'').attr('onclick', 'change_email_code(this)').removeClass('disabled')
            }
        }, error: function (e) {
            $.alert(''+unity_lang('spacecp_mail_recode_failed')+'')
            $this.html(''+unity_lang('spacecp_mail_recode_acquire')+'').attr('onclick', 'change_email_code(this)').removeClass('disabled')
        }
    })
}
/**
 * 更换邮箱时下一步
 */
function change_email_next(elem) {
    $(elem).html(''+unity_lang('spacecp_mail_code_progress')+'')
    $.ajax('/async/user-spacecp/account/bind/old-email/verify/code', {
        datatype: 'text/json',
        type: 'get',
        data: {code: $("#email_code").val()},
        success: function (result) {
            console.log(result,'result下一步')
            if (result.state == '0') {
                bind_new_email(result.data.mark_id)
                return false
            }else{
                $(elem).html(''+unity_lang('spacecp_mail_next_step')+'')  
            }
            $.alert(result.message)
        }
    })
}

/**
 * 绑定新邮箱html内容
 */
function bind_new_email(mark_id) {
    var bind_email_html = '<div><fieldset class="fieldset">\n' +
        '<legend>'+unity_lang('spacecp_mail_new_account')+'</legend>\n' +
        ' <input type="text" class="clear-target" id="new_email" value="" ><i class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        ' <fieldset class="fieldset" >\n' +
        '<legend>'+unity_lang('spacecp_mail_pic_code')+'</legend>\n' +
        '<input value="" type="text" id="email_picture_code">\n' +
        '<span><img src="" id="email_picture" class="picture-code" onclick="change_code(this)"/></span>\n' +
        '</fieldset>\n'
    if (mark_id) {
        bind_email_html += '<fieldset class="fieldset">\n' +
            '<legend>'+unity_lang('spacecp_mail_new_pic_code')+'</legend>\n' +
            '<input type="text" value="" style="width:220px;" id="email_code"><i>×</i>\n' +
            '<a onclick="change_new_email_code(this)">'+unity_lang('spacecp_mail_get_code')+'</a>\n' +
            '</fieldset>' +
            '<input type="hidden" id="mark_id" value="' + mark_id + '">' +
            '<p>'+unity_lang('spacecp_mail_binding')+'</p> </div>'
    }else{
        bind_email_html += '<fieldset class="fieldset">\n' +
            '<legend>'+unity_lang('spacecp_mail_new_pic_code')+'</legend>\n' +
            '<input type="text" value="" style="width:220px;" id="email_code"><i>×</i>\n' +
            '<a onclick="send_email_code(this)">'+unity_lang('spacecp_mail_get_code')+'</a>\n' +
            '</fieldset>' +
            '<p>'+unity_lang('spacecp_mail_binding')+'</p> </div>'
    }
    $('#bind_email_center').html(bind_email_html)
    change_code('#email_picture')
}
/**
 * 更换绑定邮箱时发送新邮箱验证码
 */
function change_new_email_code(elem) {
    let $this = $(elem)
    $this.html(''+unity_lang('spacecp_mail_sending')+'').removeAttr('onclick').addClass('disabled')
    $.ajax('/async/user-spacecp/account/change-bind/email/send/verify/code', {
        datatype: 'text/json',
        type: 'get',
        data: {
            picture_code: $("#email_picture_code").val(),
            email: $("#new_email").val(),
            mark_id: $('#mark_id').val()
        },
        success: function (result) {
            if (result.state == 0) {
                let _timer = 60
                let email_code_timer = window.setInterval(function () {
                    if (_timer > 0) {
                        _timer--;
                        $this.html(_timer + ''+unity_lang('spacecp_mail_code_acquire')+'').removeAttr('onclick').addClass('disabled')
                    } else {
                        window.clearInterval(email_code_timer)
                        $this.html(''+unity_lang('spacecp_mail_recode_acquire')+'').attr('onclick', 'change_new_email_code(this)').removeClass('disabled')
                    }
                }, 1000)
            } else {
                $.alert(result.message)
                $this.html(''+unity_lang('spacecp_mail_recode_acquire')+'').attr('onclick', 'change_new_email_code(this)').removeClass('disabled')
            }
        }, error: function (e) {
            $.alert(''+unity_lang('spacecp_mail_recode_failed')+'')
            $this.html(''+unity_lang('spacecp_mail_recode_acquire')+'').attr('onclick', 'change_new_email_code(this)').removeClass('disabled')
        }
    })
}
/**
 * 绑定邮箱时验证码
 * @returns {boolean}
 */
function send_email_code(elem){
    let $this = $(elem)
    var email_picture_code=  $("#email_picture_code").val()
    var email=$("#new_email").val()
    var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    if(!pattern.test(email)){
        $.alert(''+unity_lang('spacecp_mail_reenter_email')+'')
        return false;
    }
    $.ajax('/async/account/bind-email/verify-code', {
        datatype: 'text/json',
        type: 'post',
        data: {
            picture_code:email_picture_code,
            email:email
        },
        success: function(result) {
            if (result.state == 0) {
                let _timer = 60
                let email_code_timer = window.setInterval(function () {
                    if (_timer > 0) {
                        _timer--;
                        $this.html(_timer + ''+unity_lang('spacecp_mail_code_acquire')+'').removeAttr('onclick').addClass('disabled')
                    } else {
                        window.clearInterval(email_code_timer)
                        $this.html(''+unity_lang('spacecp_mail_recode_acquire')+'').attr('onclick', 'send_email_code(this)').removeClass('disabled')
                    }
                }, 1000)
            } else {
                $.alert(result.message)
                $this.html(''+unity_lang('spacecp_mail_recode_acquire')+'').attr('onclick', 'send_email_code(this)').removeClass('disabled')
            }
        }})
}

/**
 * 提交绑定邮箱
 */
function bind_email(elem) {
    $(elem).html(''+unity_lang('spacecp_saveing')+'').removeAttr('onclick')
    $.ajax('/async/account/bind/email', {
        datatype: 'text/json',
        type: 'post',
        data: {code: $("#email_code").val(), email: $("#new_email").val()},
        success: function (result) {
            $(elem).html(''+unity_lang('spacecp_save')+'').attr('onclick', 'bind_email(this)')
            if (result.state == 0) {
                $('#show_email').html($("#new_email").val())
                save_finish($(elem))
                return false
            }
            $.alert(result.message)
        }, error: function (e) {
            $.alert(''+unity_lang('spacecp_mail_binding_failed')+'')
            $(elem).html(''+unity_lang('spacecp_save')+'').attr('onclick', 'bind_email(this)')
        }
    })
}

// endregion


// region 手机绑定和重新绑定


/**
 * 重新绑定邮箱
 */
function reload_bind_phone() {
    var bind_email_html = '<div>\n' +
        ' <fieldset class="fieldset" style="background-color: #dddddd;">\n' +
        '<legend>手机号</legend>\n' +
        ' <input style="background-color: #dddddd;" value="' + wg.user.contact_fs + '" disabled="disabled">' +
        '</fieldset>\n' +
        ' <fieldset class="fieldset" >\n' +
        '<legend>图片验证码</legend>\n' +
        '<input value="" type="text" id="phone_picture_code">\n' +
        '<span><img src="" id="phone_picture" onclick="change_code(this)"/></span>\n' +
        '</fieldset>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>手机验证码</legend>\n' +
        '<input class="clear-target" value="" style="width:220px;" id="phone_code"><i class="clear-txt">×</i>\n' +
        '<a onclick="change_phone_code(this)">获取验证码</a>\n' +
        '</fieldset><a onclick="change_phone_next(this)">下一步</a></div>'
    $('#bind_phone_center').html(bind_email_html)
    change_code('#phone_picture')
}


/**
 * 更换手机时获取当前手机验证码
 * @param elem
 */
function change_phone_code(elem) {
    let $this = $(elem)
    $this.html('正在发送...').removeAttr('onclick').addClass('disabled')
    $.ajax('/async/user-spacecp/account/bind/old-phone/send/verify/code', {
        datatype: 'text/json',
        type: 'get',
        data: {picture_code: $("#phone_picture_code").val()},
        success: function (result) {
            if (result.state == 0) {
                let _timer = 60
                let phone_code_timer = window.setInterval(function () {
                    if (_timer > 0) {
                        _timer--;
                        $this.html(_timer + '秒后获取').removeAttr('onclick').addClass('disabled')
                    } else {
                        window.clearInterval(phone_code_timer)
                        $this.html('重新获取验证码').attr('onclick', 'change_phone_code(this)').removeClass('disabled')
                    }
                }, 1000)
            } else {
                $.alert(result.message)
                $this.html('重新获取验证码').attr('onclick', 'change_phone_code(this)').removeClass('disabled')
            }
        }, error: function (e) {
            $.alert('验证码发送失败')
            $this.html('重新获取验证码').attr('onclick', 'change_phone_code(this)').removeClass('disabled')
        }
    })
}
/**
 * 更换手机号时下一步
 */
function change_phone_next(elem) {
    $(elem).html('验证中请稍后.....').removeAttr('onclick')
    $.ajax('/async/user-spacecp/account/bind/old-phone/verify/code', {
        datatype: 'text/json',
        type: 'get',
        data: {code: $("#phone_code").val()},
        success: function (result) {
            $(elem).html('下一步').attr('onclick', 'change_phone_next(this)')
            if (result.state == '0') {
                bind_new_phone(result.data.mark_id)
                return false
            }
            $.alert(result.message)
        }, error: function (e) {
            $.alert('手机验证失败')
            $(elem).html('下一步').attr('onclick', 'change_phone_next(this)')
        }
    })
}

/**
 * 绑定新手机html内容
 */
function bind_new_phone(mark_id) {
    var _html = '<div><fieldset class="fieldset">\n' +
        '<legend>新手机账号</legend>\n' +
        ' <input type="text" class="clear-target" id="new_phone" value="" ><i class="clear-txt">×</i>\n' +
        '</fieldset>\n' +
        ' <fieldset class="fieldset" >\n' +
        '<legend>图片验证码</legend>\n' +
        '<input value="" type="text" id="phone_picture_code">\n' +
        '<span><img src="phone_picture" id="phone_picture" class="picture-code" onclick="change_code(this)"/></span>\n' +
        '</fieldset>\n'
    if (mark_id) {
        _html += '<fieldset class="fieldset">\n' +
            '<legend>新手机验证码</legend>\n' +
            '<input type="text" value="" style="width:220px;" id="phone_code"><i>×</i>\n' +
            '<a onclick="change_new_phone_code(this)">获取验证码</a>\n' +
            '</fieldset>' +
            '<input type="hidden" id="mark_id" value="' + mark_id + '">' +
            '<p>点击右侧"保存"按钮完成绑定</p> </div>'
    }else{
        _html += '<fieldset class="fieldset">\n' +
            '<legend>新手机验证码</legend>\n' +
            '<input type="text" value="" style="width:220px;" id="phone_code"><i>×</i>\n' +
            '<a onclick="send_phone_code(this)">获取验证码</a>\n' +
            '</fieldset>' +
            '<p>点击右侧"保存"按钮完成绑定</p> </div>'
    }
    $('#bind_phone_center').html(_html)
    change_code('#phone_picture')
}
/**
 * 更换绑定邮箱时发送新邮箱验证码
 */
function change_new_phone_code(elem) {
    let $this = $(elem)
    $this.html('正在发送...').removeAttr('onclick').addClass('disabled')
    $.ajax('/async/user-spacecp/account/change-bind/phone/send/verify/code', {
        datatype: 'text/json',
        type: 'get',
        data: {
            picture_code: $("#phone_picture_code").val(),
            phone: $("#new_phone").val(),
            mark_id: $('#mark_id').val()
        },
        success: function (result) {
            if (result.state == 0) {
                let _timer = 60
                let phone_code_timer = window.setInterval(function () {
                    if (_timer > 0) {
                        _timer--;
                        $this.html(_timer + '秒后获取').removeAttr('onclick').addClass('disabled')
                    } else {
                        window.clearInterval(phone_code_timer)
                        $this.html('重新获取验证码').attr('onclick', 'change_new_phone_code(this)').removeClass('disabled')
                    }
                }, 1000)
            } else {
                $.alert(result.message)
                $this.html('重新获取验证码').attr('onclick', 'change_new_phone_code(this)').removeClass('disabled')
            }
        }, error: function (e) {
            $.alert('验证码发送失败')
            $this.html('重新获取验证码').attr('onclick', 'change_new_phone_code(this)').removeClass('disabled')
        }
    })
}
/**
 * 绑定手机时验证码
 * @returns {boolean}
 */
function send_phone_code(elem) {
    let $this = $(elem)
    var phone_picture_code = $("#phone_picture_code").val()
    var phone = $("#new_phone").val()
    var pattern = /^1[0-9]{10}$/;
    if (!pattern.test(phone)) {
        $.alert('手机号格式不正确，请重新输入')
        return false;
    }
    $this.html('正在发送......')
    $.ajax('/async/account/bind-phone/verify-code', {
        datatype: 'text/json',
        type: 'post',
        data: {
            picture_code: phone_picture_code,
            phone: phone
        },
        success: function (result) {
            if (result.state == 0) {
                let _timer = 60
                let email_code_timer = window.setInterval(function () {
                    if (_timer > 0) {
                        _timer--;
                        $this.html(_timer + '秒后获取').removeAttr('onclick').addClass('disabled')
                    } else {
                        window.clearInterval(email_code_timer)
                        $this.html('重新获取验证码').attr('onclick', 'send_phone_code(this)').removeClass('disabled')
                    }
                }, 1000)
            } else {
                $.alert(result.message)
                $this.html('重新获取验证码').attr('onclick', 'send_phone_code(this)').removeClass('disabled')
            }
        },error: function (e){
            $.alert('验证码发送失败')
            $this.html('重新获取验证码').attr('onclick', 'send_phone_code(this)').removeClass('disabled')
        }
    })
}

/**
 * 提交绑定手机
 */
function bind_phone(elem) {
    $(elem).html('正在保存,请稍后......')
    $.ajax('/async/account/bind/phone', {
        datatype: 'text/json',
        type: 'post',
        data: {code: $("#phone_code").val(), phone: $("#new_phone").val()},
        success: function (result) {
            $(elem).html('保存')
            if (result.state == 0) {
                $('#edit_user_phone .edit-info').html('重新绑定').attr('onclick', 'reload_bind_phone(this)')
                $('#show_phone').html(result.data.phone)
                wg.user.contact_fs = result.data.phone
                save_finish($(elem))
                return false
            }
            $.alert(result.message)
        }
    })
}
// endregion

/*图片验证码*/
function change_code(elem) {
    $(elem).addClass('picture-code').attr('src', lading_gif)
    $.ajax('/async/picture-code', {
        datatype: 'text/json',
        type: 'get',
        data: {'width': 100, 'height': 33},
        success: function (result) {
            if (result.state == 1) {
                var data = result.data.base64
                $(elem).attr('src', "data:image/png;base64," + data).removeClass('picture-code')
            }
        }
    })
}


// region 产品

var product=[]

function product_add_item(value){
    $('#product_more').append('<font data-value="'+ value +'">'+ value +'<i onclick="delete_product(this)">×</i></font>')
    product.push(value)
    $('#product_name').val('')
}

/**
 * 添加产品
 * @returns {boolean}
 */
function product_add(){
    var value=$("#product_name").val()

    if(product.indexOf(value) >= 0){
        $.alert('['+value +']'+unity_lang('spacecp_product_exists')+'')
        return false
    }
    if(product.length>=5){
        $.alert(''+unity_lang('spacecp_product_add_max')+'')
        return false
    }
    product_add_item(value)
}

/**
 * 删除产品
 * @param elem
 */
function delete_product(elem){
    var name=$(elem).parent().data('value')
    product.removeVal(name)
    $(elem).parent().remove()
}

function save_user_type(elem) {
    let $this = $(elem), $type = $('#type_id'), type_id = $type.val()
    if (type_id == null || type_id == '') {
        $.alert(unity_lang('spacecp_company_type'))
        return false
    }
    if (product.length <= 0) {
        $.alert(unity_lang('spacecp_product_add_min'))
        return false
    }
    $this.html(unity_lang('spacecp_saveing')).removeAttr('onclick')
    $.ajax('/async/user/datacenter/product/update', {
        datatype: 'text/json',
        type: 'post',
        data: {type_id: type_id, category: product.join('|')},
        success: function (result) {
            $this.html(''+unity_lang('spacecp_save')+'').attr('onclick', 'save_user_type(this)')
            if (result.state == 0) {
                $('#show_user_type').html($type.data('name'))
                save_finish($this)
                return false
            }
            $.alert(result.message)
        },
        error: function (e) {
            $.alert(''+unity_lang('spacecp_save_failed')+'')
            $this.html(''+unity_lang('spacecp_save')+'').attr('onclick', 'save_user_type(this)')
        }
    })
}

// endregion

/*添加产品*/



/*提交修改密码*/
function edit_passwd(){
    var old_pwd=$("#old_pwd").val()
    var new_pwd=$("#new_pwd").val()
    var change_new_pwd=$("#change_new_pwd").val()
    if(new_pwd!=change_new_pwd){
        $.alert(''+unity_lang('spacecp_pw_not_match')+'')
        return false
    }
    if (new_pwd.length > 20 || new_pwd.length < 6){
        $.alert(''+unity_lang('spacecp_pw_new_pw_min')+'')
        return false;
    }

    $.ajax('/async/user-spacecp/password/change', {
        datatype: 'text/json',
        type: 'post',
        data: { password:old_pwd,new_password:new_pwd },
        success: function(result) {
            if(result.state == 0){
                $.alert(''+unity_lang('spacecp_pw_change_success')+'')
                $('input[type="password"]').val('')
                return false
            }
            $.alert(''+result.message)
        }})

}


/*登陆记录*/
function login_record_list(){
    $.ajax('/async/user-spacecp/login/records', {
        datatype: 'text/json',
        type: 'get',
        success: function(result) {
            if(result.state==0) {
                $('.content-login-c').find("li:gt(0)").remove()

                $.each(result.data.list, function () {
                    var login_record_list=''
                    login_record_list+=' <li>\n' +
                        '  <span>'+this.create_time+'</span>\n' +
                        '  <span>'+this.sign_ip+'</span>\n' +
                        '  </li>'
                    $('.content-login-c').append(login_record_list)
                })
                console.log(result,'result'+unity_lang('spacecp_person_set')+'')
            }
        }
    })
}






