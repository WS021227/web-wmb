

module.exports = {
    render: function (total_count, per, current, base_link, source) {
        let link = ' href="' + base_link + '%s"', total = Math.floor(total_count / per), ys = total_count % per
        if(ys > 0) total ++;

        let page_html = '<div class="paging"><div class="page_ctrl"><div>'
        if(current>1){
            page_html += '<a class="prev_page" '+ link.format(current-1) +'>上一页</a>'
        }else{
            page_html += '<a class="prev_page btn_dis" >上一页</a>'
        }
        for (var i = 0; i < total - 1; i++) {
            if (total > 4 && current > 2 && i < current - 1) {
                if (i < 1) {
                    page_html += '<a class="page_num" ' + link.format(i + 1) + '>' + (i + 1) + '</a>';
                } else if (i == 1) {
                    page_html += '<a class="page_dot">•••</a>';
                }
            } else if (total > 4 && current < total - 3 && i > current + 1) {
                if (current > 4 && i == current + 2) {
                    page_html += '<a class="page_dot">•••</a>';
                } else if (current < 4) {
                    if (i < 4) {
                        page_html += '<a class="page_num" ' + link.format(i + 1) + '>' + (i + 1) + '</a>';
                    } else if (i == 4) {
                        page_html += '<a class="page_dot">•••</a>';
                    }
                }
            } else {
                if (i == current - 1) {
                    page_html += '<a class="page_num current_page">' + (i + 1) + '</a>';
                } else {
                    page_html += '<a class="page_num" ' + link.format(i + 1) + ' >' + (i + 1) + '</a>';
                }
            }
        }
        if (current == total) {
            page_html += '<a class="page_num current_page">' + (i + 1) + '</a>';
        } else {
            page_html += '<a class="page_num" ' + link.format(i + 1) + '>' + (i + 1) + '</a>';
        }
        if(current < total){
            page_html += '<a class="next_page" ' + link.format(current + 1) + '>下一页</a>'
        }else{

            page_html += '<a class="next_page">下一页</a>'
        }
        page_html += '<span class="page_total">' + current + '/ ' + total + ' </span></div>'
        page_html += '<div>到第<input class="input_page_num" id="'+ source +'_page_txt" type="text" value="">'
        page_html += '<span class="page_text">页</span>'
        page_html += '<a class="to_page_num" onclick="skip_page()">确定</a>'
        page_html += '</div></div>'
        page_html += '<script type="application/javascript">function skip_page(){var page = parseInt(document.getElementById(\''+ source +'_page_txt\').value);if(!isNaN(page)){window.location.href="'+ base_link +'" + page }}</script>'
        return page_html
    }
}