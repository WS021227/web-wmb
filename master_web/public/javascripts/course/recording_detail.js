let wd_num=0

$(function(){
    $(".recording-detail-bottom .tabbar span").click(function(){
        let id=$(this).parent().data("id")
        $(this).addClass("active").siblings().removeClass("active")
        if($(this).index()==0) return get_js_data()
        get_wd_data(id)
    })

    $(".tw-content").on('click','.pl-more',function(){
        console.log("555")
        let id=$(this).data("id")
        get_wd_data_more(id)
    })
})

// video验证
function video_yz(){
    if(!verify_vip_level(wg.user.vip_level, 'yd', wg.user.experience)) return share_authority_failure('yd')
    layer.open({
        type: 1,
        btn:"确定",
        shade: false,
        title: ['提示'], //不显示标题
        content: '<div class="ts-content"><span>点击立即领取按钮,获取开发课程</span></div>',
        area:['500px','200px']
      });
}

// 领取课程
function get_class(event){
    let id=$(event).data("id")
    if(!verify_vip_level(wg.user.vip_level, 'yd', wg.user.experience)) return share_authority_failure('yd')
    $.loadajax(`/async/course/2023/receive`, {
        datatype: 'text',
        method:'POST',
        data: {id:id},
        success: function (result) {
            console.log(result,"课程领取")
            if(result.state!=0) return layer.msg("领取失败")
            layer.msg("成功领取")
            setTimeout(function(){
                window.location.reload()
            },1000)
        }
    })
}

// 发布评论
function post_pl(event){
    let id=$(event).data("id")
    let pl_text=$("#pl_ipt_box").val()
    console.log(pl_text)
    if(pl_text=="") {
        layer.msg("请输入您的评论")
        $("#pl_ipt_box").focus()
    }else{
        $.loadajax('/async/post_pl', {
            datatype: 'text',
            method:'POST',
            data: {id:id,content:pl_text},
            success: function (result) {
                console.log(result,"555")
                if(result.state==0){
                    layer.msg("提交成功!")
                    $("#pl_ipt_box").val('')
                }
            }
        })
    }
}

// 问答数据
function get_wd_data(id,more){
    $.loadajax('/async/get_kcwd', {
        datatype: 'text',
        data: {id:id},
        success: function (result) {
            if(result.state==0){
                $(".kc-js").css("display","none")
                $(".tw-content .tw-box-list").html($(result.content))
                $("#pl_ipt_box").focus()
            }
        }
    })
}

// 问答数据(加载更多)
function get_wd_data_more(id){
    wd_num+=10
    $.loadajax('/async/get_kcwd_children', {
        datatype: 'text',
        data: {id:id,num:wd_num},
        success: function (result) {
            if(result.length<10) { $(".pl-more").text(`暂无更多`);$(".pl-more").unbind("click"); }
            $(".tw-content #wd_data_lists").append($(result.content))
        }
    })
}

// 课程介绍
function get_js_data(){
    console.log("介绍")
    $(".tw-content .tw-box-list").children().remove()
    $(".kc-js").css("display","block")
}

// 下载ppt
function down_ppt(event){
    let name = $(event).data("id")
    let url='https://static.52wmb.com/wmb_course/2023/courseware/' + name
    console.log(url)
    download(url)
}




