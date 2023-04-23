let index = 0,
    tab_flag = 0

$(".kfkc-container .num .tab span").click(function () {
    console.log("000")
    $(this).addClass("active").siblings().removeClass("active")
    tab_flag = $(this).index()
    if ($(this).index() == 1) {
        index=0
        get_tab_data1(1, index)
    } else {
        index=0
        get_tab_data(index)
    }
})

function get_tab_data1(num, index, flag) {
    if (flag!=0) {
        $(".kfkc-container .content .sbox").remove()
    }

    axios.get(`/async/new/tutorial/list?start=${index}&category=82&source=kfkc&sort=${num}`).then(function (res) {
        console.log(res, "最热数据")
        $(".kfkc-container .content").append($(res.data.content))
    })
}

function get_tab_data(index, flag) {
    if (flag!=0) {
        $(".kfkc-container .content .sbox").remove()
    }
    axios.get(`/async/new/tutorial/list?start=${index}&category=82&source=kfkc`).then(function (res) {
        console.log(res, "最新数据")
        $(".kfkc-container .content").append($(res.data.content))
    })
}

// 点击加载更多
$(".more").click(function () {
    index += 8
    if (tab_flag == 0) {
        get_tab_data(index, 0)
    } else {
        get_tab_data1(1, index, 0)
    }
})

$(".tg-header h1 img").click(function(){
    window.history.back()
})