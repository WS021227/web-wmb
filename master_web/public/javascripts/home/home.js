// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'company_module_clear': {cn: '取消', en: 'clear'},
    'company_module_follow': {cn: '收藏', en: 'follow'},
    'company_module_product': {cn: '产品描述', en: 'Prodcut'},
    'company_module_reasons': {cn: '推荐理由', en: 'Recommended  Reason'},
    'company_module_reasons_tips': {cn: '公司最近两年采购[@产品]的交易共计[@总量]笔，最近相关交易日期在[@日期];采供[@产品]的交易总数占该公司近两年来交易总量的[@占比]', en: 'The company has a total of [@总量] transactions related to [@产品] in the last two years, the last transaction is on [@日期]; the transactions related to [@产品] represent [@占比] of the company total transactions of the last two years.'},
    'company_module_transactions': {cn: '笔交易', en: '  transactions '},
    'company_module_value': {cn: '活跃值[@活跃值]分，数据已更新至[@日期]', en: 'Active Value [@活跃值] points, data updated to [@日期]'},
    'company_module_collections': {cn: '多人收藏', en: 'Multiple Collections '},
    'company_module_contact': {cn: '包含联系方式', en: 'Including contact'},
    'company_module_precise': {cn: '精准匹配', en: 'Accurate Match'},   

    'bangline_connect': {cn: '帮您连接采供商真人', en: 'Connect with real traders'},   
    'bangline_connect_tips': {cn: '通过邦Line找到您的采购商、供应商真人,并通过“对话”功能和他们取得联系；您将被推荐给平台全球100万+用户，展示供求信息...', en: 'You will be recommended to the platform 1 million+ users worldwide to showcase supply and demand information...'},   
    'bangline_connect_button': {cn: '免费开通邦Line→', en: 'Free opening →'},  
    'bangline_connect_link': {cn: 'https://line.52wmb.com/', en: 'https://line.52wmb.com/en'},
    'bangline_displays': {cn: '推广展示', en: 'Promotion displays'}, 
    'bangline_homepage_views': {cn: '主页访客', en: 'Homepage views'}, 
    'bangline_conversation': {cn: '好友会话', en: 'Buddy conversation'}, 
    'bangline_Notification': {cn: '系统通知', en: 'System Notification'}, 
    'bangline_noopen_title': {cn: '邀您开通邦Line主页', en: 'Activate Business Line'}, 
    'bangline_noopen_members': {cn: '人已开通', en: '  activated'}, 
    'bangline_noopen_posts': {cn: '供求帖子', en: ' posts'},
    'bangline_noopen_des': {cn: '个人专属贸易主页，在邦Line平台、行业圈发现匹配的采供商真人，并与他们建立联系。', en: 'Personal exclusive homepage, find out the matching purchasers or suppliers and establish contact with them'},
    'bangline_noopen_button': {cn: '免费开通邦Line主页', en: 'Free activate Business Line'},
    'bangline_noopen_link': {cn: '前往邦Line官网看一看→', en: 'Access Business Line→'},

    'bangline_today': {cn: '今日', en: 'Today'},
    'bangline_website': {cn: '进入官网', en: 'Website'},
    'bangline_homepage': {cn: '个人主页', en: 'Homepage'},
    'bangline_management': {cn: '管理后台', en: 'Management'},


    'adds_enter': {cn: '进入', en: 'enter'},
    'adds_detail': {cn: '详情', en: 'detail'},
    'adds_day': {cn: '个/天', en: '/day'},

    'yangben': {cn: 'yangben', en: 'demo'}
}
var recent_keys={}
var rec_default_search_param={
    key: '*',
    hs: '*',
    sort: 'last_trade_date',
    start: 0,
    size:8,
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
    off_line_counties: '*',
    filter_date_end:'*',
    filter_date_start:'*',
    is_add_log:false,
},
    rec_search_param = {key: '*', company_type: 0}
let adds_urls = {
    1: '/social-media',
    3: '/benchmark',
    4:'/amazon',
    7:'/yuekt'
}
let recent_key_data = {}

