

// obj=JSON.parse(text);


// var example=' <a href="#" target="_blank" class="item">\n' +
// '<div class="text_geng">\n' +
// '<h4>'+obj.apple.name+'</h4>\n' +
// '<h5>简介:</h5>\n' +
// '<p class="text_wenzi">芭比q,谐音barbecue,原意为烧烤,在网络用语中“芭比q了”意为“完蛋了”(被烧烤=被火化=完蛋了)。</p>\n' +
// '</div>\n' +
// '</a>';

// 跨域访问的问题
var ajax=function(){
    $.ajax({
        type:"GET",
        async:"false",
        url:"../test/js/data.json",
        dataType:"jsonp",
        jsonp:"jsonpCallback",//服务端用于接收callback调用的function名的参数
        success:function(data){
            alert("data");
        },
        erro:function(){
            alert("error");
        }
     
    })
}


    
// 实现卡片瀑布流式布局 自适应屏幕 自动排列
$(function () {
    var $container = $('#masonry');
    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.item'
        });
    });
    // 点击查看更多按钮 或者往下刷新时
    $("#add_btn").click(function () {
        ajax();

        // $newElems = $(example);
        // $container.append($newElems);
        // $container.masonry('appended', $newElems,true);
    });
});
