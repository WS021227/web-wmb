let curr_lang_json = {
    'payment_noright_buy': {cn: '抱歉，子账号暂无购买权，如有疑问请咨询客服。<br/>客服电话：166 2107 5894', en: 'Sub-accounts do not have the right to buy'},
    'payment_vip_month': {cn: '提示：您已选择了[@月]个月vip会员', en: 'Tip: You have selected a [@月]-month vip membership'},
    'payment_selected_package': {cn: '您已选择了<[@套装]>套餐', en: 'You have selected the <[@套装]> package'},
    'payment_package_title': {cn: '选择套装', en: 'Choose a set'},
    'payment_value_services': {cn: '增值服务', en: 'Value Added Services'},
    'payment_free': {cn: '赠送', en: 'free'},
    'payment_year': {cn: '年', en: 'year'},
    'payment_month': {cn: '月', en: 'month'},
    'payment_multi': {cn: '支持多账号', en: 'Multi-account'},
    'payment_actual': {cn: '实付', en: 'Actual payment'},
    'payment_price_month': {cn: '元/月', en: '/month'},
    'payment_saving': {cn: '立省[@金额]元', en: 'Save [@金额]'},

    'payment_re_content': {cn: '您之前有一笔购买订单，请确认支付状态。', en: 'You have an order before, please confirm the payment status.'},
    'payment_re_payed': {cn: '已完成支付', en: 'Payment completed'},
    'payment_re_nopayed': {cn: '未支付，重新购买', en: 'Unpaid, repurchase'},
    'payment_re_no_bill': {cn: '该订单尚未支付', en: 'The order has not been paid'},
    'payment_re_save': {cn: '确认', en: 'Confirm'},
    'payment_re_tips': {cn: '支付提示', en: 'Payment tips'},
    'payment_con_cancel': {cn: '继续取消', en: 'Continue to cancel'},
    'payment_wait_system': {cn: '等待系统处理', en: 'Waiting for processing'},
    'payment_con_cancel_tips': {cn: '如已付款，请等待系统处理；如未支付，请点继续取消。', en: 'If you confirm that you have paid, please click wait for processing. If you have not paid, click continue to cancel'},
    

    'sjj_title': {cn: '2022数据节', en: 'Data Festival'},
    'sjj_coupon': {cn: '优惠券', en: 'Coupon'},
    'sjj_credit': {cn: '直接抵扣', en: 'Deduct'},
    'sjj_get': {cn: '立即领取', en: 'Get it now'},
    'sjj_collected': {cn: '已领取', en: 'Received'},
    'sjj_left': {cn: '有效期剩余', en: 'Valid until '},
    'sjj_yhq_day': {cn: '天', en: 'Day'},
    'sjj_yhq_hours': {cn: '时', en: 'Hour'},
    'sjj_yhq_mins': {cn: '分', en: 'Min'},
    'sjj_yhq_secs': {cn: '秒', en: 'Sec'},
    
    'oyt_service_validity': {cn: '服务有效期', en: 'Service validity'},
'oyt_get_coupon': {cn: '领取服务延长券→', en: 'Get an Extenstion Service Coupon→'},
'oyt_one_two': {cn: '【老用户福利】领延长惊喜券，续费黄钻1年，可享3年服务有效期！', en: 'Renew the yellow diamond at the original price for 1 year, and enjoy 3 years of service.'},
'oyt_validity_left': {cn: '延长惊喜券有效期剩余', en: 'The validity of the extension coupon left'},
'oyt_fail_to_get': {cn: '领取失败', en: 'Failed to get'},
'oyt_no_permission_to_get': {cn: '无权限领取', en: 'No permission to collect'},
'oyt_coupon_get': {cn: '已领"服务延长惊喜"券，续费黄钻可享3年服务期！', en: 'Have received the Service Extension Coupon, and can enjoy a 3-year service of Yellow Diamond when renew it.'},


    'yangben': {cn: 'yangben', en: 'demo'}
}

let _user = wg.user,
    receive_vip = queryString('v'),  // 传递过来的vip ,默认为当前等级。需要默认选中
    receive_month = Number(queryString('m') || 3),  // 传递过来的周期,默认为3个月。需要默认选中
    receive_add = Number(queryString('ra') || 0),  // 传递过来的增值服务。需要默认选中
    receive_packages = queryString('pg'),  // 传递过来的套餐（实际也是增值服务id pg=4|6 ）。需要默认选中
    default_pay_method = Number(_user.paymenthod || 0), // 用户已存在的支付方式
    pay_currency = _user.user_functional.fm || (default_pay_method==0?(wg.lang =='cn'?'na':'usd'):([1, 2, 4, 5, 7].indexOf(default_pay_method)>=0?'rmb':'usd')), // 用户已存在的支付方式
    receive_auto = queryString('at'); // 传递过来的是否是自动扣款

    console.log(receive_packages,"支付")

let curr_vip, adds = [], currency_symbol = '￥',
    receive_vip_levels = {v: 'v', bd:'bd',yd:'yd',tsm:'yd'}
    var handleNum =0 // 点击次数
    var widthArr = []  // 存放当前每一个tab宽度
// var vip_products=''//选中vip产品
// var package_checked_list=[] // 选中的套餐产品
// var add_service_checked=[]// 选中增值产品
// var products=[]//选中的所有产品
//
// var vip_product_duration=0  //会员周期
// var method=1//支付来源
let payment_params = {
    pay_source: 0
}

