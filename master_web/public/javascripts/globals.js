// 当前页面是否为公司搜索标签页
let is_stags = $('meta[name="is_stags"]').attr('content')
// 当前页面是否为公司搜索页
let is_search = $('meta[name="is_search"]').attr('content')
// 当前页面是否为公司搜索页  没有时默认为采购商
let global_company_type = Number($('meta[name="gcompany_type"]').attr('content') || 0)

// 2023.3 抽奖活动 head 活动按钮显示
let show_hd_button = false

let company_type_route = {
    0: {
        default: 'buyer',
        has_key: 'buy',
        has_country: 'cb'
    },
    1: {
        default: 'supplier',
        has_key: 'sup',
        has_country: 'cs'
    }
}

$(function () {
    // ------    全局搜索  -----------------------------------
    // $('#skip').hide();
    // $('#clickSearchbtn').show();
    $('#text_search_type').val(queryString('search_type') || 2)
    // 全局 选中公司名搜索时，构建跳转路url
    $(document).on('input propertychange', '#text_global_search', function (e) {
        var search_type = Number($("#text_search_type").val());
        if (search_type == 3) {
            let hs_code = $(this).val(),
                num_hs = hs_code.replace(/[^0-9]/g, '')
            if (hs_code != num_hs) {
                $(this).val(num_hs)
                $.alert('' + unity_lang('search_keywords_number') + '')
            }
        }
    });
    // 点击搜索框加载历史搜索词
    $(document).on('click', '#text_global_search', function (e) {
        // e.stopPropagation()
        if (!wg.user.id) return false
        let $this = $(this),
            search_type = parseInt($('#text_search_type').val()),
            history_keys = $this.data('history_keys_' + search_type)
        if ($this.val()) return false
        if (history_keys) return build_history_keys(history_keys)
        // 加载历史搜索
        $.ajax('/async/historyKeys', {
            datatype: 'text/json',
            type: 'get',
            data: {
                search_type: search_type
            },
            success: function (result) {
                $this.data('history_keys_' + search_type, result.list)
                build_history_keys(result.list)
            }
        })
    })
    // $(document).on('click', '*', function (e) {
    //     let $this = $(e.target), $par = $this.parents('.pop')
    //     if($this.hasClass('open-pop')) return  true
    //     if($this.hasClass('pop') || $par.length > 0) return true
    //     $('.pop').addClass('display-none')
    //     // e.stopPropagation()
    // })
    $(document).on('click', '[data-idel]', function () {
        var elem = $(this).attr('data-idel')
        $('#' + elem).val('')
    })
    $(document).on('click', '.search-tab', function () {

        let $this = $(this),
            search_pla = $this.data('pla'),
            value = parseInt($this.data('value')),
            $text_global_search = $('#text_global_search')

        if (value == '3') {
            unity_authority('yd', function () {
                $this.addClass('active').siblings().removeClass('active')
            }, true, $this)
        } else {
            $(this).addClass('active').siblings().removeClass('active')
        }
        $('#text_search_type').val(value)
        $text_global_search.val("");
        $text_global_search.attr('placeholder', search_pla)
        let key = $text_global_search.val()
        if (value == 3 && key && isNaN(parseInt(key))) {
            $('#text_global_search').val(key.replace(/[^0-9]/g, ''))
        }
        if (value === 2) {
            search_autocomplete()
            $('.company-search-tags').removeClass('display-none')
        } else {
            invalid_search_autocomplete()
            $('.company-search-tags').addClass('display-none')
        }

    })

    $(document).on('click', '.company-link', function () {
        var $this = $(this),
            _urls = $this.attr('href').split('?'),
            _params = (_urls.length > 1 ? _urls[1] : '').split('&'),
            _href = _urls[0],
            data_params = {};

        if (_params.length > 0) {
            for (var i = 0; i < _params.length; i++) {
                if (_params[i] === undefined || _params[i] === "") continue;
                var _dt = _params[i].split('=')
                data_params[_dt[0]] = _dt[1]
            }
        }
        var _key = $this.attr('data-key')
        if (_key !== '' && _key !== null) {
            data_params['key'] = encodeURIComponent(_key)
        }
        if (Object.keys(data_params).length > 0) return $this.attr('href', _href + '?' + $.param(data_params))
    })
    // if( $('#dw_search_type').length > 0) {
    //     $('#dw_search_type').wdropdown({
    //         selected: function (e) {
    //             $('#text_search_type').val(e.value)
    //             let key = $('#text_global_search').val()
    //             if (Number(e.value == 3) && key && isNaN(parseInt(key))) {
    //                 $('#text_global_search').val(key.replace(/[^0-9]/g, ''))
    //             }
    //         }
    //     })
    //     $('#dw_search_type').wdropdown().change_selected('value', $('#text_search_type').val())
    // }
    // 全站document 点击入口
    $(document).on('click', function (e) {
        close_history_keys(e)
    })

    //加载自动补全
    search_autocomplete()


    // console.log('led   !@#$^@#$(| led [] {}：“’\' :;?/><,.'.toFix())
})