$(function () {
    // 兑换模块是否显示
    redemption_toast()

    $("#daketang_close").click(function(){
        $("#daketang").css("display","none")
        $.ajax('/async/del_redemption_toast', {
            datatype: 'text/json',
            type: 'get',
            success: function (result) {
            }
        })
    })

    // 注册后tips
    register_tips()
    bang_line_spread()
    /*权限明细*/
    $.ajax('/permissions/details', {
        datatype: 'text/json',
        type: 'get',
        data: {},
        success: function (result) {
            if (result.state == 0) {
                var permissions_datails = result.data;
                let details = ''
                details += ' <td><i class="' + (permissions_datails.search_filter == 1 ? 'ture' : 'false') + '"></i></td>'
                if(typeof permissions_datails.company_report == 'object'){
                    details += ' <td>'+ permissions_datails.company_report.all_count +''+unity_lang('adds_day')+'</td>'
                }else{
                    details += ' <td>+∞</td>'

                }
                // if($.isNumeric( permissions_datails.company_report )){
                //     details += ' <td><i class="' + (permissions_datails.company_report == 1 ? 'ture' : 'false') + '"></i></td>'
                //  }else{
                //     let export_number =permissions_datails.company_report.all_count-permissions_datails.company_report.remain_count
                //     details += ' <td><i class="' + (export_number<3 ? 'ture' : 'false') + '"></i></td>'
                //  }
                details += ' <td><i class="' + (permissions_datails.contact == 1 ? 'ture' : 'false') + '"></i></td>'
                details += ' <td><i class="' + (permissions_datails.trade_report == 1 ? 'ture' : 'false') + '"></i></td>'
                details += ' <td><i class="' + (permissions_datails.tag == 1 ? 'ture' : 'false') + '"></i></td>'
                details += ' <td><i class="' + (permissions_datails.data_export == 1 ? 'ture' : 'false') + '"></i></td>'
                details += ' <td><i class="' + (permissions_datails.child_account == 1 ? 'ture' : 'false') + '"></i></td>'
                $('.center-h-tabel.permission').removeClass('display-none').find('table tbody tr').append(details)
            }

        }
    })
    let report_urls = ['/user/datacenter/viewlog', '/user/datacenter/potential']
    /*公司报告统计*/
    $.ajax('/user_home/company/report/stats', {
        datatype: 'text/json',
        type: 'get',
        data: {},
        success: function (result) {
            if (result.state == 0) {
                $.each(result.data.list, function (index, item) {
                    $('#report_stats ul').append(' <li><a href="' + (item.count > 0 ? report_urls[index] : 'javascript:void(0)') + '"><b>' + item.count + '</b><span>' + item.name + '</span></a></li>')
                })
            }
        }
    })
    /*标签统计*/
    $.ajax('/user_home/tags/stats', {
        datatype: 'text/json',
        type: 'get',
        data: {},
        success: function (result) {
            if (result.state == 0) {
                $.each(result.data.list, function () {
                    $('#tags_stats ul').append('<li><a href="' + (this.count > 0 ? '/user/datacenter/label?pos='+ this.type : 'javascript:void(0)') + '"><b>' + this.count + '</b><span>' + this.name + '</span></a></li>')
                })
            }
        }
    })
    /*增值服务列表*/
    $.ajax('/user_home/add-service/list', {
        datatype: 'text/json',
        type: 'get',
        data: {},
        success: function (result) {
            if (result.state == 0) {
                $.each(result.data.list, function () {
                    var add_service_list = ''
                    add_service_list += '<li>'
                    add_service_list += '<span><img src="' + result.static + 'images/home_center/home_mall_logo_' + this.product + '.png"></span>'
                    add_service_list += '<span>' + this.name + '</span>'
                    add_service_list += '<span>' + this.descriptions + '</span>'
                    add_service_list += '<span><a href="'+ adds_urls[this.product] +'" target="_blank"  class="center-mall-ture">'+ unity_lang('adds_detail') +'<font>&gt;</font></a></span>'
                    add_service_list += '</li>'
                    $('#added_list').append(add_service_list).parents('.center-tab-mall').removeClass('display-none')
                })
            }

        }
    })
    /*平台公告*/
    // announcement()
    $('#company_type').wdropdown({
        selected: function (e) {
            rec_search_param.company_type = Number(e.value)
            build_search_recent_dw()
        }
    })

    $('#search_keys').wdropdown({
        selected: function (e) {
            rec_search_param.key = e.value
            company_search_list()
        }
    })
    /*最近搜索记录*/

    company_search_log_recent(0, function (){
        rec_search_param.company_type = 0
        build_search_recent_dw()
    })
    company_search_log_recent(1)
    let $experience = $('[data-experience-ts]')
    if($experience.length>0){
        let totalSeconds = parseInt($experience.data('experience-ts'))
        experience_djs($experience, totalSeconds)
    }
    // 专属客服
    $.ajax('/async/user_home/employee', {
        datatype: 'text/json',
        success: function (result) {
            let data = result.data
            if(data) {
                let html = '<img src="' + data.photo + '" class="kf-tx"/>\n' +
                    '<h2 class="user-kefu-1">' + data.name + '</h2>\n'
                if (_lang == 'en') {
                    html += '<p class="user-kefu-2"><b>Phone: ' + data.phone + '</b>'
                    if(data.is_dedicated_cs == 2) {
                        html += '<p class="user-kefu-2" style="padding:0 20px;">Please save my WhatsApp number for a convenient consult.</p><p class="user-kefu-3">Phone: ' + data.phone + '</p>\n'
                        html += '<a href="https://api.whatsapp.com/send?phone=+8616621075894&text=Hello">\n' +
                            '    <img src="https://static.52wmb.com/wmb_new/images/whatsapp_ewm.jpg" class="kf-ewm">\n' +
                            '</a>'
                    }
                } else {
                    html += '<p class="user-kefu-2">我是您专属客服，遇到问题请咨询我！</p><p class="user-kefu-3">手机: ' + data.phone + '</p>'

                    if(data.is_dedicated_cs == 1) {
                        html += '<p><a href="http://wpa.qq.com/msgrd?v=3&uin=' + data.qq + '&site=qq&menu=yes" target="_blank">通过QQ在线咨询</a></p> \n' +

                            '<img src="' + data.wechat_qr_code + '" class="kf-ewm" style="padding:4px;"/><font>添加微信好友</font>'
                    }
                }
                $('#emp_cs').html(html).parents('.center-emp-guess').removeClass('display-none')
            }
        }
    })
    line_stats()
})

 // 兑换码模块
 function redemption_toast(){
    let _user=wg.user || null
    $.ajax('/async/get_redemption_code', {
        datatype: 'text/json',
        type: 'get',
        data:_user,
        success: function (result) {
            console.log(result,"是否显示兑换模块")
            if(result.state==0){
                $("#daketang").css("display","block")
                $("#big_class_redemption_code").text(`${result.code}`)
                $("#end_time").text(`截至兑换时间：${result.end_time}`)
            }
        }
    })
}

