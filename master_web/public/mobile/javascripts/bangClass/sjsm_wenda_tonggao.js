let nb_tab_index=0
let index = window.location.pathname.indexOf("-")
let nb_page_flag = window.location.pathname.slice(index + 1, )
let flag=4
if(nb_page_flag=='wenda'){
    flag=1
}else if(nb_page_flag=='fwzc'){
    flag=3
}
console.log(nb_page_flag, "8978978978979798789789789")




$(".class-content .class-content span").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
})

let tab_index = 0,
    tab_id = 0

// class-tab  切换
$(".class-tab span").click(function () {
    if ($(".class-content>.more").css("display", "none")) {
        $(".class-content>.more").toggle()
    }

    start_num = 0
    console.log($(this).data("id"))
    tab_index = $(this).index()
    tab_id = $(this).data("id")
    if ($(this).index() == 0) {
        $(".tab1").css("display", "flex")
    } else {
        $(".tab1").css("display", "none")
        get_class_tab_content(tab_id)
    }
})

// class-tab-content 内容渲染
// 拿数据 
function get_class_tab_content(id) {
    $(".class-tab-content .sbox").remove()

    axios.get(`async/new/tutorial/list?start=0&category=2&source=index&category_child=${id}`).then(function (res) {
        console.log(res.data.content)
        $(".class-tab-content").append($(res.data.content))
    })

}

// 点击加载更多
let start_num = 0
$(".class-content>span").click(function () {
    start_num += 15
    if (tab_index == 0) {
        axios.get(`async/new/tutorial/list?start=${start_num}&category=2&source=index`).then(function (res) {
            console.log(res.data.content)
            if ($(res.data.content).data("id") == 'no-data') {
                $(".class-content>span").toggle()
            }
            $(".class-tab-content").append($(res.data.content))
        })
    } else {
        axios.get(`async/new/tutorial/list?start=${start_num}&category=2&source=index&category_child=${tab_id}`).then(function (res) {
            console.log(res.data.content)
            if ($(res.data.content).data("id") == 'no-data') {
                $(".class-content .more").toggle()
            }
            $(".class-tab-content").append($(res.data.content))
        })
    }
})

// 返回按钮
$(".tg-header").click(function () {
    window.history.back();
})

$(".tg-content,.top ul").on("click", "li", function () {
    console.log($(this).data("id"))
    window.location.pathname = `/new/${$(this).data("id")}`
})






// 数据百科页面tab切换
$(".tg-container>.tab>span").click(function () {
    $(this).addClass("active").siblings().removeClass("active")

    if ($(".tg-content .no-data").css("display") == "block") {
        $(".tg-content .no-data").css("display", "none")
    }

    nb_start_num = 0
    console.log($(this).data("id"))
    nb_tab_index = $(this).index()
    nb_tab_id = $(this).data("id")

    if ($(this).index() !== 0) {
        $(".tg-content>ul>.index1").css("display", "none")
        get_tab_content_data($(this).data("id"))
    } else {
        $(".tg-content>ul>.index1").css("display", "block")
    }
})

function get_tab_content_data(id) {
    $(".tg-content>ul>a>li").remove()
    axios.get(`/async/new/tutorial/list?start=0&category=${flag}&source=${nb_page_flag}&category_child=${id}`).then(function (res) {
        console.log(res, "988787")
        $(".tg-content>ul").append($(res.data.content))
    })
}

let nb_start_num = 0
// 点击加载更多
$(".tg-content .tg-content-more").click(function () {
    console.log(nb_page_flag,"45645645465456456465456")
    nb_start_num += 15
    if (nb_page_flag == "sjsm") {
        if (nb_tab_index == 0) {
            axios.get(`/async/new/tutorial/list?start=${nb_start_num}&category=${flag}&source=${nb_page_flag}`).then(function (res) {
                console.log(res.data.content)
                if ($(res.data.content).data("id") == 'no-data') {
                    $(".tg-content>.tg-content-more").css("display", "none")
                }
                $(".tg-content ul").append($(res.data.content))
            })
        } else {
            axios.get(`/async/new/tutorial/list?start=${nb_start_num}&category=${flag}&source=${nb_page_flag}&category_child=${nb_tab_index}`).then(function (res) {
                console.log(res.data.content)
                if ($(res.data.content).data("id") == 'no-data') {
                    $(".tg-content>.tg-content-more").css("display", "none")
                }
                $(".tg-content ul").append($(res.data.content))
            })
        }
    }else{
        axios.get(`/async/new/tutorial/list?start=${nb_start_num}&category=${flag}&source=${nb_page_flag}`).then(function (res) {
            console.log(res.data.content)
            if ($(res.data.content).data("id") == 'no-data') {
                $(".tg-content>.tg-content-more").css("display", "none")
            }
            $(".tg-content ul").append($(res.data.content))
        })
    }
})