//// -----------------------------------------    全局搜索 -----------------------------------------------------------
let $des_autocomplete;

function search_autocomplete() {
    let $text_global_search = $('#text_global_search')
    if ($text_global_search.length <= 0) return false
    if ($text_global_search.data('noauto')) return false
    if (!$des_autocomplete) {
        $des_autocomplete = $text_global_search.autocomplete({
            source: '/async/search/autocomplete',
            position_parent: '.slider-search-box',
            position: {
                left: -1,
            },
            delay: 300,
            css: {
                'max-height': '400px'
            },
            search: function () {
                $('#search_history').addClass('display-none')
            },
            open: function (e, $ui) {
                // 如果有值，则显示自动补全
                if ($('#text_global_search').val()) {
                    $('#search_history').addClass('display-none')
                } else {
                    $ui._close(e)
                }
            },
            select: function (_) {
                global_company_search()
            }
        })
    } else {
        $des_autocomplete.effective()
    }
}

function invalid_search_autocomplete() {
    if ($des_autocomplete) $des_autocomplete.invalid()
}


function build_history_keys(list) {
    if (list.length <= 0) return false
    let _html = ''
    $.each(list, function () {
        _html += '<span onclick="searchKey(this)" data-keywords="' + this.keywords + '">' + this.keywords + '</span>'
    })
    $('#search_history').html('<div class="history-box"><h3>' + unity_lang('search_records') + '</h3><div class="history">' + _html + '</div></div>').removeClass('display-none')
}

function close_history_keys(e) {
    let $target = $('#search_history')
    if (!$target.is(e.target) && $target.has(e.target).length === 0 && e.target.id != 'text_global_search') {
        $('.pop').addClass('display-none')
    }
    // e.stopPropagation()
}


/**
 * 获取跳转路由
 * @param _type 公司类型
 * @param search_type 搜索类型
 * @param key 关键词
 * @param country 国家
 * @returns {string} 跳转路由
 * @private
 */
function get_company_route(_type, search_type, key, country) {
    var _company_type_route = company_type_route[_type],
        _postfix = _company_type_route.default,
        search_key = '';
    if (key != null && key != '' && key != '*') {
        search_key = key
        _postfix = _company_type_route.has_key + '-'
    }
    let country_url_params = ''
    if (country != null && country != '' && country != '*') {
        let _country_list = country.split('|')
        if (_country_list.length == 1) {
            _postfix = _company_type_route.has_country + '-' + country
            search_key = !search_key ? '' : ('/' + search_key)
        } else {
            country_url_params = '&country=' + country
        }
    }
    return '/' + _postfix + search_key + '?search_type=' + (search_type || 2) + country_url_params
}
/**
 * 全局公司搜索
 */

