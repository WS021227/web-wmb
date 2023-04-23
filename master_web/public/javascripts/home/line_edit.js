// 翻译数据  调用 unity_lang 方法  如： unity_lang('aa')
// let curr_lang_
curr_lang_json['dynamic_addup_images'] =  {cn: '最多添加6张图片', en: 'Add up to 6 images'},
curr_lang_json['edit_enter_keywords'] =  {cn: '请输入关键词', en: 'Please enter a keyword'}
curr_lang_json['edit_10_words'] =  {cn: '单个产品字数不能超过10个', en: 'No more than 10 words for a single product'}
curr_lang_json['edit_5_products'] =  {cn: '最多添加5个产品', en: 'Add up to 5 products'}
curr_lang_json['edit_5_exists'] =   {cn: '该产品已存在', en: 'This product already exists'}
curr_lang_json['edit_save_successful'] = {cn: '保存成功,一个工作日内审核完毕。', en: 'Save successfully, review within one working day.'}
curr_lang_json['edit_not_editable'] = {cn: '审核中，暂不可编辑', en: 'Under review, not editable'}
curr_lang_json['edit_close'] =  {cn: '关闭', en: 'Close'}
curr_lang_json['edit_confirmed'] =  {cn: '确定', en: 'Confirmed'}
curr_lang_json['edit_upload_fail'] =  {cn: '图片上传失败', en: 'Image upload failed'}
curr_lang_json['edit_under_review'] =  {cn: '信息审核中...', en: 'Under review...'}
curr_lang_json['edit_save_error'] =  {cn: '保存失败，请检查信息是否填写完整，如有疑问，请联系外贸邦客服。', en: 'Failed to save. Please check whether the info is complete. If you have any questions, please contact the customer service.'}
curr_lang_json['edit_add_images'] =  {cn: '请至少上传一张产品图片', en: 'Please upload at least one product image'}
curr_lang_json['edit_add_des'] =  {cn: '请填写产品描述尽量详尽', en: 'Please fill in the product description and be as detailed as possible'}
curr_lang_json['yangben'] =  {cn: 'yangben', en: 'demo'}



let company_type = Number($('#init_company_type').val()),
    country_id = Number($('#init_country_id').val()),
    isone_save = Number($('#isone_save').val())
