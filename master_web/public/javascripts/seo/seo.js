var letter = '';
let curr_lang_json = {
    'se0': {cn: 'seo', en: 'seo'}
}

$(function () {
    build_shrink_open()
    var global_company_type = window.location.pathname;
    letter = global_company_type.replace('/category/list/', '')
     web_box_top()

    
})
var operate_box = $('.product-k-r ').height()
var hot_box='',hot_box_top=0,related_box='',related_box_top=0;
 function web_box_top(){
    hot_box = $('#jiqiao_hot')
    hot_data=$('#jiqiao_hot').data('type')
    if(hot_data=='0'){
         hot_box_top=hot_box.offset().top +operate_box
    }
    related_box = $('#jiqiao_related')
    related_data=$('#jiqiao_related').data('type')
    if(related_data=='0'){
         related_box_top=related_box.offset().top+ operate_box    
    }    
}
$(window).on('scroll', function () {
    var top = $(window).scrollTop();
    if (hot_box_top&&top > hot_box_top) {
        hot_box.addClass("load");
       
    }
    if(hot_box_top&&top < hot_box_top){
        hot_box.removeClass("load");
    }
//    if(related_box_top&&top > related_box_top){
//     related_box.addClass("load");
//    }
//    if(related_box_top&&top < related_box_top){
//     related_box.removeClass("load");
//    }
})

