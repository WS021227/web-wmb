/*开票信息*/
var invoice_message_list = []
$(function () {
    get_order_list()
    get_invoice_list()
    $("#checkall ").click(function () {
        var flag = $(this).prop("checked");
        if (flag) {
            $(".check ").prop("checked", true);
        } else {
            $(".check").prop("checked", false);
        }
        var CH = $(".check:checked").length; //列表中被选中的长度
        $("#selected").text('(已选' + CH + '个)')
    });


})

/*订单列表*/
function get_order_list() {
    // checked_all(false, 0)
    $.ajax('/async/user-order/orders-list', {
        datatype: 'text/json',
        type: 'get',
        data: {start: 0,},
        success: function (result) {
            if (result.state == 0) {
                var order_list = ''
                if(result.data.list.length>0){
                    $.each(result.data.list, function () {
                        order_list += '<li>\n'
                        if (this.status == -1) {
                            order_list += '<span><input type="checkbox" class="check"  onclick="check()" name="order_id" value="' + this.payment_id + '" /> ' + this.payment_content + '</span>\n'
                        }else{
                            order_list += '<span><input type="checkbox" disabled="disabled"  /> ' + this.payment_content + '</span>\n'
                        }
                        order_list += ' <span>￥' + this.total_amount + '</span>\n'
                        if (this.status == -1) {
                            order_list += '<span>未开票</span>\n'
                        } else if (this.status == 0) {
                            
                            order_list += '<span>开票中</span>\n'
                        }else if (this.status == 1) {

                            order_list += '<span>已开票</span>\n'
                        } else if (this.status == 2) {
                            order_list += '<span>已配送</span>\n'
                        } else {
                            order_list += '<span>暂无状态</span>\n'
                        }
                        order_list += '<span>' + this.pay_time + '</span>\n'
                        order_list += '</li>'
    
                    })
                    $('#order_list ul.body').html(order_list)
                }else{
                    $('#order_list ul').empty()
                    $('#order_list .center-tags-no').removeClass('display-none')
                }
                
            }
            console.log(result, '订单列表')
        }
    })
}



/*发票信息列表*/
function get_invoice_list() {
    $.ajax('/async/user-order/invoice/info/list', {
        datatype: 'text/json',
        type: 'get',
        data: {},
        success: function (result) {
            $('.make-invoice').removeClass('display-none')
            if (result.state == 0) {
                var invoice_list = ''
                invoice_message_list = result.data.list
                $.each(result.data.list, function () {
                    invoice_list += ' <li>\n'
                    invoice_list += '<span>' + this.title + '</span>\n'
                    if (this.type == '1') {
                        invoice_list += '<span>增值税发票</span>\n'
                    } else if (this.type == '2') {
                        invoice_list += '<span>增值税专用发票</span>\n'
                    } else if (this.type == '3') {
                        invoice_list += '<span>电子发票</span>\n'
                    }
                    invoice_list += ' <span>' + this.taxpayer_no + '</span>\n'
                    invoice_list += '<span>\n'
                    invoice_list += '<a class="del" href="javaScript:void(0);" onclick="delete_invoice(' + this.id + ')"></a>\n'
                    invoice_list += '</span>\n'
                    invoice_list += '</li>'
                })
                $('#invoice_list .body').html(invoice_list)
                $('.total-info').html(result.data.list.length + '个开票企业信息')
            } else {
                $('#invoice_list  ul').empty()
                $('#invoice_list  .center-tags-no').removeClass('display-none')
            }
        }
    })
}

/*删除发票信息列表*/
function delete_invoice(title_id) {
    $.ajax('/async/delete/invoice/info', {
        type: 'get',
        datatype: 'text/json',
        data: {title_id: title_id},
        success: function (result) {
            if (result.state == 0) {
                $.alert('删除成功')
                get_invoice_list()
                return false
            }
            $.alert(result.message)
        }
    })
}

/*单选*/
function check() {
    var CL = $(".check ").length; //列表长度；
    var CH = $(".check:checked").length; //列表中被选中的长度
    $("#selected").text('(已选' + CH + '个)')
    checked_all(CL == CH, CH)
}

