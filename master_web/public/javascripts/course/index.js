let lb_num=0
let sum=$("#course_zy_num").data("sum")
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
                <div><span>大小：${(item.size/8/1024).toFixed(2)}k</span><font>|</font><span>格式：${item.format}</span></div>
                ${!wg.user.id?`<a href="/login">下载</a>`:
                              !verify_vip_level(wg.user.vip_level, 'yd', wg.user.experience)?`<a href="javascript:void(0);" onclick="share_authority_failure('yd')">下载</a>`:
                              `<a href="javascript:void(0);" onclick="download_zy(this)" data-id="${item.id}">下载</a>`
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
    let id = $(event).data("id")
    $.loadajax('/async/download_zy', {
        datatype: 'text',
        data: {pack_id:id},
        success: function (result) {
            console.log(result,"下载")
            // 1 下载失败
            if(result.fun_cb.state!=1) {
                let box=`
                    <span>文件保存地址：${result.fun_cb.url}</span>
                    <input type="file" id="fileipt"/>
                `
                layer.open({
                    title:`${result.fun_cb.title}`,
                    skin:'down-over',
                    area: ['600px', 'auto'], // 配置长高
                    shadeClose: true, //点击遮罩关闭
                    maxmin: false,
                    closeBtn: 1,
                    content:box,
                    icon:1,
                    success:function(){
                        open_file()
                    }
                })    
            }else{
                layer.msg("下载失败")
            }
        }
    })
}

function open_file(){
    var  inputObj=document.createElement( 'input' )
    inputObj.setAttribute( 'id' , '_ef' );
    inputObj.setAttribute( 'type' , 'file' );
    inputObj.setAttribute( "style" , 'visibility:hidden' );
    document.body.appendChild(inputObj);
    // inputObj.click();
    inputObj.value ;
}
