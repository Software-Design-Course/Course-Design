const loname = document.querySelector('#search');
const searchButton = document.querySelector('#btn01');
var value1 = {
    h4: "芭比Q了",
    p: "芭比q,谐音barbecue,原意为烧烤,在网络用语中“芭比q了”意为“完蛋了”(被烧烤=被火化=完蛋了)。",
    p1:"",
    img:"./imag/bbq.jpg",
    herf:"./detailedinformation.html"
}
var value2 = {
    h4: "别急",
    p: "别急是在v吧很流行的一个梗,别人说了什么都可以用“别急”“听我说你先别急”“我知道你很急但是先别急”来回应他,几乎成了万能句式。",
    p1:"追根溯源,别急梗出自b站up主djgun的经典发言。d老师专门做电棍的鬼畜音频,直播时候喜欢放鬼图和阴间bgm来整人,因此直播间经常被封,然后djgun就会发动态表示'别急'。之后别急的梗就被动物园粉丝带火了，扩散到v圈。",
    img:"./imag/bieji.png",
    herf:"./detailedinformation1.html"
}
var value3 = {
    h4: "鸡你太美",
    p: "这个梗出自名为只因你太美的歌曲，是由组合SWIN-S所演唱的一首歌曲，后由蔡徐坤的二次演绎走红；他在选秀节目偶像练习生上二次表演这首歌曲，却因为太过喜感而出圈；随着蔡徐坤的大火，黑粉也越来越多，最近蔡徐坤成为NBA篮球形象大使，有人把蔡徐坤两年前的一段篮球视频翻出来，而“鸡你太美”是这段舞蹈的BGM“只因你太美”的谐音。BGM中歌词“只因你太美”听起来有点像“鸡你太美”所以就被网友调侃成鸡你太美。",
    p1:"",
    img:"./imag/jntm.png",
    herf:"./detailedinformation2.html"
}
var value4 = {
    h4: "为爱冲锋的勇士",
    p: "指的是山东服装学院发生的一起事件。",
    p1:"这名男生已经和女生结婚，但是在这个男生努力在外面打工赚钱的时候，这个女生在校园里面与另一名男生谈恋爱十个月，知道之后的男生怒从‌‌‌‌​​​‌​‌‌‌‌‌​‌‌‌​​‌‌心起，因为疫情管控原因无法到达山东，于是骑了三天三夜的自行车，来到校园翻墙找女生讨要说法，却不慎遭到女生男友和四名朋友的堵截，这名男生勇敢一挑五。",
    img:"./imag/wacfdzs.jpg",
    herf:"./detailedinformation3.html"
}

var object = [value1, value2,value3,value4]

var i=0;

searchButton.addEventListener('click', function () {
    var k;
    for (i = 0, k = 0; i <= object.length - 1; i++) {
        if (object[i].h4 == loname.value) {
            k = 1;
            window.sessionStorage.setItem("search1",JSON.stringify(object[i]))
            break;
        }
    }
    if (k == 1) {
        // alert("找到了");
        // alert(object[i].target);

        document.form2.action = "./reserchrestlt.html";
    }
    else {
        alert("找不着");
    }
})

function init() {
    var item=JSON.parse(window.sessionStorage.getItem("search1"));
    document.getElementById("h4").innerHTML=item.h4;
    document.getElementById("p").innerHTML=item.p;
    document.getElementById("p1").innerHTML=item.p1;
    document.getElementById("img").setAttribute("src",item.img);
    document.getElementById("herf").setAttribute("href",item.herf);
}