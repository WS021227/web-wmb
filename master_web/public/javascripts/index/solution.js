var solution_left_box=$(".solution-nav")

    var solution_offset_top=solution_left_box.offset().top 
    $(window).on('scroll',function(){
        var top = $(window).scrollTop();
        if (top > solution_offset_top) {
            solution_left_box.addClass("load"); 
        }
        if (top < solution_offset_top) {
            solution_left_box.removeClass("load");
        }   
    })