function global_company_search() {
    var search_type = $("#text_search_type").val();
    var key = $('#text_global_search').val()
    if (!key && key != '*') return $.alert(unity_lang('search_enter_keywords'))
    if (search_type != '3') return to_global_company_search()
    verify_authority('yd', {
        login: true,
        successful: to_global_company_search
    })
}

function to_global_company_search() {
    var key = $('#text_global_search').val()
    var search_type = $("#text_search_type").val();
    key && key != null && key != '' && key != '*' && (key = key.toClear())
    //不在搜索列表页时，直接跳转到列表页
    if (!is_search) {
        window.location.href = get_company_route(global_company_type, search_type, key)
        return false
    }
    // //公司名搜索且不在搜索列表页时，直接跳转到列表页
    // if (search_type == '1' && !is_search) {
    //     window.location.href = get_company_route(global_company_type, search_type, key)
    //     return false
    // }
    // 不在搜索页和搜索标签页， 则跳转到标签页
    if (!is_stags && !is_search) {
        window.location.href = '/' + company_type_route[global_company_type].default+'/tags?key=' + key + '&search_type=' + search_type

        return false
    }
    try {
        // 如果是标签页，则调用标签统计查询， 如果是搜索列表页， 则调用公司列表页查询，
        submit_search()

    } catch (e) {
        // 没有查询方法 则抛出异常
    }
}
let search_recommend = 1

function search_recommend_products(params) {

    if (!search_recommend) return false
    search_recommend = 0
    $('#search_keyword_related').addClass('display-none').find('.key-item').remove()
    if (params.search_type != 2) return false
    if (!params.key || params.key == '*') return false

    $.get('/async/recommend-products/similar', {
        key: params.key,
        country: params.country
    }, function (result) {
        if (result.data.list.length <= 0) return false
        var _html = ''
        $.each(result.data.list, function () {
            _html += '<a class="key-item" href="javascript:void(0)" onclick="searchKey(this)" data-keywords="' + this + '">' + this + '</a>'
        })

        if (result.data.minority_translate) {
            _html += '<a class="srp-search" href="javascript:void(0)" onclick="searchKey(this)" data-keywords="' + this + '">' + result.data.minority_translate + '</a>'
        }
        $('#search_keyword_related').removeClass('display-none').find('.keywords-related-c').append(_html)
    })

}

function port_list(fn, start, size) {

    $.ajax('/async/common/ports', {
        datatype: 'text/json',
        type: 'get',
        data: {
            start: start,
            size: size
        },
        success: function (result) {
            fn(result)
        }
    })
}
/**
 * 邦line推荐列表
 */
var bang_line = {}
var bang_line_key = ''