$(function () {
    console.log(default_pay_method,_user, 'default_pay_method')
    // if(wg.is_wechat && wg.device == 'mobile') return $.alert('微信移动端内部浏览器暂无法使用，请至PC端进行付费')
    if (_user.account_type == 2) {
        $('.user-info-k').html('<div class="child-tips"><i><svg t="1656566144788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5856" width="80" height="80"><path d="M563.17952 176.128a92.16 92.16 0 0 1 33.93536 33.82272l301.91616 522.5472c25.43616 44.032 10.24 100.28032-33.9456 125.63456A92.5696 92.5696 0 0 1 819.02592 870.4H215.20384C164.20864 870.4 122.88 829.21472 122.88 778.40384a91.7504 91.7504 0 0 1 12.30848-45.90592l301.91616-522.5472c25.4464-44.032 81.88928-59.17696 126.07488-33.82272z m-71.75168 62.83264l-0.98304 1.5872-301.91616 522.5472c-2.68288 4.6592-4.096 9.9328-4.096 15.3088a30.72 30.72 0 0 0 28.95872 30.6176l1.81248 0.0512h603.82208c5.38624 0 10.68032-1.41312 15.36-4.096a30.6176 30.6176 0 0 0 12.1856-40.23296l-0.88064-1.6384-301.90592-522.5472a30.70976 30.70976 0 0 0-9.34912-10.05568l-1.96608-1.2288a30.84288 30.84288 0 0 0-41.04192 9.68704z m30.85312 241.38752a25.6 25.6 0 0 1 25.6 25.6v224.79872a25.6 25.6 0 0 1-25.6 25.6h-10.3424a25.6 25.6 0 0 1-25.6-25.6V505.94816a25.6 25.6 0 0 1 25.6-25.6h10.3424z m0-91.99616a25.6 25.6 0 0 1 25.6 25.6v10.1376a25.6 25.6 0 0 1-25.6 25.6h-10.3424a25.6 25.6 0 0 1-25.6-25.6v-10.1376a25.6 25.6 0 0 1 25.6-25.6h10.3424z" fill="#FAB005" p-id="5857"></path></svg></i><br/>'+unity_lang('payment_noright_buy')+'</div>')
        return false
    }
    if (_lang === 'en' && [0, 3, 8].indexOf(default_pay_method) < 0) {
        var jump_html = '<div style="font-size: .32rem;padding:0 .4rem;padding-top:1.5rem;line-height:150%;">English site only supports members who pay VIP by PayPal at first time.<br/>' +
            '6 seconds, then jump to payment page in Chinese, <a href="http://en.new.52wmb.com/Alipay" style="color:#06c;">Click and Jump</a></div>'
        $('.user-info-k').html(jump_html)
        return false
    }
    init_pay_method()
    build_product_item()
    $(document).on('click', '.slidebtn', function () {
        let mark=$(this).data('mark')
        var type = $(this).data('type')
        _category_tab(type,mark)
    })
})

/**
 * 共用初始化
 */
function init_common() {
    // vip 等级切换
    $(document).on('click', 'input[name="product_vip"]', function () {
        let $this = $(this), $pe = $this.parents('li'), level = $this.data('level')
        console.log(level,'level')
        ts_show_none(level)
        $pe.addClass("active").siblings().removeClass("active");
        $('.pay-mark-' + level).addClass('active').siblings().removeClass('active')
        curr_vip = level
        get_price_item()
        get_combo_nav(level)
        
    })
    // vip下的时长切换
    $(document).on('change', 'input[name="duration"]', function () {
        let $this = $(this), $pe = $this.parents('li')
        $pe.addClass("active").siblings().removeClass("active");
       $("#tips_" + curr_vip).html(unity_lang('payment_vip_month').replace('[@月]', $this.val()))
        $('.pay-adds-v').removeClass('display-none')
        let _auto_renew = Number($this.data('auto-renew'))
        $('.pay-mark-v .df-coupon').addClass('display-none')
        if (_auto_renew == 1) {
            $('input[name="method"][value="1"]').prop('checked', true)
                .parents('li').addClass("active").siblings().removeClass("active");
            $('.pay-adds-v').addClass('display-none')
        }else{
            $('.pay-mark-v .df-coupon' + $this.val()).removeClass('display-none')
        }
        get_price_item()
    })

    //钻到套餐切换
    $(document).on('change', 'input.package-ck', function () {
        let $this = $(this), $pe = $this.parents('li')
        $pe.addClass("active").siblings().removeClass("active");
        $("#tips_" + curr_vip).html(unity_lang('payment_selected_package').replace('[@套装]', $pe.find('.pk-name').html()))
        get_price_item()

    })
    //增值服务
    $(document).on('change', 'input[name="add_product"]', function () {
        get_price_item()
    })


    // 支付方式
    $('input[name="method"]').change(function () {
        pay_method_checked($(this))
        get_price_item()
    })


    $(document).on('click', '.share-sumbit', function () {
        _vip_data_server_tab('', $(this).data('slide'))
    })

    // 如果要小于当前等级，则使用当前等级
    let uv = _user.vip_level || 'v'
    curr_vip = verify_vip_level(receive_vip_levels[receive_vip], uv) ? receive_vip : uv
    // 默认选中月份
    receive_month = receive_vip !== 'v' ? 12 : (receive_month ? receive_month : 3)
    // 是否 默认选中自动扣款
    receive_auto = receive_vip == 'v' && receive_month == 1 && receive_auto ? true : false

}

// 提示的显示与否
function ts_show_none(level){
    if(level!=="yd" && level!=="tsm"){
        $("#three_active_tips").css("display","none")
    }else{
        $("#three_active_tips").css("display","block")
    }
}

function init_pay_method() {
    $('.pay-method.pay-' + pay_currency).removeClass(' display-none')
    // 支付方式为 支付宝，微信，PayPal
    var $default_pay_method = $('input[name="method"][value="'+ ([1, 2, 3].indexOf(default_pay_method) >= 0 ?default_pay_method:(pay_currency == 'usd' ? 3 : 1)) +'"]')
    $default_pay_method.prop('checked', true)
    pay_method_checked($default_pay_method)
}

