var example1 = ' <a href="#" target="_blank" class="item">\n' +
    '<div class="text_geng">\n' +
    '<h4>天选牧羊人</h4>\n' +
    '<h5>简介:</h5>\n' +
    '<p class="text_wenzi">指身边人都阳了后依旧坚挺没阳，需要照顾以及给身边人做饭的一类人，简单来说，就是天选做饭人。因为阳了的人被谐音代指为羊，所以照顾羊的人就叫牧羊人，就有一种冥冥之中‌‌​​‌‌‌‌​​​​​‌​‌‌‌‌‌被上天选中来照顾小阳人的使命感。</p>\n' +
    '</div>\n' +
    '</a>';

var example2 = ' <a href="#" target="_blank" class="item">\n' +
    '<div class="text_geng">\n' +
    '<h4>卡塔尔版退钱哥</h4>\n' +
    '<h5>简介:</h5>\n' +
    '<p class="text_wenzi">在2022年卡塔尔世界杯揭幕战中厄瓜多尔队以2∶0战胜东道主卡塔尔队，这是世界杯第1次东道主在揭幕战失利。球场有位卡塔尔球迷激愤发言，这种场景与中国的退钱哥气质‌‌‌‌‌‌‌‌‌​​‌​​‌‌‌‌‌‌‌​十分相似。</p>\n' +
    '</div>\n' +
    '</a>';

var example3 = ' <a href="#" target="_blank" class="item">\n' +
'<div class="text_geng">\n' +
'<h4>输麻了</h4>\n' +
'<h5>简介:</h5>\n' +
'<p class="text_wenzi">       释义：与赢麻了相对，表示一直输，亏死了。用法：使‌​​‌​‌‌‌​​​‌​‌‌​​​‌‌​‌​用中通常也有自嘲的或是调侃的意思，其表示确有此事“输了”，但心里已经知道了，内心并不会有很大波澜，甚至“想笑”。</p>\n' +
'</div>\n' +
'</a>';

var example4 = ' <a href="#" target="_blank" class="item">\n' +
'<div class="text_geng">\n' +
'<h4>身在辐中不知辐</h4>\n' +
'<h5>简介:</h5>\n' +
'<p class="text_wenzi">谐音“身在福中不知福”这里的辐射专指对人体危害大的电离辐射，如具有放射性的金属，气体等都能释放电离辐射由于辐射肉眼不可见，需要用盖革计数器探测，所以即使暴露在‌‌‌‌‌​​‌​​‌​​‌​‌​​​​‌​辐射环境下也会“身在辐中不知辐”</p>\n' +
'</div>\n' +
'</a>';
var example=example1+example2+example3+example4;
var key = 1;

// 跨域访问信息 后端接口
var ajax = function () {
    $.ajax({
        type: "GET",
        async: "false",
        url: "../test/statics/data.json",
        dataType: "jsonp",
        jsonp: "jsonpCallback",//服务端用于接收callback调用的function名的参数
        success: function (data) {
            alert("data");
        },
        erro: function () {
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
        if (key) {
            $newElems = $(example);
            $container.append($newElems);
            $container.masonry('appended', $newElems, true);
            key--;
        }
        else {
            $('#myModal').modal('show');
        }
    });
});