$(function (){
    $('.upload-image').on('click', function (){
        let opt = $(this).data(), aindex = Number(opt.aindex) + 1
        $(this).data('aindex',  aindex)
        opt.view = this
        opt.aindex = aindex
        pop_image_upload(opt)
    })
    $('#company_types').on('change', function (){
        let val = Number(this.value), $addbtn = $('#btn_add_product'),
            $products = $('.purchase-list'), $txt = $('#input_product')
        $txt.val('')
        $('#form_info [name="products"]').val('')
        if(val == 4 || val == 5){
            $addbtn.addClass('display-none')
            $products.addClass('display-none')
            $txt.removeClass('bs')
            if(val == company_type){
                $txt.val($('#old_products').val())
            }
        }else{
            $addbtn.removeClass('display-none')
            $products.removeClass('display-none')
            $txt.addClass('bs')
        }
        if((company_type == 0 && val != 4 && val != 5) || val == company_type ){
        // if(val == company_type){
            $('#form_info [name="products"]').val($('#old_products').val())
        }
    })
    $(document).on('click', '.product-del', function (){
        remove_product(this)
    })

    $(document).on('click', '.topic-image-upload', function () {
        let _no = $(this).data('no'), f = $('#file_topic_image')
        if(_no){
            f.data('no', _no)
        }else {
            f.data('no', null)
            let imgs = $('#product_topic_pics .topic-img').length
            if (imgs >= 6) return $.alert(unity_lang('dynamic_addup_images'))
        }
        f.click()
    })

    $(document).on('change', '#file_topic_image', function () {
        let $this = $(this), no = $this.data('no')
        let imgs = $('#product_topic_pics .topic-img').length
        if (imgs >= 6) return $.alert(unity_lang('dynamic_addup_images'))
        let filePath = this.value, ext = filePath.substring(filePath.lastIndexOf('.')).toLowerCase(),
            allow_ext = ".jpg|.jpeg|.gif|.png|"//全部图片格式类型
        //限制图片类型
        if (allow_ext.indexOf(ext + "|") == -1) return $.alert(unity_lang('dynamic_incorrect_image'))
        var data = new FormData($('#form_topic_image_upload')[0])
        $.ajax('/async/line/upload/topic/image', {
            type: 'post',
            data: data,
            dataType: 'json',
            processData: false,
            contentType: false,

            success: function (result) {
                $this.val('');
                if(no){
                    $('#product_topic_pics .topic-img img[data-no="'+ no +'"]').data('filename', result.file_name)
                        .attr('src', 'https://static.52wmb.com/bangline/upload/images/' + result.file_name + '')
                    return;
                }
                $('#product_topic_pics').append('<div class="pic-list-item topic-img">' +
                    '<img data-no="'+  (imgs + 1) +'" data-filename="'+ result.file_name +'" class="topic-image-upload" src="https://static.52wmb.com/bangline/upload/images/' + result.file_name + '" >' +
                    '<span class="topic-image-delete">✕</span>' +
                    '</div>').removeClass('display-none')
            },

            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    })
    $(document).on('click', '.topic-image-delete', function () {
        $(this).parents('.topic-img').remove()
        let imgs = $('#product_topic_pics .topic-img').length
        if(imgs <= 0) $('#product_topic_pics').addClass('display-none')
    })
    // 加载国家列表
    load_countries()
    // 加载公司属性
    load_company_type()
})

function load_countries(){
    $.ajax('/async/common/country/code/list', {
        datatype: 'json',
        type: 'get',
        success: function (result){
            console.log(result)
            $.each(result.data.list, function (a, b){
                $('#country_list').append('<option '+ (b.id== country_id?'selected="selected"':'')+' value="'+ b.id +'">'+ b.name +'</option>')
            })
        }
    })
}

function load_company_type(){
    $.ajax('/async/line/company/type', {
        datatype: 'json',
        type: 'get',
        success: function (result){
            console.log(result)
            $.each(result.list, function (a, b){
                $('#company_types').append('<option '+ (b.id== company_type?'selected="selected"':'')+' value="'+ b.id +'">'+ b.name +'</option>')
            })
        }
    })
}
function add_product(){
    let $txt = $('#input_product'), val = $txt.val()
    if(!val) return $.alert('' + unity_lang('edit_enter_keywords') + '')
    if(val.length > 10) return $.alert('' + unity_lang('edit_10_words') + '')
    let txt_products = $('#form_info [name="products"]').val()
    let products = txt_products?txt_products.split(','):[]
    if(products.length >= 5) return $.alert('' + unity_lang('edit_5_products') + '')
    if(products.indexOf(val) >= 0) return $.alert('' + unity_lang('edit_5_exists') + '')
    let $products = $('.purchase-list')
    $products.append('<div class="purchase-item">' +
        '<span class="purchase">'+ val +'</span>' +
        '<span class="del product-del" data-val="'+ val +'">&#10005;</span></div>')
    products.push(val)
    $('#form_info [name="products"]').val(products.join(','))
    $txt.val('')

}
function remove_product(elem) {
    let $this = $(elem), val = $this.data('val'),
        txt_products = $('#form_info [name="products"]').val(),
        products = txt_products ? txt_products.split(',') : []
    products.removeVal(val)
    $('#form_info [name="products"]').val(products.join(','))
    $this.parents('.purchase-item').remove()
}

function save_info(elem) {
    let fail = 0
    let company_type = $('#company_types').val()
    if(company_type == 4 || company_type == 5){
        $('#form_info [name="products"]').val($('#input_product').val())
    }
    $.each($('#form_info').serializeArray(), function () {
        if (this.value == "" || this.value == "0") {
            let $this = $('[name="' + this.name + '"]'),
                tips = $this.data('tips')
            $.alert(tips)
            fail = 1
            return false
        }
    })
    if (fail) return;
    var data = new FormData($('#form_info')[0])
    $.ajax({
        type: "POST",
        url: "/async/save/info",
        data: data,
        datatype: "json",
        processData: false,
        contentType: false,
        success: function (data) {
            if (data.state == 0) {
                $(elem).removeAttr('onclick').addClass('ds').html(unity_lang('edit_under_review'))
                if(wg.user.bang_line || isone_save == 1)  return $.alert(unity_lang('edit_save_successful'))
                $('.step-1').addClass('display-none')
                $('.step-2').removeClass('display-none')
                $('.step-tab-2').addClass('active').siblings('.step-tab').removeClass('active')
                return
            }
            if(data.state == 100){
                let error = data.error || {}, top_keys = Object.keys(error)
                if(top_keys.length > 0){
                    return $.alert(error[top_keys[0]])
                }
            }
            if(data.state == 2000) return $.alert( unity_lang('edit_not_editable') )
            $.alert(unity_lang('edit_save_error'))
        }
    });
}

function pop_image_upload(options){
    let clip_area = 'clip_area_'+ options.filename + options.aindex
    layer.open({
        type: 1,
        // btn: ['&#x786E;&#x5B9A;', '关闭'],
        skin: 'layui-layer-rim',
        area: [options.layw, options.layh], // 配置长高
        shadeClose: false, //点击遮罩关闭
        maxmin: false,
        closeBtn: 1,
        title: options.laytitle,
        id: 'layer_clip_area',
        content: '<form id="upload_images">' +
            '<input type="file" name="image_file" id="image_file" accept="image/png,image/jpg,image/jpeg">' +
            '<input type="hidden" name="base_name" value="'+ options.filename +'">' +
            '<input type="hidden" name="crop_data" >' +
            '<div id="'+ clip_area +'" style="margin:10px;height: '+ options.clipah +'px;"></div>' +
            '<div class="wlayer-btns"><a class="btn0" id="clipBtn">' + unity_lang('edit_confirmed') + '</a></div>',
        success: function (layero, index, that) {
            $('#' + clip_area).photoClip({
                size: [options.clipwidth, options.clipheight],
                file: '#image_file',
                ok: '#clipBtn',
                loadStart: function () {
                    console.log()
                },
                loadComplete: function () {
                    console.log("照片读取完成");
                },
                loadError: function (err){
                    $.alert(err)
                },
                clipFinish: function (local, dataURL) {
                    $('#upload_images [name="crop_data"]').val(JSON.stringify(local))
                    upload_images(function (result){
                        if(result.state!=0) return $.alert('' + unity_lang('edit_upload_fail') + '')
                        $('#upload_images').remove()
                        $('#clipArea').removeAttr('')
                        $('.img-' + options.filename).attr('src', dataURL)
                        $('#form_info [name="'+ options.filename +'"]').val(result.file_name)
                        layer.close(index)
                    })
                }
            })
        }
    });
}

function upload_images(callback) {
    let data = new FormData($('#upload_images')[0])
    $.ajax('/async/edit/upload/image?tp=' + $('#upload_images [name="base_name"]').val(), {
        data: data,
        type: "POST",
        processData: false,
        contentType: false,
        success: function (result) {
            callback(result)
        },
        error: function (e){
            console.log(e)
            callback({state: 1})
        }
    })
}


/**
 *
 * @param elem
 * @returns {void|jQuery}
 */
function product_topic_add(elem) {
    let $this = $(elem)
    let $from = $('#product_topic_form'), content = $from.find('[name="contents"]').val()
    if (!content) return $.alert(unity_lang('edit_add_des'))
    let $imgs = $('#product_topic_pics .topic-img')
    if($imgs.length < 1) return $.alert(unity_lang('edit_add_images'))
    let imgs = ''
    $.each($imgs, function (){
        imgs += (',' + $(this).find('img').data('filename'))
    })

    $('#product_topic_form [name="images"]').val(imgs.slice(1))
    $this.html(unity_lang('dynamic_in_progress')).prop('disabled', true)
    let formdata = new FormData($from[0])

    $.ajax('/async/line/topic/add', {
        data: formdata,
        type: "POST",
        processData: false,
        contentType: false,
        success: function (result) {
            $this.html('提交产品信息').prop('disabled', false)
            _lock = false;
            if (result.state == 0) {
                $.alert(unity_lang('edit_save_successful'), function (){
                    window.location.reload()
                })
                return false
            }
            $.alert(result.message)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $.alert('' + unity_lang('dynamic_posting_fail') + '')
        }
    });
}