function pay_method_checked($this) {

    let $pe = $this.parents('li')
    $pe.addClass("active").siblings().removeClass("active");
    let _auto_renew = Number($('input[name="duration"]:checked').data('auto-renew'))
    if (_auto_renew == 1 && $this.val() != 1) {
        $('input[name="duration"][value="1"][data-auto-renew="0"]').prop('checked', true)
            .parents('li').addClass("active").siblings().removeClass("active")
    }
}

function _vip_data_server_tab(stops, slide) {
    var el = $('#meal_list_' + slide)
    var _out = $('#meal_list_' + slide).parent().width();
    var _w = el.width() - _out;
    var _l = el.position().left;
    if (_l < 0) _w = 0;
    el.stop(true).animate({
        left: -_w + 'px'
    }, 300, function () {
        if (stops) {
            if (stops == 'right') $('.share-sumbit').addClass('right').removeClass('left');
            else $('.share-sumbit').addClass('left').removeClass('right');
        } else if (_l < 0) $('.share-sumbit').addClass('right').removeClass('left');
        else $('.share-sumbit').addClass('left').removeClass('right');
    });
}

function unpaid(){
    var html = '<div class="rightL-ac" style="text-align:center;padding:50px 0;"><span style="font-size:16px;margin-bottom:0;color:#333;padding-bottom:5px;">你有一笔尚未完成支付的子订单，请继续完成支付。</span>' +
        '<a href="/payment/unpaid" style="height:34px;background:#3B8CFF;color:#fff;line-height:34px;width:120px;font-size:14px;border-radius:100px;display:inline-block;margin-top:15px;">前往支付</a></div>';
    layer.open({
        type: 1,
        area: ['450px', ''],
        shadeClose: false, //点击遮罩关闭
        title: '提示',
        content: html
    });
}
function paying_order(data){
    var html = '<div class="rightL-ac" style="text-align:center;padding:30px 30px;padding-bottom:20px;"><span style="font-size:16px;margin-bottom:0;color:#333;padding-bottom:5px;">'+unity_lang('payment_re_content')+'</span></div>';
    layer.open({
        type: 1,
        closeBtn: 0,
        area: ['450px', ''],
        shadeClose: false, //点击遮罩关闭
        title: unity_lang('payment_re_tips'),
        btn: [unity_lang('payment_re_payed'), unity_lang('payment_re_nopayed')],
        content: html,
        btn1: function (a){
            check_payment(data.order_no, a)
        },
        btn2: function (){
            paying_order_cancel_warn(data.order_no)
        }
    });
}

function paying_order_cancel_warn(order_no){
    layer.open({
        type: 0,
        closeBtn: 0,
        area: ['450px', ''],
        shadeClose: false, //点击遮罩关闭
        title: unity_lang('payment_re_tips'),
        btn: [unity_lang('payment_con_cancel'), unity_lang('payment_wait_system')],
        content: unity_lang('payment_con_cancel_tips'),
        btn1: function (a){
            layer.close(a)
            recheck_product(order_no)
        }
    });
}

function check_payment(order_no, a) {
    $.ajax('/async/check/payment', {
        data: {order_no: order_no},
        datatype: 'json',
        type: 'get',
        success: function (result) {
            if (result.state != 0) return $.alert('error')
            if (result.state == 1000) {
                layer.close(a)
                return $.alert('该订单正在处理，请稍后或联系外贸邦')
            }
            let ck_data = result.data
            if(ck_data.state != 0) return $.alert(''+unity_lang('payment_re_no_bill')+'')
            layer.close(a)
            if (ck_data.success_result) {
                let message = '订单已支付成功'
                if (result.data.success_result.msg) {
                    message += ',但存在部分错误，请联系外贸邦'
                }
               return  $.alert(message)
            }
            $.alert('订单查询异常，请联系外贸邦')
        }
    })
}

function recheck_product(order_no){

    $.ajax('/async/recheck/product', {
        data: {order_no: order_no},
        datatype: 'json',
        type: 'get',
        success: function (result) {
            window.location.reload()
        }
    })
}

