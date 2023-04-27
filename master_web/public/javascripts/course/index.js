let lb_num=0
$(function(){
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
                <div><span>大小：${(item.size/8/1024).toFixed(2)}k</span><font>|</font><span>格式：${item.format}</span></div>
                ${!wg.user.id?`<a href="/login">下载</a>`:
                              !verify_vip_level(wg.user.vip_level, 'yd', wg.user.experience)?`<a href="javascript:void(0);" onclick="share_authority_failure('yd')">下载</a>`:
                              `<a href="/async/download_zy/${item.id}">下载</a>`
                }
                
            </div>
        `)
        $(".course-zy-list").append($box)
    })
}

// 录播课程加载更多
function get_lbkc_list_more(lb_num){
    let end=lb_num+10
    $.loadajax('/async/get_lbkc', {
        datatype: 'text',
        data: {start:lb_num,end:end},
        success: function (result) {
            console.log(result,"more")
        }
    })
}

// 下载资源包
function download_zy(event){
    let id = $(event).data("id")
    $.loadajax('/async/download_zy', {
        datatype: 'text',
        data: {pack_id:id},
        success: function (result) {
            console.log(result,"下载")
            if(result.fun_cb.state==0) {
           
                //'Saveas'表示打开“文件另存为”对话框命令
                var fileSave = new ActiveXObject("MSComDlg.CommonDialog");
                fileSave.ShowSave();
    
        }
        }
    })
}
