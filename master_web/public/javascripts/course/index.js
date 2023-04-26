$(function(){
    // 推荐资源、最新资源
    $(".course-zy-h2-left span").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        let idx=$(this).index(),id=1
        idx==0?id=1:id=0
        $.loadajax('/async/get_tj_or_new', {
            datatype: 'text',
            data: {id:id},
            success: function (result) {
                if(result.state==0){
                    put_tj_or_new(result.data)
                }
            }
        })
    })
    // 资源下载侧拉弹窗
    $("#course_zy_num").click(function(){
        wpull.dopen(function (side) {
            $.ajax('/async/get_tj_or_new', {
                datatype: 'text/html',
                type: 'get',
                success: function (result) {
                    side.changeContent(result.content)
                }
            })
        })
    })
})
function put_tj_or_new(list,more){
    if(!more){
        $(".course-zy-list .zy-box").remove()
    }
    list.list.forEach(function(item,index){
        let $box=$(`
            <div class="zy-box">
                <img src="${item.icon}" alt="">
                <span>${item.name}</span>
                <div><span>大小：${item.size/8/1024}k</span><font>|</font><span>格式：${item.format}</span></div>
                <a href="">下载</a>
            </div>
        `)
        $(".course-zy-list").append($box)
    })
}