function line_stats() {
    var $line = $('#line_data')
    if($line.length <=0) return;
    if(wg.user.bang_line){
        $.ajax('/', {
           success: function (result){
               $line.html('\n' +
                   '        <div class="center-line-k center-line-share">\n' +
                   '            <div class="center-line-banner" style="background:url(\'https://static.52wmb.com/bangline/upload/images/cover_1640051920.png\') no-repeat;background-size:cover;height:100px;">\n' +
                   '                <a href="https://line.52wmb.com/line/36408" target="_blank">\n' +
                   '                    <img src="https://static.52wmb.com/bangline/upload/images/avatar_1663900034.png"/>\n' +
                   '                </a>   \n' +
                   '                <span>邦LINE</span> \n' +
                   '            </div>\n' +
                   '            <div class="center-h-tabel center-tab-line" id="bang_line_data"></div>\n' +
                   '            <div class="center-line-enter">\n' +
                   '                <a href="https://line.52wmb.com/line/36408" target="_blank">个人主页</a>                \n' +
                   '                <a href="/user/line/index">管理后台</a>\n' +
                   '                <a href="https://line.52wmb.com">进入官网</a>\n' +
                   '            </div>\n' +
                   '        </div>')
           }
        })
    }
}
function experience_djs($experience, totalSeconds) {
    window.setTimeout(function () {
        totalSeconds--;
        if (totalSeconds <= 0) {
            $('#sjj-home-top').remove();
            return
        }
        var days = Math.floor(totalSeconds / (60 * 60 * 24));
        //取模（余数）
        var modulo = totalSeconds % (60 * 60 * 24);
        //小时数
        var hours = Math.floor(modulo / (60 * 60));
        modulo = modulo % (60 * 60);
        //分钟
        var minutes = Math.floor(modulo / 60);
        //秒
        var seconds = modulo % 60;
        //输出到页面
        $experience.html(unity_lang('tiyan_left_time') + '' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's')
        experience_djs($experience, totalSeconds)
    }, 1000)
}
function bang_line_spread(){
   
    $.ajax('/user_home/recommend/master/mine', {
        datatype: 'json',
        type: 'get',
        data: {line_product_size:5,master_product_size:10,is_vip:1,return_dict:true},
        success: function (result) {
          
            if (result.state == 0) {
                var bang_line_data=''
                var stats_data=result.data.stats_data
                // 已开通邦line
                if(result.data.line_data){
                    bang_line_data += '<div class="center-line-k center-line-share">\n' +
                        ' <div class="center-line-banner" style="background:url(https://static.52wmb.com/bangline/upload/images/'+ result.data.line_data.cover +') no-repeat;background-size:cover;height:100px;">\n' +
                        '     <a href="'+ line_route +'/line/'+ result.data.line_data.user_id +'" target="_blank">\n' +
                        '         <img src="https://static.52wmb.com/bangline/upload/images/'+ result.data.line_data.avatar +'"/>\n' +
                        '     </a>\n' +
                        '     <span>邦LINE</span>\n' +
                        ' </div>\n'+
                        ' <div class="center-h-tabel center-tab-line">'

                    bang_line_data+='<ul><li><i></i><span>'+unity_lang('bangline_displays')+'</span> <b>'+stats_data.promote+'</b><font>'+unity_lang('bangline_today')+' '+stats_data.today_promote+'</font></li>'
                    bang_line_data+='<li><a href="/user/line/related?tab=viewmy"><i></i><span>'+unity_lang('bangline_homepage_views')+'</span><b>'+stats_data.view+'</b><font>'+unity_lang('bangline_today')+' '+stats_data.today_view+'</font></a></li>'
                    bang_line_data+='<li><a href="/user/line/letter"><i></i><span>'+unity_lang('bangline_conversation')+'</span><b>'+stats_data.letter+'</b><font>'+unity_lang('bangline_today')+''+stats_data.today_letter+'</font></a></li>'
                    bang_line_data+='</li><br class="clear"/></ul></div>\n' +
                        ' <div class="center-line-enter">\n' +
                        '     <a href="'+ line_route +'/line/'+ result.data.line_data.user_id +'" target="_blank">'+unity_lang('bangline_homepage')+'</a>\n' +
                        '     <a href="/user/line/index">'+unity_lang('bangline_management')+'</a>\n' +
                        '     <a href="'+ line_route +'" target="_blank">'+unity_lang('bangline_website')+'</a>\n' +
                        ' </div>\n' +
                        '        </div>'
                }else{
                    bang_line_data += '\n' +
                        '        <div class="center-h-tabel center-tab-line center-line-share">\n' +
                        '           <div class="bang-line-des">\n' +
                        '              <div class="bang-line-banner"><img src="https://static.52wmb.com/wmb_line_new/images/ling_banner_ico.png"/></div>\n' +
                        '              <div class="bang-line-noopen"><h2>'+unity_lang('bangline_noopen_title')+'</h2>\n' +
                        '              <p class="bang-line-number"><span><b>'+ result.data.user_count +'</b>'+unity_lang('bangline_noopen_members')+'</span><font>|</font><span><b>'+ result.data.topic_count +'</b>'+unity_lang('bangline_noopen_posts')+'</span></p>\n' +
                        '              <p>'+unity_lang('bangline_noopen_des')+'</p>\n' +
                        '              <a class="bang-line-sumbit" href="/user/line/edit">'+unity_lang('bangline_noopen_button')+'</a>\n' +
                        '              <a class="bang-line-link" href="'+ line_route +'" target="_blank">'+unity_lang('bangline_noopen_link')+'</a>\n' +
                        '           </div></div>\n' +
                        '        </div>'
                }
                $('#bang_line_data').append(bang_line_data)
                var bang_line_list=''
                $.each(result.data.list, function () {
                  
                    if(wg.lang == 'cn'){
                        bang_line_list+=' <li><a href="https://line.52wmb.com/line/'+this.user_id+'" target="_blank">' 
                        bang_line_list+='<img src="'+this.avatar+'"/>'
                        bang_line_list+=' <h3>'+this.name+'</h3>'
                    bang_line_list+='<span style="color:#111;">'+this.country_cn+''+this.company_type_name_cn+'<font>|</font>'+this.position+'</span>'
                   // bang_line_list+='<span>'+this.company_name+'</span>'
                    bang_line_list+='<span>'+unity_lang('gsupply_demand_data')[this.company_type]+'<font></font>'+this.supply_demand+'</span>'
                    }else{
                        bang_line_list+=' <li><a href="https://line.52wmb.com/en/line/'+this.user_id+'" target="_blank">' 
                        bang_line_list+='<img src="'+this.avatar+'"/>'
                        bang_line_list+=' <h3>'+this.name+'</h3>'
                        bang_line_list+='<span style="color:#111;">'+this.country_en+' '+this.company_type_name_en+'<font>|</font>'+this.position+'</span>'
                       // bang_line_list+='<span>'+this.company_name+'</span>'
                        bang_line_list+='<span>'+unity_lang('gsupply_demand_data')[this.company_type]+' '+this.supply_demand+'</span>'
                        }
                   
                    bang_line_list+='</a></li>'
                    
                })
                $('#bang_line_list').append(bang_line_list)
                right_move_box()
            }
        }, error(e) {
        }
    }) 
}
function register_tips() {
    let $tips = $('.new-register-tips')
    if ($tips.length <= 0) return false
    let _reg_tips = getCookies('_REG_TIPS')
    if (_reg_tips) return false
    $tips.removeClass('display-none')
    $tips.find('.close').click(function () {
        $.wSetCookie('_REG_TIPS', '1', 86400, function () {
            $tips.remove()
        })
    })
}


