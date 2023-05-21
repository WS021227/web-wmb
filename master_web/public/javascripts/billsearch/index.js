let curr_lang_json = {}
let bang_classroom = $("#operate_box"),
    right_bang_classroom = bang_classroom.offset().top +$(".module-content").height()+50
$(function(){
    load_js_file('intro', function () {
        // 折叠
        show_experience_process()
    })
})
$(window).on('scroll', function () {
    var top = $(window).scrollTop();
    if (top > right_bang_classroom) {
        bang_classroom.addClass("load");
    }
    if (top < right_bang_classroom) {
        bang_classroom.removeClass("load");
    }
})
let country_list = [], datas = {};
$.each($('li[data-country]'), function (){
    // console.log($(this).data('country'))
    country_list.push($(this).data('country').country)
})

$('#customs_country').autocomplete({
    source: country_list,
    position_parent: '.slider-search-form',
    renderLabel: function (item){
        return '<a class="auto-item-a" target="_blank" href="/customs-data/'+ item.label +'">'+item.label +'</a>'
    }
})

function show_experience_process(){
    if(!get_experience_process()) return false
    let node_id = wg.user.user_functional.enode || 0
    setTimeout(function(){
        add_process_node(node_id)
    },1000)
}