

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

function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

//可视窗口高度
function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

//滚动条滚动高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }

    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}


/*
当滚动条滑动，触发事件，判断是否到达最底部
然后调用ajax处理函数异步加载数据
*/
window.onscroll = function () {
    //监听事件内容
    if (getScrollHeight() == getWindowHeight() + getDocumentTop()) {
        //当滚动条到底时,这里是触发内容
        //异步请求数据,局部刷新dom
        $("#myModal").modal("show");
    }
}

    