// region  支付模块
function build_product_item() {
    get_products_price(function (result) {
        init_common()
        // 新版用户有套餐，需要设置默认选中
        let packages = receive_packages ? receive_packages.split('|') : [],
            pk = packages.length > 0 ? packages.map(e => parseInt(e)).sort() : [],
            respk = pk.sort(function (a, b) {
                return a - b
            }),
            str_pg = respk.length > 0 ? JSON.stringify(respk) : ''
        currency_symbol = result.data.currency_symbol
        var set_meal_list = '';
        $.each(result.data.list, function () {
            let _state_active = curr_vip == this.mark ? 'active' : ''
            $('.member-type-tab ul').append('<li id="form_' + this.mark + '" class="' + _state_active + '">' +
                '<label><b>' + this.name + '</b><font>' + this.descriptions + '</font>' +
                '<input type="radio" class="product-vip" hidden  data-level="' + this.mark + '" ' + (curr_vip == this.mark ? 'checked="checked"' : '') + ' name="product_vip" value="' + this.id + '">' +
                '</label></li>')

            set_meal_list += '<div class="set-meal  pay-mark-' + this.mark + ' ' + _state_active + ' " data-vserver="' + this.mark + '">'

            if (this.durations || this.packages) {
                set_meal_list += '<div class="pay-share member-price-select slideWarp">'
                set_meal_list += '<h2>' + unity_lang('payment_package_title') + '</h2>'
                set_meal_list += '<div class="product-module">'

                let build_obj = {}
                if (this.mark == 'v') {
                    build_obj = build_durations(this.durations.list)
                } else if (this.packages) {
                    build_obj = build_package(this.mark, this.packages.list, str_pg)
                }

                let right_slide = ''
                if ((build_obj.len || 0) > 4) {
                    set_meal_list += '<div class="slidebtn left " data-type="left" data-mark="' + this.mark + '"></div>'
                    right_slide = '<div class="slidebtn right " data-type="right" data-mark="' + this.mark + '"></div>'
                }
                set_meal_list += '<div class="tab-wrap">'
                set_meal_list += '<ul id="combo_nav  meal_list_' + this.mark + '" class="product-list">'

                set_meal_list += build_obj.html || ''
                set_meal_list += '</ul>'
                set_meal_list += '</div>' + right_slide
                set_meal_list += '</div>'
                set_meal_list += '<span class="tips" id="tips_' + this.mark + '">' + (build_obj.tips || '') + '</span>'
                set_meal_list += '</div>\n'
            }
            let adds = this.add_service || []
            if (adds.length > 0) {
                set_meal_list += '<div class="pay-share member-value-select pay-adds-'+ this.mark +'">'
                set_meal_list += '<h2>' + unity_lang('payment_value_services') + '</h2>'
                // set_meal_list += ' <p>续费福利：社媒标准版、BEM邮件群发二选一，免费赠送。</p>'
                set_meal_list += '<ul>'
                let vip_mark = this.mark
                $.each(adds, function (index, item) {
                    let _list = item.list, _ck_item, dw_li = '', is_check = false, adds_mark
                    $.each(_list, function (adds_index, adds_item) {
                        if (receive_add == adds_item.product_id) {
                            _ck_item = adds_item
                            is_check = true
                        } else if (adds_index == 0) {
                            _ck_item = adds_item
                        }
                        adds_mark = adds_item['product_master']
                        dw_li += '<li class="item" data-value="' + adds_item.product_id + '" data-gift="' + adds_item.gift + '" data-txt="' + adds_item.amount_txt + '">' + adds_item.name + '</li>'
                    })

                    set_meal_list += ' <li>'
                    set_meal_list += '<input type="checkbox" data-addsmk="' + adds_mark + '" name="add_product" ' + (is_check ? 'checked="checked"' : '') + '  value="' + _ck_item.product_id + '">'

                    if (dw_li != '' && _list.length > 1) {
                        set_meal_list += '<div data-vip="' + vip_mark + '" data-mark="' + adds_mark + '" class="adds-dd">'
                        set_meal_list += '<div class="dropdown-btn" data-value="0"><font>' + _ck_item.name + '</font><i></i></div>'
                        set_meal_list += '<ul class="dropdown-menu" style="margin-top:10px;" >' + dw_li + '</ul></div>'
                    } else {
                        set_meal_list += '<b>' + _ck_item.name + '</b>'
                    }
                    if (_ck_item.gift) {
                        set_meal_list += '<font data-adg="'+ _ck_item.gift_type +'_'+ adds_mark +'" class="gift-product gift-'+ _ck_item.gift_type +'">' + unity_lang('payment_free') + '</font>'
                    }
                    set_meal_list += '<span class="amount">' + _ck_item.amount_txt + '</span>'
                    set_meal_list += '</li>'
                })
                set_meal_list += '</ul>'
                set_meal_list += '</div>'
            }
            set_meal_list += '</div>'
        })
        $('.set-meal-box').append(set_meal_list)
        get_price_item()
        get_combo_nav()
        // get_df_coupon(result.data.dfn)
        build_dty()
    })
}

/**
 * 初始化点击左右滑动
 * 
 */
function  get_combo_nav(mark) {
    var vip = ''
    if (mark) {
        vip = mark
    } else {
        vip = receive_vip
    }
    var id = $(".pay-mark-" + vip)
    var $dom = id.find('.product-list')
    $dom.animate({left: '0px'});
    widthArr = [];
    $(".left").hide();
    $(".right").show()
    var elChildren = $dom.children('li')
    for (var i = 0, ilen = elChildren.length; i < ilen; i++) {
        widthArr.push($dom.children('li')[i].offsetWidth + 10) // 10是当前span的margin
    }
}
/**
 * 构建vip时长套餐
 * @param durations
 * @returns {Object}
 */
function build_durations(durations) {
    let _html = '', ck_tips
    $.each(durations, function (index, item) {
        let active = '', ck = ''
        if (receive_auto) {
            if (item.duration == receive_month && item.auto_renew) {
                active = 'active'
                ck = 'checked="checked"'
                ck_tips = item.duration
            }
        } else if (item.duration == receive_month && !item.auto_renew) {
            active = 'active'
            ck = 'checked="checked"'
            ck_tips = item.duration
        }
        _html += '<li class="' + active + '"><label>'
        //'<input type="radio" hidden name="duration" value="' + item.duration + '" ' + ck + ' data-auto-renew="' + (item.auto_renew ? 1 : 0) + '" >'
        // 第一层显示title
        _html += '<span>' + item.duration_title + '</span>'
        //第二层显示现价和原价
        _html += '<span>' + item.amount_txt + '<s class="through">￥' + item.ori_amount + '</s></span>'
        // 第三层  按照 产品属性， 产品别名，节省saving 字段 月单价 依次判断显示
        if (item.product_attr) {
            _html += '<span>' + item.product_attr + '</span>'
        } else if (item.product_alias) {
            _html += '<span>' + item.product_alias + '</span>'
        } else if (item.saving > 0) {
           _html += '<span>'+unity_lang('payment_saving').replace('[@金额]', item.saving)+'</span>'
        } else {
            _html += '<span>' + (item.amount / item.duration).toFixed(1) + ''+unity_lang('payment_price_month')+'</span>'
        }
        _html += '<input type="radio" hidden name="duration" value="' + item.duration + '" ' + ck + ' data-auto-renew="' + (item.auto_renew ? 1 : 0) + '" ></label></li>'
    })
    return {html: _html, len: durations.length || 0, tips: unity_lang('payment_vip_month').replace('[@月]', ck_tips)}
}

/**
 *
 * @param mark
 * @param packages
 * @param pg
 */
