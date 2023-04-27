let wd_num=5

$(function(){
    $(".recording-detail-bottom .tabbar span").click(function(){
        let id=$(this).parent().data("id")
        $(this).addClass("active").siblings().removeClass("active")
        if($(this).index()==0) return get_js_data(id)
        get_wd_data(id)
    })

    $(".tw-content").on('click','.pl-more',function(){
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
                $("#pl_ipt_box").focus()
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

