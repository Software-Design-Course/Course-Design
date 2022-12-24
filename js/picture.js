 // 1. 获取元素 
 var imgs = document.querySelector('.baidu').querySelectorAll('img');
 // console.log(imgs);
 // 2. 循环注册事件 
 for (var i = 0; i < imgs.length; i++) {
     imgs[i].onclick = function() {
         // this.src 就是我们点击图片的路径   images/2.jpg
         // console.log(this.src);
         // 把这个路径 this.src 给body 就可以了
         document.body.style.backgroundImage = 'url(' + this.src + ')';
     }
 }

function init() {
    var username = localStorage.getItem("usingname");
    var item = JSON.parse(window.localStorage.getItem(username));
    // document.querySelector('#loname').value=username;
    document.getElementById("loage").innerHTML=item.age;
    document.getElementById("lonc").innerHTML=item.Nicheng;
    document.getElementById("logender").innerHTML=item.Gender;
    document.getElementById("loemail").innerHTML=item.emailID;
    document.getElementById("loname").innerHTML=username;
}