function build_package(mark, packages, pg) {
    let _html = '', ck_tips, pack_count=0
    $.each(packages, function (indexa, item) {
        $.each(item.list, function (indexb, item) {
            pack_count += 1
            let active = '', ck = '', product = JSON.stringify(item.products || '')
            if (product == pg || (item.products == null && !pg) || (indexa == 0&& !pg)) {
                active = 'active'
                ck = ' checked="checked" '
                ck_tips = item.name
            }
            _html += ' <li class="' + active + '" >'
            _html += ' <label><span class="pk-name">' + item.name + '</span>'
            if (item.rebate_amount > 0) {
                _html += ' <span><b>' + currency_symbol + '</b>' + item.amount + '<font>/'+unity_lang('payment_year')+'</font><s class="through">' + currency_symbol + item.ori_amount + '</s></span>'
                _html += '<span>' + item.rebate_des + '</span>'
            } else {
                _html += ' <span><b>' + currency_symbol + '</b>' + item.amount + '<font>/' + item.duration + ''+unity_lang('payment_month')+'</font></span>'
                _html += '<span>'+unity_lang('payment_multi')+'</span>'
            }
            _html += '<input hidden type="radio"  class="package-ck" value="' + product + '" name="package_' + mark + '" ' + ck + ' ></label></li>'
        })
    })
    return {html: _html, len: pack_count, tips: unity_lang('payment_selected_package').replace('[@套装]', ck_tips)}
}

// endregion


/*产品价格列表*/
function get_products_price(callback) {
    $.ajax('/payment/products/price', {
        datatype: 'text/json',
        type: 'get',
        data: null,
        success: function (result) {
            if (result.state == 0) {
                $('.user-info-k .user-c').addClass('active')
                callback(result)
                $(".adds-dd").wdropdown({
                    selected: function (e, that) {
                        let $pe = that.$element, adds_mark = $pe.data('mark'), vip = $pe.data('vip')
                        $('.pay-mark-' + vip + ' input[data-addsmk="' + adds_mark + '"]').val(e.value)
                            .prop('checked', true)
                        $pe.siblings('.amount').html(e.elem.data('txt'))
                        get_price_item()
                    }
                })
                return false
            }
            if(result.state == 3000){
                return unpaid()
            }
            if(result.state == 3001){
                return paying_order(result.data)
            }
        }
    })
}

/**
 * 构建支付参数
 */
function build_payment_params() {
    let products = []
    let item_products = ''
    item_products = $("#item_buy").data("item-products")
    if (item_products) {
        payment_params.method = $('input[name="method"]:checked').val()
        payment_params.auto_renew = 0;
        payment_params.pay_duration = 12;
        payment_params.products = item_products
    } else {
        if (curr_vip === 'v') {
            let $dur = $('input[name="duration"]:checked')
            payment_params.auto_renew = $dur.data("auto-renew")
            payment_params.pay_duration = $dur.val()
        } else {
            products = JSON.parse($('input[name="package_' + curr_vip + '"]:checked').val() || '[]')
            payment_params.pay_duration = 12
            payment_params.auto_renew = 0
        }
        products.push(parseInt($('input[name="product_vip"]:checked').val()))
        let $adds = $('.pay-mark-' + curr_vip + ' input[name="add_product"]:checked')
        $.each($adds, function () {
            products.push(parseInt($(this).val()))
        })
        payment_params.method = $('input[name="method"]:checked').val()
        payment_params.products = products.join('|')
    }

}

/**
 * 获取价格明细
 */
function get_price_item() {
    console.log(payment_params,"支付参数")
    build_payment_params()
    $.loadajax('/payment/price/details', {
        datatype: 'text/json',
        type: 'get',
        data: payment_params,
        success: function (result) {
            console.log(result.state, 'asdf')
            $(".member-order-list ul").empty()
            if (result.state == 0) {
                var products_details = '', data = result.data
                $.each(data.payment_item, function () {
                    products_details += '<li class="' + (this._class || '') + '">' + this.des + '</li>'
                })
                $(".member-order-list ul").append(products_details)
                $(".pay-sumbit span").html('' + unity_lang('payment_actual') + ':<b>' + result.data.currency_symbol + '<font>' + result.data.total_amount + '</font></b>')

                $('.gift-drs').addClass('display-none')
                if (data.drs) {
                    if (data.drs == 'drs' || data.drs == 'tsm_soso_bem') {
                        $('.gift-drs').removeClass('display-none')
                    } else {
                        if (data.drs == 'drs_soso_pro') $('.gift-drs[data-adg="drs_benchmark"]').removeClass('display-none')
                        $('.gift-drs[data-adg="' + data.drs + '"]').removeClass('display-none')
                    }
                }
                var $pd_dty = $('.old-diamond-tw')
                if ($pd_dty.length > 0) {
                    var _p = payment_params.products.split('|')
                    if (_p.indexOf('4') >= 0 || _p.indexOf('6')>=0 || _p.indexOf('11')>=0) {
                        $('.old-diamond-tw').addClass('display-none')
                    } else {
                        $('.old-diamond-tw').removeClass('display-none')
                    }
                }
            }
        }
    })
}

