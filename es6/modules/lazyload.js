(function($,window,document,undefine){
    $.fn.lazyload = function(options){
        var element = this;
        var imgs = element.find('img');
        var wh = window.innerHeight;

        function updata(n){
            if(imgs){
                imgs.each(function(key,val){
                    var ot = $(this).offset().top;
                    var data_src = $(this).attr('data-src');
                    var _src = $(this).attr('src');
                    if((_src != data_src) && (ot < (n+wh))){
                        $(this).attr('src',data_src);
                    }else{
                        return ;
                    }
                });
            }
        };
        $(window).bind('scroll',function(){
            var st = this.scrollY;
            updata(st);
        });
        $(window).bind('load',function(){
            var st = this.scrollY ;
            updata(st);
        });
        $(window).bind('resize',function(){
            var st = this.scrollY;
            updata(st);
        });
    };
})($,window,document);