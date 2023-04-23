$(function () {
    $(".class-detail-related h2").on("click", "a", function () {
        var index = $(this).index();
        var category = $(this).data('category')
        if (category == '1' || category == '2' || category == '4' || category == '3') {
            var type = 1
        } else {
            var type = 2
        }
        var sort = $(this).data('sort')
        if (sort == '1' && type == '2') {
            $("#tutorial_new_box_0").show()
            $("#tutorial_hot_box_0").hide()
        } else if (sort == '1' && type == '1') {
            $("#tutorial_new_box_" + category).show()
            $("#tutorial_hot_box_" + category).hide()
        } else if (sort == '0' && type == '2') {
            $("#tutorial_hot_box_0").show()
            $("#tutorial_new_box_0").hide()
        } else if (sort == '0' && type == '1') {
            $("#tutorial_hot_box_" + category).show()
            $("#tutorial_new_box_" + category).hide()
        }
        $(this).addClass("active").siblings().removeClass("active");

    })

})

function tutorial_list(type) {
    var data = {
        start: 0,
        size: 15,
        category: 1,

    }
    $.ajax('/new/tutorial/list', {
        datatype: 'text/json',
        type: 'get',
        data: data,
        success: function (result) {
            $(".class-jiqiao-list").empty()
        }
    })
}

var right_box = $(".class-jiqiao-hot")
var offset_top = right_box.offset().top
console.log(offset_top, 'offset_top')
$(window).on('scroll', function () {
    var top = $(window).scrollTop();

    if (top > offset_top) {
        right_box.addClass("load");


    }
    if (top < offset_top) {
        right_box.removeClass("load");
    }

})