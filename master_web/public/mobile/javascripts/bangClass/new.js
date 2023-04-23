$(".new-container>span>img").click(function(){
    window.history.back();
})


// 跳转文章详情页面
$(".class-tab-content").on("click",".sbox,.tab1",function(){
    console.log($(this).data("id"))
    window.location.pathname=`/new/${$(this).data("id")}`
})