function announcement(){

    $.ajax('/user_home/tutorial/list', {
        datatype: 'text/json',
        type: 'get',
        data: {start: 0,category_entrance: 0},
        success: function (result) {
            if (result.state == 0) {
                
                $.each(result.data.list, function () {
                    var tutorial_list = ''
                    tutorial_list += '<a href="#">' + this.title + '<font>' + this.update_time + '</font></a>'
                    $('#tutorial_list').append(tutorial_list)
                })
            }
            $('#tutorial_list').append('  <br class="clear"/>')

        }
    })
}

/**
 * 最近搜索记录
 * @param type
 * @param fn
 */
function company_search_log_recent(type, fn) {
    $.ajax('/user_home/search-log/recent/keys', {
        datatype: 'text/json',
        type: 'get',
        data: {company_type: type},
        success: function (result) {
            if (result.state == 0) {
                recent_key_data[type] = result.data.list
                if(fn) fn()
            }
        }
    })
}

function build_search_recent_dw() {
    let _list = recent_key_data[rec_search_param.company_type] || [],
        $dw = $('#search_keys').wdropdown()
    $dw.empty_item()
    $.each(_list, function (_index, item) {
        $dw.render_item({'value': item.keywords, 'text': this.keywords, selected: _index == 0})
    })
    rec_search_param.key = _list.length > 0 ? _list[0]['keywords'] : '*'
    company_search_list()
}
/*公司搜索*/
function company_search_list(){
    if(!rec_search_param.key || rec_search_param.key == '*') return false
    let _params = $.extend({}, rec_default_search_param, rec_search_param, true)
    _params.sort = 'last_trade_date'
    
    $.ajax('/user_home/company/search/list', {
        datatype: 'text/json',
        type: 'get',
        data: _params,
        success: function(result) {
         
            if(result.state==0) {
                $('.center-tab-company').removeClass('display-none')
                    .find('#search_list li').remove()
                $.each(result.data.list, function () {
                    var company_list=''
                    company_list+='<li>'
                    company_list+=' <h3><a href="/'+ ['buyer','supplier'][this.type] +'/'+ this.id +'" title="'+this.name+'" target="_blank">'+this.name+'</a></h3>'
                    if(this.is_follow) {
                        company_list += '<span class="list-company-like " data-follow="1" data-id="'+ this.id +'" onclick="likeTap(this)"><i class="like active"></i><font>'+unity_lang('company_module_clear')+'</font></span>'
                    }else{
                        company_list += '<span class="list-company-like" data-follow="0" data-id="'+ this.id +'" onclick="likeTap(this)"><i class="like"></i><font>'+unity_lang('company_module_follow')+'</font></span>'
                    }
                    company_list+='<p class="seach-list-p1">'+this.country+ unity_lang('share_company_' + this.type) + '<font>|</font>'+this.bill_count+''+unity_lang('company_module_transactions')+'</p>'
                    
                    company_list+='<p class="seach-list-p2"><i class="comany-share-star star-'+ this.star +'"></i><span>'+replaceKey(unity_lang('company_module_value'), [ '[@活跃值]','[@日期]', ], [  this.rating,this.last_trade_date])+'</span></p>'
                    
                    let has_product = Object.keys(this.product|| {}).length > 0
                    if(has_product){
                            company_list += '<p class="seach-list-p3 ">'+unity_lang('company_module_reasons')+':'+ replaceKey(unity_lang('company_module_reasons_tips'), [ '[@产品]','[@总量]','[@日期]','[@产品]','[@占比]' ], [this.product.value,this.product.count,this.product.last_trade_date,this.product.value,this.product.prop])+'</p>'
                           
                    }else {
                        company_list += '<p class="seach-list-p3 shrink-module" data-length="210">'+unity_lang('company_module_product')+':<span class="shrink-txt"> '+ this.descript +'</span></p>'
                    }
                    if(this.weight>1000||this.have_follow=='true'||this.product){
                    company_list+='<p class="seach-list-p5">'
                    if(this.weight>1000){
                        company_list+='<span class="contact seach-list-span">'+unity_lang('company_module_contact')+'</span>'
                    }
                   if(this.have_follow=='true'){
                       company_list+='<span class="collect seach-list-span">'+unity_lang('company_module_collections')+'</span>'
                   }
                   if(this.product){
                       company_list+='<span class="yellow seach-list-span">'+unity_lang('company_module_precise')+'</span>'
                   }
                    company_list+='</p>'
                }
                    company_list+='</li>'
                  $('.center-tab-company #search_list').append(company_list)
               
                })
                build_shrink_open()
            }
           
            let company_type_route = ['buy-', 'sup-'][_params.company_type]
           $('#more_company a').attr('href', '/' + company_type_route + _params.key + '?search_type=' + 2)
        }
    })
}

