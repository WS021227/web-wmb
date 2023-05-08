let lb_num=0
let sum=$("#course_zy_num").data("sum")
$(function(){
    $("#zy_download").on('load',(function(){
        var text = $(this).contents().find("body").text(); //获取到的是json的字符串
        var j = $.parseJSON(text);  //json字符串转换成json对象
        console.log(j,"表单回调")
    }))
    // 推荐资源、最新资源
    $(".course-zy-h2-left span").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        let idx=$(this).index(),id=1
        idx==0?id=1:id=0
        $.loadajax('/async/get_tj_or_new', {
            datatype: 'text',
            data: {id:id},
            success: function (result) {
                if(result.state==0){
                    put_tj_or_new(result.data)
                }
            }
        })
    })
    // 资源下载侧拉弹窗
    $("#course_zy_num").click(function(){
        wpull.dopen(function (side) {
            $.ajax('/async/get_tj_or_new', {
                datatype: 'text/html',
                type: 'get',
                success: function (result) {
                    side.changeContent(result.content)
                }
            })
        })
    })
    // 录播课程加载更多
    $("#lbkc_more").click(function(){
        console.log("1212212")
        lb_num+=10
        get_lbkc_list_more(lb_num)
    })
})

function put_tj_or_new(list,more){
    if(!more){
        $(".course-zy-list .zy-box").remove()
    }
    list.list.forEach(function(item,index){
        let $box=$(`
            <div class="zy-box">
                <img src="${item.icon}" alt="">
                <span>${item.name}</span>
                <div><span>大小：${(item.size/1024).toFixed(2)}M</span><font>|</font><span>格式：${item.format}</span></div>
                ${!wg.user.id?`<a href="/login">下载</a>`:
                              `<a href="javascript:void(0);" onclick="download_zy(this)" data-id="${ item.id }" data-vip="${ item.download_level }">下载</a>`
                }
                
            </div>
        `)
        $(".course-zy-list").append($box)
    })
}

// 录播课程加载更多
function get_lbkc_list_more(lb_num){
    lb_num+=10
    $.loadajax('/async/get_lbkc', {
        datatype: 'text',
        data: {start:lb_num},
        success: function (result) {
            console.log(result,result.lb_list.length,"more")
            if(result.lb_list.length<10) { $("#lbkc_more").text(`暂无更多`);$("#lbkc_more").unbind("click"); }
            result.lb_list.forEach(function(item,index){
                let $box=$(`
                            <div class="lb-box">
                                <a href="/recording_detail/${item.id}">
                                    <img src="https://static.52wmb.com/wmb_course/2023/images/${item.cover}" alt="">
                                </a>
                            <div class="content">
                                    <a href="/recording_detail/${item.id}">
                                        <span>${item.name}</span>
                                    </a>
                                    <span>${item.lecturer_des}</span>
                                    <div>时间：<span>${item.live_dur}</span><font>|</font><span>${item.reveive_users}<span>人已学习</div>
                                    <a class="gkkc" href="/recording_detail/${item.id}">观看课程</a>
                                </div>
                                <div class="right">
                                    <img src="https://static.52wmb.com/wmb_course/2023/images/${item.lecturer_avatar}" alt="">
                                    <span>讲师：${item.lecturer}</span>
                                    <span>${item.lecturer_des}</span>
                                </div>
                            </div>
                        `)
                $(".course-lb-list").append($box)
            })
        }
    })
}

// 下载资源包
function download_zy(event){
    let vip_jy = {
        "":'',
        'v':'v',
        'bd':'bd',
        'yd':'yd'
    }
    let id = $(event).data("id")
    let vip = $(event).data("vip")
    if(vip_jy[wg.user.vip_level]<vip_jy[vip]) return share_authority_failure(vip_jy[vip])
    $(event).text('下载中...')

    document.zy_download.method = 'post'
    document.zy_download.action = `/async/download_zy/${id}`
    document.zy_download.submit()
    // $.ajax('/async/download_zy', {
    //     data: {pack_id:id},
    //     responseType: 'blob',
    //     success: function (result) {
    //         if(JSON.parse(result).state!=0) return layer.msg("下载失败"),$(event).text('下载')
    //         //将响应回来的数据下载为文件，固定代码
    //         //将响应数据处理为Blob类型
    //         var blob = new Blob([result.data]);
    //         // 创建一个URL对象
    //         var url = window.URL.createObjectURL(blob);
    //         // 创建一个a标签
    //         var a = document.createElement("a");
    //         a.href = url;
    //         a.download = JSON.parse(result).name;// 这里指定下载文件的文件名
    //         a.click();
    //         // 释放之前创建的URL对象
    //         window.URL.revokeObjectURL(url);
    //         $(event).text('下载')
    //     }
    // })
}