function get_bang_line(key) {
    let _line_promote = 0
    try {
        _line_promote = line_promote
    } catch (e) {}
    // if(key == bang_line_key) return false
    $("#bang_line").empty()
    bang_line_key = key
    var bang_line_html = ''
    if (key == null || key == '') {
        bang_line_html = '<div class="line-share">' +
            '<h2>' + unity_lang('bangline_list_title') + '</h2>' +
            '<div>' +
            ' <img src="https://static.52wmb.com/bangline/upload/images/avatar_1626327972.png">' +
            '<img src="https://static.52wmb.com/bangline/upload/images/avatar_1626319118.png">' +
            '<img src="https://static.52wmb.com/images/userphoto/190_130626483850444569.jpg">' +
            '<img src="https://static.52wmb.com/images/userphoto/190_162684311304162216467.jpeg">' +
            '</div>' +
            '<p>' + unity_lang('bangline_list_des') + '</p>' +
            '<a href="' + unity_lang('bangline_list_link') + '" target="_blank">' + unity_lang('bangline_list_button') + '</a>' +
            '</div>'

        $("#bang_line").append(bang_line_html)
        move_div()
        return
    }
    $.ajax('/async/recommend/master/search', {
        type: 'get',
        data: {
            line_product_size: 5,
            master_product_size: 5,
            products: key,
            promote: _line_promote
        },
        datatype: 'json/text',
        success: function (result) {
            if (result.state == '0') {
                // if(result.data.group){
                //     build_line_group(result.data)
                //     return
                // }
                bang_line = result.data.list
                if (result.data.data_type == '0') {

                    bang_line_html += '<div class="model-right-scroll model-right-scroll-list">'
                    bang_line_html += '<div class="bangline-right">'
                    bang_line_html += '<h2>' + unity_lang('bangline_title') + '<a href="' + unity_lang('bangline_list_link') + '" target="_blank">' + unity_lang('bangline_list_promotion') + '</a></h2>'
                    if (result.data.list.length < 5) {

                        //bang_line_html += '<div class="line-share-no">'
                        //bang_line_html += '<div>'
                        //bang_line_html += '<img src="https://static.52wmb.com/bangline/upload/images/avatar_1626327972.png">'
                        //bang_line_html += '<img src="https://static.52wmb.com/bangline/upload/images/avatar_1626319118.png">'
                        //bang_line_html += '<img src="https://static.52wmb.com/images/userphoto/190_130626483850444569.jpg">'
                        //bang_line_html += '<img src="https://static.52wmb.com/images/userphoto/190_162684311304162216467.jpeg">'
                        //bang_line_html += '</div>'
                        //bang_line_html += '<p>通过邦Line的推荐或搜索，您可以找到的采供真人，还可以在这免费推广供求信息。</p>'
                        //bang_line_html += '<a href="https://line.52wmb.com" target="_blank">' + unity_lang('bangline_list_button') + '</a>'
                        //bang_line_html += '</div>'

                        bang_line_html += '<div class="bangline-right-tips">'
                        bang_line_html += '<i><svg t="1663816983080" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2935" width="45" height="45"><path d="M686.791443 637.911688l83.519182 223.432769-83.519182 31.408337-96.369861-256.983909c-24.270776-0.474814-123.732046-2.142803-145.623635-2.142803L341.292572 885.61421l-82.09167-34.262338 91.372034-223.434815c-19.98824-4.757351-37.239136-12.728906-51.753711-23.912619-14.515598-11.183713-58.178027-48.720631-58.178027-94.941326 0-20.777209-5.711072-313.732377-5.711072-313.732377 0-9.041934 0-67.101257 67.101257-67.101257 65.668629 0 66.624397 55.204299 67.100234 64.246233 0 0 0.714268 197.971887 0.714268 214.151381 0 32.361035 7.971555 56.513108 23.913643 72.455195 15.943111 15.943111 41.522696 23.914666 76.738755 23.914666 0 0 221.052558 1.428535 256.268618 1.428535 9.041934 0 66.38699 1.895163 66.38699 66.38699 0 59.895135-57.345056 67.100234-66.38699 67.100234L686.791443 637.912711 686.791443 637.911688z" p-id="2936" fill="#515151"></path></svg></i>'
                        bang_line_html += '<p>' + unity_lang('bangline_list_nocontent') + '</p>'
                        bang_line_html += '<a href="' + unity_lang('bangline_list_link') + '" target="_blank">' + unity_lang('bangline_list_button') + '</a>'
                        bang_line_html += '</div>'
                    }
                    bang_line_html += '<div class="bangline-right-ul-top"><span>' + unity_lang('bangline_list_insterested') + '</span></div>'
                    bang_line_html += '<ul>'
                    $.each(result.data.list, function () {
                        bang_line_html += '<li>'
                        bang_line_html += '<a href="javascript:void(0)" onclick="bang_line_recommend_pop()">'
                        bang_line_html += '<img src="https://static.52wmb.com/images/userphoto/60_' + this.photo + '">'
                        bang_line_html += '<h3 style="padding-top:6px;">' + this.contact + '</h3>'
                        bang_line_html += '<p class="bangline-2">' + unity_lang('bangline_list_follow') + ' ' + this.keys + '</p>'
                        bang_line_html += '</a>'
                        bang_line_html += '</li>'
                    })
                    bang_line_html += '</ul>'
                    bang_line_html += '</div>'
                    bang_line_html += '</div>'
                } else if (result.data.data_type == '1') {

                    bang_line_html += ' <div class="bang-line">'
                    bang_line_html += '<h2>' + unity_lang('bangline_list_title') + '<a href="' + unity_lang('bangline_list_link') + '" target="_blank">' + unity_lang('bangline_list_promotion') + '</a></h2>'
                    if (result.data.list.length < 5) {
                        bang_line_html += '<div class="bangline-right-tips">'
                        bang_line_html += '<i><svg t="1663816983080" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2935" width="45" height="45"><path d="M686.791443 637.911688l83.519182 223.432769-83.519182 31.408337-96.369861-256.983909c-24.270776-0.474814-123.732046-2.142803-145.623635-2.142803L341.292572 885.61421l-82.09167-34.262338 91.372034-223.434815c-19.98824-4.757351-37.239136-12.728906-51.753711-23.912619-14.515598-11.183713-58.178027-48.720631-58.178027-94.941326 0-20.777209-5.711072-313.732377-5.711072-313.732377 0-9.041934 0-67.101257 67.101257-67.101257 65.668629 0 66.624397 55.204299 67.100234 64.246233 0 0 0.714268 197.971887 0.714268 214.151381 0 32.361035 7.971555 56.513108 23.913643 72.455195 15.943111 15.943111 41.522696 23.914666 76.738755 23.914666 0 0 221.052558 1.428535 256.268618 1.428535 9.041934 0 66.38699 1.895163 66.38699 66.38699 0 59.895135-57.345056 67.100234-66.38699 67.100234L686.791443 637.912711 686.791443 637.911688z" p-id="2936" fill="#515151"></path></svg></i>'
                        bang_line_html += '<p>' + unity_lang('bangline_list_nocontent') + '</p>'
                        bang_line_html += '<a href="' + unity_lang('bangline_list_link') + '" target="_blank">' + unity_lang('bangline_list_button') + '</a>'
                        bang_line_html += '</div>'
                    }
                    bang_line_html += ' <ul class="bang-line-list">'
                    $.each(result.data.list, function () {

                        bang_line_html += '<li><a href="' + unity_lang('bangline_list_link_show') + '/line/' + this.user_id + '" target="_blank">'
                        bang_line_html += '<img src="' + this.avatar + '" />'
                        bang_line_html += '<div>'
                        bang_line_html += '<h3>' + this.name + '</h3>'
                        if (wg.lang == 'cn') {
                            bang_line_html += '<span style="color:#000;font-weight:500;">' + this.country_cn + '' + this.company_type_name_cn + '<font>|</font>' + this.position + '</span>'
                        } else {
                            bang_line_html += '<span style="color:#000;font-weight:500;">' + this.country_en + ' ' + this.company_type_name_en + '<font>|</font>' + this.position + '</span>'
                        }

                        //bang_line_html += '<span>' + this.company_name + '</span>'
                        bang_line_html += '<span>' + unity_lang('gsupply_demand_data')[this.company_type] + '' + this.supply_demand.substring(0, 20) + '</span>'
                        bang_line_html += '</div>'
                        bang_line_html += '</a></li>'
                    })
                    bang_line_html += '</ul>'
                    bang_line_html += '</div>'

                }

            } else {
                bang_line_html += '<div class="bangline-right-tips">'
                bang_line_html += '<i><svg t="1663816880832" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2636" width="45" height="45"><path d="M686.791443 637.911688l83.519182 223.432769-83.519182 31.408337-96.369861-256.983909c-24.270776-0.474814-123.732046-2.142803-145.623635-2.142803L341.292572 885.61421l-82.09167-34.262338 91.372034-223.434815c-19.98824-4.757351-37.239136-12.728906-51.753711-23.912619-14.515598-11.183713-58.178027-48.720631-58.178027-94.941326 0-20.777209-5.711072-313.732377-5.711072-313.732377 0-9.041934 0-67.101257 67.101257-67.101257 65.668629 0 66.624397 55.204299 67.100234 64.246233 0 0 0.714268 197.971887 0.714268 214.151381 0 32.361035 7.971555 56.513108 23.913643 72.455195 15.943111 15.943111 41.522696 23.914666 76.738755 23.914666 0 0 221.052558 1.428535 256.268618 1.428535 9.041934 0 66.38699 1.895163 66.38699 66.38699 0 59.895135-57.345056 67.100234-66.38699 67.100234L686.791443 637.912711 686.791443 637.911688z" p-id="2637" fill="#515151"></path></svg></i>'
                bang_line_html += '<p>' + unity_lang('bangline_list_nocontent') + '</p>'
                bang_line_html += '<a href="' + unity_lang('bangline_list_link') + '" target="_blank">' + unity_lang('bangline_list_button') + '→</a>'
                bang_line_html += '</div>'
            }
            $("#bang_line").append(bang_line_html)
            move_div()
        }
    });
}

