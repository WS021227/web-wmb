let wd_num=0

$(function(){
    $("#ppt_download").on('load',(function(){
        var text = $(this).contents().find("body").text(); //获取到的是json的字符串
        var j = $.parseJSON(text);  //json字符串转换成json对象
        console.log(j,"表单回调")
    }))

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
function video_yz(event){
    let vip = $(event).data("vip")
    let id = $(event).data("id")
    let url = $(event).data("url")
    jy_down_zy1(vip,id,url)
}

// 领取课程
function get_class(event){
    let vip = $(event).data("vip")
    let id = $(event).data("id")
    jy_down_zy2(vip,id)
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
    let vip = $(event).data("vip")
    let name = $(event).data("name")
    let url= $(event).data("url")
    let id = $(event).data("id")
    let fname = $(event).data("fname")
    jy_down_zy(vip,name,fname,url,id)
}

// 权限校验
function jy_down_zy(vip,name,fname,url,id){
    $.ajax('/async/jy_down_zy', {
        datatype: 'text',
        method: "post",
        data: {vip:vip},
        success: function (result) {
            if(result.state != 0) return share_authority_failure(result.v)
            if(url == "") {return layer.open({
                                    type: 1,
                                    shade:0.3,
                                    shadeClose: true,
                                    btn:"领取课件",
                                    title: ['提示'], //不显示标题
                                    content: '<div class="ts-content"><span>免费领取课件后，可观看视频/下载视频PPT</span></div>',
                                    area:['500px',''],
                                    yes:function(index,layero){
                                        get_kc(id)
                                        layer.close(index); //关闭弹出框
                                    }
                                });}
            document.ppt_download.method = 'post'
            document.ppt_download.action = `/async/down_ppt?name=${name}&fname=${fname}`
            document.ppt_download.submit()
        }
    })
}

function jy_down_zy1(vip,id,url){
    $.ajax('/async/jy_down_zy', {
        datatype: 'text',
        method: "post",
        data: {vip:vip},
        success: function (result) {
            console.log(result,url)
           if(result.state != 0) return share_authority_failure(result.v)
           if(url == "") {return layer.open({
            type: 1,
            shade:0.3,
            shadeClose: true,
            btn:"领取课件",
            title: ['提示'], //不显示标题
            content: '<div class="ts-content"><span>免费领取课件后，可观看视频/下载视频PPT</span></div>',
            area:['500px',''],
            yes:function(index,layero){
                get_kc(id)
                layer.close(index); //关闭弹出框
            }
        });}
        }
    })
}

function jy_down_zy2(vip,id){
    $.ajax('/async/jy_down_zy', {
        datatype: 'text',
        method: "post",
        data: {vip:vip},
        success: function (result) {
            if(result.state != 0) return share_authority_failure(result.v)
            get_kc(id)
        }
    })
}

// 领取课程
function get_kc(id){
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

