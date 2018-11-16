//表单校验
$(function(){
$('#form').bootstrapValidator({
  /*  //配置校验图标
  feedbackIcons:{
    valid:"glyphicon glyphicon-ok",
    invalid:'glyphicon glyphicon-remove',
    validating:'glyphicon glyphicon-refresh'
  }, */ 
  //指定校验字段
  fields:{
    username:{
      validators:{
        notEmpty:{
          message:"用户名不能为空"
        },
        //长度校验
        stringLenght:{
          min:6,
          max:30,
          message:"用户名长度必须在6到30之间"
        },
        //正则校验
        rregexp:/^[a-zA-Z0-9\.]+$/,
        meassage:"用户名由数字，字母，下划线和·组成"
      }
    },
    password:{
      validators:{
        notEmpty:{
          message:"用户名不能为空"
        },
        //长度校验
        stringLenght:{
          min:6,
          max:30,
          message:"用户名长度必须在6到30之间"
        },
        callback:{
          meassage:"密码错误"
        }
      }

    }
  }
 });
$('#form').on('success.form.bv',function(e){
  e.preventDefault();
  console.log('校验通过，通过ajax提交');
  $.ajax({
    url:'/employee/employeeLogin',
    data:$('#form').serialize(),
    type:"post",
    dataType:"json",
    success:function(info){
    console.log(info);
    if(info.success){
      location.href = "index.html";
    }
    if(info.error === 1000){
      alert("用户名不存在");
    }
    if(info.error === 1001){
      alert("密码错误");
    }
  }
  })
  
});



//重置功能
$("[type='reset']").click(function(){
  $('#form').data("bookstrapValidator").resetForm();
})
})