function build_line_group(data) {
    let group = data.group,
        list_html = '',
        right_html = '<div class="">'
    right_html += '<div class="bang-quan">' +
        '<div class="bang-quan-body"><h2>' + unity_lang('list_bline_title') + '<a href="' + unity_lang('bangline_list_link') + '" target="_blank">' + unity_lang('bangline_list_promotion') + '</a></h2>' +
        '<font class="bangquan-body-tips">' + replaceKey(unity_lang('list_bline_tips'), '[@行业]', group.name) + '</font>' +
        '<ul class="bang-line-list">\n'


    $.each(data.list, function (a, b) {
        right_html += '<li>\n' +
            '   <a href="' + line_route + '/line/' + b.user_id + '" target="_blank">\n' +
            '       <img src="https://static.52wmb.com/bangline/upload/images/' + b.avatar + '">\n' +
            '       <div>\n' +
            '           <h3>' + b.name + '</h3>\n' +
            '           <span style="color:#000;font-weight:500;">' + b.country + b.company_type_name + '<font>|</font>' + b.company_name + '</span>\n' +
            '           <span>' + b.verb + ' ' + b.products + '</span>\n' +
            '       </div>\n' +
            '   </a>\n' +
            '</li>\n'

    })
    right_html += '</ul></div>' +
        '<a href="' + line_route + '/group-' + group.id + '/member" target="_blank" class="bang-quan-enter">' + unity_lang('list_bline_more') + '</a></div>'
    $("#bang_line").append(right_html)
    move_div()
    list_html += '<div class="group-enter">' +
        '<div class="group-title">' +
        '<h2><a href="' + line_route + '/group-' + group.id + '" target="_blank">' + group.name + '' + unity_lang('list_bline_industry_circle') + '</a></h2>' +
        '<p>' + group.user_count + '' + unity_lang('list_bline_members') + '<font>|</font>' + group.topic_count + '' + unity_lang('list_bline_posts') + '<font>|</font>' + group.view_count + '' + unity_lang('list_bline_views') + '</p>\n' +
        '<a href="' + line_route + '/group-' + group.id + '" class="group-enter-link" target="_blank">' + unity_lang('list_bline_enter') + '</a></div>' +
        '<div class="group-content"><img class="group-pic" src="https://static.52wmb.com/bangline/upload/images/' + group.photo + '"/>\n' +
        '<p>' + group.introduction + '</p>\n'

    let circle_users = []
    try {
        circle_users = JSON.parse(group.circle_user_list)
    } catch (e) {
        console.log(e)
    }

    if (circle_users.length > 0) {
        list_html += '<span><font>' + unity_lang('list_bline_members_show') + ':</font>'
        circle_users.forEach(function (item) {
            list_html += '<img alt="" src="https://static.52wmb.com/bangline/upload/images/' + item.avatar + '">'
        })
        list_html += '<a href="' + line_route + '/group-' + group.id + '/member" target="_blank">' + unity_lang('list_bline_all') + '</a></span>'
    }
    right_html += '</div></div>'
    $('#company_list').prepend(list_html)
}

