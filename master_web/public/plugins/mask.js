;(function($) {
    var icons = [
        '<svg t="1648790347324" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7800" width="35" height="35"><path d="M512 1022.1056c-282.3168 0-511.232-228.864-511.232-511.0784S229.632 0 512 0c282.3168 0 511.232 228.8128 511.232 511.0272 0 282.2656-228.864 511.0784-511.232 511.0784z m0-926.2592a415.2832 415.2832 0 0 0-415.3856 415.232c0 107.2128 41.0624 204.6464 107.8272 278.3232 60.16-29.1328 38.0416-4.9152 116.736-37.2736 80.5888-33.1264 99.6352-44.6464 99.6352-44.6464l0.768-76.288s-30.1568-22.8864-39.5264-94.72c-18.8928 5.4272-25.088-22.016-26.2144-39.424-1.024-16.896-10.9568-69.4784 12.0832-64.7168-4.7104-35.1744-8.0896-66.8672-6.4-83.6608 5.7344-58.88 62.976-120.5248 151.0912-124.9792 103.68 4.4544 144.7424 66.048 150.528 124.928 1.6384 16.8448-2.048 48.5376-6.7584 83.6096 23.04-4.6592 13.0048 47.872 11.8784 64.7168-1.024 17.408-7.3728 44.7488-26.2144 39.3728-9.4208 71.7824-39.5776 94.464-39.5776 94.464l0.7168 75.9296s19.0976 10.8032 99.6352 43.9296c78.6944 32.3584 56.576 9.5744 116.736 38.7584a413.184 413.184 0 0 0 107.776-278.3744A415.232 415.232 0 0 0 512 95.7952z" fill="#4EB0FA" p-id="7801"></path></svg>',
        '<svg t="1648304412247" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6779" width="35" height="35"><path d="M124.64128 480.8704v418.48832h774.71744V480.82944H124.64128zM0 356.1472h1024V1024H0V356.18816z" fill="#FF7E31" p-id="6780"></path><path d="M445.2352 578.7648h133.57056v222.6176H445.2352z" fill="#FA4D00" p-id="6781"></path><path d="M721.26464 124.64128v320.59392h124.64128V0H178.09408v445.2352H302.6944V124.64128z" fill="#FF7E31" p-id="6782"></path><path d="M178.09408 356.18816h124.64128v124.64128H178.09408zM721.26464 356.18816h124.64128v124.64128h-124.64128z" fill="#FA4D00" p-id="6783"></path></svg>'
    ]
    var wMask = function (elem, options){
    
        this.$elem = $(elem);
        this.$layer = null;
        this.options = options
        this.$elem.css('position', 'relative').find('*:eq(0)').addClass('hidden-content')
        this._render_layer()
    }
    wMask.prototype = {
        _render_layer: function () {
            let _html = '<div class="' + this.options.layer_class + ' '+ this.options.layer_ext_class +'"><div class="pagedata-Shield">'
            _html+='<div class="' + this.options.module + '">'
            if(this.options.icon != null){
                _html+='<i class="user-ico">' + icons[this.options.icon] + '</i>'

            }
            _html+='<div class="rightS-ac">' + this.options.content + '</div></div></div></div>'

            this.$layer = $(_html).appendTo(this.$elem)
            // this.$layer.appendTo(this.$elem)
        },
    }
    /**
     * 插件化
     */
    function plugin(options) {
        var defaults = {
            layer_class: 'head-shield',
            layer_ext_class: '',
            module: 'shield-module',
            content: '',
            icon: 1
        }
        var chain = this.each(function () {
            var $this = $(this);
            var config = $.extend({}, defaults, options, $this.data());
            new wMask(this, config)
        });
        return chain;
    }
    $.fn.wMask = plugin;
})(jQuery);