function get_df_coupon(dfn) {
    if (!dfn) return
    $.ajax('/async/payment/df/coupon', {
        type: 'get',
        datatype: 'json',
        success: function (result) {
            let bz = {'cn': '￥', 'en':'$'}[_lang]
            $.each(result.data.list, function (a, b){
                if (!b.activity_state) return true
                let dur = b.vip_duration, no_buyer_old = parseInt(wg.user.no_buyer_old || 0)
                if(dur == 1 && b.vip_level== 'v' && (no_buyer_old==1 || no_buyer_old==4)) return true
                let ht ='<div class="pay-module pay-share df-coupon  df-coupon'+ dur +' '+ (b.vip_level != 'v' || dur == payment_params.pay_duration?'': 'display-none') +'">' +
                    '<div class="sjj-k">' +
                    '<div class="sjj-title"><span><font>' + unity_lang('sjj_title') + '</font><br>' + unity_lang('sjj_coupon') + '</span></div>' +
                    '<div class="sjj-text"><p><b><font>'+bz+'</font>' + b.amount + '</b><span>' + unity_lang('sjj_credit') + '</span></p>' +
                    '<p class="df-countdown"></p>'
                if (b.id) {
                    ht += '</div><div class="sjj-button-pay active"><a>' + unity_lang('sjj_collected') + '</a></div>'
                } else {
                    ht += '</div><div class="sjj-button-pay"><a href="javascript:void(0)" data-sid="'+ b.sid +'" onclick="df_coupon_receive(this)">' + unity_lang('sjj_get') + '</a></div>'
                }

                ht += '</div></div>'
                $('.pay-mark-' + b.vip_level).append(ht)
                if(b.vip_level == 'yd') $('.pay-mark-tsm').append(ht)
            })
            let total_seconds = (new Date('2022-12-31 23:59:59') - new Date()) / 1000
            iexperience_countdown = window.setInterval(function (){
                total_seconds --
                if (total_seconds <= 0) {
                    $('.df-countdown').remove();
                    window.clearInterval(iexperience_countdown)
                    return
                }
                df_countdown(total_seconds)
            },1000)
        }
    })
}

function df_countdown(totalSeconds) {

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
    $('.df-countdown').html('' + unity_lang('sjj_left') + ''+ days +'' + unity_lang('sjj_yhq_day') + ' / '+ hours +'' + unity_lang('sjj_yhq_hours') + ' / '+ minutes +'' + unity_lang('sjj_yhq_mins') + ' / '+ seconds +'' + unity_lang('sjj_yhq_secs') + '')
}

function df_coupon_receive(elem){
    $.ajax('/async/payment/df/coupon', {
        datatype:'text/json',
        type:'post',
        data: {setting_id: $(elem).data('sid')},
        success: function (result){
            if(result.state == 0){
                get_price_item()
                $(elem).removeAttr('onclick').html('' + unity_lang('sjj_collected') + '')
                return
            }
            $.alert('领取失败')
        }
    })
}

var $pay_dty_obj;
function build_dty() {
    if (pay_dty == '0') return;
    var box_html = '<div class="old-diamond-tw pay-share display-none"><h2>' + unity_lang('oyt_service_validity') + '</h2>', $pay_yd = $('.pay-mark-yd')
    if (pay_dty == '1') {
        box_html += '<div class="old-diamond-no">' +
            '<i><svg t="1675151305581" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5280" width="50" height="50"><path d="M195.30666667 869.76L39.04 171.30666667l301.65333333-54.08-18.13333333 79.14666666-194.56 33.06666667 100.37333333 485.33333333zM828.16 989.33333333L232.21333333 876.48 391.57333333 34.66666667l595.94666667 112.74666666-159.36 841.92zM319.46666667 817.06666667l449.17333333 85.01333333L900.26666667 206.82666667l-449.17333334-85.01333334L319.46666667 817.06666667z" fill="#FF9F06" p-id="5281"></path><path d="M478.62933333 457.42613333L517.312 252.39466667l73.37493333 13.8432-38.68266666 205.0304z" fill="#FF9F06" p-id="5282"></path><path d="M695.86346667 316.81813333l6.4704-28.8288 104.07466666 23.36-6.4704 28.8288zM685.09866667 365.24586667l6.4704-28.8288 104.07466666 23.36-6.4704 28.8288zM673.70026667 412.86186667l6.47146666-28.8288 104.07466667 23.36-6.47146667 28.8288zM663.77706667 460.69866667l6.4704-28.8288 104.07466666 23.36-6.4704 28.8288zM651.7728 510.14506667l6.4704-28.82773334 104.07466667 23.36-6.4704 28.8288zM640.58026667 560.04373333l6.47146666-28.8288 104.07466667 23.36-6.47146667 28.8288zM630.8832 608.47146667l6.4704-28.8288 104.07466667 23.36-6.4704 28.8288zM619.50826667 655.984l6.4704-28.8288 104.07466666 23.36-6.4704 28.8288zM609.45706667 703.9008l6.4704-28.8288 104.07466666 23.36-6.4704 28.8288zM598.54293333 753.24373333l6.47146667-28.8288 104.07466667 23.36-6.47146667 28.8288z" fill="#F7931E" p-id="5283"></path></svg></i>\n' +
            '<p>' + unity_lang('oyt_one_two') + '</p>' +
            '<p><a href="javascript:void(0)" onclick="pay_receive_ty(this)">' + unity_lang('oyt_get_coupon') + '</a></p>' +
            '</div>'
        $pay_yd.append(box_html + '</div>')
        return;
    }
    var pay_dty_ex = new Date(pay_dty)
    if (!(pay_dty_ex instanceof Date)) return;
    box_html += ' <div class="old-diamond-recived">' +
        '<i><svg t="1675157656788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7201" width="50" height="50"><path d="M93.090909 442.205091h558.545455v581.818182h-535.272728a23.272727 23.272727 0 0 1-23.272727-23.272728v-558.545454z" fill="#E4774E" p-id="7202"></path><path d="M884.363636 1024.023273h-162.909091v-581.818182h186.181819v558.545454a23.272727 23.272727 0 0 1-23.272728 23.272728z" fill="#EA8E4F" p-id="7203"></path><path d="M502.612883 253.132587m16.456304-16.456303l218.70427-218.70427q16.456303-16.456303 32.912607 0l68.737978 68.737978q16.456303 16.456303 0 32.912607l-218.70427 218.70427q-16.456303 16.456303-32.912607 0l-68.737978-68.737978q-16.456303-16.456303 0-32.912607Z" fill="#EA8E4F" p-id="7204"></path><path d="M480.364153 354.804549m-16.456304-16.456303l-218.70427-218.704271q-16.456303-16.456303 0-32.912606l70.251958-70.251959q16.456303-16.456303 32.912607 0l218.70427 218.704271q16.456303 16.456303 0 32.912606l-70.251958 70.251959q-16.456303 16.456303-32.912607 0Z" fill="#E4774E" p-id="7205"></path><path d="M0 232.727273m23.272727 0l977.454546 0q23.272727 0 23.272727 23.272727l0 93.090909q0 23.272727-23.272727 23.272727l-977.454546 0q-23.272727 0-23.272727-23.272727l0-93.090909q0-23.272727 23.272727-23.272727Z" fill="#E4774E" p-id="7206"></path></svg></i> ' +
        '<p>' + unity_lang('oyt_coupon_get') + '</p>' +
        '<p id="pay_dty_time"></p></div>'
    $pay_yd.append(box_html + '</div>')
    start_pay_dty_time(pay_dty_ex)
}