function checked_all(status, check_len) {
    $("#checkall ").prop("checked", status);
    $("#selected").text('(已选' + check_len + '个)')
}

/*侧拉开票*/
function make_invoice() {
    if (invoice_message_list.length < 1) return $.alert('请添加开票信息')
    var chrcked_on = $(".check:checked").length; //列表中被选中的长度
    if (chrcked_on < 1) return $.alert('请选中需要开票的订单')
    make_invoice_firm_list()
}

/*添加企业*/
function add_firm() {
    var found_sort_html = ' <div class="collection-label-head">\n' +
        '<h2>发票管理</h2>\n' +
        '<span class="finish" onclick="save_invoice()">保存</span>' +
        '</div>\n' +
        '<div class="invoice-content" id="make_nvoice_box">\n' +
        '<div class="invoice-content-title">\n' +
        '<a href="javascript:void(0)" class="active" data-type="3">增值税电子普票</a>\n' +
        '<a href="javascript:void(0)" data-type="2">增值税专票</a>\n' +
        '</div>\n' +
        '<div class="center-i-content">' +
        '<ul class="invoice-general-box" id="invoice_general">\n' +
        '<li>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>公司抬头</legend>\n' +
        '<input value="" id="invoice_title">\n' +
        '</fieldset>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>纳税人识别号</legend>\n' +
        '<input value="" id="taxpayer_no">\n' +
        '</fieldset>\n' +
        '</li>\n' +
        ' <li>\n' +
        ' <fieldset class="fieldset last-fieldset">\n' +
        '<legend>手机号/邮箱</legend>\n' +
        ' <input value="" id="email_phone">\n' +
        ' </fieldset>\n' +
        '</li>\n' +
        '</ul>\n' +
        '<ul  class="invoice-general-box" id="invoice_special">\n' +
        '<li>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>公司抬头</legend>\n' +
        '<input value="" id="invoice_title">\n' +
        '</fieldset>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>纳税人识别号</legend>\n' +
        '<input value="" id="taxpayer_no">\n' +
        '</fieldset>\n' +
        '</li>\n' +
        '<li>\n' +
        '<fieldset class="fieldset">\n' +
        ' <legend>公司注册地址</legend>\n' +
        ' <input value="" id="invoice_address">\n' +
        '</fieldset>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>公司电话</legend>\n' +
        '<input value="" id="invoice_tel">\n' +
        '</fieldset>\n' +
        '</li>\n' +
        '<li>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>开户行</legend>\n' +
        '<input value="" id="invoice_bank">\n' +
        '</fieldset>\n' +
        ' <fieldset class="fieldset">\n' +
        '<legend>银行账户</legend>\n' +
        '<input value="" id="invoice_bank_account"> \n' +
        ' </fieldset>\n' +
        '  </li>\n' +
        ' <li>\n' +
        '<fieldset class="fieldset">\n' +
        '<legend>收件人</legend>\n' +
        ' <input value="" id="express_contact">\n' +
        ' </fieldset>\n' +
        ' <fieldset class="fieldset">\n' +
        ' <legend>收件人联系方式</legend>\n' +
        '  <input value="" id="express_tel_phone">\n' +
        '</fieldset>\n' +
        '  </li>\n' +
        '   <li>\n' +
        '  <fieldset class="fieldset last-fieldset">\n' +
        '  <legend>收件人地址</legend>\n' +
        ' <input value="" id="express_address">\n' +
        '  </fieldset>\n' +
        '  </li>\n' +
        '  </ul>\n' +
        '</div>' +
        '  </div>'
    website = new ModelBox({
        content: found_sort_html,
        //内容
        isShow: true, //初始状态
        elemId: 'websiteHtml',
        load: function () {
            $("#make_nvoice_box .invoice-content-title").on("click", "a", function () {
                // 设index为当前点击
                console.log('点击了')
                var index = $(this).index();
                // 点击添加样式利用siblings清除其他兄弟节点样式
                $(this).addClass("active").siblings().removeClass("active");
                // 同理显示与隐藏
                $(this).parents("#make_nvoice_box").find(".invoice-general-box").eq(index).show().siblings().hide();
            })
        }
    })
}

