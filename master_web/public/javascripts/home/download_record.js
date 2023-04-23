// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
let curr_lang_json = {
    'download_count': {cn: '条下载记录', en: ' Download records'},
    'download_contact': {cn: '联系方式', en: 'Contact'},
    'download_company_data': {cn: '公司数据', en: 'Company'},
    'download_industry_data': {cn: '行业数据', en: 'Industry'},
    'download_bill_data': {cn: '提关单数据', en: 'B/Ls data'},
    'download_directory': {cn: '公司名录', en: 'Directory'},
    'download_nocontent': {cn: '暂无数据', en: 'No data available'},    
    
    'yangben': {cn: 'yangben', en: 'demo'}
}



var paging_start=0
$(function () {
    $("#download_record .center-tag-select").on("click", "a", function() {
        console.log('点击啦啦啦')
       var type=$(this).data('type'), index = $(this).index();
        download_record_list(type)

        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents("#download_record").find(".center-k-download-box").eq(index).show().siblings().hide();
    })
    download_record_list()

})
/*下载统计列表*/

function download_record_list(type){
    record_page(0, type, function (total, size, $dom){
        $dom.find(".conter-k-content-title span").text(total + ''+unity_lang('download_count')+'')
        if(total > size){
            $dom.find('.paging').paging({
                offset: true,  // start size 模式
                per: size,
                total: total,
                callback: function (start, page_call) {
                    record_page(start, type, page_call)
                }
            })
        }
    })
}

let data_type_des = {
    0:{name: ''+unity_lang('download_contact')+'', download: 1},
    1:{name: ''+unity_lang('download_company_data')+'', download: 1},
    2:{name: ''+unity_lang('download_industry_data')+'', download: 0},
    3:{name: ''+unity_lang('download_bill_data')+'', download: 1},
    4:{name: ''+unity_lang('download_directory')+'', download: 0}
}

/**
 *
 * @param start 分页起始行
 * @param type 类型
 * @param callback 回调
 */
function record_page(start, type, callback) {
    let dom='#record_all', _param={start: start};
    if(type != null) {
        dom = '#record_' + type
        _param.export_type = type
    }
    $.ajax('/user-download/export/records', {
        datatype: 'text/json',
        type: 'get',
        data: _param,
        success: function (result) {

            if (result.state == 0) {
                let _list = result.data.list||[], total=_list.length > 0?_list[0].total_count:0,
                    size = result.size, $dom = $(dom)
                if(total > 0) {
                    var download_list = ''
                    $dom.find('.center-tags-no').addClass('display-none')
                    $.each(result.data.list, function () {
                        let dtype = data_type_des[this.export_data_type]
                        download_list += '<li>\n'
                        download_list += '<span>' + dtype.name + '</span>'
                        download_list += '<span>' + this.file_name + '</span>\n'
                        download_list += '<span>' + this.export_count + '</span>\n'
                        download_list += '<span>' + this.create_time + '</span>\n'
                        download_list += '<span>\n'
                        // if(dtype.download) {
                        //     download_list += '<a class="down" href="javascript:void(0);" onclick="export_records(' + this.id + ','+ this.export_data_type +')"></a>\n'
                        // }
                        download_list += '<a class="del" href="javascript:void(0);" onclick="delete_export(this,' + this.id + ',' + this.export_data_type + ')"></a>\n'
                        download_list += '</span>\n'
                        download_list += '</li>'
                    })
                    $dom.find("ul.body").html(download_list)
                }else{
                    $dom.find('.conter-k-content-title').hide()
                    $dom.find("ul").empty()
                    $dom.find('.center-tags-no').removeClass('display-none')
                }
                if (callback) callback(total, size, $dom)
            }
            
        }
    })
}



/*删除下载记录*/
function delete_export(elem,id,type) {
    $.ajax('/user-download/export/delete_records', {
        datatype: 'text/json',
        type: 'post',
        data: {
            export_id: id,
            export_type: type
        },
        success: function (result) {
            console.log(result, 'result')
            if (result.state == 0) {
                $(elem).parent().parent().remove()
            }
        }
    })
}
/*导出下载*/
function export_records(id, type) {
    $.alert('新版暂不提供下载')
    return false
    $.ajax('/async/user-download/record/export', {
        datatype: 'text/json',
        type: 'get',
        data: {id: id, type: type},
        success: function (result) {
            if (result.state == '1') {
                $.alert(result.message)
            }
            if (result.state == '1000') {
                $.alert('此公司没有数据')

            }
        }
    })
}