function start_pay_dty_time(_time) {
    var _time_flag = (_time.getTime() - new Date().getTime()) / 1000

    $pay_dty_obj = setInterval(function () {
        pay_dty_time(_time_flag)
        _time_flag--;
    }, 1000)
}


function pay_receive_ty(elem) {
    $.ajax('/async/receive/ty', {
        datatype: 'text/json',
        type: 'post',
        success: function (result) {
            if(result.state == 0){
                $.wSetCookie('_DTY', '1', 86400)
                $(elem).parents('p').attr('id', 'pay_dty_time').html('')
                start_pay_dty_time(new Date(result.data.expire))
                get_price_item()
                return
            }
            if(result.state == 1000){
                $.alert('无权限领取')
                return;
            }
            $.alert('领取失败')
        }
    })
}


function pay_dty_time(time_flag) {
    if (time_flag > 0) {
        var _time_data = $.countdown(time_flag)
        $('#pay_dty_time').html(`${unity_lang('oyt_validity_left')}：${_time_data.days}${unity_lang('sjj_yhq_day')} / ${_time_data.hours}${unity_lang('sjj_yhq_hours')} / ${_time_data.minutes}${unity_lang('sjj_yhq_mins')} / ${_time_data.seconds}${unity_lang('sjj_yhq_secs')}`)
    } else {
        $('#pay_dty_time').html(`延长券已过期`)
        if ($pay_dty_obj) window.clearInterval($pay_dty_obj)
    }
}

/*添加订单*/
function submit_payment() {
    // 微信走form表单提交
    if (payment_params.method == 2 && !wg.is_wechat) {
        let _fm = ''
        $.each(payment_params, function (key, value) {
            _fm += '<input type="hidden" name="' + key + '" value="' + value + '">'
        })
        $('#wx_pay_add').html(_fm)
        document.wx_pay_add.action = '/payment/add'
        document.wx_pay_add.submit();
        return false
    }
    $.ajax('/payment/add', {
        datatype: 'text/json',
        type: 'post',
        data: payment_params,
        success: function (result) {
            console.log(result,"9999")
            // alert(result.message + '，' + wg.is_wechat + payment_params.method)
            if (result.state == 0) {
                let vip_data = result.data.payment_data.vip_data || {}, auto_renew = vip_data.auto_renew;
                if (payment_params.method == 1) {
                    if (auto_renew) {
                        alipay_renew(result)
                        return
                    }
                    window.location.href = result.data.integration.alipay_url
                    return;
                }
                if(payment_params.method == 2 && wg.is_wechat){
                    wechat_payment(result.data)
                    return;
                }
                window.location.href = result.data.integration.pp_url
                return;
            }
            if(result.state == 3002) {

                layer.alert(
                    result.message,
                    {
                        'title': '提示',
                        area: ['200px', 'auto'],
                        yes: function () {
                            window.location.reload()
                        }
                    })
                return
            }
            if(result.state == 4000){
                return unpaid()
            }
            if(result.state == 4001){
                return paying_order(result.data)
            }
        }
    })
}

// region 添加订单成功后的处理方法


//支付宝周期扣款弹窗
function alipay_renew(result) {
    var alipayt = ''
    alipayt += '<div class="pay-auto" style="text-align: center;padding:30px 0;">'
    alipayt += '<h2 style="padding-top:15px;font-size:18.4px;font-weight:bold;">请使用支付宝扫码支付</h2>'
    alipayt += '<p style="font-size:15.4px;color:#333;padding-top:4px;">到期前自动扣款，可随时取消</p>'
    alipayt += '<p style="font-size:15.4px;color:#333;padding-top:4px;">连续付费: <b style="font-size:16.4px;color:#f30;">' + result.data.payment_data.total_amount + '元</b>/1月</p>'
    alipayt += '<div id="alipayt" style="margin:15px auto;padding:12px 0;width:40%;border:1px #eee solid;box-shadow:2px 2px 7px rgba(0, 0, 0, .1);"></div>'
    alipayt += '</div>'

    layer.open({
        type: 1,
        skin: 'layui-layer-rim',
        area: ['600px', ''],
        shadeClose: true, //点击遮罩关闭
        content: alipayt,
        title: "支付宝周期扣款",
        maxmin: false
    });
    $('#alipayt').qrcode(result.period_url + '?order_no=' + result.data.order_no);
    alipay_period_verify(result.data.order_no)
}