/**
 * 取关和关注
 * @param elem
 */
function likeTap(elem) {
    // 验证是否登录
    if (verify_sign({login: true, only_return: true}, null)) {

        var is_follow = $(elem).data("follow") == '1', company_id = $(elem).data('id')
        if (!is_follow) {
            wpull.dopen(function (side) {
                $.ajax('/async/common/company/follow/tags', {
                    datatype: 'text/html',
                    type: 'get',
                    success: function (result) {
                        side.changeContent(result)
                        $('#follow_tags_form').append('<input type="hidden" name="company_id" value="'+ company_id +'">')
                        $('#follow_tags_form').append('<input type="hidden" id="tags_scene" value="2">')
                    }
                })
            })
        } else {
            $.ajax('/async/common/company/unfollow', {
                datatype: 'text/json',
                type: 'post',
                data: {company_id: company_id},
                success: function (result) {
                    if (result.state == 0) {
                        $(elem).data('follow', '0').find('.like').removeClass('active').siblings('font').html(''+unity_lang('company_module_follow')+'')
                    }
                    // 弹窗取关失败
                }
            })
        }
    }
}
/*筛选公司类型*/
$('#company_type ul li').click(function (){
   var company_type=$(this).val()
    company_search_list('1',company_type)
})
/*固定右边邦line*/
var offset_top='',line_guess=''
function right_move_box(){
    line_guess=$('.center-line-share');
     offset_top = $('.center-home-right').offset().top+$('.center-home-right').height();
}

$(window).on('scroll',function() {
    var top = $(window).scrollTop();
    if (top > offset_top) {
        line_guess.addClass("load");
    }
    if (top < offset_top) {
        line_guess.removeClass("load");
    }
})

