$(function(){    
    $("li>h3","#questions").bind("click",function(){
        var li=$(this).parent();
        if(li.hasClass("fold")){
            li.removeClass("fold");
            $(this).find("b").removeClass("UI-bubble").addClass("UI-ask");
            //li.find(".foldContent").slideDown();
        }else{
            li.addClass("fold");
            $(this).find("b").removeClass("UI-ask").addClass("UI-bubble");
            //li.find(".foldContent").slideUp();
        }
    }); 
   
    }) 
    var bang_classroom=$("#bang_classroom")
    var right_bang_classroom=bang_classroom.offset().top+bang_classroom.height()
  console.log(right_bang_classroom,'right_bang_classroom') 
    $(window).on('scroll',function(){
    var top = $(window).scrollTop();
    if (top > right_bang_classroom) {
        bang_classroom.addClass("load");  
    }
    if (top < right_bang_classroom) {
        bang_classroom.removeClass("load");
    }
})
