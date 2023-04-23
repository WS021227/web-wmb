var handleNum = 0 // 点击次数
var widthArr = []  // 存放当前每一个tab宽度
var category_child = ''
let source = $('meta[name="source"]').attr('content'),category = parseInt($('meta[name="category"]').attr('content'))
$(function () {
    var elChildren = $('.class-jiqiao-nav').children('a')
    for (var i = 0, ilen = elChildren.length; i < ilen; i++) {
        widthArr.push($('.class-jiqiao-nav').children('a')[i].offsetWidth + 10) // 10是当前span的margin
    }
    $(document).on('click', '.slidebtn', function () {
        var type = $(this).data('type')
        _category_tab(type)
    })
    $(document).on('click', '.class-jiqiao-nav a', function () {
        let category_child = $(this).data('category'), $pane_content = $('.tab-content'),
            $pane = $pane_content.find('.pane.tutorial-' + category_child)
        if ($pane.length <= 0) {
            $pane = $('<div class="pane tab-pane tutorial-' + category_child + ' active">' +
                '<ul class="class-jiqiao-list tutorial-list"></ul>' +
                '<a href="javascript:void(0);" class="more more-' + category_child + '" data-page="1" data-child="' + category_child + '" onclick="load_tutorial_list(this)">更多</a>' +
                '</div>')
            $pane.appendTo($pane_content)
            load_tutorial_list('.more-' + category_child)
        }
        $pane.addClass("active").siblings('.pane').removeClass("active");
        $(this).addClass("active").siblings().removeClass("active");
    })

    $('#dropdown_category').wdropdown({
        selected: function (e) {
            $('.category-index-more').data('child', e.value)
            reload_tutorial_list('.category-index-more')
        }
    })
    $('#dropdown_sort').wdropdown({
        selected: function (e) {
            $('.category-index-more').data('sort', e.value)
            reload_tutorial_list('.category-index-more')
        }
    })

    $("#bang_class").on("click", "a", function () {
        var sort = $(this).data('sort')
        $(this).addClass("active").siblings().removeClass("active");
        $('.category-index-more').data('sort', sort)
        reload_tutorial_list('.category-index-more')
    })
})


//教程分类目录
function tutorial_title() {
    $.ajax('/async/new/tutorial/category/item', {
        datatype: 'text/json',
        type: 'get',
        data: {has_child: 1},
        success: function (result) {
            var list = result.data.list.child_list
            $.each(result.data.list, function () {
                $.each($.parseJSON(this.child_list), function (index, item) {
                    var tab_list = ''
                    tab_list = '<a href="javascript:void(0);" data-category="' + item.id + '">' + item.name + '</a>'
                    $(".class-jiqiao-nav").append(tab_list)
                })

            })


        }
    })
}
/*教程列表*/
var size = 15
function reload_tutorial_list(elem){
    $(elem).data('page', 1).siblings('.tutorial-list').html('')
    load_tutorial_list(elem)
}
function load_tutorial_list(elem){
    let $elem = $(elem), child = parseInt($elem.data('child')),
        page = parseInt($elem.data('page')), sort = $elem.data('sort')
    if(isNaN(page)) return false
    $elem.addClass('display-none')
    tutorial_list(page, child, sort,function (result){
     
        $elem.removeClass('display-none').siblings('.tutorial-list').append(result.content)
        if(result.has_next) return $elem.data('page', page + 1).html('更多')
        $elem.data('page','').html('暂无更多数据')
       
    })
}

function tutorial_list(page, child, sort, callback) {
    
    let start = (page - 1) * size,
        params = {start: start,category: category, source: source};
    if (child) params.category_child = child
    if (sort) params.sort = sort
  
    $.ajax('/async/new/tutorial/list', {
        datatype: 'text/json',
        type: 'get',
        data: params,
        success: function (result) {
          
            callback(result)
        }
    })
}

function _category_tab(type) {
    var $el = $(".class-jiqiao-nav")
    var elWidth = $el[0].clientWidth // 内部菜单的宽度
    var wrapWidth = $('.tab-wrap')[0].clientWidth // 外层包裹的宽度

    var canmove = elWidth - wrapWidth // 可以移动的距离
    currleft = $el[0].offsetLeft // 当前向左偏移的距离
    if (type === 'left') {
        $(".right").show()
        currleft = currleft + widthArr[handleNum] * 4

        $el.stop().animate({left: currleft + 'px'}, 300, function () {
            handleNum--
            if (currleft >= 0) {
                handleNum = 0
                $(".left").hide()
                $(".right").show()
                $el.stop().animate({left: 0 + 'px'})

            }
        })

    } else {
        $(".left").show()
        currleft = Math.abs(currleft) + widthArr[handleNum] * 4
        $el.stop().animate({left: -currleft + 'px'}, 300, function () {
            handleNum++
            if (currleft >= canmove) {
                $(".right").hide()
                $(".left").show()
                handleNum = $el.children('a').length - 1
                $el.stop().animate({left: -canmove + 'px',})
            }
        })

    }
}

var $hot =$(".class-jiqiao-hot")
var offset_top=$hot.offset().top;
$(window).on('scroll',function(){
    var top = $(window).scrollTop();
    if (top > offset_top) return $hot.addClass("load");
    if (top < offset_top) return $hot.removeClass("load");
})
