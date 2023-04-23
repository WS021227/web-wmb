$(function () {
    $("#download_record .center-tag-select").on("click", "a", function() {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents("#download_record").find(".center-k-download-box").eq(index).show().siblings().hide();
    })
})