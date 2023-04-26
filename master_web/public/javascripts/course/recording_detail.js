let wd_num=5

$(function(){
    $(".recording-detail-bottom .tabbar span").click(function(){
        let id=$(this).parent().data("id")
        $(this).addClass("active").siblings().removeClass("active")
        if($(this).index()==0) return get_js_data(id)
        get_wd_data(id)
    })

    $(".tw-content").on('click','.pl-more',function(){
        console.log("000")
        let id=$(this).data("id")
        get_wd_data_more(id)
    })
})

// 问答数据
function get_wd_data(id,more){
    $.loadajax('/async/get_kcwd', {
        datatype: 'text',
        data: {id:id},
        success: function (result) {
            if(result.state==0){
                $(".tw-content").html($(result.content))
                $("#pl_box").focus()
            }
        }
    })
}

// 问答数据(加载更多)
function get_wd_data_more(id){
    $.loadajax('/async/get_kcwd', {
        datatype: 'text',
        data: {id:id},
        success: function (result) {
            if(result.state==0){
                $(result.content).children("#pl_box").remove()
                $(".tw-content").append($(result.content))
            }
        }
    })
}

// 课程介绍
function get_js_data(id){
    $.loadajax('/async/get_kcjs', {
        datatype: 'text',
        data: {id:id},
        success: function (result) {
            if(result.state==0){
                $(".tw-content").html($(result.content))
            }
        }
    })
}

// 发布评论
function post_pl(id){
    let pl_text=$("#pl_box").val()
    if(pl_text=="") {
        layer.msg("请输入您的评论")
        $("#pl_box").focus()
    }
    else{
        $("#pl_box").val('')
        $.loadajax('/async/post_pl', {
            datatype: 'text',
            method:'POST',
            data: {id:id,content:pl_text},
            success: function (result) {
                if(result.state==0){
                    layer.msg("提交成功!")
                }
            }
        })
    }
}