function build_line_ad(key, ad_pos, fn) {
    if (key && key != '' && key != '*') {
        $.ajax('/async/line/ad', {
            type: 'get',
            data: {
                key: key,
                ad_pos: ad_pos
            },
            datatype: 'json/text',
            success: function (result) {
                if (result.state == 0) {
                    var dt = result.data, _list = dt.list || [],
                        _html = '<div class="product-show"><div class="tips"><a href="' + unity_lang('bangline_list_link') + '" target="_blank">' + unity_lang('bline_ad_title') + '</a></div>'
                    $.each(_list, function (a, data){

                         _html += '<div class="product-item">' +
                            '<div class="product-item-pics">' +
                            '<a href="' + line_route + '/topic/' + data.id + '" target="_blank"><img src="https://static.52wmb.com/bangline/upload/images/' + data.image + '">' +
                            '<span>' + data.image_count + '</span></a></div>' +
                            '<div class="product-item-des">' +
                            '<div class="content">' +
                            '<p><a href="' + line_route + '/topic/' + data.id + '" target="_blank"><b>[' + data.verb + ']</b> ' + str_fuck(data.contents, 150) + '</a></p>' +
                            //'<p>此条信息，已获取' + data.ad_count + '次展示</p>' +  bangline_list_link
                            '<p>' + replaceKey(unity_lang('bline_ad_shows'), '[@数量]', data.ad_count) + '</p>' +
                            '</div>' +
                            '<div class="member"><a href="' + line_route + '/line/' + data.user_id + '" target="_blank">' +
                            '<img src="https://static.52wmb.com/bangline/upload/images/' + data.avatar + '">' +
                            '<span>' + data.name + ' ' + unity_lang('bline_ad_published') + '<font>(' + data.position + ')</font></span>' +
                            '<span>' + data.verb + ': ' + data.products + '...</span> </a>' +
                            '</div></div></div>'
                    })
                    fn(_html +'</div>')
                }
            }
        })
    }
}

