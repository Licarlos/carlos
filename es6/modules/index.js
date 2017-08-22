define(['jquery'],function(exports){
    var show = function(){
        return function(){
            return 'hello world';
        }
    };
    exports.show = show();
});