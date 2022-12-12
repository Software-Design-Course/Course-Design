const loname = document.querySelector('#loname');
const lopsw = document.querySelector('#lopsw');
const crname = document.querySelector('#crname');
const crpsw = document.querySelector('#crpsw');
const container = document.querySelector('#container');
const signInButton = document.querySelector('#signIn');
const signUpButton = document.querySelector('#signUp');
const loginButton = document.querySelector('#btn01');
const registerButton = document.querySelector('#btn11');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'))
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'))

loginButton.addEventListener('click', function () {

    if (loname.value != "" && lopsw.value != "") {
        if (localStorage.getItem(loname.value) == null) {
            //可以注册
            alert("对不起，查无此人！");
        }
        else {
            if (lopsw.value == localStorage.getItem(loname.value)) {
                alert("登陆成功！");
                //把表单的action改为2.jsp
                document.form1.action = "./index.html";
                document.form1.submit();
            }
            else {
                alert("密码错误！");
            }
        }
    }
    else {
        alert("用户名或密码为空！");
    }
    //登陆部分
})

registerButton.addEventListener('click', function () {
    if (crname.value != "" && crpsw.value != "") {
        if (localStorage.getItem(crname.value) == null) {
            //可以注册
            // 注册成功
            localStorage.setItem(crname.value, crpsw.value);
            console.log(localStorage.getItem(crname.value));
            alert("注册成功！");
            document.form2.action = "./index.html";
            document.form2.submit();
        }
        else
            alert("该用户名已经被注册！");
    }
    else {
        alert("用户名或密码为空！");
    }
})
