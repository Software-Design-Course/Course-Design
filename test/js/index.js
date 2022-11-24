

function add_more(){
    var table1=document.getElementById('table1');/* 找到id为table1的元素 */
    var child=document.createElement('a');/* 在id为table1中新增a链接 */
    // 设置a链接元素属性
    child.href="#";
    child.target="_blank";
    // 新建a链接下的div
    var child_child=document.createElement('div');
    // 设置div属性
    child_child.setAttribute('class','text_geng');
    // 需要优化的地方：如何在加载源码的同时带上p标签的style
    child_child.innerHTML=" <h4>芭比Q了</h4><h5>简介:</h5><p>芭比q,谐音barbecue,原意为烧烤,在网络用语中“芭比q了”意为“完蛋了”(被烧烤=被火化=完蛋了)。</p>"
    
    child.appendChild(child_child);
    table1.appendChild(child);
}