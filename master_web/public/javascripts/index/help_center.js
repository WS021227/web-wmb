var help_left_box=$(".help-nav")
 var help_offset_top=help_left_box.offset().top 

$(window).on('scroll',function(){
var top = $(window).scrollTop();

if(top > help_offset_top){
help_left_box.addClass("load");
}
if(top < help_offset_top){
    help_left_box.removeClass("load");
    }
  })