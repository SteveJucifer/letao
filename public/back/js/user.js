$(function() {
  var currentPage = 1; // 当前页
  var pageSize = 5; // 每页条数

  var currentId; // 当前正在修改的用户 id
  var isDelete;  // 需要修改的状态

  // 一进入页面, 发送ajax请求, 获取数据, 进行页面动态渲染
  render();

  // 根据 currentPage 和 pageSize 发送请求, 渲染页面
  function render() {
    $.ajax({
      type: "get",
      url: "/user/queryUser",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function( info ) {
        console.log( info );
        // 生成 htmlStr, 将来进行渲染
        // 参数1: 模板id, 参数2: 数据对象
        // 在模板中, 可以直接访问传进去对象中的所有属性
        var htmlStr = template("tmp", info );

        $('tbody').html( htmlStr );

        // 进行分页初始化
        $('#paginator').bootstrapPaginator({
          // 版本号
          bootstrapMajorVersion: 3,
          // 总页数
          totalPages: Math.ceil( info.total / info.size ),
          // 当前页
          currentPage: info.page,
          // 点击事件
          onPageClicked: function( a, b, c, page ) {
            // 根据 page , 请求对应页的数据, 进行渲染
            currentPage = page;

            // 调用 render 重新渲染
            render();
          }
        })
      }
    });
  }

  //通过事件委托给按钮注册点击事件
  $('.lt_content tbody').on("click","btn",function(){
    $('userModal').modal("show");
    var id = $(this).parent().data("id");
    var isDelete = $(this).hasClass("btn-success")? 1:0;
    console.log(id);
    console.log(isDelete);
    
  })
  
})