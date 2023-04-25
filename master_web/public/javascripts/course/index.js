$(function(){
    $("#course_zy_num").click(function(){
        wpull.dopen(function (side) {
            let $result=$(`<div>111</div>`)
            side.changeContent($result)
                    // $('#follow_tags_form').append('<input type="hidden" name="company_id" value="' + company_id + '">')
                    // $('#follow_tags_form').append('<input type="hidden" id="tags_scene" value="' + scene + '">')
            // $.ajax('/async/common/company/follow/tags', {
            //     datatype: 'text/html',
            //     type: 'get',
            //     success: function (result) {
            //         side.changeContent(result)
            //         $('#follow_tags_form').append('<input type="hidden" name="company_id" value="' + company_id + '">')
            //         $('#follow_tags_form').append('<input type="hidden" id="tags_scene" value="' + scene + '">')
            //     }
            // })
        })
    })
})