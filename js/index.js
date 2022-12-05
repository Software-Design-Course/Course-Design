

// function add_more(){
//     var table1=document.getElementById('table1');/* 找到id为table1的元素 */
//     var child=document.createElement('a');/* 在id为table1中新增a链接 */
//     // 设置a链接元素属性
//     child.href="#";
//     child.target="_blank";
//     // 新建a链接下的div
//     var child_child=document.createElement('div');
//     // 设置div属性
//     child_child.setAttribute('class','text_geng');
//     // 需要优化的地方：如何在加载源码的同时带上p标签的style
//     child_child.innerHTML=" <h4>芭比Q了</h4><h5>简介:</h5><p>芭比q,谐音barbecue,原意为烧烤,在网络用语中“芭比q了”意为“完蛋了”(被烧烤=被火化=完蛋了)。</p>"

//     child.appendChild(child_child);
//     table1.appendChild(child);
// }

// $("#testbtn").click(function(){
//     $("#myModal").modal("show");
// });

// var screen = window.screen.height;//可视区域高度
// var compare = document.body.clientHeight-document.body.scrollTop;//可视区域顶部距离整个网页的底部距离

// var loadState = null;//记录加载状态的变量
// window.onscroll = function(){
//  //如果接近底部
//  if(screen+100 >= compare){
//   //如果加载状态为null,则可以继续加载
//   if(!loadState){
//    loadState = setTimeout(function(){
//     alert("helll!")
//     //这里填写你所需要的操作...
//     //下面的是必须的
//     clearTimeout(loadState);
//     loadState = null;//设置为空,否则清除掉也没用
//    },2000);
//   }
//  }
// }

// 返回顶部按钮js部分
$(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });
       // 点击后滑动条距顶部高度设为0
       $('#back-to-top').click(function () {
           $('#back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
       $('#back-to-top').tooltip('show');

});