function alipay_period_verify(order_no) {

    $.ajax({
        url: '/async/payment/verify',
        type: "post",
        datatype: "json",
        async: true,
        data: {"order_no": order_no},
        success: function (result) {
            let state = result.state, data = result.data;
            if (state === 0) {
                layer.closeAll()
                layer.alert(
                    '支付并签约成功',
                    {
                        'title': '提示',
                        yes: function () {
                            window.location.reload()
                        }
                    })
            } else if (state === 10000) {  // 订单未支付成功
                window.setTimeout(function () {
                    alipay_period_verify(order_no)
                }, 1000)
            } else {
                $('body').html(result.message)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            window.setTimeout(function () {
                verification_order(order_no)
            }, 5000)
        }
    });
}

//左右滑动
function _category_tab(type,mark) {
  
  var  $dom=$(".pay-mark-"+mark)
    var $el = $dom.find('.product-list')
    // $("''.product-list")
    var elWidth = $el[0].clientWidth // 内部菜单的宽度
    var wrapWidth = $dom.find('.tab-wrap')[0].clientWidth 
    var canmove = elWidth - wrapWidth // 可以移动的距离
    currleft = $el[0].offsetLeft // 当前向左偏移的距离
    if (type == 'left') {
        $(".right").show()
         currleft = currleft + widthArr[handleNum]*2.3
        $el.stop().animate({left: currleft + 'px'}, 300, function () {
            // handleNum--
            if (currleft >= 0) {
                handleNum = 0
                $(".left").hide()
                $(".right").show()
                $el.stop().animate({left: 0 + 'px'})
            }
        })
    } else {
        $(".left").show()
        currleft = Math.abs(currleft) + widthArr[handleNum]*2.3 
        $el.stop().animate({left: -currleft + 'px'}, 300, function () {
            // handleNum+1
            if (currleft >= canmove) {
                $(".right").hide()
                $(".left").show()
                // handleNum = $el.children('li').length - 1
                $el.stop().animate({left: -canmove + 'px',})
            }
        })
    }
}

let wx_order_no = ''
// 微信内部浏览器支付
function wechat_payment(data) {
    if (typeof WeixinJSBridge == "undefined"){
        function _onBridgeReady(){
            onBridgeReady(data)
        }
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', _onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', _onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', _onBridgeReady);
        }
    }else{
        onBridgeReady(data);
    }
}



function onBridgeReady(data) {
    wx_order_no = data.order_no
    let integration = data.integration
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId": integration.appId,     //公众号名称，由商户传入
            "timeStamp": integration.timeStamp,         //时间戳，自1970年以来的秒数
            "nonceStr": integration.nonceStr, //随机串
            "package": integration.package,
            "signType": integration.signType,         //微信签名方式：
            "paySign": integration.paySign //微信签名
        },
        function (res) {
            console.log(res,"微信支付")
            if (res.err_msg === "get_brand_wcpay_request:ok") {
                // 使用以上方式判断前端返回,微信团队郑重提示：
                window.setTimeout(verificationOrder, 1000)
                return false
            }
            // 支付过程中用户取消
			if (res.err_msg == "get_brand_wcpay_request:cancel") {

			}
			// 支付失败
			if (res.err_msg == "get_brand_wcpay_request:fail") {

			}
        });
}


function verificationOrder() {
    $.ajax({
        url: '/async/payment/verify',
        type: "post",
        datatype: "json",
        async: true,
        data: {"order_no": wx_order_no},
        success: function (result) {
            let state = result.state, data = result.data;
            if (state === 0) {
                layer.alert('支付成功',
                    {
                        'title': '提示',
                        'btn':'返回主页',
                        area: ['200px', 'auto'],
                        yes: function (){
                            window.location.href = '/'
                        }
                    }
                )
            } else if (state === 10000) {  // 订单未支付成功
                count = 10
                window.setTimeout(verificationOrder, 1000)
            } else if (state === 10001) {  // 订单支付成功，子订单未支付
                wx_order_no = data.order_no
                layer.alert('<p style="font-size:1rem;color:#333;text-align:center;">订单总额：￥'+ data.total_amount +'元</p>' +
                    '<p style="font-size:1rem;color:#333;text-align:center;">' +
                    '本次支付已成功, 已成功支付￥'+ data.paid_amount +'元，需再支付￥' + data.remain_amount + '元</p>',
                    {
                        'title': '提示',
                        area: ['200px', 'auto'],
                        yes: child_payment
                    }
                )
            } else {
                $('body').html(result.message)
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            window.setTimeout(verificationOrder, 5000)
        }
    });
}


function child_payment() {
    layer.closeAll()
    $.ajax('/payment/child/weixin', {
        type: 'post',
        data: {"order_no": wx_order_no},
        dataType: 'json',
        success: function (results) {
            let data = results.integration
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId": data.appId,     //公众号名称，由商户传入
                    "timeStamp": data.timeStamp,         //时间戳，自1970年以来的秒数
                    "nonceStr": data.nonceStr, //随机串
                    "package": data.package,
                    "signType": data.signType,         //微信签名方式：
                    "paySign": data.paySign //微信签名
                },
                function (res) {
                    if (res.err_msg === "get_brand_wcpay_request:ok") {
                        // 使用以上方式判断前端返回,微信团队郑重提示：
                        window.setTimeout(verificationOrder, 1000)
                        return false
                    }
                });
        }
    });
}

// function child_payment() {
//     $('#qrcode_box').html('<div id="wxpqrcode"></div>')
//     var wxpqrcode = $('#wxpqrcode');
//     $.ajax({
//         url: '/payment/child/weixin',
//         type: "post",
//         datatype: "json",
//         async: true,
//         data: {'order_no': wx_order_no},
//         success: function (result) {
//             if (result.state === 0) {
//                 if (wxpqrcode.length > 0) {
//                     wxpqrcode.qrcode({width: 240, height: 240, text: result.integration.wx_url}); //生成二维码
//                     wx_order_no = result.order_no
//                 } else {
//                     wxpqrcode.html('二维码生成失败');
//                 }
//                 count = 0;
//                 window.setTimeout(verificationOrder, 1000)
//             } else {
//                 wxpqrcode.html('二维码生成失败');
//             }
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             wxpqrcode.html('二维码生成失败');
//         }
//     })
// }
// endregion
