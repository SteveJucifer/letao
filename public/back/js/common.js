//进度条
//开启进度条
$(document).ajaxStart(function(){
  NProgress.start();
})
$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500)
});
//
if(location.href.indexOf("login.html") === -1){
  $.ajax({
    url:'/employee/checkRootLogin',
    Type:'get',
    success:function(info){
    console.log(info);
    if(info.success){
      console.log("登录了");
    }
    if(info.error === 400){
      location.href = "login.html";
    }
  }
  })
}
//jQuery入口函数，等daom结构加载完成后执行
$(function(){
  //导航点击切换功能
  $('.category').click(function(){
    $(this).next().stop().slideToggle();
  });
  //2.左侧菜单列表切换功能
  $('.icon_menu').click(function(){
     $('.lt_aside').toggleClass("hidemenu");
     $('.lt_main').toggleClass("hidemenu");
     $('.lt-topbar').toggleClass("hidemenu");
  });

  //3.退出功能
  $('.icon_logout').click(function(){
    $('#logoutModel').modal("show");
  });

//4.发送ajax让后台删除登录记录
$('#logoutBtn').click(function(){
  // alert("恭喜");
  $.ajax({
    url:'/employee/employeeLogout',
    type:'get',
    dataType:'json',
    success:function(info){
    console.log(info);
    if(info.success){
      location.href="login.html"
    } 
  }
  });
})
})