function bang_line_recommend_pop() {
    var bang_line_pop = ''
    bang_line_pop += '<div class="qiao-show">'
    bang_line_pop += '<h2>' + bang_line.length + '' + unity_lang('bangline_list_friend') + '' + unity_lang('bangline_list_ie') + '<span>' + bang_line_key + '</span></h2>'
    bang_line_pop += '<p>' + unity_lang('bangline_list_ie_des') + '</p>'
    bang_line_pop += '<ul>'

    $.each(bang_line, function () {
        bang_line_pop += '<li><img src="https://static.52wmb.com/images/userphoto/60_' + this.photo + '" /></li>'
    })
    bang_line_pop += ' <br class="clear"></br>'
    bang_line_pop += '</ul>'
    bang_line_pop += '<a href="' + unity_lang('bangline_list_link') + '" class="qiao-open">' + unity_lang('bangline_list_button') + '</a>'
    bang_line_pop += '</div>'
    layer.open({
        content: bang_line_pop,
        type: 1,
        skin: 'layui-layer-rim',
        area: ['500px', ''], // 配置长高
        shadeClose: false, //点击遮罩关闭
        maxmin: false,
        closeBtn: 1,
    })
}

function company_follow(company_id, scene) {

    wpull.dopen(function (side) {
        $.ajax('/async/common/company/follow/tags', {
            datatype: 'text/html',
            type: 'get',
            success: function (result) {
                side.changeContent(result)
                $('#follow_tags_form').append('<input type="hidden" name="company_id" value="' + company_id + '">')
                $('#follow_tags_form').append('<input type="hidden" id="tags_scene" value="' + scene + '">')
            }
        })
    })
}