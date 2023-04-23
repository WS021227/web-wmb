let curr_lang_json = {}, buy_serve = parseInt($("#live_list").data("buyer"))
$(function () {

    $("li>h3", "#questions").bind("click", function () {
        var li = $(this).parent();
        if (li.hasClass("fold")) {
            li.removeClass("fold");
            $(this).find("b").removeClass("UI-bubble").addClass("UI-ask");
            //li.find(".foldContent").slideDown();
        } else {
            li.addClass("fold");
            $(this).find("b").removeClass("UI-ask").addClass("UI-bubble");
            //li.find(".foldContent").slideUp();
        }
    });

    $(".kecheng-select").on("click", "a", function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        
        $('#launched').find(".be-prepared").eq(index).show().siblings().hide();
        // $("#be_prepared").eq(index).show().siblings().hide();

    })
})

let live_paging = $('#live_paging').paging({
    offset: false, // start size 模式
    per: 9,
    callback: function (page, call) {
        live_list(page, function (){
            $("html,body").animate({scrollTop: 0}, 300);
            call()
        })
    }
})

// 侧拉详情
function check_details(id) {
    $.ajax('/async/yuekt/details', {
        datatype: 'text/json',
        type: 'get',
        data: {
            id: id
        },
        success: function (result) {
            var details = result.data
            if (result.state == 1) {
                var found_live_datail_html = ''
                found_live_datail_html += '<div class="course-top"> 邦阅大课堂畅听卡：<b>99</b>元/6个月<a href="/product?product=12&adds=yue_kt">立即购买</a></div>'
                found_live_datail_html += '<div class="pop">'
                found_live_datail_html += '<div class="small-words"><h1>' + details.title + '</h1><p><font>' + details.class_type + '</font><span>时长：' + details.class_duration + '</span></p></div>'
                if (details.intro) {
                    found_live_datail_html += '<div class="main-1 pop-share"><h2>课程特色:</h2>'
                    $.each(details.intro, function () {
                        found_live_datail_html += '<p>' + this.word + '</p>'
                    })
                    found_live_datail_html += '</div>'
                }
                if (details.class) {
                    found_live_datail_html += '<div class="main-2 pop-share"><h2>课程介绍:</h2>'
                    $.each(details.class, function () {

                        found_live_datail_html += '<p>' + this + '</p>'
                    })
                    found_live_datail_html += '</div>'
                }
                if (details.outline) {
                    found_live_datail_html += '<div class="main-2 pop-share"><h2>课程大纲:</h2>'
                    $.each(details.outline, function () {
                        found_live_datail_html += '<p>' + this.title + '</p>'
                    })
                    found_live_datail_html += '</div>'
                }

                found_live_datail_html += '<div class="main-3 pop-share"><h2>讲师介绍:</h2><div class="pic-words">'
                found_live_datail_html += '<div class="words-ri"><img src="' + details.teachers.list[0].pic + '" class="pic-le"/><h3>讲师：' + details.user_name + '</h3>'
                $.each(details.teachers.list[0].list, function () {
                    found_live_datail_html += '<div class="ri-p2"><p>' + this + '</p></div>'
                })
                found_live_datail_html += '</div></div></div>'
                found_live_datail_html += '<div class="pop-share"><h2>适应人群:</h2>'
                $.each(details.group, function () {
                    found_live_datail_html += '<p>' + this.word + '</p>'
                })

                found_live_datail_html += '</div><div class="pop-share"><h2>用户反馈:</h2><p class="pop-big-imgs"><img src="' + details.example[0] + '" style="width:100%;"/></p></div>'
                found_live_datail_html += '</div>'
                website = new ModelBox({
                    content: found_live_datail_html,
                    //内容
                    isShow: true, //初始状态
                    elemId: 'websiteHtml',
                    load: function () {
                    }
                })
            }
        }
    })
}

function live_list(page, callback) {
    //  页码是下标，所以 page 要-1
    page = page || 0
    $.ajax('/async/yuekt/list', {
        datatype: 'text/json',
        type: 'get',
        data: {page_current: page - 1},
        success: function (result) {
            callback()
            $("#live_list").empty();

            if (result.state == 1) {
                var live_list = ''
                $.each(result.data.playback_list, function () {
                    live_list += '<li><div><img src="' + this.head + '" class="course-list-pic"/>'
                    live_list += '<b class="course-list-name">讲师: ' + this.user_name + '</b>'
                    live_list += '<h3><a href="javascript:void(0);" title="'+ this.title +'">' + this.title.substring(0, 20) + '</a></h3>'
                    live_list += '<p class="course-list-c">' + this.class_type.replace(/,/g, "") + '</p>'
                    live_list += '<p class="course-list-t"><span>时长：' + this.class_duration + '</span><font>|</font><span>' + this.class_students + '人学习</span></p>'
                    live_list += '<p class="course-list-l">'

                    if (buy_serve > -1) {
                        live_list += ' <a href="https://www.52by.com/media/' + this.video_list_id + '" target="_blank">观看视频<font>&gt;</font></a>'
                    } else {
                        live_list += '<a href="javascript:void(0);" onclick="check_details(' + this.id + ')">课程详情<font>&gt;</font></a>'
                    }
                    live_list += '</p></div></li>'

                })
                live_list += '<br class="clear"/>'
                $("#live_list").append(live_list)
                var total = result.data.playback_count
                live_paging.reload({total: total, current: page})

            }

        }
    })
}
