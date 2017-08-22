
require.config({
    baseUrl: '/modules',
    paths:{
        "jquery": '../node_modules/jquery/dist/jquery'
    }
});

require(['jquery','index'],function(index){
    var show  = index.show;
    console.log(show());
});