/*添加发票信息*/
function save_invoice() {
    var menu = $('#make_nvoice_box .invoice-content-title ');
    var itemActive = menu.find('.active').data('type'); // 选中项
    console.log(itemActive)
    var invoice_param = {}
    if (itemActive == '3') {
        invoice_param.invoice_type = '3'
        invoice_param.invoice_title = $('#invoice_general #invoice_title').val()
        invoice_param.taxpayer_no = $('#invoice_general #taxpayer_no').val()
        invoice_param.email_phone = $('#invoice_general #email_phone').val()
    } else if (itemActive == '2') {
        invoice_param.invoice_type = '2'
        invoice_param.invoice_title = $('#invoice_special #invoice_title').val()
        invoice_param.taxpayer_no = $('#invoice_special #taxpayer_no').val()
        invoice_param.email_phone = $('#invoice_special #email_phone').val()
        invoice_param.express_contact = $('#invoice_special #express_contact').val()
        invoice_param.express_address = $('#invoice_special #express_address').val()
        invoice_param.express_tel_phone = $('#invoice_special #express_tel_phone').val()
        invoice_param.invoice_address = $('#invoice_special #invoice_address').val()
        invoice_param.invoice_tel = $('#invoice_special #invoice_tel').val()
        invoice_param.invoice_bank = $('#invoice_special #invoice_bank').val()
        invoice_param.invoice_bank_account = $('#invoice_special #invoice_bank_account').val()
    }
    if (invoice_param.taxpayer_no.length < 15 || invoice_param.taxpayer_no.length > 18) return $.alert('纳税人识别号应为15-18位')

    $.ajax('/async/user-order/invoice/info', {
        datatype: 'text/json',
        type: 'post',
        data: invoice_param,
        success: function (result) {
            if (result.state == 0){
                get_invoice_list()
                return wpull.closeAll()
            }
            let error_keys = result.error?Object.keys(result.error):[]
            if(error_keys.length > 0){
                let error_key = error_keys[0], error_msg = result.error[error_key],
                    field = $('#' + error_key).siblings('legend').html()

                return $.alert(field + error_msg)
            }
            $.alert(result.message)
        }
    })
}

/*选择开票企业信息*/
function make_invoice_firm_list() {
    var _list = ''
    $.each(invoice_message_list, function () {

        _list += '<li><span><input type="radio" id="invoice_radio" name="title_id" data-title_id="' + this.id + '"/> ' + this.title + '</span>\n' +
            '<span>' + this.type_name + '</span>\n' +
            '<span>' + this.taxpayer_no + '</span>\n' +
            '</li>\n'
    })
    var make_invoice_firm_html = '<div class="collection-label-head">\n' +
        '<h2>发票管理</h2><span class="finish" id="invoice_apply">保存</span>' +
        '</div>\n' +
        '<div class="center-i-content" id="make_invoice_firm_list">\n' +
        '<ul>' + _list + '</ul>\n' +
        '</div>'
    wpull.dopen(function (pull) {
        pull.changeContent(make_invoice_firm_html)
        /*开票*/
        $('#invoice_apply').click(function () {
            var title_id = $("input[name='title_id']:checked").data("title_id"),
                $order = $('.check[name="order_id"]:checked'), //列表中被选中的长度
                payment_ids = ''
            $.each($order, function () {
                payment_ids += ',{0}'.format($(this).val())
            })
            $.ajax('/async/user-order/invoice/apply', {
                datatype: 'text/json',
                type: 'post',
                data: {payment_ids: payment_ids.trims(','), title_id: title_id},
                success: function (result) {
                    if (result.state == 0) {
                        pull.hide()
                        $.alert('开票成功')
                        get_order_list()
                        return
                    }
                    $.alert(result.message)
                }
            })
        })
    })
}