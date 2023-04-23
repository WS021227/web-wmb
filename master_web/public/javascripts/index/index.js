$(function () {
    $(document).on('keydown', '#text_global_search', function (event) {
        if (event.which == 13) {
            global_company_search()
        }
    })
    $('#dw_company_type').wdropdown({
        selected: function (e) {
            global_company_type = parseInt(e.value)
        }
    })

    $("#user_attention_title").on("click", "a", function () {
        var type = $(this).data('type')
        if (type == '0') {
            $("#search_log_list_0").show()
            $("#search_log_list_1").hide()
        } else {
            $("#search_log_list_1").show()
            $("#search_log_list_0").hide()
        }

        $(this).addClass("active").siblings().removeClass("active");

    })
    $("#hot_search_company").on("click", "a", function () {
        var type = $(this).data('type')
        if (type == '0') {
            $("#search_company_buyer").show()
            $("#search_company_supply").hide()
        } else {
            $("#search_company_supply").show()
            $("#search_company_buyer").hide()
        }
        $(this).addClass("active").siblings().removeClass("active");
    })
})

// 底部菜单切换
$("#tab_menu").on("click", "a", function () {
    var index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $("#tab_menu_list ul").eq(index).show().siblings().hide()
})

console.log(wg,"用户数据")