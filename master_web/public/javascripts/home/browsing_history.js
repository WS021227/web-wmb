// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'history_count': {cn: '条浏览记录', en: ' view records'},
    'history_unlocked': {cn: '已解锁', en: 'Unlocked'},
    'history_locked': {cn: '未解锁', en: 'Locked'},
    'history_edit_sub_account': {cn: '修改子账户', en: 'Modify the sub-accounts'},
    
    'yangben': {cn: 'yangben', en: 'demo'}
}

let company_detail_route = ['buyer', 'supplier']
var year_start = 2017, year_end = new Date().getFullYear(), lock_status;



var  paging_start=0
$(function () {
    $("#browsing_history .center-tag-select").on("click", "a", function() {
        var index = $(this).index()
        lock_status=$(this).data('status')
        $('.year-sort').wdropdown().change_selected('value', year_end)
        browsing_history_list(lock_status)
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents("#browsing_history").find(".center-k-history-box").eq(index).show().siblings().hide();
    })
    $('.year-sort').wdropdown({
        selected: function (e) {
            browsing_history_list(lock_status, Number(e.value))
        },
        data: function (that) {
            that.render_item({
                value: year_end,
                text: year_end + '年',
                selected: true
            })
            for(var i=year_end - 1;i>=year_start;i--){
                that.render_item({value: i, text: i+ '年'})
            }

        }
    })
    browsing_history_list()
})
function browsing_history_list(status, year) {
    year = year || year_end
    history_paging(0, status, year, function (total, size, $md) {

        $md.removeClass('display-none').find(".conter-k-content-title span:first").text(total + ''+unity_lang('history_count')+'')
        if (total > size) {
            $md.find(".paging").paging({
                offset: true,  // start size 模式
                total: total,
                per: size,
                callback: function (start, page_call) {
                    history_paging(start, status, year, page_call)
                }
            })
        }
    })
}
/*分页*/
function history_paging(start, status, year, callback) {
    var params = {start: start}, dom = '#history_all'
    if (status != null) {
        dom = '#history_' + status
        params.lock_status = status
    }
    params.year = year
    $.loadajax('/async/user-browsing-history/records', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
            let $dom = $(dom)
            $dom.find('.center-tags-no').addClass('display-none')
            if (result.state == 0) {
                let _list = result.data.list, total = _list.length > 0 ? _list[0].total_count : 0,
                    size = result.size
                if (total > 0) {
                    var history_list = ''
                    $.each(result.data.list, function () {
                        history_list += ' <li>\n'
                        history_list += '<span><a target="_blank" href="/'+ company_detail_route[this.type]  +'/'+ this.company_id +'">' + this.company_name + '</a></span>\n'
                        if (this.lock == '1') {
                            history_list += '<span>'+unity_lang('history_unlocked')+'</span>\n'
                        } else if (this.lock == '0') {
                            history_list += '<span>'+unity_lang('history_locked')+'</span>\n'
                        }
                        history_list += '<span>' + this.view_count + '</span>\n'
                        history_list += '<span>' + this.view_time + '</span>\n'
                        history_list += '<span>\n'
                        history_list += '<i class="del" data-company_id=' + this.company_id + ' onclick="delete_browsing_history(this)" ></i>\n'
                        history_list += '</span>\n'
                        history_list += '</li>'
                    })
                    $dom.find('.content-company-history').removeClass('display-none')
                    $dom.find('.conter-k-content-title span').removeClass('display-none')
                    $dom.find("ul.body").html(history_list)
                    callback(total, size, $dom)
                    return false
                }
            }
            $dom.find('.content-company-history').addClass('display-none')
            $dom.find('.conter-k-content-title span').addClass('display-none')
            $dom.find('.center-tags-no').removeClass('display-none')
        }
    })
}
/*删除浏览记录*/
function delete_browsing_history(elem){
        var company_id=$(elem).data("company_id")
        $.ajax('/async/user-browsing-history/delete_records', {
            datatype: 'text/json',
            type: 'post',
            data:{
                company_id:company_id,
            },
            success: function (result) {
                if(result.state==0){
                    $(elem).parent().parent().remove()
                }
                console.log(result,''+unity_lang('history_edit_sub_account')+'')
            }})

}