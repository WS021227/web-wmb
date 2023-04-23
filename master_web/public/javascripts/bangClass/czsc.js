$(function () {
  $('.pannel-item').on({
      click: function () {
          $(this).toggleClass('active').siblings().removeClass('active')
      }
  })
  $('.pannel-child').on({
      click: function (e) {
          e.stopPropagation();
          $(this).addClass('active').siblings().removeClass('active');
          $(this).parents('.pannel-item').find('.panel-child').removeClass('active');
      }
  })
})

var help_left_box=$(".class-product-nav")
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