let img_src=$(".yuekt-container").data("img") || $(".store-container").data("img")
console.log(img_src,"图片路径")

// 初始向下
let up_or_down = 0
// 问题答案
let aswter_text = ['随心听服务，是录播视频课程，除了每月2次免费直播课程 的回放权限还有更多名师课程、系列课程等内容可以反复学习，无限次查阅。', '1.邦阅网官网-大课堂-我的 2.关注公众号（@外贸这点事）点击底部菜单栏。', '根据每个课程专题的内容，直播课回放60分钟左右，系列 课程每个小节20分钟左右。', '买“随心听服务后”，可以添加小邦（微信ID：bangyue 52）拉您进入专属的用户微信群，与其他学员一起学习。 社群内不定期会有讲师答疑以及会员红包福利等活动。', '数据使用场景很多，包括客户开发、市场分析、同行&邦阅大课堂随心听服务为虚拟内容服务，一旦购买无法退 款，请您谅解。']

var mySwiper = new Swiper('#swiper', {
    observer: true,
    observeParents: true,
    onSlideChangeEnd: function (swiper) {
        get_swiper_data(swiper.activeIndex)
    },
})

// 大课堂swiper切换
function get_swiper_data(num) {
    console.log(num)
    axios.get(`/async/yuekt/list?page_current=${num}`).then(function (res) {
        console.log(res, "swiper数据")
        if (res.data.data.playback_list.length !== 0) {
            $(".swiper-slide-active .kc-box").remove()
            res.data.data.playback_list.forEach(item => {
                let $box = $(`
            <div class="kc-box">
                <img src="${ item.head }" alt="">
                <div>
                    <span class="time">时长：${ item.class_duration }&nbsp;|&nbsp;${ item.class_students }人学习</span>
                    <span class="title">${ item.class_type }</span>
                    <p>${ item.title }</p>
                    <span class="teacher">讲师：${ item.user_name }</span>
                </div>
            </div>
            `)
                $(".swiper-slide-active").append($box)
            });

            $(".pagination>span").each(function (index, item) {
                if (index == num) {
                    $(item).addClass("active").siblings().removeClass("active")
                }
            })

        }
    })
}

// 问题按钮
$(".yuekt-wd ul li").click(function () {
    let index = $(this).index()
    if (up_or_down == 0) {
        let $box = $(`<li><span class='hs'>A</span><span class="text">${aswter_text[index]}</span></li>`)
        $(this).after($box)
        $(this).children().attr("src", `${img_src}mobile/images/loft_HD/jiantou_up.png`)
        up_or_down = 1
    } else {
        $('.hs').parent().remove()
        $(".yuekt-wd ul li img").attr("src", `${img_src}mobile/images/loft_HD/jiantou_down.png`)
        up_or_down = 0
    }
})

// 返回
$(".yuekt-header img").click(function () {
    window.history.back();
})

