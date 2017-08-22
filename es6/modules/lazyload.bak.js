var lazyLoad = function($,obj){
    (function($,obj){
        var lazyload = {
            demo: obj,
            imgInfo:[],
            getImg: function(){
                return this.demo.find('img');
            },
            countImg: function(){
                this.getImg().each(function(key,val){
                    var data_src = $(this).attr('data-src');
                    var _src = $(this).attr('src');
                    var _index = key;
                    this.imgInfo.push({load:data_src,src:_src,index:_index});
                });
                
            },
            showImg: function(n){
                var st = n ;
                this.getImg().each(function(){
                    var nowImg = $(this);
                    var nowTop = nowImg.offset().top;
                    var imgSrc = nowImg.attr('data-src');
                    var loadSrc = nowImg.attr('src');
                    if(nowTop<st){
                        nowImg.attr('data-src',loadSrc);
                        console.log(imgSrc);
                        nowImg.attr('src',imgSrc);
                    }
                });
            }
        };



        window.onscroll = function(e){
            var sT = window.scrollY;
            lazyload.countImg(sT);
        };

    })($,obj)
};